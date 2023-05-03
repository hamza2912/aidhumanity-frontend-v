import axios from 'axios';
import { SERVER_API_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const AppealService = {
  getAppeal: async id => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/appeals/${id}.json`);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  getAppeals: async page => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/appeals.json?page=${page}`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default AppealService;
