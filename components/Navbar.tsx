import Link from "next/link";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Fab", href: "#fab" },
  { label: "Roblox", href: "#roblox" },
  { label: "Steam", href: "#steam" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="hidden rounded-full border border-cream/20 px-4 py-2 text-sm font-medium text-cream transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          Fale conosco
        </a>
      </nav>
    </header>
  );
}
