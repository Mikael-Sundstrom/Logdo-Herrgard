// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

// Images
import gabbyBosse from './../assets/images/kafe/gabby-och-bosse.jpg'
import macka1 from './../assets/images/kafe/macka-1.jpg'
import macka2 from './../assets/images/kafe/macka-2.jpg'
import macka3 from './../assets/images/kafe/macka-3.jpg'
import macka4 from './../assets/images/kafe/macka-4.jpg'
import macka5 from './../assets/images/kafe/macka-5.jpg'

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
			<section>
				<h2>Kafé</h2>
				<img className='history-image-one' alt='Gabby och Bosse' src={gabbyBosse} />
				<p>Vi vill passa på att presentera oss då delmål 1 börjar att bli klart.
					Gabbi och Bosse heter vi som har äran att få driva B&B och sommar café på Lögdö Herrgård.
					Vi startar upp med sommar café midsommar söndagen och därefter varje helg 11-15, varmt välkomna.
					För att boka rum eller har andra funderingar så är vårt telefonnummer 072-2303337. Dela gärna vidare då vi för närvarande använder bara den här kanalen😁</p>
			</section>
			<section className='row'>
				<div className='col s12'>
					<h3 className='center'>Våra smörgåsar</h3>
					<div id='sandwiches' className="carousel">
						<a className="carousel-item" href="#one!"><img alt='' src={macka1} /></a>
						<a className="carousel-item" href="#two!"><img alt='' src={macka2} /></a>
						<a className="carousel-item" href="#three!"><img alt='' src={macka3} /></a>
						<a className="carousel-item" href="#four!"><img alt='' src={macka4} /></a>
						<a className="carousel-item" href="#five!"><img alt='' src={macka5} /></a>
					</div>
				</div>
			</section>
		</AnimateFadePage>
	)
}

export default Cafe