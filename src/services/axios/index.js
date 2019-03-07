import axios from 'axios'

axios.defaults.baseURL = window.API_SERVER_URL
axios.defaults.headers.common['Access-Control-Allow-Origin'] = window.API_SERVER_URL

export default axios


