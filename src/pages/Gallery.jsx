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
				<section className='section one'>
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
				{/* <footer>
					<div className='footer'>
						<div>
							<div>
								<h3 className='widget-title'>Om oss</h3>
								<p>Björn Schumacher och Mattias Rustan äger Herrgården. Byggnaderna fungerar som privat boende, Bed and Brekfast och festlokal året om. På sommaren har vi även cafe där du kan sitta i en unik miljö.</p>
								<p>På Herrgården finns det åtta sängplatser som är fördelade med ett enkelrum två dubbelrum och ett trebäddsrum. Ca 60 sittplatser i fördelat på två rum. Herrgårdens stolta snickartraditioner finns ännu bevarade och skapar en välkomnande atmosfär. De ljus och luftiga salongerna är stilfullt möblerade. Kristallkronorna och de vackra kakelugnarna förstärker den genuina miljön. Rummen är inreda i gammal stil och förstärka den miljön som det en gång har varit.</p>
							</div>

							<div>
								<h3 className='widget-title'>Adress</h3>
								<ul>
									<li>Bruksvägen 27</li>
									<li>861 92 Bergeforsen</li>
									<li>072-230 33 37</li>
									<li>logdoherrgard@icloud.com</li>
								</ul>
								<a href='https://goo.gl/maps/sQ267xUnx9jtPDY27' target='_blank' rel="noreferrer" className='waves-effect btn center'><i className="material-icons left">location_on</i>Google Maps</a>
							</div>
						</div>
					</div>
				</footer> */}
			</div>
		</AnimateFadePage>
	)
}

export default Gallery