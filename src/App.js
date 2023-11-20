import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AppRoutes } from './Routes';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUser,
  setCart,
  setQuickDonationAppeal,
} from './redux/auth/userSlice';
import userService from './services/user';
import dashboardService from './services/dashboard';
import { setDashboardInfo } from './redux/auth/userSlice';
// import ScrollToTop from './ScrollToTop';
import CartService from './services/cart';
import ScrollToTop from 'react-scroll-to-top';
import HomeService from './services/home';
import { Helmet } from 'react-helmet';

function App() {
  const dispatch = useDispatch();
  const { bodyOverflowHidden } = useSelector(state => state.common);

  const fetchDaashboardData = useCallback(async () => {
    const data = await dashboardService.getDashboardData();
    dispatch(setDashboardInfo(data));
  }, [dispatch]);

  const fetchUserCart = useCallback(
    async user => {
      const data = await CartService.getCart(user);
      dispatch(setCart(data));
    },
    [dispatch]
  );

  const fetchQuickDonationAppeal = useCallback(
    async _ => {
      const data = await HomeService.getQuickDonationAppeal();
      dispatch(setQuickDonationAppeal(data));
    },
    [dispatch]
  );
  const fetchUser = useCallback(async () => {
    const data = await userService.getUser();
    fetchQuickDonationAppeal();
    fetchUserCart(data);
    if (data) {
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
      <Helmet>
        <title>Aid Humanity - Helping the Humanity with Aid</title>
        <meta name="keywords" content="Funraising, Appeals, Donations, Aid" />
        <meta property="og:title" content="New Aid Humanity" />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop
          smooth
          color="#00ade9"
          className="flex justify-center items-center"
        />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
