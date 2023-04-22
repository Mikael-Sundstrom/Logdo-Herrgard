// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

/* import rum1 from './../assets/images/bab/512/rum1.jpg'
import rum2 from './../assets/images/bab/512/rum2.jpg'
import rum3 from './../assets/images/bab/512/rum3.jpg'
import rum5 from './../assets/images/bab/512/rum5.jpg'
import foaje1 from './../assets/images/bab/512/foaje-1.jpg'
import foaje2 from './../assets/images/bab/512/foaje-2.jpg'
import foaje3 from './../assets/images/bab/512/foaje-3.jpg'
import bibliotek from './../assets/images/bab/512/bibliotek.jpg'
import toalettPlan2 from './../assets/images/bab/512/toalett-plan2.jpg'
import toalettMedDuschPlan2 from './../assets/images/bab/512/toalett-med-dusch-plan2.jpg' */


// Component
const Place = () => {
	useEffect(() => {
		M.Materialbox.init(document.querySelectorAll('.materialboxed'), {
			inDuration: 200,
			outDuration: 150,
			onOpenStart: null,
			onOpenEnd: null,
			onCloseStart: null,
			onCloseEnd: null
		})
	})

	return (
		<AnimateFadePage>
			<div id='place-page'>
				<section className='section one'>
					<div className='row'>
						<div className="col s12">
							<h2>Lokaler</h2>
							<br />
						</div>
						<div className="col s12 m10 offset-m1 l6">
							Ett
						</div>
						<div className="col s12 m10 offset-m1 l6">
							Två
						</div>
						<div className="col s12 m10 offset-m1 l6">
							Tre
						</div>
						<div className="col s12 m10 offset-m1 l6">
							Fyra
						</div>
					</div>
				</section>
				<section>
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
											<td>Konferens inkl lunch och fika</td>
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

export default Place