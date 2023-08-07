import React from 'react';

function Donat() {
  return (
    <div className="lg:w-1/5 w-11/12 h-auto bg-l2gray">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <div className="flex items-center">
          <img
            className="mr-2"
            src="./Icons/icon_plus-cirle.svg"
            alt="icon_plus-cirle"
          />
          <h2 className="text-mont text-l2black text-lg font-bold flex">
            Donation Added
          </h2>
        </div>
        <button className="text-nblue text-lg">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-4">
        <p className="text-mont text-base text-l2black font-semibold mt-4">
          You are donating to <span className="text-orange">3 causes</span>
        </p>
        <div className="w-full h-auto">
          <div className="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-lg mt-6 relative">
            <div className="w-2/3 h-auto">
              <h3 className="text-mont text-xs text-l3black font-semibold">
                Sponsor a child for one year
              </h3>
              <p className="text-mont text-xs text-gray">
                MOST NEEDED, DONATION
              </p>
            </div>
            <div className="w-1/3 h-auto flex flex-col justify-between items-end">
              <p className="text-mont text-xs text-l3black font-bold">
                £360.00
              </p>
              <button>
                <img src="./Icons/icon_times.svg" alt="icon_times" />
              </button>
            </div>
            <div className="p-2 rounded-lg bg-green absolute -top-4 causes">
              <p className="text-mont text-xs text-white font-bold">Single</p>
            </div>
          </div>
          <div className="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-lg mt-8 relative">
            <div className="w-2/3 h-auto">
              <h3 className="text-mont text-xs text-l3black font-semibold">
                Water Solutions <br /> (Sadaqah Jariyah)
              </h3>
              <p className="text-mont text-xs text-gray">
                MOST NEEDED, DONATION
              </p>
            </div>
            <div className="w-1/3 h-auto flex flex-col justify-between items-end">
              <p className="text-mont text-xs text-l3black font-bold">£15.00</p>
              <button>
                <img src="./Icons/icon_times.svg" alt="icon_times" />
              </button>
            </div>
            <div className="p-2 rounded-lg bg-green absolute -top-4 causes">
              <p className="text-mont text-xs text-white font-bold">Monthly</p>
            </div>
          </div>
          <div className="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-lg mt-8 relative">
            <div className="w-2/3 h-auto">
              <h3 className="text-mont text-xs text-l3black font-semibold">
                Water Tankers
              </h3>
              <p className="text-mont text-xs text-gray">
                MOST NEEDED, DONATION
              </p>
            </div>
            <div className="w-1/3 h-auto flex flex-col justify-between items-end">
              <p className="text-mont text-xs text-l3black font-bold">£5.00</p>
              <button>
                <img src="./Icons/icon_times.svg" alt="icon_times" />
              </button>
            </div>
            <div className="p-2 rounded-lg bg-green absolute -top-4 causes">
              <p className="text-mont text-xs text-white font-bold">Single</p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto p-4 border-2 border-sblue rounded-lg mt-6">
          <div className="w-full h-auto flex justify-between">
            <p className="text-mont text-sm text-l3black font-semibold">
              DONATIONS
            </p>
            <p className="text-mont text-base text-l3black font-bold">
              £380.00
            </p>
          </div>
          <button className="w-full h-auto p-4 bg-green rounded-lg text-center text-mont text-xs text-white font-bold mt-4">
            ADD DONATION
          </button>
          <button className="w-full h-auto p-4 bg-sblue rounded-lg text-center text-mont text-xs text-white font-bold mt-4">
            CHECKOUT
          </button>
        </div>
        <div className="w-full h-auto flex justify-center mt-4">
          <img
            className="w-1/5"
            src="./logo/logo_aid-humanity-icon.svg"
            alt="logo_aid-humanity-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Donat;
