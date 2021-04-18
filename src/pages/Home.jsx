import React from 'react'
import './home.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import ExhibitionOverview from '../components/exhibition/ExhibitionOverview'
import SearchHome from '../components/search/SearchHome'
import BlogOverview from '../components/blog/BlogOverview'
import Showcase from './../components/showcase/Showcase';
import InfoBlock from './../components/infoblock/InfoBlock';


function Home() {
	return (
		<div className="">
			<MDBContainer className="home">
				<SearchHome />
				<ExhibitionOverview />
				<BlogOverview />
				<Showcase />
				<InfoBlock />
			</MDBContainer>
		</div>
	)
}

export default Home
