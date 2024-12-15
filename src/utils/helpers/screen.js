import { config } from '/Users/webserfer/repositories/bastion/four-horses/a-tailwind.conf'

export const isScreen = (key) => {
	if (config.screens[key] === undefined) {
		return console.error(`don't correct screen key: ${key}`)
	}
	return document.documentElement.clientWidth >= config.screens[key]
}
