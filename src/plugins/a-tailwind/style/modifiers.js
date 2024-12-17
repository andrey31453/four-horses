// TODO инкапсулировать
import { config } from '@/a-tailwind.conf.js'

const withImportant = (classesWithImportant, c) => {
	classesWithImportant.push(c)
	classesWithImportant.push(`!${c.replace(/;/, ' !important;')}`)
	return classesWithImportant
}

// TODO style plugin change hover & disabled (hadle for => for from keys)
const withPseudo = (classesWithPseudo, c) => {
	classesWithPseudo.push(c)
	classesWithPseudo.push(`hover:${c.replace(/\s{/, ':hover {')}`)
	classesWithPseudo.push(`disabled:${c.replace(/\s{/, ':disabled {')}`)
	return classesWithPseudo
}

const withScreens = (classesWithScreens, c) => {
	classesWithScreens.push(c)
	Object.entries(config.screens).forEach(([screenKey]) => {
		classesWithScreens.push(`${screenKey}:${c}`)
		classesWithScreens.push(`max-${screenKey}:${c}`)
	})
	return classesWithScreens
}

export const withModifiers = (classes) => {
	return classes
		.reduce(withImportant, [])
		.reduce(withPseudo, [])
		.reduce(withScreens, [])
}
