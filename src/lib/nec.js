import { NEC_URL } from "../config/nec.js";

/** True if NEC_URL points outside this app (http/https). */
export const isNecExternal = /^https?:\/\//i.test(NEC_URL);

/**
 * Returns props to spread onto a link/button so it correctly opens NEC
 * whether it's an internal React Router route or an external website.
 *
 * Usage:
 *   internal -> <Link to={NEC_URL}>NEC</Link>
 *   external -> <a href={NEC_URL} target="_blank" rel="noopener noreferrer">NEC</a>
 */
export function necLinkProps() {
  if (isNecExternal) {
    return { href: NEC_URL, target: "_blank", rel: "noopener noreferrer" };
  }
  return { to: NEC_URL };
}
