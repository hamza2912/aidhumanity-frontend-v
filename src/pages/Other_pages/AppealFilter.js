import React from 'react';

function AppealFilter() {
  return (
    <section className="w-full h-auto container mx-auto px-5 lg:mt-12 mt-4">
      <div className="w-full h-auto lg:flex hidden gap-2">
        <a className="text-base text-mont text-gray" href="">
          Home
        </a>
        <p className="text-base text-mont text-gray">/</p>
        <a className="text-base text-mont text-gray" href="">
          Appeals
        </a>
      </div>
      <div className="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 mt-6">
        <div className="lg:w-1/2 w-full h-auto">
          <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
            Appeals
          </h1>
        </div>
        <div className="w-1/2 h-auto hidden lg:flex justify-between">
          <p
            className="text-sm text-mont text-black-50 font-medium flex items-center"
            href=""
          >
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              classname="w-5 h-5 mr-2"
            />{' '}
            All
          </p>
          <p
            className="text-sm text-mont text-black-50 font-medium flex items-center"
            href=""
          >
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              classname="w-5 h-5 mr-2"
            />{' '}
            Zakat
          </p>
          <p
            className="text-sm text-mont text-black-50 font-medium flex items-center"
            href=""
          >
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              classname="w-5 h-5 mr-2"
            />{' '}
            Sadhaka
          </p>
          <p
            className="text-sm text-mont text-black-50 font-medium flex items-center"
            href=""
          >
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              classname="w-5 h-5 mr-2"
            />{' '}
            Sadhaka Jaraiyah
          </p>
          <p
            className="text-sm text-mont text-black-50 font-medium flex items-center"
            href=""
          >
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              classname="w-5 h-5 mr-2"
            />{' '}
            Our fundraiser
          </p>
        </div>
      </div>
      <div className="w-full h-auto hidden lg:flex gap-4 items-center border-b border-lgray pt-2 lg:pb-12 py-2  p-4 lg:p-0">
        <button className="text-black-50 shadow-lg bg-white border border-sblue text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
          All
        </button>
        <button className="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
          <img
            className="mr-3"
            src="./Icons/icon_mosque.svg"
            alt="icon_mosque"
          />{' '}
          Build a Mosque
        </button>
        <button className="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
          <img
            className="mr-3"
            src="./Icons/icon_emergency-color.svg"
            alt="icon_emergency-color"
          />{' '}
          Disaster & Emergency Appeals
        </button>
        <button className="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
          <img className="mr-3" src="./Icons/icon_water.svg" alt="icon_water" />{' '}
          Water for All
        </button>
        <button className="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
          <img
            className="mr-3"
            src="./Icons/icon_orphan-color.svg"
            alt="icon_orphan-color.svg"
          />{' '}
          Sponsor an Orphan
        </button>
        <button className="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
          <img
            className="mr-3"
            src="./Icons/icon_hungry.svg"
            alt="icon_hungry"
          />{' '}
          Hunger Appeal
        </button>
      </div>
    </section>
  );
}

export default AppealFilter;
