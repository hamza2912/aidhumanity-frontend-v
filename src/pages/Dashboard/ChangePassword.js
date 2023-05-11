import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import DashboardFooter from '../../components/DashboardFooter';
import Switch from '../../components/switch/switch';
import { isMobile } from 'react-device-detect';
import withAuth from '../../AuthRoute';
import { useSelector } from 'react-redux';
import ValidationText from './ValidationText';
import authService from '../../services/auth';
import { toast } from 'react-toastify';

const ChangePassword = () => {
  const [password_type, setpassword_type] = React.useState('password');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationResults, setValidationResults] = useState({});
  const { user } = useSelector(state => state.session);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [isCurrentPasswordsValid, setIsCurrentPasswordsValid] = useState(true);
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
    // check length
    if (value.length < 12) {
      validation.length = false;
    } else {
      validation.length = true;
    }
    // check for number, letter and special character
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).*$/;
    if (!regex.test(value)) {
      validation.pattern = false;
    } else {
      validation.pattern = true;
    }
    // check if new password is not same as the last 6 passwords
    // TODO: implement logic to check against last 6 passwords
    validation.history = true;
    // check if new password does not include email or name
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
      const data = await authService.changePassword({
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
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center py-5 lg:px-12 px-4 border-b-2 h-20">
            <h1 className="text-xl font-bold">Security</h1>
          </div>
          <div className="my-8 lg:px-12 px-4">
            <div className="bg-white rounded-t-xl w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2">
                <h2 className="text-lg text-black-50 font-bold">
                  Change password
                </h2>
                <div className="relative mt-6">
                  <input
                    id="password"
                    className={`w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border ${
                      isCurrentPasswordsValid
                        ? 'border-gray-400'
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
                <div className="relative mt-6">
                  <input
                    id="newPassword"
                    className={`w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium ${
                      isNewPasswordValid
                        ? 'border border-gray-400'
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
                    className="text-black-50 font-medium text-xs absolute right-3 top-5 cursor-pointer"
                  >
                    show
                  </p>
                </div>
                <ValidationText validationResults={validationResults} />
                <div className="relative mt-6">
                  <input
                    id="confirmPassword"
                    className={`w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium ${
                      isConfirmPasswordValid
                        ? 'border border-gray-400'
                        : 'border-2 border-red-500'
                    }  focus:outline-none z-10`}
                    type={password_type}
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
                    onClick={handlepassword}
                    className="text-black-50 font-medium text-xs absolute right-3 top-5 cursor-pointer"
                  >
                    show
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-full rounded-b-xl">
              <div className="lg:px-6 px-4 py-8">
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
                  className="lg:relative fixed px-16 py-6 lg:w-fit w-full bottom-0 left-0 bg-green hover:bg-dgreen text-black hover:text-white font-bold text-sm lg:rounded-lg uppercase mt-8 z-10"
                  onClick={handleSubmit}
                >
                  {isLoading ? 'Saving Changes ... ' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
          <DashboardFooter />
        </div>
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>
  );
};

export default withAuth(ChangePassword);
