import axios from 'axios';
import { SERVER_URL } from './config';
import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';
const client = 'client';
const uid = 'uid';
const access_token = 'access-token';

const authService = {
  signIn: async (email, password) => {
    try {
      const { data, headers } = await axios.post(
        `${SERVER_URL}/auth/sign_in.json`,
        {
          email,
          password,
        }
      );
      setHeaders(headers);
      toast.success(
        `Hello ${data.data.first_name}. You are Successfully signed in`,
        {
          toastClassName: 'custom-toast', // Add the custom CSS class
        }
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
      const { data, headers } = await axios.post(`${SERVER_URL}/auth`, {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });
      setHeaders(headers);
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
  signOut: async () => {
    try {
      const { data } = await axios.delete(`${SERVER_URL}/auth/sign_out`);
      removeHeaders();
      toast.success('Sign out successfully',
      {
        toastClassName: 'custom-toast', // Add the custom CSS class
      }
      );
      return data;
    } catch (ex) {
      toast.error('Unable to Sign out');
    }
  },
  changePassword: async payload => {
    try {
      const { data } = await axios.patch(
        `${SERVER_URL}/auth/password`,
        payload
      );
      toast.success('Changed Passwrod successfully');
      return data;
    } catch (error) {
      if (error.response?.data?.errors?.full_messages.length > 0) {
        toast.error(error.response.data.errors?.full_messages[0]);
      } else {
        toast.error('Unable to Change the Password');
      }
    }
  },
};
const removeHeaders = _ => {
  localStorage.removeItem('client');
  localStorage.removeItem('uid');
  localStorage.removeItem('access_token');
};

const setHeaders = headers => {
  localStorage.setItem(client, headers[client]);
  localStorage.setItem(uid, headers[uid]);
  localStorage.setItem(access_token, headers[access_token]);
};
export default authService;
