import { attributeBoolean, attributeString } from '@/utils/helpers/attribute.js'

const animateNames = {
	spin: 'animate-spin',
	bounce: 'animate-bounce',
	pulse: 'animate-pulse',
	ping: 'animate-ping',
	'from-left': 'animate-from-left',
	'from-right': 'animate-from-right',
	'from-bottom': 'animate-from-bottom',
	'from-top': 'animate-from-top',
}
export const useAnimation = () => {
	document.querySelectorAll('[a-animation]').forEach((target) => {
		target.classList.add('invisible')
		const config = {
			name: attributeString(target, 'a-animation', 'pulse'),
			infinity: attributeBoolean(target, 'a-animation-infinity'),
		}

		new IntersectionObserver(
			(entries, observer) => {
				if (!entries[0].isIntersecting) return
				target.classList.remove('invisible')
				target.classList.add(animateNames[config.name])
				observer.unobserve(target)
			},
			{
				threshold: 0.25,
			},
		).observe(target)
	})
}
