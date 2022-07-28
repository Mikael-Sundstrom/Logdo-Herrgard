import dubbelrum1 from './../../assets/images/bab/dubbelrum-1.jpg'
import dubbelrum2 from './../../assets/images/bab/dubbelrum-2.jpg'
import enkelrum1 from './../../assets/images/bab/enkelrum-1.jpg'
import hallUppe from './../../assets/images/bab/hall-uppe.jpg'

const Rooms = () => {
	return (
		<div>
			<h2>Sovrum</h2>
			<br />
			<div className='row'>
				<div className='col s12 m4'>
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
				<div className='col s12 m4'>
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
				<div className='col s12 m4'>
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
				<div className='col s12 m4'>
					<div className='card'>
						<div className='card-image'>
							<img alt='' src={hallUppe} className='materialboxed' />
							<span className='card-title'>Foajé</span>
						</div>
						<div className='card-content'>
							Ett dubbelrum i gammal stil. Du får återuppleva den gammaldagsa stilen som vi tidigare hade i Sverige.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rooms