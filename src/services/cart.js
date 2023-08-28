import axios from 'axios';
import { SERVER_API_URL } from './config';
// import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const CartService = {
  getCart: async _ => {
    try {
      const { data } = await axios.get(`${SERVER_API_URL}/portal/cart`);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  updateCart: async cart => {
    try {
      const { data } = await axios.patch(`${SERVER_API_URL}/portal/cart`, cart);
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
  getLastOrder: async _ => {
    try {
      const { data } = await axios.get(
        `${SERVER_API_URL}/portal/orders/last_order`
      );
      return data;
    } catch (error) {
      // toast.error(error.message);
    }
  },
};

export default CartService;
