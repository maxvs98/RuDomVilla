import './App.css';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Search from './pages/Search';
import HouseCard from './pages/HouseCard';
import Subscribe from './layout/subscribe/Subscribe';
import Login from './pages/admin/Login';
import Admin from './pages/admin/Admin';
import Company from './pages/Company';
import CompanyCard from './pages/CompanyCard';
import Posts from './pages/Posts';
import Post from './pages/Post';
import './mdb.min.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/search' component={Search} />
				<Route exact path='/housecard/:id' component={HouseCard} />
				<Route exact path='/company' component={Company} />
				<Route exact path='/companycard/:id' component={CompanyCard} />
				<Route exact path='/posts' component={Posts} />
				<Route exact path='/dashboard/login' component={Login} />
				<Route exact path='/dashboard/' component={Admin} />
				<Route exact path='/post/:id' component={(props) => (<Post {...props}/>) } />
			</Switch>
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
