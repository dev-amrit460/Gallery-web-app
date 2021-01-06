  
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://pixabay.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    key: "18005070-db80de985224bc25be5b2d215",
    safesearch: true,
    editors_choice: true,
  },
});

export default Api;