import { Instagram, Mail, Palette, Music2, Store } from "lucide-react";
import { Logo } from "./Logo";
import { LINKS } from "@/lib/links";

const SOCIALS = [
  { label: "Instagram", href: LINKS.instagram, icon: Instagram },
  { label: "TikTok", href: LINKS.tiktok, icon: Music2 },
  { label: "ArtStation", href: LINKS.artstation, icon: Palette },
  { label: "Fab", href: LINKS.fab, icon: Store },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-ink py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/5 pb-14 sm:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Grandeza na criação. Evolução constante. Vamos construir algo
              juntos?
            </p>
            <a
              href={`mailto:${LINKS.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {LINKS.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-cream transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Big Loop Studio. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
