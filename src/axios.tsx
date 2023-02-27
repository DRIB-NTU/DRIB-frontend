import axios from 'axios';

// window.location.origin -> when deploy(frontend/backend tgr)
// "http://localhost:4000" -> when testing locally (frontend/backend separately)
const API_ROOT = "http://127.0.0.1:5000"

const instance = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default instance;
