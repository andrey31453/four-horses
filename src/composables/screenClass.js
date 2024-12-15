import { config } from '/a-style.conf'
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
