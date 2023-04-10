import axios from 'axios';
import { SERVER_URL } from './config';
import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const authService = {
  signIn: async (email, password) => {
    try {
      const { data } = await axios.post(`${SERVER_URL}/auth/sign_in.json`, {
        email,
        password,
      });
      toast.success('Successfully signed in');
      return data;
    } catch (error) {
      if (
        error.response?.data?.errors &&
        error.response?.data?.errors.length > 0
      ) {
        toast.error(error.response.data.errors[0]);
      } else {
        toast.error(error.message);
      }
    }
  },
};

export default authService;
