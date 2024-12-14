import * as fs from 'fs'
import { minimize } from '../utils/minimize.js'

const parseData = (path) => {
	if (!fs.existsSync(path)) return ''
	if (path.endsWith('DS_Store')) return ''
	if (fs.lstatSync(path).isDirectory()) {
		return content(fs.readdirSync(path).map((p) => path + '/' + p))
	}

	return fs.readFileSync(path, 'utf8').toString()
}

export const content = (paths = 'src') => {
	const data = [paths].flat().reduce((data, path) => {
		return data + parseData(path)
	}, '')
	return minimize(data)
}
