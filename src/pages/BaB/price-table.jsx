import M from 'materialize-css/dist/js/materialize.min.js'
import { useEffect } from 'react'


const PriceTable = () => {
	useEffect(() => {
		M.AutoInit()
	})

	return (
		<div style={{ maxWidth: '512px', margin: 'auto' }}>
			<h2>Pristabell</h2>
			<br />
			<table>
				<caption>Övernattning</caption>
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
				<caption>Hyra annexet - vandrarhem</caption>
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
			<p className="flow-text">
				Det går också bra att boka in lunch och middag.
				Matsalen passar bra att hyra för kurser, planeringsdagar mm.
				Det går också bra att boka Afternoon Tea med musik Quiz.
			</p>
			<p className="flow-text">
				Matsalen går att boka för upp till 50 sittande gäster. Vi kan ordna med buffé alt. middag. Vänligen kontakta oss för offert.
				<br />
				<br />
				<a href='mailto:logdoherrgard@icloud.com?subject=Boka' className='waves-effect waves-light btn center'>Klicka här för offert <i className="material-icons left">mail</i></a>
			</p>
		</div>
	)
}

export default PriceTable