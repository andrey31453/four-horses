import { debounce } from './debounce'
import { delay } from './delay'

// TODO заменить call.this => ()
export const mounted = async function (
	cbs = [],
	listenerCbs = [],
	isReady = null,
) {
	const bindlistenerCbs = listenerCbs
		? [listenerCbs].flat().map((cb) => debounce(cb.bind(this)))
		: []

	const unMounted = () => {
		bindlistenerCbs.forEach((cb) => {
			window.removeEventListener('resize', cb)
		})
	}

	const mountedConf = { quantity: 0, max: 10 }
	const _mounted = async function () {
		mountedConf.quantity++
		if (mountedConf.quantity > mountedConf.max) {
			return console.error('Превышено время ожидания компонента: ', this)
		}

		if (isReady ? !isReady.call(this) : !this.querySelector('*')) {
			await delay()
			return await _mounted.call(this)
		}

		cbs &&
			[cbs].flat().forEach((cb) => {
				cb.call(this)
			})
		bindlistenerCbs.forEach((cb) => {
			cb.call(this)
			window.addEventListener('resize', cb)
		})

		return unMounted
	}
	await delay()
	return await _mounted.call(this)
}
