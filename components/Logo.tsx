export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 20V14a8 8 0 0 1 16 0v6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M18 22h28a10 10 0 0 1 10 10.5l-1 8a8 8 0 0 1-13.4 5.7L37 41.6a7 7 0 0 0-10 0L22.4 46.2A8 8 0 0 1 9 40.5l-1-8A10 10 0 0 1 18 22Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M22 30v8M18 34h8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="42" cy="30" r="1.8" fill="currentColor" />
      <circle cx="47" cy="35" r="1.8" fill="currentColor" />
      <circle cx="42" cy="40" r="1.8" fill="currentColor" />
      <circle cx="37" cy="35" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 text-cream" />
      <span className="font-display text-lg leading-none tracking-tight text-cream">
        BIGLOOP<span className="block text-[0.55em] tracking-[0.35em] text-muted">STUDIO</span>
      </span>
    </div>
  );
}
