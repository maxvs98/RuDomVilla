import React from 'react'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon }  from 'mdb-react-ui-kit';

function Showcase() {
	return (
		<MDBCard
		className="mb-5 px-5 mx-auto"
		style={{ fontWeight: 300, maxWidth: "90%" }}>
			<MDBCardBody style={ { paddingTop: 0 } }>
				<h2 className="h1-responsive font-weight-bold my-5 text-center">
					Section title
				</h2>
				 <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
					Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit id
					laborum.
				</p>
				<MDBRow>
					<MDBCol md="12" lg="6">
						<div className="mb-4">
							<div className="z-depth-1-half mb-4">
								<img
									className="img-fluid"
									src="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
									alt=""
								/>
							</div>
							<div className="d-flex justify-content-between">
								<a href="#!" className="deep-orange-text">
									<h6 className="font-weight-bold">
									<MDBIcon icon="utensils" className="pr-2" />
									Culinary
									</h6>
								</a>
								<p className="font-weight-bold dark-grey-text">
									<MDBIcon far icon="clock" className="pr-2" />
									27/02/2018
								</p>
							</div>
							<h3 className="font-weight-bold dark-grey-text mb-3 p-0">
							<a href="#!">Title of the news</a>
							</h3>
							<p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
							Sed ut perspiciatis unde voluptatem omnis iste natus error sit
							voluptatem accusantium doloremque laudantium, totam rem
							aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae explicabo. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat.
							</p>
						</div>

					</MDBCol>

					<MDBCol md="12" lg="6">
						<div style={{
							borderBottom: "1px solid #e0e0e0",
							marginBottom: "1.5rem"
						} }>
							<MDBRow>
								<MDBCol md="3">
									<div className="z-depth-1-half mb-4">
										<img
											className="img-fluid"
											src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
											alt=""
										/>
									</div>
								</MDBCol>
								<MDBCol md="9">
									<p className="font-weight-bold dark-grey-text">
									26/02/2018
									</p>
									<div className="d-flex justify-content-between">
										<MDBCol size="11" className="text-truncate pl-0 mb-3">
											<a href="#!" className="dark-grey-text">
											At vero eos et accusamus et iusto odio dignissimos
											ducimus qui blanditiis
											</a>
										</MDBCol>
										<a href="#!">
											<MDBIcon icon="angle-double-right" />
										</a>
									</div>
								</MDBCol>
							</MDBRow>
						</div>

						<div style={{
								borderBottom: "1px solid #e0e0e0",
								marginBottom: "1.5rem"
						} }>
							<MDBRow>
								<MDBCol md="3">
									<div className="z-depth-1-half mb-4">
										<img
											className="img-fluid"
											src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
											alt=""
										/>
									</div>
								</MDBCol>
								<MDBCol md="9">
									<p className="font-weight-bold dark-grey-text">
									25/02/2018
									</p>
									<div className="d-flex justify-content-between">
										<MDBCol size="11" className="text-truncate pl-0 mb-3">
											<a href="#!" className="dark-grey-text">
											Itaque earum rerum hic tenetur a sapiente delectus
											</a>
										</MDBCol>
										<a href="#!">
											<MDBIcon icon="angle-double-right" />
										</a>
									</div>
								</MDBCol>
							</MDBRow>
						</div>

						<div style={{
							borderBottom: "1px solid #e0e0e0",
							marginBottom: "1.5rem"
						} }>
							<MDBRow>
								<MDBCol md="3">
									<div className="z-depth-1-half mb-4">
										<img
											className="img-fluid"
											src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
											alt=""
										/>
									</div>
								</MDBCol>
								<MDBCol md="9">
									<p className="font-weight-bold dark-grey-text">
										24/03/2018
									</p>
									<div className="d-flex justify-content-between">
										<MDBCol size="11" className="text-truncate pl-0 mb-3">
											<a href="#!" className="dark-grey-text">
											Soluta nobis est eligendi optio cumque nihil impedit
											quo minus
											</a>
										</MDBCol>
										<a href="#!">
											<MDBIcon icon="angle-double-right" />
										</a>
									</div>
								</MDBCol>
							</MDBRow>
						</div>

						<div className="mb-4">
							<MDBRow>
								<MDBCol md="3">
									<div className="z-depth-1-half mb-4">
										<img
											className="img-fluid"
											src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
											alt=""
										/>
									</div>
								</MDBCol>
								<MDBCol md="9">
									<p className="font-weight-bold dark-grey-text">
										23/02/2018
									</p>
									<div className="d-flex justify-content-between">
										<MDBCol size="11" className="text-truncate pl-0 mb-3">
											<a href="#!" className="dark-grey-text">
											Duis aute irure dolor in reprehenderit in voluptate
											</a>
										</MDBCol>
										<a href="#!">
											<MDBIcon icon="angle-double-right" />
										</a>
									</div>
								</MDBCol>
							</MDBRow>
						</div>
					</MDBCol>
				</MDBRow>

			</MDBCardBody>
		</MDBCard>
	)
}

export default Showcase
