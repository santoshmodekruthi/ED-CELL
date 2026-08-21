import { useEffect, useState } from "react";
import api from "../lib/api.js";
import { siteContent, mentors, events, galleryItems, announcements } from "../lib/placeholderContent.js";

/**
 * Loads all public content the homepage needs. Tries the live API first
 * (so real admin-managed content shows once the backend is connected);
 * falls back to placeholder content per-section if a request fails,
 * so the site always renders something complete.
 */
export default function useSiteData() {
  const [data, setData] = useState({
    content: siteContent,
    mentors,
    events,
    gallery: galleryItems,
    announcements,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    Promise.allSettled([
      api.getContent(),
      api.getMentors(),
      api.getEvents(),
      api.getGallery(),
      api.getAnnouncements(),
    ]).then(([contentRes, mentorsRes, eventsRes, galleryRes, announcementsRes]) => {
      if (cancelled) return;
      setData({
        content: contentRes.status === "fulfilled" ? contentRes.value : siteContent,
        mentors: mentorsRes.status === "fulfilled" ? mentorsRes.value : mentors,
        events: eventsRes.status === "fulfilled" ? eventsRes.value : events,
        gallery: galleryRes.status === "fulfilled" ? galleryRes.value : galleryItems,
        announcements: announcementsRes.status === "fulfilled" ? announcementsRes.value : announcements,
        loading: false,
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}
