import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home'
import History from './pages/History'
import Reserve from './pages/Reserve'
import Gallery from './pages/Gallery'
import Error404 from './pages/Error404'

// Components
import Header from './includes/Header'
import Footer from './includes/Footer'

const routes = [
	{ name: "Hem", path: "/Logdo-Herrgard", component: <Home /> },
	{ name: "Historia", path: "/historia", component: <History /> },
	{ name: "Boka", path: "/reserve", component: <Reserve /> },
	{ name: "Galleri", path: "/gallery", component: <Gallery /> },
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
