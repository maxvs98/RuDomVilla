import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Admin.css'
import AllCompany from '../../components/admin/AllCompany'
import AllHomes from '../../components/admin/AllHomes'
import AllPosts from './../../components/admin/AllPosts';

import api from '../../services/api'



function Admin({history}) {


	const [ classActive, setClassActive ] = useState( 'adm_static' )
	const [ isLogin, setIsLogin ] = useState(true)


	useEffect(()=>{
		try {
			api.get( '/api/auth/getuser', { headers: { Authorization: localStorage.getItem( 'token' ) } } )
				.then( ( res ) => { setIsLogin( true ) } )
			.catch((err)=>{	setIsLogin( false )	})
		} catch (error) {
			console.log(error)
		}
		const token = localStorage.getItem( 'token' )

		if(!token){
			history.push('/')
		}
		if(!isLogin && token){
			localStorage.removeItem('token')
			history.push('/dashboard/login')
		}

	}, [history, isLogin] )



	const filterHandler = ( query ) =>
	{
		setClassActive(query)

	}


	return (
		<Container>
			<Row>
				<Col md={2}>
					<Card className="mt-2 mb-2 pt-2 pb-2 shadow-2-strong text-center">
						<div className="sidenav" id="sidenav-1" role="navigation">
						<ul className="sidenav-menu">
							<li onClick={() => filterHandler('adm_static')} className={classActive === 'adm_static' ? 'active' : ''}>Статистика</li>
							<li onClick={() => filterHandler('adm_company')} className={classActive === 'adm_company' ? 'active' : ''}>Компании</li>
							<li onClick={() => filterHandler('adm_home')} className={classActive === 'adm_home' ? 'active' : ''}>Дома</li>
							<li onClick={() => filterHandler('adm_post')} className={classActive === 'adm_post' ? 'active' : ''}>Статьи</li>
							<li onClick={() => filterHandler('adm_show')} className={classActive === 'adm_show' ? 'active' : ''}>Выставки</li>
							<li onClick={() => filterHandler('adm_contacts')} className={classActive === 'adm_contacts' ? 'active' : ''}>Контакты</li>
							<li onClick={() => filterHandler('adm_settings')} className={classActive === 'adm_settings' ? 'active' : ''}>Настройки</li>
						</ul>
					</div>
					</Card>
				</Col>
				<Col md={ 10 }>

					{ classActive === 'adm_static' &&
						<div className=" pt-2">
						<h1>Статистика</h1>
						<hr />
						</div>
					}

					{ classActive === 'adm_company' &&
						<div className=" pt-2">
						<h1>Компании</h1>
						<hr />
						<AllCompany/>
						</div>
					}

					{ classActive === 'adm_home' &&
						<div className=" pt-2">
						<h1>Дома</h1>
						<hr />
						<AllHomes/>
						</div>
					}

					{ classActive === 'adm_post' &&
						<div className=" pt-2">
						<h1>Статьи</h1>
						<hr />
						<AllPosts />
						</div>
					}

				</Col>
			</Row>

		</Container>
	)
}

export default Admin
