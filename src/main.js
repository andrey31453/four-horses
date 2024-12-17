import { bootstrap } from '/src/composables/bootstrap'
import { emptySection } from '/src/utils/helpers/empty-section'
import { defineTemplate } from '/src/utils/helpers/template'
import { aTailwindLink } from '/src/utils/helpers/a-tailwind-link'
import { useScreenClass } from '/src/composables/screen-class'

import header from '/src/templates/header.html?raw'
import support from '/src/templates/support.html?raw'
import about from '/src/templates/about.html?raw'
import stages from '/src/templates/stages.html?raw'
import footer from '/src/templates/footer.html?raw'
import runningLine from '/src/templates/running-line.html?raw'
import participants from '/src/templates/participants.html?raw'
import { useScrollTo } from './composables/scroll-to.js'
import { useAnimation } from './composables/animation.js'

bootstrap()
	.use(useScreenClass)
	.use(useScrollTo)
	.use(useAnimation)
	.template(defineTemplate('div', null, aTailwindLink()))
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
				emptySection('h-30 md:h-50'),
				participants,
				emptySection('h-25 md:h-35'),
				runningLine,
				footer,
			],
		),
	)
	.mount('#app')
