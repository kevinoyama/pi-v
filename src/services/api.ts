import axios from 'axios';

const api = axios.create({
  baseURL: 'https://72b59244-b0ca-42fa-ac8f-9622e8e08b66.mock.pstmn.io',
});

export default api;
