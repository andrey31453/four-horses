import { keys } from './config'
import { deepCopy } from '../../utils/helpers/deep'

export const hasSlider = function () {
	return props.has(this.getAttribute(keys.id))
}

export const errorMessage = function () {
	console.error(`Don't correct slider-id: ${this.getAttribute(keys.id)}`)
}

const defineState = function (state) {
	state.disabled = {
		prev: state.slide.current === state.slide.min,
		next: state.slide.current === state.slide.max,
	}
	return state
}
const defineInitialState = function (id, ctx) {
	return props.get(id).infinity
		? defineState({
				slide: {
					current: 0,
					quantity: [...ctx.children].length - 1,
					min: -1,
					max: [...ctx.children].length,
				},
				ctx,
			})
		: defineState({
				slide: {
					current: 0,
					quantity: [...ctx.children].length - 1,
					min: 0,
					max: [...ctx.children].length - 1,
				},
				ctx,
			})
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
const state = new Map()
const cbs = []

export class SliderBus {
	#id
	#timeout
	constructor(id, ctx) {
		this.#id = id
		if (!ctx) return

		props.set(id, defineProps(ctx))
		state.set(id, defineInitialState(id, ctx))
		this.#initAutoChange()
	}

	get props() {
		return props.get(this.#id)
	}
	get state() {
		return state.get(this.#id)
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
		const currentState = deepCopy(this.state)
		currentState.slide.current--
		state.set(this.#id, defineState(currentState))
	}
	next = (auto) => {
		if (!auto) {
			clearTimeout(this.state.timeout)
			this.#autoChange()
		}

		const currentState = deepCopy(this.state)
		currentState.slide.current++
		state.set(this.#id, defineState(currentState))
	}

	// auto change
	#autoChange = () => {
		const timeout = setTimeout(() => {
			this.next(true)
			this.on('update')
			this.#autoChange()
		}, 1000 * this.props.autoChange)

		const currentState = deepCopy(this.state)
		currentState.timeout = timeout
		state.set(this.#id, defineState(currentState))
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
