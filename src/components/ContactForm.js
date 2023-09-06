import React, { useState } from 'react';
import Switch from './switch/switch';
import ContactService from '../services/contact';
import { Link } from 'react-router-dom';
import ButtonLoader from './common/ButtonLoader';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async () => {
    const { fullName, ...otherData } = formData;
    await ContactService.contactUs({
      contact_us_query: {
        full_name: fullName,
        ...otherData,
      },
    });
  };

  return (
    <>
      <h1 className="text-black-50 text-mont text-3xl font-bold">
        Contact Form
      </h1>
      <form className="w-full h-auto mt-6" action="">
        <div className="relative mt-4">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full pt-5 pb-1 px-3 rounded-md text-black font-medium text-[13px] border border-gray-200 border-lblue focus:outline-none z-10"
            type="text"
          />
          <label
            className="text-dgray font-semibold absolute top-2 left-3 text-[11px]"
            for="first_name"
          >
            Full Name *
          </label>
        </div>

        <div className="relative mt-4">
          <input
            className="w-full pt-5 pb-1 px-3 rounded-md text-black font-medium text-[13px] border border-gray-200 border-lblue focus:outline-none z-10"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label
            className="text-dgray font-semibold absolute top-2 left-3 text-[11px]"
            for="first_name"
          >
            Email *
          </label>
        </div>

        <input
          className="placeholder-dgray font-medium text-[13px] w-full h-auto focus:outline-none border-lblue rounded-lg border border-gray-200 px-2 py-3 mt-4"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          className="placeholder-dgray font-medium text-[13px] w-full h-auto focus:outline-none border-lblue rounded-lg border border-gray-200 px-2 py-3 mt-4"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject *"
        />
        <textarea
          className="placeholder-dgray font-medium text-[13px] w-full h-auto focus:outline-none border-lblue rounded-lg border border-gray-200 px-2 py-3 mt-4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          cols={30}
          rows={10}
          placeholder="Message *"
        />
      </form>
      <p className="flex justify-end mt-2 text-black-50 text-[14px] font-medium text-mont">
        0/999
      </p>
      <div className="flex items-start gap-2 lg:my-2 my-4">
        <div className="w-10 h-3 flex items-center mt-2">
          <Switch type="dashboard" />
        </div>
        <p className="text-black-50 text-mont lg:text-[14px] font-medium flex flex-wrap">
          <span className="whitespace-nowrap">I agree to </span>
          <Link
            className="font-semibold text-blue mx-1 whitespace-nowrap"
            to=""
          >
            Terms & Conditions
          </Link>{' '}
          <span>and </span>
          <Link
            className="font-semibold text-blue mx-1 whitespace-nowrap"
            to=""
          >
            Privacy Policy
          </Link>
        </p>
      </div>
      <ButtonLoader
        className="w-full h-auto bg-sblue rounded-lg text-white text-xs text-mont font-medium py-4 mt-4"
        onClick={handleSubmit}
        loading={loading}
      >
        SUBMIT
      </ButtonLoader>
      <img
        className="absolute lg:hidden flex bottom-1/4 -left-12"
        src="./Icons/circle_blue.svg"
        alt="blue circle"
      />
    </>
  );
};
