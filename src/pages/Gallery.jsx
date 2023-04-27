import AnimateFadePage from '../includes/_AnimateFadePage'
import { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

import ljustorpsan2 from './../assets/images/gallery/Ljustorpsan-2.jpg'
import harbre from './../assets/images/gallery/Harbre.jpg'



const Gallery = () => {
	useEffect(() => {
		M.Slider.init(document.querySelectorAll('.slider'), {
			indicators: false,
			height: 600,
			duration: 500,
			interval: 6000
		})
	})

	return (
		<AnimateFadePage>
			<div id="gallery-page">
				<section className='section one container'>
					<div className="row">
						<div className="col s12">
							<h2>Galleri</h2>
							<br />
						</div>
						<div className="col s12">
							<div className="slider">
								<ul className="slides">
									<li>
										<img src={ljustorpsan2} alt='' />
										<div className="caption center-align">
											<h3>This is our big Tagline!</h3>
											<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
										</div>
									</li>
									<li>
										<img src={harbre} alt='' />
										<div className="caption left-align">
											<h3>Left Aligned Caption</h3>
											<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
										</div>
									</li>
									<li>
										<img src="https://lorempixel.com/580/250/nature/3" alt='' />
										<div className="caption right-align">
											<h3>Right Aligned Caption</h3>
											<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
										</div>
									</li>
									<li>
										<img src="https://lorempixel.com/580/250/nature/4" alt='' />
										<div className="caption center-align">
											<h3>This is our big Tagline!</h3>
											<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default Gallery