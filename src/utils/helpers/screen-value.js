import { isScreen } from './screen.js'

export const screenValue = (screenProps) => {
	return Object.entries(screenProps).reduce(
		(screenValue, [breadcrumb, v]) => (isScreen(breadcrumb) ? v : screenValue),
		1,
	)
}
