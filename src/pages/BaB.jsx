// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import dubbelrum1 from './../assets/images/bab/dubbelrum-1.jpg'
import dubbelrum2 from './../assets/images/bab/dubbelrum-2.jpg'
import enkelrum1 from './../assets/images/bab/enkelrum-1.jpg'
/* import hallUppe from './../assets/images/bab/hall-uppe.jpg' */


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
		<div>
			<AnimateFadePage>
				<div id='bab-page'>
					<section className='section one'>
						<div className='row'>
							<div className="col s12">
								<h2>Rum</h2>
							</div>
							<div className="col s12 m10 offset-m1 l6">
								<div className="card horizontal">
									<div className="card-image">
										<img alt='' src={dubbelrum1} className='materialboxed' />
									</div>
									<div className="card-stacked">
										<div className="card-content">
											<span className='card-title truncate activator'>Dubbelrum<i className="material-icons right">more_vert</i></span>
											<p>Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
										</div>
									</div>
									<div className="card-reveal">
										<span className="card-title grey-text text-darken-4">Dubbelrum väst<i className="material-icons right">close</i></span>
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
											<span className='card-title truncate activator'>Dubbelrum<i className="material-icons right">more_vert</i></span>
											<p>Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
										</div>
									</div>
									<div className="card-reveal">
										<span className="card-title grey-text text-darken-4">Dubbelrum öst<i className="material-icons right">close</i></span>
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
										<img alt='' src={enkelrum1} className='materialboxed' />
									</div>
									<div className="card-stacked">
										<div className="card-content">
											<span className='card-title truncate activator'>Enkelrum<i className="material-icons right">more_vert</i></span>
											<p>Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
										</div>
									</div>
									<div className="card-reveal">
										<span className="card-title grey-text text-darken-4">Enkelrum<i className="material-icons right">close</i></span>
										<ul>
											<li>695:-/natt</li>
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
									<div className='card-content'>
										Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.
									</div>
								</div>
							</div> */}
						</div>
					</section>
					<section>
						<div className="row">
							<div className="col s12">
								<div>
									<h2>Pristabell</h2>
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
				</div>

			</AnimateFadePage >
		</div >
	)
}

export default BaB