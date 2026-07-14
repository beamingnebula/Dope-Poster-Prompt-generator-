/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html', './src/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { display: ['Arial Narrow', 'Arial', 'sans-serif'], mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'] }, colors: { ink: '#111110', paper: '#f1f0eb', lime: '#c8f53a', muted: '#a2a29c' } } }, plugins: [] }
