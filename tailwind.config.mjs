/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// added new 4 column grid as new4
				'auto-fit': 'repeat(auto-fit, minmax(500px, 1fr))',
				'auto-max': 'repeat(auto-fit, minmax(800px, 1fr))',
				'auto-min': 'repeat(auto-fit, minmax(360px, 1fr))',
				'auto-about': 'repeat(auto-fit, minmax(300px, 1fr))'
			}
		},
	},
	plugins: [],
}
