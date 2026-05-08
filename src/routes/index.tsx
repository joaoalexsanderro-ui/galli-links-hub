import { createFileRoute } from "@tanstack/react-router";
import { Globe, MessageCircle, Calendar, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/galli-logo.png";
import bg from "@/assets/galli-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Galli Topografia — Links" },
      { name: "description", content: "Topografia e Georreferenciamento. Regularizamos seu imóvel com agilidade e compromisso." },
      { property: "og:title", content: "Galli Topografia" },
      { property: "og:description", content: "Topografia e Georreferenciamento" },
    ],
  }),
});

type LinkItem = {
  href: string;
  label: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const links: LinkItem[] = [
  { href: "#", label: "Nosso Site", desc: "Conheça nossos serviços", Icon: Globe },
  { href: "https://wa.me/", label: "WhatsApp", desc: "Fale conosco agora", Icon: MessageCircle },
  { href: "#", label: "Agendar Visita Técnica", desc: "Marque um horário", Icon: Calendar },
  { href: "https://instagram.com/gallitopografia", label: "Instagram", desc: "@gallitopografia", Icon: Instagram },
  { href: "#", label: "Facebook", desc: "Siga nossa página", Icon: Facebook },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        className="fixed inset-0"
        style={{ background: "var(--gradient-overlay)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 px-5 py-10">
        <div className="animate-[fadeUp_0.6s_ease-out_both]">
          <img
            src={logo}
            alt="Galli Topografia"
            width={140}
            height={140}
            className="h-36 w-36 object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          />
        </div>

        <header className="text-center animate-[fadeUp_0.6s_ease-out_0.1s_both]">
          <h1 className="text-2xl font-bold tracking-wide text-foreground">
            GALLI <span className="text-gold">TOPOGRAFIA</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Topografia e Georreferenciamento
          </p>
          <p className="mx-auto mt-3 max-w-[280px] text-xs leading-relaxed text-muted-foreground">
            Regularizamos o seu imóvel com agilidade e compromisso 🤝
          </p>
        </header>

        <nav className="mt-2 flex w-full flex-col gap-3">
          {links.map(({ href, label, desc, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white/[0.12] animate-[fadeUp_0.5s_ease-out_both]"
              style={{
                animationDelay: `${0.18 + i * 0.08}s`,
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold/25">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </span>
            </a>
          ))}
        </nav>

        <footer className="mt-4 text-xs text-muted-foreground animate-[fadeUp_0.6s_ease-out_0.7s_both]">
          © 2026 Galli Topografia
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
