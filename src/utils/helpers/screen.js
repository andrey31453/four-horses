import { config } from '@/a-tailwind.conf.js'

export const isScreen = (key) => {
	if (config.screens[key] === undefined) {
		return console.error(`don't correct screen key: ${key}`)
	}
	return document.documentElement.clientWidth >= config.screens[key]
}
