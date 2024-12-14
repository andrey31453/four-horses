import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow'
import { isScreen } from '/src/utils/helpers/screen'
import { mounted } from '/src/utils/helpers/component'
import { config } from '/src/assets/config'
import { nextTick } from '/src/utils/helpers/next-tick'
import { keys } from './config'
import { SliderBus } from './bus'
import { store } from './store'

class Slider extends HTMLElement {
	#bus
	constructor() {
		super()
		if (store.props(this.getAttribute(keys.id))) {
			return console.error(
				`Duplicate ${keys.id}: ${this.getAttribute(keys.id)}`,
			)
		}

		this.#bus = new SliderBus(this.getAttribute(keys.id), this)
		mounted.call(this, [
			this.#render,
			this.#emit,
			this.#update,
			this.#onTransition,
		])
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
		return Object.entries(this.#bus.props.slides).reduce(
			(cols, [breadcrumb, colQuantity]) =>
				isScreen(breadcrumb) ? colQuantity : cols,
			1,
		)
	}

	#child = (child, childIdx) => {
		const width = `calc(100% / ${this.#cols} - 1.25rem * ${this.#cols - 1} / ${this.#cols})`
		return `
<div id='child-${childIdx}' class="flex flex-col items-center" style="min-width: ${width}; max-width: ${width}">
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
	<div id="slider" class="flex flex-start gap-5">
			${this.#slot}
	</div>
</div>

${styleLink()}`,
		)
	}

	// update
	get #containerWidth() {
		return this.closest('*:not(a-slider-content)').offsetWidth
	}
	get #sliderShift() {
		return (
			-(this.#bus.state.slide.current + 1) *
			(this.#node.zeroChild.offsetWidth + 20)
		)
	}
	get #sliderStyle() {
		return `
max-width: ${this.#containerWidth}px;
transform: translate(${this.#sliderShift}px, 0px);`
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
