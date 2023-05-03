import axios from 'axios';
import { SERVER_API_URL } from './config';

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

const userService = {
  getUser: async () => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/portal/preferences.json`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  setUser: async payload => {
    try {
      const { data } = await axios.patch(
        `${SERVER_API_URL}/portal/personal_detail.json`,
        payload
      );
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch user data');
    }
  },
  setUserPreferences: async payload => {
    try {
      const { data } = await axios.patch(
        `${SERVER_API_URL}/portal/preferences.json`,
        payload
      );
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch user data');
    }
  },
  setUserImage: async formData => {
    try {
      const { data } = await axios.patch(
        `${SERVER_API_URL}/portal/personal_detail.json`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch user data');
    }
  },
};

export default userService;
