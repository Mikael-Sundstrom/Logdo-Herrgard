import AnimateFadePage from '../includes/_AnimateFadePage';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation } from 'swiper';

import img1 from './../assets/images/1.jpg'
import img2 from './../assets/images/2.jpg'
import img3 from './../assets/images/3.jpg'

const slider = [img1, img2, img3]

const Home = () => {
	return (
		<AnimateFadePage>
			<section className='full-width-small'>
				<h2>Välkommen!</h2>
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
				<p>Björn Schumacher och Mattias Rustan äger Lögdö Herrgård. Byggnaden fungerar som privat boende, Bed and Brekfast och festlokal året om. På sommaren har de även cafe där du kan sitta i en unik miljö.</p>
				<p>På Herrgården finns 8 sängplatser som är fördelade med 1 enkelrum 2 dubbelrum och 1 trebäddsrum. Ca 60 sittplatser i fördelat på två rum. Herrgårdens stolta snickartraditioner finns ännu bevarade och skapar en välkomnande atmosfär. De ljus och luftiga salongerna är stilfullt möblerade. Kristallkronorna och de vackra kakelugnarna förstärker den genuina miljön. Rummen är inreda i gammal stil och förstärka den miljön som det en gång har varit.</p>
				<p>Anläggningen uthyres till enskilda såväl som föreningar eller företag. Här håls även helgkurser i olika konst och hantverkskurser.</p>
			</section>
		</AnimateFadePage>
	);
}

export default Home