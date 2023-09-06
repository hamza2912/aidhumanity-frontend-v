import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { AppRoutes } from './Routes';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setCart } from './redux/auth/userSlice';
import userService from './services/user';
import dashboardService from './services/dashboard';
import { setDashboardInfo } from './redux/auth/userSlice';
import ScrollToTop from './ScrollToTop';
import CartService from './services/cart';

function App() {
  const dispatch = useDispatch();
  const { bodyOverflowHidden } = useSelector(state => state.common);

  const fetchDaashboardData = useCallback(async () => {
    const data = await dashboardService.getDashboardData();
    dispatch(setDashboardInfo(data));
  }, [dispatch]);

  const fetchUserCart = useCallback(async () => {
    const data = await CartService.getCart();
    dispatch(setCart(data));
  }, [dispatch]);

  const fetchUser = useCallback(async () => {
    const data = await userService.getUser();
    if (data) {
      fetchUserCart();
      fetchDaashboardData();
    }
    dispatch(addUser(data));
  }, [dispatch, fetchDaashboardData, fetchUserCart]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (bodyOverflowHidden) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    };
  }, [bodyOverflowHidden]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={500} />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
