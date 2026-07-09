"use client";

import { ArrowRight, Gamepad2 } from "lucide-react";
import { motion, useMotionValue, useTransform, type Variants } from "framer-motion";
import { LogoMark } from "./Logo";
import { LINKS } from "@/lib/links";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useTransform([mouseX, mouseY], ([x, y]) =>
    `radial-gradient(500px circle at ${x}px ${y}px, rgba(255,122,41,0.16), transparent 70%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24"
    >
      <div className="absolute inset-0 bg-grid-fade bg-grid opacity-80" />
      <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] animate-float rounded-full bg-accent/10 blur-[120px]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: spotlight }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-cream/10 bg-surface"
        >
          <LogoMark className="h-11 w-11 text-cream" />
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
        >
          <Gamepad2 className="h-4 w-4" />
          Estúdio de jogos &amp; arte 3D
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance font-display text-5xl uppercase leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          Grandeza na criação.
          <br />
          Evolução constante.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-lg italic text-muted"
        >
          &ldquo;Se for difícil, eu faço. Se for impossível, me dá 5
          minutos.&rdquo;
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href={LINKS.fab}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-accent"
          >
            Ver assets na Fab
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#roblox"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-accent hover:text-accent"
          >
            Jogar no Roblox
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
