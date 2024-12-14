export const delay = (ms = 100) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			return void res()
		}, ms)
	})
}
