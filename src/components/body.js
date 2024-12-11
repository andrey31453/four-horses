import ons from '@/ons'
import { utilsStyle } from '@/utils/helpers/style'

class Header extends HTMLElement {
	constructor() {
		super()
		this.render()
	}

	render() {
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
      <style>
        ${utilsStyle()} 
        :host {
          background: var(--black);
          display: block;
        }
        ::slotted(h2) {
        color: red;
        }
      </style>
      
      <div class="text-primary">
      fsfsafa
			</div>
      
      <slot></slot>
      
      <button
        is="a-button"
        test="sdfsdfs"
        click="click"
      ></button>
    `
	}

	attributeChangedCallback(name, old, newV) {
		this.render()
	}

	static get observedAttributes() {
		return ['test']
	}
}
customElements.define('a-header', Header)

class Button extends HTMLButtonElement {
	constructor() {
		super()
		this.turnOn()
	}

	turnOn() {
		const propClick = this.getAttribute('click')
		if (!propClick) return

		this.addEventListener('click', ons[propClick])
	}

	render() {
		this.innerHTML = this.getAttribute('test')
	}

	attributeChangedCallback(name, old, newV) {
		this.render()
	}

	static get observedAttributes() {
		return ['test']
	}
}

customElements.define('a-button', Button, {
	extends: 'button',
})
