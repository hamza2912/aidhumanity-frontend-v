import './modal.css';
import React from 'react';

const AppealShare = ({ setshowModal }) => {
  return (
    <div className="modal">
      <div className="dimmer"></div>
      <div className="messageBox lg:w-2/5 w-full lg:h-auto h-screen bg-white flex lg:flex-row flex-col-reverse lg:justify-between justify-end gap-2 px-6 py-8 lg:rounded-2xl">
        <button className="absolute right-6 top-6 z-10">
          <img
            src="/Icons/icon_times-circle.svg"
            alt="Close Icon"
            onClick={() => {
              setshowModal(false);
            }}
          />
        </button>
        <div className="lg:w-2/3 w-full h-auto">
          <h1 className="text-mont lg:text-4xl text-3xl text-lblack font-bold">
            Share with <br /> friends is powerfull
          </h1>
          <p className="text-mont text-base text-l2black mt-4">
            Sharing this page with your friends could help Ron Hill raise over
            3x more in donations
          </p>
          <button className="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md mt-4">
            <i className="mr-1 fa-sharp fa-solid fa-share-nodes text-sm"></i> SHARE
          </button>
          <div
            className="w-full h-auto mt-4"
            onClick={() => setshowModal(false)}
          >
            <p className="text-mont text-xs text-dblue font-bold text-center cursor-pointer">
              Now now, maybe later
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 w-full h-auto flex items-center">
          <img
            className="mx-auto"
            src="/Icons/illustration_share-link.svg"
            alt="illustration_share-link"
          />
        </div>
      </div>
    </div>
  );
};

export default AppealShare;
