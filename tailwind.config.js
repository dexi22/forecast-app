/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.tsx', './index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#1e124a',
				accent: '#681ede',
				outline: '#9a68ea',
				selection: '#371f7a',
				background: {
					from: '#160d37',
					to: '#0f0925',
				},
				text: {
					primary: '#ffffff',
					secondary: '#b4a5d6',
				},
			},
		},
	},
	plugins: [],
};
