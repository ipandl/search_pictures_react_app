import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID j5AsYsbCKOW8NfcmAvT2MN3t-61evooWsJjgai9dI3w',
  }
});
