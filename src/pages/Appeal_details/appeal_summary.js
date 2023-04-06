import React from 'react';
import Footer from '../../components/footer';
import Appeal_footer from '../../components/appeal_footer';
import Rescue from './rescue';
import Jummah from './jummah';
import Ramadan from './ramadan';
import Waterwells from './waterwells';

function Appeal_summary() {
  const ref = React.useRef(null);
  const [divStyle, setdivStyle] = React.useState({});

  React.useEffect(() => {
    setdivStyle({
      height: ref.current.clientHeight + 'px',
    });
  }, []);

  return (
    <>
      <div className="dimmer"></div>
      <div
        ref={ref}
        class="w-full h-auto flex lg:flex-row flex-col justify-end gap-4 z-40 absolute"
      >
        <Ramadan />
        <Waterwells />
        <Jummah />
        <Rescue />
      </div>
      <div style={divStyle}>
        <header class="w-full h-auto lg:flex flex-col hidden bg-nblue top-0 left-0 py-3">
          <nav class="w-full h-auto lg:px-16 px-4 container mx-auto border-b-2 border-lgray">
            <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
              <div class="w-1/4 h-auto">
                <a href="/">
                  <img
                    src="./logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="w-px h-6 mx-4 bg-lgray"></div>
              <div class="text-lg text-mont text-white font-medium w-2/3 h-auto flex justify-around items-center">
                <a href="">Our Story</a>
                <a class="font-bold" href="">
                  Appeals
                </a>
                <a class="font-bold" href="">
                  Emergency
                </a>
                <a class="font-bold" href="">
                  Zakat
                </a>
                <a href="">Get Involved</a>
              </div>
              <div class="w-2/3 h-auto gap-8 flex justify-end items-center">
                <a class="text-sm text-mont text-white font-semibold" href="">
                  <i class="fa-regular fa-circle-user text-lg"></i> My Account
                </a>
                <a href="">
                  <img
                    src="./Icons/icon_package-box-white.svg"
                    alt="package-box"
                  />
                </a>
                <button class="text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2">
                  DONATE NOW
                </button>
              </div>
            </div>
          </nav>
          <div class="w-full h-auto lg:px-16 px-4 container mx-auto pt-12 pb-32 flex flex-row justify-between">
            <div class="w-1/2 h-auto lg:flex gap-2">
              <a class="text-base font-medium text-mont text-bwhite" href="">
                Home
              </a>
              <p class="text-base font-medium text-mont text-bwhite">/</p>
              <a class="text-base font-medium text-mont text-bwhite" href="">
                Appeals
              </a>
              <p class="text-base font-medium text-mont text-bwhite">/</p>
              <a class="text-base font-medium text-mont text-bwhite" href="">
                Water for all
              </a>
              <p class="text-base font-medium text-mont text-bwhite">/</p>
              <a class="text-base font-medium text-mont text-bwhite" href="">
                Water Hands Pumps
              </a>
            </div>
            <div class="w-1/2 h-auto lg:flex justify-end">
              <a
                class="text-base font-medium text-mont text-bwhite flex"
                href=""
              >
                <img
                  class="mr-2"
                  src="./Icons/arrow-left-bwhite.svg"
                  alt="arrow-left"
                />
                BACK TO ALL
              </a>
            </div>
          </div>
        </header>
        <header class="w-full h-auto lg:hidden flex flex-col">
          <nav class="w-full h-auto bg-nblue border-b-2 border-lgray">
            <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
              <div class="w-3/4 flex flex-row gap-4 items-center px-3">
                <button class="text-white text-2xl focus:outline-none">
                  <i class="fa-solid fa-bars"></i>
                </button>
                <a href="">
                  <img
                    class="w-3/4"
                    src="./logo/logo_aid-humanity-horizontal-icon-middle.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="w-1/4 h-auto flex flex-row justify-between items-center px-5">
                <button class="text-2xl text-mont text-white">
                  <i class="fa-regular fa-circle-user"></i>
                </button>
                <button>
                  <img
                    src="./Icons/icon_package-box-white.svg"
                    alt="package-box"
                  />
                </button>
              </div>
            </div>
          </nav>
          <div class="w-full h-auto px-4 py-4 bg-nblue">
            <div class="w-full h-auto">
              <a class="text-base text-mont text-bwhite flex" href="">
                <img
                  class="mr-2"
                  src="./Icons/arrow-left-bwhite.svg"
                  alt="arrow-left"
                />
                BACK TO ALL
              </a>
            </div>
            <div class="mt-32"></div>
          </div>
        </header>
        <main>
          <section class="w-full h-auto pb-16 bg-owhite relative">
            <div class="w-full h-auto container mx-auto lg:px-16 px-4 flex lg:flex-row flex-col gap-8">
              <div class="lg:w-2/3 w-full h-auto bg-white rounded-2xl -mt-24">
                <div class="w-full h-auto lg:hidden px-2 py-4 bg-white rounded-2xl">
                  <div class="w-full h-auto flex justify-between">
                    <div class="w-1/2 h-auto">
                      <h2 class="text-mont lg:text-3xl text-2xl text-lblack font-bold">
                        £4.342
                      </h2>
                      <p class="text-mont text-xs font-medium text-gray">
                        raised of{' '}
                        <span class="text-blue font-semibold">£6.200</span>{' '}
                        target
                      </p>
                    </div>
                    <div class="w-1/2 h-auto flex justify-end">
                      <img
                        class=""
                        src="./Icons/loader-large.svg"
                        alt="loader-large"
                      />
                    </div>
                  </div>
                  <div class="w-full h-auto flex justify-between mt-8">
                    <p class="text-mont text-xs text-l2black font-medium">
                      by <i class="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                      12 supporters
                    </p>
                    <p class="text-mont text-xs text-orange font-semibold">
                      <i class="mr-1 fa-regular fa-clock"></i> Ends in 161 days
                    </p>
                  </div>
                  <button class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2">
                    DONATE
                  </button>
                  <button class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md mt-2">
                    <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                  </button>
                </div>
                <div class="w-full h-auto flex justify-between lg:px-6 px-2 py-4">
                  <div class="w-3/4 h-auto">
                    <span class="text-mont text-xs text-lgray font-medium">
                      Water for All
                    </span>
                    <h1 class="text-mont lg:text-4xl text-3xl text-lblack font-bold mt-2">
                      Water Hands Pumps
                    </h1>
                    <p class="text-mont text-l2black text-xs mt-2">
                      fundraised by{' '}
                      <span class="ml-2 text-nblue font-semibold">
                        <i class="fa-regular fa-circle-user text-sm"></i> Ron
                        Hill
                      </span>
                    </p>
                  </div>
                  <div class="w-1/4 h-auto flex justify-end lg:items-center items-end">
                    <img src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                  </div>
                </div>
                <img
                  class="w-full h-auto"
                  src="./Images/Hand-pump.png"
                  alt="Hand-pump"
                />
                <div class="w-full h-auto px-6 py-4 mt-2">
                  <h2 class="text-mont text-lg text-lblack font-bold">Story</h2>
                  <p class="text-mont text-xs text-l2black mt-4">
                    1 in every 3 people around the world do not have clean water
                    to drink. Millions are forced to drink dirty,{' '}
                    <sapn class="font-semibold">
                      unsafe water that could kill them
                    </sapn>
                    , and is spreading deadly diseases among vulnerable
                    communities. Women and children are forced to walk miles
                    each day on dangerous terrain to fetch clean water, when
                    they should be at home, at school, thriving and content. In
                    2016, UNICEF estimated that 200 million hours a day are
                    spent by women and girls around the world just collecting
                    water. A water donation is one of the greatest things you
                    can do with your charity this Ramadan.
                  </p>
                  <button class="text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2 mt-4">
                    START FUNDRAISING
                  </button>
                </div>
                <div class="w-full h-1 bg-owhite my-2"></div>
                <div class="w-full h-auto px-6 py-4 mt-2">
                  <h2 class="text-mont text-lg text-lblack font-bold">About</h2>
                  <p class="text-mont text-xs text-l2black mt-4">
                    1 in every 3 people around the world do not have clean water
                    to drink. Millions are forced to drink dirty, unsafe water
                    that could kill them, and is spreading deadly diseases among
                    vulnerable communities. Women and children are forced to
                    walk miles each day on dangerous terrain to fetch clean
                    water, when they should be at home, at school, thriving and
                    content. In 2016, UNICEF estimated that 200 million hours a
                    day are spent by women and girls around the world just
                    collecting water. <br />
                    <br /> A water donation is one of the greatest things you
                    can do with your charity this Ramadan.
                  </p>
                </div>
                <div class="w-full h-1 bg-owhite my-2"></div>
                <div class="w-full h-auto px-6 py-4 mt-2">
                  <h2 class="text-mont text-lg text-lblack font-bold">
                    Summary
                  </h2>
                  <div class="w-full h-auto p-6 border-2 border-lgray rounded-lg mt-4">
                    <div class="w-full h-auto flex lg:flex-row gap-4 flex-col justify-between">
                      <div class="w-1/4 h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Total raised
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          £4.342 <span class="text-base">+ £523 Gift Ad</span>
                        </h3>
                      </div>
                      <div class="w-1/4 h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Direct donations
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          £1.034
                        </h3>
                      </div>
                      <div class="w-1/4 h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Donations via Fundraisers
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          £378
                        </h3>
                      </div>
                      <div class="w-1/4 h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Offline donations
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          £739
                        </h3>
                      </div>
                    </div>
                    <div class="w-full h-auto mt-2">
                      <p class="text-xs text-mont text-lgray font-medium">
                        * Charities pay a small fee for our service.{' '}
                        <span class="text-blue font-semibold">
                          Find out how much its is and what we do for it.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full h-1 bg-owhite my-2"></div>
                <div class="w-full h-auto px-6 py-6 mt-2">
                  <h2 class="text-mont text-lg text-lblack font-bold">Share</h2>
                  <div class="w-full h-auto flex lg:flex-row flex-col gap-8 mt-4">
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-dblue text-mont text-white text-xs font-bold">
                      <i class="fa-brands fa-facebook-f mr-2"></i> Share on
                      Facebook
                    </button>
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-sblue text-mont text-white text-xs font-bold">
                      <i class="fa-brands fa-twitter mr-2"></i> Twitter
                    </button>
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 border-2 border-lgray rounded-md  bg-white text-mont text-dgray text-xs font-bold">
                      <i class="fa-regular fa-envelope-open mr-2"></i> Email
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 w-full h-auto -mt-24 z-10">
                <div class="w-full h-auto hidden lg:flex flex-col px-6 py-4 bg-white rounded-2xl">
                  <div class="w-full h-auto flex">
                    <div class="w-1/3 h-auto">
                      <h2 class="text-mont text-3xl text-lblack font-bold">
                        £4.342
                      </h2>
                      <p class="text-mont text-xs font-medium text-gray">
                        raised of{' '}
                        <span class="text-blue font-semibold">£6.200</span>{' '}
                        target
                      </p>
                    </div>
                    <div class="w-2/3 h-auto mt-10">
                      <img
                        class="w-1/3"
                        src="./Icons/loader-large.svg"
                        alt="loader-large"
                      />
                    </div>
                  </div>
                  <div class="w-full h-auto flex justify-between">
                    <p class="text-mont text-xs text-l2black font-medium">
                      by <i class="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                      12 supporters
                    </p>
                    <p class="text-mont text-xs text-orange font-semibold">
                      <i class="mr-1 fa-regular fa-clock"></i> Ends in 161 days
                    </p>
                  </div>
                  <button class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2">
                    DONATE
                  </button>
                  <button class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md mt-2">
                    <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                  </button>
                </div>
                <div class="w-full h-auto px-6 py-4 bg-white rounded-2xl mt-6">
                  <div class="w-full h-auto py-4 flex justify-between border-b-2 border-lgray">
                    <h3 class="text-mont text-lblack text-base font-bold">
                      Recent donors
                    </h3>
                    <p class="text-mont text-lblack text-base font-medium">
                      179
                    </p>
                  </div>
                  <div class="w-full h-auto py-4">
                    <div class="w-full h-auto flex">
                      <i class="mr-1 fa-regular fa-circle-user text-lg"></i>
                      <div class="w-full h-auto flex justify-between">
                        <p class="text-mont text-nblue text-sm font-semibold">
                          Matt Watson
                        </p>
                        <p class="text-mont text-lgray text-xs font-medium">
                          <i class="mr-1 fa-regular fa-clock"></i>17 hours ago
                        </p>
                      </div>
                    </div>
                    <div class="w-full h-auto ml-6 mt-2">
                      <p class="text-mont text-dgray text-xs">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <p class="text-mont text-sm text-blue font-semibold">
                        £60.00{' '}
                        <span class="text-mont text-xs text-blue font-medium">
                          + £15.00 Gift Aid
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-auto py-4">
                    <div class="w-full h-auto flex">
                      <i class="mr-1 fa-regular fa-circle-user text-lg"></i>
                      <div class="w-full h-auto flex justify-between">
                        <p class="text-mont text-nblue text-sm font-semibold">
                          Frederic Johannson
                        </p>
                        <p class="text-mont text-lgray text-xs font-medium">
                          <i class="mr-1 fa-regular fa-clock"></i>2 days ago
                        </p>
                      </div>
                    </div>
                    <div class="w-full h-auto ml-6 mt-2">
                      <p class="text-mont text-sm text-blue font-semibold">
                        £20.00
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-auto py-4">
                    <div class="w-full h-auto flex">
                      <i class="mr-1 fa-regular fa-circle-user text-lg"></i>
                      <div class="w-full h-auto flex justify-between">
                        <p class="text-mont text-nblue text-sm font-semibold">
                          Anonymous
                        </p>
                        <p class="text-mont text-lgray text-xs font-medium">
                          <i class="mr-1 fa-regular fa-clock"></i>5 days ago
                        </p>
                      </div>
                    </div>
                    <div class="w-full h-auto ml-6 mt-2">
                      <p class="text-mont text-sm text-blue font-semibold">
                        £40.00
                      </p>
                    </div>
                  </div>
                  <button class="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6">
                    Show more
                  </button>
                </div>
              </div>
            </div>
            <img
              className="absolute w-96 right-0 lg:top-1/4 top-10 z-0"
              src="images/vectors/logo_aid-humanity-icon.svg"
              alt="Aid-humanity background logo"
            />
          </section>
          <section class="w-full h-auto bg-owhite z-10">
            <div class="w-full h-auto container mx-auto lg:px-16 px-4 py-12">
              <div class="w-full h-auto text-center mb-12">
                <h1 class="text-3xl text-mont font-bold">Recent Appeals</h1>
              </div>
              <div class="owl-carousel owl-carousel-1 owl-theme w-full h-auto flex items-center justify-around bg-transparent z-10">
                <div class="item h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      src="./images/36404f884e19.png"
                      alt="carousel_image_1"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">
                        Water for All{' '}
                      </p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="h-36">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Water Hands Pumps
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
                <div class="item h-auto rounded-b-2xl py-2 shadow-lg">
                  <div className="relative">
                    <img
                      src="./images/rf1110721-somali-refugee-family-in-yemen-1200x800-images.png"
                      alt="carousel_image_2"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">
                        Water for All{' '}
                      </p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="h-36">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Yemen Emergency
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        More than 1,500 people killed and 2 million homes
                        partially or completely destroyed following the Yemen
                        Floods of 2022.
                      </p>
                    </div>
                    <div class="flex flex-row items-center mt-4 h-12 relative">
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
                            src="./Icons/badge_sadhaka-jaraiyah.svg"
                            alt="badge_sadhaka-jaraiyah"
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
                      src="./images/Untitled-design-44.png"
                      alt="carousel_image_3"
                    />
                    <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                      <p className="text-gray-400 font-medium">Hunger Appeal</p>
                    </div>
                  </div>
                  <div class="px-10 pt-8 pb-6">
                    <div class="h-36">
                      <h2 class="text-xl font-bold text-mont text-black-50">
                        Feed a Child
                      </h2>
                      <p class="text-base text-mont text-gray-600 mt-2">
                        Feed a Child campaign provides hot, nutritious meals in
                        schools. We ensure that children are nourished, helping
                        boost attention and energy, and tackling hunger
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
              </div>
            </div>
          </section>
        </main>

        <Appeal_footer active="summary" />

        <Footer />
      </div>
    </>
  );
}

export default Appeal_summary;
