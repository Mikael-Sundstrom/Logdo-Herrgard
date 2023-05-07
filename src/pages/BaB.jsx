// Core
import AnimateFadePage from '../includes/_AnimateFadePage'
import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import rum1 from './../assets/images/bab/512/rum1.webp'
import rum2 from './../assets/images/bab/512/rum2.webp'
import rum3 from './../assets/images/bab/512/rum3.webp'
import rum4 from './../assets/images/bab/512/rum4.webp'
import rum5 from './../assets/images/bab/512/rum5.webp'
import foaje1 from './../assets/images/bab/512/foaje-1.webp'
import foaje2 from './../assets/images/bab/512/foaje-2.webp'
import foaje3 from './../assets/images/bab/512/foaje-3.webp'
import bibliotek from './../assets/images/bab/512/bibliotek.webp'
import toalettPlan2 from './../assets/images/bab/512/toalett-plan2.webp'
import toalettMedDuschPlan2 from './../assets/images/bab/512/toalett-med-dusch-plan2.webp'


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
				<section className='section one container'>
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
									<img alt='' src={rum4} className='materialboxed' />
								</div>
								<div className="card-stacked">
									<div className="card-content">
										<span className='card-title truncate activator'>Rum 4<i className="material-icons right">more_vert</i></span>
										<p>Ett enkelrum i gammal stil. Återupplev den gammaldagsa stilen som vi tidigare hade i Sverige.</p>
									</div>
								</div>
								<div className="card-reveal">
									<span className="card-title grey-text text-darken-4">Rum 4<i className="material-icons right">close</i></span>
									<ul>
										<li>Dubbelrum</li>
										<li>695:-/natt <sup>ink. frukost</sup></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col s12 m10 offset-m1 l6 offset-l3">
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
				<section className='section two container'>
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
								</tbody>
							</table>
							<br />
							<br />
							<br />
							<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect btn center'>Bokningsförfrågan <i className="material-icons left">mail</i></a>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage >
	)
}

export default BaB