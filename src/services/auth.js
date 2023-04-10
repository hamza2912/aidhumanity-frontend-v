import axios from 'axios';
import { SERVER_API_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const authService = {
  signIn: async (email, password) => {
    try {
      const { data } = await axios.post(`${SERVER_API_URL}/auth/sign_in.json`, {email, password});
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  
};

export default authService;
