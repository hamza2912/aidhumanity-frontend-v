// in services/categories.js
import axios from 'axios';
import { SERVER_API_URL } from './config';

const CategoryService = {
  getCategories: async () => {
    try {
      const response = await axios.get(`${SERVER_API_URL}/categories.json`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
  },
};

export default CategoryService;
