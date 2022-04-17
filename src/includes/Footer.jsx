import './Footer.scss'

const Footer = () => {
	return (
		<footer>
			<div id="footer" className='hide'>
				<div>
					<div>
						<h3 className='widget-title'>Footer widget 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					</div>
					<div>
						<h3 className='widget-title'>Footer widget 2</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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