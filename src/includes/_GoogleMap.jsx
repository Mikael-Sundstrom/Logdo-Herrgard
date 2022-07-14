/* https://www.npmjs.com/package/@react-google-maps/api */

import React from 'react'
/* import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '1064px',
	height: '50vh'
};

const center = {
	lat: 62.557407,
	lng: 17.383419
}; */

function GoogleMapPage() {
	/* 	const { isLoaded } = useJsApiLoader({
			id: 'google-map-script',
			googleMapsApiKey: "AIzaSyBmu0arFHln81OE8cLf6sM7fsY4mQ2QPi8"
		})

		const [map, setMap] = React.useState(null)

		const onLoad = React.useCallback(function callback(map) {
			const bounds = new window.google.maps.LatLngBounds(center);
			map.fitBounds(bounds);
			setMap(map)
		}, [])

		const onUnmount = React.useCallback(function callback(map) {
			setMap(null)
		}, [])

		return isLoaded ? (
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
			> */
	/* Child components, such as markers, info windows, etc. */

	/* <></>
		</GoogleMap>
	) : <></> */
}

export default React.memo(GoogleMapPage)