import { styleLink } from '/src/utils/helpers/style-link'
import { defineShadow } from '/src/utils/helpers/shadow.js'

class StageGroup extends HTMLElement {
	constructor() {
		super()
		this.#render()
	}

	#render() {
		this.classList.add('flex')
		this.classList.add('h-full')
		defineShadow.call(
			this,
			`
<a-surface>
	<div class="flex flex-col items-start gap-7 p-5 max-md:pt-15 h-full">
	${this.innerHTML}
	</div>
</a-surface>

${styleLink()}`,
		)
	}
}
customElements.define('a-stage-group', StageGroup)
