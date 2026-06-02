// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - StarHarbor Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Flame, Gauge, Keyboard, Save, Settings, Volume2, X } from "lucide-react";


export type GameSettingsStarharborLiteActionId = "close-1" | "rookie-2" | "pilot-3" | "ace-4" | "return-to-game-5" | "save-preferences-6";

export interface GameSettingsStarharborLiteProps {
  actions?: Partial<Record<GameSettingsStarharborLiteActionId, () => void>>;

}

export function GameSettingsStarharborLite({ actions }: GameSettingsStarharborLiteProps) {
  return (
    <>
      {/* Blurred Game Background Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105" data-alt="A first-person view from inside a futuristic spacecraft cockpit looking out into a vibrant, dark space nebula. High-tech, glowing cyan instrumentation and a starfield are visible but heavily blurred to simulate depth of field, creating an immersive, technical atmosphere suitable for a dark-mode gaming interface overlay." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCU2LDIRMjXqS5Y98RRMl18Vwwow6o3cjbolLWoyeaK6WxoCdq1J14T4o9psBMT4NJ6SiMr79_joVn2gUNxe7f9XTrb9qDnLT8Wkw3BybXCd8OzrxuwCWmayWrvOxnGMhfgrNlVajXSneUrnzDtqMlO2gIcD1YIZ4AKHFqyo98MQb6Zd7DsfsvQORmTgnnfibXY9CGHEst3thUEKZqTi6_H3gku68v5CXCMQ-w6KmCXLpGSKy4OJ7n33QY4BEEUDngU_qbTdkBbl2g')"}}>
      </div>
      {/* Dimming layer */}
      <div className="absolute inset-0 bg-surface/60 mix-blend-multiply"></div>
      {/* Main Settings Modal */}
      <div className="relative z-10 w-full max-w-3xl mx-margin-mobile md:mx-margin-desktop bg-surface/80 backdrop-blur-xl border border-primary/30 rounded-lg shadow-[0_0_30px_rgba(0,219,231,0.15)] flex flex-col max-h-[921px]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/40">
      <div className="flex items-center gap-3">
      <Settings className="text-primary text-2xl drop-shadow-[0_0_8px_rgba(0,219,231,0.8)]" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary drop-shadow-[0_0_8px_rgba(0,219,231,0.6)] uppercase tracking-wide">
                          System Parameters
                      </h1>
      </div>
      <button className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none" type="button" aria-label="Close" data-action-id="close-1" onClick={actions?.["close-1"]}>
      <X className="text-2xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
      {/* Difficulty Section */}
      <section className="space-y-4">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
      <Flame className="text-sm" aria-hidden={true} focusable="false" />
                          SIMULATION DIFFICULTY
                      </h2>
      <div className="grid grid-cols-3 gap-unit md:gap-2 bg-surface-container/50 p-1 border border-outline-variant/30 rounded">
      <button className="py-3 px-4 rounded border border-transparent text-on-surface-variant font-label-mono text-label-mono text-center hover:bg-surface-variant/40 transition-colors" type="button" data-action-id="rookie-2" onClick={actions?.["rookie-2"]}>
                              ROOKIE
                          </button>
      <button className="py-3 px-4 rounded border border-primary bg-primary/10 text-primary font-label-mono text-label-mono text-center shadow-[0_0_10px_rgba(0,219,231,0.2)] transition-colors" type="button" data-action-id="pilot-3" onClick={actions?.["pilot-3"]}>
                              PILOT
                          </button>
      <button className="py-3 px-4 rounded border border-transparent text-on-surface-variant font-label-mono text-label-mono text-center hover:bg-surface-variant/40 transition-colors" type="button" data-action-id="ace-4" onClick={actions?.["ace-4"]}>
                              ACE
                          </button>
      </div>
      </section>
      {/* Gameplay & Audio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Gameplay */}
      <div className="space-y-6">
      <section className="space-y-4">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
      <Gauge className="text-sm" aria-hidden={true} focusable="false" />
                                  GAME SPEED
                              </h2>
      <div className="flex items-center justify-between p-4 border border-outline-variant/30 bg-surface-container/30 rounded">
      <span className="font-body-md text-body-md text-on-surface">Hyperdrive Override</span>
      {/* Custom Toggle */}
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-2 border-primary appearance-none cursor-pointer translate-x-6 shadow-[0_0_8px_rgba(0,219,231,0.5)]" id="speed-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-primary/30 cursor-pointer border border-primary/50" htmlFor="speed-toggle"></label>
      </div>
      </div>
      </section>
      </div>
      {/* Right Column: Audio */}
      <div className="space-y-6">
      <section className="space-y-4">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
      <Volume2 className="text-sm" aria-hidden={true} focusable="false" />
                                  AUDIO SYSTEMS
                              </h2>
      {/* Master Volume Segmented Bar */}
      <div className="space-y-2">
      <div className="flex justify-between">
      <span className="font-label-sm text-label-sm text-on-surface">Master Output</span>
      <span className="font-label-mono text-label-mono text-primary">80%</span>
      </div>
      <div className="flex gap-1 h-3">
      {/* 8 active segments */}
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      {/* 2 inactive segments */}
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      </div>
      </div>
      {/* Music Volume Segmented Bar */}
      <div className="space-y-2">
      <div className="flex justify-between">
      <span className="font-label-sm text-label-sm text-on-surface">Comms / Music</span>
      <span className="font-label-mono text-label-mono text-primary">50%</span>
      </div>
      <div className="flex gap-1 h-3">
      {/* 5 active segments */}
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      <div className="flex-1 bg-primary border border-primary/50 shadow-[0_0_5px_rgba(0,219,231,0.5)]"></div>
      {/* 5 inactive segments */}
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      <div className="flex-1 bg-white/10 border border-white/5"></div>
      </div>
      </div>
      </section>
      </div>
      </div>
      {/* Controls Section (Bento-style layout) */}
      <section className="space-y-4 pt-4 border-t border-outline-variant/20">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant flex items-center gap-2">
      <Keyboard className="text-sm" aria-hidden={true} focusable="false" />
                          FLIGHT CONTROLS
                      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Movement */}
      <div className="bg-surface-container/40 border border-outline-variant/30 rounded p-4 flex items-center justify-between">
      <div className="space-y-1">
      <span className="font-label-sm text-label-sm text-on-surface block uppercase">Thrust &amp; Steer</span>
      <span className="font-label-mono text-label-mono text-on-surface-variant text-[10px]">Omnidirectional</span>
      </div>
      <div className="flex flex-col items-center gap-1">
      <div className="w-8 h-8 rounded border border-outline/50 flex items-center justify-center font-label-mono text-on-surface bg-surface-variant/50">W</div>
      <div className="flex gap-1">
      <div className="w-8 h-8 rounded border border-outline/50 flex items-center justify-center font-label-mono text-on-surface bg-surface-variant/50">A</div>
      <div className="w-8 h-8 rounded border border-outline/50 flex items-center justify-center font-label-mono text-on-surface bg-surface-variant/50">S</div>
      <div className="w-8 h-8 rounded border border-outline/50 flex items-center justify-center font-label-mono text-on-surface bg-surface-variant/50">D</div>
      </div>
      </div>
      </div>
      {/* Docking */}
      <div className="bg-surface-container/40 border border-outline-variant/30 rounded p-4 flex items-center justify-between">
      <div className="space-y-1">
      <span className="font-label-sm text-label-sm text-on-surface block uppercase">Engage Docking</span>
      <span className="font-label-mono text-label-mono text-primary text-[10px] drop-shadow-[0_0_2px_rgba(0,219,231,0.8)]">Requires proximity</span>
      </div>
      <div className="h-8 px-6 rounded border border-primary/50 flex items-center justify-center font-label-mono text-primary bg-primary/10 shadow-[0_0_8px_rgba(0,219,231,0.2)]">
                                  SPACE
                              </div>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Actions */}
      <div className="p-6 border-t border-outline-variant/40 flex flex-col md:flex-row justify-end gap-4 bg-surface/50">
      <button className="px-6 py-3 rounded border border-outline-variant text-on-surface font-label-mono text-label-mono hover:bg-surface-variant/50 hover:text-white transition-colors focus:outline-none" type="button" data-action-id="return-to-game-5" onClick={actions?.["return-to-game-5"]}>
                      RETURN TO GAME
                  </button>
      <button className="px-8 py-3 rounded border border-primary bg-primary/10 text-primary font-label-mono text-label-mono hover:bg-primary/20 shadow-[0_0_15px_rgba(0,219,231,0.3)] hover:shadow-[0_0_20px_rgba(0,219,231,0.6)] transition-colors focus:outline-none flex items-center justify-center gap-2" type="button" data-action-id="save-preferences-6" onClick={actions?.["save-preferences-6"]}>
      <Save className="text-sm" aria-hidden={true} focusable="false" />
                      SAVE PREFERENCES
                  </button>
      </div>
      </div>
    </>
  );
}
