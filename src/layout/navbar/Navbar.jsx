import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
import './navbar.css'

function Navbar (){
	const [ classActive, setClassActive ] = useState( 'home' )

	const admin = localStorage.getItem( 'token' )

	const filterHandler = (query) => {
		setClassActive(query)

	}
	return (
		<nav className="navbar navbar-light bg-success ">
			<div className="container">
				<div className="d-flex navbar-collapse justify-content-center">
					<ul className="navbar__menu ">
						<li></li>
						<li className="nav-item"><Link to="/"><MDBBtn onClick={() => filterHandler('home')} className={classActive === 'home' ? 'btn btn-success active' : 'btn btn-success'}>Главная</MDBBtn></Link></li>
						<li className="nav-item"><Link to="/search"><MDBBtn onClick={() => filterHandler('search')} className={classActive === 'search' ? 'btn btn-success active' : 'btn btn-success'}>Поиск</MDBBtn></Link></li>
						<li className="nav-item"><Link to="/company"><MDBBtn onClick={() => filterHandler('company')} className={classActive === 'company' ? 'btn btn-success active' : 'btn btn-success'}>Компании</MDBBtn></Link></li>
						<li className="nav-item"><Link to="/articles"><MDBBtn onClick={() => filterHandler('article')} className={classActive === 'article' ? 'btn btn-success active' : 'btn btn-success'}>Статьи</MDBBtn></Link></li>
						<li className="nav-item"><Link to="/"><MDBBtn onClick={() => filterHandler('show')} className={classActive === 'show' ? 'btn btn-success active' : 'btn btn-success'}>Выставки</MDBBtn></Link></li>
						<li className="nav-item"><Link to="/"><MDBBtn onClick={() => filterHandler('about')} className={classActive === 'about' ? 'btn btn-success active' : 'btn btn-success'}>Обратная связь</MDBBtn></Link></li>
						{admin ? <li className="nav-item"><Link to="/dashboard"><MDBBtn onClick={() => filterHandler('admin')} className={classActive === 'admin' ? 'active' : ''}>Админ</MDBBtn></Link></li> : '' }
					</ul>
				</div>
			</div>
		</nav>
	)
}


export default Navbar
