// Lazy Loader: https://codesandbox.io/s/0xr0rprx10?file=/src/slider.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import './index.scss';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
