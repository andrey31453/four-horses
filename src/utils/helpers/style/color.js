import { addScreens } from './screens'
import { defineVars } from './vars'

const textClass = (name) => addScreens(`text-${name} {color: var(--${name});}`)
const bgClass = (name) =>
	addScreens(`bg-${name} {background-color: var(--${name});}`)
const createColorClasses = (colors) =>
	Object.entries(colors).reduce(
		(style, [name]) => [style, textClass(name), bgClass(name)].join(''),
		'',
	)

export const createColorStyle = (config) =>
	[defineVars(config), createColorClasses(config)].join('')
