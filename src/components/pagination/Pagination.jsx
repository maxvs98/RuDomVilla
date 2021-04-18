import React from 'react'
import {  MDBRow, MDBPagination}  from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

function Pagination() {
	return (
		<MDBRow >
			<nav>
				<MDBPagination color="red" className="d-flex justify-content-center">
					<li className="page-item disabled">
						<Link className="page-link" to="#" tabIndex="-1" aria-disabled="true">&laquo;</Link>
					</li>
					<li className="page-item"><Link className="page-link" to="#">1</Link></li>
					<li className="page-item active" aria-current="page">
						<Link className="page-link" to="#">2 <span className="visually-hidden">(current)</span></Link>
					</li>
					<li className="page-item"><Link className="page-link" to="#">3</Link></li>
					<li className="page-item">
						<Link className="page-link" to="#">&raquo;</Link>
					</li>
				</MDBPagination>
			</nav>
			<hr className="mb-4" />
		</MDBRow>
	)
}

export default Pagination
