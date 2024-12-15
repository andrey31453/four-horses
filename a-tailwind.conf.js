const pxToRem = (sizes) =>
	Object.entries(sizes).reduce((remSizes, [key, value]) => {
		remSizes[key] = value / 16 + 'rem'
		return remSizes
	}, {})

function hexToRgb1(hex) {
	let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b
	})

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			}
		: null
}

const hexToRgb = (hex) => {
	if (!hex.startsWith('#')) {
		return hex
	}

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
		: console.error(`don't correct hex color: ${hex}`)
}
const hexToRgbColors = (hexColors) =>
	Object.entries(hexColors).reduce((rgbColors, [key, value]) => {
		rgbColors[key] = hexToRgb(value)
		return rgbColors
	}, {})

export const config = {
	screens: {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280,
	},

	sizes: {
		decreasedQuantity: 140,
		baseQuantity: 140,
		increasedQuantity: 140,
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
		sizes: pxToRem({
			xs: 16,
			sm: 18,
			base: 20,
			lg: 22,
			xl: 24,
			'2xl': 28,
			'3xl': 36,
			'4xl': 54,
			'5xl': 60,
		}),
		leadings: {
			min: 50,
			max: 150,
			step: 5,
		},
	},

	colors: hexToRgbColors({
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
	}),

	vars: {
		'animation-duration': {
			value: 100,
			measurement: 'ms',
		},
	},

	content: [
		'./index.html',
		'./src/main.js',
		'./src/components',
		'./src/templates',
	],
	safeList: [...Array(12).keys()]
		.map((i) => [
			`md:grid-cols-${i + 1}`,
			`grid-cols-${i + 1}`,
			`col-span-${i + 1}`,
			`row-span-${i + 1}`,
		])
		.flat(),
}
