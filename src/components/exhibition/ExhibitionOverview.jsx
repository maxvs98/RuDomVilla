/* Виджет выставок */

import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol  } from 'mdb-react-ui-kit';
import './ExhibitionOverview.css'

function ExhibitionOverview() {
	return (

			<MDBRow className="mt-5">
				<h3>Выставки домов</h3>
				<hr />

				<MDBCol md="3">
					<MDBCard  className="shadow-1-strong">
						<MDBCardImage
							className='img-fluid overview-img'
							overlay="white-light"
							src='./assets/img/05_economy119_v02.jpg'
						/>

						<MDBCardBody >
							<MDBCardTitle>Card title</MDBCardTitle>
							<hr/>
							<MDBCardText>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom bg-primary mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
							<li className='list-inline-item pr-2 text-white'>
								05/10/2015
							</li>
							<li className='list-inline-item pr-2'>
								<a href='#!' className='text-white'>
								13:00-15:00
								</a>
							</li>

							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				{/* остальные карточки */ }
				<MDBCol md="3">
					<MDBCard  className="shadow-1-strong">
						<MDBCardImage

							className='img-fluid overview-img'
							overlay="white-light"
							src='./assets/img/07_city138_v01_1000px.jpg'
						/>

						<MDBCardBody >
							<MDBCardTitle>Card title</MDBCardTitle>
							<hr/>
							<MDBCardText>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom bg-primary mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
							<li className='list-inline-item pr-2 text-white'>
								05/10/2015
							</li>
							<li className='list-inline-item pr-2'>
								<a href='#!' className='text-white'>
								13:00-15:00
								</a>
							</li>

							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				<MDBCol md="3">
					<MDBCard  className="shadow-1-strong">
						<MDBCardImage
							className='img-fluid overview-img'
							overlay="white-light"
							src='./assets/img/kuori125_messutalo_v02-1024x896.jpg'
						/>

						<MDBCardBody >
							<MDBCardTitle>Card title</MDBCardTitle>
							<hr/>
							<MDBCardText>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom bg-primary mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
							<li className='list-inline-item pr-2 text-white'>
								05/10/2015
							</li>
							<li className='list-inline-item pr-2'>
								<a href='#!' className='text-white'>
								13:00-15:00
								</a>
							</li>

							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				<MDBCol md="3">
					<MDBCard  className="shadow-1-strong">
						<MDBCardImage
							style={{ maxHeight: "250px", minHeight: "250px" }}

							className='img-fluid overview-img'
							overlay="white-light"
							src='./assets/img/kuva7-1024x768.jpg'
						/>

						<MDBCardBody >
							<MDBCardTitle>Card title</MDBCardTitle>
							<hr/>
							<MDBCardText>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom bg-primary mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
							<li className='list-inline-item pr-2 text-white'>
								05/10/2015
							</li>
							<li className='list-inline-item pr-2'>
								<a href='#!' className='text-white'>
								13:00-15:00
								</a>
							</li>

							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				{/* Конец карточек */ }

			<hr className="mb-2 mt-4" />
				<MDBCol lg="2" offsetLg="10">
					<MDBBtn size="" color="success" type="submit" className="mb-2">ВСЕ ВЫСТАВКИ</MDBBtn>
				</MDBCol>
			</MDBRow>

	)
}

export default ExhibitionOverview
