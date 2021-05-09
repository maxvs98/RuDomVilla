import React, { useState, useMemo, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import './AddCompany.css'

toast.configure()
function AddCompany({history, setPropsUpdate, propsUpdate}) {
	const [ name, setName ] = useState('')
	const [ country, setCountry ] = useState( '' )
	const [ countryName, setCountryName ] = useState([])
	const [ city, setCity ] = useState( '' )
	const [ cityName, setCityName ] = useState( [] )
	const [ address, setAddress ] = useState( '' )
	const [ description, setDescription ] = useState( '' )
	const [ image, setImage ] = useState(null)
	const [ logotype, setLogotype ] = useState(null)
	const [ link, setLink ] = useState('')
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


	const previewImage = useMemo(() => {
		return image ? URL.createObjectURL(image): null
	}, [ image ] )

	const previewLogo = useMemo(() => {
		return logotype ? URL.createObjectURL(logotype): null
	}, [ logotype ] )


	const handleCountry = async () => {
		const response = await api.get( '/api/address' )
		setCountryName(response.data)

	}

	const resetForm = () => {
		setName( '' )
		setAddress( '' )
		setDescription( '' )
		setImage(null)
		setLogotype( null )
		setLink('')
	}


	useEffect(() => {
		const handleCity = async () => {
			const response = await api.get( `/api/address/${ country }` )
			setCityName(response.data)
		}
		handleCity()
	}, [country] );

	useEffect(() => {
		handleCountry()
	}, []);

	const handleSubmit = async evt => {
		evt.preventDefault()

		const companyData = new FormData()
		companyData.append('name', name)
		companyData.append('country', country)
		companyData.append('city', city)
		companyData.append('address', address)
		companyData.append('description', description)
		companyData.append('image', image)
		companyData.append('logotype', logotype)
		companyData.append('link', link)


		const response = await api.post( '/api/company', companyData, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
		.catch(function (error) {
				 //Please Authenticate or whatever returned from server
			console.log(error.response.status) // 401
			console.log( error.response.data.error )
			toast.error(error.response.data.error)
			if(error.response.status === 401){
				console.log()
			}
		});
		let company;

		if (response) {
			company = response.data || false;
		}


		try {
			if (company) {
				resetForm()
				toast.success('Компания добавлена')
        setPropsUpdate(propsUpdate ? false : true)
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
								placeholder="Название"
								aria-label="company_name"
								aria-describedby="addon-wrapping"
								value={name}
								onChange={evt => setName(evt.target.value)}
							/>
						</div>

						<div className="input-group  mb-3">

							<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCountry( evt.target.value ) }>
								<option defaultValue>Выберите страну</option>
								{countryName.map(country => (
									<option value={ country._id } key={country._id} >{country.country}</option>
							))}
							</select>
						</div>

						<div className="input-group  mb-3">

							<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCity( evt.target.value ) }>
								<option defaultValue>Выберите город</option>
								{cityName.map(city => (
									<option value={ city._id } key={city._id} >{city.city}</option>
							))}
							</select>
						</div>

						<div className="input-group flex-nowrap mb-3">
							<input
								id="company_address"
								type="text"
								className="form-control"
								placeholder="Адрес"
								aria-label="company_address"
								aria-describedby="addon-wrapping"
								value={address}
								onChange={evt => setAddress(evt.target.value)}
							/>
						</div>

						<div className="input-group flex-nowrap mb-3">
							<input
								type="file"
								className="form-control"
								id="customFileLogo"
								onChange={(evt) => setLogotype(evt.target.files[0])}

							/>
						</div>

						<div className="input-group flex-nowrap mb-3">
							<input
								type="file"
								className="form-control"
								id="customFile"
								onChange={(evt) => setImage(evt.target.files[0])}

							/>
						</div>

						<div className="input-group flex-nowrap mb-3">
							<input
								id="company_link"
								type="text"
								className="form-control"
								placeholder="Ссылка на компанию"
								aria-label="company_link"
								aria-describedby="addon-wrapping"
								value={link}
								onChange={evt => setLink(evt.target.value)}
							/>
						</div>


						<div className="input-group flex-nowrap mb-3">
							<textarea
								id="company_description"
								type="text-area"
								rows="5"
								className="form-control"
								placeholder="Описание"
								aria-label="company_description"
								aria-describedby="addon-wrapping"
								value={description}
								onChange={evt => setDescription(evt.target.value)}
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
					<div className="">
						Первое поле: логотип
					</div>
					<div className="">
						Второе поле: изображение
					</div>
					<div id='previewLogo' style={{backgroundImage: `url(${previewLogo})`}} className={logotype ? 'company__logo' : ''}></div>
					<div id='previewImage' style={{backgroundImage: `url(${previewImage})`}} className={image ? 'company__logo' : ''}></div>

				</Col>
			</Row>


		</Container>
	)
}

export default AddCompany
