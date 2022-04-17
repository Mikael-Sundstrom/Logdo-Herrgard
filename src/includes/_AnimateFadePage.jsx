import { motion } from "framer-motion"

const animations = {
	initial: { opacity: 0, transform: 'scale(1.1)' },
	animate: { opacity: 1, transform: 'scale(1)' },
	exit: { opacity: 0, transform: 'scale(0.9)' }
}

const AnimateFadePage = ({ children }) => {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: .3 }}
		>
			{children}
		</motion.div>
	)
}

export default AnimateFadePage