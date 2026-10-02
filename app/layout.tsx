import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://big-loop-studio-site.vercel.app"),
  title: "BringmeStudio — Estúdio de Jogos e Arte 3D",
  description:
    "BringmeStudio é um estúdio de desenvolvimento de jogos e arte 3D. Confira nossos assets na Fab, jogos no Roblox e em breve na Steam.",
  keywords: [
    "BringmeStudio",
    "Unreal Engine",
    "Blender",
    "Maya",
    "Fab",
    "Roblox",
    "Steam",
    "estúdio de jogos",
    "arte 3D",
  ],
  openGraph: {
    title: "BringmeStudio — Estúdio de Jogos e Arte 3D",
    description:
      "Grandeza na criação. Evolução constante. Assets na Fab, jogos no Roblox e em breve na Steam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
