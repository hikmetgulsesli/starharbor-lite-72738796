---
name: StarHarbor Lite
colors:
  surface: '#0e141a'
  surface-dim: '#0e141a'
  surface-bright: '#333a40'
  surface-container-lowest: '#080f14'
  surface-container-low: '#161c22'
  surface-container: '#1a2026'
  surface-container-high: '#242b31'
  surface-container-highest: '#2f353c'
  on-surface: '#dde3eb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dde3eb'
  inverse-on-surface: '#2b3137'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ffc384'
  on-secondary: '#482900'
  secondary-container: '#fe9d00'
  on-secondary-container: '#663c00'
  tertiary: '#f6f6ff'
  on-tertiary: '#2e3037'
  tertiary-container: '#d9dae3'
  on-tertiary-container: '#5d5f67'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdcbb'
  secondary-fixed-dim: '#ffb869'
  on-secondary-fixed: '#2c1700'
  on-secondary-fixed-variant: '#673d00'
  tertiary-fixed: '#e1e2eb'
  tertiary-fixed-dim: '#c4c6cf'
  on-tertiary-fixed: '#191c22'
  on-tertiary-fixed-variant: '#44474e'
  background: '#0e141a'
  on-background: '#dde3eb'
  surface-variant: '#2f353c'
typography:
  display-score:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  hud-safe-area: 24px
---

## Brand & Style
The brand personality is high-octane, technical, and immersive. It targets gamers who appreciate precision and a futuristic, "cockpit-in-space" feel. The UI should evoke a sense of being inside a high-tech starship, balancing the vastness of space with the immediate, tactile feedback of flight instrumentation.

The design style is a hybrid of **Glassmorphism** and **Futuristic Minimalism**. It utilizes deep translucent layers to maintain a sense of depth while ensuring critical data remains legible. Vibrant neon accents provide a "glowing" digital aesthetic, while sharp, high-density layouts cater to the urgent information needs of an arcade environment.

## Colors
The palette is rooted in a "Deep Space" background to minimize eye strain and maximize the pop of neon elements. 

- **Primary (Neon Cyan):** Reserved for the Head-Up Display (HUD), primary interactions, and player status indicators. This color should always have a subtle glow effect.
- **Secondary (Caution Orange):** Strictly for hazards, low-fuel warnings, enemy indicators, and critical alerts.
- **Tertiary (Deep Navy):** The base surface color for all overlays and the background environment.
- **Neutral (Starfield White):** Used for primary body text and non-critical readouts to ensure high legibility against the dark background.

## Typography
The typography system prioritizes rapid information processing. **Space Grotesk** is used for major headlines to provide a technical, geometric flair. **Inter** handles the bulk of narrative and instructional text for maximum readability. **JetBrains Mono** is the "instrumentation" font, used for scores, coordinates, fuel percentages, and technical readouts to reinforce the machine-interface aesthetic.

Large display numbers for scores should utilize tabular figures (monospaced) to prevent horizontal jumping as values increment.

## Layout & Spacing
This design system utilizes a **Fluid Grid** with a high-density spacing model based on a 4px baseline. In-game HUD elements are anchored to the corners of the viewport with a "Safe Area" margin to ensure they don't interfere with central gameplay.

- **Desktop:** 12-column grid for menus; HUD elements are fixed to screen edges.
- **Mobile:** 4-column grid; HUD elements are scaled up by 15% for touch accessibility and moved slightly inward to accommodate grip positions.
- **Gaps:** Use tight spacing (4px or 8px) between related data points to maintain the "instrument panel" density.

## Elevation & Depth
Depth is achieved through **Glassmorphism** and **Tonal Layering**. 

1.  **Base Layer:** The starfield/space background.
2.  **Surface Layer:** Semi-transparent Navy (#0B0E14) at 60-80% opacity with a 12px-20px backdrop blur.
3.  **Accent Layer:** Components utilize 1px inner borders (strokes) in Neon Cyan at 30% opacity to define edges.
4.  **Glow:** Primary actions and critical HUD elements emit a soft outer glow (0px 0px 8px) in their respective brand color to simulate light emission in a dark environment. 
Avoid traditional drop shadows; use color-tinted glows to signify elevation.

## Shapes
The shape language is "Soft-Technical." Elements use a subtle 0.25rem (4px) corner radius to feel modern and engineered without the harshness of sharp brutalism. 

Interactive elements like buttons and input fields should utilize "clipped corner" aesthetics (achieved via CSS clip-path or specific SVG backgrounds) for a more aggressive sci-fi look on larger components like the Mini-map or Quest logs.

## Components
- **Buttons:** Minimalist outlines with a 1px Neon Cyan stroke. On hover/active, the background fills with a 20% cyan tint and the outer glow intensifies.
- **Status Bars (Fuel/Health):** Segmented horizontal bars. Active segments are solid Neon Cyan; inactive segments are 10% opacity white.
- **HUD Chips:** Small, semi-transparent labels for "Docking Available" or "Speed." These use the label-mono font style.
- **Cards/Modals:** High backdrop-blur (20px), Navy background at 70% opacity, and a 1px border. 
- **Icons:** Linear, 2px stroke weight. Icons for "Fuel," "Shields," and "Ammo" should be framed in small circular containers.
- **Score Readout:** Top-right alignment, monospaced, with a flickering "active" animation when the value changes.