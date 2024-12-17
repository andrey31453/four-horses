export const useViteBase = () => {
	document.querySelectorAll('style').forEach((el) => {
		el.innerHTML = el.innerHTML
			.replace(/url\(/g, `url(${import.meta.env.BASE_URL}`)
			.replace(/\/{2,}/g, '\/')
	})
}
