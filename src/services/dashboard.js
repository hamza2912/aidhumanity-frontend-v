import axios from 'axios';
import { SERVER_API_URL } from './config';
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const client = 'client';
const uid = 'uid';
const access_token = 'access-token';

const setTokens = () => {
  try {
    axios.defaults.headers.common[client] = localStorage.getItem(client);
    axios.defaults.headers.common[uid] = localStorage.getItem(uid);
    axios.defaults.headers.common[access_token] =
      localStorage.getItem(access_token);
    axios.defaults.headers.common['Accept'] =
      'application/vnd.dp; version=1,application/jsonGET';
  } catch (ex) {}
};

setTokens();
const dashboardService = {
  getDashboardData: async () => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/portal/dashboard.json`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  getDonationHistoryData: async page => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/portal/donations.json?page=${page}`
      );
      return data;
    } catch (error) {
      toast.error('Unable to get donation history');
    }
  },
};

export default dashboardService;
