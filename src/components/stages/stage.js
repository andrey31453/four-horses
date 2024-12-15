import { aTailwindLink } from '/src/utils/helpers/a-tailwind-link'
import { defineShadow } from '/src/utils/helpers/shadow.js'

class Stage extends HTMLElement {
	constructor() {
		super()
		this.#render()
	}

	#render() {
		defineShadow.call(
			this,
			`
<div class="flex justify-start items-start gap-4">
	<div>
		<div class="size-9 bg-white rounded-1.5 font-semibold flex justify-center items-center">
			<span>${this.getAttribute('a-idx') || ''}</span>
		</div>
	</div>

	<div class="leading-120 font-medium">${this.innerHTML}</div>
</div>

${aTailwindLink()}`,
		)
	}
}
customElements.define('a-stage', Stage)
