import axios from 'axios';

// backend running localhost in Python Flask
export default axios.create({
	baseURL: 'http://127.0.0.1:5000',
});