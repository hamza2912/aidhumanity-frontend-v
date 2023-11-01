import React, { useState } from 'react';
import './modal.css';
import authService from '../../services/auth';
import { useDispatch } from 'react-redux';
import ButtonLoader from '../common/ButtonLoader';
import {
  setShowForgetEmail,
  setShowForgetPassword,
} from '../../redux/common/CommonSlice';
import { toast } from 'react-toastify';
import { WEB_URL } from '../../services/config';

const ForgetPasswordEmail = ({ showModal, setshowModal, overflowVisible }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const validateEmail = () => {
    let errors = {};
    let isValid = true;

    // Validate email
    if (!email) {
      errors.email = 'Email address is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const submitHandler = async e => {
    try {
      if (validateEmail()) {
        setLoading(true);
        const { data } = await authService.sendRecoveryEmail({
          email,
          redirect_url: `${WEB_URL}/forget-password`,
        });
        if (data) {
          dispatch(setShowForgetEmail(false));
          dispatch(setShowForgetPassword(true));
        }
      }
    } catch (e) {
      // Handle the error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={event => {
        event.stopPropagation();
      }}
    >
      <div className="lg:w-1/3 w-full lg:right-0 right-0 lg:top-20 top-0 h-screen sm:h-auto z-20 fixed sm:absolute shadow-2xl bg-f5 sm:bg-white rounded-xl">
        <img
          className="absolute -top-2 h-4 left-0 hidden lg:block"
          src="/Icons/shape_mega-menu-horizontal-medium.svg"
          alt="shape_mega-menu-horizontal-medium"
        />
        <img
          className="absolute -top-2 right-[45%] 2xl:right-[35%] hidden lg:block"
          src="/Icons/triangle-up.svg"
          alt="triangle-up"
        />
        <div className="relative overflow-hidden">
          <img
            className="absolute w-4/5 -right-1/3 lg:top-16 top-10 z-0 hidden sm:flex"
            src="/images/vectors/logo_aid-humanity-icon.svg"
            alt="Aid-humanity background logo"
          />
          <div className="w-full lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center border-b lg:border-gray-400 bg-white sm:bg-transparent">
            <div className="flex gap-2 items-center">
              <img
                onClick={() => {
                  dispatch(setShowForgetEmail(false));
                }}
                className="w-3 h-3 lg:hidden"
                src="/images/icons/dashboard/angle-left.svg"
                alt="go back"
              />
              <h1 className="font-bold lg:text-3xl text-lg text-black-50">
                Forget Password
              </h1>
            </div>
            <button className="z-10 hidden lg:flex">
              <img
                src="/images/icons/icon_times-circle.svg"
                alt="Close Icon"
                onClick={() => {
                  dispatch(setshowModal(false));
                }}
              />
            </button>
          </div>
          <div className="lg:px-10 px-4 lg:py-8 py-6">
            <form>
              <div className={`relative `}>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={`w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border ${
                    error.email ? 'border-red' : 'border-gray-400'
                  } border-lblue focus:outline-none z-10`}
                  type="text"
                />
                <label
                  className="text-gray-400 absolute top-2 left-3 text-xs"
                  for="email"
                >
                  Email *
                </label>
                {error.email && (
                  <span className="text-red text-xs">{error.email}</span>
                )}
              </div>
              <div className="flex justify-center mt-3">
                <ButtonLoader
                  className="w-5/12 py-3 text-xs text-white bg-blue hover:bg-nblue rounded-md font-medium z-10"
                  onClick={e => {
                    e.preventDefault();
                    submitHandler();
                  }}
                  loading={loading}
                  disabled={loading}
                >
                  {loading ? 'Sending Email...' : 'Send Recovery Email'}
                </ButtonLoader>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:rounded-b-2xl h-20 bg-bwhite w-full flex justify-center items-center z-10 absolute bottom-0 lg:static">
          <p className="font-bold text-black-50 text-base">
            Want to Login?{' '}
            <span
              className="text-blue hover:text-nblue cursor-pointer"
              // onClick={}
            >
              Log In
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordEmail;
