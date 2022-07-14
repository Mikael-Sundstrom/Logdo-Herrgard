import AnimateFadePage from '../includes/_AnimateFadePage';
import GoogleMapPage from '../includes/_GoogleMap';

const Maps = () => {
	return (
		<AnimateFadePage>
			<section>
				<h2>Karta</h2>
				<GoogleMapPage></GoogleMapPage>
			</section>
		</AnimateFadePage>
	);
}

export default Maps