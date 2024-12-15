const initialTextClasses = [
	`text-merriweather {font-family: 'Merriweather',serif; font-style: normal;}`,
	`text-golos {font-family: 'Golos Text', sans-serif; font-optical-sizing: auto; font-style: normal;}`,

	`uppercase {text-transform: uppercase;}`,
	`lowercase {text-transform: lowercase;}`,
	`capitalize {text-transform: capitalize;}`,
	`normalcase {text-transform: none;}`,

	`decoration-none {text-decoration: none;}`,

	`text-left {text-align: left;}`,
	`text-center {text-align: center;}`,
	`text-right {text-align: right;}`,
	`text-justify	{text-align: justify;}`,
	`text-start	{text-align: start;}`,
	`text-end	{text-align: end;}`,
]

const textSizeClass = (key) => `text-${key} {font-size: var(--text-${key});}`
const textSizeClasses = (sizes) =>
	Object.entries(sizes).reduce((classes, [key]) => {
		classes.push(textSizeClass(key))
		return classes
	}, [])

const leadingClass = (value) => `leading-${value} {line-height: ${value}%;}`
const leadingClasses = (leadings) =>
	[...Array((leadings.max - leadings.min) / leadings.step + 1).keys()].reduce(
		(classes, index) => {
			classes.push(leadingClass(leadings.min + leadings.step * index))
			return classes
		},
		[],
	)

const weightClass = (key, value) => `font-${key} {font-weight: ${value};}`
const textWeightClasses = (leadings) =>
	Object.entries(leadings).reduce((classes, [key, value]) => {
		classes.push(weightClass(key, value))
		return classes
	}, [])

export const createTextClasses = (config) => [
	initialTextClasses,
	textSizeClasses(config.sizes),
	textWeightClasses(config.bold),
	leadingClasses(config.leadings),
]
