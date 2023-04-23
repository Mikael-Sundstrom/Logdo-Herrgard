// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import rum1 from './../assets/images/bab/512/rum1.jpg'
import rum2 from './../assets/images/bab/512/rum2.jpg'
import rum3 from './../assets/images/bab/512/rum3.jpg'
import rum5 from './../assets/images/bab/512/rum5.jpg'
import foaje1 from './../assets/images/bab/512/foaje-1.jpg'
import foaje2 from './../assets/images/bab/512/foaje-2.jpg'
import foaje3 from './../assets/images/bab/512/foaje-3.jpg'
import bibliotek from './../assets/images/bab/512/bibliotek.jpg'
import toalettPlan2 from './../assets/images/bab/512/toalett-plan2.jpg'
import toalettMedDuschPlan2 from './../assets/images/bab/512/toalett-med-dusch-plan2.jpg'


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
			<div id='bab-page' className=''>
				<section className='section one'>
					<div className='row'>
						<div className="col s12">
							<h2>Rum</h2>
							<br />
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={rum1} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Rum 1<i className="material-icons right">more_vert</i></span>
										<p>Ett enkelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Rum 1<i className="material-icons right">close</i></span>
									<ul>
										<li>Enkelrum</li>
										<li>695:-/natt <sup>ink. frukost</sup></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={rum2} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Rum 2<i className="material-icons right">more_vert</i></span>
										<p>Vårt charmiga trebäddsrum i lantlig stil med en lugn och harmonisk atmosfär. Återupplev den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Rum 2<i className="material-icons right">close</i></span>
									<ul>
										<li>Trebäddsrum</li>
										<li>995:-/natt <sup>ink. frukost</sup></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={rum3} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Rum 3<i className="material-icons right">more_vert</i></span>
										<p>Ett dubbelrum i gammal stil. Återupplev den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Rum 3<i className="material-icons right">close</i></span>
									<ul>
										<li>Dubbelrum</li>
										<li>995:-/natt <sup>ink. frukost</sup></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l6">
							<div className="card horizontal">
								<div className="card-image">
									<img alt='' src={rum5} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Rum 5<i className="material-icons right">more_vert</i></span>
										<p>Ett dubbelrum i gammal stil. Återupplev den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Rum 5<i className="material-icons right">close</i></span>
									<ul>
										<li>Dubbelrum</li>
										<li>695:-/natt <sup>ink. frukost</sup></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="row hide">
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
						<div className="col s12 center-align">
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
							<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect btn center'>Mejla förfrågan <i className="material-icons left">mail</i></a>
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
		</AnimateFadePage >
	)
}

export default BaB