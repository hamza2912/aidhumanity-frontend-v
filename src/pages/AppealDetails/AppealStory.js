import React from 'react';
import Footer from '../../components/Footer';
import AppealFooter from '../../components/AppealFooter';
import AppealShare from '../../components/modal/AppealShare';
import HeaderAppeal from '../../components/HeaderAppeal';

const AppealStory = () => {
  const [showShare, setshowShare] = React.useState(false);

  return (
    <>
      <HeaderAppeal />
      <main>
        <section className="w-full h-auto pb-16 bg-owhite relative">
          <div className="w-full h-auto container mx-auto lg:px-16 px-5 flex lg:flex-row flex-col gap-8">
            <div className="lg:w-2/3 w-full h-auto bg-white rounded-2xl -mt-24">
              <div className="w-full h-auto lg:hidden px-2 py-4 bg-white rounded-2xl">
                <div className="w-full h-auto flex justify-between">
                  <div className="w-1/2 h-auto">
                    <h2 className="text-mont lg:text-3xl text-2xl text-lblack font-bold">
                      £4.342
                    </h2>
                    <p className="text-mont text-xs font-medium text-gray">
                      raised of{' '}
                      <span className="text-blue font-semibold">£6.200</span>{' '}
                      target
                    </p>
                  </div>
                  <div className="w-1/2 h-auto flex justify-end">
                    <img
                      className=""
                      src="./Icons/loader-large.svg"
                      alt="loader-large"
                    />
                  </div>
                </div>
                <div className="w-full h-auto flex justify-between mt-8">
                  <p className="text-mont text-xs text-l2black font-medium">
                    by{' '}
                    <i className="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                    12 supporters
                  </p>
                  <p className="text-mont text-xs text-orange font-semibold">
                    <i className="mr-1 fa-regular fa-clock"></i> Ends in 161
                    days
                  </p>
                </div>
                <button className="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2">
                  DONATE
                </button>
                <button
                  onClick={() => setshowShare(true)}
                  className="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md mt-2"
                >
                  <i className="mr-1 fa-sharp fa-solid fa-share-nodes"></i>{' '}
                  SHARE
                </button>
              </div>
              <div className="w-full h-auto flex justify-between lg:px-6 px-2 py-4">
                <div className="w-3/4 h-auto">
                  <span className="text-mont text-xs text-lgray font-medium">
                    Water for All
                  </span>
                  <h1 className="text-mont lg:text-4xl text-3xl text-lblack font-bold mt-2">
                    Water Hands Pumps
                  </h1>
                  <p className="text-mont text-l2black text-xs mt-2">
                    fundraised by{' '}
                    <span className="ml-2 text-nblue font-semibold">
                      <i className="fa-regular fa-circle-user text-sm"></i> Ron
                      Hill
                    </span>
                  </p>
                </div>
                <div className="w-1/4 h-auto flex justify-end lg:items-center items-end">
                  <img src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                </div>
              </div>
              <img
                className="w-full h-auto"
                src="./images/Hand-pump.png"
                alt="Hand-pump"
              />
              <div className="w-full h-auto px-6 py-4 mt-2">
                <h2 className="text-mont text-lg text-lblack font-bold">
                  Story
                </h2>
                <p className="text-mont text-xs text-l2black mt-4">
                  1 in every 3 people around the world do not have clean water
                  to drink. Millions are forced to drink dirty,{' '}
                  <sapn className="font-semibold">
                    unsafe water that could kill them
                  </sapn>
                  , and is spreading deadly diseases among vulnerable
                  communities. Women and children are forced to walk miles each
                  day on dangerous terrain to fetch clean water, when they
                  should be at home, at school, thriving and content. In 2016,
                  UNICEF estimated that 200 million hours a day are spent by
                  women and girls around the world just collecting water. A
                  water donation is one of the greatest things you can do with
                  your charity this Ramadan.
                </p>
                <button className="text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2 mt-4">
                  START FUNDRAISING
                </button>
              </div>
              <div className="w-full h-1 bg-owhite my-2"></div>
              <div className="w-full h-auto px-6 py-4 mt-2">
                <h2 className="text-mont text-lg text-lblack font-bold">
                  About
                </h2>
                <p className="text-mont text-xs text-l2black mt-4">
                  1 in every 3 people around the world do not have clean water
                  to drink. Millions are forced to drink dirty, unsafe water
                  that could kill them, and is spreading deadly diseases among
                  vulnerable communities. Women and children are forced to walk
                  miles each day on dangerous terrain to fetch clean water, when
                  they should be at home, at school, thriving and content. In
                  2016, UNICEF estimated that 200 million hours a day are spent
                  by women and girls around the world just collecting water.{' '}
                  <br />
                  <br /> A water donation is one of the greatest things you can
                  do with your charity this Ramadan.
                </p>
              </div>
              <div className="w-full h-1 bg-owhite my-2"></div>
              <div className="w-full h-auto px-6 py-4 mt-2">
                <h2 className="text-mont text-lg text-lblack font-bold">
                  Summary
                </h2>
                <div className="w-full h-auto p-6 border border-lgray rounded-lg mt-4">
                  <div className="w-full h-auto flex lg:flex-row gap-4 flex-col justify-between">
                    <div className="lg:w-1/4 w-full h-auto">
                      <span className="text-mont text-sm text-lblack">
                        Total raised
                      </span>
                      <h3 className="text-mont text-xl text-lblack font-semibold">
                        £4.342 <span className="text-base">+ £523 Gift Ad</span>
                      </h3>
                    </div>
                    <div className="lg:w-1/4 w-full h-auto">
                      <span className="text-mont text-sm text-lblack">
                        Direct donations
                      </span>
                      <h3 className="text-mont text-xl text-lblack font-semibold">
                        £1.034
                      </h3>
                    </div>
                    <div className="lg:w-1/4 w-full h-auto">
                      <span className="text-mont text-sm text-lblack">
                        Donations via Fundraisers
                      </span>
                      <h3 className="text-mont text-xl text-lblack font-semibold">
                        £378
                      </h3>
                    </div>
                    <div className="lg:w-1/4 w-full h-auto">
                      <span className="text-mont text-sm text-lblack">
                        Offline donations
                      </span>
                      <h3 className="text-mont text-xl text-lblack font-semibold">
                        £739
                      </h3>
                    </div>
                  </div>
                  <div className="w-full h-auto mt-2">
                    <p className="text-xs text-mont text-lgray font-medium">
                      * Charities pay a small fee for our service.{' '}
                      <span className="text-blue font-semibold">
                        Find out how much its is and what we do for it.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-1 bg-owhite my-2"></div>
              <div className="w-full h-auto px-6 py-6 mt-2">
                <h2 className="text-mont text-lg text-lblack font-bold">
                  Share
                </h2>
                <div className="w-full h-auto flex lg:flex-row flex-col gap-8 mt-4">
                  <button className="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-dblue text-mont text-white text-xs font-bold">
                    <i className="fa-brands fa-facebook-f mr-2"></i> Share on
                    Facebook
                  </button>
                  <button className="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-sblue text-mont text-white text-xs font-bold">
                    <i className="fa-brands fa-twitter mr-2"></i> Twitter
                  </button>
                  <button className="lg:w-1/3 w-full h-auto px-8 py-4 border-2 border-lgray rounded-md  bg-white text-mont text-dgray text-xs font-bold">
                    <i className="fa-regular fa-envelope-open mr-2"></i> Email
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full h-auto lg:-mt-24 z-10">
              <div className="w-full h-auto hidden lg:flex flex-col px-6 py-4 bg-white rounded-2xl">
                <div className="w-full h-auto flex">
                  <div className="w-1/3 h-auto">
                    <h2 className="text-mont text-3xl text-lblack font-bold">
                      £4.342
                    </h2>
                    <p className="text-mont text-xs font-medium text-gray">
                      raised of{' '}
                      <span className="text-blue font-semibold">£6.200</span>{' '}
                      target
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto -mt-2">
                  <img
                    className="w-1/5 mx-auto"
                    src="./Icons/loader-large.svg"
                    alt="loader-large"
                  />
                </div>
                <div className="w-full h-auto flex justify-between">
                  <p className="text-mont text-xs text-l2black font-medium">
                    by{' '}
                    <i className="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                    12 supporters
                  </p>
                  <p className="text-mont text-xs text-orange font-semibold">
                    <i className="mr-1 fa-regular fa-clock"></i> Ends in 161
                    days
                  </p>
                </div>
                <button className="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2">
                  DONATE
                </button>
                <button
                  onClick={() => setshowShare(true)}
                  className="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border border-lgray rounded-md mt-2"
                >
                  <i className="mr-1 fa-sharp fa-solid fa-share-nodes"></i>{' '}
                  SHARE
                </button>
              </div>
              <div className="w-full h-auto px-6 py-4 mt-6 bg-bwhite border-2 border-sblue rounded-2xl">
                <div className="w-full h-auto flex gap-2">
                  <img
                    src="./Icons/illustration_fundraiser-hand.svg"
                    alt="illustration_fundraiser-hand"
                  />
                  <div className="w-2/3 h-auto flex flex-col justify-between">
                    <h3 className="text-mont text-base text-lblack font-bold">
                      Be a Fundraiser
                    </h3>
                    <p className="text-mont text-xs text-l2black">
                      Create your own appeal page for “Water for All” and help
                      support this cause.
                    </p>
                  </div>
                </div>
                <button className="w-full h-auto p-4 mt-4 rounded-lg text-mont text-xs text-lblack font-bold bg-sblue">
                  START FUNDRAISING
                </button>
              </div>
              <div className="w-full h-auto px-6 py-4 bg-white rounded-2xl mt-6">
                <div className="w-full h-auto py-4 flex justify-between border-b-2 border-lgray">
                  <h3 className="text-mont text-lblack text-base font-bold">
                    Fundraisers
                  </h3>
                  <p className="text-mont text-lblack text-base font-medium">
                    42
                  </p>
                </div>
                <div className="w-full h-auto flex justify-between py-4">
                  <div className="w-2/3 h-auto flex">
                    <i className="mr-1 fa-regular fa-circle-user text-lg"></i>
                    <div className="w-full h-auto">
                      <p className="text-mont text-nblue text-sm font-semibold">
                        Matt Clarke
                      </p>
                      <p className="text-mont text-lg text-blue font-semibold">
                        £837{' '}
                        <span className="text-mont text-xs text-l2black font-medium">
                          raised by{' '}
                          <i className="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                          12 supporters
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-1/4 h-auto flex items-center justify-between gap-6">
                    <div className="w-8 h-2 bg-sblue rounded-2xl"></div>
                    <p className="text-mont text-green text-sm font-bold">
                      80%
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex justify-between py-4">
                  <div className="w-2/3 h-auto flex">
                    <i className="mr-1 fa-regular fa-circle-user text-lg"></i>
                    <div className="w-full h-auto">
                      <p className="text-mont text-nblue text-sm font-semibold">
                        Sorai Francis
                      </p>
                      <p className="text-mont text-lg text-blue font-semibold">
                        £2.345{' '}
                        <span className="text-mont text-xs text-l2black font-medium">
                          raised by{' '}
                          <i className="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                          23 supporters
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-1/4 h-auto flex items-center justify-between gap-6">
                    <div className="w-12 h-2 bg-sblue rounded-2xl"></div>
                    <p className="text-mont text-green text-sm font-bold">
                      130%
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex justify-between py-4">
                  <div className="w-2/3 h-auto flex">
                    <i className="mr-1 fa-regular fa-circle-user text-lg"></i>
                    <div className="w-full h-auto">
                      <p className="text-mont text-nblue text-sm font-semibold">
                        Amanda Seedat
                      </p>
                      <p className="text-mont text-lg text-blue font-semibold">
                        £6.034{' '}
                        <span className="text-mont text-xs text-l2black font-medium">
                          raised by{' '}
                          <i className="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                          5 supporters
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-1/4 h-auto flex items-center justify-between gap-6">
                    <div className="w-4 h-2 bg-sblue rounded-2xl"></div>
                    <p className="text-mont text-green text-sm font-bold">
                      30%
                    </p>
                  </div>
                </div>
                <button className="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6">
                  Show more
                </button>
              </div>
              <div className="w-full h-auto px-6 py-4 bg-white rounded-2xl mt-6">
                <div className="w-full h-auto py-4 flex justify-between border-b-2 border-lgray">
                  <h3 className="text-mont text-lblack text-base font-bold">
                    Recent donors
                  </h3>
                  <p className="text-mont text-lblack text-base font-medium">
                    179
                  </p>
                </div>
                <div className="w-full h-auto py-4">
                  <div className="w-full h-auto flex">
                    <i className="mr-1 fa-regular fa-circle-user text-lg"></i>
                    <div className="w-full h-auto flex justify-between">
                      <p className="text-mont text-nblue text-sm font-semibold">
                        Matt Watson
                      </p>
                      <p className="text-mont text-lgray text-xs font-medium">
                        <i className="mr-1 fa-regular fa-clock"></i>17 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-auto ml-6 mt-2">
                    <p className="text-mont text-dgray text-xs">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore.
                    </p>
                    <p className="text-mont text-sm text-blue font-semibold">
                      £60.00{' '}
                      <span className="text-mont text-xs text-blue font-medium">
                        + £15.00 Gift Aid
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto py-4">
                  <div className="w-full h-auto flex">
                    <i className="mr-1 fa-regular fa-circle-user text-lg"></i>
                    <div className="w-full h-auto flex justify-between">
                      <p className="text-mont text-nblue text-sm font-semibold">
                        Frederic Johannson
                      </p>
                      <p className="text-mont text-lgray text-xs font-medium">
                        <i className="mr-1 fa-regular fa-clock"></i>2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-auto ml-6 mt-2">
                    <p className="text-mont text-sm text-blue font-semibold">
                      £20.00
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto py-4">
                  <div className="w-full h-auto flex">
                    <i className="mr-1 fa-regular fa-circle-user text-lg"></i>
                    <div className="w-full h-auto flex justify-between">
                      <p className="text-mont text-nblue text-sm font-semibold">
                        Anonymous
                      </p>
                      <p className="text-mont text-lgray text-xs font-medium">
                        <i className="mr-1 fa-regular fa-clock"></i>5 days ago
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-auto ml-6 mt-2">
                    <p className="text-mont text-sm text-blue font-semibold">
                      £40.00
                    </p>
                  </div>
                </div>
                <button className="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6">
                  Show more
                </button>
              </div>
            </div>
          </div>
          <img
            className="absolute w-96 right-0 lg:top-1/4 top-10 z-0 hidden lg:block"
            src="images/vectors/logo_aid-humanity-icon.svg"
            alt="Aid-humanity background logo"
          />
        </section>
      </main>

      <AppealFooter active="story" />

      <Footer />

      {showShare ? (
        <AppealShare showModal={showShare} setshowModal={setshowShare} />
      ) : null}
    </>
  );
};

export default AppealStory;
