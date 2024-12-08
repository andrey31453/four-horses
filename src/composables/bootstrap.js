import '@/components'

class Bootstrap {
  #templates = []

  use = (template) => {
    this.#templates.push(template)
    return this
  }

  mount = (selector) => {
    const target = document.querySelector(selector)
    if (!target) {
      throw new Error(`Body not have ${selector}`)
    }

    this.#templates.forEach((template) => target.appendChild(template))
  }
}
export const bootstrap = () => new Bootstrap()
