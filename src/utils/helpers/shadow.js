export const defineShadow = function (html) {
	!this.shadowRoot && this.attachShadow({ mode: 'open' })
	this.shadowRoot.innerHTML = html
}
