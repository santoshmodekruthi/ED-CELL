const API_URL = "http://localhost:5000/api";

function authHeaders() {
  const token = localStorage.getItem("edcell_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request failed (${res.status})`);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  // Public reads
  getEvents: () => request("/events"),
  getMentors: () => request("/mentors"),
  getGallery: () => request("/gallery"),
  getAnnouncements: () => request("/announcements"),
  getContent: () => request("/content"),

  // Auth
  login: (username, password) =>
    request("/auth/login", { method: "POST", body: JSON.stringify({ username, password }) }),

  // Admin: events
  getAllEvents: () => request("/events/all"),
  createEvent: (data) => request("/events", { method: "POST", body: JSON.stringify(data) }),
  updateEvent: (id, data) => request(`/events/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteEvent: (id) => request(`/events/${id}`, { method: "DELETE" }),

  // Admin: mentors
  createMentor: (data) => request("/mentors", { method: "POST", body: JSON.stringify(data) }),
  updateMentor: (id, data) => request(`/mentors/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteMentor: (id) => request(`/mentors/${id}`, { method: "DELETE" }),

  // Admin: gallery
  createGalleryItem: (data) => request("/gallery", { method: "POST", body: JSON.stringify(data) }),
  deleteGalleryItem: (id) => request(`/gallery/${id}`, { method: "DELETE" }),

  // Admin: announcements
  getAllAnnouncements: () => request("/announcements/all"),
  createAnnouncement: (data) => request("/announcements", { method: "POST", body: JSON.stringify(data) }),
  updateAnnouncement: (id, data) =>
    request(`/announcements/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteAnnouncement: (id) => request(`/announcements/${id}`, { method: "DELETE" }),

  // Admin: site content
  updateContent: (data) => request("/content", { method: "PUT", body: JSON.stringify(data) }),

  // Contact
  submitContact: (data) => request("/contact", { method: "POST", body: JSON.stringify(data) }),
};

export default api;
