import React from 'react';

function Acheivement() {
  return (
    <section className="w-full h-auto mt-16 bg-gray-10">
      <div className="w-full h-auto px-5 pt-16 pb-10 container mx-auto">
        <div className="w-full h-auto text-center">
          <h2 className="text-mont text-black-50 text-3xl font-medium">
            <span className="text-mont text-black-50 text-3xl font-bold">
              Our Achievements
            </span>{' '}
            with your help and more …
          </h2>
        </div>
        <div className="owl-carousel owl-theme achievements-carousel mt-16 grid justify-between">
          <div className="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
            <h3 className="text-sm text-mont text-black-50 font-bold flex">
              <div className="w-5 mr-2">
                <img
                  src="./Icons/icon_check-circle.svg"
                  alt="icon_check-circle"
                />
              </div>{' '}
              Gift a Water Hand Pump
            </h3>
            <p className="text-xs text-mont text-sblue font-semibold mt-2">
              Raised:{' '}
              <span className="text-2xl text-mont text-sblue font-semibold">
                £243
              </span>
            </p>
            <p className="text-xs text-mont text-gray-600 font-medium">
              crowded March 20, 2021 by{' '}
              <i className="fa-regular fa-circle-user" />{' '}
              <span className="font-semibold">361 supporters</span>
            </p>
          </div>
          <div className="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
            <h3 className="text-sm text-mont text-black-50 font-bold flex">
              <div className="w-5 mr-2">
                <img
                  src="./Icons/icon_check-circle.svg"
                  alt="icon_check-circle"
                />
              </div>{' '}
              Pakistan Floods 2022 Emergency
            </h3>
            <p className="text-xs text-mont text-sblue font-semibold mt-2">
              Raised:{' '}
              <span className="text-2xl text-mont text-sblue font-semibold">
                £832
              </span>
            </p>
            <p className="text-xs text-mont text-gray-600 font-medium">
              crowded March 18, 2021 by{' '}
              <i className="fa-regular fa-circle-user" />{' '}
              <span className="font-semibold">113 supporters</span>
            </p>
          </div>
          <div className="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
            <h3 className="text-sm text-mont text-black-50 font-bold flex">
              <div className="w-5 mr-2">
                <img
                  src="./Icons/icon_check-circle.svg"
                  alt="icon_check-circle"
                />
              </div>{' '}
              Feed a Child
            </h3>
            <p className="text-xs text-mont text-sblue font-semibold mt-2">
              Raised:{' '}
              <span className="text-2xl text-mont text-sblue font-semibold">
                £463
              </span>
            </p>
            <p className="text-xs text-mont text-gray-600 font-medium">
              crowded February 20, 2021 by{' '}
              <i className="fa-regular fa-circle-user" />{' '}
              <span className="font-semibold">75 supporters</span>
            </p>
          </div>
          <div className="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
            <h3 className="text-sm text-mont text-black-50 font-bold flex">
              <div className="w-5 mr-2">
                <img
                  src="./Icons/icon_check-circle.svg"
                  alt="icon_check-circle"
                />
              </div>{' '}
              Yemen Emergency
            </h3>
            <p className="text-xs text-mont text-sblue font-semibold mt-2">
              Raised:{' '}
              <span className="text-2xl text-mont text-sblue font-semibold">
                £573
              </span>
            </p>
            <p className="text-xs text-mont text-gray-600 font-medium">
              crowded January 3, 2021 by{' '}
              <i className="fa-regular fa-circle-user" />{' '}
              <span className="font-semibold">6 supporters</span>
            </p>
          </div>
          <div className="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
            <h3 className="text-sm text-mont text-black-50 font-bold flex">
              <div className="w-5 mr-2">
                <img
                  src="./Icons/icon_check-circle.svg"
                  alt="icon_check-circle"
                />
              </div>{' '}
              Yemen Emergency
            </h3>
            <p className="text-xs text-mont text-sblue font-semibold mt-2">
              Raised:{' '}
              <span className="text-2xl text-mont text-sblue font-semibold">
                £573
              </span>
            </p>
            <p className="text-xs text-mont text-gray-600 font-medium">
              crowded January 3, 2021 by{' '}
              <i className="fa-regular fa-circle-user" />{' '}
              <span className="font-semibold">6 supporters</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acheivement;
