import axios from 'axios';
import { SERVER_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const donationService = {
  getDonations: async id => {
    try {
      const { data } = await axios.get(
        `${SERVER_URL}/appeals/${id}/donations.json`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default donationService;
