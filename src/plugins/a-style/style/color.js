const decorationClass = (name) =>
	`decoration-${name} {text-decoration-color: var(--${name});}`
const textClass = (name) => `text-${name} {color: var(--${name});}`
const bgClass = (name) => `bg-${name} {background-color: var(--${name});}`

export const createColorStyle = (config) =>
	Object.entries(config).reduce((classes, [name]) => {
		classes.push(decorationClass(name))
		classes.push(textClass(name))
		classes.push(bgClass(name))
		return classes
	}, [])
