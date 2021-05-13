import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {  MDBBtn }  from 'mdb-react-ui-kit';
import api from '../services/api'
import server from '../services/servUrl'
import {
  useParams
} from "react-router-dom";

function CompanyCard() {
	const [ company, setCompany ] = useState( [] )

	let { id } = useParams();
	useEffect(() => {
		const handlePost = async () => {

			const response = await api.get( '/api/company/');
			setCompany( response.data.filter(company => company._id === id)[0] );
		}
		handlePost();
	}, [id] );

	return (
		<Container>
				<div className="" key={ company._id }>
					<Row>
						<h1> { company.name } </h1>
						<hr />
						<Col md={ 9 }>
							<img
								className="img-fluid"
								src={server.url + company.logoSrc}
								alt=""
							/>
						</Col>
						<Col md={ 3 }>
							<div className="">
								<img
									className="img-fluid"
									src={server.url + company.image}
									alt=""
								/>
							</div>
						</Col>

						<a href={ company.link }>
							<MDBBtn size="" tag="a" color="primary" type="submit">Подробнее</MDBBtn>
						</a>

					</Row>
					<hr />

					<Row>
						<Col>
							<div className="house__description">
								{company.description}
						</div>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col md={ 4 }>
							<div className="">
								<span>Страна: </span>
								<span>{company.country} </span>
							</div>
						</Col>

						<Col md={ 4 }>
							<div className="">
								<span>Город: </span>
								<span>{company.city} </span>
							</div>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col md={ 6 }>
							<div className="">
								<span>Адрес: </span>
								<span>{company.address} </span>
							</div>
						</Col>
					</Row>
				</div>
		</Container>
	)
}

export default CompanyCard
