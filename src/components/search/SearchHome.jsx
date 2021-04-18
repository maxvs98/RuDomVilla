import React from 'react'
import './SearchHome.css'
import { MDBBtn,  MDBRow, MDBCol, MDBInput, MDBCheckbox  } from 'mdb-react-ui-kit';

function SearchHome() {
	return (
		<MDBRow>
				<div className="home__search shadow-1-strong">
					<MDBRow>
						<MDBCol lg="8" >
							<div className="home__search-head">
								<div className="home__search-title">ПОИСК ДОМА</div>
								<div className="home__search-subtitle">Найдите дом своей мечты, начните поиск прямо сейчас!</div>
							</div>
						</MDBCol>
						<MDBCol lg="4">
							<div className="home__search-count-project">
								<span className="home-count">2478</span> проектов загородных домов с подрядом на строительство
							</div>
						</MDBCol>
					</MDBRow>
					<form className="home__search-form">
						<MDBRow>
							<MDBCol lg="5">
								<label htmlFor=""><span>Цена</span>
									<MDBRow className="mb-4">
										<MDBCol>
											<div className="form-outline">
												<MDBInput type="number" id="form3Example1" className="form-control" label="от" />
											</div>
										</MDBCol>
										<MDBCol>
											<div className="form-outline">
												<MDBInput type="number" id="form3Example2" className="form-control" label="до" />
											</div>
										</MDBCol>
									</MDBRow>
								</label>

								<label htmlFor=""><span>Общая площадь, м²</span>
									<MDBRow className="mb-4">
										<MDBCol>
											<div className="form-outline">
												<MDBInput type="number" id="" className="form-control" label="от" />
											</div>
										</MDBCol>
										<MDBCol>
											<div className="form-outline">
												<MDBInput type="number" id="" className="form-control" label="до" />
											</div>
										</MDBCol>
									</MDBRow>
								</label>

							</MDBCol>
							<MDBCol lg="7">
								<MDBRow className="mb-4">
									<MDBCol md={3}>
										<span>Количество комнат</span>
									</MDBCol>
									<MDBCol md={9}>
										<div className="form-check form-check-inline"><MDBCheckbox label="1"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="2"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="3"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="4"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="5"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="6+"/></div>
									</MDBCol>
								</MDBRow>
								<MDBRow className="mb-4">
									<MDBCol md={3}>
										<span>Количество санузлов</span>
									</MDBCol>
									<MDBCol md={9}>
										<div className="form-check form-check-inline"><MDBCheckbox label="1"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="2"/></div>
										<div className="form-check form-check-inline"><MDBCheckbox label="3"/></div>
									</MDBCol>
								</MDBRow>
								<MDBRow className="mb-4">
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
							</MDBCol>
						</MDBRow>

						<MDBRow>
							<MDBCol lg="6">
								<div className="text-center mt-2 mb-2">
									<MDBBtn size="lg" tag="a" color="primary" type="submit">Дополнительные параметры</MDBBtn>
								</div>
							</MDBCol>
							<MDBCol lg="6">
								<div className="text-center mt-2 mb-2">
								<MDBBtn size="lg" color="success" type="submit">Поиск дома</MDBBtn>
								</div>
							</MDBCol>
						</MDBRow>
				</form>
				</div>
			</MDBRow>
	)
}

export default SearchHome
