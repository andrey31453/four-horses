import { aTailwindLink } from '@/utils/helpers/a-tailwind-link'
import { defineShadow } from '@/utils/helpers/shadow'
import { mounted } from '@/utils/helpers/mounted'
import { config } from '../../../a-tailwind.conf.js'
import { nextTick } from '@/utils/helpers/next-tick'
import { isFunction } from '@/utils/helpers/type.js'
import { keys } from './config'
import { sliderBus } from './bus'

class Slider extends HTMLElement {
	#bus
	#unMounted
	constructor() {
		super()
		this.#mounted()
	}

	#mounted = async () => {
		this.#initBus()
		this.#unMounted = await mounted.call(this, this.#render, [
			this.#updateState,
			this.#update,
		])
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
			children: this.shadowRoot.querySelectorAll('.child'),
		}
	}

	// render
	#child = (child, childIdx) => {
		return `
<div
	class="child flex flex-col items-center h-full" 
	style="${this.#childStyle}"
>
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

${aTailwindLink()}`,
		)
	}

	// update
	get #maxChildHeight() {
		return this.#children.reduce(
			(maxChildHeight, child) => Math.max(maxChildHeight, child.clientHeight),
			0,
		)
	}
	get #childStyle() {
		return `
min-width: ${this.#slideWidth}px;
max-width: ${this.#slideWidth}px;
min-height: ${this.#maxChildHeight}px;`
	}
	get #slideWidth() {
		return (
			this.#containerWidth / this.#bus.cols -
			(20 * (this.#bus.cols - 1)) / this.#bus.cols
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
	#updateState = () => {
		this.#bus.updateQuantity(this.#node.slider.children.length / 3)
	}
	#update = () => {
		this.#node.slider.setAttribute('style', this.#sliderStyle)
		this.#node.children.forEach((child) =>
			child.setAttribute('style', this.#childStyle),
		)
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
			// TODO взять из рут
			config.animations.vars['animation-duration'].value,
		)
	}
}
customElements.define('a-slider', Slider)
