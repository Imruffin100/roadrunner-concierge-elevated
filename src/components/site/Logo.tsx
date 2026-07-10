import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/roadrunner-logo-sharp.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="Roadrunner Express — Courier & Concierge for Seniors home">
      <img
        src={logoSrc}
        alt="Roadrunner Express — Courier & Concierge for Seniors"
        className="h-14 w-auto md:h-16"
        width={512}
        height={512}
        decoding="async"
      />
    </Link>
  );
}