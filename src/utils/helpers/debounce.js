const defaultDelay = 100

export const debounce = (callback, delay = defaultDelay) => {
	let timeoutId = null
	return (...args) => {
		window.clearTimeout(timeoutId)
		timeoutId = window.setTimeout(() => callback(...args), delay)
	}
}

export const throttle = (callee, delay = defaultDelay) => {
	let timer = null

	return (...args) => {
		if (timer) return
		timer = setTimeout(() => {
			callee(...args)
			clearTimeout(timer)
			timer = null
		}, delay)
	}
}
