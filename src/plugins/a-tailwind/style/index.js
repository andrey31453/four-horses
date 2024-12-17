import { defineLayers, layers } from './layers.js'
import { normalizeStyle } from './normalize.js'
import { scrollStyle } from './scroll.js'
import { templateClasses } from './template.js'
import { defineVars } from './vars.js'
import { sizeClasses } from './size.js'
import { borderClasses, borderStyle } from './border.js'
import { gridClasses } from './grid.js'
import { colorStyle } from './color.js'
import { textClasses } from './text.js'
import { animationClasses, animationStyle } from './animations.js'

export const defineStyle = (config) => [
	defineLayers(layers),

	// разнести по своим подпапкам
	defineVars(config.screens, 'screen'),
	defineVars(config.colors),
	defineVars(config.animations.vars),
	defineVars(config.font.sizes, 'text'),

	normalizeStyle(),
	scrollStyle(),
	borderStyle(),
	animationStyle(),
]

// TODO Переписать на класс
export const defineClasses = (config) =>
	[
		templateClasses(),
		animationClasses(config.animations),
		sizeClasses(config.sizes),
		borderClasses(config.sizes, config.colors),
		gridClasses(config.grid),
		colorStyle(config.colors),
		textClasses(config.font),
	].flat(Infinity)
