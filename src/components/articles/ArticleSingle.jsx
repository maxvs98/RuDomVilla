import React, {useState, useEffect}  from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import api from '../../services/api';
import server from '../../services/servUrl';
import {
  useParams
} from "react-router-dom";

function BlogSingle() {

	const [ article, setArticle ] = useState( [] )

	let { id } = useParams();
	useEffect(() => {
		const handleArticle = async () => {

			const response = await api.get( '/api/post/' + id );
			setArticle( response.data );
		}
		handleArticle();
	}, [id] );


	return (
    <MDBRow key={ article._id }>
      <MDBCol lg="5" xl="4">
        <div className="rounded z-depth-1-half mb-lg-0 mb-4">
          <img
            className="img-fluid img__blog-news"
            src={ server.url + article.imageSrc }
            alt=""
          />
        </div>
      </MDBCol>
      <MDBCol lg="7" xl="8">
        <h3 className="font-weight-bold mb-3 p-0">
        <strong>{ article.title }</strong>
        </h3>
        <p className="dark-grey-text">
        {article.text}
        </p>
      </MDBCol>
    </MDBRow>
	)
}

export default BlogSingle
