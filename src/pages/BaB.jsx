import AnimateFadePage from '../includes/_AnimateFadePage';

const Reserve = () => {
	return (
		<AnimateFadePage>
			<section>
				<h2>Bed and Brekfast</h2>
				<br />
				<table>
					<caption>Övernattning</caption>
					<thead>
						<tr>
							<th>Tjänst</th>
							<th>Pris</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Enkelrum</td>
							<td>495:-/natt</td>
						</tr>
						<tr>
							<td>Dubbelrum</td>
							<td>695:-/natt</td>
						</tr>
						<tr>
							<td>Trebäddsrum</td>
							<td>895:-/natt</td>
						</tr>
						<tr>
							<td>Frukost</td>
							<td>150:-/person</td>
						</tr>
					</tbody>
				</table>
				<br />
				<br />
				<br />
				<br />
				<table>
					<caption>Hyra festsalongerna</caption>
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
			</section>
		</AnimateFadePage>
	);
}

export default Reserve