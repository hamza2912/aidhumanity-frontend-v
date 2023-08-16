import React, { useMemo, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Switch from '../../components/switch/switch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currencyFormatter } from '../../utils';
import SelectedCartItems from '../../components/common/SelectedCartItems';
import countryList from 'react-select-country-list';
import ButtonLoader from '../../components/common/ButtonLoader';
import DonationService from '../../services/donations';
import { toast } from 'react-toastify';
import { WEB_URL } from '../../services/config';

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
    billingCountry: '',
    donationComments: '',
    // ... other form fields
  });

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
      const { checkout_url } = await DonationService.checkout(
        `${WEB_URL}/thankyou`
      );
      window.location.replace(checkout_url);
    } catch (e) {
      toast.error('Failed to checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main>
        <div className="w-full h-auto py-8 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Checkout
          </h1>
        </div>
        <section className="w-full h-auto bg-owhite container mx-auto px-5 pt-10 lg:pb-32 pb-10">
          <div className="w-full h-auto flex lg:flex-row flex-col gap-4 items-center lg:items-start lg:justify-between justify-center">
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
              <h1 className="text-mont text-lg text-black-50 font-bold mt-4">
                Help us further
              </h1>
              <div className="w-full h-auto flex justify-between p-2 mt-4 rounded-xl bg-pink cursor-pointer">
                <div className="w-full h-auto flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g id="icon_check-circle" transform="translate(0.75 0.75)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="none"
                        stroke="#1D1D1D"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                      <g
                        id="icon-check"
                        transform="translate(6 7.417)"
                        opacity="0.253"
                      >
                        <path
                          id="Path_263"
                          data-name="Path 263"
                          d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                          transform="translate(-291.914 -551.523)"
                          fill="none"
                          stroke="#1D1D1D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <img
                    src="/Icons/illustration_admin-love.svg"
                    alt="illustration_admin-love"
                  />
                  <h3 className="text-sm text-mont text-black-50 font-semibold">
                    Donate to Admin <br /> cost 1.5%
                  </h3>
                </div>
                <div className="w-1/3 h-auto flex items-center justify-end">
                  <p className="text-mont text-xs text-black-50 font-bold">
                    £10
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex justify-between px-2 py-4 mt-4 rounded-xl bg-green cursor-pointer">
                <div className="w-full h-auto flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g id="icon_check-circle" transform="translate(0.75 0.75)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                      <g
                        id="icon-check"
                        transform="translate(6 7.417)"
                        opacity="0.253"
                      >
                        <path
                          id="Path_263"
                          data-name="Path 263"
                          d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                          transform="translate(-291.914 -551.523)"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <h3 className="text-sm text-mont text-white font-semibold">
                    Rescue a street child
                  </h3>
                </div>
                <div className="w-1/3 h-auto flex items-center justify-end">
                  <p className="text-mont text-xs text-white font-bold">
                    £360.00
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex justify-between px-2 py-4 mt-4 rounded-xl bg-green cursor-pointer">
                <div className="w-full h-auto flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g id="icon_check-circle" transform="translate(0.75 0.75)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                      <g
                        id="icon-check"
                        transform="translate(6 7.417)"
                        opacity="0.253"
                      >
                        <path
                          id="Path_263"
                          data-name="Path 263"
                          d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                          transform="translate(-291.914 -551.523)"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <h3 className="text-sm text-mont text-white font-semibold">
                    Food pack for a family
                  </h3>
                </div>
                <div className="w-1/3 h-auto flex items-center justify-end">
                  <p className="text-mont text-xs text-white font-bold">
                    £50.00
                  </p>
                </div>
              </div>
              <div className="w-full h-auto p-4 rounded-xl bg-sblue mt-4 cursor-pointer">
                <div className="w-full h-auto flex justify-between">
                  <p className="text-mont text-sm text-white font-semibold">
                    TOTAL
                  </p>
                  <p className="text-mont text-base text-white font-bold">
                    {currencyFormatter(
                      cart?.donations.reduce(
                        (acc, donation) => acc + donation.amount,
                        0
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 h-auto">
              <div className="w-full h-auto z-10 bg-white rounded-2xl">
                <div className="w-full h-auto border-b border-lgray px-6 py-4">
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
                          value={option.label}
                          checked={formData.title === option.label}
                          onChange={handleInputChange}
                        />
                        <label className="font-medium ml-2" htmlFor={option.id}>
                          {' '}
                          {' ' + option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <div className="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <div className="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
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
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-4">
                    Billing Address
                  </h3>
                  <select
                    className="w-full h-auto border border-lgray rounded-lg flex justify-between px-2 py-4 focus:outline-none mt-4 text-mont text-dgray text-xs font-semibold"
                    name="billingCountry"
                    value={formData.billingCountry}
                    onChange={handleBillingCountryChange}
                  >
                    {countries.map(country => (
                      <option value={country.value}>{country.label}</option>
                    ))}
                  </select>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <div className="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="addressLine1"
                      >
                        Address Line 1
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="addressLine1"
                        name="addressLine1"
                        value={formData.addressLine1}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="addressLine2"
                      >
                        Address Line 2
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="addressLine2"
                        name="addressLine2"
                        value={formData.addressLine2}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="w-full h-auto flex gap-4 mt-4">
                    <div className="w-2/3 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="town"
                      >
                        Town
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="town"
                        name="town"
                        value={formData.town}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-1/3 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                      <label
                        className="text-mont text-dgray text-xs font-semibold"
                        htmlFor="zipPostal"
                      >
                        ZIP/Postal
                      </label>
                      <input
                        className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        id="zipPostal"
                        name="zipPostal"
                        value={formData.zipPostal}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-4">
                    Tell us about your Donation
                  </h3>
                  <select
                    className="w-full h-auto border border-lgray rounded-lg flex justify-between px-2 py-4 focus:outline-none mt-4 text-mont text-dgray text-xs font-semibold"
                    name="donationSource"
                    value={formData.donationSource}
                    onChange={handleInputChange}
                  >
                    <option value="">Where did you hear about us?</option>
                    {/* Add other donation source options here */}
                  </select>
                  <textarea
                    className={`w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4 text-mont text-dgray text-xs font-semibold ${
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
                  {formData.donationComments.length > 200 && (
                    <p className="text-mont text-xs text-red-500">
                      Character limit exceeded (max. 200 characters)
                    </p>
                  )}
                </div>

                <div className="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-4">
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
                        onChange={() => handleContactChange('contactEmail')}
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
                        onChange={() => handleContactChange('contactSMS')}
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
                        onChange={() => handleContactChange('contactPhone')}
                        checked={formData.contactPhone}
                      />
                    </button>
                    <p className="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by Phone
                    </p>
                  </div>
                  <div className="w-full h-auto bg-bwhite mt-4 p-4 rounded-lg flex gap-4 items-center">
                    <img
                      src="./Icons/illustration_gift.svg"
                      alt="illustration_gift"
                    />
                    <p className="text-mont text-lg text-black-50 font-bold">
                      Gift Aid
                    </p>
                  </div>
                  <p className="text-mont text-sm text-gray-600 font-semibold mt-4">
                    If you are a UK taxpayer we can increase your donation by
                    25%, this will add £16.25 to your donation without you
                    paying a further penny!
                  </p>
                  <div className="w-full h-auto flex gap-2 mt-4">
                    <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="giftAidYes"
                        name="taxPayer"
                        value={true}
                        className="w-5 h-5"
                        checked={formData.giftAid}
                        onChange={handleInputChange}
                      />{' '}
                      Yes
                    </button>
                    <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="giftAidNo"
                        name="taxPayer"
                        value={false}
                        className="w-5 h-5"
                        checked={formData.giftAid}
                        onChange={handleInputChange}
                      />{' '}
                      No
                    </button>
                  </div>
                  <p className="text-mont text-xs text-gray-600 mt-4">
                    I would like Muslim Charity to treat all donations I have
                    made in the past, this donation and all my future donations
                    until I notify otherwise as Gift Aid donations. I am a UK
                    taxpayer and understand that if I pay less Income Tax and/or
                    Capital Gains Tax than the amount of Gift Aid claimed on all
                    my donations in that tax year it is my responsibility to pay
                    any difference. Please inform Muslim Charity if you want to
                    cancel the declaration, change your name or address or no
                    longer pay sufficient tax. The Gift Aid amount claimed will
                    be used towards fundraising/administrative costs as well as
                    our Where Most Needed fund to save and transform more lives.
                  </p>
                </div>

                <div className="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 className="text-mont text-lg text-black-50 font-bold mt-4">
                    Payment Methods
                  </h3>
                  <div className="w-full h-auto border border-lgray rounded-lg flex flex-col lg:flex-row justify-between items-center p-2 mt-4">
                    <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        checked
                        className="w-5 h-5"
                      />{' '}
                      Pay with Card
                    </button>
                    <div className="flex items-center gap-4">
                      <img src="./Icons/logo_visa.svg" alt="logo_visa" />
                      <img
                        src="./Icons/symbol_maestro.svg"
                        alt="symbol_maestro"
                      />
                    </div>
                  </div>
                  {/* <div className="w-full h-auto border border-lgray rounded-lg flex flex-col lg:flex-row justify-between items-center p-2 mt-4">
                    <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      Pay with PayPal
                    </button>
                    <img src="./Icons/logo_paypal.svg" alt="logo_paypal" />
                  </div>
                  <div className="w-full h-auto border border-lgray rounded-lg flex flex-col lg:flex-row justify-between items-center p-2 mt-4">
                    <button className="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      Pay with Stripe
                    </button>
                    <img src="./Icons/logo_stripe.svg" alt="logo_stripe" />
                  </div>
                  <div className="w-full h-auto bg-owhite p-4 mt-4">
                    <h3 className="text-mont text-sm text-black-50 font-bold">
                      Enter your card details
                    </h3>
                    <div className="w-full h-auto grid lg:grid-cols-4 grid-cols-1 gap-6 mt-4">
                      <form
                        className="h-auto bg-white rounded-lg flex flex-col p-2"
                        action=""
                      >
                        <label
                          className="text-mont text-dgray text-xs font-semibold"
                          for="Card Number"
                        >
                          Card Number
                        </label>
                        <input
                          className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </form>
                      <form
                        className="h-auto bg-white rounded-lg flex flex-col p-2"
                        action=""
                      >
                        <label
                          className="text-mont text-dgray text-xs font-semibold"
                          for="Car Holder Name"
                        >
                          Car Holder Name
                        </label>
                        <input
                          className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                          type="text"
                          placeholder="Ex. John White"
                        />
                      </form>
                      <form
                        className="h-auto bg-white rounded-lg flex flex-col p-2"
                        action=""
                      >
                        <label
                          className="text-mont text-dgray text-xs font-semibold"
                          for="Expiry Date"
                        >
                          Expiry Date
                        </label>
                        <input
                          className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </form>
                      <div className="h-auto bg-white rounded-lg flex p-2 flex items-center justify-between">
                        <form className="flex flex-col" action="">
                          <label
                            className="text-mont text-dgray text-xs font-semibold"
                            for="Security Code"
                          >
                            Security Code
                          </label>
                          <input
                            className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                            type="text"
                            placeholder="****"
                          />
                        </form>
                        <button>
                          <img
                            src="./Icons/icon_info-circle.svg"
                            alt="icon_info-circle"
                          />
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="w-full h-auto px-6 py-4">
                  <ButtonLoader
                    className="lg:relative fixed bottom-0 left-0 w-full h-auto lg:rounded-lg bg-green text-center p-4 text-mont text-xs text-black-50 font-bold mt-4"
                    loading={loading}
                    onClick={handleClick}
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
