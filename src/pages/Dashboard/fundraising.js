import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';

function Fundraising() {
  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="funds" />
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Fundraising</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-xl w-full">
              <div className="lg:px-6 px-4 py-8">
                <h2 className="text-lg text-black-50 font-bold">
                  Active Pages
                </h2>
                <div className="bg-bwhite rounded-xl py-6 flex justify-center mt-8">
                  <div className="flex gap-2 w-auto px-4">
                    <img
                      src="images/icons/dashboard/icon_info-circle.svg"
                      alt=""
                    />
                    <p className="text-blue lg:text-sm text-xs font-bold">
                      Raising money for a charity? Your donations are being sent
                      to them automatically.
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-between mt-6">
                  <div className="lg:w-1/2 w-full flex gap-4 relative">
                    <img
                      className="w-1/3"
                      src="images/icons/dashboard/funds.png"
                      alt=""
                    />
                    <img
                      className="w-6 h-6 absolute top-0 bottom-0 my-auto left-1/3 -ml-3"
                      src="images/icons/dashboard/badge_zakat.svg"
                      alt=""
                    />
                    <div className="w-1/2 flex flex-col justify-center">
                      <h2 className="text-sm font-bold text-black-50">
                        Pakistan Floods
                      </h2>
                      <p className="text-vs text-gray-300 font-medium mt-2">
                        Disaster & Emergency Appeals
                      </p>
                      <div className="flex justify-between lg:w-1/2 w-2/3 mt-3">
                        <a className="text-sm font-bold text-gray-500" href="">
                          EDIT
                        </a>
                        <div className="h-4 border-l-2"></div>
                        <a className="text-sm font-bold text-gray-500" href="">
                          VIEW
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full flex justify-end gap-4">
                    <div className="flex flex-col justify-center">
                      <p className="text-blue text-sm font-bold">
                        Raised: £156/£634.
                      </p>
                      <p className="text-sm text-gray-400 flex items-center">
                        by{' '}
                        <span className="mx-2">
                          <img
                            src="images/icons/dashboard/icon_user-circle.svg"
                            className="w-4"
                            alt=""
                          />
                        </span>{' '}
                        17 supporters
                      </p>
                    </div>
                    {/* <img className='w-1/5' src="images/icons/dashboard/loader-medium.png" alt="" /> */}
                    <div className="w-28 h-28 bg-blue-dark rounded-full flex flex-col justify-center items-center relative">
                      <div className="absolute w-full h-1/2 border-b-8 bg-blue-blend bottom-px border-blue rounded-b-full"></div>
                      <p className="font-bold text-2xl z-10 text-white">50%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden sm:flex'>
            <Dashboard_footer />
          </div>
        </div>
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>
  );
}

export default Fundraising;
