import { defineShadow } from '/src/utils/helpers/shadow.js'
import { styleLink } from '/src/utils/helpers/style-link.js'

class Surface extends HTMLElement {
	constructor() {
		super()
		this.#render()
	}

	#render() {
		this.classList.add('flex')
		this.classList.add('overflow-hidden')
		defineShadow.call(
			this,
			`
<div class="surface flex w-full">
	<div class="w-full">
		<slot></slot>
	</div>
</div>

${styleLink()}
<style>
.surface {
  position: relative;
	
	background-image: url("src/assets/images/surface.png");
	background-position: center;
	background-repeat: repeat;
	background-size: auto auto;
	
	&::before {
		position: absolute;
		content: "";
		
		inset: 0;
		background-color: var(--surface);
		opacity: 0.8;
		z-index: 1;
	}
	
	&  > * {
		position: relative;
		z-index: 2;
	}
}
</style>`,
		)
	}
}

customElements.define('a-surface', Surface)
