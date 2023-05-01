// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import library from './../assets/images/premises/1200/library_1.jpg'
import diningRoom from './../assets/images/premises/1200/dining-room_6.jpg'
import garden from './../assets/images/premises/1200/garden_1.jpg'


// Component
const Premises = () => {
	useEffect(() => {
		M.Materialbox.init(document.querySelectorAll('.materialboxed'), {
			inDuration: 200,
			outDuration: 150,
			onOpenStart: null,
			onOpenEnd: null,
			onCloseStart: null,
			onCloseEnd: null
		})
		M.Slider.init(document.querySelectorAll('.slider'), {
			indicators: true,
			height: 500,
			duration: 1000,
			interval: 6000
		})
	})

	return (
		<AnimateFadePage>
			<div id='premises-page'>
				<section className='section one'>
					<div className='row'>
						<div className="col s12">
							<h2>Lokaler</h2>
							<br />
						</div>
						<div className="col s12">
							<div className="slider">
								<ul className="slides">
									<li>
										<img src={diningRoom} alt='matsal' />
										<div className="caption center-align">
											<h3>Boka lunch och middag</h3>
											<h5>Ha en trevlig familjedag</h5>
											<br />
										</div>
									</li>
									<li>
										<img src={library} alt='bibliotek' />
										<div className="caption left-align">
											<h3>Kursdag eller konferens</h3>
											<h5>Matsalen tar upp till 50 personer</h5>
											<br />
										</div>
									</li>
									<li>
										<img src={garden} alt='trädgård' />
										<div className="caption right-align">
											<h3>Hyr trädgården</h3>
											<h5>För utomhusaktivitéter</h5>
											<br />
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className='section two container'>
					<div className="row">
						<div className="col s12 center-align">
							<div>
								<h3>Pristabell</h3>
								<br />
								<br />
								<br />
								<table>
									<caption><big>Hyra festsalongerna</big></caption>
									<thead>
										<tr>
											<th>Tjänst</th>
											<th>Pris</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Måndag-torsdag</td>
											<td>1500:-/hel dag</td>
										</tr>
										<tr>
											<td>Måndag-torsdag</td>
											<td>1000:-/halv dag</td>
										</tr>
										<tr>
											<td>Städning av lokal och toaletter</td>
											<td>1000:-</td>
										</tr>
										<tr>
											<td>Undanplockning och disk</td>
											<td>1500:-</td>
										</tr>
										<tr>
											<td>Hyra trädgården</td>
											<td>1000:-/dag</td>
										</tr>
										<tr>
											<td>Konferens <sup>ink. lunch & fika</sup></td>
											<td>400:-/person</td>
										</tr>
									</tbody>
								</table>
								<br />
								<p className='bigger-text'>
									Det går också bra att boka in lunch och middag.
									Matsalen passar bra att hyra för kurser, planeringsdagar mm.
									Det går också bra att boka Afternoon Tea med musik Quiz.
								</p>
								<p className='bigger-text'>
									Matsalen går att boka för upp till 50 sittande gäster. Vi kan ordna med buffé alt. middag. Vänligen kontakta oss för offert.
									<br />
									<br />
									<br />
									<br />
									<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect waves-light btn center'>Mejla för offert <i className="material-icons left">mail</i></a>
								</p>
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
								<a href='https://www.google.com/maps/place/L%C3%B6gd%C3%B6+Bruk/@62.557407,17.383419,12z/data=!4m5!3m4!1s0x0:0x6bc2d023e0afb519!8m2!3d62.5576457!4d17.3841999?hl=sv' target='_blank' rel="noreferrer" className='btn'>Google Maps</a>
							</div>
						</div>
					</div>
				</footer> */}
			</div>
		</AnimateFadePage >
	)
}

export default Premises