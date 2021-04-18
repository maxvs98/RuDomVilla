import React from 'react'
import {  MDBContainer, MDBRow, MDBCol }  from 'mdb-react-ui-kit';
import SearchFilter from './../components/search/SearchFilter';
import SearchContent from './../components/search/SearchContent';
import Pagination from './../components/pagination/Pagination';


function Search() {
	return (
		<MDBContainer>
			{/* sort start */}
			<MDBRow>
				<MDBCol md="2">
					<h1>Поиск</h1>
				</MDBCol>
				<MDBCol lg="3" className="offset-7">
					<div className="">
						<select className="form-select" aria-label="Default select example">
							<option defaultValue>Сортировать по</option>
							<option value="1">Цене</option>
							<option value="2">Квадратуре</option>
							<option value="3">Дате</option>
						</select>
					</div>
				</MDBCol>
			<hr className="mb-4" />
			</MDBRow>
			{/* sort end */ }

			{/* search content start */ }
			<MDBRow >
				{/* search filter start */}
				<SearchFilter />
				{/* search filter end */ }
				{/* search result start */}
				<MDBCol lg="9">
					<MDBRow>
						<MDBCol>
							<Pagination />
						</MDBCol>
					</MDBRow>

					<SearchContent />

					<MDBRow>
						<MDBCol>
							<Pagination />
						</MDBCol>
					</MDBRow>
				</MDBCol>
				{/* search result end */}
			</MDBRow>
			{/* search content end */}
		</MDBContainer>
	)
}

export default Search
