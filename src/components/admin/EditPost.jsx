import React, { useState, useMemo, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import './AddCompany.css'
import {
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

toast.configure()
function EditPost({history, post}) {
	const [ modal, setModal ] = useState(false)
	const [ title, setTitle ] = useState(post.title)
	const [ text, setText ] = useState( post.text )
	const [ imageSrc, setImageSrc ] = useState(post.imageSrc)
	/* const [ error, setError] = useState(false)
	const [ errorMessage, setErrorMessage ] = useState( false ) */
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

		if(!isLogin){
			history.push('/')
		}
		if(!isLogin && token){
			localStorage.removeItem('token')
			history.push('/dashboard/login')
		}

	}, [history, isLogin] )

	const resetForm = () => {
		setTitle(post.title)
		setText(post.text)
		setImageSrc(post.imageSrc)
	}

	const toggle = () => {
		resetForm();
		setModal(!modal);
	}
/*
	const previewImage = useMemo(() => {
		return imageSrc ? URL.createObjectURL(imageSrc): null
	}, [ imageSrc ] )*/

	const handleSubmit = async evt => {
		evt.preventDefault()
		toggle()
		const postData = new FormData()
		postData.append('title', title)
		postData.append('text', text)
		postData.append('imageSrc', imageSrc)

		const response = await api.patch( `/api/post/${ post._id }`, postData, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
		.catch(function (error) {
				 //Please Authenticate or whatever returned from server
			console.log(error.response.status) // 401
			console.log( error.response.data.error )
			toast.error(error.response.data.error)
			if(error.response.status === 401){
				console.log()
			}
		});

		if (response) {
			post = response.data || false;
		}


		try {
			if (post) {
				resetForm()
				toast.success('Статья изменена')
			} else {
				const { message } = response.data
				toast.error(message)
					/* setError(true)
					setErrorMessage(message)
					setTimeout(() => {
						setError(false)
						setErrorMessage('')
					}, 2000) */
			}
		} catch (error) {
			/* setError(true)
			setErrorMessage( 'Error server' ) */
			toast.error('Error server')
		}

	}

	return (
		<>
			<div className="company__buttons d-flex justify-content-center align-items-center bg-info brbr" onClick={ () => toggle() }>
				<FontAwesomeIcon className="" icon={ faEdit } />
			</div>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={() => toggle()}>Редактировать статью</ModalHeader>
        <ModalBody>
					<Container>
						<Row>
							<Col md={ 8 } >
								<form onSubmit={handleSubmit}>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="company_name"
											type="text"
											className="form-control"
											placeholder="Заголовок"
											aria-label="company_name"
											aria-describedby="addon-wrapping"
											value={title}
											onChange={evt => setTitle(evt.target.value)}
										/>
									</div>

									<div className="input-group flex-nowrap mb-3">
										<input
											id="company_address"
											type="text"
											className="form-control"
											placeholder="Текст"
											aria-label="company_address"
											aria-describedby="addon-wrapping"
											value={text}
											onChange={evt => setText(evt.target.value)}
										/>
									</div>

									<div className="input-group flex-nowrap mb-3">
										<input
											type="file"
											className="form-control"
											id="customFile"
											onChange={(evt) => setImageSrc(evt.target.files[0])}
										/>
									</div>

									{/* {error ? (
										<div className="alert alert-danger login-msg" role="alert">
											{errorMessage}
										</div>
									) : <Button color="primary" type="submit" className="btn">Сохранить</Button> } */}
									<Button color="primary" type="submit" className="btn">Сохранить</Button>
								</form>
							</Col>
						</Row>
					</Container>
        </ModalBody>
      </Modal>
		</>
	)
}

export default EditPost
