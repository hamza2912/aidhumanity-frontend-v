import React, { useState } from 'react';
import Switch from './switch/switch';
import ContactService from '../services/contact';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async () => {
    const { fullName, ...otherData } = formData;
    const data = await ContactService.contactUs({
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
        <div
          className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
          action=""
        >
          <label
            className="text-mont text-dgray text-xs font-semibold"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div
          className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
          action=""
        >
          <label
            className="text-mont text-dgray text-xs font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full h-auto focus:outline-none border rounded-lg border-lgray p-2 mt-4"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone *"
        />
        <input
          className="w-full h-auto focus:outline-none border rounded-lg border-lgray p-2 mt-4"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject *"
        />
        <textarea
          className="w-full h-auto focus:outline-none border rounded-lg border-lgray p-2 mt-4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          cols={30}
          rows={10}
          placeholder="Message *"
        />
      </form>
      <p className="flex justify-end mt-2 text-black-50 text-sm font-medium text-mont">
        0/999
      </p>
      <div className="flex items-center gap-2">
        <Switch type="dashboard" />
        <p class="text-black-50 text-mont lg:text-xs text-vs font-medium flex">
          I agree to{' '}
          <a class="font-semibold text-blue mx-1" href="">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a class="font-semibold text-blue mx-1" href="">
            Privacy Policy
          </a>
        </p>
      </div>
      <button
        class="w-full h-auto bg-sblue rounded-lg text-white text-xs text-mont font-bold py-4 mt-4"
        onClick={handleSubmit}
      >
        {loading ? 'SUBMITING ...' : 'Submit'}
      </button>
    </>
  );
};
