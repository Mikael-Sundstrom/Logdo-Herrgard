// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import dubbelrum1 from './../assets/images/bab/dubbelrum-1.jpg'
import dubbelrum2 from './../assets/images/bab/dubbelrum-2.jpg'
import dubbelrum3 from './../assets/images/bab/dubbelrum-3.jpg'
import enkelrum1 from './../assets/images/bab/enkelrum-1.jpg'
import foaje1 from './../assets/images/bab/foaje-1.jpg'
import foaje2 from './../assets/images/bab/foaje-2.jpg'
import foaje3 from './../assets/images/bab/foaje-3.jpg'
import bibliotek from './../assets/images/bab/bibliotek.jpg'
import toalettPlan2 from './../assets/images/bab/toalett-plan2.jpg'
import toalettMedDuschPlan2 from './../assets/images/bab/toalett-med-dusch-plan2.jpg'


// Component
const BaB = () => {
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
			<div id='bab-page'>
				<section className='section one'>
					<div className='row'>
						<div className="col s12">
							<h2>Rum</h2>
							<br />
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={dubbelrum1} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Göken<i className="material-icons right">more_vert</i></span>
										<p>Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Göken<i className="material-icons right">close</i></span>
									<ul>
										<li>995:-/natt</li>
										<li>75:-/frukost</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={dubbelrum2} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Höken<i className="material-icons right">more_vert</i></span>
										<p>Ett trebäddsrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Höken<i className="material-icons right">close</i></span>
									<ul>
										<li>995:-/natt</li>
										<li>75:-/frukost</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className='col s6 m3'>
								<div className='card'>
									<div className='card-image'>
										<img alt='' src={dubbelrum1} className='materialboxed' />
										<span className='card-title'>Dubbelrum väst</span>
									</div>
									<div className='card-content'>
										Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.
									</div>
								</div>
							</div>
							<div className='col s6 m3'>
								<div className='card'>
									<div className='card-image'>
										<img alt='' src={dubbelrum2} className='materialboxed' />
										<span className='card-title'>Dubbelrum öst</span>
									</div>
									<div className='card-content'>
										Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.
									</div>
								</div>
							</div>
							<div className='col s6 m3'>
								<div className='card'>
									<div className='card-image'>
										<img alt='' src={enkelrum1} className='materialboxed' />
										<span className='card-title'>Enkelrum</span>
									</div>
									<div className='card-content'>
										Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.
									</div>
								</div>
							</div>
							<div className='col s6 m3'>
								<div className='card'>
									<div className='card-image'>
										<img alt='' src={hallUppe} className='materialboxed' />
										<span className='card-title'>Foajé</span>
									</div>
									<div className='card-content'>calc(33% - 16px)
										Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.
									</div>
								</div>
							</div> */}
					</div>
					<div className="row">
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={dubbelrum3} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Örnen<i className="material-icons right">more_vert</i></span>
										<p>Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Örnen<i className="material-icons right">close</i></span>
									<ul>
										<li>695:-/natt</li>
										<li>75:-/frukost</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={enkelrum1} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Skvadern<i className="material-icons right">more_vert</i></span>
										<p>Ett enkelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Skvadern<i className="material-icons right">close</i></span>
									<ul>
										<li>695:-/natt</li>
										<li>75:-/frukost</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<br />
							<img src={foaje1} alt="" style={{ marginRight: '8px', width: 'calc(33% - 5px)' }} />
							<img src={foaje2} alt="" style={{ marginRight: '8px', width: 'calc(33% - 5px)' }} />
							<img src={foaje3} alt="" style={{ marginRight: '0px', width: 'calc(33% - 5px)' }} />
							<img src={bibliotek} alt="" style={{ marginRight: '8px', width: 'calc(33% - 5px)' }} />
							<img src={toalettPlan2} alt="" style={{ marginRight: '8px', width: 'calc(33% - 5px)' }} />
							<img src={toalettMedDuschPlan2} alt="" style={{ marginRight: '0px', width: 'calc(33% - 5px)' }} />
						</div>
					</div>
				</section>
				<section>
					<div className="row">
						<div className="col s12">
							<div>
								<h3>Pristabell</h3>
								<br />
								<table>
									<caption><big>Övernattning</big></caption>
									<thead>
										<tr>
											<th>Rum <sup>(inkl. frukost)</sup></th>
											<th>Pris</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Enkelrum</td>
											<td>695:-/natt</td>
										</tr>
										<tr>
											<td>Dubbelrum</td>
											<td>995:-/natt</td>
										</tr>
										<tr>
											<td>Trebäddsrum</td>
											<td>1690:-/natt</td>
										</tr>
										<tr>
											<td>Endast frukost</td>
											<td>75:-/person</td>
										</tr>
									</tbody>
								</table>
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
											<td>Fredag-söndag</td>
											<td>2000:-/dag</td>
										</tr>
										<tr>
											<td>Fredag-söndag <sup style={{ fontSize: '12px' }}>(kl 12 fre - 15 sön)</sup></td>
											<td>5000:-</td>
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
									<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect waves-light btn center'>Klicka här för offert <i className="material-icons left">mail</i></a>
								</p>
							</div>
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
		</AnimateFadePage >
	)
}

export default BaB