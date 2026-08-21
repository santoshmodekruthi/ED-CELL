# ED Cell — Vignan Institute of Information Technology

A full-stack website for the Entrepreneurship Development Cell (ED Cell) at VIIT,
Visakhapatnam, including the NEC sub-site and a real admin panel backed by MongoDB.

```
ed-cell-website/
├── frontend/   React + Vite + Tailwind + Framer Motion
└── backend/    Node.js + Express + MongoDB (Mongoose) + Cloudinary
```

All content — events, mentors, gallery images, announcements, and site copy
(about/vision/mission/stats/contact/socials) — is stored in MongoDB and managed
from `/admin/dashboard`. Nothing needs to be hand-edited in the React code to
publish a new event.

---

## 1. Prerequisites

- Node.js 18+
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- A free [Cloudinary](https://cloudinary.com) account (for gallery image uploads)

---

## 2. MongoDB Atlas setup

1. Create a free cluster at cloud.mongodb.com.
2. Under **Database Access**, create a user with a username/password.
3. Under **Network Access**, allow your IP (or `0.0.0.0/0` for development).
4. Click **Connect → Drivers**, copy the connection string. It looks like:
   ```
   mongodb+srv://<user>:<password>@<cluster>.mongodb.net/edcell?retryWrites=true&w=majority
   ```
5. Paste it into `backend/.env` as `MONGODB_URI` (see step 4 below).

---

## 3. Cloudinary setup

1. Sign up at cloudinary.com and open your **Dashboard**.
2. Copy your **Cloud name**, **API Key**, and **API Secret**.
3. Paste them into `backend/.env` as `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`,
   and `CLOUDINARY_API_SECRET`.

Uploaded gallery images are stored in Cloudinary under the `edcell-viit` folder.

---

## 4. Backend setup

```bash
cd backend
cp .env.example .env
# edit .env and fill in MONGODB_URI, JWT_SECRET, CLOUDINARY_* values
npm install
npm run seed      # creates the first admin login + demo content
npm run dev        # starts the API on http://localhost:5000
```

The seed script prints the admin username/password it created
(defaults to `admin` / `changeme123` unless you set `SEED_ADMIN_USERNAME`
and `SEED_ADMIN_PASSWORD` env vars first). **Change this password after your
first login** — there is currently no in-app "change password" screen, so for
now update it directly in MongoDB Atlas (replace the `passwordHash` field with
a new bcrypt hash) or re-run the seed script against a fresh database.

## 5. Admin setup

1. Visit `http://localhost:5173/admin/login`.
2. Sign in with the username/password the seed script printed.
3. From the dashboard, go to **Events**, **Mentors**, **Gallery**,
   **Announcements**, or **Site Content** to manage everything live.

---

## 6. Frontend setup

```bash
cd frontend
cp .env.example .env
# edit .env if your backend isn't on localhost:5000
npm install
npm run dev         # starts the site on http://localhost:5173
```

---

## 7. Local development workflow

Run both servers side by side:

```bash
# terminal 1
cd backend && npm run dev

# terminal 2
cd frontend && npm run dev
```

Visit `http://localhost:5173`. The public site reads live data from the API;
if the API is unreachable it falls back to built-in placeholder content
(`frontend/src/lib/placeholderContent.js`) so the site never looks broken
during setup.

---

## 8. Changing the NEC URL

NEC is a sub-organization of ED Cell. Its link appears in the desktop navbar,
mobile menu, and footer — all three read from **one file**:

```
frontend/src/config/nec.js
```

```js
export const NEC_URL = "/nec";
```

- Leave it as `"/nec"` to use the built-in internal NEC page (React Router route).
- Replace it with a real URL, e.g. `"https://actual-nec-website.com"`, to make
  every NEC button open that external site in a new tab instead.

No other file needs to change — `NecLink.jsx` and the navbar/footer detect
whether the value is internal or external automatically.

---

## 9. Deployment

### Frontend → Vercel
1. Push this repo to GitHub.
2. Import the repo in Vercel, set the **root directory** to `frontend`.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Add environment variable `VITE_API_URL` pointing to your deployed backend,
   e.g. `https://edcell-api.onrender.com/api`.

### Backend → Render
1. Create a new **Web Service** in Render, root directory `backend`.
2. Build command: `npm install`. Start command: `npm start`.
3. Add environment variables from `backend/.env.example`
   (`MONGODB_URI`, `JWT_SECRET`, `CLOUDINARY_*`, `CORS_ORIGIN` — set this to
   your Vercel frontend URL, `PORT` is set automatically by Render).
4. After the first deploy, run the seed script once from the Render shell
   (`npm run seed`) or locally against the same `MONGODB_URI` to create the
   admin account and demo content.

### Database → MongoDB Atlas
Already hosted — just make sure Network Access allows connections from
Render's IP range (or `0.0.0.0/0`).

### Images → Cloudinary
Already hosted — no deployment step needed.

---

## 10. Connecting frontend to backend

The only thing linking the two apps is `VITE_API_URL` (frontend) matching the
deployed backend's `/api` base URL, and `CORS_ORIGIN` (backend) matching the
deployed frontend's origin. Update both when you move from localhost to
production URLs.

---

## 11. Project structure reference

```
backend/
├── config/        db.js, cloudinary.js
├── middleware/     auth.js (JWT), upload.js (Cloudinary/Multer)
├── models/         Event, Mentor, Gallery, Announcement, SiteContent, Admin
├── routes/         auth, events, mentors, gallery, announcements, content
├── seed.js         creates first admin + demo content
└── server.js       Express app entry point

frontend/src/
├── components/      Navbar, Footer, AdminLayout, ProtectedRoute
│   ├── sections/    Hero, About, Stats, Mentors, Events, Gallery, Announcements, CTA, Contact
│   └── ui/          Button, SectionHeading, AnimatedBackground, NecLink
├── config/nec.js     single-source NEC_URL
├── hooks/            useCountUp, useInView, useSiteData
├── lib/              api.js (REST client), AdminAuthContext.jsx, placeholderContent.js
├── pages/            Home.jsx, NEC.jsx
│   └── admin/        Login, Dashboard, Events, Mentors, Gallery, Announcements, SiteContent
└── App.jsx           routes
```

---

## 12. Known limitations / next steps

- There is no "forgot password" or in-app password-change flow for admins yet —
  rotate credentials via the seed script or directly in MongoDB Atlas.
- The gallery admin form currently accepts a pasted image URL; wiring the
  `<input type="file">` to `upload.single("image")` on `POST /api/gallery`
  (already supported server-side) is a small follow-up if direct file
  uploads from the browser are preferred over pasted URLs.
- Replace all placeholder names, bios, statistics, and contact details with
  real ED Cell information via the admin panel before going live.
