import { bootstrap } from '@/composables/bootstrap'
import { emptySection } from '@/utils/helpers/empty-section'
import { defineTemplate } from '@/utils/helpers/template'
import { aTailwindLink } from '@/utils/helpers/a-tailwind-link'
import { useScreenClass } from '@/composables/screen-class'

import header from '@/templates/header.html?raw'
import support from '@/templates/support.html?raw'
import about from '@/templates/about.html?raw'
import stages from '@/templates/stages.html?raw'
import footer from '@/templates/footer.html?raw'
import runningLine from '@/templates/running-line.html?raw'
import participants from '@/templates/participants.html?raw'
import { useScrollTo } from '@/composables/scroll-to.js'
import { useAnimation } from '@/composables/animation.js'
import { useViteBase } from '@/composables/vite-base.js'

bootstrap()
	.use(useScreenClass)
	.use(useScrollTo)
	.use(useAnimation)
	.use(useViteBase)
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
