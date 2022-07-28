import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './includes/_ScrollToTop';

// Pages
import Home from './pages/Home'
import History from './pages/History'
import Reserve from './pages/Reserve'
import Gallery from './pages/Gallery'
import Activities from './pages/Activities'
import BaB from './pages/BaB/BaB'
import Cafe from './pages/Cafe';
import Error404 from './pages/Error404'
import Pottery from './pages/Pottery';

// Components
import Header from './includes/Header'
import Footer from './includes/Footer'
import PriceTable from './pages/BaB/price-table';
import Rooms from './pages/BaB/rooms';

const routes = [
	{
		name: "Hem",
		path: "logdo-herrgard",
		component: <Home />,
		"class": "show"
	}, {
		name: "Historia",
		path: "historia",
		component: <History />,
		"class": "hide"
	}, {
		name: "Galleri",
		path: "galleri",
		component: <Gallery />,
		"class": "hide"
	}, {
		name: "Aktiviter i området",
		path: "aktiviteter",
		component: <Activities />,
		"class": "hide"
	}, {
		name: "B & B",
		path: "BaB",
		component: <BaB />,
		"class": "show"
	}, {
		name: "Kafé",
		path: "kafe",
		component: <Cafe />,
		"class": "show"
	}, {
		name: "Keramik",
		path: "keramik",
		component: <Pottery />,
		"class": "show"
	}, {
		name: "Boka",
		path: "reserve",
		component: <Reserve />,
		"class": "hide"
	},
]

const App = () => {
	const location = useLocation()

	return (
		<>
			<Header routes={routes} />

			<main>
				<ScrollToTop />
				<AnimatePresence exitBeforeEnter>
					<Routes key={location.pathname} location={location}>
						<Route index element={<Home />} />
						{routes.map(
							({ path, component }, index) =>
								<Route key={index} path={path} element={component} />
						)}
						<Route path="BaB" element={<BaB />}>
							<Route index element={<Navigate to="rum" replace />} />
							<Route path="rum" element={<Rooms />} />
							<Route path="priser" element={<PriceTable />} />
						</Route>
						<Route path="*" element={<Error404 />} />
					</Routes>
				</AnimatePresence>
			</main>

			<Footer />
		</>
	);
}

export default App;
