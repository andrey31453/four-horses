import { nextTick } from '/src/utils/helpers/next-tick'
import { store } from './store'

export class SliderBus {
	#id
	constructor(id, ctx) {
		this.#id = id
		if (!ctx) return

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
		this.cbs.push({
			name,
			cb,
		})
	}
	on = (cbName) => {
		this.cbs.filter(({ name }) => name === cbName).forEach(({ cb }) => cb())
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
