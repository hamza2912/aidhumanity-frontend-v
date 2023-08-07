import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { AppRoutes } from './Routes';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/auth/userSlice';
import userService from './services/user';
import dashboardService from './services/dashboard';
import { setDashboardInfo } from './redux/auth/userSlice';
import ScrollToTop from './ScrollToTop';

function App() {
  const dispatch = useDispatch();
  const { bodyOverflowHidden } = useSelector(state => state.common);

  const fetchDaashboardData = useCallback(async () => {
    const data = await dashboardService.getDashboardData();
    dispatch(setDashboardInfo(data));
  }, [dispatch]);

  const fetchUser = useCallback(async () => {
    const data = await userService.getUser();
    if (data) {
      fetchDaashboardData();
    }
    dispatch(addUser(data));
  }, [dispatch, fetchDaashboardData]);

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
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
