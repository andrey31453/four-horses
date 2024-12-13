import { debounce } from './debounce'

// TODO добавить счетчик

export const mounted = function (cbs) {
	if (!this.clientWidth) {
		return setTimeout(() => mounted.call(this, cbs), 30)
	}

	;[cbs].flat().forEach((cb) => {
		cb.call(this)
		window.addEventListener('resize', debounce(cb.bind(this)))
	})
}
