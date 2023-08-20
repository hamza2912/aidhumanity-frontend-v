import axios from 'axios';
import { SERVER_API_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const DonationService = {
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
  getCampaignDonations: async id => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/campaigns/${id}/donations.json`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  payAmount: async (
    unit_amount,
    success_url,
    cancel_url,
    id,
    note = null,
    campaign_id = null
  ) => {
    try {
      const payload = {
        donation: {
          unit_amount,
          success_url,
          cancel_url,
          ...(note && { note }),
          ...(campaign_id && { campaign_id }),
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
  checkout: async success_url => {
    const queryParams = new URLSearchParams({ success_url }).toString();

    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/portal/cart/checkout?${queryParams}`
      );

      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default DonationService;
