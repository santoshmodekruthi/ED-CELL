import React from "react";

export default function SkeletonCard() {
  return (
    <div className="rounded-3xl glass-panel overflow-hidden animate-pulse" aria-hidden="true">
      <div className="aspect-[16/10] bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
      <div className="p-6 space-y-3">
        <div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="h-3 w-full rounded bg-white/5" />
        <div className="h-3 w-5/6 rounded bg-white/5" />
        <div className="h-3 w-1/3 rounded bg-white/10 mt-4" />
      </div>
    </div>
  );
}
