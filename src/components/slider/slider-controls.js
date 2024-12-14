import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow'
import { windowCallback } from '/src/composables/callback'
import { keys } from './config'
import { SliderBus } from './bus'
import { store } from './store'
import { delay } from '../../utils/helpers/delay.js'

class SliderControls extends HTMLElement {
	#bus
	#unMounted
	constructor() {
		super()
		this.#sliderMounted()
	}

	// safe mount after mount slider
	#mountedConf = {
		quantity: 0,
		max: 100,
	}
	async #sliderMounted() {
		if (this.#mountedConf.quantity >= this.#mountedConf.max) {
			return console.error(`Don't correct a-id: ${this.getAttribute(keys.id)}`)
		}
		if (!store.props(this.getAttribute(keys.id))) {
			this.#mountedConf.quantity++
			await delay()
			return this.#sliderMounted(this)
		}
		this.#mounted()
	}
	#mounted = async () => {
		this.#bus = new SliderBus(this.getAttribute(keys.id))
		this.#render()
		this.#emit()
		this.#update()
	}
	disconnectedCallback() {
		this.#unMounted()
	}

	// node
	get #node() {
		return {
			prev: this.shadowRoot.getElementById('prev'),
			next: this.shadowRoot.getElementById('next'),
			decimal: this.shadowRoot.getElementById('decimal'),
			dots: this.shadowRoot.querySelectorAll('.js__dot'),
		}
	}

	// emit
	#emit = () => {
		windowCallback.emit({
			name: `${this.getAttribute(keys.id)}-prev`,
			cb: this.#prev,
		})
		windowCallback.emit({
			name: `${this.getAttribute(keys.id)}-next`,
			cb: this.#next,
		})
		this.#bus.emit('update', this.#update)
	}

	// render
	#dot = (i) => {
		return `
<div class="js__dot size-2.5 rounded-full bg-secondary-800"></div>`
	}
	#dots = () => {
		return `
<div class="flex justify-center items-center gap-1.5 text-golos transition">
	${[...Array(this.#bus.state.slide.quantity).keys()].map(this.#dot).join('')}
</div>`
	}
	#fixSlideCurrent = (slideCurrent) => {
		if (slideCurrent < 0) {
			return this.#fixSlideCurrent(
				slideCurrent + this.#bus.state.slide.quantity,
			)
		}
		if (slideCurrent > this.#bus.state.slide.quantity - 1) {
			return this.#fixSlideCurrent(
				slideCurrent - this.#bus.state.slide.quantity,
			)
		}
		return slideCurrent
	}
	get #slideCurrent() {
		return this.#fixSlideCurrent(this.#bus.state.slide.current) + 1
	}
	#decimal = () => {
		return `
<div class="flex justify-center items-center text-golos">
	<span id="decimal" class="transition">${this.#slideCurrent}</span>
	<span class="text-secondary-800">/ ${this.#bus.state.slide.quantity}</span>
</div>`
	}
	get #slideInfo() {
		return (
			{
				dots: this.#dots,
				decimal: this.#decimal,
			}[this.#bus.props['controls-variant']]() ?? ''
		)
	}
	get #slot() {
		return `
<div class="flex items-center gap-4">
	<button
		is="a-button"
		id="prev"
		a-icon
		a-name="${this.getAttribute(keys.id)}-prev"
		class="!text-white"
	>
		<a-icon
			a-icon="chevron-right"
			class="size-4 rotate-180"
		></a-icon>
	</button>
	${this.#slideInfo}
	<button
		is="a-button"
		id="next"
		a-icon
		a-name="${this.getAttribute(keys.id)}-next"
		class="!text-white"
	>
		<a-icon
			a-icon="chevron-right"
			class="size-4"
		></a-icon>
	</button>
</div>`
	}
	#render = () => {
		defineShadow.call(
			this,
			`
<div class="h-full flex justify-center md:justify-end items-center gap-4">
	${this.#slot}
</div>

${styleLink()}`,
		)
	}

	// update
	#prev = () => {
		this.#bus.prev()
		this.#bus.on('update')
	}
	#next = () => {
		this.#bus.next()
		this.#bus.on('update')
	}
	#updateDecimal = () => {
		if (this.#bus.props['controls-variant'] !== 'decimal') {
			return
		}

		this.#node.decimal.innerHTML = `${this.#slideCurrent}`
	}
	#updateDotted = () => {
		this.#node.dots.forEach((item, idx) => {
			idx === this.#bus.state.slide.current
				? item.classList.add('!bg-black')
				: item.classList.remove('!bg-black')
		})
	}
	#update = () => {
		this.#node.prev.setAttribute('a-disabled', this.#bus.state.disabled.prev)
		this.#node.next.setAttribute('a-disabled', this.#bus.state.disabled.next)
		this.#updateDecimal()
		this.#updateDotted()
	}
}
customElements.define('a-slider-controls', SliderControls)
