import { callback } from '/src/composables/callback.js'
import { defineShadow } from '../utils/helpers/shadow.js'

const teleportDons = []

class Teleport extends HTMLElement {
	#content
	constructor() {
		super()
		this.classList.add('hidden')
		this.#content = this.innerHTML
		this.innerHTML = ''
		window.addEventListener('load', this.#teleport.bind(this))
	}

	#teleport = () => {
		const teleportNodes = document.querySelectorAll(
			`[a-teleport-id=${this.getAttribute('a-id')}]`,
		)
		teleportNodes.forEach((el) => (el.innerHTML = this.innerHTML))
		callback.on('teleport-done', this.getAttribute('a-id'))
	}
}
customElements.define('a-teleport', Teleport)

class WaitTeleport extends HTMLElement {
	constructor() {
		super()
		this.classList.add('hidden')
		callback.emit('teleport-done', this.#teleportDone)
	}

	#teleportDone = (id) => {
		if (this.getAttribute('a-id') !== id) return
		defineShadow(this, this.innerHTML)
	}
}
customElements.define('a-wait-teleport', WaitTeleport)
