import AnimateFadePage from '../includes/_AnimateFadePage'

import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'

import mosaic from './../assets/images/hostel/512/mosaic.webp'


const Hostel = () => {
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
			<div id="hostel-page">
				<section className='section one container'>
					<div className="row">
						<div className="col s12">
							<h2>Vandrarhem</h2>
							<br />
						</div>
						<div className="col m12 l6 center">
							<br />
							<img src={mosaic} alt="" className='materialboxed' />
						</div>
						<div className="col m12 l6">
							<p>
								Oavsett om du planerar en kort eller lång vistelse, så kommer vårt vandrarhem att ge dig en avkopplande och minnesvärd upplevelse mitt i den vackra naturen i Timrå. Vi ser fram emot att välkomna dig till Lögdö Herrgårds vandrarhem och göra din vistelse hos oss så bekväm och njutbar som möjligt.
							</p>
							<p>
								Du kan njuta av lugn och ro i vår vackra trädgård, eller ta en promenad genom de natursköna omgivningarna. För de som vill ha mer aktiviteter finns det möjlighet till fiske, cykling och vandring med mera.
							</p>
							<p>
								På övre plan finns två dubbelrum och ett rum för fyra personer,
								matplats, soffa och fåtöljer.
							</p>
							<p>
								På nedre plan finns ett pentry med: spis, kyl/frysfack, mikrovågsugn, kaffebryggare, porslin, glas och bestick
								toalett med dusch och tvättmaskin, samt torktumlare.
							</p>
						</div>
					</div>
				</section>
				<section className='section two container'>
					<div className="row">
						<div className="col s12 center-align">
							<h3>Pristabell</h3>
							<table>
								<caption>Prisinformation</caption>
								<thead>
									<tr>
										<th>Tjänst</th>
										<th>Pris</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Egna lakan och handdukar</td>
										<td>200:-/säng och dygn</td>
									</tr>
									<tr>
										<td>Låna lakan och handdukar</td>
										<td>100:-/säng</td>
									</tr>
									<tr>
										<td>Frukost går att beställa</td>
										<td>75:-/person</td>
									</tr>
								</tbody>
							</table>
							<br />
							<br />
							<br />
							<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect waves-light btn center'>Bokningsförfrågan <i className="material-icons left">mail</i></a>
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

export default Hostel