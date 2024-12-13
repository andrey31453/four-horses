import { withModifiers } from './modifiers'

const decorationClass = (name) =>
	withModifiers(`decoration-${name} {text-decoration-color: var(--${name});}`)
const textClass = (name) =>
	withModifiers(`text-${name} {color: var(--${name});}`)
const bgClass = (name) =>
	withModifiers(`bg-${name} {background-color: var(--${name});}`)

export const createColorStyle = (config) =>
	Object.entries(config).reduce(
		(style, [name]) =>
			[style, decorationClass(name), textClass(name), bgClass(name)].join(''),
		'',
	)
