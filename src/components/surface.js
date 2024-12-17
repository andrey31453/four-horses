import { defineShadow } from '@/utils/helpers/shadow.js'
import { aTailwindLink } from '@/utils/helpers/a-tailwind-link.js'

class Surface extends HTMLElement {
	constructor() {
		super()
		this.#render()
	}

	#render() {
		this.classList.add('flex')
		this.classList.add('overflow-hidden')
		this.classList.add('w-full')
		defineShadow.call(
			this,
			`
<div class="surface flex w-full h-full">
	<div class="w-full">
		<slot></slot>
	</div>
</div>

${aTailwindLink()}
<style>
.surface {
  position: relative;
	
	background-image: url("images/surface.png");
	background-position: center;
	background-repeat: repeat;
	background-size: auto auto;
	
	&::before {
		position: absolute;
		content: "";
		
		inset: 0;
		background-color: rgb(var(--surface));
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
