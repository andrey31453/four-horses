import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow'
import { debounce } from '/src/utils/helpers/debounce'
import { isScreen } from '../utils/helpers/screen'
import { mounted } from '../utils/helpers/component.js'

class Stages extends HTMLElement {
	constructor() {
		super()
		this.#mounted()
	}

	#mounted = async () => {
		await mounted.call(this, [this.#render])
	}

	get #cols() {
		return this.getAttribute('cols') || 12
	}
	get #children() {
		return [...this.children]
	}

	// render
	child = (child, childIdx) => {
		return `
<div class="stage-item col-span-${child.getAttribute('col') ?? 1} row-span-${child.getAttribute('row') ?? 1} flex items-start gap-4 p-5">
	<div>
		<div class="size-9 bg-white rounded-1.5 font-semibold flex justify-center items-center">
			<span>${childIdx + 1}</span>
		</div>
	</div>
	
	<div class="leading-120 font-medium">${child.innerHTML}</div>
</div>`
	}
	#render() {
		console.log(this.clientWidth)
		defineShadow.call(
			this,
			`
<div class="grid grid-cols-${this.#cols} gap-5">
	${this.#children.map(this.child).join('')}
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
</style>`,
		)
	}
}
customElements.define('a-stages', Stages)
