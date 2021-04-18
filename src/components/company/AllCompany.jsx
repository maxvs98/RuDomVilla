import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  } from 'mdb-react-ui-kit';
import api from '../../services/api'
import server from '../../services/servUrl'
import './Company.css'

function AllCompany() {
	const [ company, setCompany ] = useState( [] )


	useEffect(() => {
		const handleCompany = async () => {
			const response = await api.get( '/api/company' )
			setCompany( response.data )
		}
		handleCompany()
	}, [] );


	return (
		<Row>
			<h1>Компании</h1>
			<hr />
			<Col md={ 3 } className="mt-3">
				<div className="search__filter shadow-1-strong mb-4 sticky-lg-top">
					Фильтр
				</div>
			</Col>
			<Col md={ 9 } className="mt-3">
				<Row className="">
					{ company.map( company => (
						<Col md="4" key={ company._id }>
							<MDBCard className="shadow-1-strong company__card mb-4" >
								<MDBCardImage
									className='img-fluid overview-img'
									overlay="white-light"
									src={ server.url + company.imageSrc }
								/>

								<div className="card__logo">
									<img
										className="company__card-logo shadow-1-strong"
										src={ server.url + company.logoSrc }
										alt={ company.name }
									/>
								</div>

								<MDBCardBody className="card__company-description">
									<MDBCardTitle>{ company.name }</MDBCardTitle>
									<hr/>
									<MDBCardText >
										{company.description}
									</MDBCardText>
								</MDBCardBody>
								{/* <MDBBtn color="primary" className="btn mb-4">Подробнее</MDBBtn> */}
							</MDBCard>
						</Col>
					))}

				</Row>
			</Col>
		</Row>
	)
}

export default AllCompany
