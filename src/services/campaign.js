import axios from 'axios';
import { SERVER_API_URL } from './config';
import { toast } from 'react-toastify';

const CampaignService = {
  createCampaign: async campaign => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const response = await axios.post(
        `${SERVER_API_URL}/portal/campaigns.json`,
        campaign,
        config
      );
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors
          ? error.response?.data?.errors[0]
          : 'Unable to Create campaign'
      );
    }
  },
  updateCampaign: async (campaign, id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const response = await axios.patch(
        `${SERVER_API_URL}/portal/campaigns/${id}.json`,
        campaign,
        config
      );
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors
          ? error.response?.data?.errors[0]
          : 'Unable to Update campaign'
      );
    }
  },
  getCampaign: async campaignId => {
    try {
      const response = await axios.get(
        `${SERVER_API_URL}/campaigns/${campaignId}.json`
      );
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors
          ? error.response?.data?.errors[0]
          : 'Unable to get campaign'
      );
    }
  },
  cancelCampaign: async campaignId => {
    try {
      const response = await axios.patch(
        `${SERVER_API_URL}/portal/campaigns/${campaignId}/cancel`
      );
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors
          ? error.response?.data?.errors[0]
          : 'Unable to cancel campaign'
      );
    }
  },
  getDonations: async (campaignId, page = 1) => {
    try {
      const response = await axios.get(
        `${SERVER_API_URL}/portal/campaigns/${campaignId}/donations?page=${page}`
      );
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.errors
          ? error.response?.data?.errors[0]
          : 'Unable to get campaign'
      );
    }
  },
  getCategories: async () => {
    try {
      const response = await axios.get(`${SERVER_API_URL}/portal/categories`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default CampaignService;
