import { aTailwindLink } from '/src/utils/helpers/a-tailwind-link'
import { defineShadow } from '/src/utils/helpers/shadow.js'

class StageGroup extends HTMLElement {
	constructor() {
		super()
		this.#render()
	}

	#render() {
		this.classList.add('flex')
		this.classList.add('h-full')
		this.classList.add('w-full')
		defineShadow.call(
			this,
			`
<a-surface>
	<div class="flex flex-col items-start gap-7 p-5 max-md:pt-15 h-full">
	${this.innerHTML}
	</div>
</a-surface>

${aTailwindLink()}`,
		)
	}
}
customElements.define('a-stage-group', StageGroup)
