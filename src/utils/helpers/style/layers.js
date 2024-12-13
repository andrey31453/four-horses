export const layers = {
	base: 'base',
	utils: 'utils',
	screens: 'screens',
}

export const defineLayers = (layers) =>
	Object.values(layers).reduce(
		(layers, layer) => layers + `@layer ${layer};`,
		'',
	)

export const withLayer = (layer, classes) => `@layer ${layer} {${classes}}`
