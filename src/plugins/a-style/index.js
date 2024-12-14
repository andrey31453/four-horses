import * as fs from 'fs'
import { defineClasses, defineStyle } from './style/index.js'
import { withModifiers } from './style/modifiers.js'
import { content } from './fs/content.js'
import { withGeneratingLayer } from './style/layers.js'
import { minimizeCSS } from './utils/minimize.js'

export class AStyle {
	constructor(config) {
		this.config = config
	}

	#classesMap = () =>
		withModifiers(defineClasses(this.config)).reduce(
			(classesMap, c) => {
				const className = c
					.replace(/ .*/g, '')
					.replace(/{.*/g, '')
					.replace(/\:disabled$/, '')
					.replace(/\:hover$/, '')
					.trim()
				classesMap[className] = c
				classesMap.classes.push(className)
				return classesMap
			},
			{ classes: [] },
		)

	#useCLasses = (classesMap) => {
		const projectContent = content(this.config.content)
		return classesMap.classes.filter((c) => {
			return this.config.safeList.includes(c) || RegExp(c).test(projectContent)
		})
	}

	#shieldingClasses = (classesMap, cLasses) =>
		cLasses.map((c) =>
			classesMap[c]
				.replace(/:/g, '\\:')
				.replace(/\\: /g, ':')
				.replace(/\\:hover{/g, ':hover{')
				.replace(/\\:hover /g, ':hover')
				.replace(/\\:disabled{/g, ':disabled{'),
		)

	generate = (link) => {
		const classesMap = this.#classesMap()
		const useCLasses = this.#useCLasses(classesMap)
		const shieldingClasses = this.#shieldingClasses(classesMap, useCLasses)
		const layerClasses = withGeneratingLayer(shieldingClasses)

		fs.writeFileSync(
			link,
			minimizeCSS(defineStyle(this.config).join('') + layerClasses.join('')),
		)
	}
}
