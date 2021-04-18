import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap';
import { MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import api from '../../services/api'
import ArticleCard from './ArticleCard';
import './Article.css'

function AllArticle() {
	const [ article, setArticle ] = useState( [] )


	useEffect(() => {
		const handleArticle = async () => {
			const response = await api.get( '/api/post/' )
			setArticle( response.data )
		}
		handleArticle()
	}, [] );


	return (
		<Row>
			<h1>Статьи</h1>
			<MDBRow>
				<hr />
				<MDBCard className="my-3 px-2">
					<MDBCardBody>
						{ article.map( article => (
							<>
								<ArticleCard article={article} />
							</>
						))}
					</MDBCardBody>
				</MDBCard>
			</MDBRow>
		</Row>
	)
}

export default AllArticle
