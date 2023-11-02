import axios from 'axios';
import { SERVER_API_URL } from './config';
import { toast } from 'react-toastify';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const CartService = {
  getCart: async (hasUser = false) => {
    try {
      axios.interceptors.request.use(request => {
        // ... (your other interceptor code, if any)
        return request;
      });

      const cartId = localStorage.getItem('cart_id');
      let url = `${SERVER_API_URL}/portal/cart`;

      // If cartId exists, append it as a query parameter
      if (cartId) {
        url += `?cart_id=${cartId}`;
      }

      const { data } = await axios.get(url);
      localStorage.setItem('cart_id', data?.id);
      return data;
    } catch ({ response }) {
      toast.error(response?.data?.errors?.[0] || 'Unable to Update Cart');
    }
  },

  updateCart: async (cart, hasUser = false) => {
    try {
      const cartId = localStorage.getItem('cart_id');
      let url = `${SERVER_API_URL}/portal/cart`;

      if (cartId) {
        url += `?cart_id=${cartId}`;
      }
      const { data } = await axios.patch(url, cart);
      localStorage.setItem('cart_id', data.id);
      return data;
    } catch ({ response }) {
      toast.error(response.data?.errors?.[0] || 'Unable to Update Cart');
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
