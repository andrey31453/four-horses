import { config } from '@/assets/config'
import { layers, withLayer } from './layers'

const withImportant = (classesWithImportant, c) => {
	classesWithImportant.push(c)
	classesWithImportant.push(`\\!${c.replace(/;/, ' !important;')}`)
	return classesWithImportant
}

export const withModifiers = (classes) =>
	[classes]
		.flat()
		.reduce(withImportant, [])
		.map(
			(c) =>
				withLayer(layers.utils, '.' + c) +
				withLayer(
					layers.screens,
					Object.entries(config.screens)
						.map(
							([screenKey, screenValue]) => `
@media not all and (min-width: ${screenValue}px) {.max-${screenKey}\\:${c}}
@media (min-width: ${screenValue}px) {.${screenKey}\\:${c}}`,
						)
						.join(''),
				),
		)
		.join('')
