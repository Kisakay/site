<template>
  <div class="app-shell">
    <AppHeader />
    <main class="app-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* ============================================================
   QxChat — design tokens
   Palette fournie : #1c71d8 / #4898f7 / #f0e0d9 / #4e658d
   + deux neutres dérivés pour le texte et le fond.
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');

:root {
  --blue-700: #1c71d8;   /* majeur — actions, liens, focus */
  --blue-400: #4898f7;   /* mineur — hover, accents secondaires */
  --blue-50: #e8f0fe;    /* fond clair pour pills actives */
  --cream: #f0e0d9;      /* accent 1 — fonds chauds, badges */
  --slate: #4e658d;      /* accent 2 — texte secondaire */
  --ink: #11202f;        /* texte principal / bandes sombres */
  --paper: #fbfaf8;      /* fond de page */
  --surface: #ffffff;    /* fond de carte / surfaces surélevées */
  --line: rgba(17, 32, 47, 0.12);

  /* badges */
  --amber-bg: #fff3cd;
  --amber-text: #856404;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;

  --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
}

[data-theme="dark"] {
  --blue-700: #5b8cff;
  --blue-400: #3d6fdb;
  --blue-50: rgba(91, 140, 255, 0.12);
  --cream: #2a2520;
  --slate: #8a9ab0;
  --ink: #e2e6ed;
  --paper: #0f1318;
  --surface: #1a1e25;
  --line: rgba(255, 255, 255, 0.1);
  --amber-bg: #3d3200;
  --amber-text: #f5c842;

  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

img,
video {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
  margin: 0;
}

p {
  margin: 0;
  line-height: 1.65;
}

ul {
  margin: 0;
  padding: 0;
}

:focus-visible {
  outline: 2px solid var(--blue-700);
  outline-offset: 3px;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
}

/* Shared layout primitive */
.container {
  width: min(1140px, calc(100% - 48px));
  margin-inline: auto;
}

/* Small mono label used once per page, near the H1 */
.eyebrow {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--blue-700);
  margin-bottom: 14px;
}

.lead {
  color: var(--slate);
  font-size: 1.08rem;
  max-width: 540px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 46px;
  padding: 0 20px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease, transform 150ms ease;
}

.btn--primary {
  background: var(--blue-700);
  color: #fff;
}

.btn--primary:hover {
  background: var(--blue-400);
}

.btn--secondary {
  border-color: var(--line);
  color: var(--ink);
  background: var(--surface);
}

.btn--secondary:hover {
  border-color: var(--slate);
}

.btn--sm {
  height: 38px;
  padding: 0 16px;
  font-size: 0.88rem;
}

/* Theme toggle */
.btn--icon {
  width: 38px;
  height: 38px;
  padding: 0;
  border-radius: var(--radius-sm);
  background: transparent;
  border: 1px solid var(--line);
  color: var(--ink);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 150ms ease, background 150ms ease;
}

.btn--icon:hover {
  border-color: var(--slate);
  background: var(--surface);
}

.btn--icon svg {
  width: 18px;
  height: 18px;
}

/* Signature device: reused "app window" chrome — hero mock + video frame */
.window-chrome {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface);
  box-shadow: 0 16px 40px rgba(17, 32, 47, 0.08);
}

[data-theme="dark"] .window-chrome {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.window-chrome__bar {
  display: flex;
  gap: 6px;
  padding: 12px 14px;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}

.window-chrome__bar span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--line);
}

.window-chrome__bar span:nth-child(1) {
  background: var(--cream);
}

.window-chrome__bar span:nth-child(2) {
  background: var(--blue-400);
}

.window-chrome__bar span:nth-child(3) {
  background: var(--slate);
}

.window-chrome__media {
  width: 100%;
  display: block;
  background: var(--ink);
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
    scroll-behavior: auto !important;
  }
}
</style>
