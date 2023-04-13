import React from 'react';

export const SocialAuth = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-8">
      <button className="w-full h-12 flex justify-center items-center gap-2 bg-blue-20 hover:bg-nblue text-white rounded-md z-10">
        <i className="fa-brands fa-facebook-f mb-1 text-lg"></i>
        <p className="font-medium text-xs">Continue with Facebook</p>
      </button>
      <button className="w-full h-12 flex justify-center items-center gap-2 bg-black text-white rounded-md z-10">
        <i className="fa-brands fa-apple mb-1 text-xl"></i>
        <p className="font-medium text-xs">Continue with Apple</p>
      </button>
      <button className="w-full h-12 flex justify-center items-center gap-2 bg-transparent border border-lgray text-black-50 hover:text-white hover:bg-lgray  rounded-md z-10">
        <img src="/Icons/google.svg" alt="google-img"></img>
        <p className="font-medium text-xs">Continue with Google</p>
      </button>
    </div>
  );
};
