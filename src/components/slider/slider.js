import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow'
import { mounted } from '/src/utils/helpers/mounted'
import { config } from '/src/assets/config'
import { nextTick } from '/src/utils/helpers/next-tick'
import { keys } from './config'
import { sliderBus } from './bus'
import { isFunction } from '/src/utils/helpers/type.js'
import { screenValue } from '/src/utils/helpers/screen-value.js'
import { windowCallback } from '../../composables/callback.js'

class Slider extends HTMLElement {
	#bus
	#unMounted
	constructor() {
		super()
		this.#mounted()
	}

	#mounted = async () => {
		// TODO не работает await???
		this.#unMounted = await mounted.call(this, [this.#render, this.#update])

		this.#initBus()
		this.#render()
		this.#emit()
		this.#onTransition()
	}
	#initBus = () => {
		this.#bus = sliderBus(this.getAttribute(keys.id), this)
	}
	disconnectedCallback() {
		isFunction(this.#unMounted) && this.#unMounted()
	}

	// emit
	#emit = () => {
		this.#bus.emit('update', this.#update)
		this.#bus.emit('force-update', this.#forceUpdate)
	}

	// node
	get #children() {
		return [...this.children]
	}
	get #node() {
		return {
			slider: this.shadowRoot.getElementById('slider'),
			zeroChild: this.shadowRoot.getElementById('child-0'),
		}
	}

	// render
	get #cols() {
		return screenValue(this.#bus.props.slides)
	}
	get #maxChildHeight() {
		return this.#children.reduce(
			(maxChildHeight, child) => Math.max(maxChildHeight, child.clientHeight),
			0,
		)
	}
	#child = (child, childIdx) => {
		const width = `${this.#slideWidth}px`
		return `
<div
	id='child-${childIdx}'
	class="flex flex-col items-center h-full" 
	style="
		min-width: ${width};
		max-width: ${width};
		min-height: ${this.#maxChildHeight}px;
	">
	${child.innerHTML}
</div>`
	}
	#childrenSlot = (shiftNumber = 0) => {
		return this.#children.reduce(
			(slot, child, childIdx) => `
${slot}
${this.#child(child, childIdx + shiftNumber)}`,
			'',
		)
	}
	get #slot() {
		return (
			this.#childrenSlot(-this.#children.length) +
			this.#childrenSlot() +
			this.#childrenSlot(this.#children.length)
		)
	}
	#render = () => {
		defineShadow.call(
			this,
			`
<div class="overflow-hidden">
	<div id="slider" class="grid flex-start gap-5">
			${this.#slot}
	</div>
</div>

${styleLink()}`,
		)
	}

	// update
	get #slideWidth() {
		return (
			this.#containerWidth / this.#cols - (20 * (this.#cols - 1)) / this.#cols
		)
	}
	get #containerWidth() {
		const container = document.body.querySelector('a-container')
		const containerPadding = getComputedStyle(container)[
			'padding-left'
		].replace('px', '')
		return container.offsetWidth - 2 * containerPadding
	}
	get #sliderShift() {
		return -this.#bus.state.slide.current * (this.#slideWidth + 20)
	}
	get #sliderStyle() {
		return `
max-width: ${this.#containerWidth}px;
transform: translate(${this.#sliderShift}px, 0);
grid-template-columns: repeat(${3 * this.#children.length}, 1fr);`
	}
	#update = () => {
		this.#node.slider.setAttribute('style', this.#sliderStyle)
	}
	#onTransition = () => {
		this.#node.slider.classList.add('transition')
	}
	#offTransition = () => {
		this.#node.slider.classList.remove('transition')
	}
	#forceUpdate = () => {
		nextTick(
			[this.#offTransition, this.#update, this.#onTransition],
			config.vars['animation-duration'].value,
		)
	}
}
customElements.define('a-slider', Slider)
