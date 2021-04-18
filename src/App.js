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
import Articles from './pages/Articles';
import Article from './pages/Article';
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
				<Route exact path='/articles' component={Articles} />
				<Route exact path='/dashboard/login' component={Login} />
				<Route exact path='/dashboard/' component={Admin} />
				<Route exact path='/article/:id' component={(props) => (<Article {...props}/>) } />
			</Switch>
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
