import { Clock } from "lucide-react";
import { LINKS } from "@/lib/links";
import { Reveal } from "./motion/Reveal";
import { TapLink } from "./motion/TapLink";

export function SteamSection() {
  return (
    <section id="steam" className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-start gap-8 rounded-3xl border border-white/5 bg-surface2 p-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Steam
            </p>
            <h2 className="mt-4 font-display text-2xl uppercase text-cream sm:text-3xl">
              Em breve, oficialmente na Steam
            </h2>
            <p className="mt-4 text-muted">
              Estamos transformando nosso perfil em uma página oficial de
              desenvolvedora na Steam. Acompanhe o processo e nos siga desde
              já para não perder o lançamento.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
              <Clock className="h-3.5 w-3.5" />
              Página de empresa em breve
            </span>
            <TapLink
              href={LINKS.steam}
              className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent"
            >
              Ver perfil na Steam
            </TapLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
