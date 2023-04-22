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

				<section className="section one">
					<div className='row'>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img className='center-align' src={bab} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title">B&B</span>
									<p>Kom och upplev hergårdslivet här hos oss i Lögdö utanför Timrå.</p>
									<br />
									<Link to='/BaB' className="btn ">Besök B&B</Link>
								</div>
							</div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img src={img_cafe} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title">Kafé</span>
									<p>Besök vårat helgkafé där du kan sitta i en helt unik miljö.</p>
									<br />
									<Link to='/kafe' className="btn">Besök kafé</Link>
								</div>
							</div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img src={img_cafe} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title center-align">Vandrarhem</span>
									<p>Besök vårat helgkafé där du kan sitta i en helt unik miljö.</p>
									<br />
									<Link to='/vandrarhem' className="btn">Besök kafé</Link>
								</div>
							</div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img src={img_cafe} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title">Lokaler</span>
									<p>Skapa en speciell händelse i våra vackra salonger.</p>
									<br />
									<Link to='/lokal' className="btn">Besök lokaler</Link>
								</div>
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

export default Home