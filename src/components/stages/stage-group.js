import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow.js'

class StageGroup extends HTMLElement {
	constructor() {
		super()
		this.#render()
	}

	#render() {
		this.classList.add('h-full')
		this.classList.add('w-full')
		defineShadow.call(
			this,
			`
<div class="stage-item flex flex-col items-start gap-7 p-5 max-md:pt-15 h-full">
${this.innerHTML}
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
customElements.define('a-stage-group', StageGroup)
