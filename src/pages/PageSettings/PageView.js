import React from 'react';
import Dashboard_header from '../Dashboard/DashboardHeader';
import Dashboard_footer2 from '../../components/DashboardFooter2';
import Share_modal from '../../components/modal/ShareModal';

const PageView = () => {
  const [showShareModal, setshowShareModal] = React.useState(false);

  return (
    <div>
      <Dashboard_header />
      <div className="w-full bg-bwhite flex lg:flex-row flex-col justify-center py-8 lg:px-20 container mx-auto px-4">
        <div className="flex justify-between items-center lg:w-2/3 w-full">
          <div className="flex items-center gap-4">
            <div className="lg:w-24 w-20 lg:h-24 bg-blue-dark rounded-full">
              <img
                className="w-20 -mt-1 mx-auto"
                src="images/icons/dashboard/illustration_rocket.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black-50 font-bold text-lg">
                Ready for take-off?
              </h1>
              <p className="text-gray">
                Share your page to get your first supporters.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col flex-row gap-3 lg:w-40 justify-center mt-6 lg:mt-0">
          <button class="w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-5 py-3">
            PERSONALIZE
          </button>
          <button className="w-full py-3 text-xs text-white bg-blue rounded-md font-medium z-10">
            LOG IN
          </button>
        </div>
      </div>
      <div className="bg-white py-3 flex justify-center">
        <button className="lg:w-auto w-4/5 border-2 border-gray-200 text-gray-400 py-2 px-3 font-semibold text-sm rounded-lg mt-2 z-10">
          EDIT YOUR PAGE
        </button>
      </div>
      <div className="bg-gray lg:px-20 container mx-auto px-4 pt-8 lg:pb-20 pb-8 flex lg:flex-row flex-col gap-4">
        <div className="lg:w-2/3 w-full page-section">
          <div className="bg-white rounded-t-xl w-full">
            <div className="lg:px-6 px-4 py-8 flex justify-between">
              <div className="flex flex-col">
                <p className="text-gray-600 mt-4 text-sm">Water for All</p>
                <h2 className="text-3xl text-black-50 font-bold">
                  Water Hands Pumps
                </h2>
                <p class="mt-2 text-gray-600 text-mont text-xs">
                  fundraised by{' '}
                  <span class="text-blue font-semibold">
                    <i class="fa-regular fa-circle-user"></i> Ron Hill
                  </span>
                </p>
              </div>
              <img class="" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
            </div>
            <img className="w-full" src="./images/36404f884e192.png" alt="" />
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">Story</h2>
              <p className="text-gray-600 mt-4">
                1 in every 3 people around the world do not have clean water to
                drink. Millions are forced to drink dirty, unsafe water that
                could kill them, and is spreading deadly diseases among
                vulnerable communities. Women and children are forced to walk
                miles each day on dangerous terrain to fetch clean water, when
                they should be at home, at school, thriving and content. In
                2016, UNICEF estimated that 200 million hours a day are spent by
                women and girls around the world just collecting water. A water
                donation is one of the greatest things you can do with your
                charity this Ramadan.
              </p>
            </div>
          </div>
          <div className="bg-white w-full rounded-b-xl">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">About</h2>
              <p className="text-gray-600 mt-4">
                1 in every 3 people around the world do not have clean water to
                drink. Millions are forced to drink dirty, unsafe water that
                could kill them, and is spreading deadly diseases among
                vulnerable communities. Women and children are forced to walk
                miles each day on dangerous terrain to fetch clean water, when
                they should be at home, at school, thriving and content. In
                2016, UNICEF estimated that 200 million hours a day are spent by
                women and girls around the world just collecting water. A water
                donation is one of the greatest things you can do with your
                charity this Ramadan.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div class="rounded-xl bg-white">
            <div class="w-full h-auto p-6">
              <div className="w-full flex justify-between items-start">
                <div className="flex flex-col">
                  <h1 class="text-black-50 text-3xl text-mont font-bold">
                    £34
                  </h1>
                  <p className="text-gray-600 lg:text-base text-xs">
                    raised of{' '}
                    <span className="text-blue font-semibold"> £6.200</span>{' '}
                    target
                  </p>
                </div>
                <div className="w-28 h-28 bg-blue-dark rounded-full flex flex-col justify-center items-center relative">
                  <div className="absolute w-full h-1/2 border-b-8 bg-blue-blend bottom-px border-blue rounded-b-full"></div>
                  <p className="font-bold text-2xl z-10 text-white">50%</p>
                </div>
              </div>
              <div className="mt-6 w-full flex justify-between items-center">
                <p class="mt-2 text-gray-600 text-mont text-xs">
                  fundraised by{' '}
                  <span class="text-nblue font-semibold">
                    <i class="fa-regular fa-circle-user"></i> Ron Hill
                  </span>
                </p>
                <p className="text-mont text-xs text-red-400 font-semibold flex items-center gap-2">
                  <svg
                    className="w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.547"
                    height="21.222"
                    viewBox="0 0 18.547 21.222"
                  >
                    <g id="icon_stopwatch" transform="translate(0.75 0.75)">
                      <g
                        id="Group_4211"
                        data-name="Group 4211"
                        transform="translate(-0.637 -0.637)"
                      >
                        <circle
                          id="Ellipse_1778"
                          data-name="Ellipse 1778"
                          cx="8.49"
                          cy="8.49"
                          r="8.49"
                          transform="translate(0.637 3.38)"
                          fill="none"
                          stroke="#fd4949"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_1320"
                          data-name="Line 1320"
                          x2="6.313"
                          transform="translate(5.97 0.637)"
                          fill="none"
                          stroke="#fd4949"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_1321"
                          data-name="Line 1321"
                          y1="1.264"
                          x2="1.44"
                          transform="translate(15.936 5.47)"
                          fill="none"
                          stroke="#fd4949"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_1322"
                          data-name="Line 1322"
                          y2="2.382"
                          transform="translate(9.126 0.637)"
                          fill="none"
                          stroke="#fd4949"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_1323"
                          data-name="Line 1323"
                          y2="5.044"
                          transform="translate(9.126 8.203)"
                          fill="none"
                          stroke="#fd4949"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  Ends in 161 days
                </p>
              </div>
              <button class="w-full h-auto bg-green mt-4 py-4 rounded-lg text-center">
                <p class="text-sm text-mont text-black-50 font-bold">DONATE</p>
              </button>
              <button
                onClick={() => setshowShareModal(true)}
                className="w-full border-2 border-gray-200 text-gray-400 py-4 px-3 font-semibold text-sm rounded-lg mt-2 z-10"
              >
                <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dashboard_footer2 active="view" />
      {showShareModal ? (
        <Share_modal
          showModal={showShareModal}
          setshowModal={setshowShareModal}
        />
      ) : null}
    </div>
  );
};

export default PageView;
