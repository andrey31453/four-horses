import { withModifiers } from './modifiers'
import { layers, withLayer } from './layers'

const roundedClass = (size) =>
	withModifiers([
		`rounded-${size} {border-radius: ${size / 4}rem;}`,
		`rounded-${size}\\.5 {border-radius: ${size + 0.5 / 4}rem;}`,
	])
const borderWidthClass = (size) =>
	withModifiers([
		`border-${size} {border-width: ${size}px;}`,
		`border-t-${size} {border-top-width: ${size}px;}`,
		`border-r-${size} {border-right-width: ${size}px;}`,
		`border-b-${size} {border-bottom-width: ${size}px;}`,
		`border-l-${size} {border-left-width: ${size}px;}`,
	])
const borderColorClass = (name) =>
	withModifiers(`border-${name} {border-color: var(--${name});}`)

export const createBorderClasses = (sizes, colors) =>
	withLayer(layers.base, '*,::before,::after{border: 0 solid transparent;}') +
	[...Array(sizes.decreasedQuantity + 1).keys()].reduce(
		(style, size) =>
			[style, roundedClass(size), borderWidthClass(size)].join(''),
		withModifiers(`rounded-full {border-radius: 9999px;}`),
	) +
	Object.entries(colors).reduce(
		(style, [name]) => [style, borderColorClass(name)].join(''),
		'',
	)
