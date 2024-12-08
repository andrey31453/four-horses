import { singleton } from '@/utils/helpers/singleton'
import { config } from '@/assets/config'
import { createGridClasses } from './grid'
import { createSizeClasses } from './size'
import { createColorStyle } from './color'
import { createTextClasses } from './text'
import { defineLayers } from './screens'

export const utilsStyle = singleton(() =>
	[
		defineLayers(),
		createSizeClasses(config.indent),
		createGridClasses(config.grid),
		createColorStyle(config.colors),
		createTextClasses(config.fontSizes),
	].join(''),
)
