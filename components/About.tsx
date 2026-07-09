import { Layers, Sparkles, Wrench } from "lucide-react";

const PILLARS = [
  {
    icon: Layers,
    title: "Big",
    text: "A grandeza das nossas ideias e ambições guia cada projeto que colocamos no mundo.",
  },
  {
    icon: Sparkles,
    title: "Loop",
    text: "Nossa busca contínua por conhecimento, crescimento e evolução — um ciclo sem fim.",
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    text: "Unreal Engine, Blender e Maya para criar do estilizado ao realista, sem limites de estilo.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Sobre o estúdio
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase text-cream sm:text-4xl">
            Um estúdio de jogos e arte 3D comprometido com excelência
          </h2>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted">
            A Big Loop Studio é um estúdio de desenvolvimento de jogos e arte
            3D comprometido com excelência visual e inovação técnica.
            Trabalhamos com Unreal Engine, Blender e Maya para criar
            experiências digitais impactantes em uma ampla gama de estilos —
            do estilizado ao realista. Criamos com propósito. Evoluímos em
            loop.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-surface p-6"
            >
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-lg uppercase text-cream">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
