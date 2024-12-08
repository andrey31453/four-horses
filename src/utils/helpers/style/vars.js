export const defineVars = (vars) =>
  ':root{' +
  Object.entries(vars).reduce(
    (style, [name, value]) => [style, `--${name}: ${value};`].join(''),
    '',
  ) +
  '}'
