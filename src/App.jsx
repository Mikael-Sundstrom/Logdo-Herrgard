import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home'
import History from './pages/History'
import Reserve from './pages/Reserve'
import Gallery from './pages/Gallery'
import Activities from './pages/Activities'
import BaB from './pages/BaB'
import Cafe from './pages/Cafe';
import Maps from './pages/Maps';
import Error404 from './pages/Error404'
import Pottery from './pages/Pottery';

// Components
import Header from './includes/Header'
import Footer from './includes/Footer'

const routes = [
	{ name: "Hem", path: "/logdo-herrgard", component: <Home />, "class": "show" },
	{ name: "Historia", path: "/historia", component: <History />, "class": "hide" },
	{ name: "Galleri", path: "/galleri", component: <Gallery />, "class": "hide" },
	{ name: "Aktiviter i området", path: "/aktiviteter", component: <Activities />, "class": "hide" },
	{ name: "B & B", path: "/BaB", component: <BaB />, "class": "show" },
	{ name: "Kafé", path: "/kafe", component: <Cafe />, "class": "show" },
	{ name: "Keramik", path: "/keramik", component: <Pottery />, "class": "show" },
	{ name: "Karta", path: "/karta", component: <Maps />, "class": "hide" },
	{ name: "Boka", path: "/reserve", component: <Reserve />, "class": "hide" },
]

const App = () => {
	const location = useLocation()

	return (
		<>
			<Header routes={routes} />

			<main>
				<AnimatePresence exitBeforeEnter>
					<Routes key={location.pathname} location={location}>
						{routes.map(
							({ path, component }, index) =>
								<Route key={index} path={path} element={component} />
						)}
						<Route path="*" element={<Error404 />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</AnimatePresence>
			</main>

			<Footer />
		</>
	);
}

export default App;
