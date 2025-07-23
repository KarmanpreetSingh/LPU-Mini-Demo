import axios from 'axios';

const API = axios.create({ baseURL: ' https://lpu-mini-demo-2-q2km.onrender.com' });

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);