import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import api from '../../services/api'
import server from '../../services/servUrl'
import './SearchContent.css'

function SearchContent() {
	const [ house, setHouse ] = useState( [] )
	const [ company, setCompany ] = useState( [] )

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
	}, [ ] );

	return (
		<div className="">

			{house.map(house => (
				<Row key={ house._id }>
					<Col lg="4">
						<div className="search__content-block">
							<div className="search__content-block-img text-center">
								<Link to={`/housecard/${house._id}`}>
									<img
										className="img-fluid"
										src={server.url + house.imageSrc[0]}
										alt=""
									/>
								</Link>
							</div>
						</div>
						<Link to={`/company/`}>
							<div className="mt-4 search__block-seller d-flex align-items-center justify-content-center">
								<img
									className="img-fluid seller__logo shadow-1-strong"
									src={company.filter(company => company._id === house.company).map(logo => (server.url + logo.logoSrc))}
									alt={company.filter(company => company._id === house.company).map(company => (company.name))}
								/>
								<span className="seller__name">{company.filter(company => company._id === house.company).map(name => (name.name))}</span>
							</div>
						</Link>
					</Col>
					<Col lg="4">
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
					<Col lg="4">
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
								<span>{house.bathRooms}</span>
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
					<hr className="mt-2 mb-4" />
				</Row>
			))}
		</div>
	)
}

export default SearchContent
