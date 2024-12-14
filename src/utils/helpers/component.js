import { debounce } from './debounce'
import { delay } from './delay'

// TODO добавить счетчик

const cbTypes = {
	slot: () => {},
}
export const mounted = async function (cbs, type = 'slot') {
	const bindCbs = [cbs].flat().map((cb) => debounce(cb.bind(this)))

	const unMounted = () => {
		bindCbs.forEach((cb) => {
			window.removeEventListener('resize', cb)
		})
	}

	const mountedConf = { quantity: 0, max: 100 }
	const _mounted = async () => {
		mountedConf.quantity++
		if (mountedConf.quantity > mountedConf.max) {
			return console.error('Превышено время ожидания компонента: ', this)
		}

		if (!this.querySelector('*')) {
			await delay()
			return await _mounted()
		}

		bindCbs.forEach((cb) => {
			cb.call(this)
			window.addEventListener('resize', cb)
		})
		return unMounted
	}
	return await _mounted()
}
