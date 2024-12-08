import { addScreens } from './screens'

const gapClass = (size) => addScreens(`gap-${size} {gap: ${size / 4}rem;}`)
const paddingClass = (size) =>
  addScreens([
    `p-${size} {padding: ${size / 4}rem;}`,
    `px-${size} {padding-left: ${size / 4}rem;padding-right: ${size / 4}rem;}`,
    `py-${size} {padding-top: ${size / 4}rem;padding-bottom: ${size / 4}rem;}`,
    `pl-${size} {padding-left: ${size / 4}rem;}`,
    `pr-${size} {padding-right: ${size / 4}rem;}`,
    `pt-${size} {padding-top: ${size / 4}rem;}`,
    `pb-${size} {padding-bottom: ${size / 4}rem;}`,
  ])
const marginClass = (size) =>
  addScreens([
    `m-${size} {margin: ${size / 4}rem;}`,
    `mx-${size} {margin-left: ${size / 4}rem;margin-right: ${size / 4}rem;}`,
    `my-${size} {margin-top: ${size / 4}rem;margin-bottom: ${size / 4}rem;}`,
    `ml-${size} {margin-left: ${size / 4}rem;}`,
    `mr-${size} {margin-right: ${size / 4}rem;}`,
    `mt-${size} {margin-top: ${size / 4}rem;}`,
    `mb-${size} {margin-bottom: ${size / 4}rem;}`,
  ])

export const createSizeClasses = (config) =>
  [...Array(config.sizes).keys()]
    .map((i) => i + 1)
    .reduce(
      (style, size) =>
        [style, gapClass(size), paddingClass(size), marginClass(size)].join(''),
      '',
    )
