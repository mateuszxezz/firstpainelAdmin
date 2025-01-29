import axios from 'axios';
window.axios = axios;

// O GORDO E GORDO

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
