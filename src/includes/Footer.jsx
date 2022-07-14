import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div id="footer" className='hide-off'>
				<div>

					<div>
						<h3 className='widget-title'>Om oss</h3>
						<p>Björn Schumacher och Mattias Rustan äger Herrgården. Byggnaderna fungerar som privat boende, Bed and Brekfast och festlokal året om. På sommaren har vi även cafe där du kan sitta i en unik miljö.</p>
						<p>På Herrgården finns det åtta sängplatser som är fördelade med ett enkelrum två dubbelrum och ett trebäddsrum. Ca 60 sittplatser i fördelat på två rum. Herrgårdens stolta snickartraditioner finns ännu bevarade och skapar en välkomnande atmosfär. De ljus och luftiga salongerna är stilfullt möblerade. Kristallkronorna och de vackra kakelugnarna förstärker den genuina miljön. Rummen är inreda i gammal stil och förstärka den miljön som det en gång har varit.</p>
					</div>

					<div>
						<h3 className='widget-title'>Övrigt</h3>
						<ul>
							<li><Link to='/historia'>Historia</Link></li>
							<li><Link to='/aktiviteter'>Området</Link></li>
							<li><Link to='/galleri'>Galleri</Link></li>
						</ul>
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
			<div id="meta">
				<div>
					<span>&copy; 2022 Lögdö Herrgård</span>
					<span className='do-not-remove'>Skapad av <a href="http://mikaelsundstrom.se">Mikael Sundström</a></span>
				</div>
			</div>
		</footer>
	)
}

export default Footer