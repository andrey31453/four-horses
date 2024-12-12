import { config } from '@/assets/config'

export const isScreen = (key) => {
	if (config.screens[key] === undefined) {
		return console.error(`don't correct screen key: ${key}`)
	}
	return document.documentElement.clientWidth >= config.screens[key]
}
