import React, { useEffect, useMemo } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import appealService from '../../services/appeals';
import { currencyFormatter } from '../../utils';
import AppealFilter from './AppealFilter';
import CircularProgressBar from '../Appeal_details/circular_progress_bar';
import { textTruncate } from '../../constants';
import { SERVER_URL } from '../../services/config';

function Appeal_page() {
  const [showFilters, setshowFilters] = React.useState(false);
  const [appeals, setAppeals] = React.useState([]);

  useEffect(() => {
    fetchAppeals();
  }, []);

  const fetchAppeals = async () => {
    const data = await appealService.getAppeals();
    setAppeals(data);
  };

  const AppealTags = {
    SADHAKA: 'sadhaka',
    ZAKATH: 'zakath',
    SADHAKA_JARIYA: 'sadhaka_jariya',
  };

  const getDonationSrc = useMemo(
    appeal_tag => {
      switch (appeal_tag) {
        case AppealTags.SADHAKA:
          return './Icons/badge_sadhaka-jaraiyah.svg';
        case AppealTags.ZAKATH:
          return './Icons/badge_zakat.svg';
        case AppealTags.SADHAKA_JARIYA:
          return './Icons/badge_sadhaka-jaraiyah.svg';
        default:
          return './Icons/badge_sadhaka-jaraiyah.svg';
      }
    },
    [AppealTags]
  );

  return (
    <>
      <Header />

      <main>
        <AppealFilter />
        <section class="w-full h-auto z-10">
          <div class="w-full h-auto container mx-auto px-5 py-10">
            <div class="w-full h-auto lg:mt-4 mt-4">
              <div class="w-full h-auto gap-8 grid lg:grid-cols-3 grid-cols-1 items-center justify-around bg-transparent z-10">
                {appeals.map(appeal => (
                  <div class="h-auto rounded-b-2xl py-2 shadow-lg">
                    <div className="relative">
                      <img
                        className="w-full rounded-t-xl"
                        src={SERVER_URL + appeal.cover_image}
                        alt="carousel_image_1"
                      />
                      <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                        <p className="text-gray-400 font-medium">
                          {appeal.category.name}{' '}
                        </p>
                      </div>
                    </div>
                    <div class="px-10 pt-8 pb-6">
                      <div class="lg:h-36 h-auto">
                        <h2 class="text-xl font-bold text-mont text-black-50">
                          {appeal.title}
                        </h2>
                        <p class="text-base text-mont text-gray-600 mt-2">
                          {textTruncate(appeal.description)}
                        </p>
                      </div>
                      {appeal.donations?.length > 0 ? (
                        <div class="flex flex-row items-center mt-4 h-12">
                          <div class="w-1/5 mr-4">
                            <CircularProgressBar
                              percentage={Math.round(
                                (appeal.raised_amount /
                                  appeal.targeted_amount) *
                                  100
                              )}
                              style={{
                                width: '4rem',
                                height: '4rem',
                                fontSize: '1rem',
                              }}
                            />
                          </div>
                          <div class="w-2/3 flex flex-col">
                            <span class="text-sm text-mont text-blue font-bold">
                              Raised: {currencyFormatter(appeal.raised_amount)}
                            </span>
                            <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                              by <i class="fa-regular fa-circle-user"></i>{' '}
                              {appeal.donations.length}
                              supporters
                            </span>
                          </div>
                          <div class="w-1/3 flex flex-col items-end">
                            <span class="text-xs text-mont text-green font-semibold">
                              Goal: {currencyFormatter.targeted_amount}
                            </span>
                            <div class="w-5 mt-1">
                              <img
                                src={getDonationSrc(appeal.appeal_tag)}
                                alt="badge_zakat"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-xs text-white p-4 bg-gray-mate rounded-2xl  mt-4 h-12">
                          <p>No donation yet, bet the first!</p>
                        </div>
                      )}
                      <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                        <a
                          class="text-mont text-nblue font-bold text-xs"
                          href=""
                        >
                          Read More
                        </a>
                        <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
                          DONATE NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div class="h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="./images/rf1110721-somali-refugee-family-in-yemen-1200x800-images.png"
                      alt="carousel_image_2"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">
                        Disaster & Emergency Appeals
                      </p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="lg:h-36 h-auto">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Yemen Emergency
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        More than 1,500 people killed and 2 million homes
                        partially or completely destroyed following the Yemen
                        Floods of 2022.
                      </p>
                    </div>
                    <div class="flex flex-row items-center mt-4 h-12">
                      <div class="w-1/5 mr-4">
                        <img
                          src="./Icons/loader-large.svg"
                          alt="loader-large"
                        />
                      </div>
                      <div class="w-2/3 flex flex-col">
                        <span class="text-sm text-mont text-blue font-bold">
                          Raised: £934
                        </span>
                        <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                          by <i class="fa-regular fa-circle-user"></i> 34
                          supporters
                        </span>
                      </div>
                      <div class="w-1/3 flex flex-col items-end">
                        <span class="text-xs text-mont text-green font-semibold">
                          Goal: £984
                        </span>
                        <div class="w-5 mt-1">
                          <img
                            src="./Icons/badge_zakat.svg"
                            alt="badge_zakat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                      <a class="text-mont text-nblue font-bold text-xs" href="">
                        Read More
                      </a>
                      <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div class="item h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="./images/Untitled-design-44.png"
                      alt="carousel_image_3"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">Hunger Appeal</p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="lg:h-36 h-auto">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Feed a Child
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        Every single day, women around the world have to walk
                        miles to collect water for their household. Installing a
                        hand pump brings this basic human right closer to home.
                      </p>
                    </div>
                    <div class="text-center text-xs text-white p-4 bg-gray-mate rounded-2xl  mt-4 h-12">
                      <p>No donation yet, bet the first!</p>
                    </div>
                    <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                      <a class="text-mont text-nblue font-bold text-xs" href="">
                        Read More
                      </a>
                      <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div class="h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="./images/children-600.png"
                      alt="carousel_image_4"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">
                        Sponsor an Orphan
                      </p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="lg:h-36 h-auto">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Sponsor an Orphan
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        Every single day, women around the world have to walk
                        miles to collect water for their household. Installing a
                        hand pump brings this basic human right closer to home.
                      </p>
                    </div>
                    <div class="flex flex-row items-center mt-4 h-12">
                      <div class="w-1/5 mr-4">
                        <img
                          src="./Icons/loader-medium.svg"
                          alt="loader-medium"
                        />
                      </div>
                      <div class="w-2/3 flex flex-col">
                        <span class="text-sm text-mont text-blue font-bold">
                          Raised: £243
                        </span>
                        <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                          by <i class="fa-regular fa-circle-user"></i> 12
                          supporters
                        </span>
                      </div>
                      <div class="w-1/3 flex flex-col items-end">
                        <span class="text-xs text-mont text-green font-semibold">
                          Goal: £870
                        </span>
                        <div class="w-5 mt-1">
                          <img
                            src="./Icons/badge_zakat.svg"
                            alt="badge_zakat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                      <a class="text-mont text-nblue font-bold text-xs" href="">
                        Read More
                      </a>
                      <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div class="h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="./images/6f88b25b59434589a4f4c729c990bbf4.png"
                      alt="carousel_image_5"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">
                        Disaster & Emergency Appeals
                      </p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="lg:h-36 h-auto">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Sylhet Floods Emergency Appeal
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        Every single day, women around the world have to walk
                        miles to collect water for their household. Installing a
                        hand pump brings this basic human right closer to home.
                      </p>
                    </div>
                    <div class="flex flex-row items-center mt-4 h-12">
                      <div class="w-1/5 mr-4">
                        <img
                          src="./Icons/loader-medium.svg"
                          alt="loader-medium"
                        />
                      </div>
                      <div class="w-2/3 flex flex-col">
                        <span class="text-sm text-mont text-blue font-bold">
                          Raised: £243
                        </span>
                        <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                          by <i class="fa-regular fa-circle-user"></i> 12
                          supporters
                        </span>
                      </div>
                      <div class="w-1/3 flex flex-col items-end">
                        <span class="text-xs text-mont text-green font-semibold">
                          Goal: £870
                        </span>
                        <div class="w-5 mt-1">
                          <img
                            src="./Icons/badge_zakat.svg"
                            alt="badge_zakat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                      <a class="text-mont text-nblue font-bold text-xs" href="">
                        Read More
                      </a>
                      <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div class="h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      className="w-full rounded-t-xl"
                      src="./images/UN0299648.png"
                      alt="carousel_image_6"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">
                        Disaster & Emergency Appeals
                      </p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="lg:h-36 h-auto">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Syria Emergency
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        Every single day, women around the world have to walk
                        miles to collect water for their household. Installing a
                        hand pump brings this basic human right closer to home.
                      </p>
                    </div>
                    <div class="flex flex-row items-center mt-4 h-12">
                      <div class="w-1/5 mr-4">
                        <img
                          src="./Icons/loader-medium.svg"
                          alt="loader-medium"
                        />
                      </div>
                      <div class="w-2/3 flex flex-col">
                        <span class="text-sm text-mont text-blue font-bold">
                          Raised: £243
                        </span>
                        <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                          by <i class="fa-regular fa-circle-user"></i> 12
                          supporters
                        </span>
                      </div>
                      <div class="w-1/3 flex flex-col items-end">
                        <span class="text-xs text-mont text-green font-semibold">
                          Goal: £870
                        </span>
                        <div class="w-5 mt-1">
                          <img
                            src="./Icons/badge_zakat.svg"
                            alt="badge_zakat"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                      <a class="text-mont text-nblue font-bold text-xs" href="">
                        Read More
                      </a>
                      <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
                        DONATE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-auto flex justify-center px-20 py-8 lg:mb-6">
            <button class="text-xs text-nblue text-mont font-medium border-2 border-lgray rounded-lg px-4 py-2">
              Load More
            </button>
          </div>
          {!showFilters ? (
            <button
              onClick={() => {
                setshowFilters(true);
              }}
              className="bg-gray-10 fixed w-full left-0 bottom-0 z-20 h-16 flex lg:hidden items-center justify-center"
            >
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-sliders text-lg"></i>
                <p className="text-black-50 font-bold uppercase text-sm">
                  Filters
                </p>
              </div>
            </button>
          ) : null}
          {showFilters ? (
            <div className="bg-gray fixed top-0 left-0 h-screen w-full">
              <div className="bg-white py-4">
                <p className="text-sm font-semibold pl-6 flex items-center gap-2">
                  <img
                    onClick={() => {
                      setshowFilters(false);
                    }}
                    className="w-3 h-3"
                    src="images/icons/dashboard/angle-left.svg"
                    alt=""
                  />{' '}
                  Filters
                </p>
              </div>
              <div class="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 mt-6">
                <div class="w-1/2 h-auto flex flex-col gap-3">
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    All
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Zakat
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Sadhaka
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Sadhaka Jaraiyah
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Our fundraiser
                  </p>
                </div>
              </div>
              <div class="w-full h-auto flex flex-col gap-4 pt-2 lg:pb-12 py-2  p-4 lg:p-0 overflow-y-scroll">
                <button class="text-black-50 shadow-lg bg-white border border-sblue text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  All
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_mosque.svg"
                    alt="icon_mosque"
                  />{' '}
                  Build a Mosque
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_emergency-color.svg"
                    alt="icon_emergency-color"
                  />{' '}
                  Disaster & Emergency Appeals
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_water.svg"
                    alt="icon_water"
                  />{' '}
                  Water for All
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_orphan-color.svg"
                    alt="icon_orphan-color.svg"
                  />{' '}
                  Sponsor an Orphan
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_hungry.svg"
                    alt="icon_hungry"
                  />{' '}
                  Hunger Appeal
                </button>
                <button class="w-full h-auto py-3 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md">
                  {' '}
                  Reset
                </button>
              </div>
              <button className="lg:relative fixed py-4 lg:w-1/4 w-full bottom-0 left-0 bg-green text-black font-bold text-sm lg:rounded-lg uppercase mt-8 z-20">
                Apply Changes
              </button>
            </div>
          ) : null}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Appeal_page;
