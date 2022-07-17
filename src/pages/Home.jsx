import { Link } from "react-router-dom";

import AnimateFadePage from '../includes/_AnimateFadePage';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation } from 'swiper';

import img1 from './../assets/images/q1.jpg'
import img3 from './../assets/images/q.jpg'
import placeholder from './../assets/images/placeholder-icon.jpg'

const slider = [img1, img3]

const Home = () => {
	return (
		<AnimateFadePage>
			<section className='hide'>
				<h2>Välkommen!</h2>
			</section>

			<section className='full-width-small'>
				<Swiper
					modules={[Navigation, EffectFade, Autoplay]}
					effect="fade"
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
						pauseOnMouseEnter: false
					}}
					loop={true}
					navigation={true}
				>
					{slider.map(
						(img, index) =>
							<SwiperSlide key={index}><img className='swiper-image' src={img} alt='img1' /></SwiperSlide>
					)}
				</Swiper>
			</section>

			<section>
				<div className='home-brands'>
					<div>
						<img className='brand' src={placeholder} alt='logo' />
						<h3>Bed and Brekfast</h3>
						<p>Kom och upplev hergårdslivet här hos oss i Lögdö utanför Timrå.</p>
						<br />
						<Link to='/BaB' className="btn">Läs mer..</Link>
					</div>
					<div>
						<img className='brand' src={placeholder} alt='logo' />
						<h3>Kafé</h3>
						<p>Besök vårat helgkafé där du kan sitta i en helt unik miljö.</p>
						<br />
						<Link to='/kafe' className="btn">Läs mer..</Link>
					</div>
					<div>
						<img className='brand' src={placeholder} alt='logo' />
						<h3>Keramik</h3>
						<p>Från kurser till hantverk i både keramik och träsniderier.</p>
						<br />
						<Link to='/keramik' className="btn">Läs mer..</Link>
					</div>
				</div>
				<div className='home-brands'>
					<div>
						<img className='brand' src={placeholder} alt='logo' />
						<h3>I närheten</h3>
						<p>Lorem ipsum dolor</p>
						<br />
						<Link to='/aktiviteter' className="btn">Läs mer..</Link>
					</div>
					<div>
						<img className='brand' src={placeholder} alt='logo' />
						<h3>Galleri</h3>
						<p>Lorem ipsum dolor</p>
						<br />
						<Link to='/galleri' className="btn">Läs mer..</Link>
					</div>
					<div>
						<img className='brand' src={placeholder} alt='logo' />
						<h3>Historia</h3>
						<p>Lorem ipsum dolor</p>
						<br />
						<Link to='/historia' className="btn">Läs mer..</Link>
					</div>
				</div>
			</section>

			<section className="hide">
				<p>Björn Schumacher och Mattias Rustan äger Lögdö Herrgård. Byggnaden fungerar som privat boende, Bed and Brekfast och festlokal året om. På sommaren har de även cafe där du kan sitta i en unik miljö.</p>
				<p>På Herrgården finns 8 sängplatser som är fördelade med 1 enkelrum 2 dubbelrum och 1 trebäddsrum. Ca 60 sittplatser i fördelat på två rum. Herrgårdens stolta snickartraditioner finns ännu bevarade och skapar en välkomnande atmosfär. De ljus och luftiga salongerna är stilfullt möblerade. Kristallkronorna och de vackra kakelugnarna förstärker den genuina miljön. Rummen är inreda i gammal stil och förstärka den miljön som det en gång har varit.</p>
				<p>Anläggningen uthyres till enskilda såväl som föreningar eller företag. Här håls även helgkurser i olika konst och hantverkskurser.</p>
			</section>

			<footer>
				<div className='footer hide-off'>
					<div>

						<div>
							<h3 className='widget-title'>Om oss</h3>
							<p>Björn Schumacher och Mattias Rustan äger Herrgården. Byggnaderna fungerar som privat boende, Bed and Brekfast och festlokal året om. På sommaren har vi även cafe där du kan sitta i en unik miljö.</p>
							<p>På Herrgården finns det åtta sängplatser som är fördelade med ett enkelrum två dubbelrum och ett trebäddsrum. Ca 60 sittplatser i fördelat på två rum. Herrgårdens stolta snickartraditioner finns ännu bevarade och skapar en välkomnande atmosfär. De ljus och luftiga salongerna är stilfullt möblerade. Kristallkronorna och de vackra kakelugnarna förstärker den genuina miljön. Rummen är inreda i gammal stil och förstärka den miljön som det en gång har varit.</p>
						</div>

						<div>
							<h3 className='widget-title'>Övrigt</h3>
							<ul>
								<li><Link to='/historia'>Historia</Link></li>
								<li><Link to='/aktiviteter'>Området</Link></li>
								<li><Link to='/galleri'>Galleri</Link></li>
							</ul>
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
		</AnimateFadePage>
	);
}

export default Home