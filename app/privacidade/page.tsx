import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Política de Privacidade — BringmeStudio",
  description:
    "Como os jogos e apps da BringmeStudio tratam dados: AdMob, Google Play Games e progresso salvo no aparelho.",
};

const UPDATED = "2 de outubro de 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl text-cream">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function Privacidade() {
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
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted">Última atualização: {UPDATED}</p>
        </div>

        <Section title="A quem se aplica">
          <p>
            Esta política vale para os jogos e apps publicados pela BringmeStudio (razão social Andre
            Casagrande, CNPJ 67.307.831/0001-81) no Google Play,
            incluindo <strong className="text-cream">Capivaras: Defesa da Lagoa</strong> e{" "}
            <strong className="text-cream">Empilha!</strong>. Ela explica quais dados são usados,
            por quem e para quê.
          </p>
        </Section>

        <Section title="Dados que nós coletamos">
          <p>
            A BringmeStudio não pede nome, e-mail, telefone nem cria contas próprias nos jogos. O
            progresso (fases liberadas, estrelas, configurações de som) fica salvo apenas no seu
            aparelho e é apagado se você desinstalar o jogo.
          </p>
        </Section>

        <Section title="Anúncios (Google AdMob)">
          <p>
            Alguns jogos exibem anúncios do Google AdMob. Para mostrar e medir anúncios, o Google
            pode coletar o identificador de publicidade do aparelho, informações técnicas (modelo,
            sistema, idioma), endereço IP e dados de interação com os anúncios.
          </p>
          <p>
            Onde a lei exigir, o jogo pede seu consentimento antes de exibir anúncios
            personalizados. Você pode redefinir ou desativar o identificador de publicidade nas
            configurações do Android, em <em>Google › Anúncios</em>.
          </p>
          <p>
            Saiba como o Google usa esses dados em{" "}
            <a className="text-cream underline decoration-accent underline-offset-4 hover:text-accent" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
              policies.google.com/technologies/partner-sites
            </a>
            .
          </p>
        </Section>

        <Section title="Google Play Games">
          <p>
            Se você entrar com o Google Play Games, o jogo usa seu perfil de jogador para
            conquistas, placares e salvamento na nuvem. Esses dados ficam na sua conta Google e são
            regidos pela{" "}
            <a className="text-cream underline decoration-accent underline-offset-4 hover:text-accent" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Política de Privacidade do Google
            </a>
            .
          </p>
        </Section>

        <Section title="Compras no app">
          <p>
            Compras são processadas pelo Google Play. A BringmeStudio recebe apenas a confirmação
            da compra para liberar o item, nunca os dados do seu cartão ou forma de pagamento.
          </p>
        </Section>

        <Section title="Crianças">
          <p>
            Não coletamos intencionalmente dados pessoais de crianças. Quando um jogo também é
            destinado a crianças, os anúncios são configurados como direcionados a crianças e
            famílias, conforme as políticas do Google Play e do AdMob, sem anúncios personalizados.
          </p>
        </Section>

        <Section title="Seus direitos (LGPD)">
          <p>
            Você pode pedir informações, correção ou exclusão de dados relacionados aos nossos
            jogos pelo e-mail abaixo. Dados de anúncios e do Play Games são controlados pelo Google
            e podem ser gerenciados na sua conta Google.
          </p>
        </Section>

        <Section title="Contato">
          <p>
            BringmeStudio — Andre Casagrande, CNPJ 67.307.831/0001-81 —{" "}
            <span className="select-all font-semibold text-cream">{LINKS.email}</span>
          </p>
          <p>Se esta política mudar, a data no topo da página será atualizada.</p>
        </Section>
      </article>

      <Footer />
    </main>
  );
}
