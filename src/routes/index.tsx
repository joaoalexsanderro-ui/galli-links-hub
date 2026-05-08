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
      {/* 1. Cinematic Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.2] scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      />
      
      {/* 2. Sophisticated Blue Overlay & Gradients */}
      <div 
        className="fixed inset-0 z-[1]"
        style={{
          background: "radial-gradient(circle at center, rgba(30, 58, 138, 0.3) 0%, rgba(2, 6, 23, 0.95) 100%)"
        }}
      />

      {/* 3. Tech Elements: Grid & HUD */}
      <div className="fixed inset-0 z-[2] opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />
      
      {/* 4. Topographic Lines & Particle Simulation (Swaying Glows) */}
      <div className="fixed inset-0 z-[3] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] animate-pulse rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] animate-pulse rounded-full" style={{ animationDelay: '2s' }} />
        
        {/* Discrete Coordinates */}
        <div className="absolute top-8 left-8 flex gap-8">
          <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">Lat: -23.550520</span>
          <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">Long: -46.633308</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center gap-12 px-6 py-20">
        
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 w-full animate-[fadeUp_1.5s_ease-out_both]">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
            <img
              src={logo}
              alt="Galli Topografia"
              className="relative h-auto w-full max-w-[300px] object-contain"
            />
          </div>
          
          <div className="text-center space-y-3">
            <h1 className="sr-only">GALLI TOPOGRAFIA</h1>
            <div className="h-[1px] w-12 bg-blue-500/40 mx-auto" />
            <p className="text-[10px] md:text-[11px] font-light tracking-[0.2em] text-white/50 uppercase max-w-[280px] mx-auto">
              Geotecnologia e Precisão Geoespacial
            </p>
          </div>
        </div>

        {/* Premium Navigation Cards */}
        <nav className="flex w-full flex-col gap-5 animate-[fadeUp_1.5s_ease-out_0.3s_both]">
          {links.map(({ href, label, desc, Icon }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.06] hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-1"
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              {/* Card Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/[0.02] to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative flex items-center gap-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-blue-400/30 transition-all duration-500">
                  <Icon className="h-6 w-6 text-white/60 group-hover:text-blue-400 transition-colors duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium tracking-wide text-white/90 group-hover:text-white transition-colors">
                    {label}
                  </span>
                  <span className="text-[10px] font-light tracking-wider text-white/30 group-hover:text-white/50 transition-colors">
                    {desc}
                  </span>
                </div>
              </div>
              
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <svg 
                  className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-all duration-500 group-hover:translate-x-1" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center gap-4 animate-[fadeUp_1.5s_ease-out_1s_both]">
          <div className="flex gap-4 items-center opacity-20">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-light">
            © 2026 // Galli Precision Group
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); filter: blur(15px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </main>
  );
}
