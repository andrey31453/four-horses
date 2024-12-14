import { throttle } from '/src/utils/helpers/debounce'

let ons = []
export const callback = {
	emit: (options) => {
		ons.push(options)
	},
	on: ({ target, name, props, type }) => {
		target.addEventListener(
			type ?? 'click',
			throttle(() => {
				ons
					.filter((on) => on.name === name)
					.forEach(({ cb }) => cb(props ?? null))
			}),
		)
	},
	off: (name) => {
		ons = ons.filter((on) => on.name !== name)
	},
}
