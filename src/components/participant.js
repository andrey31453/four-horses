import { callback } from '@/composables/callback'

class Participant extends HTMLElement {
	constructor() {
		super()
		this.#render()
		this.#emit()
	}

	#emit = () => {
		callback.emit({
			name: 'participant-goTo',
			cb: this.#goTo,
		})
	}

	#goTo = (url) => {
		window.open(url, '_blank')
	}

	#render() {
		this.innerHTML = `
<div class="px-4 grid justify-center gap-1">
	<div class="bg-surface rounded-full overflow-hidden">
		<image class="w-full" src="${this.getAttribute('image') ?? 'src/assets/icons/participant.svg'}">
	</div>
	<div class="h-4"></div>
	<div class="text-center leading-120 text-golos-text font-semibold text-xl">${this.getAttribute('name')}</div>
	<div class="text-center leading-120 text-golos-text text-secondary-400">${this.getAttribute('title')}</div>
	<div class="h-2"></div>
	<button
		is="a-button"
		a-name="participant-goTo"
		a-prop="${this.getAttribute('href')}"
	>
		Подробнее
	</button>
</div>`
	}
}
customElements.define('a-participant', Participant)
