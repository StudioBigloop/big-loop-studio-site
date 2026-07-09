import { ArrowRight, Gamepad2 } from "lucide-react";
import { LogoMark } from "./Logo";
import { LINKS } from "@/lib/links";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24"
    >
      <div className="absolute inset-0 bg-grid-fade bg-grid opacity-80" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cream/10 bg-surface">
          <LogoMark className="h-11 w-11 text-cream" />
        </div>

        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <Gamepad2 className="h-4 w-4" />
          Estúdio de jogos &amp; arte 3D
        </p>

        <h1 className="font-display text-balance text-5xl uppercase leading-[1.05] text-cream sm:text-6xl md:text-7xl">
          Grandeza na criação.
          <br />
          Evolução constante.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted">
          A Big Loop Studio cria experiências digitais com Unreal Engine,
          Blender e Maya — de assets estilizados a jogos completos, do
          conceito ao lançamento.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={LINKS.fab}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent"
          >
            Ver assets na Fab
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#roblox"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-accent hover:text-accent"
          >
            Jogar no Roblox
          </a>
        </div>
      </div>
    </section>
  );
}
