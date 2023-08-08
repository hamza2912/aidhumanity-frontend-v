import React from 'react';
import { Link } from 'react-router-dom';

const ShareModal = ({ setshowModal }) => {
  return (
    <>
      <div className="dimmer"></div>
      <div className="messageBox2 lg:w-2/5 w-full lg:h-auto h-screen bg-white lg:rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="w-full lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center border-b border-gray-400">
          <h1 className="font-bold lg:text-2xl text-xl text-black-50">
            Share your page
          </h1>
          <button onClick={() => setshowModal(false)} className="z-10">
            <img src="images/icons/icon_times-circle.svg" alt="Close Icon" />
          </button>
        </div>
        <div className="lg:px-10 px-6 lg:py-8 py-6">
          <p className="text-xs text-gray-400">
            Sharing your page on Facebook will help you get supporters on board
            and raise more for your cause.
          </p>
          <div className="w-full flex flex-col gap-2 mt-8">
            <button className="w-full h-12 flex justify-center items-center gap-2 bg-blue-20 text-white rounded-md z-10">
              <i className="fa-brands fa-facebook-f mb-1 text-lg"></i>
              <p className="font-medium text-xs">Share on Facebook</p>
            </button>
            <button className="w-full h-12 flex justify-center items-center gap-2 bg-blue text-white rounded-md z-10">
              <i className="fa-brands fa-twitter mb-1 text-xl"></i>
              <p className="font-medium text-xs">Twitter</p>
            </button>
            <button className="w-full h-12 flex justify-center items-center gap-2 bg-transparent border border-gray-400 text-black-50 rounded-md z-10">
              <i className="fa-regular fa-envelope-open text-base mb-1"></i>
              <p className="font-medium text-xs">Email</p>
            </button>
          </div>
          <Link to="">
            <p className="text-blue text-xs font-bold mt-2 text-center mt-5">
              Skip
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
