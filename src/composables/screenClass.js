import { config } from 'src/assets/config'
import { isScreen } from '../utils/helpers/screen'

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