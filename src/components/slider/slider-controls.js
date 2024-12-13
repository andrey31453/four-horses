import { utilsStyle } from '/src/utils/helpers/style'
import { defineShadow } from '/src/utils/helpers/shadow'
import { mounted } from '/src/utils/helpers/component'
import { callback } from '/src/composables/callback'
import { keys } from './config'
import { hasSlider, SliderBus } from './bus'

class SliderControls extends HTMLElement {
	#bus

	constructor() {
		super()
		this.#safeMount()
	}

	// safe mount after mount Slider
	#mounted = {
		quantity: 0,
		max: 100,
	}
	#safeMount() {
		if (this.#mounted.quantity >= this.#mounted.max) {
			return console.error(
				`Don't correct slider-id: ${this.getAttribute(keys.id)}`,
			)
		}
		if (!hasSlider.call(this)) {
			this.#mounted.quantity++
			return setTimeout(this.#safeMount.bind(this), 10)
		}

		this.#bus = new SliderBus(this.getAttribute(keys.id))
		mounted.call(this, [this.#render, this.#emit, this.#update])
	}

	// node
	get #node() {
		return {
			prev: this.shadowRoot.getElementById('prev'),
			next: this.shadowRoot.getElementById('next'),
		}
	}

	// emit
	#emit = () => {
		callback.emit({
			name: `${this.getAttribute(keys.id)}-prev`,
			cb: this.#prev,
		})
		callback.emit({
			name: `${this.getAttribute(keys.id)}-next`,
			cb: this.#next,
		})
		this.#bus.emit('update', this.#update)
	}

	// render
	get #slot() {
		return `
<button
	is="a-button"
	id="prev"
	a-name="${this.getAttribute(keys.id)}-prev"
>
	prev
</button>
<button
	is="a-button"
	id="next"
	a-name="${this.getAttribute(keys.id)}-next"
>
	next
</button>`
	}
	#render = () => {
		defineShadow.call(
			this,
			`
<div class="flex flex-center items-center gap-4">
	${this.#slot}
</div>

<style>
${utilsStyle()}
</style>`,
		)
	}

	// update
	#update = () => {
		this.#node.prev.setAttribute('a-disabled', this.#bus.state.disabled.prev)
		this.#node.next.setAttribute('a-disabled', this.#bus.state.disabled.next)
	}
	#prev = () => {
		this.#bus.prev()
		this.#bus.on('update')
	}
	#next = () => {
		this.#bus.next()
		this.#bus.on('update')
	}
}
customElements.define('a-slider-controls', SliderControls)
