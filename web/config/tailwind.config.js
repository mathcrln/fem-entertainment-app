module.exports = {
	content: ['src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Outfit', 'ui-sans-serif', 'system-ui'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},

		extend: {
			colors: {
				red: '#FC4747',
				darkBlue: '#10141E',
				greyishBlue: '#5A698F',
				semiDarkBlue: '#161D2F',
				white: '#FFFFFF',
			},
		},
	},
	plugins: [],
};
