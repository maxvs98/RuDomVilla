import React, { useState, useEffect } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Admin.css'
import AddCompany from '../../components/admin/AddCompany'
import AllCompany from '../../components/admin/AllCompany'
import AddHome from '../../components/admin/AddHome'
import AllHomes from '../../components/admin/AllHomes'
import AddPost from '../../components/admin/AddPost'
import AllPosts from './../../components/admin/AllPosts';

import api from '../../services/api'



function Admin({history}) {


	const [ classActive, setClassActive ] = useState( 'adm_static' )
	const [ addCompanyShow, setAddCompanyShow ] = useState( false );
	const [ addHomeShow, setAddHomeShow ] = useState( false );
	const [ addPostShow, setAddPostShow ] = useState( false );
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

	const handleSubmit = (query) => {
		setAddCompanyShow( query )
		setAddHomeShow( query )
		setAddPostShow( query )

	}

	const addCompanyBlock = () => ( <div className="">
		<MDBBtn onClick={ () => handleSubmit( false ) } color="primary" className="btn mb-4">Закрыть</MDBBtn>
		<AddCompany handleSubmit />
	</div> )

	const addHomeBlock = () => ( <div className="">
		<MDBBtn onClick={ () => handleSubmit( false ) } color="primary" className="btn mb-4">Закрыть</MDBBtn>
		<AddHome handleSubmit />
	</div>	)

	const addPostBlock = () => ( <div className="">
		<MDBBtn onClick={ () => handleSubmit( false ) } color="primary" className="btn mb-4">Закрыть</MDBBtn>
		<AddPost handleSubmit />
	</div>	)

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
						<div className="company__add">
							{addCompanyShow ? addCompanyBlock() : <MDBBtn onClick={ () => setAddCompanyShow( true ) } color="success" className="btn">Добавить компанию</MDBBtn> }
						</div>
						<AllCompany addCompanyShow />
						</div>
					}

					{ classActive === 'adm_home' &&
						<div className=" pt-2">
						<h1>Дома</h1>
						<hr />
						<div className="home__add">
							{addHomeShow ? addHomeBlock() : <MDBBtn onClick={ () => setAddHomeShow( true ) } color="success" className="btn">Добавить дом</MDBBtn> }
						</div>
						<AllHomes setAddHomeShow />
						</div>
					}

					{ classActive === 'adm_post' &&
						<div className=" pt-2">
						<h1>Статьи</h1>
						<div className="post__add">
							{addPostShow ? addPostBlock() : <MDBBtn onClick={ () => setAddPostShow( true ) } color="success" className="btn">Добавить статью</MDBBtn> }
						</div>
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
