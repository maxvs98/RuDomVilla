import React from 'react'
import { MDBBtn, MDBContainer, MDBRow, } from 'mdb-react-ui-kit';
import './Subscribe.css'

function Subscribe() {
	return (
		<div className="subscribe__block container-fluid mt-5">
			<MDBContainer className="">
				<MDBRow className="d-flex justify-content-center">
					<div className="subscribe__block-title text-center pb-2">
					<h2>Подпишитесь на наши новости</h2>
				</div>
				<div className="input-group">
					<input type="email" className="form-control form-control-lg form__control" placeholder="Enter your email" />
					<span className="input-group-btn">
						<MDBBtn className="form__button" color="success" type="submit">Подписаться</MDBBtn>
					</span>
				</div>
				</MDBRow>
			</MDBContainer>
		</div>
	)
}

export default Subscribe
