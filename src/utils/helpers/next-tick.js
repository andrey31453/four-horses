export const nextTick = (cbs, delay = 0) => {
	;[cbs].flat().forEach((cb, i) => setTimeout(cb, 10 * i + delay))
}
