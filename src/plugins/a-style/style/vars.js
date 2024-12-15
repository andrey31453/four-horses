const varName = (prefix, name) => {
	if (!prefix) return `--${name}`
	return `--${prefix}-${name}`
}

const defineVar = (prefix, name, _var) => {
	if (typeof _var !== 'object') return `${varName(prefix, name)}: ${_var};`
	return `${varName(prefix, name)}: ${_var.value}${_var.measurement};`
}
export const defineVars = (vars, prefix = null) =>
	':root{' +
	Object.entries(vars).reduce(
		(style, [name, value]) => [style, defineVar(prefix, name, value)].join(''),
		'',
	) +
	'}'
