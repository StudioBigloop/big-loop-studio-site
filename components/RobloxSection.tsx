import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { LINKS } from "@/lib/links";

const GAMES = [
  {
    title: "Mystic Slime Defense",
    description:
      "Defenda sua base contra hordas de slimes místicos em ondas cada vez mais desafiadoras.",
    href: LINKS.roblox.mysticSlimeDefense,
  },
  {
    title: "Blox Survival",
    description:
      "Sobreviva, construa e explore em um mundo hostil cheio de desafios a cada partida.",
    href: LINKS.roblox.bloxSurvival,
  },
];

export function RobloxSection() {
  return (
    <section id="roblox" className="bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Jogos no Roblox
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase text-cream sm:text-4xl">
          Jogue agora mesmo
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {GAMES.map((game) => (
            <a
              key={game.title}
              href={game.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface p-8 transition-colors hover:border-accent/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface2">
                <Gamepad2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 font-display text-xl uppercase text-cream">
                {game.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {game.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cream">
                Jogar agora
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
