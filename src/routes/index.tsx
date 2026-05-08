import { createFileRoute } from "@tanstack/react-router";
import { Globe, MessageCircle, Calendar, Instagram, Facebook } from "lucide-react";
import logo from "/galli-logo-new.png";
import bg from "/galli-final-bg.png";

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
    <main 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-foreground"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bg})` }}
    >

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 px-5 py-10">
        <div className="animate-[fadeUp_0.6s_ease-out_both] w-full px-4 flex justify-center">
          <img
            src={logo}
            alt="Galli Topografia"
            className="h-auto w-full max-w-[320px] object-contain"
          />
        </div>

        <header className="text-center animate-[fadeUp_0.6s_ease-out_0.1s_both]">
          <h1 className="sr-only">
            GALLI TOPOGRAFIA
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Topografia e Georreferenciamento
          </p>
          <p className="mx-auto mt-3 max-w-[280px] text-xs leading-relaxed text-muted-foreground">
            Regularizamos o seu imóvel com agilidade e compromisso 🤝
          </p>
        </header>

        <nav className="mt-4 flex w-full flex-col gap-4">
          {links.map(({ href, label, desc, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-full bg-white/10 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:bg-white/20 border border-white/20 animate-[fadeUp_0.5s_ease-out_both]"
              style={{
                animationDelay: `${0.18 + i * 0.08}s`,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Icon className="h-6 w-6 text-white" />
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-white">{label}</span>
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-white/40" />
              </div>
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
