// in services/categories.js
import axios from 'axios';
import { SERVER_API_URL } from './config';
// import { toast } from 'react-toastify';

const CategoryService = {
  getCategories: async () => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/categories.json`);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default CategoryService;
