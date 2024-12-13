import { singleton } from 'src/utils/helpers/singleton'
import { config } from 'src/assets/config'
import { createGridClasses } from './grid'
import { createSizeClasses } from './size'
import { createColorStyle } from './color'
import { createTextClasses } from './text'
import { defineLayers, layers } from './layers'
import { normalizeStyle } from './normalize'
import { scrollStyle } from './scroll'
import { templateStyle } from './template'
import { defineVars } from './vars'
import { createBorderClasses } from './border'

export const utilsStyle = singleton(() =>
	[
		defineLayers(layers),
		normalizeStyle,
		scrollStyle,
		templateStyle,
		defineVars(config.colors),
		defineVars(config.vars),
		createSizeClasses(config.sizes),
		createBorderClasses(config.sizes, config.colors),
		createGridClasses(config.grid),
		createColorStyle(config.colors),
		createTextClasses(config.font),
	].join(''),
)
