// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

// Images
import gabbyBosse from './../assets/images/kafe/gabby-och-bosse.jpg'
import mackor from './../assets/images/kafe/optimized-mackor-1.jpg'
import macka1 from './../assets/images/kafe/optimized-macka-1.jpg'
import macka2 from './../assets/images/kafe/optimized-macka-2.jpg'
import macka3 from './../assets/images/kafe/optimized-macka-3.jpg'
import macka4 from './../assets/images/kafe/optimized-macka-4.jpg'
import macka5 from './../assets/images/kafe/optimized-macka-5.jpg'

import kakor1 from './../assets/images/kafe/optimized-kakor-1.jpg'
import kakor2 from './../assets/images/kafe/optimized-kakor-2.jpg'
import kakor3 from './../assets/images/kafe/optimized-kakor-3.jpg'
import kakor4 from './../assets/images/kafe/optimized-kakor-4.jpg'
import kakor5 from './../assets/images/kafe/optimized-kakor-5.jpg'

import mat1 from './../assets/images/kafe/optimized-mat-1.jpg'
import mat2 from './../assets/images/kafe/optimized-mat-2.jpg'
import mat3 from './../assets/images/kafe/optimized-mat-3.jpg'
import mat4 from './../assets/images/kafe/optimized-mat-4.jpg'

import smorgardstarta1 from './../assets/images/kafe/optimized-smorgardstarta-bestalla-1.jpg'
import smorgardstarta2 from './../assets/images/kafe/optimized-smorgardstarta-bestalla-2.jpg'


// Component
const Cafe = () => {
	useEffect(() => {
		M.Carousel.init(document.getElementById('sandwiches'), {
			duration: 200,
			dist: -100,
			shift: 10,
			padding: 0,
			numVisible: 5,
			fullWidth: false,
			indicators: false,
			noWrap: false,
			onCycleTo: null
		})
	})

	return (
		<AnimateFadePage>
			<div id="cafe-page">
				<section className='section one'>
					<div className="row">
						<div className='col s12'>
							<h3 className='center'>Kafé</h3>
							<br />
						</div>
						<div className="col s12 m4 l3">
							<img className='bosse-gabby' alt='Gabby och Bosse' src={gabbyBosse} />
						</div>
						<div className="col s12 m5 l5">
							<p className='first-paragraph'>
								Vi vill passa på att presentera oss då delmål 1 börjar att bli klart.
								Gabbi och Bosse heter vi som har äran att få driva B&B och sommar café på Lögdö Herrgård.
								Vi startar upp med sommar café midsommar söndagen och därefter varje helg 11-15, varmt välkomna.
								För att boka rum eller har andra funderingar så är vårt telefonnummer <a className='inline-link' href="tel:+46722303337">072-2303337</a>. Dela gärna vidare då vi för närvarande använder bara den här kanalen😁
							</p>
							<p>
								Öppet från midsommar, lördagar och söndagar kl. 11-15 fram till 6 augusti.
								Kakor, bullar, cheesecake mm, vi har även smörgåsar som tex räksmörgås, leverpastej och Ceasar smörgås med kyckling, även ett vegetariskt alt.
								Glass och kalla drycker
							</p>
							{/* <a href='mailto:logdoherrgard@icloud.com?subject=Boka kafe' className='btn waves-effect'>Boka kaféet<i className="material-icons left">mail</i></a> */}
						</div>
						<div className="col s12 m3 l3 offset-l1">
							<h5 className='first-title'>Öppettider</h5>
							<br />
							Från midsommar
							<ul>
								<li>Lördagar: 11-15</li>
								<li>Söndagar: 11-15</li>
							</ul>
						</div>
					</div>
				</section>
				<section className='section two'>
					<div className="row">
						<div className="col s12">
							<div className='example'>
								<img alt='' src={kakor1} />
								<img alt='' src={kakor2} />
								<img alt='' src={kakor3} />
								<img alt='' src={kakor4} />
								<img alt='' src={kakor5} />
								<img alt='' src={mat1} />
								<img alt='' src={mat2} />
								<img alt='' src={mat3} />
								<img alt='' src={mat4} />
								<img alt='' src={smorgardstarta1} />
								<img alt='' src={smorgardstarta2} />
							</div>
							<div id='sandwiches' className="carousel">
								<a className="carousel-item" href="#one!"><img alt='' src={mackor} /></a>
								<a className="carousel-item" href="#two!"><img alt='' src={macka1} /></a>
								<a className="carousel-item" href="#three!"><img alt='' src={macka2} /></a>
								<a className="carousel-item" href="#four!"><img alt='' src={macka3} /></a>
								<a className="carousel-item" href="#five!"><img alt='' src={macka4} /></a>
								<a className="carousel-item" href="#six!"><img alt='' src={macka5} /></a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default Cafe