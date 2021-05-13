import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import server from '../../services/servUrl'
import EditPost from './EditPost'
import AddPost from './AddPost'
import './AddCompany.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

toast.configure()
function AllPosts(props) {

	const [ addPostShow, setAddPostShow ] = useState( false );
	const [ post, setPost ] = useState( [] )

	const [propsUpdate, setPropsUpdate] = useState(false)

	useEffect(() => {
		setPropsUpdate(props)
	}, [ props ] );

	useEffect(() => {
		const handleCompany = async () => {
			const response = await api.get( '/api/post' )
			setPost( response.data )
		}
		handleCompany()
	}, [propsUpdate] );

	const handleSubmit = (query) => {
		setAddPostShow( query )
	}

	const addPostBlock = () => ( <div className="">
		<MDBBtn onClick={ () => handleSubmit( false ) } color="primary" className="btn mb-4">Закрыть</MDBBtn>
		<AddPost handleSubmit setPropsUpdate={setPropsUpdate} propsUpdate={propsUpdate} setAddPostShow={setAddPostShow} />
	</div>	)

	const deletePostHandler = async (postId) => {

		try {
			await api.delete( `/api/post/${ postId }`, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
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
			toast.success( 'Статья успешно удалена!' )
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
			<div className="post__add">
				{addPostShow ? addPostBlock() : <MDBBtn onClick={ () => setAddPostShow( true ) } color="success" className="btn">Добавить статью</MDBBtn> }
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

					{post.map(post => (
						<Card className="shadow-1-strong mb-2" key={ post._id }>
							<Row className="g-0">
								<Col md={2} className="d-flex align-items-center">
									<Card.Img variant="left" src={server.url + post.imageSrc[0]} />
								</Col>


								<Col md={9} className="">
									<div className="card-body pl-3 ms-4">
										<h5 className="card-title">{ post.title }</h5>
										<p className="card-text">{post.text}</p>
									</div>
								</Col>

								<Col md={ 1 } className="d-flex justify-content-end">
									<div className=" flex-column">
										<div className="company__buttons d-flex justify-content-center align-items-center bg-danger text-white brtr" onClick={ () => deletePostHandler( post._id ) }>
											<FontAwesomeIcon className="" icon={ faTrashAlt } />
											{/* <button onClick={ () => deleteCompanyHandler( company._id ) }></button> */}
										</div>
										<div className="company__buttons d-flex justify-content-center align-items-center bg-info brbr">
											<EditPost post={post} setPropsUpdate={setPropsUpdate} propsUpdate={propsUpdate} />
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

export default AllPosts
