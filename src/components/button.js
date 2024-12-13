import { callback } from '/src/composables/callback'

class Button extends HTMLButtonElement {
	static observedAttributes = ['a-disabled']

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

	attributeChangedCallback(name, oldValue, newValue) {
		newValue === 'true'
			? this.classList.add('disabled')
			: this.classList.remove('disabled')
	}
}
customElements.define('a-button', Button, {
	extends: 'button',
})
