"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Fab", href: "#fab" },
  { label: "Roblox", href: "#roblox" },
  { label: "Steam", href: "#steam" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/5 bg-ink/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
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
      <motion.div
        className="h-[2px] origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
