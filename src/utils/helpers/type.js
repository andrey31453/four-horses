export const typeIs = (target, type) =>
	Object.prototype.toString
		.call(target)
		.split(' ')[1]
		.toLowerCase()
		.includes(type)
export const _typeOf = (target) =>
	Object.prototype.toString
		.call(target)
		.split(' ')[1]
		.toLowerCase()
		.slice(0, -1)

export const isNullable = (target) =>
	isNan(target) || isUndefined(target) || isNull(target)
export const notNullable = (target) => !isNullable(target)
export const isObject = (target) => typeIs(target, 'object')
export const isArray = (target) => typeIs(target, 'array')
export const isNumber = (target) => typeof target === 'number' && !isNan(target)
export const isString = (target) => typeof target === 'string'
export const isFunction = (target) => typeof target === 'function'
export const isUndefined = (target) => target === undefined
export const isNull = (target) => target === null
export const isNan = (target) => target !== target
export const isMergeable = (...args) => isObject(args[0]) || isArray(args[0])
