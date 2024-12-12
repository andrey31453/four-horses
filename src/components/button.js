import { callback } from '@/composables/callback'

class Button extends HTMLButtonElement {
	constructor() {
		super()
		this.#on()
	}

	#on = () => {
		callback.on({
			target: this,
			type: this.getAttribute('a-type'),
			name: this.getAttribute('a-name'),
			props: this.getAttribute('a-prop'),
		})
	}
}
customElements.define('a-button', Button, {
	extends: 'button',
})
