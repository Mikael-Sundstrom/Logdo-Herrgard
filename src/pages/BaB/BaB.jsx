/* import { Outlet, NavLink } from 'react-router-dom'; */
import AnimateFadePage from '../../includes/_AnimateFadePage';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';
import PriceTable from './price-table';
import Rooms from './rooms';

const BaB = () => {
	useEffect(() => {
		M.AutoInit();
		let instance = M.Tabs.init(document.getElementsByClassName('tabs'), {
			duration: 200,
			onShow: null,
			swipeable: false,
		})
	})
	return (
		<div>
			<AnimateFadePage>
				{/* <section>
					<br />
					<NavLink className={(navData) => (navData.isActive ? " btn disabled" : 'btn')} to="/BaB/rum">Rum</NavLink>
					&nbsp;
					&nbsp;
					<NavLink className={(navData) => (navData.isActive ? " btn disabled" : 'btn')} to="priser">Priser</NavLink>
				</section>
				<section>
					<Outlet />
				</section> */}
				<section>
					<ul className="tabs tabs-fixed-width">
						<li className="tab col s3"><a className="active black-text" href="#test-swipe-1">Rum</a></li>
						<li className="tab col s3"><a href="#test-swipe-2">Prislista</a></li>
						<li className="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
					</ul>
					<br />
					<div id="test-swipe-1"><Rooms /></div>
					<div id="test-swipe-2"><PriceTable /></div>
					<div id="test-swipe-3">Test 3</div>
				</section>
			</AnimateFadePage>
		</div>
	);
}

export default BaB