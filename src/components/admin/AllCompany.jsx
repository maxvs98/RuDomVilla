import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import server from '../../services/servUrl'
import './AddCompany.css'
import EditCompany from './EditCompany'
import AddCompany from './AddCompany'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

toast.configure()
function AllCompany(props) {
	const [ company, setCompany ] = useState( [] )
	/* const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)
	const [messageHandler, setMessageHandler] = useState('') */
	const [propsUpdate, setPropsUpdate] = useState(false)

	const [ addCompanyShow, setAddCompanyShow ] = useState( false );

	useEffect(() => {
		setPropsUpdate(props)
	}, [ props ] );

	useEffect(() => {
		const handleCompany = async () => {
			const response = await api.get( '/api/company' )
			setCompany( response.data )

		}
		handleCompany()
	}, [propsUpdate] );

	const handleSubmit = (query) => {
		setAddCompanyShow( query )
	}

	const addCompanyBlock = () => ( <div className="">
		<MDBBtn onClick={ () => handleSubmit( false ) } color="primary" className="btn mb-4">Закрыть</MDBBtn>
		<AddCompany handleSubmit setPropsUpdate={setPropsUpdate} propsUpdate={propsUpdate} setAddCompanyShow={setAddCompanyShow} />
	</div> )

	const deleteCompanyHandler = async (companyId) => {

		try {
			await api.delete( `/api/company/${ companyId }`, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
			.catch(function (error) {
				console.log(error.response.status) // 401
				console.log( error.response.data.error )
				toast.error(error.response.data.error) //Please Authenticate or whatever returned from server
			if(error.response.status === 401){
				/* eslit-disable */
				return <Redirect to="/dashboard/login" />
				/* eslint-enable */
			}
			})
			/* setSuccess(true)
			setMessageHandler( 'Компания успешно удалена!' ) */
			toast.success( 'Компания успешно удалена!' )
			setPropsUpdate(propsUpdate ? false : true)
				/* setTimeout(() => {
					setSuccess( false )
					setPropsUpdate(propsUpdate ? false : true)
					setMessageHandler('')
				}, 1000) */
		} catch ( error ){
			toast.error(  'Ошибка удаления' )
			/* setError(true)
			setMessageHandler('Ошибка удаления')
				setTimeout(() => {
					setError(false)
					setMessageHandler('')
				}, 1000) */
		}
	}

	return (
		<>
			<div className="company__add">
				{addCompanyShow ? addCompanyBlock() : <MDBBtn onClick={ () => setAddCompanyShow( true ) } color="success" className="btn">Добавить компанию</MDBBtn> }
			</div>
			<Row className="mt-3">
				<Col>
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

					{company.map(company => (
						<Card className="shadow-1-strong mb-2" key={ company._id }>
							<Row className="g-0">
								<Col md={2} className="d-flex align-items-center">
									<Card.Img variant="left" src={server.url + company.logoSrc} />
								</Col>


								<Col md={9} className="">
									<div className="card-body pl-3 ms-4">
										<h5 className="card-title">{ company.name }</h5>
										<p className="card-text">{company.description}</p>
										<p className="card-text"><small className="text-muted">{company.address}</small></p>
									</div>
								</Col>

								<Col md={ 1 } className="d-flex justify-content-end">
									<div className=" flex-column">
										<div className="company__buttons d-flex justify-content-center align-items-center bg-danger text-white brtr" onClick={ () => deleteCompanyHandler( company._id ) }>
											<FontAwesomeIcon className="" icon={ faTrashAlt } />
											{/* <button onClick={ () => deleteCompanyHandler( company._id ) }></button> */}
										</div>
										<div className="company__buttons d-flex justify-content-center align-items-center bg-info brbr">
											<EditCompany company={company} setPropsUpdate={setPropsUpdate} propsUpdate={propsUpdate} />
										</div>
									</div>
								</Col>

							</Row>


						</Card>
					))}
				</Col>
			</Row>
		</>
	)
}

export default AllCompany
