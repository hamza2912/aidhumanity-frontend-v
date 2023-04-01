import axios from 'axios';
import { SERVER_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const appealService = {
  getAppeal: async id => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/appeals/${id}.json`);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  getAppeals: async _ => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/appeals.json`);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default appealService;
