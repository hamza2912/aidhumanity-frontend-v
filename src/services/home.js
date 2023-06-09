// in services/categories.js
import axios from 'axios';
import { SERVER_API_URL } from './config';
import { toast } from 'react-toastify';

const HomeService = {
  getHomeData: async () => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/home`);
      return data;
    } catch (error) {
      toast.error('Unable to get Home Data from the server', error.message);
    }
  },
};

export default HomeService;
