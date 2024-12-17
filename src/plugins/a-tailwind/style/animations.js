import { layers, withLayer } from './layers.js'

const baseClasses = [
	`transition {transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: var(--animation-duration);}`,
	`animate-once {animation-iteration-count: 0;}`,
	`animate-infinity {animation-iteration-count: infinite;}`,
]

const spin = {
	class: `animate-spin {animation: spin 1s linear infinite;}`,
	style: `
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`,
}
const bounce = {
	class: `animate-bounce {animation: bounce 1s infinite;}`,
	style: `
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`,
}
const bounceSM = {
	class: `animate-bounce-sm {animation: bounce-sm 1.5s infinite;}`,
	style: `
@keyframes bounce-sm {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-12%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`,
}
const pulse = {
	class: `animate-pulse {animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;}`,
	style: `
@keyframes pulse {
	0%, 100% {k
		opacity: 1;
	}
	50% {
		opacity: .5;
	}
}`,
}
const ping = {
	class: `animate-ping {animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;}`,
	style: `
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`,
}
const fromLeft = {
	class: `animate-from-left {animation: from-left 1s cubic-bezier(0, 0, 0.2, 1) 1;}`,
	style: `
@keyframes from-left {
  0% {
    transform: translateX(-75%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`,
}
const fromRight = {
	class: `animate-from-right {animation: from-right 1s cubic-bezier(0, 0, 0.2, 1) 1;}`,
	style: `
@keyframes from-right {
  0% {
    transform: translateX(75%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`,
}
const fromBottom = {
	class: `animate-from-bottom {animation: from-bottom 1s cubic-bezier(0, 0, 0.2, 1) 1;}`,
	style: `
@keyframes from-bottom {
  0% {
    transform: translateY(75%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`,
}
const fromTop = {
	class: `animate-from-top {animation: from-top 1s cubic-bezier(0, 0, 0.2, 1) 1;}`,
	style: `
@keyframes from-top {
  0% {
    transform: translateY(-75%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`,
}

const animationDurationClasses = (durations) =>
	[...Array(Math.ceil(durations.max / durations.step) + 1).keys()]
		.map((i) => i * durations.step)
		.map(
			(duration) =>
				`animation-duration-${duration} {animation-duration: ${duration}ms`,
		)

export const animationStyle = () =>
	withLayer(
		layers.base,
		[
			ping.style,
			pulse.style,
			spin.style,
			bounce.style,
			fromLeft.style,
			fromRight.style,
			fromTop.style,
			fromBottom.style,
			bounceSM.style,
		].join(''),
	)
export const animationClasses = (animations) => [
	baseClasses,
	ping.class,
	pulse.class,
	spin.class,
	bounce.class,
	fromLeft.class,
	fromRight.class,
	fromTop.class,
	fromBottom.class,
	bounceSM.class,
	animationDurationClasses(animations.durations),
]
