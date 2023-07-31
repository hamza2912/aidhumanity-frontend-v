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
  getCampagin: async id => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/campaigns/${id}.json`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  getRecentCampagins: async _ => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/campaigns/recent`);
      return data;
    } catch (error) {}
  },
  getRecentAppeals: async _ => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/appeals/recent`);
      return data;
    } catch (error) {}
  },
  getAppeals: async (page, filters) => {
    try {
      let url = `${SERVER_API_URL}/appeals.json?page=${page}`;
      if (filters) {
        const filterParams = new URLSearchParams(filters).toString();
        url += `&${filterParams}`;
      }
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default AppealService;
