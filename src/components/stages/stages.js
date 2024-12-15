import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow'
import { mounted } from '/src/utils/helpers/mounted.js'
import { screenValue } from '/src/utils/helpers/screen-value.js'

class Stages extends HTMLElement {
	constructor() {
		super()
		this.#mounted()
	}
	#mounted = async () => {
		await mounted.call(this, [this.#render])
	}

	// state
	get #children() {
		return [...this.children]
	}
	get #gridCols() {
		return this.getAttribute('a-cols') || 12
	}
	get #stageGroupsQuantity() {
		return (
			screenValue(JSON.parse(this.getAttribute('a-stages-group') ?? {})) || 1
		)
	}

	cols = (i) => {
		return +this.#children[i]?.getAttribute('cols') || 1
	}
	rows = (i) => {
		return +this.#children[i]?.getAttribute('rows') || 1
	}
	stageQuantities = (i) => {
		const cols = this.cols(i) === 1 ? 0 : this.cols(i)
		const rows = this.rows(i) === 1 ? 0 : this.rows(i)
		return !cols && !rows ? 1 : cols + rows
	}

	// render
	groupClass = (i) => {
		return `col-span-${this.cols(i)} row-span-${this.rows(i)}`
	}
	get #slot() {
		let slot = `<div class="${this.groupClass(0)}"><a-stage-group>`
		let current = 0

		for (let i = 0; i < this.#children.length; i++) {
			slot += `
<a-stage a-idx="${i + 1}" class="${this.#children[i].className}">
	${this.#children[i].innerHTML}
</a-stage>`

			current += this.stageQuantities(i)
			if (
				current + this.stageQuantities(i + 1) > this.#stageGroupsQuantity &&
				i !== this.#children.length - 1
			) {
				slot += `</a-stage-group></div><div class="${this.groupClass(i + 1)}"><a-stage-group>`
				current = 0
			}
		}

		slot += `</a-stage-group></div>`
		return slot
	}

	#render() {
		defineShadow.call(
			this,
			`
<div class="max-md:hidden grid grid-cols-${this.#gridCols} gap-5">
	${this.#slot}
</div>

<div class="md:hidden">
<div class="h-23"></div>
	<div class="grid gap-7">
		<a-slider
		 a-id="stages"
		 class=""
		 slides='{"xs": 1}'
		>
		 ${this.#slot}
		</a-slider>
		<a-slider-controls
		 a-id="stages"
		></a-slider-controls>
	</div>
</div>

${styleLink()}
<style>
.stage-item {
	position: relative;
	
	background-image: url("src/assets/images/bg.png");
	background-position: center;
	background-repeat: repeat;
	background-size: auto auto;
	
	&::before {
		position: absolute;
		content: "";
		
		inset: 0;
		background-color: var(--surface);
		opacity: 0.85;
		z-index: 1;
	}
	
	& > * {
		position: relative;
		z-index: 2;
	}
}
</style>	
		`,
		)
	}
}
customElements.define('a-stages', Stages)
