import { singleton } from '../utils/singleton.js'
import { defineLayers, layers } from './layers.js'
import { normalizeStyle } from './normalize.js'
import { scrollStyle } from './scroll.js'
import { templateClasses } from './template.js'
import { defineVars } from './vars.js'
import { createSizeClasses } from './size.js'
import { createBorderClasses, createBorderStyle } from './border.js'
import { createGridClasses } from './grid.js'
import { createColorStyle } from './color.js'
import { createTextClasses } from './text.js'

export const defineStyle = singleton((config) => [
	defineLayers(layers),
	normalizeStyle,
	scrollStyle,
	defineVars(config.colors),
	defineVars(config.vars),
	defineVars(config.font.sizes, 'text'),
	createBorderStyle(),
])

// TODO Переписать на класс
export const defineClasses = singleton((config) =>
	[
		templateClasses,
		createSizeClasses(config.sizes),
		createBorderClasses(config.sizes, config.colors),
		createGridClasses(config.grid),
		createColorStyle(config.colors),
		createTextClasses(config.font),
	].flat(Infinity),
)
