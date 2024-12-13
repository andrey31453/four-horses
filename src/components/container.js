class Container extends HTMLElement {
	constructor() {
		super()
		this.classList.add('md:px-18')
		this.classList.add('sm:px-8')
		this.classList.add('px-5')
		this.classList.add('block')
	}
}
customElements.define('a-container', Container)
