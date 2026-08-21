/**
 * NEC (part of ED Cell) navigation configuration.
 *
 * Change ONLY this value to control where the "NEC" links across the
 * entire site (navbar, mobile menu, footer) point to.
 *
 * - Internal route (default): "/nec"
 * - External site: "https://actual-nec-website.com"
 *
 * The rest of the app (see src/lib/nec.js) automatically detects whether
 * this is an internal route or an external URL and handles navigation
 * accordingly — no other files need to change.
 */
export const NEC_URL = "/nec";
