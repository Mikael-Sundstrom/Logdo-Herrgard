// Core
import AnimateFadePage from '../../includes/_AnimateFadePage';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

// Components
import PriceTable from './price-table';
import Rooms from './rooms';

// Component
const BaB = () => {
	useEffect(() => {
		M.Tabs.init(document.getElementById('bab-tabs'), {
			duration: 200,
			onShow: null,
			swipeable: false,
		})
	})

	return (
		<div>
			<AnimateFadePage>
				<section>
					<ul id='bab-tabs' className="tabs tabs-fixed-width">
						<li className="tab col s3"><a className="active" href="#test-swipe-1">Rum</a></li>
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