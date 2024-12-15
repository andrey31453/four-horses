export const config = {
	screens: {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
	},

	sizes: {
		decreasedQuantity: 10,
		baseQuantity: 20,
		increasedQuantity: 100,
	},

	grid: {
		cols: 12,
	},

	font: {
		bold: {
			thin: 100,
			extralight: 200,
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
			black: 900,
		},
		sizes: {
			xs: 16,
			sm: 18,
			base: 20,
			lg: 22,
			xl: 24,
			'3xl': 36,
			'4xl': 54,
			'5xl': 60,
		},
		leadings: {
			min: 50,
			max: 150,
			step: 5,
		},
	},

	colors: {
		transparent: 'transparent',

		white: '#ffffff',
		black: '#313131',
		red: '#f54932',
		yellow: '#fbce51',
		blue: '#3057a2',

		primary: '#f54932',
		surface: '#e9ded4',

		'secondary-200': '#585653',
		'secondary-300': '#6f6f6f',
		'secondary-400': '#7b7672',
		'secondary-500': '#838383',
		'secondary-600': '#8b8b8b',
		'secondary-700': '#d0d0d0',
		'secondary-800': '#d5d5d5',
		'secondary-900': '#e9ded4',
	},

	vars: {
		'animation-duration': {
			value: 100,
			measurement: 'ms',
		},
	},

	content: [''],
}
