import logo from '/src/assets/icons/logo.svg?raw'
import chevronRight from '/src/assets/icons/chevron-right.svg?raw'
import { defineShadow } from '../utils/helpers/shadow'
import { utilsStyle } from '../utils/helpers/style'

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

<style>
${utilsStyle()}

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
