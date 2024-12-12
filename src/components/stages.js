import { utilsStyle } from '@/utils/helpers/style'
import { defineShadow } from '@/utils/helpers/shadow'
import { debounce } from '@/utils/helpers/debounce'
import { isScreen } from '../utils/helpers/screen'

//	mobile stages

class MobileStages {
	constructor(children) {
		this.children = [...children]
	}

	get innerHTML() {
		return 'MobileStages'
	}
}

// desktop stages

class DesktopStages {
	#children = []
	#options = {}

	constructor(children, options = {}) {
		this.#children = [...children]
		this.#options = options
	}

	child = (child, childIdx) =>
		`
<div class="stage-item col-span-${child.getAttribute('col') ?? 1} row-span-${child.getAttribute('row') ?? 1} flex items-start gap-4 p-5">
	<div>
		<div class="size-9 bg-white rounded-1.5 font-semibold flex justify-center items-center">
			<span>${childIdx + 1}</span>
		</div>
	</div>
	
	<div class="leading-120 font-medium">${child.innerHTML}</div>
</div>`
	get #slot() {
		return this.#children.map(this.child).join('')
	}

	get innerHTML() {
		return `
<div class="grid grid-cols-${this.#options.cols} gap-5">
${this.#slot}
</div>

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
</style>`
	}
}

// stages wrapper

class Stages extends HTMLElement {
	#default_options = {
		cols: 12,
	}
	constructor() {
		super()
		this.#render()
		window.addEventListener('resize', debounce(this.#render.bind(this)))
	}

	#render() {
		defineShadow.call(
			this,
			`
${isScreen('md') ? new DesktopStages(this.children, { cols: this.getAttribute('cols') || this.#default_options.cols }).innerHTML : new MobileStages(this.children).innerHTML}

<style>
${utilsStyle()}
</style>`,
		)
	}
}
customElements.define('a-stages', Stages)
