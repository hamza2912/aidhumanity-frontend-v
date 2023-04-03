import axios from 'axios';
import { SERVER_API_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const donationService = {
  getDonations: async id => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/appeals/${id}/donations.json`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  payAmount: async (unit_amount, success_url, cancel_url, id) => {
    try {
      const payload = {
        donation: {
          unit_amount,
          success_url,
          cancel_url,
        },
      };
      const { data } = await axios.post(
        `${SERVER_API_URL}/appeals/${id}/donations/checkout.json`,
        payload
      );

      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default donationService;
