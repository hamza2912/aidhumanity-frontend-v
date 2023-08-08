import React from 'react';

function Jummah() {
  const [amount, setamount] = React.useState('30');

  return (
    <div className="lg:w-1/5 w-11/12 h-auto bg-sblue">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <h2 className="text-mont text-nblue text-lg font-bold">
          Add your donation
        </h2>
        <button className="text-nblue text-lg">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-4">
        <h2 className="text-mont text-xl text-white font-bold">
          Jummah Giving
        </h2>
        <p className="text-mont text-sm text-white mt-4">
          Jummah Giving is an amazing opportunity to maximise the Blessings of
          Jummah.
        </p>
        <div className="w-full h-auto p-4 bg-white rounded-2xl mt-6">
          <button className="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">
            Recurring <br /> Payment
          </button>
          <h3 className="text-mont text-sm text-lblack font-bold mt-4">
            Choose your Cause
          </h3>
          <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src="./Icons/icon_needy.svg" alt="icon_needy" />
            Most Needy
          </button>
          <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src="./Icons/icon_education.svg" alt="icon_education" />
            Qur’an
          </button>
          <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src="./Icons/icon_hungry.svg" alt="icon_hungry" />
            Food
          </button>
          <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src="./Icons/icon_water.svg" alt="icon_water" />
            Water Well
          </button>
          <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <img src="./Icons/icon_sadaqah.svg" alt="icon_sadaqah" />
            Sadaqah
          </button>
          <h3 className="text-mont text-sm text-lblack font-bold mt-4">
            Amount
          </h3>
          <div className="w-full h-auto mt-4 flex rounded-lg border border-lgray bg-white">
            <div
              onClick={() => {
                setamount('10');
              }}
              className={
                amount === '10'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue rounded-l-lg text-white border-r border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£10</p>
            </div>
            <div
              onClick={() => {
                setamount('20');
              }}
              className={
                amount === '20'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£20</p>
            </div>
            <div
              onClick={() => {
                setamount('30');
              }}
              className={
                amount === '30'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£30</p>
            </div>
            <div
              onClick={() => {
                setamount('50');
              }}
              className={
                amount === '50'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue rounded-r-lg text-white border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£50</p>
            </div>
          </div>
          <div className="relative">
            <label className="text-mont text-dgray text-xs font-medium absolute left-2 top-2">
              Number of Fridays
            </label>
            <select
              className="w-full h-auto pt-5 pb-2 px-2 flex mt-4 justify-between border border-owhite font-medium text-black-50 rounded-lg focus:outline-none"
              name=""
              id=""
            >
              <option value="">1</option>
            </select>
          </div>
          <button className="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4">
            ADD DONATION
          </button>
        </div>
      </div>
      <img
        src="./images/logo_aid-humanity-icon.png"
        alt="logo_aid-humanity-icon"
      />
    </div>
  );
}

export default Jummah;
