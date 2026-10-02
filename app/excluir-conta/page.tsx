import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Excluir conta e dados — BringmeStudio",
  description:
    "Como pedir a exclusão da sua conta e dos seus dados nos jogos da BringmeStudio (Google Play Games, salvamento na nuvem, compras).",
};

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm text-ink">
        {n}
      </span>
      <div className="space-y-2">
        <h3 className="font-semibold text-cream">{title}</h3>
        <div className="space-y-2 text-[15px] leading-relaxed text-muted">{children}</div>
      </div>
    </li>
  );
}

export default function ExcluirConta() {
  return (
    <main className="bg-surface">
      <header className="border-b border-white/5 bg-ink">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/" className="text-sm font-medium text-muted transition-colors hover:text-accent">
            Voltar ao site
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl space-y-10 px-6 py-16">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Jogos e apps</p>
          <h1 className="font-display text-3xl text-cream [text-wrap:balance] sm:text-4xl">
            Excluir sua conta e seus dados
          </h1>
          <p className="text-[15px] leading-relaxed text-muted">
            Vale para os jogos da BringmeStudio no Google Play, como{" "}
            <strong className="text-cream">Capivaras: Defesa da Lagoa</strong>. Nossos jogos não
            criam contas próprias: o login é feito com a sua conta do Google Play Games.
          </p>
        </div>

        <ol className="space-y-8">
          <Step n={1} title="Apague os dados do jogo no Google Play Games">
            <p>
              O progresso salvo na nuvem, as conquistas e os placares ficam no seu perfil do Play
              Games. Para apagar: abra o app <em>Google Play Games</em> › seu perfil ›{" "}
              <em>Configurações</em> › <em>Excluir conta e dados do Play Games</em>, e escolha o
              jogo, ou exclua tudo.
            </p>
            <p>
              Você também pode gerenciar isso em{" "}
              <a className="text-cream underline decoration-accent underline-offset-4 hover:text-accent" href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                myaccount.google.com
              </a>
              .
            </p>
          </Step>
          <Step n={2} title="Apague os dados do aparelho">
            <p>
              Desinstalar o jogo apaga o progresso salvo no celular. Para só limpar, use{" "}
              <em>Configurações do Android › Apps › o jogo › Armazenamento › Limpar dados</em>.
            </p>
          </Step>
          <Step n={3} title="Peça a exclusão por e-mail (opcional)">
            <p>
              Se quiser que a gente confirme a exclusão de qualquer registro ligado a você (por
              exemplo, histórico de compras usado para liberar itens), envie um e-mail com o
              assunto <strong className="text-cream">“Excluir meus dados”</strong>, o nome do jogo e
              o e-mail da sua conta Google para:
            </p>
            <p>
              <span className="select-all font-semibold text-cream">{LINKS.email}</span>
            </p>
            <p>Respondemos em até 30 dias.</p>
          </Step>
        </ol>

        <section className="space-y-3 border-t border-white/5 pt-8 text-[15px] leading-relaxed text-muted">
          <h2 className="font-display text-xl text-cream">O que é apagado e o que fica</h2>
          <p>
            Apagamos todos os dados de jogo ligados à sua conta. Registros de compra podem ser
            mantidos pelo Google Play pelo prazo exigido em lei (fiscal e antifraude); isso é
            controlado pelo Google, não por nós. Anúncios: você pode redefinir o ID de publicidade
            nas configurações do Android.
          </p>
          <p>
            Responsável: BringmeStudio — Andre Casagrande, CNPJ 67.307.831/0001-81. Veja também a{" "}
            <Link className="text-cream underline decoration-accent underline-offset-4 hover:text-accent" href="/privacidade">
              Política de Privacidade
            </Link>
            .
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
