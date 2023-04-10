import React, { useState } from 'react';
import Switch from '../switch/switch';
import './modal.css';
import authService from '../../services/auth';
import { SocialAuth } from '../SocialAuth';

function Login({ showModal, setshowModal }) {
  const [password_type, setpassword_type] = React.useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = React.useState(false);

  const handlePwdType = () => {
    if (password_type === 'password') {
      setpassword_type('text');
    } else {
      setpassword_type('password');
    }
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await authService.signIn(email, password);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="lg:w-1/3 w-full lg:right-10 right-0 lg:top-24 top-0 h-auto z-10 absolute shadow-xl bg-white rounded-xl">
        <img
          class="absolute -top-2 h-4 left-0 hidden lg:block"
          src="/Icons/shape_mega-menu-horizontal-large.svg"
          alt="shape_mega-menu-horizontal-large"
        />
        <img
          class="absolute -top-2 left-1/2 hidden lg:block"
          src="/Icons/triangle-up.svg"
          alt="triangle-up"
        />
        <div className="w-full lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center border-b border-gray-400">
          <h1 className="font-bold lg:text-3xl text-2xl text-black-50">
            Log In
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
            To continue, log in to Aid Humanity.
          </p>
          <SocialAuth />
          <p className="text-xs text-gray-400 my-4 text-center">OR</p>
          <form>
            <div className="relative">
              <input
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-none z-10"
                type="text"
              />
              <label
                className="text-gray-400 absolute top-2 left-3 text-xs"
                for="first_name"
              >
                Email Address or Username *
              </label>
            </div>
            <div className="relative mt-6 z-50">
              <input
                id="new_password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 border-lblue focus:outline-none z-10"
                type={password_type}
              />
              <label
                className="text-gray-400 absolute top-2 left-3 text-xs"
                for="new_password"
              >
                Password*
              </label>
              <img
                onClick={handlePwdType}
                className="text-black-50 font-medium text-xs absolute right-3 top-4 cursor-pointer"
                src="/Icons/icon_eye.svg"
                alt="eye-icon"
              />
            </div>
            <p className="text-blue text-xs font-bold mt-2">Forgot Password?</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2 items-center">
                <Switch type="dashboard" />
                <p className="lg:text-sm text-xs text-black-50 font-medium">
                  Remember me
                </p>
              </div>
              <button
                className="w-2/5 py-3 text-xs text-white bg-blue rounded-md font-medium z-10"
                onClick={submitHandler}
                disabled={loading}
              >
                {loading ? 'LOG IN ...' : 'LOG IN'}
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-b-2xl h-20 bg-bwhite w-full flex justify-center items-center z-10">
          <p className="font-bold text-black-50 lg:text-base text-xs">
            Don’t have an account?{' '}
            <a href="#" className="text-blue">
              Sign up
            </a>
            .
          </p>
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
