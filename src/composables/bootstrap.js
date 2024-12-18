import '@/components'

class Bootstrap {
	#templates = []
	#uses = []

	use = (composable) => {
		this.#uses.push(composable)
		return this
	}

	viteBase = (template) => {
		template.querySelectorAll('style').forEach((el) => {
			el.innerHTML = el.innerHTML
				.replace(/url\(/g, `url(${import.meta.env.BASE_URL}`)
				.replace(/\/{2,}/g, '\/')
		})
	}

	template = (template) => {
		this.viteBase(template)
		this.#templates.push(template)
		return this
	}

	mount = (selector) => {
		const target = document.querySelector(selector)
		if (!target) {
			throw new Error(`Body not have ${selector}`)
		}

		target.setAttribute('a-mount', '')
		this.#templates.forEach((template) => target.appendChild(template))
		this.#uses.forEach((use) => use())
	}
}
export const bootstrap = () => new Bootstrap()
