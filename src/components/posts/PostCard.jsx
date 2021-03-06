import React from 'react';
import { MDBRow, MDBCol,  MDBBtn  } from 'mdb-react-ui-kit';
import server from '../../services/servUrl';

function PostCard({post}) {
  const url = "/post/";
	return (
		<>
			<MDBRow key={ post._id }>
				<MDBCol lg="5" xl="4">
					<div className="rounded z-depth-1-half mb-lg-0 mb-4">
						<img
							className="img-fluid img__blog-news"
							src={ server.url + post.imageSrc }
							alt=""
						/>
					</div>
				</MDBCol>
				<MDBCol lg="7" xl="8">
					<h3 className="font-weight-bold mb-3 p-0">
					<strong>{ post.title }</strong>
					</h3>
					<p className="dark-grey-text">
					{post.text}
					</p>
					<MDBBtn  href={ url + post._id } color="success" size="md">
					Читать
					</MDBBtn>
				</MDBCol>
			</MDBRow>
			<hr />
		</>
	)
}

export default PostCard
