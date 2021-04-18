import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn  } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api'

import './Login.css'

function Login({history}) {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ error, setError] = useState(false)
	const [ errorMessage, setErrorMessage ] = useState( false )

	const handleSubmit = async evt => {
		evt.preventDefault()
		const oldToken = localStorage.getItem( 'token' )
		if(oldToken) {
			localStorage.removeItem('token')
		}

		const response = await api.post( '/api/auth/login', { email, password } )
/* 		const user_id = response.data.user_id || false
		const user = response.data.user || false */
		const token = response.data.token || false
		/* const user = response.data.userId || false */
		/* console.log(response.data.token) */
		try {
/* 			if(user && user_id) {
				localStorage.setItem('user', user)
				localStorage.setItem('user_id', user_id)
				history.push('/')
			}else{
				const {message} = response.data
					setError(true)
					setErrorMessage(message)
					setTimeout(() => {
						setError(false)
						setErrorMessage('')
					}, 2000)
			} */
		if(token) {
				localStorage.setItem('token', token)
				/* localStorage.setItem('user', user) */
				history.push('/dashboard')
			}else{
				const {message} = response.data
					setError(true)
					setErrorMessage(message)
					setTimeout(() => {
						setError(false)
						setErrorMessage('')
					}, 2000)
			}
		} catch (error) {
			setError(true)
			setErrorMessage('Error server')
		}
	}

	return (
		<MDBContainer>
			<MDBRow className="d-flex justify-content-center">
				<MDBCol md={4}>
					<MDBCard className="mt-5 mb-5 p-5 shadow-2-strong text-center">

						{error ? (
							<div className="alert alert-danger login-msg" role="alert">
								{errorMessage}
							</div>
						) : <p className="login-box-msg login-msg">Введите данные</p> }

						<form onSubmit={handleSubmit}>
							<div className="input-group flex-nowrap mb-3">
								<span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon className="" icon={ faEnvelope } /></span>
								<input
									id="email"
									type="text"
									className="form-control"
									placeholder="Username"
									aria-label="Username"
									aria-describedby="addon-wrapping"
									onChange={evt => setEmail(evt.target.value)}
								/>
							</div>

							<div className="input-group flex-nowrap mb-3">
								<span className="input-group-text" id="addon-wrapping"><FontAwesomeIcon className="" icon={ faLock } /></span>
								<input
									id="password"
									type="password"
									className="form-control"
									placeholder="Password"
									aria-label="Password"
									aria-describedby="addon-wrapping"
									onChange={evt => setPassword(evt.target.value)}
								/>
							</div>
							<MDBBtn color="primary" type="submit" className="btn-block">Вход</MDBBtn>
						</form>


					</MDBCard>
				</MDBCol>
			</MDBRow>

		</MDBContainer>
	)
}

export default Login
