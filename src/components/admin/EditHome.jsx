import React, { useState, useMemo, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'
import {
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

toast.configure()
function EditHome({history, house, setPropsUpdate, propsUpdate}) {
	const [ modal, setModal ] = useState(false)
	const [ isLogin, setIsLogin ] = useState( true )
	const [ name, setName ] = useState(house.name)
	const [ countryId, setCountryId ] = useState( house.country )
	const [ countryName, setCountryName ] = useState( [] )
	const [ companyId, setCompanyId ] = useState(house.company)
	const [ companyName, setCompanyName ] = useState( [] )
	const [ cityId, setCityId ] = useState( house.city )
	const [ cityName, setCityName ] = useState( [] )
	const [ address, setAddress ] = useState( house.address )
	const [ description, setDescription ] = useState( house.description )
	const [ price, setPrice ] = useState( house.price )
	const [ image, setImage ] = useState([])
	const [ schemeImageSrc, setSchemeImageSrc ] = useState( house.schemeImageSrc )
	const [ area, setArea ] = useState( house.area )
	const [ livingArea, setLivingArea ] = useState( house.livingArea )
	const [ kitchen, setKitchen ] = useState( house.kitchen )
	const [ livingRoom, setLivingRoom ] = useState( house.livingRoom )
	const [ sizes, setSizes ] = useState( house.sizes )
	const [ level, setLevel ] = useState( house.level )
	const [ rooms, setRooms ] = useState( house.rooms )
	const [ bathRooms, setBathRooms ] = useState( house.bathRooms )
	const [ boilerRoom, setBoilerRoom ] = useState( house.boilerRoom )
	const [ constructionTechnology, setConstructionTechnology ] = useState( house.constructionTechnology )
	const [ equipment, setEquipment ] = useState( house.equipment )
	const [ preliminaries, setPreliminaries ] = useState( house.preliminaries )
	const [ foundation, setFoundation ] = useState( house.foundation )
	const [ walls, setWalls ] = useState( house.walls )
	const [ roof, setRoof ] = useState( house.roof )
	const [ antiseptization, setAntiseptization ] = useState( house.antiseptization )
	const [ interiorDecoration, setInteriorDecoration ] = useState( house.interiorDecoration )
	const [ exteriorFacadeFinishing, setExteriorFacadeFinishing ] = useState( house.exteriorFacadeFinishing )
	const [ shapeRoof, setShapeRoof ] = useState( house.shapeRoof )
	const [ houseTop, setHouseTop ] = useState( house.houseTop )
	const [ roofInsulation, setRoofInsulation ] = useState( house.roofInsulation )
	const [ drainageSystem, setDrainageSystem ] = useState( house.drainageSystem )
	const [ communications, setCommunications ] = useState( house.communications )
	const [ electricalWiring, setElectricalWiring ] = useState( house.electricalWiring )
	const [ waterSupply, setWaterSupply ] = useState( house.waterSupply )
	const [ canalization, setCanalization ] = useState( house.canalization )
	const [ heating, setHeating ] = useState( house.heating )
	const [ ventilation, setVentilation ] = useState( house.ventilation )
	const [ designChange, setDesignChange ] = useState( house.designChange )
	const [ options, setOptions ] = useState( house.options )
	const [ present, setPresent ] = useState( house.present )
	const [ additionally, setAdditionally ] = useState( house.additionally )
	const [ warranty, setWarranty ] = useState( house.warranty )
	const [ link, setLink ] = useState( house.link )
	const [ status, setStatus ] = useState( house.status )
	/* const [ error, setError] = useState(false)
	const [ errorMessage, setErrorMessage ] = useState( false ) */



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


/* 	const previewImage = useMemo(() => {
		return image ? URL.createObjectURL(image): null
	}, [ image ] )

	const previewSchemeImage = useMemo(() => {
		return schemeImageSrc ? URL.createObjectURL(schemeImageSrc): null
	}, [ schemeImageSrc ] ) */


	const previewImage = useMemo(() => {
		return image > 0 ? image.forEach(elem => elem.URL.createObjectURL(image) ): null
	}, [ image ] )

	const previewSchemeImage = useMemo(() => {
		return schemeImageSrc > 0 ? schemeImageSrc.forEach(elem => elem.URL.createObjectURL(schemeImageSrc) ): null
	}, [ schemeImageSrc ] )


	const resetForm = () => {
		setName( house.name )
		setAddress( house.address )
		setDescription( house.description )
		setImage( [] )
		setSchemeImageSrc( house.schemeImageSrc )
		setArea( house.area )
		setLivingArea( house.livingArea )
		setKitchen( house.kitchen )
		setLivingRoom( house.livingRoom )
		setSizes( house.sizes )
		setLevel( house.level )
		setRooms( house.rooms )
		setBathRooms( house.bathRooms )
		setBoilerRoom( house.boilerRoom )
		setConstructionTechnology( house.constructionTechnology )
		setEquipment( house.equipment )
		setPreliminaries( house.preliminaries )
		setFoundation( house.foundation )
		setWalls( house.walls )
		setRoof( house.roof )
		setAntiseptization( house.antiseptization )
		setInteriorDecoration( house.interiorDecoration )
		setExteriorFacadeFinishing( house.exteriorFacadeFinishing )
		setShapeRoof( house.shapeRoof )
		setHouseTop( house.houseTop )
		setRoofInsulation( house.roofInsulation )
		setDrainageSystem( house.drainageSystem )
		setCommunications( house.communications )
		setElectricalWiring( house.electricalWiring )
		setWaterSupply( house.waterSupply )
		setCanalization( house.canalization )
		setHeating( house.heating )
		setVentilation( house.ventilation )
		setDesignChange( house.designChange )
		setOptions( house.options )
		setPresent( house.present )
		setAdditionally( house.additionally )
		setWarranty( house.warranty )
		setLink( house.link )
		setStatus( house.status )
	}

	const toggle = () => {
		resetForm();
		setModal(!modal);
	}

	const handleCompany = async () => {
		const response = await api.get( '/api/company' )
		setCompanyName(response.data)

	}

	const handleCountry = async () => {
		const response = await api.get( '/api/address' )
		setCountryName(response.data)

	}

	const handleCity = async (countryId) => {
		const response = await api.get( `/api/address/${ countryId }` )
		setCityName(response.data)
	}

	useEffect(() => {
		handleCity(countryId)
	}, [countryId] );

	useEffect(() => {
		handleCountry()
		handleCompany()
	}, []);

	const handleSubmit = async evt => {
		evt.preventDefault()

		toggle()
		const houseData = new FormData()

		//houseData.append('_id', id)
		houseData.append('name', name)
		houseData.append('company', companyId)
		houseData.append('country', countryId)
		houseData.append('city', cityId)
		houseData.append('address', address)
		houseData.append('description', description)
		/* houseData.append( 'image', image ) */
		for(let i=0; i < image.length; i++){
			houseData.append('image', image[i])
		}
		for(let i=0; i < schemeImageSrc.length; i++){
			houseData.append('schemeImageSrc', schemeImageSrc[i])
		}
		houseData.append( 'price', price )
		houseData.append( 'area', area )
		houseData.append( 'livingArea', livingArea )
		houseData.append( 'kitchen', kitchen )
		houseData.append( 'livingRoom', livingRoom )
		houseData.append( 'sizes', sizes )
		houseData.append( 'level', level )
		houseData.append( 'rooms', rooms )
		houseData.append( 'bathRooms', bathRooms )
		houseData.append( 'boilerRoom', boilerRoom )
		houseData.append( 'constructionTechnology', constructionTechnology )
		houseData.append( 'equipment', equipment )
		houseData.append( 'preliminaries', preliminaries )
		houseData.append( 'foundation', foundation )
		houseData.append( 'walls', walls )
		houseData.append( 'roof', roof )
		houseData.append( 'antiseptization', antiseptization )
		houseData.append( 'interiorDecoration', interiorDecoration )
		houseData.append( 'exteriorFacadeFinishing', exteriorFacadeFinishing )
		houseData.append( 'shapeRoof', shapeRoof )
		houseData.append( 'houseTop', houseTop )
		houseData.append( 'roofInsulation', roofInsulation )
		houseData.append( 'drainageSystem', drainageSystem )
		houseData.append( 'communications', communications )
		houseData.append( 'electricalWiring', electricalWiring )
		houseData.append( 'waterSupply', waterSupply )
		houseData.append( 'canalization', canalization )
		houseData.append( 'heating', heating )
		houseData.append( 'ventilation', ventilation )
		houseData.append( 'designChange', designChange )
		houseData.append( 'options', options )
		houseData.append( 'present', present )
		houseData.append( 'additionally', additionally )
		houseData.append( 'warranty', warranty )
		houseData.append( 'link', link )
		houseData.append( 'status', status )


		const response = await api.patch( `/api/house/${ house._id }`, houseData, { headers: { Authorization: localStorage.getItem( 'token' ) } } )
			.catch(function (error) {
				 //Please Authenticate or whatever returned from server
			/* console.log(error.response.status) */ // 401
			console.log( error.response.data.error )
			toast.error(error.response.data.error)
			/* if(error.response.status === 401){
				console.log()

			} */
			})


		try {
			if (house) {
				resetForm()
				toast.success('Успешно изменён')
  			setPropsUpdate(propsUpdate ? false : true)
			} else {
				const {message} = response.data
					/* setError(true)
					setErrorMessage( message ) */
					toast.error(message)
					/* setTimeout(() => {
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
        <ModalHeader toggle={() => toggle()}>Редактировать дом</ModalHeader>
        <ModalBody>
					<Container>
						<Row>
							<Col md={ 8 } >
								<form onSubmit={handleSubmit}>
                  <div class="key-filed mb-2">Название</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_name"
											type="text"
											className="form-control"
											placeholder="Название"
											aria-label="house_name"
											aria-describedby="addon-wrapping"
											value={name}
											onChange={evt => setName(evt.target.value)}
										/>
									</div>

                  <div class="key-filed mb-2">Выберите компанию</div>
									<div className="input-group  mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCompanyId( evt.target.value ) }>
											<option defaultValue>Выберите компанию</option>
											{companyName.map(company => {
                        if (companyId === company._id) return <option value={ company._id } key={company._id} selected>{company.name}</option>
												return <option value={ company._id } key={company._id}>{company.name}</option>
										})}
										</select>
									</div>

                  <div class="key-filed mb-2">Выберите страну</div>
									<div className="input-group  mb-3">

										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCountryId( evt.target.value ) }>
											<option defaultValue>Выберите страну</option>
                      {countryName.map(country => {
                        if (countryId === country._id) return <option value={ country._id } key={country._id} selected>{country.country}</option>
												return <option value={ country._id } key={country._id}>{country.country}</option>
										})}
										</select>
									</div>

                  <div class="key-filed mb-2">Выберите город</div>
									<div className="input-group  mb-3">

										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCityId( evt.target.value ) }>
											<option defaultValue>Выберите город</option>
                      {cityName.map(city => {
                        if (cityId === city._id) return <option value={ city._id } key={city._id} selected>{city.city}</option>
												return <option value={ city._id } key={city._id}>{city.city}</option>
										})}
										</select>
									</div>

                  <div class="key-filed mb-2">Адрес</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_address"
											type="text"
											className="form-control"
											placeholder="Адрес"
											aria-label="house_address"
											aria-describedby="addon-wrapping"
											value={address}
											onChange={evt => setAddress(evt.target.value)}
										/>
									</div>

                  <div class="key-filed mb-2">Изображения</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											type="file"
											className="form-control"
											id="customFile"
											multiple
											onChange={(evt) => setImage(evt.target.files)}

										/>
									</div>

                  <div class="key-filed mb-2">Схемы</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											type="file"
											className="form-control"
											id="customFileScheme"
											multiple
											onChange={(evt) => setSchemeImageSrc(evt.target.files)}

										/>
									</div>

                  <div class="key-filed mb-2">Площадь</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_area"
											type="number"
											className="form-control"
											placeholder="Площадь"
											aria-label="house_area"
											aria-describedby="addon-wrapping"
											value={area}
											onChange={ evt => setArea( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Жилая площадь</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_livingArea"
											type="number"
											className="form-control"
											placeholder="Жилая площадь"
											aria-label="house_livingArea"
											aria-describedby="addon-wrapping"
											value={livingArea}
											onChange={ evt => setLivingArea( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Кухня</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_kitchen"
											type="number"
											className="form-control"
											placeholder="Кухня"
											aria-label="house_kitchen"
											aria-describedby="addon-wrapping"
											value={kitchen}
											onChange={ evt => setKitchen( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Гостиная</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_livingRoom"
											type="number"
											className="form-control"
											placeholder="Гостиная"
											aria-label="house_livingRoom"
											aria-describedby="addon-wrapping"
											value={livingRoom}
											onChange={ evt => setLivingRoom( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Размеры</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_sizes"
											type="text"
											className="form-control"
											placeholder="Размеры"
											aria-label="house_sizes"
											aria-describedby="addon-wrapping"
											value={sizes}
											onChange={ evt => setSizes( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Количество этажей</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_level"
											type="number"
											className="form-control"
											placeholder="Количество этажей"
											aria-label="house_level"
											aria-describedby="addon-wrapping"
											value={level}
											onChange={ evt => setLevel( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Количество комнат</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_rooms"
											type="number"
											className="form-control"
											placeholder="Количество комнат"
											aria-label="house_rooms"
											aria-describedby="addon-wrapping"
											value={rooms}
											onChange={ evt => setRooms( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Количество санузлов</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_bathRooms"
											type="number"
											className="form-control"
											placeholder="Количество санузлов"
											aria-label="house_bathRooms"
											aria-describedby="addon-wrapping"
											value={bathRooms}
											onChange={ evt => setBathRooms( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Котельная</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setBoilerRoom( evt.target.value ) }>
											<option defaultValue>Котельная</option>
                      {boilerRoom === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Технология строительства</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_constructionTechnology"
											type="text"
											className="form-control"
											placeholder="Технология строительства"
											aria-label="house_constructionTechnology"
											aria-describedby="addon-wrapping"
											value={constructionTechnology}
											onChange={ evt => setConstructionTechnology( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Комплектация</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_equipment"
											type="text"
											className="form-control"
											placeholder="Комплектация"
											aria-label="house_equipment"
											aria-describedby="addon-wrapping"
											value={equipment}
											onChange={ evt => setEquipment( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Подготовительные работы</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_preliminaries"
											type="text"
											className="form-control"
											placeholder="Подготовительные работы"
											aria-label="house_preliminaries"
											aria-describedby="addon-wrapping"
											value={preliminaries}
											onChange={ evt => setPreliminaries( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Фундамент</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_foundation"
											type="text"
											className="form-control"
											placeholder="Фундамент"
											aria-label="house_foundation"
											aria-describedby="addon-wrapping"
											value={foundation}
											onChange={ evt => setFoundation( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Стены</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_walls"
											type="text"
											className="form-control"
											placeholder="Стены"
											aria-label="house_walls"
											aria-describedby="addon-wrapping"
											value={walls}
											onChange={ evt => setWalls( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Кровля</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_roof"
											type="text"
											className="form-control"
											placeholder="Кровля"
											aria-label="house_roof"
											aria-describedby="addon-wrapping"
											value={roof}
											onChange={ evt => setRoof( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Антисептирование</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setAntiseptization( evt.target.value ) }>
											<option defaultValue>Антисептирование</option>
                      {antiseptization === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Внутренняя отделка</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_interiorDecoration"
											type="text"
											className="form-control"
											placeholder="Внутренняя отделка"
											aria-label="house_interiorDecoration"
											aria-describedby="addon-wrapping"
											value={interiorDecoration}
											onChange={ evt => setInteriorDecoration( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Наружняя отделка фасада</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_exteriorFacadeFinishing"
											type="text"
											className="form-control"
											placeholder="Наружняя отделка фасада"
											aria-label="house_exteriorFacadeFinishing"
											aria-describedby="addon-wrapping"
											value={exteriorFacadeFinishing}
											onChange={ evt => setExteriorFacadeFinishing( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Форма крыши</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_shapeRoof"
											type="text"
											className="form-control"
											placeholder="Форма крыши"
											aria-label="house_shapeRoof"
											aria-describedby="addon-wrapping"
											value={shapeRoof}
											onChange={ evt => setShapeRoof( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Кровля</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_houseTop"
											type="text"
											className="form-control"
											placeholder="Кровля"
											aria-label="house_houseTop"
											aria-describedby="addon-wrapping"
											value={houseTop}
											onChange={ evt => setHouseTop( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Утепление крыши</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setRoofInsulation( evt.target.value ) }>
											<option defaultValue>Утепление крыши</option>
                      {roofInsulation === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Водосточная система</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setDrainageSystem( evt.target.value ) }>
											<option defaultValue>Водосточная система</option>
                      {drainageSystem === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Инженерные коммуникации</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCommunications( evt.target.value ) }>
											<option defaultValue>Инженерные коммуникации</option>
                      {communications === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Электропроводка</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setElectricalWiring( evt.target.value ) }>
											<option defaultValue>Электропроводка</option>
                      {electricalWiring === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Водоснабжение</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setWaterSupply( evt.target.value ) }>
											<option defaultValue>Водоснабжение</option>
                      {waterSupply === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Канализация</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setCanalization( evt.target.value ) }>
											<option defaultValue>Канализация</option>
                      {canalization === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Отопление</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setHeating( evt.target.value ) }>
											<option defaultValue>Отопление</option>
                      {heating === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Вентиляция</div>
									<div className="input-group flex-nowrap mb-3">
										<select className="form-select flex-nowrap" aria-label="Default select example" onChange={ evt => setVentilation( evt.target.value ) }>
											<option defaultValue>Вентиляция</option>
                      {ventilation === true ?
                      <>
											<option value={true} key='boilerRoomTrue' selected>Есть</option>
                      <option value={false} key='boilerRoomFalse'>Нет</option>
                      </>
											:
                      <>
											<option value={true} key='boilerRoomTrue'>Есть</option>
                      <option value={false} key='boilerRoomFalse' selected>Нет</option>
                      </>
                      }
										</select>
									</div>

                  <div class="key-filed mb-2">Изменение конструкции</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_designChange"
											type="text"
											className="form-control"
											placeholder="Изменение конструкции"
											aria-label="house_designChange"
											aria-describedby="addon-wrapping"
											value={designChange}
											onChange={ evt => setDesignChange( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Опции</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_options"
											type="text-area"
											rows="5"
											className="form-control"
											placeholder="Опции"
											aria-label="house_options"
											aria-describedby="addon-wrapping"
											value={options}
											onChange={ evt => setOptions( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Подарки</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_present"
											type="text"
											className="form-control"
											placeholder="Подарки"
											aria-label="house_present"
											aria-describedby="addon-wrapping"
											value={present}
											onChange={ evt => setPresent( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Дополнительно</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_additionally"
											type="text-area"
											rows="5"
											className="form-control"
											placeholder="Дополнительно"
											aria-label="house_additionally"
											aria-describedby="addon-wrapping"
											value={additionally}
											onChange={ evt => setAdditionally( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Гарантия</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_warranty"
											type="text"
											className="form-control"
											placeholder="Гарантия"
											aria-label="house_warranty"
											aria-describedby="addon-wrapping"
											value={warranty}
											onChange={ evt => setWarranty( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Ссылка</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_link"
											type="text"
											className="form-control"
											placeholder="Ссылка"
											aria-label="house_link"
											aria-describedby="addon-wrapping"
											value={link}
											onChange={ evt => setLink( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Статус</div>
									<div className="input-group flex-nowrap mb-3">
										<input
											id="house_status"
											type="text"
											className="form-control"
											placeholder="Статус"
											aria-label="house_status"
											aria-describedby="addon-wrapping"
											value={status}
											onChange={ evt => setStatus( evt.target.value ) }

										/>
									</div>

                  <div class="key-filed mb-2">Описание</div>
									<div className="input-group flex-nowrap mb-3">
										<textarea
											id="house_description"
											type="text-area"
											rows="5"
											className="form-control"
											placeholder="Описание"
											aria-label="house_description"
											aria-describedby="addon-wrapping"
											value={description}
											onChange={evt => setDescription(evt.target.value)}
										/>
									</div>

                  <div class="key-filed mb-2">Цена</div>
									<div className="input-group mb-3">
										<input
											id="house_price"
											type="number"
											className="form-control"
											min="1"
											step="any"
											placeholder="Цена"
											aria-label="house_price"
											aria-describedby="addon-wrapping"
											value={price}
											onChange={evt => setPrice(evt.target.value)}
											/* {...{price, setPrice}} */
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
									Первое поле: фото объекта
								</div>
								<div className="">
									Второе поле: схема объекта
								</div>
								<div id='previewSchemeImage' style={{backgroundImage: `url(${previewSchemeImage})`}} className={schemeImageSrc ? 'company__logo' : ''}></div>
								<div id='previewImage' style={{backgroundImage: `url(${previewImage})`}} className={image ? 'company__logo' : ''}></div>

							</Col>
						</Row>


					</Container>
        </ModalBody>
      </Modal>
		</>
	)
}

export default EditHome
