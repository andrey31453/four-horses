import { addScreens } from './screens'

const initialTextClasses = `
.text-merriweather {
  font-family: 'Merriweather',serif;
  font-style: normal;
}
.text-golos-text {
  font-family: 'Golos Text',
  sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}`

const textSizeClass = (key, value) =>
	addScreens(`text-${key} {font-size: ${value / 16}rem;}`)

export const createTextClasses = (config) =>
	Object.entries(config).reduce(
		(style, [key, value]) => [style, textSizeClass(key, value)].join(''),
		initialTextClasses,
	)
