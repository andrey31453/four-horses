// TODO style plugin add function max min to w & h
const initialClasses = [
	'w-full{width: 100%}',
	'size-full{width: 100%;height: 100%;}',
	'max-w-full{width: 100%}',
	'h-full{height: 100%}',
	'h-screen{height: 100vh;}',
	'min-h-screen{min-height: 100vh;}',
]

const sizeClass = ({ name, remSize }) => [
	`size-${name} {width: ${remSize}rem;height: ${remSize}rem;}`,
	`min-size-${name} {min-width: ${remSize}rem;height: ${remSize}rem;}`,
	`max-size-${name} {max-width: ${remSize}rem;height: ${remSize}rem;}`,
]
const wClass = ({ name, remSize }) => [
	`w-${name} {width: ${remSize}rem;}`,
	`min-w-${name} {min-width: ${remSize}rem;}`,
	`max-w-${name} {max-width: ${remSize}rem;}`,
]
const hClass = ({ name, remSize }) => [
	`h-${name} {height: ${remSize}rem;}`,
	`min-h-${name} {min-height: ${remSize}rem;}`,
	`max-h-${name} {max-height: ${remSize}rem;}`,
]
const positionClass = ({ name, remSize }) => [
	`inset-${name} {inset: ${remSize}rem;}`,
	`top-${name} {top: ${remSize}rem;}`,
	`right-${name} {right: ${remSize}rem;}`,
	`bottom-${name} {bottom: ${remSize}rem;}`,
	`left-${name} {left: ${remSize}rem;}`,
]
const gapClass = ({ name, remSize }) => [
	`gap-${name} {gap: ${remSize}rem;}`,
	`gap-x-${name} {column-gap: ${remSize}rem;}`,
	`gap-y-${name} {row-gap: ${remSize}rem;}`,
]
const paddingClass = ({ name, remSize }) => [
	`p-${name} {padding: ${remSize}rem;}`,
	`px-${name} {padding-left: ${remSize}rem;padding-right: ${remSize}rem;}`,
	`py-${name} {padding-top: ${remSize}rem;padding-bottom: ${remSize}rem;}`,
	`pl-${name} {padding-left: ${remSize}rem;}`,
	`pr-${name} {padding-right: ${remSize}rem;}`,
	`pt-${name} {padding-top: ${remSize}rem;}`,
	`pb-${name} {padding-bottom: ${remSize}rem;}`,
]
const marginClass = ({ name, remSize }) => [
	`m-${name} {margin: ${remSize}rem;}`,
	`mx-${name} {margin-left: ${remSize}rem;margin-right: ${remSize}rem;}`,
	`my-${name} {margin-top: ${remSize}rem;margin-bottom: ${remSize}rem;}`,
	`ml-${name} {margin-left: ${remSize}rem;}`,
	`mr-${name} {margin-right: ${remSize}rem;}`,
	`mt-${name} {margin-top: ${remSize}rem;}`,
	`mb-${name} {margin-bottom: ${remSize}rem;}`,
]

const withHalf = (size) => ({ name: `${size}\\.5`, remSize: (size + 0.5) / 4 })
const withoutHalf = (size) => ({ name: size, remSize: size / 4 })

export const sizeClasses = (config) => [
	initialClasses,
	[...Array(config.quantity + 1).keys()].reduce((classes, size) => {
		classes.push(positionClass(withoutHalf(size)))
		classes.push(gapClass(withoutHalf(size)))
		classes.push(gapClass(withHalf(size)))
		classes.push(paddingClass(withHalf(size)))
		classes.push(paddingClass(withoutHalf(size)))
		classes.push(marginClass(withoutHalf(size)))
		classes.push(sizeClass(withHalf(size)))
		classes.push(sizeClass(withoutHalf(size)))
		classes.push(wClass(withoutHalf(size)))
		classes.push(hClass(withoutHalf(size)))
		return classes
	}, []),
]
