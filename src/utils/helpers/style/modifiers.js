import { config } from '/src/assets/config'
import { layers, withLayer } from './layers'

const withImportant = (classesWithImportant, c) => {
	classesWithImportant.push(c)
	classesWithImportant.push(`\\!${c.replace(/;/, ' !important;')}`)
	return classesWithImportant
}

const withPseudo = (classesWithPseudo, c) => {
	classesWithPseudo.push(c)
	classesWithPseudo.push(`hover\\:${c.replace(/\s{/, ':hover {')}`)
	classesWithPseudo.push(`disabled\\:${c.replace(/\s{/, ':disabled {')}`)
	classesWithPseudo.push(
		withLayer(
			layers.pseudo,
			'.' + `disabled\\:${c.replace(/\s{/, ':disabled {')}`,
		),
	)
	return classesWithPseudo
}

export const withModifiers = (classes) =>
	[classes]
		.flat()
		.reduce(withImportant, [])
		.reduce(withPseudo, [])
		.map(
			(c) =>
				c +
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
