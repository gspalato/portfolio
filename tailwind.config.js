/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class', 'selector', '[data-mode="dark"]'],
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				flip: {
					to: {
						transform: 'rotate(360deg)',
					},
				},
				rotate: {
					to: {
						transform: 'rotate(90deg)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				flip: 'flip 6s infinite steps(2, end)',
				rotate: 'rotate 3s linear infinite both',
				spotlight: 'spotlight 2s ease .75s 1 forwards',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/container-queries'),
	],
};
