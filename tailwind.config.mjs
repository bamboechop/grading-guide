import starlightPlugin from '@astrojs/starlight-tailwind';

// https://starlight.astro.build/guides/css-and-tailwind/#color-theme-editor
// Generated color palettes
const accent = { 200: '#aad7a0', 600: '#258100', 900: '#0d3e00', 950: '#072d00' };
const gray = { 100: '#f6f6f6', 200: '#edeeed', 300: '#c1c2c1', 400: '#8a8c8a', 500: '#575857', 700: '#373837', 800: '#262726', 900: '#181818' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
}
