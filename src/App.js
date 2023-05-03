import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { AppRoutes } from './Routes';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './redux/auth/userSlice';
import userService from './services/user';
import dashboardService from './services/dashboard';
import { setDashboardInfo } from './redux/auth/userSlice';

function App() {
  const dispatch = useDispatch();

  const fetchUser = useCallback(async () => {
    const data = await userService.getUser();
    if (data) {
      fetchDaashboardData();
    }
    dispatch(addUser(data));
  }, [dispatch]);

  const fetchDaashboardData = async () => {
    const data = await dashboardService.getDashboardData();
    dispatch(setDashboardInfo(data));
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
