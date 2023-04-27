// Core
import AnimateFadePage from '../includes/_AnimateFadePage'

// Component
const Error404 = () => {
	return (
		<AnimateFadePage>
			<div className="error-page">
				<section className='section one container'>
					<h2>Error404</h2>
					<p>Page does not exists</p>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default Error404