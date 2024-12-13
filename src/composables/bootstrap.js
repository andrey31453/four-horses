import '/src/components'

class Bootstrap {
	#templates = []
	#uses = []

	use = (composable) => {
		this.#uses.push(composable)
		return this
	}

	template = (template) => {
		this.#templates.push(template)
		return this
	}

	mount = (selector) => {
		const target = document.querySelector(selector)
		if (!target) {
			throw new Error(`Body not have ${selector}`)
		}

		target.setAttribute('a-mount', '')
		this.#uses.forEach((use) => use())
		this.#templates.forEach((template) => target.appendChild(template))
	}
}
export const bootstrap = () => new Bootstrap()
