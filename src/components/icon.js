import logo from '/src/assets/icons/logo.svg?raw'
import chevronRight from '/src/assets/icons/chevron-right.svg?raw'
import { defineShadow } from '/src/utils/helpers/shadow'
import { aTailwindLink } from '/src/utils/helpers/a-tailwind-link'

const icons = {
	'chevron-right': chevronRight,
	logo,
}
class Icon extends HTMLElement {
	constructor() {
		super()
		this.classList.add('flex')
		this.classList.add('justify-center')
		this.classList.add('items-center')
		const icon = icons[this.getAttribute('a-icon')]

		defineShadow.call(
			this,
			`
${icon}

${aTailwindLink()}
<style>
svg {
	display: block;
	max-width: 100%;
	max-height: 100%;
}
</style>
		`,
		)
	}
}
customElements.define('a-icon', Icon)
