import { withModifiers } from './modifiers'
import { layers, withLayer } from './layers'

const _templateStyle = withModifiers([
	'block {display: block;}',
	'hidden {display: none;}',

	'static {position: static;}',
	'relative {position: relative;}',
	'absolute {position: absolute;}',
	'fixed {position: fixed;}',
	'sticky {position: sticky;}',

	'overflow-hidden {overflow: hidden;}',

	'whitespace-nowrap {white-space: nowrap;}',

	'line-through {text-decoration-line: line-through;}',

	'invisible {visibility: hidden;}',
])
export const templateStyle = withLayer(layers.utils, _templateStyle)
