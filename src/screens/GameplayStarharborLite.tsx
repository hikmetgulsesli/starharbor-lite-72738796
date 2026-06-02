// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - StarHarbor Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Fuel, Pause, Ruler, Settings, Shield } from "lucide-react";


export type GameplayStarharborLiteActionId = "pause-1" | "settings-2" | "resume-flight-3";

export interface GameplayStarharborLiteProps {
  actions?: Partial<Record<GameplayStarharborLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayStarharborLite({ actions, runtime }: GameplayStarharborLiteProps) {
  void runtime;
  return (
    <>
      {/* Background Space Field */}
      <div className="absolute inset-0 z-0 bg-surface-container-lowest" style={{backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 219, 231, 0.05) 0%, transparent 60%)"}}>
      {/* Asteroids & Shuttle Placeholder */}
      <div className="absolute inset-0 opacity-80" data-alt="A deep space starfield with glowing nebulas in dark blues and cyan. High-octane, futuristic minimalist aesthetic with a high-tech starship vibe. Deep translucent layers maintain a sense of depth while ensuring critical data remains legible. Vibrant neon accents provide a glowing digital aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATSOaZOa8gflLcNXAFH7_ubCRanBMl4rDLMTBEImP2HUf5aiIl2xjE3yJOT0H8Vb4Swc4nzvSfgwvAR1I3mKPwtfDR_2ix1o81SVGMCff1ntqYqOW1qk2kSeu2ytJ4LL46jLQbSTs_VqKw1D7efhnAaTZOcJ-wIWA-LJsCDWJ09P2XxXoN8CsadjyqvlVIjmg8JTlSYqdR9HBGXzPPUZtW6EbsM4TYmQ4nMZWZYIuxSxAvDBbM7zN0rzVCMGyKYJZ-OoNY6IlidSg')", backgroundSize: "cover", backgroundPosition: "center", mixBlendMode: "screen"}}>
      </div>
      {/* Drifting Asteroids (CSS animated representations) */}
      <div className="asteroid absolute top-1/4 left-1/4 w-32 h-32 bg-surface-variant/40 backdrop-blur-md rounded-full border border-outline-variant/30 blur-[2px]"></div>
      <div className="asteroid absolute bottom-1/3 right-1/4 w-48 h-48 bg-surface-container/50 backdrop-blur-sm rounded-full border border-surface-tint/10" style={{animationDelay: "-5s", animationDuration: "25s"}}></div>
      <div className="asteroid absolute top-1/2 right-1/3 w-16 h-16 bg-surface-bright/30 backdrop-blur-lg rounded-full border border-outline-variant/50" style={{animationDelay: "-12s", animationDuration: "15s"}}></div>
      {/* Player Shuttle (Center) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-16 flex flex-col items-center justify-center hud-glow">
      <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[32px] border-b-surface-tint"></div>
      <div className="w-8 h-4 bg-primary/80 mt-1 rounded-sm blur-[1px]"></div>
      <div className="w-4 h-6 bg-primary-container blur-[4px] mt-1"></div> {/* Thruster flame */}
      </div>
      {/* Beacon */}
      <div className="absolute top-1/4 right-1/4 z-10 flex flex-col items-center">
      <div className="w-4 h-4 bg-primary rounded-full animate-pulse hud-glow"></div>
      <span className="font-label-mono text-label-mono text-primary mt-unit">BEACON-X</span>
      </div>
      </div>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-hud-safe-area pt-hud-safe-area bg-transparent">
      <div className="flex items-center gap-gutter">
      <h1 className="font-headline-lg text-headline-lg md:hidden text-primary drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]">STARHARBOR LITE</h1>
      <h1 className="font-headline-lg text-headline-lg hidden md:block text-primary drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]">STARHARBOR LITE</h1>
      </div>
      <div className="flex items-center gap-gutter">
      {/* Score Readout */}
      <div className="font-display-score text-display-score text-surface-tint drop-shadow-[0_0_8px_rgba(0,219,231,0.6)] animate-pulse">
                      12,500
                  </div>
      <div className="flex gap-unit">
      <button className="p-2 text-primary hover:text-primary-container transition-colors active:scale-95 duration-75" type="button" aria-label="Pause" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 text-on-surface-variant hover:text-primary-container transition-colors" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile, Visible on Web as HUD elements) */}
      {/* In gameplay, SideNav is suppressed as per guidelines "Linear/Transactional or Task-Focused", but keeping HUD elements mapped to the grid */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 h-auto z-[60] flex-col gap-gutter px-hud-safe-area">
      {/* Telemetry / Status */}
      <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant/30 rounded-lg p-unit shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-unit p-unit">
      <div className="font-label-mono text-label-mono text-on-surface-variant uppercase text-xs">Distance</div>
      <div className="font-label-mono text-label-mono text-primary flex items-center gap-2">
      <Ruler className="text-sm" aria-hidden={true} focusable="false" />
                           450m
                       </div>
      </div>
      </div>
      </div>
      {/* BottomNavBar (Mobile HUD Elements) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-between items-end px-hud-safe-area pb-hud-safe-area bg-gradient-to-t from-surface-container-lowest to-transparent md:hidden">
      {/* Fuel Status */}
      <div className="flex flex-col items-center gap-unit warning-glow">
      <div className="w-12 h-12 rounded-full border border-secondary-container bg-surface/50 backdrop-blur-md flex items-center justify-center">
      <Fuel className="text-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-mono text-label-mono text-secondary-container">65%</span>
      </div>
      {/* Distance (Mobile) */}
      <div className="flex flex-col items-center gap-unit text-primary">
      <div className="w-12 h-12 rounded-full border border-surface-tint/30 bg-surface/50 backdrop-blur-md flex items-center justify-center">
      <Ruler className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-mono text-label-mono text-primary">450m</span>
      </div>
      </nav>
      {/* Desktop Bottom HUD (Fuel & Shields) */}
      <div className="hidden md:flex fixed bottom-0 left-0 w-full z-50 justify-between items-end px-hud-safe-area pb-hud-safe-area bg-transparent pointer-events-none">
      {/* Fuel Bar */}
      <div className="w-64 bg-surface/80 backdrop-blur-xl border border-outline-variant/30 rounded-lg p-unit shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto">
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-mono text-label-mono text-secondary-container flex items-center gap-1">
      <Fuel className="text-sm" aria-hidden={true} focusable="false" /> FUEL
                      </span>
      <span className="font-label-mono text-label-mono text-secondary-container">65%</span>
      </div>
      <div className="flex gap-1 h-2">
      <div className="flex-1 bg-secondary-container rounded-sm shadow-[0_0_8px_rgba(254,157,0,0.6)]"></div>
      <div className="flex-1 bg-secondary-container rounded-sm shadow-[0_0_8px_rgba(254,157,0,0.6)]"></div>
      <div className="flex-1 bg-secondary-container rounded-sm shadow-[0_0_8px_rgba(254,157,0,0.6)]"></div>
      <div className="flex-1 bg-secondary-container/50 rounded-sm"></div>
      <div className="flex-1 bg-white/10 rounded-sm"></div>
      </div>
      </div>
      {/* Shields Bar */}
      <div className="w-64 bg-surface/80 backdrop-blur-xl border border-outline-variant/30 rounded-lg p-unit shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-auto">
      <div className="flex justify-between items-center mb-unit">
      <span className="font-label-mono text-label-mono text-primary flex items-center gap-1">
      <Shield className="text-sm" aria-hidden={true} focusable="false" /> SHIELDS
                      </span>
      <span className="font-label-mono text-label-mono text-primary">100%</span>
      </div>
      <div className="flex gap-1 h-2">
      <div className="flex-1 bg-surface-tint rounded-sm shadow-[0_0_8px_rgba(0,219,231,0.6)]"></div>
      <div className="flex-1 bg-surface-tint rounded-sm shadow-[0_0_8px_rgba(0,219,231,0.6)]"></div>
      <div className="flex-1 bg-surface-tint rounded-sm shadow-[0_0_8px_rgba(0,219,231,0.6)]"></div>
      <div className="flex-1 bg-surface-tint rounded-sm shadow-[0_0_8px_rgba(0,219,231,0.6)]"></div>
      <div className="flex-1 bg-surface-tint rounded-sm shadow-[0_0_8px_rgba(0,219,231,0.6)]"></div>
      </div>
      </div>
      </div>
      {/* Pause / Start Overlay */}
      <div className="absolute inset-0 z-[100] bg-surface/70 backdrop-blur-[20px] flex flex-col items-center justify-center border border-outline-variant/30 hidden" id="pauseOverlay">
      <h2 className="font-headline-lg text-headline-lg md:text-[64px] md:leading-[72px] text-primary mb-margin-desktop drop-shadow-[0_0_12px_rgba(0,219,231,0.8)] tracking-widest">SYSTEM PAUSED</h2>
      <button className="group relative px-8 py-4 bg-transparent border border-surface-tint text-surface-tint font-label-mono text-label-mono text-lg uppercase tracking-widest hover:bg-surface-tint/20 transition-colors duration-300" type="button" data-action-id="resume-flight-3" onClick={actions?.["resume-flight-3"]}>
      <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(0,219,231,1)]">RESUME FLIGHT</span>
      <div className="absolute inset-0 border border-surface-tint opacity-50 scale-105 group-hover:scale-100 transition-transform duration-300 pointer-events-none"></div>
      </button>
      <div className="mt-margin-desktop font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
                  PRESS <kbd className="px-2 py-1 bg-surface-container border border-outline-variant/50 rounded text-surface-tint">P</kbd> TO PAUSE/RESUME
              </div>
      </div>
      
    </>
  );
}
