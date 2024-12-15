import { windowCallback } from './callback.js'

const scrollTo = (selector) => {
	const target = document.querySelector(selector)
	console.log(target)
}

export const useScrollTo = () => {
	windowCallback.emit('scroll-to', scrollTo)
}
