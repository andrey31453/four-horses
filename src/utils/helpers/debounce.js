export const debounce = (callback, wait = 100) => {
	let timeoutId = null
	return (...args) => {
		window.clearTimeout(timeoutId)
		timeoutId = window.setTimeout(() => callback(...args), wait)
	}
}
