import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="page-footer">
			<div className="container">
				<div className="row">
					<div className="col s12 m7">
						<h3 className='widget-title'>Om oss</h3>
						<p>Björn Schumacher och Mattias Rustan äger Herrgården. Byggnaderna fungerar som privat boende, Bed and Brekfast och festlokal året om. På sommaren har vi även cafe där du kan sitta i en unik miljö.</p>
						<p>På Herrgården finns det åtta sängplatser som är fördelade med ett enkelrum två dubbelrum och ett trebäddsrum. Ca 50 sittplatser i fördelat på två rum. Herrgårdens stolta snickartraditioner finns ännu bevarade och skapar en välkomnande atmosfär. De ljus och luftiga salongerna är stilfullt möblerade. Kristallkronorna och de vackra kakelugnarna förstärker den genuina miljön. Rummen är inreda i gammal stil och förstärka den miljön som det en gång har varit.</p>
					</div>

					<div className="col s12 m4 offset-m1">
						<h3 className='widget-title'>Övrigt</h3>
						<ul>
							<li><Link to='/historia'>Historia om Lögdö</Link></li>
							<li><Link to='/aktiviteter'>Aktiviteter i området</Link></li>
							<li><Link to='/galleri'>Galleri</Link></li>
						</ul>

						<h3 className='widget-title'>Adress</h3>
						<ul>
							<li>Bruksvägen 27</li>
							<li>861 92 Bergeforsen</li>
							<li><a className='inline-link' href="tel:+46722303337">072-230 33 37</a></li>
							<li><a className='inline-link' href="mailto:logdoherrgard@icloud.com">logdoherrgard@icloud.com</a></li>
						</ul>
						<br />
						<a href='https://goo.gl/maps/sQ267xUnx9jtPDY27' target='_blank' rel="noreferrer" className='waves-effect btn center'><i className="material-icons left">location_on</i>Google Maps</a>
						<br />
						<br />
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					<span>&copy; 2023 Lögdö Herrgård</span>
					<span className='do-not-remove right'>Skapad av <a href="https://github.com/Mikael-Sundstrom">Mikael Sundström</a></span>
				</div>
			</div>
		</footer>
	)
}

export default Footer