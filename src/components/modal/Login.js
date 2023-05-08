import React, { useState } from 'react';
import Switch from '../switch/switch';
import './modal.css';
import authService from '../../services/auth';
import { SocialAuth } from '../SocialAuth';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/auth/userSlice';
import { passwordRegex } from '../../services/config';

function Login({ showModal, setshowModal }) {
  const [password_type, setpassword_type] = React.useState('password');
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const dispatch = useDispatch();
  const [page, setPage] = useState('Log In');
  const { email, password, confirmPassword, firstName, lastName } = state;

  const handlePwdType = () => {
    if (password_type === 'password') {
      setpassword_type('text');
    } else {
      setpassword_type('password');
    }
  };

  const validateInput = () => {
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

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (page === 'Sign Up' && password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
      isValid = false;
    } else if (page === 'Sign Up' && !passwordRegex.test(password)) {
      errors.password =
        'Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      isValid = false;
    }

    // Validate confirm password
    if (page === 'Sign Up') {
      if (!confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
        isValid = false;
      } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
      // Validate first name
      if (!firstName) {
        errors.firstName = 'First name is required';
        isValid = false;
      }

      // Validate last name
      if (!lastName) {
        errors.lastName = 'Last name is required';
        isValid = false;
      }
    }
    setError(errors);
    return isValid;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      if (validateInput()) {
        setLoading(true);
        const { data } = await authService.signIn(email, password);
        if (data) {
          dispatch(addUser(data));
          setshowModal(false);
          window.location.reload();
        }
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const submitSignUpHandler = async e => {
    e.preventDefault();
    try {
      if (validateInput()) {
        setLoading(true);
        const { data } = await authService.signUp(
          email,
          password,
          firstName,
          lastName
        );
        if (data) {
          dispatch(addUser(data));
          setshowModal(false);
          window.location.reload();
        }
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const isLoggedInPage = page === 'Log In';

  return (
    <div>
      <div className="lg:w-1/3 w-full lg:right-10 right-0 lg:top-24 top-0 h-auto z-10 absolute shadow-xl bg-white rounded-xl">
        <img
          class="absolute -top-2 h-4 left-0 hidden lg:block"
          src="/Icons/shape_mega-menu-horizontal-medium.svg"
          alt="shape_mega-menu-horizontal-medium"
        />
        <img
          class="absolute -top-2 left-1/2 hidden lg:block"
          src="/Icons/triangle-up.svg"
          alt="triangle-up"
        />
        <div className="w-full lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center border-b border-gray-400">
          <h1 className="font-bold lg:text-3xl text-2xl text-black-50">
            {page}
          </h1>
          <button className="z-10">
            <img
              src="/images/icons/icon_times-circle.svg"
              alt="Close Icon"
              onClick={() => {
                setshowModal(false);
              }}
            />
          </button>
        </div>
        <div className="lg:px-10 px-6 lg:py-8 py-6">
          <p className="text-xs text-gray-400">
            To continue, {page} to Aid Humanity.
          </p>
          <SocialAuth />
          <p className="text-xs text-gray-400 my-4 text-center">OR</p>
          <form>
            {!isLoggedInPage && (
              <>
                <div className="relative mt-6">
                  <input
                    id="fistName"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-none z-10"
                    type="text"
                  />
                  <label
                    className="text-gray-400 absolute top-2 left-3 text-xs"
                    for="firstName"
                  >
                    FirstName *
                  </label>
                  {error.firstName && (
                    <span className="text-red-500 text-xs">
                      {error.firstName}
                    </span>
                  )}
                </div>
                <div className="relative mt-6">
                  <input
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-red z-10"
                    type="text"
                  />
                  <label
                    className="text-gray-400 absolute top-2 left-3 text-xs"
                    for="lastName"
                  >
                    Last Name*
                  </label>
                  {error.lastName && (
                    <span className="text-red-500 text-xs">
                      {error.lastName}
                    </span>
                  )}
                </div>
              </>
            )}
            <div className={`relative ${!isLoggedInPage ? 'mt-6' : ''}`}>
              <input
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-none z-10"
                type="text"
              />
              <label
                className="text-gray-400 absolute top-2 left-3 text-xs"
                for="first_name"
              >
                Email Address or Username *
              </label>
              {error.email && (
                <span className="text-red-500 text-xs">{error.email}</span>
              )}
            </div>
            <div className="relative mt-6 z-50">
              <input
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-none z-10"
                type={password_type}
              />
              <label
                className="text-gray-400 absolute top-2 left-3 text-xs"
                for="password"
              >
                Password*
              </label>
              <img
                onClick={handlePwdType}
                className="text-black-50 font-medium text-xs absolute right-3 top-4 cursor-pointer"
                src="/Icons/icon_eye.svg"
                alt="eye-icon"
              />
              {error.password && (
                <span className="text-red-500 text-xs">{error.password}</span>
              )}
            </div>
            {isLoggedInPage && (
              <p className="text-blue text-xs font-bold mt-2">
                Forgot Password?
              </p>
            )}
            {!isLoggedInPage && (
              <>
                <div className="relative mt-6 z-50">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-none z-10"
                    type={password_type}
                  />
                  <label
                    className="text-gray-400 absolute top-2 left-3 text-xs"
                    for="confirmPassword"
                  >
                    Confirm Password*
                  </label>
                  {error.confirmPassword && (
                    <span className="text-red-500 text-xs">
                      {error.confirmPassword}
                    </span>
                  )}
                  <img
                    onClick={handlePwdType}
                    className="text-black-50 font-medium text-xs absolute right-3 top-4 cursor-pointer"
                    src="/Icons/icon_eye.svg"
                    alt="eye-icon"
                  />
                </div>
              </>
            )}
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2 items-center">
                <Switch type="dashboard" />
                <p className="lg:text-sm text-xs text-black-50 font-medium">
                  Remember me
                </p>
              </div>
              {page === 'Log In' ? (
                <button
                  className="w-2/5 py-3 text-xs text-white bg-blue hover:bg-nblue rounded-md font-medium z-10"
                  onClick={submitHandler}
                  disabled={loading}
                >
                  {loading ? 'LOG IN ...' : 'LOG IN'}
                </button>
              ) : (
                <button
                  className="w-2/5 py-3 text-xs text-white bg-blue rounded-md font-medium z-10"
                  onClick={submitSignUpHandler}
                  disabled={loading}
                >
                  {loading ? 'Sign Up ...' : 'Sign Up'}
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="rounded-b-2xl h-20 bg-bwhite w-full flex justify-center items-center z-10">
          {page === 'Log In' ? (
            <p className="font-bold text-black-50 lg:text-base text-xs">
              Don’t have an account?{' '}
              <span
                className="text-blue cursor-pointer"
                onClick={() => setPage('Sign Up')}
              >
                Sign up
              </span>
              .
            </p>
          ) : (
            <p className="font-bold text-black-50 lg:text-base text-xs">
              Want to Login?{' '}
              <span
                className="text-blue cursor-pointer"
                onClick={() => setPage('Log In')}
              >
                Log In
              </span>
              .
            </p>
          )}
        </div>
        <img
          className="absolute w-4/5 -right-1/3 lg:top-1 top-10 z-0"
          src="/images/vectors/logo_aid-humanity-icon.svg"
          alt="Aid-humanity background logo"
        />
      </div>
    </div>
  );
}

export default Login;
