import ons from '@/ons'
import { utilsStyle } from '@/utils/helpers/style'

class Body extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/src/assets/styles/utils.css" />
      <style> ${utilsStyle()} </style>
      
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
customElements.define('a-header', Body)

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
