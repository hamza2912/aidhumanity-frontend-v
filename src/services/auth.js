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
      toast.success(
        `Hello ${data.data.first_name}. You are Successfully signed in`
      );
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
  signUp: async (email, password, firstName, lastName) => {
    try {
      const { data } = await axios.post(`${SERVER_URL}/auth`, {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });
      toast.success(
        `Hello ${data.data.first_name}. You are Successfully signed Up`
      );
      return data;
    } catch (error) {
      if (
        error.response?.data?.errors &&
        error.response?.data?.errors.length > 0
      ) {
        toast.error(error.response.data.errors[0]);
      } else if (error.response?.data?.errors?.full_messages.length > 0) {
        toast.error(error.response.data.errors?.full_messages[0]);
      } else {
        toast.error(error.message);
      }
    }
  },
};

export default authService;
