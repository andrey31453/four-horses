const ons = []
export const callback = {
	emit: (options) => {
		ons.push(options)
	},
	on: ({ target, name, props, type }) => {
		target.addEventListener(type ?? 'click', () => {
			ons
				.filter((on) => on.name === name)
				.forEach(({ cb }) => cb(props ?? null))
		})
	},
}
