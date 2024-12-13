import { utilsStyle } from '/src/utils/helpers/style'
import { defineShadow } from '/src/utils/helpers/shadow'
import { debounce } from '/src/utils/helpers/debounce'

class RunningLine extends HTMLElement {
	constructor() {
		super()
		this.#render()
		window.addEventListener('resize', debounce(this.#render.bind(this)))
	}

	#slot(copy = false) {
		return (
			`<div ${copy ? 'aria-hidden="true"' : ''} class="marquee-items flex justify-start items-center gap-3">` +
			[...this.children].reduce(
				(slot, child) => `
${slot}
<div class="marquee-item">${child.innerHTML}</div>
<div class="marquee-item size-1.5 rounded-1.5 bg-white"></div>
`,
				'',
			) +
			'</div>'
		)
	}

	#render() {
		defineShadow.call(
			this,
			`
<div class="marquee py-2.5 flex overflow-hidden gap-3 bg-primary text-white leading-110 text-lg whitespace-nowrap">
	${this.#slot()}
	${[...Array(+this.getAttribute('copy') ?? 1).keys()]
		.map(() => this.#slot(true))
		.join('')}
</div>

<style>
${utilsStyle()}

.marquee-item {
  transition: all var(--animation-duration) ease-in-out;
}
.marquee-items {
  animation: marquee ${this.getAttribute('duration')}s linear infinite;
}
.marquee:hover .marquee-items {
  animation-play-state: paused;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 100px));
  }
}
</style>`,
		)
	}
}
customElements.define('a-running-line', RunningLine)
