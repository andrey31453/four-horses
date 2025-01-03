import { layers, withLayer } from './layers.js'
import { withOpacity } from './color.js'

const roundedClass = (size) => [
	`rounded-${size} {border-radius: ${size / 4}rem;}`,
	`rounded-${size}\\.5 {border-radius: ${size + 0.5 / 4}rem;}`,
]
const borderWidthClass = (size) => [
	`border-${size} {border-width: ${size}px;}`,
	`border-t-${size} {border-top-width: ${size}px;}`,
	`border-r-${size} {border-right-width: ${size}px;}`,
	`border-b-${size} {border-bottom-width: ${size}px;}`,
	`border-l-${size} {border-left-width: ${size}px;}`,
]
const borderColorClass = (name) =>
	`border-${name} {border-color: rgb(var(--${name}));}`

export const borderStyle = () =>
	withLayer(layers.base, '*,::before,::after{border: 0 solid transparent;}')

export const borderClasses = (sizes, colors) => [
	`rounded-full {border-radius: 9999px;}`,
	[...Array(sizes.quantity + 1).keys()].reduce((classes, size) => {
		classes.push(roundedClass(size))
		classes.push(borderWidthClass(size))
		return classes
	}, []),
	Object.entries(colors).reduce((classes, [name]) => {
		classes.push(withOpacity(borderColorClass(name)))
		return classes
	}, []),
]
