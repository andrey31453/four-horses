import { bootstrap } from './composables/bootstrap'
import { emptySection } from '@/utils/helpers/empty-section'
import { defineTemplate } from '@/utils/helpers/template'
import { utilsStyle } from '@/utils/helpers/style'

import header from '@/templates/header.html?raw'
import support from '@/templates/support.html?raw'
import about from '@/templates/about.html?raw'
import stages from '@/templates/stages.html?raw'
import footer from '@/templates/footer.html?raw'
import runningLine from '@/templates/running-line.html?raw'
import { useScreenClass } from './composables/screenClass'

bootstrap()
	.use(useScreenClass)
	.template(defineTemplate('style', null, utilsStyle()))
	.template(
		defineTemplate(
			'div',
			{
				id: 'main',
				class: 'bg-white text-black text-merriweather',
			},
			[
				header,
				runningLine,
				emptySection('h-14 md:h-24'),
				support,
				emptySection('h-6 md:h-16'),
				about,
				emptySection('h-30 md:h-50'),
				stages,
				runningLine,
				footer,
			],
		),
	)
	.mount('#app')
