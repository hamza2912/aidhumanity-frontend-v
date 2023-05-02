import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser } from './redux/auth/userSlice';
import { useDispatch } from 'react-redux';
import userService from './services/user';
import { toast } from 'react-toastify';

const withAuth = Component => {
  const AuthRoute = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.session);
    const [loading, setLoading] = useState(false);

    const fetchUser = useCallback(async () => {
      const data = await userService.getUser();
      dispatch(addUser(data));
      setLoading(false);
    }, [dispatch]);

    useEffect(() => {
      if (user) {
        setLoading(false);
      } else if (localStorage.getItem('access-token')) {
        fetchUser();
      } else {
        toast.warning('Please Login First');
        navigate('/');
      }
    }, [navigate, fetchUser, user]);

    if (loading) {
      return <div />;
    }
    return <Component {...props} />;
  };

  return AuthRoute;
};

export default withAuth;
