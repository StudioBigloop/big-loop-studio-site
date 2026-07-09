import { ArrowUpRight, Key, Swords, FlaskConical } from "lucide-react";
import { LINKS } from "@/lib/links";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { TapLink } from "./motion/TapLink";

const HIGHLIGHTS = [
  {
    icon: Swords,
    title: "Armas estilizadas",
    text: "Coleção de armas com acabamento outline/stylized, prontas para prototipagem rápida ou jogos finais.",
  },
  {
    icon: Key,
    title: "Chaves de fantasia",
    text: "Set de chaves ornamentadas com variações de estilo, ideais para RPGs e jogos de exploração.",
  },
  {
    icon: FlaskConical,
    title: "Props e sistemas",
    text: "Props modelados com atenção a detalhe, além de um sistema de jogo completo pronto para integrar.",
  },
];

export function FabSection() {
  return (
    <section id="fab" className="bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Loja na Fab · Epic Games
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase text-cream sm:text-4xl">
              Assets 3D prontos para o seu projeto
            </h2>
            <p className="mt-4 text-muted">
              Nosso catálogo na Fab reúne 9 assets e 1 sistema de jogo
              completo para Unreal Engine — nossa frente mais ativa hoje.
            </p>
          </div>
          <TapLink
            href={LINKS.fab}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent"
          >
            Ver loja completa
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </TapLink>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <RevealItem
              key={title}
              hoverLift
              className="rounded-2xl border border-white/5 bg-surface2 p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-base uppercase text-cream">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
