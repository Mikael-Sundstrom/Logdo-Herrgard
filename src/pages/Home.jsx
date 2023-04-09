import { Link } from "react-router-dom"
import AnimateFadePage from '../includes/_AnimateFadePage'

import img1 from './../assets/images/start.jpg'
/* import placeholder from './../assets/images/placeholder-icon.jpg' */
import bab from './../assets/images/home/bab2.jpg'
/* import img_bab from './../assets/images/home/bab.jpg' */
import img_cafe from './../assets/images/home/cafe.jpg'
/* import img_pottery from './../assets/images/home/pottery.jpg'
import img_activity from './../assets/images/home/activities.jpg' */


const Home = () => {
	return (
		<AnimateFadePage>
			<div id="home-page">
				<section className='full-width-small'>
					<img className='feature-image' src={img1} alt='feature_img' />
				</section>

				<section>
					<div className='home-brands row'>
						<div className="col s12 m12 l6">
							<img className='brand' src={bab} alt='logo' />
							<h4>Bed and Brekfast</h4>
							<p>Kom och upplev hergårdslivet här hos oss i Lögdö utanför Timrå.</p>
							<br />
							<Link to='/BaB' className="btn">Besök B&B</Link>
						</div>
						<div className="col s12 m12 l6">
							<img className='brand' src={img_cafe} alt='logo' />
							<h4>Kafé</h4>
							<p>Besök vårat helgkafé där du kan sitta i en helt unik miljö.</p>
							<br />
							<Link to='/kafe' className="btn">Besök kafé</Link>
						</div>
					</div>
				</section>

				<footer>
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
								<a href='https://www.google.com/maps/place/L%C3%B6gd%C3%B6+Bruk/@62.557407,17.383419,12z/data=!4m5!3m4!1s0x0:0x6bc2d023e0afb519!8m2!3d62.5576457!4d17.3841999?hl=sv' target='_blank' rel="noreferrer" className='btn'>Google Maps</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</AnimateFadePage>
	)
}

export default Home