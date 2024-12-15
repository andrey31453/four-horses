import { throttle } from '/src/utils/helpers/debounce'

let windowOns = []
export const windowCallback = {
	emit: (name, cb) => {
		windowOns.push({ name, cb })
	},
	on: ({ target, name, props, type }) => {
		target.addEventListener(
			type ?? 'click',
			throttle(() => {
				windowOns
					.filter((on) => on.name === name)
					.forEach(({ cb }) => cb(props ?? null))
			}),
		)
	},
	off: (name) => {
		windowOns = windowOns.filter((on) => on.name !== name)
	},
}

let ons = []
export const callback = {
	emit: (name, cb) => {
		ons.push(name, cb)
	},
	on: (name, props) => {
		ons.filter((on) => on.name === name).forEach(({ cb }) => cb(props))
	},
	off: (name) => {
		ons = ons.filter((on) => on.name !== name)
	},
}
