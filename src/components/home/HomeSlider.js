import React from 'react';

const HomeSlider = () => {
  return (
    <section className="w-full h-auto landing-page relative">
      <div className="w-full h-auto flex lg:flex-row flex-col py-20 group15343 container mx-auto lg:px-16 px-6 relative">
        <div className="lg:w-1/2 w-full h-auto">
          <div>
            <button className="text-center text-sm text-mont font-medium text-white border-2 border-white rounded-lg px-2 py-1">
              Water for all
            </button>
          </div>
          <div className="mt-2">
            <h1 className="lg:text-6xl text-4xl text-mont font-bold text-white shadow-2">
              Build
            </h1>
            <h1 className="lg:text-6xl text-4xl text-mont font-bold text-white shadow-2">
              a water well
            </h1>
          </div>
          <div className="mt-4 pr-2 hidden lg:flex">
            <p className="text-white text-lg text-mont">
              1 in 3 people around the world do not have access to clean
              drinking water. Women and children often walk for miles each day
              to collect water to drink, denying them the opportunity to go to
              school, to work and to thrive.
            </p>
          </div>
          <div className="mt-10 flex flex-row">
            <div className="lg:w-1/3 w-1/2 h-auto">
              <button
                id="cursor-pointer"
                className="lg:text-sm text-xs font-bold text-white text-mont bg-sblue rounded-lg p-4"
              >
                DONATE NOW <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
            <div className="w-1/2 h-auto flex items-center">
              <h3 className="text-lg text-mont text-fyellow shadow-2">from</h3>
              <h2 className="ml-2 text-lg text-mont text-fyellow font-bold shadow-2">
                £140
              </h2>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-auto hidden lg:flex items-center justify-center text-mont">
          <div className="w-40">
            <div>
              <p className="text-2xl text-white">we transfer</p>
            </div>
            <div>
              <img src="./Icons/logo_100percent.svg" alt="100%" />
            </div>
            <div>
              <p className="text-base text-white">of your donation</p>
            </div>
          </div>
        </div>
        <div className="h-auto hidden lg:flex flex-row justify-between absolute -bottom-12 w-auto gap-10 right-20">
          <div className="w-80 h-auto rounded-b-2xl shadow-2xl">
            <div>
              <img src="./images/Pakistan Floods 2022.png" alt="flood" />
            </div>
            <div className="p-4 text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl">
              <a className="flex flex-row justify-between" href="">
                Pakistan Floods
                <i className="fa-solid fa-arrow-right text-blue" />
              </a>
            </div>
          </div>
          <div className="w-80 h-auto rounded-b-2xl shadow-2xl">
            <div>
              <img src="./images/maxresdefault.png" alt="flood2" />
            </div>
            <div className="p-4 text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl">
              <a className="flex flex-row justify-between" href="">
                Support an Orphaned Child
                <i className="fa-solid fa-arrow-right text-blue" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <a className="bg-white py-2 lg:pr-4 pr-2 lg:pl-2 h-10 rounded-r-full absolute top-0 bottom-0 my-auto left-0 hidden lg:block">
        <i className="fa-solid fa-arrow-left lg:text-base text-xs" />
      </a>
      <a className="bg-white py-2 lg:pl-4 pl-2 lg:pr-2 h-10 rounded-l-full absolute top-0 bottom-0 my-auto right-0 hidden lg:block">
        <i className="fa-solid fa-arrow-right lg:text-base text-xs" />
      </a>
    </section>
  );
};

export default HomeSlider;
