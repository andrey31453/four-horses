class Teleport extends HTMLElement {
	constructor() {
		super()
		this.classList.add('hidden')
		window.addEventListener('load', this.#teleport.bind(this))
	}

	#teleport = () => {
		const teleportNodes = document.querySelectorAll(
			`[a-teleport-id=${this.getAttribute('a-id')}]`,
		)
		teleportNodes.forEach((el) => (el.innerHTML = this.innerHTML))
	}
}
customElements.define('a-teleport', Teleport)
