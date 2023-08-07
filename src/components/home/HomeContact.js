import React, { useState } from 'react';
import HomeService from '../../services/home';
import { toast } from 'react-toastify';

const HomeContact = () => {
  const [register, setregister] = React.useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    // Call the contactUs method
    const payload = {
      purpose: register ? 'register' : 'fundraiser',
      name,
      email,
      message,
    };
    try {
      const data = await HomeService.contactUs(payload);
      if (data) {
        setEmail('');
        setName('');
        setMessage('');
        setregister(true);
        toast.success('We will contact you soon!');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="w-full h-auto bg-yellow">
      <div className="container mx-auto">
        <div className="lg:w-3/5 w-11/12 mx-auto h-auto py-16">
          <div className="w-full h-auto" data-aos="zoom-in">
            <h1 className="text-3xl text-mont text-black-50 font-bold">
              Contact Us
            </h1>
          </div>
          <div className="w-full h-auto mt-8 flex lg:flex-row flex-col">
            <div className="lg:w-1/3 w-full h-auto">
              <div
                className={
                  !register
                    ? 'w-full h-auto border-2 rounded-xl border-dgray border-opacity-50 p-4'
                    : 'w-full h-auto border-2 rounded-xl bg-white border-black p-4'
                }
              >
                <div className="w-full h-auto flex justify-between items-center">
                  <h3
                    className="text-lg text-black-50 text-mont font-bold flex items-center
                              "
                  >
                    <input
                      className="mr-2"
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      checked={register}
                      onChange={() => setregister(true)}
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
                className={
                  register
                    ? 'w-full h-auto border-2 rounded-xl border-dgray border-opacity-50 mt-4 p-4'
                    : 'w-full h-auto border-2 rounded-xl bg-white border-lblack p-4 mt-4'
                }
              >
                <div className="w-full h-auto flex justify-between items-center">
                  <h3 className="text-lg text-black-50 text-mont flex items-center font-bold">
                    <input
                      className="mr-2"
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      checked={!register}
                      onChange={() => setregister(false)}
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
            <div className="lg:w-2/3 w-full h-auto lg:px-4 mt-6 lg:mt-0">
              <form onSubmit={handleSubmit}>
                <input
                  className="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border-2 border-lblack rounded-lg p-2 placeholder-black focus:outline-none"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Name & Surname *"
                  onChange={e => setName(e.target.value)}
                />
                <input
                  className="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border-2 border-lblack rounded-lg p-2 mt-4 placeholder-black focus:outline-none"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email *"
                  onChange={e => setEmail(e.target.value)}
                />
                <textarea
                  className="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border-2 border-lblack rounded-lg p-2 mt-4 placeholder-black focus:outline-none"
                  name="message"
                  value={message}
                  cols="30"
                  rows="10"
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Please provide as much detailed information as possible. Thank you *"
                >
                  Please provide as much detailed information as possible. Thank
                  you *
                </textarea>
                <button className="lg:w-auto w-full text-xs text-mont text-black-50 font-bold rounded-lg bg-green hover:bg-mgreen text-center px-12 py-4 mt-4">
                  SUBMIT MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
