import { Link } from "react-router-dom"
import AnimateFadePage from '../includes/_AnimateFadePage'

import img1 from './../assets/images/start.jpg'
/* import placeholder from './../assets/images/placeholder-icon.jpg' */
import bab from './../assets/images/home/bab.jpg'
import hostel from './../assets/images/home/hostel.jpg'
import img_cafe from './../assets/images/home/cafe.jpg'
import premises from './../assets/images/home/premises.jpg'
/* import img_activity from './../assets/images/home/activities.jpg' */


const Home = () => {
	return (
		<AnimateFadePage>
			<div id="home-page">
				<section className='full-width-small'>
					<img className='feature-image' src={img1} alt='feature_img' />
				</section>

				<section className="section one container">
					<div className='row'>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image bab">
									<img className='center-align' src={bab} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title">B&B</span>
									<p>Kom och upplev hergårdslivet här hos oss i Lögdö utanför Timrå.</p>
									<br />
									<Link to='/BaB' className="btn ">Besök B&B</Link>
								</div>
							</div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img src={img_cafe} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title">Kafé</span>
									<p>Besök vårat helgkafé där du kan sitta i en helt unik miljö.</p>
									<br />
									<Link to='/kafe' className="btn">Besök kafé</Link>
								</div>
							</div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img src={hostel} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title center-align">Vandrarhem</span>
									<p>Besök vårat helgkafé där du kan sitta i en helt unik miljö.</p>
									<br />
									<Link to='/vandrarhem' className="btn">Besök kafé</Link>
								</div>
							</div>
						</div>
						<div className="col s12 m6 l3">
							<div className="card z-depth-0">
								<div className="card-image">
									<img src={premises} alt='logo' />
								</div>
								<div className="card-content center-align">
									<span className="card-title">Lokaler</span>
									<p>Skapa en speciell händelse i våra vackra salonger.</p>
									<br />
									<Link to='/lokal' className="btn">Besök lokaler</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</AnimateFadePage>
	)
}

export default Home