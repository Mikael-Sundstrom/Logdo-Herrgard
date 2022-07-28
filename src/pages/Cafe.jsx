import AnimateFadePage from '../includes/_AnimateFadePage';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

import gabbyBosse from './../assets/images/kafe/gabby-och-bosse.jpg'
import macka1 from './../assets/images/kafe/macka-1.jpg'
import macka2 from './../assets/images/kafe/macka-2.jpg'
import macka3 from './../assets/images/kafe/macka-3.jpg'
import macka4 from './../assets/images/kafe/macka-4.jpg'
import macka5 from './../assets/images/kafe/macka-5.jpg'

const Cafe = () => {
	useEffect(() => {
		M.AutoInit();
		let instance = () => M.Carousel.init(document.getElementsByClassName('carousel'), {
			duration: 200,
			dist: 100,
			shift: 0,
			padding: 0,
			numVisible: 0,
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
				<p>Vi vill passa på att presentera oss då delmål 1 börjar att bli klart.
					Gabbi och Bosse heter vi som har äran att få driva B&B och sommar café på Lögdö Herrgård.
					Vi startar upp med sommar café midsommar söndagen och därefter varje helg 11-15, varmt välkomna.
					För att boka rum eller har andra funderingar så är vårt telefonnummer 072-2303337. Dela gärna vidare då vi för närvarande använder bara den här kanalen😁</p>
				<img alt='Gabby och Bosse' src={gabbyBosse} />
			</section>
			<section>
				<h3 className='center'>Våra smörgåsar</h3>
				<div className="carousel">
					<a className="carousel-item" href="#one!"><img alt='' src={macka1} /></a>
					<a className="carousel-item" href="#two!"><img alt='' src={macka2} /></a>
					<a className="carousel-item" href="#three!"><img alt='' ssrc={macka3} /></a>
					<a className="carousel-item" href="#four!"><img alt='' src={macka4} /></a>
					<a className="carousel-item" href="#five!"><img alt='' src={macka5} /></a>
				</div>
			</section>
		</AnimateFadePage>
	);
}

export default Cafe