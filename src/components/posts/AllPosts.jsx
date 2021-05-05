import React, {useState, useEffect} from 'react'
import { Row } from 'react-bootstrap';
import { MDBRow, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import api from '../../services/api'
import PostCard from './PostCard';
import './Post.css'

function AllPosts() {
	const [ post, setPost ] = useState( [] )


	useEffect(() => {
		const handleArticle = async () => {
			const response = await api.get( '/api/post/' )
			setPost( response.data )
		}
		handleArticle()
	}, [] );


	return (
		<Row>
			<h1>Статьи 1</h1>
			<MDBRow>
				<hr />
				<MDBCard className="my-3 px-2">
					<MDBCardBody>
						{ post.map( post => (
							<>
								<PostCard post={post} />
							</>
						))}
					</MDBCardBody>
				</MDBCard>
			</MDBRow>
		</Row>
	)
}

export default AllPosts
