import { debounce } from './debounce'
import { delay } from './delay'

// TODO добавить счетчик

export const mounted = async function (cbs, isReady = null) {
	const bindCbs = [cbs].flat().map((cb) => debounce(cb.bind(this)))

	const unMounted = () => {
		bindCbs.forEach((cb) => {
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

		bindCbs.forEach((cb) => {
			cb.call(this)
			window.addEventListener('resize', cb)
		})
		return unMounted
	}
	await delay()
	return await _mounted.call(this)
}
