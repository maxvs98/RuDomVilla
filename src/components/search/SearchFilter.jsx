import React from 'react'
import './SearchFilter.css'
import { MDBBtn,  MDBRow, MDBCol, MDBInput, MDBCheckbox  } from 'mdb-react-ui-kit';


function SearchFilter() {
	return (
		<MDBCol md="3">
			<div className="search__filter shadow-1-strong mb-4 sticky-lg-top">
				<label htmlFor=""><span>Цена</span>
					<MDBRow className="mb-4">
						<MDBCol>
							<div className="form-outline mb-1">
								<MDBInput type="number" id="form3Example1" className="form-control" label="от" />
							</div>
							<div className="form-outline">
								<MDBInput type="number" id="form3Example2" className="form-control" label="до" />
							</div>
						</MDBCol>
					</MDBRow>
				</label>

				<label htmlFor=""><span>Общая площадь, м²</span>
					<MDBRow className="mb-4">
						<MDBCol>
							<div className="form-outline mb-1">
								<MDBInput type="number" id="" className="form-control" label="от" />
							</div>
							<div className="form-outline">
								<MDBInput type="number" id="" className="form-control" label="до" />
							</div>
						</MDBCol>
					</MDBRow>
				</label>

				<MDBRow className="mb-4">
					<MDBCol>
						<div className="">
							<label htmlFor=""><span>Количество комнат</span>
								<MDBRow>
									<MDBCol>
										<div className="form-check "><MDBCheckbox label="1"/></div>
										<div className="form-check "><MDBCheckbox label="2"/></div>
									</MDBCol>
									<MDBCol>
										<div className="form-check "><MDBCheckbox label="3"/></div>
										<div className="form-check "><MDBCheckbox label="4"/></div>
									</MDBCol>
									<MDBCol>
										<div className="form-check "><MDBCheckbox label="5"/></div>
										<div className="form-check "><MDBCheckbox label="6+"/></div>
									</MDBCol>
								</MDBRow>
							</label>
						</div>
					</MDBCol>
				</MDBRow>

				<MDBRow className="mb-4">
					<MDBCol>
						<div className="">
							<label htmlFor=""><span>Количество санузлов</span>
								<MDBRow>
									<MDBCol>
										<div className="form-check form-check-inline"><MDBCheckbox label="1"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="2"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="3"/></div>
									</MDBCol>
								</MDBRow>
							</label>
						</div>
					</MDBCol>
				</MDBRow>

				<MDBRow className="mb-2">
					<MDBCol>
						<div className="">
							<select className="form-select" aria-label="Default select example">
								<option defaultValue>Выберите комплектацию</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</MDBCol>
				</MDBRow>

				<MDBRow className="mb-2">
					<MDBCol>
						<div className="">
							<select className="form-select" aria-label="Default select example">
								<option defaultValue>Метод строительства</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</MDBCol>
				</MDBRow>

				<MDBRow className="mb-2">
					<MDBCol>
						<div className="">
							<select className="form-select" aria-label="Default select example">
								<option defaultValue>Производитель</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</MDBCol>
				</MDBRow>

				<MDBRow className="mb-2">
					<MDBCol>
						<div className="">
							<select className="form-select" aria-label="Default select example">
								<option defaultValue>Материал</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</MDBCol>
				</MDBRow>

				<div className="text-center mt-4 mb-2">
					<MDBBtn size="lg" color="success" type="submit">ВСЕГО ДОМОВ (2478)</MDBBtn>
				</div>

				<div className="text-center mt-2 mb-2">
					<MDBBtn size="lg" color="primary" type="submit">СРАВНИТЬ</MDBBtn>
				</div>
			</div>
		</MDBCol>
	)
}

export default SearchFilter
