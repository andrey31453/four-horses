import { addScreens } from './screens'

const initialGridClasses = addScreens([
  'flex {display: flex;}',
  'flex-col {flex-direction: column;}',
  'flex-wrap {flex-wrap: wrap;}',
  'grid {display: grid;}',
  'justify-start {justify-items: flex-start;}',
  'justify-center {justify-items: center;}',
  'justify-end {justify-items: flex-end;}',
  'items-start {align-items: flex-start;}',
  'items-center {align-items: center;}',
  'items-end {align-items: flex-end;}',
])

const rowSpanClass = (size) =>
  addScreens(`row-span-${size} {grid-rows: span ${size};}`)
const colSpanClass = (size) =>
  addScreens(`col-span-${size} {grid-column: span ${size};}`)
const gridColsClass = (size) =>
  addScreens(`grid-cols-${size} {grid-template-columns: repeat(${size}, 1fr);}`)

export const createGridClasses = (config) =>
  [...Array(config.cols).keys()]
    .map((i) => i + 1)
    .reduce(
      (style, size) =>
        [
          style,
          rowSpanClass(size),
          colSpanClass(size),
          gridColsClass(size),
        ].join(''),
      initialGridClasses,
    )
