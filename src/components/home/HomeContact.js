import React, { useState } from 'react';
import HomeService from '../../services/home';
import { toast } from 'react-toastify';
import ButtonLoader from '../common/ButtonLoader';

const HomeContact = () => {
  const [register, setregister] = React.useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = async event => {
    event.preventDefault();

    // Call the contactUs method
    const payload = {
      purpose: register ? 'register' : 'fundraiser',
      full_name: name,
      email,
      message,
      subject: 'home page query',
    };
    try {
      setLoading(true);
      const data = await HomeService.contactUs({ contact_us_query: payload });
      if (data) {
        setEmail('');
        setName('');
        setMessage('');
        setregister(true);
        toast.success('We will contact you soon!');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full h-auto bg-yellow">
      <div className="container mx-auto">
        <div className="lg:w-3/5 w-11/12 mx-auto h-auto lg:pt-16 lg:pb-20 py-12">
          <div className="w-full h-auto" data-aos="zoom-in">
            <h1 className="text-3xl text-mont text-black-50 font-bold">
              Contact Us
            </h1>
          </div>
          <div className="w-full h-auto mt-12 flex lg:flex-row flex-col lg:gap-12 gap-8">
            <div className="lg:w-2/5 w-full h-auto">
              <div
                onClick={() => setregister(true)}
                className={
                  !register
                    ? 'w-full h-auto border-2 rounded-xl cursor-pointer border-dgray border-opacity-50 p-4'
                    : 'w-full h-auto border-2 rounded-xl cursor-pointer bg-white border-black p-4'
                }
              >
                <div className="w-full h-auto flex justify-between items-center">
                  <h3
                    className="text-lg text-black-50 text-mont font-bold flex items-center contact-radio
                              "
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      checked={register}
                    />{' '}
                    Register
                  </h3>
                  <img src="./Icons/user plus.svg" alt="user_plus" />
                </div>
                <p className="text-gray-600 text-mont text-mont text-base mt-4">
                  I want to help Aid Humanity and receive future appeals
                </p>
              </div>
              <div
                onClick={() => setregister(false)}
                className={
                  register
                    ? 'w-full h-auto border-2 rounded-xl cursor-pointer border-dgray border-opacity-50 mt-4 p-4'
                    : 'w-full h-auto border-2 rounded-xl cursor-pointer bg-white border-lblack p-4 mt-4'
                }
              >
                <div className="w-full h-auto flex justify-between items-center">
                  <h3 className="text-lg text-black-50 text-mont flex items-center font-bold contact-radio">
                    <input
                      className="mr-2"
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      checked={!register}
                    />{' '}
                    Fundraiser
                  </h3>
                  <img src="./Icons/Group 15461.svg" alt="Group 15461" />
                </div>
                <p className="text-gray-600 text-mont text-mont text-base mt-4">
                  Become a fundraiser and kick start your own Charity appeal
                </p>
              </div>
            </div>
            <div className="lg:w-3/5 w-full h-auto">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border border-lblack rounded-lg px-2 py-4 placeholder-black focus:outline-none"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name & Surname *"
                  onChange={e => setName(e.target.value)}
                />
                <input
                  className="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border border-lblack rounded-lg px-2 py-4 mt-4 placeholder-black focus:outline-none"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email *"
                  onChange={e => setEmail(e.target.value)}
                />
                <textarea
                  className="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border border-lblack rounded-lg px-2 py-4 mt-4 placeholder-black focus:outline-none"
                  name="message"
                  value={message}
                  cols="30"
                  rows="5"
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Please provide as much detailed information as possible. Thank you *"
                >
                  Please provide as much detailed information as possible. Thank
                  you *
                </textarea>
                <ButtonLoader
                  className="lg:w-auto w-full text-xs text-mont text-black-50 font-bold rounded-lg bg-green hover:bg-mgreen text-center px-12 py-4 mt-4"
                  loading={loading}
                >
                  SUBMIT MESSAGE
                </ButtonLoader>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
