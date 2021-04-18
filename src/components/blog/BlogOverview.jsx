import React, {useState, useEffect}  from 'react';
import './BlogOverview.css';
import { MDBRow, MDBCard, MDBCardBody  } from 'mdb-react-ui-kit';
import api from '../../services/api';
import BlogCard from './BlogCard';

function BlogOverview() {

	const [ article, setArticle ] = useState( [] )


	useEffect(() => {
		const handleArticle = async () => {
			const response = await api.get( '/api/post/' )
			setArticle( response.data )
		}
		handleArticle()
	}, [] );

	return (
		<MDBRow>
			<hr />
			<MDBCard className="my-3 px-2">
				<MDBCardBody>
					<MDBRow>
						<MDBCard className="my-3 px-2">
							<MDBCardBody>
								{ article.map( article => (
									<BlogCard article={article} />
								))}
							</MDBCardBody>
						</MDBCard>
					</MDBRow>
				</MDBCardBody>
			</MDBCard>
		</MDBRow>
	)
}

export default BlogOverview
