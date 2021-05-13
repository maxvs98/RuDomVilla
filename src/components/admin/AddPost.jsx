import React, { useState, useMemo, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import './AddCompany.css'

toast.configure()
function AddPost({history, setPropsUpdate, propsUpdate, setAddPostShow}) {
	const [ title, setTitle ] = useState('')
	const [ text, setText ] = useState( '' )
	const [ imageSrc, setImageSrc ] = useState([])
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
		setTitle( '' )
		setText( '' )
		setImageSrc([])
	}

	const previewImage = useMemo(() => {
		return imageSrc > 0 ? imageSrc.forEach(elem => elem.URL.createObjectURL(imageSrc) ): null
	}, [ imageSrc ] )

	const handleSubmit = async evt => {
		evt.preventDefault()

		const postData = new FormData()
		postData.append('title', title)
		postData.append('text', text)
		for(let i=0; i < imageSrc.length; i++){
			postData.append('imageSrc', imageSrc[i])
		}
		const response = await api.post( '/api/post', postData, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
		.catch(function (error) {
				 //Please Authenticate or whatever returned from server
			console.log(error.response.status) // 401
			console.log( error.response.data.error )
			toast.error(error.response.data.error)
			if(error.response.status === 401){
				console.log()
			}
		});
		let post;

		if (response) {
			post = response.data || false;
		}


		try {
			if (post) {
				resetForm()
				toast.success('Статья добавлена')
        setPropsUpdate(propsUpdate ? false : true)
				setAddPostShow(false)
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
								multiple
								onChange={(evt) => setImageSrc(evt.target.files)}
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
				<Col md={ 4 }>
					<div id='previewImage' style={{backgroundImage: `url(${previewImage})`}} className={imageSrc ? 'company__logo' : ''}></div>
				</Col>
			</Row>


		</Container>
	)
}

export default AddPost
