import React from 'react'
import './header.css'

import Navbar from './../navbar/Navbar';
import logo from '../../logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-2">
						<div className="header__logo">
							<img src={logo} alt=""/>
						</div>
					</div>
					<div className="col-8 d-flex justify-content-center">
						<h1 className="header__title">
							<div className="title_left">
								<span className="title__black">КАТАЛОГ</span> <span className="title__orange">ПРАВИЛЬНЫХ</span> <br />
							</div>
							<div className="title_right">
								<span className="title__green">ЗАГОРОДНЫХ</span> <span className="title__black">ДОМОВ</span>
							</div>
						</h1>
					</div>
					<div className="col-2 ">
						<div className="header__social d-flex justify-content-end">
							<FontAwesomeIcon className="header__social-icon" icon={ faVk } />
							<FontAwesomeIcon className="header__social-icon" icon={ faFacebookSquare } />
							<FontAwesomeIcon className="header__social-icon" icon={ faInstagram } />
						</div>
						<div className="header__location d-flex justify-content-end align-items-end">
							<span className="header__location-city">Москва и МО</span>
							<span className="header__location-img">
								<FontAwesomeIcon className="header__location-icon" icon={ faMapMarkerAlt } />
							</span>
						</div>
					</div>
				</div>
			</div>

			<Navbar />
		</header>
	)
}

export default Header
