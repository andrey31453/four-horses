const _store = {
	props: {},
	state: {},
	cbs: {},
}

class Store {
	props = (id) => _store.props[id]
	state = (id) => _store.state[id]
	cbs = (id) => _store.cbs[id]

	define(id, ctx) {
		this.#init(id)
		this.#defineProps(id, ctx)
		this.#defineState(id, ctx)
	}
	update(id) {
		_store.state[id].disabled = {
			prev:
				!_store.props[id].infinity &&
				_store.state[id].slide.current === _store.state[id].slide.min,
			next:
				!_store.props[id].infinity &&
				_store.state[id].slide.current === _store.state[id].slide.max,
		}
	}

	#init = (id) => {
		_store.props[id] = null
		_store.state[id] = null
		_store.cbs[id] = []
	}
	#defineProps = (id, ctx) => {
		_store.props[id] = {
			'controls-variant': ctx.getAttribute('controls-variant') ?? 'dotted',
			infinity: ctx.getAttribute('infinity') !== null,
			'auto-change': +ctx.getAttribute('auto-change'),
			slides: JSON.parse(ctx.getAttribute('slides') ?? null) || {
				xs: 1,
				sm: 2,
				md: 3,
				xl: 4,
			},
		}
	}
	#defineState = (id, ctx) => {
		if (_store.props[id].infinity) {
			_store.state[id] = {
				slide: {
					current: 0,
					quantity: ctx.children.length,
					min: -1,
					max: ctx.children.length,
				},
				ctx,
			}
			return
		}

		_store.state[id] = {
			slide: {
				current: 0,
				quantity: ctx.children.length,
				min: 0,
				max: ctx.children.length - 1,
			},
			ctx,
		}
	}
}
export const store = new Store()
