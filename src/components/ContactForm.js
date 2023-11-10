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
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim())
      tempErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Email is not valid';
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.length > 999) {
      tempErrors.message = 'Message is too long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await ContactService.contactUs({
        contact_us_query: {
          full_name: formData.fullName,
          ...formData,
        },
      });
      // Reset form and errors if submission is successful
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      // Handle submission error
    }
    setLoading(false);
  };

  const inputClassName =
    'w-full pt-5 pb-1 px-3 rounded-md text-black font-medium text-[13px] border border-gray-200 focus:outline-none z-10';
  const errorClassName = 'border-red'; // Add this class for errors

  return (
    <>
      <h1 className="text-black-50 text-mont text-3xl font-bold">
        Contact Form
      </h1>
      <form className="w-full h-auto mt-10" action="">
        <div
          className={`relative mt-4 ${
            errors.fullName ? 'indicator w-full' : ''
          }`}
        >
          {errors.fullName && (
            <span className="indicator-item badge badge-error text-base-100 -mt-2 mr-2 text-xs text-bold z-20">
              {errors.fullName}
            </span>
          )}
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`${inputClassName} ${
              errors.fullName ? errorClassName : ''
            }`}
            type="text"
          />
          <label
            className={`absolute top-2 left-3 text-[11px] z-10 font-semibold ${
              errors.fullName ? 'text-red' : 'text-dgray'
            }`}
          >
            Full Name *
          </label>
        </div>

        <div
          className={`relative mt-4 ${errors.email ? 'indicator w-full' : ''}`}
        >
          {errors.email && (
            <span className="indicator-item badge badge-error text-base-100 -mt-2 mr-2 text-xs text-bold z-20">
              {errors.email}
            </span>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClassName} ${
              errors.email ? errorClassName : ''
            }`}
            type="email"
          />
          <label
            className={`absolute top-2 left-3 text-[11px] font-semibold z-10 ${
              errors.email ? 'text-red' : 'text-dgray'
            }`}
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
        {errors.phone && (
          <span className="text-red text-xs">{errors.phone}</span>
        )}

        <div
          className={`relative mt-4 ${errors.email ? 'indicator w-full' : ''}`}
        >
          {errors.subject && (
            <span className="indicator-item badge badge-error text-base-100 mt-1 mr-2 text-xs text-bold z-20">
              {errors.subject}
            </span>
          )}
          <input
            className={`placeholder-dgray font-medium text-[13px] w-full h-auto focus:outline-none border-lblue rounded-lg border ${
              errors.subject ? 'border-red' : 'border-gray-200'
            } px-2 py-3 mt-4`}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
          />
        </div>
        <div
          className={`relative mt-4 ${errors.email ? 'indicator w-full' : ''}`}
        >
          {errors.message && (
            <span className="indicator-item badge badge-error text-base-100 mt-1 mr-2 text-xs text-bold z-20">
              {errors.message}
            </span>
          )}
          <textarea
            className={`placeholder-dgray font-medium text-[13px] w-full h-auto focus:outline-none border-lblue rounded-lg border ${
              errors.message ? 'border-red' : 'border-gray-200'
            } px-2 py-3 mt-4`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols={30}
            rows={10}
            placeholder="Message *"
          />
        </div>
      </form>
      <p className="flex justify-end mt-2 text-black-50 text-[14px] font-medium text-mont">
        {formData.message.length} / 999
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
