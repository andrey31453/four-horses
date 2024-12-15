import { windowCallback } from './callback.js'

const scrollTo = (selector) => {
	document.querySelector(selector)?.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	})
}

export const useScrollTo = () => {
	windowCallback.emit('scroll-to', scrollTo)
}
