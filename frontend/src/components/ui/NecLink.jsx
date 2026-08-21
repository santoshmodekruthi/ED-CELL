import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { NEC_URL, } from "../../config/nec.js";
import { isNecExternal } from "../../lib/nec.js";

/**
 * Renders the NEC call-to-action consistently everywhere it appears
 * (desktop navbar, mobile menu, footer). Automatically becomes an
 * internal <Link> or an external <a> depending on NEC_URL.
 */
export default function NecLink({ className = "", children, ...rest }) {
  const content = (
    <>
      <span>{children || "NEC"}</span>
      <ArrowUpRight size={16} strokeWidth={2.5} />
    </>
  );

  if (isNecExternal) {
    return (
      <a
        href={NEC_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={NEC_URL} className={className} {...rest}>
      {content}
    </Link>
  );
}
