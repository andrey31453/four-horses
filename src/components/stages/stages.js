import { aTailwindLink } from '/src/utils/helpers/a-tailwind-link'
import { defineShadow } from '/src/utils/helpers/shadow'
import { mounted } from '/src/utils/helpers/mounted.js'
import { screenValue } from '/src/utils/helpers/screen-value.js'
import { attributeJSON } from '../../utils/helpers/attribute.js'

class Stages extends HTMLElement {
	constructor() {
		super()
		mounted.call(this, null, this.#render)
	}

	// state
	get #children() {
		return [...this.children]
	}
	get #gridCols() {
		return screenValue(attributeJSON(this, 'a-cols', 12))
	}
	get #stageGroupsQuantity() {
		return screenValue(attributeJSON(this, 'a-stages-group', 1))
	}
	cols = (i) => {
		return this.#children[i]
			? screenValue(attributeJSON(this.#children[i], 'cols', { xs: 1 }))
			: { xs: 1 }
	}
	rows = (i) => {
		return this.#children[i]
			? screenValue(attributeJSON(this.#children[i], 'rows', { xs: 1 }))
			: { xs: 1 }
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
		 slides='{"xs": 1}'
		>
		 ${this.#slot}
		</a-slider>
		<a-slider-controls
		 a-id="stages"
		></a-slider-controls>
	</div>
</div>

${aTailwindLink()}`,
		)
	}
}
customElements.define('a-stages', Stages)
