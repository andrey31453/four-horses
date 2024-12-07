class AHeader extends HTMLElement {
	constructor() {
		super();
	}

	render() {
		this.innerHTML = this.getAttribute('test');
	}


	attributeChangedCallback(name, old, newV) {
		console.log(name);
		console.log(old);
		console.log(newV);


		this.render();
	}

	static get observedAttributes() {
		return ['test'];
	}
}

customElements.define('a-header', AHeader);
//
