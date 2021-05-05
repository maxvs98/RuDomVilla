import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import server from '../../services/servUrl'
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

toast.configure()
function AllHomes(props) {
	const [ house, setHouse ] = useState( [] )
	const [ company, setCompany ] = useState( [] )
	/* const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)
	const [messageHandler, setMessageHandler] = useState('') */
	const [ propsUpdate, setPropsUpdate ] = useState( false )

	useEffect(() => {
		setPropsUpdate(props)
	}, [ props ] );

	const handleCompany = async () => {
		const response = await api.get( '/api/company' )
		setCompany( response.data )

	}

	const handleHouse = async () => {
		const response = await api.get( '/api/house' )
		setHouse( response.data )

	}
	useEffect(() => {
		handleHouse()
		handleCompany()
	}, [ propsUpdate ] );

	const deleteHouseHandler = async (houseId) => {

		try {
			await api.delete( `/api/house/${ houseId }`, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
			.catch(function (error) {
				console.log(error.response.status) // 401
				console.log( error.response.data.error )
				toast.error(error.response.data.error) //Please Authenticate or whatever returned from server
			if(error.response.status === 401){
				return <Redirect to="/dashboard/login" />
			}
			})
			/* setSuccess(true)
			setMessageHandler( 'Дом успешно удален!' ) */
			toast.success( 'Дом успешно удален!' )
			setPropsUpdate(propsUpdate ? false : true)
				/* setTimeout(() => {
					setSuccess( false )
					setPropsUpdate(propsUpdate ? false : true)
					setMessageHandler('')
				}, 1000) */
		} catch ( error ){
			toast.error(  'Ошибка удаления' )
			/* setError(true)
			setMessageHandler( 'Ошибка удаления' )
				setTimeout(() => {
					setError(false)
					setMessageHandler('')
				}, 1000) */
		}
	}


	return (
		<div className="">
			{/* {error ? (
					<div className="alert alert-danger login-msg" role="alert">
						{messageHandler}
					</div>
				) : ''}
				{success ? (
					<div className="alert alert-danger login-msg" role="alert">
						{messageHandler}
					</div>
				) : '' } */}
			{house.map(house => (
				<Row key={ house._id }>
					<Col md={ 4 }>
						<div className="search__content-block">
								<div className="search__content-block-img text-center">
									<img
										className="img-fluid"
										src={server.url + house.imageSrc[0]}
										alt=""
									/>
								</div>
							</div>
							<div className="mt-4 search__block-seller  d-flex align-items-center justify-content-center">
								<img
									className="img-fluid seller__logo shadow-1-strong"
									src={company.filter(company => company._id === house.company).map(logo => (server.url + logo.logoSrc))}
									alt={company.filter(company => company._id === house.company).map(company => (company.name))}
								/>
							</div>
					</Col>

					<Col md={ 4 }>
						<div className="search__content-block">
								<div className="search__content-block-img text-center">
									<img
										className="img-fluid"
										src={server.url + house.schemeImageSrc[0]}
										alt=""
									/>
								</div>
							</div>
							<div className="text-center mt-4 mb-2">
								<Link to={`/housecard/${house._id}`}>
									<MDBBtn size="" tag="a" color="primary" type="submit">Подробнее</MDBBtn>
								</Link>
							</div>
					</Col>

					<Col md={ 3 }>
						<div className="search__content-block">
								<div className="home__info-title">
								<h5>{ house.name }</h5>
								</div>
								<div className="home__info-region d-flex justify-content-between">
									<span>Регион</span>
									<span className="bold">Москва</span>
								</div>
								<hr className="my-0"/>
								<div className="home__info-size d-flex justify-content-between">
									<span>Площадь дома</span>
									<span>{house.area} м2</span>
								</div>
								<div className="home__info-rooms d-flex justify-content-between">
									<span>Количество комнат</span>
								<span>{house.rooms}</span>
								</div>
								<div className="home__info-bathroom d-flex justify-content-between">
									<span>Количество санузлов</span>
									<span> {house.bathRooms} </span>
								</div>
								<div className="home__info-floor d-flex justify-content-between">
									<span>Этажей</span>
									<span>{house.level}</span>
								</div>
								<div className="home__info-price d-flex justify-content-between">
									<span>Цена</span>
									<span className="bold">{ house.price }<span> &#x20bd;</span></span>
								</div>
								<div className="home__info-status d-flex justify-content-center">
									<span>{house.status}</span>
								</div>
							</div>
							<div className="text-center mt-4 mb-2">
									<MDBBtn size="" tag="a" color="success" type="submit">В сравнение</MDBBtn>
								</div>
					</Col>
					<Col md={ 1 } className="d-flex justify-content-end">
						<div className=" flex-column">
							<div className="company__buttons d-flex justify-content-center align-items-center bg-danger text-white brtr" onClick={ () => deleteHouseHandler( house._id ) }>
								<FontAwesomeIcon className="" icon={ faTrashAlt } />

							</div>
							<div className="company__buttons d-flex justify-content-center align-items-center bg-info brbr">
								<FontAwesomeIcon className="" icon={ faEdit } />
							</div>
						</div>
					</Col>
					<hr className="mt-2 mb-4" />
				</Row>
			))}
		</div>
	)
}

export default AllHomes
