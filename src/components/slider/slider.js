import { utilsStyle } from '/src/utils/helpers/style'
import { defineShadow } from '/src/utils/helpers/shadow'
import { isScreen } from '/src/utils/helpers/screen'
import { mounted } from '/src/utils/helpers/component'
import { keys } from './config'
import { hasSlider, SliderBus } from './bus'

class Slider extends HTMLElement {
	#bus
	constructor() {
		super()
		if (hasSlider.call(this)) {
			return console.error(
				`Duplicate ${keys.id}: ${this.getAttribute(keys.id)}`,
			)
		}

		this.#bus = new SliderBus(this.getAttribute(keys.id), this)
		mounted.call(this, [this.#render, this.#emit, this.#update])
	}

	// emit
	#emit = () => {
		this.#bus.emit('update', this.#update)
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

	#child(child, childIdx) {
		const width = `calc(100% / ${this.#cols} - 1.25rem * ${this.#cols - 1} / ${this.#cols})`
		return `
<div id='child-${childIdx}' class="flex flex-col items-center" style="min-width: ${width}; width: ${width}">
	${child.innerHTML}
</div>`
	}
	get #slot() {
		return (
			this.#child(this.#children.at(-1), -1) +
			this.#children.reduce(
				(slot, child, childIdx) => `
${slot}
${this.#child(child, childIdx)}
`,
				'',
			) +
			this.#child(this.#children.at(0), this.#children.length)
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

<style>
${utilsStyle()}
</style>`,
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
transform: translate3d(${this.#sliderShift}px, 0px, 0);`
	}
	#update = () => {
		this.#node.slider.setAttribute('style', this.#sliderStyle)
	}
}
customElements.define('a-slider', Slider)
