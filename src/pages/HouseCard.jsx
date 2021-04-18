import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {  MDBBtn }  from 'mdb-react-ui-kit';
import api from '../services/api'
import server from '../services/servUrl'

function HouseCard({ match }) {
	const [ house, setHouse ] = useState( [] )

	useEffect(() => {
		const { params } = match;
		const { id } = params;
		const handleHouse = async (id) => {
			const response = await api.get( `/api/house/${ id }` )
			setHouse( response.data )

		}
		handleHouse(id)
	}, [match] );

	return (
		<Container>
			{ house.map( house => (
				<div className="" key={ house._id }>
					<Row>
						<h1> { house.name } </h1>
						<hr />
						<Col md={ 9 }>
							<img
								className="img-fluid"
								src={server.url + house.imageSrc[0]}
								alt=""
							/>
						</Col>
						<Col md={ 3 }>
							<div className="">
								<img
									className="img-fluid"
									src={server.url + house.imageSrc[0]}
									alt=""
								/>
							</div>

							<div className="">
								<img
									className="img-fluid"
									src={server.url + house.schemeImageSrc[0]}
									alt=""
								/>
							</div>
						</Col>

						<a href={ house.link }>
							<MDBBtn size="" tag="a" color="primary" type="submit">Подробнее</MDBBtn>

						</a>

					</Row>
					<hr />

					<Row>
						<Col>
							<div className="house__description">
								{house.description}
						</div>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col md={ 4 }>
							<div className="">
								<span>Площадь: </span>
								<span>{house.area} </span>
							</div>

							<div className="">
								<span>Размеры: </span>
								<span>{house.sizes} </span>
							</div>

							<div className="">
								<span>Жилая площадь: </span>
								<span>{house.livingArea} </span>
							</div>

							<div className="">
								<span>Кухня: </span>
								<span>{house.kitchen} </span>
							</div>

							<div className="">
								<span>Гостиная: </span>
								<span>{house.livingRoom} </span>
							</div>

							<div className="">
								<span>Количество этажей: </span>
								<span>{house.level} </span>
							</div>

							<div className="">
								<span>Количество комнат: </span>
								<span>{house.rooms} </span>
							</div>

							<div className="">
								<span>Количество санузлов: </span>
								<span>{house.bathRooms} </span>
							</div>

							<div className="">
								<span>Котельная: </span>
								<span>{house.boilerRoom} </span>
							</div>

							<div className="">
								<span>Технология строительства: </span>
								<span>{house.constructionTechnology} </span>
							</div>

							<div className="">
								<span>Комплектация: </span>
								<span>{house.equipment} </span>
							</div>

							<div className="">
								<span>Подготовительные работы: </span>
								<span>{house.preliminaries} </span>
							</div>

							<div className="">
								<span>Фундамент: </span>
								<span>{house.foundation} </span>
							</div>

							<div className="">
								<span>Стены: </span>
								<span>{house.walls} </span>
							</div>

							<div className="">
								<span>Кровля: </span>
								<span>{house.roof} </span>
							</div>
						</Col>

						<Col md={ 4 }>
							<div className="">
								<span>Антисептирование: </span>
								<span>{house.antiseptization} </span>
							</div>

							<div className="">
								<span>Внутренняя отделка: </span>
								<span>{house.interiorDecoration} </span>
							</div>

							<div className="">
								<span>Наружняя отделка фасада: </span>
								<span>{house.exteriorFacadeFinishing} </span>
							</div>

							<div className="">
								<span>Форма крыши: </span>
								<span>{house.shapeRoof} </span>
							</div>

							<div className="">
								<span>Кровля: </span>
								<span>{house.houseTop} </span>
							</div>

							<div className="">
								<span>Утепление крыши: </span>
								<span>{house.roofInsulation} </span>
							</div>

							<div className="">
								<span>Водосточная система: </span>
								<span>{house.drainageSystem} </span>
							</div>

							<div className="">
								<span>Инженерные коммуникации: </span>
								<span>{house.communications} </span>
							</div>

							<div className="">
								<span>Электропроводка: </span>
								<span>{house.electricalWiring} </span>
							</div>

							<div className="">
								<span>Водоснабжение: </span>
								<span>{house.waterSupply} </span>
							</div>

							<div className="">
								<span>Канализация: </span>
								<span>{house.canalization} </span>
							</div>

							<div className="">
								<span>Отопление: </span>
								<span>{house.heating} </span>
							</div>

							<div className="">
								<span>Вентиляция: </span>
								<span>{house.ventilation} </span>
							</div>

							<div className="">
								<span>Изменение конструкции: </span>
								<span>{house.designChange} </span>
							</div>
						</Col>

						<Col md={ 4 }>
							<div className="">
								<span>Подарки: </span>
								<span>{house.present} </span>
							</div>

							<div className="">
								<span>Гарантия: </span>
								<span>{house.warranty} </span>
							</div>

							<div className="">
								<span>Статус: </span>
								<span>{house.status} </span>
							</div>

							<div className="">
								<span>Цена: </span>
								<span>{house.price} </span>
							</div>

						</Col>
					</Row>
					<hr />
					<Row>
						<Col md={ 6 }>
							<div className="">
								<span>Опции: </span>
								<span>{house.options} </span>
							</div>
						</Col>
						<Col md={ 6 }>
							<div className="">
								<span>Дополнительно: </span>
								<span>{house.additionally} </span>
							</div>
						</Col>
					</Row>
				</div>



			) ) }
		</Container>
	)
}

export default HouseCard
