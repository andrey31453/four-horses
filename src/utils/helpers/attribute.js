// json
export const attributeJSON = (target, attribute, _default = {}) => {
	if (!target) return console.error(`don't correct target: `, target)
	const attributeValue = target.getAttribute(attribute)

	if (!attributeValue || attributeValue === '') return _default
	return JSON.parse(target.getAttribute(attribute) ?? null) || _default
}

// boolean
const booleanValues = new Map()
	.set('', true)
	.set('true', true)
	.set('false', false)
	.set(null, false)
export const attributeBoolean = (target, attribute) => {
	if (!target) return console.error(`don't correct target: `, target)
	const attributeValue = target.getAttribute(attribute)
	return booleanValues.has(attributeValue)
		? booleanValues.get(attributeValue)
		: console.error(`don't correct props: `, attribute)
}

// string
export const attributeString = (target, attribute, _default) => {
	if (!target) return console.error(`don't correct target: `, target)
	return target.getAttribute(attribute) ?? _default
}
