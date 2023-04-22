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
			noWrap: true,
			onCycleTo: null
		})
		M.Carousel.init(document.getElementById('cookies'), {
			duration: 200,
			dist: -100,
			shift: 10,
			padding: 0,
			numVisible: 5,
			fullWidth: false,
			indicators: false,
			noWrap: true,
			onCycleTo: null
		})
		M.Carousel.init(document.getElementById('food'), {
			duration: 200,
			dist: -100,
			shift: 10,
			padding: 0,
			numVisible: 5,
			fullWidth: false,
			indicators: false,
			noWrap: true,
			onCycleTo: null
		})
		M.Carousel.init(document.getElementById('order'), {
			duration: 200,
			dist: -100,
			shift: 10,
			padding: 0,
			numVisible: 5,
			fullWidth: false,
			indicators: false,
			noWrap: true,
			onCycleTo: null
		})
	})

	return (
		<AnimateFadePage>
			<div id="cafe-page">
				<section className='section one'>
					<div className="row">
						<div className='col s12'>
							<h2 className='center'>Kafé</h2>
							<br />
						</div>
						<div className="col s12 m4 l3">
							<img className='bosse-gabby' alt='Gabby och Bosse' src={gabbyBosse} />
						</div>
						<div className="col s12 m5 l6">
							<p className='first-paragraph'>
								Vi är Gabbi och Bosse, och vi har den stora äran att driva B&B och sommarcafé på den vackra Lögdö Herrgård. Med midsommar runt hörnet startar vi upp med vårt sommarcafé, öppet varje helg mellan kl. 11-15. Vi hoppas att ni tar er tid att besöka oss och njuta av vårt sortiment av kakor, bullar, cheesecake och mycket mer.
							</p>
							<p>
								Vi erbjuder även smörgåsar, där du kan välja mellan en mängd olika alternativ som räksmörgås, leverpastej och Ceasar smörgås med kyckling, och för våra vegetariska vänner har vi självklart även ett vegetariskt alternativ. Dessutom serverar vi glass och en mängd olika kalla drycker för att hålla er svala under sommaren.
							</p>
							<p>
								Vi vill gärna påminna er om att ni också kan boka rum hos oss, och om ni har några frågor eller funderingar så är ni varmt välkomna att ringa oss. Vi hoppas att ni kommer och besöker oss och dela gärna med er av detta till era nära och kära, då vi för närvarande inte har så många kanaler för att nå ut till er.
							</p>
							<p>
								Vi ser fram emot att träffa er och få ge er en trevlig upplevelse på Lögdö Herrgård.
							</p>
						</div>
						<div className="col s12 m3 l3 center-align">
							<h5 className='first-title'>Öppettider</h5>
							<br />
							Från midsommar - 16 augusti
							<ul>
								<li>Lördagar: 11-15</li>
								<li>Söndagar: 11-15</li>
							</ul>
							<br />
							<a className='btn waves-effect' href='mailto:logdoherrgard@icloud.com?subject=Boka kafe'>Mejla kaféet<i className="material-icons left">mail</i></a>
							<br />
							<a className='btn waves-effect' href="tel:+46722303337">072-2303337<i className="material-icons left">phone</i></a>
						</div>
					</div>
				</section>
				<section className='section two'>
					<div className="row">
						<div className="col s12">
							<h3>Meny</h3>
						</div>
						<div className="col s12 m6">
							<h4>Kafè</h4>
							<div id='cookies' className="carousel">
								<a className="carousel-item" href="#mackor!"><img alt='' src={mackor} /></a>
								<a className="carousel-item" href="#macka1!"><img alt='' src={macka1} /></a>
								<a className="carousel-item" href="#macka2!"><img alt='' src={macka2} /></a>
								<a className="carousel-item" href="#macka3!"><img alt='' src={macka3} /></a>
								<a className="carousel-item" href="#macka4!"><img alt='' src={macka4} /></a>
								<a className="carousel-item" href="#macka5!"><img alt='' src={macka5} /></a>
								<a className="carousel-item" href="#cookie1!"><img alt='' src={kakor1} /></a>
								<a className="carousel-item" href="#cookie2!"><img alt='' src={kakor2} /></a>
								<a className="carousel-item" href="#cookie3!"><img alt='' src={kakor3} /></a>
								<a className="carousel-item" href="#cookie4!"><img alt='' src={kakor4} /></a>
								<a className="carousel-item" href="#cookie6!"><img alt='' src={kakor5} /></a>
							</div>
						</div>
						<div className="col s12 m6">
							<h4>Förfrågan</h4>
							<div id='order' className="carousel">
								<a className="carousel-item" href="#one!"><img alt='' src={smorgardstarta1} /></a>
								<a className="carousel-item" href="#two!"><img alt='' src={smorgardstarta2} /></a>
								<a className="carousel-item" href="#cookie1!"><img alt='' src={mat1} /></a>
								<a className="carousel-item" href="#cookie2!"><img alt='' src={mat2} /></a>
								<a className="carousel-item" href="#cookie3!"><img alt='' src={mat3} /></a>
								<a className="carousel-item" href="#cookie4!"><img alt='' src={mat4} /></a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default Cafe