import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import './AddCompany.css';
import {
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


toast.configure()
function EditCompany({history, company, setPropsUpdate, propsUpdate}) {
	const [ modal, setModal ] = useState(false)
	const [ id, setId ] = useState(company._id)
	const [ name, setName ] = useState(company.name)
	const [ country, setCountry ] = useState( '' )
	const [ countryName, setCountryName ] = useState([])
	const [ city, setCity ] = useState( '' )
	const [ cityName, setCityName ] = useState( [] )
	const [ address, setAddress ] = useState( company.address )
	const [ description, setDescription ] = useState( company.description )
	const [ image, setImage ] = useState(company.image)
	const [ logotype, setLogotype ] = useState(company.logotype)
	const [ link, setLink ] = useState(company.link)
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
		setId(company._id)
		setName(company.name)
		setAddress(company.address)
		setDescription(company.description)
		setImage(company.image)
		setLogotype(company.logotype)
		setLink(company.link)
	}

	const toggle = () => {
		resetForm();
		setModal(!modal);
	}

/*
	const previewImage = useMemo(() => {
		return image ? URL.createObjectURL(image): null
	}, [ image ] )

	const previewLogo = useMemo(() => {
		return logotype ? URL.createObjectURL(logotype): null
	}, [ logotype ] )*/


	const handleCountry = async () => {
		const response = await api.get( '/api/address' )
		setCountryName(response.data)

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
    toggle()
		const companyData = new FormData()
		companyData.append('_id', id)
		companyData.append('name', name)
		companyData.append('country', country)
		companyData.append('city', city)
		companyData.append('address', address)
		companyData.append('description', description)
		companyData.append('image', image)
		companyData.append('logotype', logotype)
		companyData.append('link', link)


		const response = await api.patch( `/api/company/${ company._id }`, companyData, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
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
			company = response.data || false;
		}


		try {
			if (company) {
				resetForm()
				toast.success('Компания изменена')
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
    <>
      <div className="company__buttons d-flex justify-content-center align-items-center bg-info brbr" onClick={ () => toggle() }>
        <FontAwesomeIcon className="" icon={ faEdit } />
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={() => toggle()}>Редактировать компанию</ModalHeader>
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
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </>
	)
}

export default EditCompany
