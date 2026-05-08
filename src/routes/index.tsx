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
    <main className="relative min-h-screen w-full flex flex-col items-center text-foreground overflow-x-hidden bg-[#020617]">
      {/* 1. Cinematic Background Layer - Show more background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.35] scale-100"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
      
      {/* 2. Sophisticated Blue Overlay & Depth Gradients - Adjusted for visibility */}
      <div 
        className="fixed inset-0 z-[1]"
        style={{
          background: "radial-gradient(circle at center, rgba(30, 58, 138, 0.15) 0%, rgba(2, 6, 23, 0.85) 100%)"
        }}
      />

      {/* 3. Tech Elements: HUD & Refined Coordinates */}
      <div className="fixed inset-0 z-[2] opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} 
      />
      
      <div className="fixed inset-0 z-[3] pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] animate-pulse rounded-full" />
        
        {/* Sophisticated Coordinates */}
        <div className="absolute top-6 left-6 flex gap-10 opacity-20">
          <span className="font-mono text-[7px] tracking-[0.3em] text-white/60 font-thin uppercase">LAT: 23°33'01.9"S</span>
          <span className="font-mono text-[7px] tracking-[0.3em] text-white/60 font-thin uppercase">LONG: 46°38'00.0"W</span>
        </div>
      </div>

      {/* Main Content - Adjusted for better proportions */}
      <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center gap-10 px-6 py-16">
        
        {/* Hero Section with Resized Logo */}
        <div className="flex flex-col items-center gap-6 w-full animate-[fadeUp_1.5s_ease-out_both]">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/15 blur-[60px] rounded-full animate-[pulse_5s_ease-in-out_infinite]" />
            <img
              src={logo}
              alt="Galli Topografia"
              className="relative h-auto w-full max-w-[240px] md:max-w-[280px] object-contain drop-shadow-[0_0_12px_rgba(0,120,255,0.15)]"
            />
          </div>
          
          <div className="text-center space-y-3">
            <h1 className="sr-only">GALLI TOPOGRAFIA</h1>
            <div className="h-[1px] w-12 bg-blue-500/30 mx-auto" />
            <p className="text-[10px] md:text-[11px] font-light tracking-[0.2em] text-white/70 max-w-[280px] mx-auto leading-relaxed">
              Regularização e Georreferenciamento de Imóveis
            </p>
          </div>
        </div>

        {/* Scaled Down Premium Navigation Cards */}
        <nav className="flex w-full flex-col gap-4 animate-[fadeUp_1.5s_ease-out_0.3s_both]">
          {links.map(({ href, label, desc, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between p-4 md:p-5 rounded-xl transition-all duration-700 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-1"
              style={{ 
                animationDelay: `${0.5 + i * 0.1}s`,
                background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-blue-400/40 group-hover:bg-blue-500/5 transition-all duration-700 shadow-inner">
                  <Icon className="h-5 w-5 text-white/50 group-hover:text-blue-400 transition-colors duration-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] md:text-[14px] font-medium tracking-wide text-white/90 group-hover:text-white transition-colors duration-500">
                    {label}
                  </span>
                  <span className="text-[9px] font-light tracking-widest text-white/25 group-hover:text-white/50 transition-colors duration-500 uppercase">
                    {desc}
                  </span>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center w-6 h-6">
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                <svg 
                  className="w-3.5 h-3.5 text-white/20 group-hover:text-blue-400 transition-all duration-700 group-hover:translate-x-1" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </nav>

        {/* Refined Footer */}
        <footer className="mt-10 flex flex-col items-center gap-5 animate-[fadeUp_1.5s_ease-out_1s_both]">
          <div className="flex gap-4 items-center opacity-10">
            <div className="w-[1px] h-3 bg-white" />
            <div className="w-[1px] h-3 bg-white" />
            <div className="w-[1px] h-3 bg-white" />
          </div>
          <p className="text-[7px] uppercase tracking-[0.5em] text-white/20 font-light text-center">
            © 2026 // GALLI PRECISION GROUP
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </main>
  );
}
