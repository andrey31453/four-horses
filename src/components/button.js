import { callback } from '/src/composables/callback'

const defaultClasses =
	'text-golos font-medium transition flex justify-center items-center cursor-pointer'
const propsConfig = {
	'a-severity': {
		contrast: [
			'text-white hover:text-black disabled:text-white',
			'bg-black hover:bg-yellow disabled:bg-secondary-800',
			'border-black hover:border-yellow disabled:border-secondary-800',
		],
		secondary: [
			'text-black hover:text-white disabled:text-secondary-800',
			'bg-transparent hover:bg-black disabled:bg-transparent',
			'border-black hover:border-black disabled:border-secondary-800',
		],
		info: [
			'text-blue hover:text-white disabled:text-secondary-800',
			'bg-transparent hover:bg-blue disabled:bg-transparent',
			'border-blue hover:border-blue disabled:border-secondary-800',
		],
	},
	'a-size': {
		sm: 'h-9 rounded-4.5 border-1 leading-120',
		lg: 'h-18 rounded-9 border-2 leading-130',
	},
	'a-icon': {
		false: '',
		true: 'size-9 rounded-full',
	},
	'a-disabled': {
		false: '',
		true: '!cursor-not-allowed pointer-events-none',
	},
}
class Button extends HTMLButtonElement {
	static observedAttributes = Object.keys(propsConfig)
	#domClasses
	constructor() {
		super()
		this.#domClasses = this.className
		this.#emit()
		this.#update()
	}

	#emit = () => {
		callback.on({
			target: this,
			type: this.getAttribute('a-type'),
			name: this.getAttribute('a-name'),
			props: this.getAttribute('a-prop'),
		})
	}

	#update = () => {
		let stateClasses = []
		Object.entries(propsConfig).forEach(([key, value]) => {
			const prop = this.getAttribute(key) === '' || this.getAttribute(key)
			const [_, classes] =
				Object.entries(value).find(([key]) => key === String(prop)) ||
				Object.entries(value)[0]
			classes &&
				[classes]
					.flat(Infinity)
					.join(' ')
					.split(' ')
					.forEach((c) => stateClasses.push(c))
		})

		this.className = [
			defaultClasses,
			this.#domClasses,
			stateClasses.join(' '),
		].join(' ')
	}k
	#setDisabled = (name, value) => {
		if (name !== 'a-disabled') return
		value === 'true'
			? this.setAttribute('disabled', '')
			: this.removeAttribute('disabled')
	}
	attributeChangedCallback(name, oldValue, newValue) {
		this.#setDisabled(name, newValue)
		this.#update()
	}
	disconnectedCallback() {
		callback.off(this.getAttribute('a-name'))
	}
}
customElements.define('a-button', Button, {
	extends: 'button',
})
