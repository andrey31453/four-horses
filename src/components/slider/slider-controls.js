import { aTailwindLink } from '@/utils/helpers/a-tailwind-link'
import { defineShadow } from '@/utils/helpers/shadow'
import { windowCallback } from '@/composables/callback'
import { keys } from './config'
import { sliderBus } from './bus'
import { mounted } from '@/utils/helpers/mounted.js'
import { isFunction } from '@/utils/helpers/type.js'
import { nextTick } from '@/utils/helpers/next-tick.js'

class SliderControls extends HTMLElement {
	#bus
	#unMounted
	constructor() {
		super()
		this.#mounted()
	}

	#mounted = async () => {
		this.#initBus()
		this.#unMounted = await mounted.call(
			this,
			this.#render,
			[this.#forceUpdate, this.#update],
			() => true,
		)
		this.#emit()
	}
	#initBus = () => {
		this.#bus = sliderBus(this.getAttribute(keys.id))
	}
	disconnectedCallback() {
		isFunction(this.#unMounted) && this.#unMounted()
		windowCallback.off(`${this.getAttribute(keys.id)}-prev`)
		windowCallback.off(`${this.getAttribute(keys.id)}-next`)
	}

	// node
	get #node() {
		return {
			prev: this.shadowRoot.getElementById('prev'),
			next: this.shadowRoot.getElementById('next'),
			'decimal-current': this.shadowRoot.getElementById('decimal-current'),
			'decimal-quantity': this.shadowRoot.getElementById('decimal-quantity'),
			dots: () => this.shadowRoot.querySelectorAll('.js__dot'),
			'dots-wrapper': this.shadowRoot.querySelector('.js__dots-wrapper'),
		}
	}

	// emit
	#emit = () => {
		windowCallback.emit(`${this.getAttribute(keys.id)}-prev`, this.#prev)
		windowCallback.emit(`${this.getAttribute(keys.id)}-next`, this.#next)
		this.#bus.emit('update', this.#update)
	}

	// render
	#dot = () => {
		return `
<div class="relative">
	<div class="js__dot hidden">
			<div class="absolute animate-ping size-full rounded-full bg-black/85"></div>
			<div class="absolute size-full rounded-full bg-black"></div>
	</div>
	<div class="size-2.5 rounded-full bg-secondary-800"></div>
</div>`
	}
	#dotsWithoutWrapper = () => {
		return [...Array(this.#bus.state.slide.quantity).keys()]
			.map(this.#dot)
			.join('')
	}
	#dots = () => {
		return `
<div class="js__dots-wrapper flex justify-center items-center gap-1.5 text-golos transition">
	${this.#dotsWithoutWrapper()}
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
		return slideCurrent + 1
	}
	get #slideCurrent() {
		return this.#fixSlideCurrent(
			this.#bus.state.slide.current + this.#bus.cols - 1,
		)
	}
	#decimal = () => {
		return `
<div class="flex justify-center items-center gap-1 text-golos">
	<span id="decimal-current" class="transition">${this.#slideCurrent}</span>
	<span class="text-secondary-500">/</span>
	<span id='decimal-quantity' class="text-secondary-500">${this.#bus.state.slide.quantity}</span>
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
<div class="min-h-9 flex justify-center md:justify-end items-center gap-4">
	${this.#slot}
</div>

${aTailwindLink()}`,
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

		this.#node['decimal-current'].innerHTML = this.#slideCurrent
		this.#node['decimal-quantity'].innerHTML = this.#bus.state.slide.quantity
	}
	#updateDotted = () => {
		this.#node.dots().forEach((item, idx) => {
			idx === this.#bus.state.slide.current
				? item.classList.remove('hidden')
				: item.classList.add('hidden')
		})
	}
	#update = () => {
		this.#node.prev.setAttribute('a-disabled', this.#bus.state.disabled.prev)
		this.#node.next.setAttribute('a-disabled', this.#bus.state.disabled.next)

		this.#updateDecimal()
		this.#updateDotted()
	}
	#forceUpdate = async () => {
		if (!this.#node['dots-wrapper']) return
		this.#node['dots-wrapper'].innerHTML = this.#dotsWithoutWrapper()
	}
}
customElements.define('a-slider-controls', SliderControls)
