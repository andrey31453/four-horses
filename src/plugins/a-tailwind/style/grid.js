const initialGridClasses = [
	'flex {display: flex;}',
	'flex-col {flex-direction: column;}',
	'flex-wrap {flex-wrap: wrap;}',

	'grid {display: grid;}',

	'justify-start {justify-content: flex-start;}',
	'justify-center {justify-content: center;}',
	'justify-end {justify-content: flex-end;}',

	'items-start {align-items: flex-start;}',
	'items-center {align-items: center;}',
	'items-end {align-items: flex-end;}',
	'items-baseline {align-items: baseline;}',
]

const rowSpanClass = (size) =>
	`row-span-${size} {grid-row: span ${size} / span ${size};}`
const colSpanClass = (size) =>
	`col-span-${size} {grid-column: span ${size} / span ${size};}`
const gridColsClass = (size) =>
	`grid-cols-${size} {grid-template-columns: repeat(${size}, minmax(0, 1fr));}`

export const gridClasses = (config) => [
	initialGridClasses,
	[...Array(config.cols).keys()]
		.map((i) => i + 1)
		.reduce((classes, size) => {
			classes.push(rowSpanClass(size))
			classes.push(colSpanClass(size))
			classes.push(gridColsClass(size))
			return classes
		}, []),
]
