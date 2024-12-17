export const withOpacity = (classes) =>
	[classes]
		.flat()
		.map((c) =>
			[...Array(21).keys()]
				.map((i) => i / 20)
				.map((op) =>
					op === 1
						? c
						: c
								.replace(/ \{/, `\\/${Math.round(100 * op)} \{`)
								.replace(/\);/, `, ${op});`),
				),
		)

const decorationClass = (name) =>
	`decoration-${name} {text-decoration-color: rgb(var(--${name}));}`
const textClass = (name) => `text-${name} {color: rgb(var(--${name}));}`
const bgClass = (name) => `bg-${name} {background-color: rgb(var(--${name}));}`

export const colorStyle = (config) =>
	Object.entries(config).reduce((classes, [name]) => {
		classes.push(decorationClass(name))
		classes.push(textClass(name))
		classes.push(withOpacity(bgClass(name)))
		return classes
	}, [])
