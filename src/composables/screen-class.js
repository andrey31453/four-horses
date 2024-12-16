import { config } from '/Users/webserfer/repositories/bastion/four-horses/a-tailwind.conf'
import { isScreen } from '/src/utils/helpers/screen'

// TODO отменить обращение к dom на каждой итерации blob:https://web.telegram.org/dc5e3bf4-669d-4a41-8f23-152d8d8d8820
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
