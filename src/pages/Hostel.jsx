import AnimateFadePage from '../includes/_AnimateFadePage'

/* import M from 'materialize-css/dist/js/materialize.min.js' */
import { useEffect } from 'react'


const Hostel = () => {
	useEffect(() => {
	})

	return (
		<AnimateFadePage>
			<div id="hostel-page">
				<section className='section one'>
					<div className="row">
						<div className="col s12">
							<h2>Vandrarhem</h2>
							<br />
						</div>
						<div className="col s12">
							<p>
								På övre plan finns två dubbelrum och ett rum för fyra personer
								matplats, soffa och fåtöljer.
							</p>
							<p>
								På nedre plan finns ett pentry med: spis, kyl/frysfack, mikrovågsugn, kaffebryggare, porslin, glas och bestick
								toalett med dusch och tvättmaskin, samt torktumlare.
							</p>
						</div>
						<div className="col s12">
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
										<td>Lakan och handdukar</td>
										<td>100:-/säng och dygn</td>
									</tr>
									<tr>
										<td>Frukost går att beställa</td>
										<td>75:-/person</td>
									</tr>
								</tbody>
							</table>
							<p className="flow-text">
								<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect waves-light btn center'>Klicka här för att boka <i className="material-icons left">mail</i></a>
							</p>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default Hostel