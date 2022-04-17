import React from 'react'

const Ripple = ({
	pointer = true,
	radius = '50%',
	color = '#FFF',
	endWidth = '500px',
	endHeight = '500px',
	animationEasing = 'linear',
	animationDuration = 750,
	onClick,
	children,
}) => {
	const buttonRef = React.useRef()

	const addRipple = (e) => {
		const x = e.clientX - e.target.getBoundingClientRect().left
		const y = e.clientY - e.target.getBoundingClientRect().top

		const ripples = document.createElement('span')
		ripples.classList.add('wave')
		ripples.style.left = `${x}px`
		ripples.style.top = `${y}px`

		// add style
		ripples.style.width = endWidth
		ripples.style.height = endHeight
		ripples.style.background = color
		ripples.style.borderRadius = radius
		ripples.style.position = `absolute`
		ripples.style.pointerEvents = `none`
		ripples.style.transform = `translate(-50%, -50%)`
		ripples.style.animation = `wave-animate ${animationDuration}ms ${animationEasing} forwards`

		setTimeout(() => {
			ripples.remove()
		}, animationDuration)

		buttonRef.current.appendChild(ripples)
		if (onClick) {
			onClick()
		}
	}

	return (
		<div
			ref={buttonRef}
			onClick={addRipple}
			style={{
				width: 'max-content',
				height: 'max-content',
				overflow: 'hidden',
				position: 'relative',
				cursor: `${pointer && 'pointer'}`,
			}}
		>
			{children}
		</div>
	)
}

export default Ripple