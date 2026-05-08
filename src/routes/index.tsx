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
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center text-foreground overflow-x-hidden bg-[#050a14]">
      {/* Cinematic Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-[0.15] scale-110 blur-[80px]"
        style={{ backgroundImage: `url(${bg})` }}
      />
      
      {/* Tech Overlay: Grid & Coordinates */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Topographic Lines Emulation & Radial Gradients */}
      <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px]" />
        
        {/* HUD Elements */}
        <div className="absolute top-10 left-10 font-mono text-[8px] tracking-[0.2em] text-white/10 uppercase vertical-text">
          GPS_COORDINATES: -23.5505 / -46.6333
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-[8px] tracking-[0.2em] text-white/10 uppercase">
          SCANNING_TERRAIN_V.4.2
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-12 px-8 py-16">
        
        {/* Hero Section: Logo with Premium Breathing Animation */}
        <div className="relative group w-full flex justify-center animate-[fadeUp_1.2s_ease-out_both]">
          <div className="absolute inset-0 bg-blue-600/15 blur-[80px] rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
          <img
            src={logo}
            alt="Galli Topografia"
            className="relative h-auto w-full max-w-[280px] object-contain drop-shadow-[0_0_30px_rgba(0,102,255,0.2)]"
          />
        </div>

        {/* Typography Section */}
        <header className="text-center space-y-3 animate-[fadeUp_1.2s_ease-out_0.2s_both]">
          <h1 className="sr-only">GALLI TOPOGRAFIA</h1>
          <p className="text-sm uppercase tracking-[0.4em] font-light text-blue-400/80">
            Geotecnologia Premium
          </p>
          <div className="h-[1px] w-8 bg-blue-500/30 mx-auto" />
          <p className="text-[11px] md:text-xs font-light tracking-[0.1em] leading-relaxed text-white/40 max-w-[260px] mx-auto uppercase">
            Engenharia moderna e precisão agroespacial para o seu imóvel.
          </p>
        </header>

        {/* Premium Navigation Links */}
        <nav className="flex w-full flex-col gap-4 animate-[fadeUp_1.2s_ease-out_0.4s_both]">
          {links.map(({ href, label, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between overflow-hidden rounded-xl bg-white/[0.03] px-6 py-4 backdrop-blur-[20px] border border-white/[0.05] transition-all duration-700 hover:bg-white/[0.07] hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.1)]"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            >
              {/* Internal Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] group-hover:border-blue-500/20 group-hover:bg-blue-500/5 transition-all duration-500">
                  <Icon className="h-4 w-4 text-white/40 group-hover:text-blue-400 transition-colors duration-500" />
                </div>
                <span className="text-[13px] font-light tracking-[0.15em] text-white/70 group-hover:text-white group-hover:tracking-[0.18em] transition-all duration-500 uppercase">
                  {label}
                </span>
              </div>
              
              <div className="relative h-[1px] w-4 bg-white/10 group-hover:w-6 group-hover:bg-blue-500/50 transition-all duration-500" />
            </a>
          ))}
        </nav>

        {/* Minimalist Footer */}
        <footer className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-light animate-[fadeUp_1.2s_ease-out_0.8s_both]">
          EST. 2026 // GALLI_GROUP
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </main>
  );
}
