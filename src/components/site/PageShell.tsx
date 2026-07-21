import type { ReactNode } from "react";
import { Nav, StickyCall } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--cream)] text-[var(--ink)]">
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <StickyCall />
    </div>
  );
}
