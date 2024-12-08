import { bootstrap } from './composables/bootstrap'
import { emptySection } from '@/utils/helpers/empty-section'
import { defineTemplate } from '@/utils/helpers/template'
import { utilsStyle } from '@/utils/helpers/style'

import header from '@/templates/header.html?raw'
import support from '@/templates/support.html?raw'

bootstrap()
	.use(defineTemplate('style', null, utilsStyle()))
	.use(
		defineTemplate(
			'div',
			{
				id: 'main',
				class: 'bg-white text-black text-merriweather',
			},
			[header, emptySection(80), support],
		),
	)
	.mount('#app')
