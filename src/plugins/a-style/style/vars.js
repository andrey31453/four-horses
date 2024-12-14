const defineVar = (name, _var) => {
	if (typeof _var !== 'object') return `--${name}: ${_var};`

	return `--${name}: ${_var.value}${_var.measurement};`
}
export const defineVars = (vars) =>
	':root{' +
	Object.entries(vars).reduce(
		(style, [name, value]) => [style, defineVar(name, value)].join(''),
		'',
	) +
	'}'
