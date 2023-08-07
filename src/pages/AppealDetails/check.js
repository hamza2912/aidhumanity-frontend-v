import React from 'react';

function Check() {
  return (
    <div className="lg:w-1/5 w-11/12 h-auto bg-nblue">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <div className="flex items-center">
          <img
            className="mr-2"
            src="./Icons/icon_cash-register.svg"
            alt="icon_cash-register"
          />
          <h2 className="text-mont text-white text-lg font-bold flex">
            Checkout
          </h2>
        </div>
        <button className="text-white text-lg">
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-4">
        <h1 className="text-mont text-white text-base font-semibold mt-6">
          Help us further
        </h1>
        <div className="w-full h-auto flex justify-between px-2 py-3 mt-4 rounded-xl bg-pink cursor-pointer">
          <div className="w-full h-auto flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.5"
              height="19.5"
              viewBox="0 0 19.5 19.5"
            >
              <g id="icon_check-circle" transform="translate(0.75 0.75)">
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="9"
                  cy="9"
                  r="9"
                  fill="none"
                  stroke="#1D1D1D"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
                <g
                  id="icon-check"
                  transform="translate(6 7.417)"
                  opacity="0.253"
                >
                  <path
                    id="Path_263"
                    data-name="Path 263"
                    d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                    transform="translate(-291.914 -551.523)"
                    fill="none"
                    stroke="#1D1D1D"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
            <img
              src="./Icons/illustration_admin-love.svg"
              alt="illustration_admin-love"
            />
            <h3 className="text-xs text-mont text-black-50 font-semibold">
              Donate to Admin <br /> cost 1.5%
            </h3>
          </div>
          <div className="w-1/3 h-auto flex items-center justify-end">
            <p className="text-mont text-xs text-black-50 font-bold">£10</p>
          </div>
        </div>
        <div className="w-full h-auto flex justify-between px-2 py-4 mt-4 rounded-xl bg-green cursor-pointer">
          <div className="w-full h-auto flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.5"
              height="19.5"
              viewBox="0 0 19.5 19.5"
            >
              <g id="icon_check-circle" transform="translate(0.75 0.75)">
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="9"
                  cy="9"
                  r="9"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
                <g
                  id="icon-check"
                  transform="translate(6 7.417)"
                  opacity="0.253"
                >
                  <path
                    id="Path_263"
                    data-name="Path 263"
                    d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                    transform="translate(-291.914 -551.523)"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
            <h3 className="text-sm text-mont text-white font-semibold">
              Rescue a street child
            </h3>
          </div>
          <div className="w-1/3 h-auto flex items-center justify-end">
            <p className="text-mont text-xs text-white font-bold">£360.00</p>
          </div>
        </div>
        <div className="w-full h-auto flex justify-between px-2 py-4 mt-4 rounded-xl bg-green cursor-pointer">
          <div className="w-full h-auto flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.5"
              height="19.5"
              viewBox="0 0 19.5 19.5"
            >
              <g id="icon_check-circle" transform="translate(0.75 0.75)">
                <circle
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  cx="9"
                  cy="9"
                  r="9"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
                <g
                  id="icon-check"
                  transform="translate(6 7.417)"
                  opacity="0.253"
                >
                  <path
                    id="Path_263"
                    data-name="Path 263"
                    d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                    transform="translate(-291.914 -551.523)"
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
            <h3 className="text-sm text-mont text-white font-semibold">
              Food pack for a family
            </h3>
          </div>
          <div className="w-1/3 h-auto flex items-center justify-end">
            <p className="text-mont text-xs text-white font-bold">£50.00</p>
          </div>
        </div>
        <div className="w-full h-auto p-4 rounded-lg bg-sblue mt-4">
          <div className="w-full h-auto flex justify-between">
            <p className="text-mont text-sm text-white font-semibold">TOTAL</p>
            <p className="text-mont text-base text-white font-bold">£380.00</p>
          </div>
          <button className="p-4 w-full h-auto text-center rounded-lg bg-white text-mont text-green text-xs font-bold mt-6">
            COMPLETE DONATION<i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Check;
