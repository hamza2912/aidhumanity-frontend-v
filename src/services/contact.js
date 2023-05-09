// in services/categories.js
import axios from 'axios';
import { SERVER_API_URL } from './config';
import { toast } from 'react-toastify';

const ContactService = {
  contactUs: async payload => {
    try {
      const { data } = await axios.post(
        `${SERVER_API_URL}/contact_us.json`,
        payload
      );
      toast.success('We will get back to you shortly!');
      return data;
    } catch (error) {
      toast.error('Unable to submit the contact form');
    }
  },
};

export default ContactService;
