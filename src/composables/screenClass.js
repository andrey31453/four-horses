import { config } from '/Users/webserfer/repositories/bastion/four-horses/a-tailwind.conf'
import { isScreen } from '/src/utils/helpers/screen'

const setScreenClass = () => {
	Object.entries(config.screens).forEach(([key]) =>
		isScreen(key)
			? document.body.classList.add(key)
			: document.body.classList.remove(key),
	)
}

export const useScreenClass = () => {
	setScreenClass()
	window.addEventListener('resize', setScreenClass)
}
