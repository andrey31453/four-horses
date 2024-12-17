import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			'@': 'src',
		},
	},
	base: 'four-horses',
})
