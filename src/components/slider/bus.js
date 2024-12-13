import { keys } from './config'

export const hasSlider = function () {
	return props.has(this.getAttribute(keys.id))
}

const defineInitialState = function (id, ctx) {
	return props.get(id).infinity
		? {
				slide: {
					current: 0,
					quantity: [...ctx.children].length - 1,
					min: -1,
					max: [...ctx.children].length,
				},
				ctx,
			}
		: {
				slide: {
					current: 0,
					quantity: [...ctx.children].length - 1,
					min: 0,
					max: [...ctx.children].length - 1,
				},
				ctx,
			}
}
const defineProps = function (ctx) {
	return {
		controlsVariant: ctx.getAttribute('controls-variant') ?? 'base',
		infinity: ctx.getAttribute('infinity') !== undefined,
		autoChange: +ctx.getAttribute('auto-change'),
		slides: JSON.parse(ctx.getAttribute('slides') ?? {}),
	}
}

//
// bus
//

const props = new Map()
const state = {}
const cbs = []

export class SliderBus {
	#id
	#timeout
	constructor(id, ctx) {
		this.#id = id
		if (!ctx) return

		props.set(id, defineProps(ctx))
		state[id] = defineInitialState(id, ctx)
		this.#defineState()
		this.#initAutoChange()
	}

	#defineState = () => {
		this.state.disabled = {
			prev: this.state.slide.current === this.state.slide.min,
			next: this.state.slide.current === this.state.slide.max,
		}
	}
	get props() {
		return props.get(this.#id)
	}
	get state() {
		return state[this.#id]
	}

	// cbs
	emit = (name, cb) => {
		cbs.push({
			id: this.#id,
			name,
			cb,
		})
	}
	on = (cbName) => {
		cbs
			.filter(({ id, name }) => id === this.#id && name === cbName)
			.forEach(({ cb }) => cb())
	}

	// changes state
	prev = () => {
		clearTimeout(this.state.timeout)
		this.#autoChange()

		this.state.slide.current--
		this.#defineState()
	}
	next = (auto) => {
		if (!auto) {
			clearTimeout(this.state.timeout)
			this.#autoChange()
		}

		this.state.slide.current++
		this.#defineState()
	}

	// auto change
	#autoChange = () => {
		this.state.timeout = setTimeout(() => {
			this.next(true)
			this.on('update')
			this.#autoChange()
		}, 1000 * this.props.autoChange)
	}
	#initAutoChange = () => {
		if (!this.props.autoChange) {
			return
		}
		if (!this.props.infinity) {
			return console.error(
				'Auto-сhange можно применять только вместе с infinity',
			)
		}

		this.#autoChange()
	}
}
