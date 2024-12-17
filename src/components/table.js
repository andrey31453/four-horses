import { aTailwindLink } from '@/utils/helpers/a-tailwind-link'
import { isScreen } from '@/utils/helpers/screen'
import { defineShadow } from '@/utils/helpers/shadow'
import { debounce } from '@/utils/helpers/debounce'

class Table extends HTMLElement {
	constructor() {
		super()
		this.#render()
		window.addEventListener('resize', debounce(this.#render.bind(this)))
	}

	#withRow(cols, notFirstRow) {
		if (isScreen('md')) return cols
		return `<div class="flex justify-start items-center gap-3 py-4 ${notFirstRow ? 'border-secondary-800 border-t-2 ' : ''}">${cols}</div>`
	}

	#rowCols(rowNode, rowsQuantity, rowIdx) {
		return [...rowNode.children].reduce((colsString, colNode, colIdx) => {
			const cellClasses = [
				'flex justify-start items-center md:border-secondary-800',
			]
			if (!colIdx) cellClasses.push('md:py-4 md:pr-4 text-secondary-300')
			if (colIdx) cellClasses.push('md:p-4 md:border-l-2')
			if (rowIdx) cellClasses.push('md:border-t-2')
			if (!rowIdx) cellClasses.push('md:!pt-0')
			if (rowsQuantity - 1 === rowIdx) cellClasses.push('md:!pb-0')

			return (
				colsString +
				`<div class="${cellClasses.join(' ')}"><span class="grid"><span>${colNode.innerHTML}</span></span></div>`
			)
		}, '')
	}

	get #data() {
		return [...this.children].reduce(
			(slot, rowNode, rowIdx) =>
				`${slot}${this.#withRow(this.#rowCols(rowNode, this.children.length, rowIdx), !!rowIdx)}`,
			'',
		)
	}

	get #colsQuantity() {
		return [...this.children]?.[0]?.children.length ?? 2
	}

	#render = () => {
		defineShadow.call(
			this,
			`
<div class="grid md:grid-cols-${this.#colsQuantity}">
	${this.#data}
</div>

${aTailwindLink()}`,
		)
	}
}
customElements.define('a-table', Table)
