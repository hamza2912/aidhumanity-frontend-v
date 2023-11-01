import React, { useState } from 'react';
import './modal.css';
import authService from '../../services/auth';
import { useDispatch } from 'react-redux';
import { passwordRegex } from '../../services/config';
import ButtonLoader from '../common/ButtonLoader';
import { setShowForgetPassword } from '../../redux/common/CommonSlice';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = ({ showModal, setshowModal, overflowVisible }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pswdType, setPasswordType] = useState('password');

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const validatePassword = () => {
    let errors = {};
    let isValid = true;

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      errors.password =
        'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const submitHandler = async e => {
    try {
      if (validatePassword()) {
        setLoading(true);
        dispatch(setShowForgetPassword(false));
        await authService.resetPassword({
          password,
          password_confirmation: confirmPassword,
        });
        window.location.replace('/');
      }
    } catch (e) {
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
                  dispatch(setshowModal(false));
                  overflowVisible();
                }}
                className="w-3 h-3 lg:hidden"
                src="/images/icons/dashboard/angle-left.svg"
                alt="go back"
              />
              <h1 className="font-bold lg:text-3xl text-lg text-black-50">
                Reset Password
              </h1>
            </div>
            <button className="z-10 hidden lg:flex">
              <img
                src="/images/icons/icon_times-circle.svg"
                alt="Close Icon"
                onClick={() => {
                  dispatch(setShowForgetPassword(false));
                }}
              />
            </button>
          </div>
          <div className="lg:px-10 px-4 lg:py-8 py-6">
            {/* <p className="text-xs text-gray-400">
              To continue, {page} to Aid Humanity.
            </p>
            <SocialAuth />
            <p className="text-xs text-gray-400 my-4 text-center">OR</p> */}
            <form>
              <div className="relative mt-6 z-50">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className={`w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border ${
                    error.password ? 'border-red' : 'border-gray-400'
                  } border-lblue focus:outline-none z-10`}
                  type={pswdType}
                />
                <label
                  className="text-gray-400 absolute top-2 left-3 text-xs"
                  for="password"
                >
                  Password *
                </label>
                <img
                  onClick={() => setPasswordType(!setPasswordType)}
                  className="text-black-50 font-medium text-xs absolute right-3 top-4 cursor-pointer"
                  src="/Icons/icon_eye.svg"
                  alt="eye-icon"
                />
                {error.password && (
                  <span className="text-red text-xs">{error.password}</span>
                )}
              </div>

              <div className="relative mt-6 z-50">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className={`w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border ${
                    error.confirmPassword ? 'border-red' : 'border-gray-400'
                  }  border-lblue focus:outline-none z-10`}
                  type={pswdType}
                />
                <label
                  className="text-gray-400 absolute top-2 left-3 text-xs"
                  for="confirmPassword"
                >
                  Confirm Password *
                </label>
                {error.confirmPassword && (
                  <span className="text-red text-xs">
                    {error.confirmPassword}
                  </span>
                )}
                <img
                  onClick={() => setPasswordType(!setPasswordType)}
                  className="text-black-50 font-medium text-xs absolute right-3 top-4 cursor-pointer"
                  src="/Icons/icon_eye.svg"
                  alt="eye-icon"
                />
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
                  {loading ? 'Reseting Password...' : 'Reset Password'}
                </ButtonLoader>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
