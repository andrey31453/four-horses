import { config } from '../../../../a-style.conf.js'

export const layers = {
	base: 'base',
	utils: 'utils',
	pseudo: 'pseudo',
	screens: 'screens',
}

export const defineLayers = (layers) =>
	Object.values(layers).reduce(
		(layers, layer) => layers + `@layer ${layer};`,
		'',
	)

export const withLayer = (layer, classes) => `@layer ${layer} {${classes}}`

export const withGeneratingLayer = (classes) =>
	classes
		.map((c) => {
			const currentScreen = Object.keys(config.screens)
				.find((screen) => c.startsWith(screen))
				?.replace(/\\:/, '')
			if (currentScreen) {
				const screenValue = config.screens[currentScreen]
				return withLayer(
					layers.screens,
					`
@media not all and (min-width: ${screenValue}px) {.max-${c}}
@media (min-width: ${screenValue}px) {.${c}}`,
				)
			}

			if (/hover/.test(c) || /disabled/.test(c)) {
				return withLayer(layers.pseudo, '.' + c)
			}

			return withLayer(layers.utils, '.' + c)
		})
		.flat()
