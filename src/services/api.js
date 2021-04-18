import axios from 'axios';

const api = axios.create({
	baseURL: 'http://176.57.214.249:5000/',
});

export default api;
