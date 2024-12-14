export const minimizeCSS = (string) =>
	minimize(string)
		.replace(/;}/g, '}')
		.replace(/}\s/g, '}')
		.replace(/\s{/g, '{')
		.replace(/:\s/g, ':')

export const minimize = (string) =>
	string
		.replace(/\r/g, '')
		.replace(/\n/g, ' ')
		.replace(/\t/g, '')
		.replace(/\s{2,}/g, '')
		.replace(/\s\(/g, '(')
		.replace(/\(\s/g, '(')
		.replace(/\s\)/g, ')')
		.replace(/\)\s/g, ')')
		.replace(/\s}/g, '}')
		.replace(/{\s/g, '{')
		.replace(/,\s/g, ',')
		.trim()
