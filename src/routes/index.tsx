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
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-foreground overflow-x-hidden">
      {/* Background Image with optimized rendering */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-25"
        style={{ 
          backgroundImage: `url(${bg})`,
        }}
      />
      
      {/* Sophisticated Dark Gradient Overlay */}
      <div 
        className="fixed inset-0 z-[1]"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.78))"
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-10 px-6 py-12">
        {/* Logo Section with Soft Blue Glow */}
        <div className="relative animate-[fadeUp_0.8s_ease-out_both] flex justify-center w-full">
          <div 
            className="absolute inset-0 blur-[60px] rounded-full opacity-60"
            style={{ backgroundColor: "rgba(0,102,255,0.18)" }}
          />
          <img
            src={logo}
            alt="Galli Topografia"
            className="relative h-auto w-full max-w-[280px] md:max-w-[340px] object-contain drop-shadow-2xl"
          />
        </div>

        <header className="text-center animate-[fadeUp_0.8s_ease-out_0.2s_both] space-y-2">
          <h1 className="sr-only">GALLI TOPOGRAFIA</h1>
          <p className="text-lg md:text-xl font-medium tracking-tight text-white/95">
            Topografia e Georreferenciamento
          </p>
          <p className="mx-auto max-w-[300px] text-xs md:text-sm font-light leading-relaxed text-white/60">
            Regularizamos o seu imóvel com agilidade e compromisso 🤝
          </p>
        </header>

        <nav className="flex w-full flex-col gap-4 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
          {links.map(({ href, label, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between overflow-hidden rounded-full bg-white/[0.08] px-6 py-4 backdrop-blur-[14px] border border-white/[0.10] transition-all duration-500 hover:bg-white/[0.12] hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,102,255,0.15)]"
              style={{
                animationDelay: `${0.3 + i * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-4">
                <Icon className="h-5 w-5 text-white/80 transition-colors group-hover:text-blue-400" />
                <span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">
                  {label}
                </span>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all group-hover:bg-blue-500/60 group-hover:scale-125" />
            </a>
          ))}
        </nav>

        <footer className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/30 animate-[fadeUp_0.8s_ease-out_0.8s_both]">
          © 2026 Galli Topografia
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
