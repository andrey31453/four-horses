import { defineShadow } from '/src/utils/helpers/shadow.js'

class Shadow extends HTMLElement {
	constructor() {
		super()
		defineShadow.call(this, '<slot></slot>')
	}
}
customElements.define('a-shadow', Shadow)
