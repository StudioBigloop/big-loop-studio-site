# Big Loop Studio — Site

Site institucional da Big Loop Studio. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Estrutura

- `app/` — páginas e layout (App Router)
- `components/` — Navbar, Hero, About, FabSection, RobloxSection, SteamSection, Footer, Logo
- `lib/links.ts` — todos os links externos (Fab, Roblox, Steam, redes sociais) centralizados em um só lugar

## Rodando localmente

```
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy no Vercel

1. Suba este projeto para um repositório no GitHub
2. Em https://vercel.com, clique em "Add New Project" e importe o repositório
3. O Vercel detecta Next.js automaticamente — não precisa configurar nada
4. Clique em Deploy

Depois disso, todo push na branch principal faz deploy automático.

## Pendências de conteúdo

Ver nota `Site (Website)` no cofre Obsidian "Big Loop Studio" para a lista completa, mas em resumo:

- Logo em SVG/PNG oficial de alta resolução (hoje o site usa uma versão recriada em SVG como placeholder, em `components/Logo.tsx`)
- Lista completa dos 10 itens da loja na Fab com nomes e links individuais
- Descrições e screenshots definitivos dos jogos de Roblox
- Domínio próprio, se desejar (opcional)
