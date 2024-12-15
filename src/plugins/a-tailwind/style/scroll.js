import { layers, withLayer } from './layers.js'

const _scrollStyle = `
::-webkit-scrollbar {
  width: 0.375rem;
  height: 0.375rem;
}
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar-track {
  background-color: var(--white);
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, var(--primary), var(--red));
}
`
export const scrollStyle = withLayer(layers.base, _scrollStyle)
