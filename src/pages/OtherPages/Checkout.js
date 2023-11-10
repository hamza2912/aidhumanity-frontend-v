import React, { useEffect, useMemo, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Switch from '../../components/switch/switch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SelectedCartItems from '../../components/common/SelectedCartItems';
import countryList from 'react-select-country-list';
import ButtonLoader from '../../components/common/ButtonLoader';
import DonationService from '../../services/donations';
import { toast } from 'react-toastify';
import { WEB_URL } from '../../services/config';
import HelpFurther from '../../components/common/HelpFurther';
import userService from '../../services/user';
import { addUser } from '../../redux/auth/userSlice';
import {
  setCheckoutSidebar,
  setSummarySidebar,
} from '../../redux/common/CommonSlice';

const titleOptions = [
  { id: 'mr', label: 'Mr' },
  { id: 'mrs', label: 'Mrs' },
  { id: 'miss', label: 'Miss' },
  { id: 'ms', label: 'Ms' },
  { id: 'other', label: 'Other' },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(state => state.session);
  const [loading, setLoading] = useState(false);

  const countries = useMemo(() => countryList().getData(), []);
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    billingCountry: 'GB',
    donationComments: '',
    donationSource: '',
    giftAid: 'false',
    addressLine1: '',
    town: '',
    zip: '',
  });

  const { isAdminCost, user } = useSelector(state => state.session);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService.getUser();
        dispatch(addUser(user));
        if (user) {
          setFormData({
            ...formData,
            title: user.pronoun,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            giftAid: user.gift_aid,
            billingCountry: user.address?.country,
            addressLine1: user.address?.address_line1,
            addressLine2: user.address?.address_line2,
            town: user.address?.town,
            zip: user.address?.zip,
            phone: user.phone,
            contactByEmail: user.contact_by_email,
            contactByPhone: user.contact_by_phone,
            contactBySMS: user.contact_by_sms,
          });
        }
      } catch (err) {}
    };
    fetchUser();
  }, []);

  const handleContactChange = name => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: !formData[name],
    }));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBillingCountryChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      const {
        firstName,
        lastName,
        billingCountry,
        addressLine1,
        addressLine2,
        town,
        zip,
        phone,
        contactByEmail,
        contactByPhone,
        contactBySMS,
        email,
        giftAid,
      } = formData;

      const userPayload = {
        first_name: firstName,
        last_name: lastName,
        address_attributes: {
          address_line1: addressLine1,
          address_line2: addressLine2,
          town,
          zip,
          country: billingCountry,
        },
        phone,
        contact_by_email: contactByEmail,
        contact_by_phone: contactByPhone,
        contact_by_sms: contactBySMS,
      };

      if (billingCountry == 'GB') {
        userPayload['gift_aid'] = giftAid;
        localStorage.setItem('gift_aid', formData.giftAid);
      }

      if (!user) {
        userPayload['email'] = email;
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('admin_cost', isAdminCost);
      }
      const orderPayload = {
        where_did_you_hear_about_us: formData.donationSource,
        comment: formData.donationComments,
      };
      if (user) {
        await userService.setUser({ user: userPayload });
      }
      const { checkout_url } = await DonationService.checkout(
        `${WEB_URL}/thankyou`,
        isAdminCost,
        user
          ? { order: orderPayload }
          : { user: userPayload, order: orderPayload }
      );
      window.location.replace(checkout_url);
    } catch (e) {
      toast.error('Failed to checkout');
    } finally {
      setLoading(false);
    }
  };
  const checkoutAllowed = cart?.donations?.length > 0;
  useEffect(() => {
    if (cart?.donations && !checkoutAllowed) {
      navigate('/');
      dispatch(setSummarySidebar(false));
      dispatch(setCheckoutSidebar(false));
      toast.warn('Please add Appeals to checkout');
    }
  }, [navigate, dispatch, cart.donations, checkoutAllowed]);

  return (
    <>
      <Header />
      <main className="mt-16 lg:mt-[9.5rem] bg-owhite">
        <div className="w-full h-auto py-8 lg:py-16 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Checkout
          </h1>
        </div>
        <section className="w-full h-auto container mx-auto px-5 pt-12 lg:pb-32 pb-10">
          <div className="w-full h-auto flex lg:flex-row flex-col lg:gap-7 gap-6 items-center lg:items-start lg:justify-between justify-center">
            <div className="lg:w-1/3 w-full h-auto bg-white border-2 border-sblue rounded-2xl p-6">
              <h1 className="text-mont text-lg text-black-50 font-bold">
                Donation Summary
              </h1>
              <p className="text-mont text-base text-gray-600 font-semibold mt-4">
                You are donating to{' '}
                <span className="text-orange">
                  {cart?.donations.length} causes
                </span>
              </p>
              <div className="w-full h-auto mt-10">
                <SelectedCartItems />
              </div>
              <button
                className="w-full h-auto p-4 bg-green rounded-lg text-center text-mont text-xs text-white font-bold mt-4"
                onClick={_ => navigate('/appeals')}
              >
                ADD DONATION
              </button>

              <HelpFurther page="checkout" />
            </div>
            <div className="w-full lg:w-2/3 h-auto">
              <div className="w-full h-auto z-10 bg-white rounded-2xl">
                <div className="w-full h-auto border-b border-lgray px-6 lg:py-6 pt-8 pb-6">
                  <h1 className="text-black-50 text-mont text-lg font-bold">
                    Info
                  </h1>

                  {/* Inside your component JSX */}
                  <div className="flex lg:flex-row flex-col lg:gap-6 gap-4 mt-5">
                    {titleOptions.map(option => (
                      <div className="flex" key={option.id}>
                        <input
                          type="radio"
                          id={option.id}
                          name="title"
                          value={option.id}
                          checked={
                            formData.title
                              ? formData.title === option.id
                              : false
                          }
                          className="cursor-pointer"
                          onChange={handleInputChange}
                        />
                        <label className="font-medium ml-2" htmlFor={option.id}>
                          {' '}
                          {' ' + option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-auto grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                    <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full h-auto border border-lgray bg-gray-50 rounded-lg flex flex-col p-2">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none bg-none"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        disabled={!!user}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mb-4 lg:mb-0">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-2">
                    Billing Address
                  </h3>
                  <select
                    className="w-full h-auto border border-lgray rounded-lg flex justify-between px-2 py-4 focus:outline-none mt-4 text-mont text-dgray text-xs font-semibold"
                    name="billingCountry"
                    value={formData.billingCountry || 'GB'}
                    onChange={handleBillingCountryChange}
                  >
                    {countries.map(country => (
                      <option value={country.value}>{country.label}</option>
                    ))}
                  </select>
                  <div className="w-full h-auto flex lg:flex-row flex-col gap-6 mt-2">
                    <div className="lg:w-1/2 w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="addressLine1"
                      >
                        Address Line 1
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="lg:w-1/2 w-full h-auto border border-lgray rounded-lg flex flex-col p-2 lg:mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="addressLine2"
                      >
                        Address Line 2
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="addressLine2"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full h-auto flex lg:flex-row flex-col gap-6 mt-2 mb-4">
                    <div className="lg:w-2/3 w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="town"
                      >
                        Town
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="town"
                        name="town"
                        value={formData.town}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="lg:w-1/3 w-full h-auto border border-lgray rounded-lg flex flex-col p-2 lg:mt-4 mb-2 lg:mb-0">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="zipPostal"
                      >
                        ZIP/Postal
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-medium focus:outline-none"
                        type="text"
                        id="zipPostal"
                        name="zip"
                        value={formData.zipPostal}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-2">
                    Tell us about your Donation
                  </h3>
                  <select
                    className="w-full h-auto border border-lgray rounded-lg flex justify-between px-2 py-4 focus:outline-none mt-4 text-mont text-dgray text-xs font-semibold"
                    name="donationSource"
                    value={formData.donationSource}
                    onChange={handleInputChange}
                  >
                    <option value="">Where did you hear about us?</option>
                    <option value="google">Google</option>
                    <option value="social-media">Social Media</option>
                    <option value="news">News</option>
                  </select>
                  <textarea
                    className={`w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-6 mb-5 text-mont text-dgray text-xs font-semibold ${
                      formData.donationComments.length > 200
                        ? 'border-red-500'
                        : ''
                    }`}
                    name="donationComments"
                    id="donationComments"
                    cols="30"
                    rows="10"
                    placeholder="Add any comments about your donation (Optional)"
                    value={formData.donationComments}
                    onChange={handleInputChange}
                  ></textarea>
                  {/* {formData.donationComments.length > 0 && ( */}
                  <p className="text-mont text-[10px] text-max-char -mt-3 pb-5">
                    Max. characters: 200
                  </p>
                  {/* )} */}
                </div>

                <div className="w-full h-auto lg:border-none border-b border-lgray px-6 py-4 lg:pt-4 lg:pb-0">
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-2">
                    Additional Information
                  </h3>
                  <p className="text-mont text-xs text-gray-600 mt-4">
                    We’d like to keep you updated about our projects and
                    fundraising activities. Please advise whether you are happy
                    to be contacted by email, phone, or SMS:
                  </p>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <button>
                      <Switch
                        type="dashboard"
                        onChange={() => handleContactChange('contactByEmail')}
                        checked={formData.contactEmail}
                      />
                    </button>
                    <p className="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by Email
                    </p>
                  </div>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <button>
                      <Switch
                        type="dashboard"
                        onChange={() => handleContactChange('contactBySMS')}
                        checked={formData.contactSMS}
                      />
                    </button>
                    <p className="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by SMS
                    </p>
                  </div>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <button>
                      <Switch
                        type="dashboard"
                        onChange={() => handleContactChange('contactByPhone')}
                        checked={formData.contactPhone}
                      />
                    </button>
                    <p className="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by Phone
                    </p>
                  </div>
                  {/* --- */}
                  {formData.billingCountry == 'GB' && (
                    <div>
                      <div className="w-full h-auto bg-bwhite mt-4 px-6 py-5 rounded-xl flex gap-4 items-center">
                        <img
                          src="./Icons/illustration_gift.svg"
                          alt="illustration_gift"
                        />
                        <p className="text-mont text-lg text-black-50 font-bold">
                          Gift Aid
                        </p>
                      </div>
                      <p className="text-mont text-sm text-gray-600 font-semibold mt-4">
                        As a UK taxpayer, you can increase your donation by 25%
                        by selecting to 'Gift Aid' your donation, at no extra
                        cost to you. For every £1 you donate, the government
                        will give us an extra 25p.
                      </p>
                      <div className="w-full h-auto flex gap-4 mt-4">
                        <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                          <input
                            type="radio"
                            id="giftAidYes"
                            name="giftAid"
                            value={true}
                            className="w-5 h-5"
                            checked={formData.giftAid == 'true'}
                            onChange={handleInputChange}
                          />{' '}
                          Yes
                        </button>
                        <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                          <input
                            type="radio"
                            id="giftAidNo"
                            name="giftAid"
                            value={false}
                            className="w-5 h-5"
                            checked={formData.giftAid == 'false'}
                            onChange={handleInputChange}
                          />{' '}
                          No
                        </button>
                      </div>
                      <br />
                      <h3>Gift Aid Guidance</h3>
                      <p className="text-mont text-xs text-gray-600 mt-4 mb-5 lg:mb-0">
                        In order for Aidhumanity to reclaim the tax you have
                        paid on your donations, you must have paid income or
                        capital gains tax (in the UK) equal to the tax that will
                        be claimed by all the charities that you donate to
                        (currently 25p for every £1 you give) in the same tax
                        year. The tax reclaimed will be used to help fund the
                        administration costs of the charity so more of your
                        actual donation can go directly to those in need!
                      </p>
                    </div>
                  )}
                  {/* -- */}
                </div>

                <div className="w-full h-auto lg:px-6 lg:py-6 fixed bottom-0 left-0 lg:relative z-10">
                  <ButtonLoader
                    className={`lg:relative fixed bottom-0 left-0 w-full h-auto lg:rounded-lg text-center lg:p-4 px-4 py-5 text-mont text-xs text-black-50 font-bold ${
                      !checkoutAllowed
                        ? 'bg-base-content/10'
                        : 'bg-green hover:text-white'
                    }`}
                    loading={loading}
                    onClick={handleClick}
                    disabled={!checkoutAllowed}
                  >
                    PROCEED TO PAYMENT
                  </ButtonLoader>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
