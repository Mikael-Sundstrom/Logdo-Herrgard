import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Ripple from "./_Waves";

import logo from './../assets/images/logo.jpg'


const Header = (props) => {
	const routes = props.routes

	const [slider, setSlider] = useState(false)

	const nav = routes.map((item, key) => <Ripple key={key} color="rgba(0,0,0,.1)" animationDuration={1000} animationEasing="ease-out"><li key={key}><NavLink className={(navData) => (navData.isActive ? "active waves-effect" : 'waves-effect')} to={item.path}>{item.name}</NavLink></li></Ripple>)
	const sidenav = routes.map((item, key) => <li key={key} onClick={() => setSlider(s => !s)}><NavLink className={(navData) => (navData.isActive ? "active waves-effect" : 'waves-effect')} to={item.path}>{item.name}</NavLink></li>)

	return (
		<header>
			<nav>
				<img className='monogram' src={logo} alt="logo" />
				<h1>Lögdö Herrgård</h1>
				<button type="button" className="menu-button" onClick={() => setSlider(s => !s)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24" fill="#aaa"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
				</button>
				<ul className="menu">
					{nav}
				</ul>
			</nav>

			<div className={slider ? "sidenav-overlay" : "sidenav-overlay hide"} onClick={() => setSlider(s => !s)} />
			<ul className="menu sidenav" style={{ transform: slider ? "translateX(0%)" : "", transitionProperty: "transform", transitionDuration: ".25s" }} >
				{sidenav}
			</ul>
		</header>
	);
}

export default Header