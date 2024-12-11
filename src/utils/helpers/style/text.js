import { withModifiers } from './modifiers'

const initialTextClasses = withModifiers([
	`text-merriweather {
  font-family: 'Merriweather',serif;
  font-style: normal;
}`,
	`text-golos-text {
  font-family: 'Golos Text',
  sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}`,
	`uppercase {text-transform: uppercase;}`,
	`lowercase {text-transform: lowercase;}`,
	`capitalize {text-transform: capitalize;}`,
	`normalcase {text-transform: none;}`,
	`decoration-none {text-decoration: none;}`,
])

const textSizeClass = (key, value) =>
	withModifiers(`text-${key} {font-size: ${value / 16}rem;}`)
const textSizeClasses = (sizes) =>
	Object.entries(sizes).reduce(
		(style, [key, value]) => [style, textSizeClass(key, value)].join(''),
		'',
	)
const leadingClass = (value) =>
	withModifiers(`leading-${value} {line-height: ${value}%;}`)
const leadingClasses = (leadings) =>
	[...Array((leadings.max - leadings.min) / leadings.step + 1).keys()].reduce(
		(style, index) =>
			[style, leadingClass(leadings.min + leadings.step * index)].join(''),
		'',
	)

export const createTextClasses = (config) =>
	initialTextClasses +
	textSizeClasses(config.sizes) +
	leadingClasses(config.leadings)
