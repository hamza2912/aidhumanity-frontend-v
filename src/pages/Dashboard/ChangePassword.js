import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Appeal from '../../components/Appeal';
import DashboardFooter from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';
import withAuth from '../../AuthRoute';
import { useSelector } from 'react-redux';
import ValidationText from './ValidationText';
import authService from '../../services/auth';

const ChangePassword = () => {
  const [password_type, setpassword_type] = React.useState('password');
  const [retypePassword_type, setRetypePassword_type] =
    React.useState('password');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationResults, setValidationResults] = useState({});
  const { user } = useSelector(state => state.session);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isCurrentPasswordsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const { email, first_name, last_name } = user || {};

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'newPassword') {
      setNewPassword(value);
      validateNewPassword(value);
    } else if (name === 'confirmPassword') {
      setIsConfirmPasswordValid(isVaild('confirmPassword', {}, value));
      setConfirmPassword(value);
    } else {
      setCurrentPassword(value);
    }
  };

  const isVaild = (name, validation = {}, value = '') => {
    if (name === 'newPassword') {
      return (
        validation.length &&
        validation.pattern &&
        validation.history &&
        validation.emailOrName
      );
    } else {
      if (value === '' || newPassword === '' || newPassword !== value) {
        return false;
      } else {
        return true;
      }
    }
  };

  const validateNewPassword = value => {
    const validation = {};
    if (value.length < 12) {
      validation.length = false;
    } else {
      validation.length = true;
    }
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).*$/;
    if (!regex.test(value)) {
      validation.pattern = false;
    } else {
      validation.pattern = true;
    }

    validation.history = true;
    if (
      value.includes(email) ||
      value.includes(first_name) ||
      value.includes(last_name)
    ) {
      validation.emailOrName = false;
    } else {
      validation.emailOrName = true;
    }
    setIsNewPasswordValid(isVaild('newPassword', validation));
    setValidationResults(validation);
  };

  function handlepassword() {
    if (password_type === 'password') {
      setpassword_type('text');
    } else {
      setpassword_type('password');
    }
  }

  function handleRetypePassword() {
    if (retypePassword_type === 'password') {
      setRetypePassword_type('text');
    } else {
      setRetypePassword_type('password');
    }
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (
        !isConfirmPasswordValid &&
        !isNewPasswordValid &&
        currentPassword === ''
      ) {
        return;
      }
      await authService.changePassword({
        current_password: currentPassword,
        password_confirmation: confirmPassword,
        password: newPassword,
      });
    } catch (er) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="security" />
      <section className="flex w-full relative pt-16 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Security</h1>
          </div>
          <div className="lg:mb-8 mb-2 lg:px-12 px-4">
            <div className="bg-white rounded-t-xl w-full">
              <div className="lg:px-6 px-4 pb-8 pt-7 border-b-2 border-gray-300">
                <h2 className="text-lg text-black-50 font-bold">
                  Change password
                </h2>
                <div className="relative mt-6">
                  <input
                    id="password"
                    className={`w-full pt-4 pb-2 px-3 rounded-md text-black-50 font-medium border ${
                      isCurrentPasswordsValid
                        ? 'border-lgray'
                        : 'border-red-500'
                    } focus:outline-none z-10`}
                    type="password"
                    onChange={handleInputChange}
                  />
                  <label
                    className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                    for="password"
                  >
                    Current
                  </label>
                  {!isCurrentPasswordsValid && (
                    <p className="text-red-500">This feild is required</p>
                  )}
                </div>
                <div className="relative mt-5">
                  <input
                    id="newPassword"
                    className={`w-full pt-4 pb-2 px-3 rounded-md text-black-50 font-medium ${
                      isNewPasswordValid
                        ? 'border border-lgray'
                        : 'border border-red-500'
                    } focus:outline-none z-10`}
                    type={password_type}
                    name="newPassword"
                    onChange={handleInputChange}
                  />
                  <label
                    className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                    for="newPassword"
                  >
                    New
                  </label>
                  <p
                    onClick={handlepassword}
                    className="text-nblue font-medium text-xs absolute right-3 top-[1.1rem] cursor-pointer"
                  >
                    Show
                  </p>
                </div>
                <ValidationText validationResults={validationResults} />
                <div className="relative mt-5">
                  <input
                    id="confirmPassword"
                    className={`w-full pt-4 pb-2 px-3 rounded-md text-black-50 font-medium ${
                      isConfirmPasswordValid
                        ? 'border border-lgray'
                        : 'border-2 border-red-500'
                    }  focus:outline-none z-10`}
                    type={retypePassword_type}
                    name="confirmPassword"
                    onChange={handleInputChange}
                  />
                  <label
                    className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                    for="confirmPassword"
                  >
                    Retype New
                  </label>
                  {!isConfirmPasswordValid && (
                    <p className="text-red-500">Password should be same</p>
                  )}
                  <p
                    onClick={handleRetypePassword}
                    className="text-nblue font-medium text-xs absolute right-3 top-[1.1rem] cursor-pointer"
                  >
                    Show
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full rounded-b-xl">
              <div className="lg:px-6 px-4 pb-8 pt-6 shadow-sm">
                {/* <h2 className="text-lg text-black-50 font-bold">
                  Two-factor authentication
                </h2>
                <p className="text-gray-600 mt-4">
                  An additional layer of security, using email address to
                  generate a secret access code
                </p>
                <div className="flex items-center gap-2 my-4">
                  <Switch type="dashboard" />
                  <p className="font-medium">Enabled</p>
                </div> */}
                <button
                  className="lg:relative fixed px-16 lg:py-4 py-5 lg:w-fit w-full bottom-0 left-0 bg-green hover:bg-mgreen text-black font-bold text-sm lg:rounded-lg uppercase z-[9]"
                  onClick={handleSubmit}
                >
                  {isLoading ? 'Saving Changes ... ' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex">
            <DashboardFooter />
          </div>
        </div>
        {!isMobile && <Appeal />}
      </section>
    </div>
  );
};

export default withAuth(ChangePassword);
