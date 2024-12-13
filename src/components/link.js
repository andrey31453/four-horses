class Link extends HTMLAnchorElement {
	constructor() {
		super()
		this.classList.add('text-blue')
		this.classList.add('decoration-none')
		this.classList.add('leading-120')
		this.classList.add('text-golos-text')
	}
}
customElements.define('a-link', Link, { extends: 'a' })
