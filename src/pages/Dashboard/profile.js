import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';
import countryList from 'react-select-country-list';
import { useSelector } from 'react-redux';
import withAuth from '../../AuthRoute';
import userService from '../../services/user';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/auth/userSlice';
import { toast } from 'react-toastify';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    pronoun: '',
    firstName: '',
    lastName: '',
    email: '',
    country: 'GB',
    addressLine1: '',
    addressLine2: '',
    town: '',
    zip: '',
  });

  useEffect(() => {
    if (user) {
      const {
        pronoun,
        first_name: firstName,
        last_name: lastName,
        email,
      } = user || {};

      const addressLine1 = user.address?.address_line1 || '';
      const addressLine2 = user.address?.address_line2 || '';
      const town = user.address?.town || '';
      const zip = user.address?.zip || '';
      const country = user.address?.country || '';
      setState(prevState => ({
        ...prevState,
        pronoun,
        firstName,
        lastName,
        email,
        addressLine1,
        addressLine2,
        town,
        zip,
        country: country || 'GB',
      }));
    }
  }, [user]);

  const options = useMemo(() => countryList().getData(), []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async () => {
    const {
      addressLine1,
      addressLine2,
      town,
      zip,
      country,
      firstName: first_name,
      lastName: last_name,
      pronoun,
    } = state;

    const user = {
      first_name,
      last_name,
      pronoun,
      address_attributes: {
        address_line1: addressLine1,
        address_line2: addressLine2,
        town,
        zip,
        country,
      },
    };

    setLoading(true);
    try {
      const data = await userService.setUser({ user });
      dispatch(addUser(data));
      toast.success('Updated Successfully');
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const pronounOptions = [
    { label: 'Mr', value: 'mr' },
    { label: 'Mrs', value: 'mrs' },
    { label: 'Miss', value: 'miss' },
    { label: 'Ms', value: 'ms' },
    { label: 'Other', value: 'other' },
  ];

  const {
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    town,
    zip,
    country,
    email,
  } = state;

  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="profile" />
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-t-xl w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2 border-lgray">
                <h2 className="text-lg text-black-50 font-bold">Info</h2>
                <div className="flex lg:flex-row flex-col lg:gap-6 gap-4 mt-5 cursor-pointer">
                  {pronounOptions.map(option => (
                    <div className="flex cursor-pointer" key={option.value}>
                      <input
                        type="radio"
                        id={option.value}
                        name="pronoun"
                        value={option.value}
                        className="mr-2 cursor-pointer"
                        checked={state.pronoun === option.value}
                        onChange={handleChange}
                      />
                      <label className="font-medium" htmlFor={option.value}>
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 sm:mt-4 mt-6">
                  <div className="relative">
                    <input
                      id="first_name"
                      className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10"
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={firstName}
                    />
                    <label
                      className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                      for="first_name"
                    >
                      First Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="last_name"
                      className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10"
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={lastName}
                    />
                    <label
                      className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                      for="first_name"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2 border-lgray">
                <h2 className="text-lg text-black-50 font-bold">Email</h2>
                <input
                  id="email"
                  className="w-full p-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10 mt-6 cursor-not-allowed"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  disabled
                />
              </div>
            </div>
            <div className="bg-white w-full rounded-b-xl">
              <div className="lg:px-6 px-4 py-8 ">
                <h2 className="text-lg text-black-50 font-bold">Address</h2>
                <div className='relative'>
                  <img src="/Icons/angle-down.svg" className='absolute right-2 bottom-[1.25rem] z-[100]'></img>
                  <select
                    id="country"
                    className="w-full p-3 rounded-md text-dgray font-medium border border-gray-400 focus:outline-none z-10 mt-6"
                    onChange={handleChange}
                    name="country"
                  >
                    {options.map(option => (
                      <option
                        value={option.value}
                        key={option.label}
                        selected={country === option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                  <div className="relative">
                    <input
                      id="address1"
                      className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10"
                      type="text"
                      value={addressLine1}
                      onChange={handleChange}
                      name="addressLine1"
                    />
                    <label
                      className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                      for="first_name"
                    >
                      Address Line 1
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="address_line2"
                      className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10"
                      type="text"
                      value={addressLine2}
                      onChange={handleChange}
                      name="addressLine2"
                    />
                    <label
                      className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                      for="address_line2"
                    >
                      Address Line 2
                    </label>
                  </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-4">
                  <div className="relative lg:col-span-2">
                    <input
                      id="town"
                      className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10"
                      type="text"
                      value={town}
                      onChange={handleChange}
                      name="town"
                    />
                    <label
                      className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                      for="town"
                    >
                      Town
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="zip"
                      className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-300 focus:outline-none z-10"
                      type="text"
                      value={zip}
                      onChange={handleChange}
                      name="zip"
                    />
                    <label
                      className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                      for="zip"
                    >
                      Zip/Postal
                    </label>
                  </div>
                </div>
                <button
                  className="lg:relative fixed px-16 py-6 lg:w-fit w-full bottom-0 left-0 bg-green hover:bg-dgreen text-black hover:text-white font-bold text-sm lg:rounded-lg uppercase mt-8 z-[9]"
                  onClick={handleSubmit}
                >
                  {loading ? 'Updating' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
          <div className='hidden sm:flex'>
            <Dashboard_footer />
          </div>
        </div>
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>
  );
};

export default withAuth(Profile);
