import { nextTick } from '/src/utils/helpers/next-tick'
import { store } from './store'
import { screenValue } from '/src/utils/helpers/screen-value.js'
import { mounted } from '/src/utils/helpers/mounted.js'

class SliderBus {
	#id
	#ctx
	constructor(id, ctx) {
		this.#id = id
		if (!ctx) return

		this.#ctx = ctx
		store.define(id, ctx)
		store.update(id)
		this.#initAutoChange(id)
	}

	get state() {
		return store.state(this.#id)
	}
	get props() {
		return store.props(this.#id)
	}
	get cbs() {
		return store.cbs(this.#id)
	}
	get cols() {
		return screenValue(this.props.slides)
	}

	updateQuantity = (quantity) => {
		store.state(this.#id).slide.quantity = quantity
		this.#fixState()
	}
	#fixState = () => {
		if (this.state.slide.current < 0) {
			nextTick(() => {
				this.state.slide.current =
					this.state.slide.quantity + this.state.slide.current
				this.on('force-update')
			})
		}
		if (this.state.slide.current > this.state.slide.quantity - 1) {
			nextTick(() => {
				this.state.slide.current =
					this.state.slide.current - this.state.slide.quantity
				this.on('force-update')
			})
		}
	}

	// cbs
	emit = (name, cb) => {
		store.cbs(this.#id).push({
			name,
			cb,
		})
	}
	on = (cbName) => {
		store
			.cbs(this.#id)
			.filter(({ name }) => name === cbName)
			.forEach(({ cb }) => cb())
	}
	off = () => {
		store.off(this.#id)
	}

	// changes state
	prev = () => {
		this.#resetAutoChange()
		this.state.slide.current--
		store.update(this.#id)
		this.#fixState()
	}
	next = () => {
		this.#resetAutoChange()
		this.#_next()
	}
	#_next = () => {
		this.state.slide.current++
		store.update(this.#id)
		this.#fixState()
	}

	// auto change
	#resetAutoChange = () => {
		if (!this.props['auto-change']) return

		clearTimeout(this.state.timeout)
		this.#autoChange()
	}
	#autoChange = () => {
		this.state.timeout = setTimeout(() => {
			this.#_next()
			this.on('update')
			this.#autoChange()
		}, 1000 * this.props['auto-change'])
	}
	#initAutoChange = () => {
		if (!this.props['auto-change']) {
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

const buses = {}
export const sliderBus = (id, ctx) => {
	if (!buses[id]) {
		buses[id] = new SliderBus(id, ctx)
	}
	return buses[id]
}
