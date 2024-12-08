import { config } from '@/assets/config'

const layers = {
  base: 'base',
  screens: 'screens',
}

export const defineLayers = () =>
  Object.values(layers).reduce((layers, l) => layers + `@layer ${l};`, '')

export const addScreens = (classes) =>
  [classes]
    .flat()
    .map(
      (c) =>
        `
  @layer ${layers.base} {.${c}}
  @layer ${layers.screens} {` +
        Object.entries(config.screens)
          .map(
            ([screenKey, screenValue]) =>
              `
@media not all and (min-width: ${screenValue}px) {.max-${screenKey}\\:${c}}
@media (min-width: ${screenValue}px) {.${screenKey}\\:${c}}`,
          )
          .join('') +
        '}',
    )
    .join('')
