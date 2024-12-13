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

	`disabled {
		pointer-events: none;
		cursor: not-allowed;
	}`,

	'rotate-90 {transform: rotate(90deg);}',
	'rotate-180 {transform: rotate(180deg);}',
	'rotate-270 {transform: rotate(270deg);}',

	'cursor-pointer {cursor: pointer;}',
	'cursor-not-allowed {cursor: not-allowed;}',
	'pointer-events-none {pointer-events: none;}',
	'pointer-events-auto {pointer-events: auto;}',

	`transition {
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; 
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
		transition-duration: var(--animation-duration);
	}`,
])
export const templateStyle = withLayer(layers.utils, _templateStyle)
