import React from 'react';
import Switch from '../components/switch/switch';
import Header from '../components/header';
import Footer from '../components/footer';
import AppealSlider from '../components/AppealSlider';

function Home() {
  const [showFaq1, setshowFaq1] = React.useState(false);
  const [showFaq2, setshowFaq2] = React.useState(true);
  const [showFaq3, setshowFaq3] = React.useState(true);
  const [register, setregister] = React.useState(true);
  const [showbadge, setshowbadge] = React.useState(false);

  return (
    <>
      <Header />
      <main class="w-full h-auto top-0 left-0 relative">
        <section class="w-full h-auto landing-page relative">
          <div class="w-full h-auto flex lg:flex-row flex-col py-20 group15343 container mx-auto lg:px-16 px-6 relative">
            <div class="lg:w-1/2 w-full h-auto">
              <div>
                <button class="text-center text-sm text-mont font-medium text-white border-2 border-white rounded-lg px-2 py-1">
                  Water for all
                </button>
              </div>
              <div class="mt-2">
                <h1 class="lg:text-6xl text-4xl text-mont font-bold text-white shadow-2">
                  Build
                </h1>
                <h1 class="lg:text-6xl text-4xl text-mont font-bold text-white shadow-2">
                  a water well
                </h1>
              </div>
              <div class="mt-4 pr-2 hidden lg:flex">
                <p class="text-white text-lg text-mont">
                  1 in 3 people around the world do not have access to clean
                  drinking water. Women and children often walk for miles each
                  day to collect water to drink, denying them the opportunity to
                  go to school, to work and to thrive.
                </p>
              </div>
              <div class="mt-10 flex flex-row">
                <div class="lg:w-1/3 w-1/2 h-auto">
                  <button
                    id="cursor-pointer"
                    class="lg:text-sm text-xs font-bold text-white text-mont bg-sblue rounded-lg p-4"
                  >
                    DONATE NOW <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div class="w-1/2 h-auto flex items-center">
                  <h3 class="text-lg text-mont text-fyellow shadow-2">from</h3>
                  <h2 class="ml-2 text-lg text-mont text-fyellow font-bold shadow-2">
                    £140
                  </h2>
                </div>
              </div>
            </div>
            <div class="w-1/2 h-auto hidden lg:flex items-center justify-center text-mont">
              <div class="w-40">
                <div>
                  <p class="text-2xl text-white">we transfer</p>
                </div>
                <div>
                  <img src="./Icons/logo_100percent.svg" alt="100%" />
                </div>
                <div>
                  <p class="text-base text-white">of your donation</p>
                </div>
              </div>
            </div>
            <div class="h-auto hidden lg:flex flex-row justify-between absolute -bottom-12 w-auto gap-10 right-20">
              <div class="w-80 h-auto rounded-b-2xl shadow-2xl">
                <div>
                  <img src="./images/Pakistan Floods 2022.png" alt="flood" />
                </div>
                <div class="p-4 text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl">
                  <a class="flex flex-row justify-between" href="">
                    Pakistan Floods
                    <i class="fa-solid fa-arrow-right text-blue"></i>
                  </a>
                </div>
              </div>
              <div class="w-80 h-auto rounded-b-2xl shadow-2xl">
                <div>
                  <img src="./images/maxresdefault.png" alt="flood2" />
                </div>
                <div class="p-4 text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl">
                  <a class="flex flex-row justify-between" href="">
                    Support an Orphaned Child
                    <i class="fa-solid fa-arrow-right text-blue"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a class="bg-white py-2 lg:pr-4 pr-2 lg:pl-2 h-10 rounded-r-full absolute top-0 bottom-0 my-auto left-0 hidden lg:block">
            <i class="fa-solid fa-arrow-left lg:text-base text-xs"></i>
          </a>
          <a class="bg-white py-2 lg:pl-4 pl-2 lg:pr-2 h-10 rounded-l-full absolute top-0 bottom-0 my-auto right-0 hidden lg:block">
            <i class="fa-solid fa-arrow-right lg:text-base text-xs"></i>
          </a>
        </section>
        <section class="w-full h-auto pt-20 pb-12 z-10 relative">
          <div class="w-full h-auto px-5 container mx-auto">
            <div class="w-full h-auto flex flex-row">
              <h1 class="text-3xl text-mont font-bold mr-3 text-center lg:text-left">
                Appeals{' '}
                <span class="text-3xl font-normal text-mont text-black-50">
                  that need your backing
                </span>
              </h1>
            </div>
            <div class="w-full h-auto mt-16 mb-2">
              <AppealSlider />
              <div className="flex lg:justify-end justify-center container mx-auto lg:-mt-10 mt-4">
                <a
                  href="/appeal_page"
                  class="text-center text-nblue text-mont font-medium text-sm border-2 border-lgray rounded-lg px-4 py-2 z-50"
                >
                  View All
                </a>
              </div>

              {/* <div className='w-full h-64 bg-gray absolute bottom-0 left-0 z-0'></div> */}
            </div>
          </div>
        </section>
        <section className="w-full h-auto bg-yellow">
          <div className="container mx-auto flex lg:flex-row flex-col items-center gap-10 py-10 px-5">
            <div class="lg:w-1/3 w-full h-auto">
              <h2 class="text-2xl text-mont font-semibold text-nblue text-center lg:text-left">
                What if one action could change the world?
              </h2>
            </div>
            <div class="lg:w-1/3 w-4/5 h-auto flex items-center justify-center gap-2">
              <img
                class="w-12"
                src="./Icons/icon_current-location.svg"
                alt="icon_current-location"
              />
              <p class="text-sm text-mont font-medium text-gray-600">
                Aid Humanity helps you make it happen…
              </p>
            </div>
            <div class="lg:w-1/3 w-full h-auto">
              <p class="text-2xl text-mont font-semibold text-nblue text-center lg:text-left">
                Give Back - Deliver Better - Drive Change
              </p>
            </div>
          </div>
        </section>
        <section className="w-full h-auto bg-owhite">
          <div class="w-full h-auto container mx-auto flex lg:flex-row flex-col gap-10 px-5 py-16">
            <div class="lg:w-1/3 w-full h-auto">
              <h1 class="text-black-50 text-3xl text-mont font-bold text-center lg:text-left">
                Who have <br /> we helped?
              </h1>
              <p class="text-xl text-mont text-gray-600 mt-4 text-center lg:text-left">
                We take pride in providing help to people around the world.
              </p>
            </div>
            <div class="lg:w-1/2 w-full h-auto">
              <div class="flex flex-row gap-2 lg:gap-2 flex-wrap">
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3 w-5 lg:w-7"
                    src="./Icons/icon_water.svg"
                    alt="icon_water"
                  />{' '}
                  Water Well
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3 w-5 lg:w-8"
                    src="./Icons/icon_kids-color.svg"
                    alt="icon_kids-color"
                  />{' '}
                  Helping Children
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3 w-5 lg:w-7"
                    src="./Icons/icon_eid-color.svg"
                    alt="icon_eid-color"
                  />{' '}
                  Eid
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3 w-5 lg:w-7"
                    src="./Icons/icon_ramadan-color.svg"
                    alt="icon_ramadan-color"
                  />{' '}
                  Ramadan
                </button>
              </div>
              <div class="flex flex-row gap-2 lg:gap-4 flex-wrap mt-4">
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="w-5 lg:w-6 mr-3"
                    src="./Icons/icon_orphan-color.svg"
                    alt="icon_orphan-color.svg"
                  />{' '}
                  Orphans
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="w-5 lg:w-7 mr-3"
                    src="./Icons/icon_emergency-color.svg"
                    alt="icon_emergency-color"
                  />{' '}
                  Emergencies
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="w-5 lg:w-7 mr-3"
                    src="./Icons/icon_uk-projects-color.svg"
                    alt="icon_uk-projects-color"
                  />{' '}
                  UK Projects
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="w-5 lg:w-6 mr-3"
                    src="./Icons/icon_mosque.svg"
                    alt="icon_mosque"
                  />{' '}
                  Mosque Builds
                </button>
                <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont">
                  <img
                    class="w-5 lg:w-7 mr-3"
                    src="./Icons/icon_homeless-color.svg"
                    alt="icon_homeless-color"
                  />{' '}
                  Homeless
                </button>
                <a class="text-base text-mont text-nblue mt-4" href="">
                  and much more…
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full h-auto container mx-auto">
          <div class="w-full h-auto flex lg:flex-row flex-col px-5 lg:py-16 pt-12 pb-6">
            <div class="lg:w-1/4 w-full h-auto">
              <h1 class="text-black-50 text-3xl text-mont font-bold text-center lg:text-left">
                Passionate <br /> about progress
              </h1>
            </div>
            <div class="lg:w-3/4 w-full flex lg:gap-12 h-auto">
              <div className="h-24 bg-gray w-1"></div>
              <p class="text-xl text-mont text-gray-600 text-center lg:text-left mt-8 lg:mt-0">
                We’ve always believed that charitable donations should find
                their way to the people who need them most, and always without
                delay. It’s why we’ve created a simple{' '}
                <span class="font-bold">100% donation policy</span> that makes
                sure every donation can:
              </p>
            </div>
          </div>
          <div class="w-full h-auto flex lg:flex-row flex-col px-5 pt-6 lg:pb-16 pb-0">
            <div class="lg:w-3/5 w-full h-auto relative">
              <img
                className="w-full rounded-lg"
                src="./images/Food-Scarcity-Myth-1920X1080.png"
                alt="Food-Scarcity"
              />
              <div class="flex flex-row justify-between absolute lg:-bottom-10 -bottom-6 lg:left-1/4 left-2">
                <p class="lg:text-2xl text-xs text-white text-mont font-semibold">
                  we transfer
                </p>
                <img
                  class="lg:w-56 w-36 lg:mx-2 mx-1"
                  src="./Icons/logo_100percent.svg"
                  alt="logo_100percent"
                />
                <p class="lg:text-lg text-xs text-white text-mont font-semibold">
                  of your donation
                </p>
              </div>
            </div>
            <div class="lg:w-2/5 w-full h-auto flex flex-col gap-8 justify-center bg-union lg:items-end items-center relative mt-8 lg:mt-0">
              <div class="lg:absolute mt-16 lg:mt-0 relative lg:top-1/3 lg:-left-44 z-10">
                <div class="lg:w-72 w-full mb-4 lg:h-auto border-2 border-fyellow bg-white rounded-xl bg-white text-center py-8 px-12 h-36 flex items-center relative">
                  <img
                    class="mx-auto absolute top-0 absolute-center"
                    src="./Icons/icon_distribution-color.svg"
                    alt="icon_distribution-color"
                  />
                  <p class="text-sm text-mont text-black-50">
                    <span class="text-mont font-bold text-sm text-nblue">
                      Get Distributed Fairly
                    </span>
                    <br />
                    Get Distributed Fairly because never take a penny towards
                    our running costs
                  </p>
                </div>
              </div>
              <div class="lg:w-72 w-full mb-4 lg:h-auto border-2 border-sblue rounded-xl bg-white text-center py-8 px-12 h-36 flex items-center relative z-50">
                <img
                  class="mx-auto absolute top-0 absolute-center"
                  src="./Icons/icon_difference-color.svg"
                  alt="icon_difference-color"
                />
                <p class="text-sm text-mont text-black-50">
                  <span class="text-mont font-bold text-sm text-nblue">
                    Make A Difference
                  </span>{' '}
                  to the people in the world who need you
                </p>
              </div>
              <div class="lg:w-72 w-full mt-4 lg:h-auto border-2 border-nblue rounded-xl bg-white text-center py-8 px-12 h-36 flex items-center relative z-50">
                <img
                  class="mx-auto absolute top-0 absolute-center"
                  src="./Icons/icon_wisely-color.svg"
                  alt="icon_wisely-color"
                />
                <p class="text-sm text-mont text-black-50">
                  <span class="text-mont font-bold text-sm text-nblue">
                    Be Spent Wisely
                  </span>
                  Be Spent Wisely on projects that change lives and build
                  communities
                </p>
              </div>
              <img
                className="absolute lg:w-4/5 w-full lg:left-20 left-0 lg:top-0 top-2 z-0"
                src="images/vectors/logo_aid-humanity-icon.svg"
                alt="Aid-humanity background logo"
              />
            </div>
          </div>
        </section>
        <section class="w-full h-auto mt-16 bg-gray-10">
          <div class="w-full h-auto px-5 pt-16 pb-10 container mx-auto">
            <div class="w-full h-auto text-center">
              <h2 class="text-mont text-black-50 text-3xl font-medium">
                <span class="text-mont text-black-50 text-3xl font-bold">
                  Our Achievements
                </span>{' '}
                with your help and more …
              </h2>
            </div>
            <div class="owl-carousel owl-theme achievements-carousel mt-16 grid justify-between">
              <div class="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
                <h3 class="text-sm text-mont text-black-50 font-bold flex">
                  <div class="w-5 mr-2">
                    <img
                      src="./Icons/icon_check-circle.svg"
                      alt="icon_check-circle"
                    />
                  </div>{' '}
                  Gift a Water Hand Pump
                </h3>
                <p class="text-xs text-mont text-sblue font-semibold mt-2">
                  Raised:{' '}
                  <span class="text-2xl text-mont text-sblue font-semibold">
                    £243
                  </span>
                </p>
                <p class="text-xs text-mont text-gray-600 font-medium">
                  crowded March 20, 2021 by{' '}
                  <i class="fa-regular fa-circle-user"></i>{' '}
                  <span class="font-semibold">361 supporters</span>
                </p>
              </div>
              <div class="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
                <h3 class="text-sm text-mont text-black-50 font-bold flex">
                  <div class="w-5 mr-2">
                    <img
                      src="./Icons/icon_check-circle.svg"
                      alt="icon_check-circle"
                    />
                  </div>{' '}
                  Pakistan Floods 2022 Emergency
                </h3>
                <p class="text-xs text-mont text-sblue font-semibold mt-2">
                  Raised:{' '}
                  <span class="text-2xl text-mont text-sblue font-semibold">
                    £832
                  </span>
                </p>
                <p class="text-xs text-mont text-gray-600 font-medium">
                  crowded March 18, 2021 by{' '}
                  <i class="fa-regular fa-circle-user"></i>{' '}
                  <span class="font-semibold">113 supporters</span>
                </p>
              </div>
              <div class="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
                <h3 class="text-sm text-mont text-black-50 font-bold flex">
                  <div class="w-5 mr-2">
                    <img
                      src="./Icons/icon_check-circle.svg"
                      alt="icon_check-circle"
                    />
                  </div>{' '}
                  Feed a Child
                </h3>
                <p class="text-xs text-mont text-sblue font-semibold mt-2">
                  Raised:{' '}
                  <span class="text-2xl text-mont text-sblue font-semibold">
                    £463
                  </span>
                </p>
                <p class="text-xs text-mont text-gray-600 font-medium">
                  crowded February 20, 2021 by{' '}
                  <i class="fa-regular fa-circle-user"></i>{' '}
                  <span class="font-semibold">75 supporters</span>
                </p>
              </div>
              <div class="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
                <h3 class="text-sm text-mont text-black-50 font-bold flex">
                  <div class="w-5 mr-2">
                    <img
                      src="./Icons/icon_check-circle.svg"
                      alt="icon_check-circle"
                    />
                  </div>{' '}
                  Yemen Emergency
                </h3>
                <p class="text-xs text-mont text-sblue font-semibold mt-2">
                  Raised:{' '}
                  <span class="text-2xl text-mont text-sblue font-semibold">
                    £573
                  </span>
                </p>
                <p class="text-xs text-mont text-gray-600 font-medium">
                  crowded January 3, 2021 by{' '}
                  <i class="fa-regular fa-circle-user"></i>{' '}
                  <span class="font-semibold">6 supporters</span>
                </p>
              </div>
              <div class="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white">
                <h3 class="text-sm text-mont text-black-50 font-bold flex">
                  <div class="w-5 mr-2">
                    <img
                      src="./Icons/icon_check-circle.svg"
                      alt="icon_check-circle"
                    />
                  </div>{' '}
                  Yemen Emergency
                </h3>
                <p class="text-xs text-mont text-sblue font-semibold mt-2">
                  Raised:{' '}
                  <span class="text-2xl text-mont text-sblue font-semibold">
                    £573
                  </span>
                </p>
                <p class="text-xs text-mont text-gray-600 font-medium">
                  crowded January 3, 2021 by{' '}
                  <i class="fa-regular fa-circle-user"></i>{' '}
                  <span class="font-semibold">6 supporters</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-blue">
          <div class="w-full h-auto px-5 py-12 flex lg:flex-row flex-col container mx-auto gap-10">
            <div class="lg:w-2/3 w-full h-auto">
              <p class="text-white text-mont text-lg font-semibold">
                Faithful believers are to each other as the bricks of a wall,
                supporting and reinforcing each other. So saying, the Prophet
                Muhammad clasped his hands by interlocking his fingers.
              </p>
            </div>
            <div class="lg:w-1/3 w-full h-auto flex items-end">
              <p class="text-base text-mont text-white">
                Prophet Muhammed (Al-Bukhari)
              </p>
              <img
                class="w-16 ml-6"
                src="./Icons/icon_quote-right-filled.svg"
                alt="icon_quote-right-filled"
              />
            </div>
          </div>
        </section>
        <section class="w-full h-auto lg:mt-12">
          <div class="w-full h-auto px-5 py-8 container mx-auto">
            <div class="lg:w-2/3 w-full h-auto">
              <h1 class="text-mont text-black-50 font-bold text-3xl text-left">
                We can’t do this alone
              </h1>
              <p class="mt-4 text-mont text-gray-600 text-xl text-left">
                Making a difference means coming together to do something bigger
                and bolder than anyone thought possible. To make it happen, we
                need you to join us and make a commitment to changing the world.
              </p>
            </div>
            <div class="w-full h-auto mt-6">
              <p class="text-xl text-mont text-black-50 text-left">
                Here’s <span class="font-semibold">3 quick ways</span> you can
                do it:
              </p>
            </div>
            <div class="w-full h-auto flex lg:flex-row flex-col justify-between mt-8 py-6 lg:px-10 px-4 lg:px-0">
              <div class="w-80 h-auto flex">
                <div class="w-40 h-auto flex items-center justify-start relative">
                  <p class="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                    1.
                  </p>
                  <img
                    src="./images/illustration_donate-color.png"
                    alt="illustration_donate-color"
                  />
                </div>
                <div class="w-64 py-8 px-2">
                  <div class="border-b-2 border-owhite">
                    <h2 class="text-lg text-mont text-black-50 font-bold">
                      Donate
                    </h2>
                  </div>
                  <div>
                    <p class="text-base text-mont text-gray mt-6">
                      your hard-earned money to a campaign that connects with
                      your goals
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-80 h-auto flex">
                <div class="w-40 h-auto flex items-center justify-start relative">
                  <p class="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                    2.
                  </p>
                  <img
                    src="./images/illustration_campaign-color.png"
                    alt="illustration_campaign-color"
                  />
                </div>
                <div class="w-64 py-8 px-2">
                  <div class="border-b-2 border-owhite">
                    <h2 class="text-lg text-mont text-black-50 font-bold">
                      Campaign
                    </h2>
                  </div>
                  <div>
                    <p class="text-base text-mont text-gray mt-6">
                      and devote yourself to a cause that will make the world a
                      better place
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-80 h-auto flex">
                <div class="w-40 h-auto flex items-center justify-start relative">
                  <p class="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                    3.
                  </p>
                  <img
                    src="./images/illustration_administrate-color.png"
                    alt="illustration_administrate-color"
                  />
                </div>
                <div class="w-64 py-8 px-2">
                  <div class="border-b-2 border-owhite">
                    <h2 class="text-lg text-mont text-black-50 font-bold">
                      Administrate
                    </h2>
                  </div>
                  <div>
                    <p class="text-base text-mont text-gray mt-6">
                      to ensure everything runs smoothly from beginning to end
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full h-auto flex lg:flex-row flex-col lg:items-center">
              <p class="text-xl text-mont font-semibold text-blue">
                When you’re ready, everything starts with a click…
              </p>
              <button class="w-1/2 lg:w-auto text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2 lg:ml-6 mt-4 lg:mt-0">
                REGISTER NOW
              </button>
            </div>
          </div>
        </section>
        <section class="w-full h-auto mt-12 bg-o2white">
          <div class="w-full h-auto px-5 py-16 container mx-auto">
            <div class="w-full h-auto text-center">
              <h1 class="text-3xl text-mont text-black-50 font-bold">
                Here’s what our community has to say
              </h1>
            </div>
            <div class="w-full h-auto grid lg:grid-cols-3 grid-cols-1 gap-4 justify-between mt-16">
              <div class="bg-white h-auto rounded-xl p-8 relative">
                <img
                  class="absolute top-0 left-0"
                  src="./Icons/shape_testimonial-horizontal.svg"
                  alt="shape_testimonial-horizontal"
                />
                <p class="text-gray-600 text-mont text-sm h-32">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </p>
                <div class="flex flex-row">
                  <div class="w-11 h-auto flex items-center">
                    <img src="./images/kid.png" alt="kid" />
                  </div>
                  <div class="w-80 h-auto ml-3 flex items-center justify-between">
                    <div>
                      <p class="text-blue text-mont font-bold text-lg">
                        Andrew
                      </p>
                      <p class="text-xs text-mont text-gray font-medium">
                        6 years old
                      </p>
                    </div>
                    <img
                      class="w-8"
                      src="./Icons/icon_quote-right-filled.svg"
                      alt="icon_quote-right-filled"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-white h-auto rounded-xl p-8 relative">
                <img
                  class="absolute top-0 left-0"
                  src="./Icons/shape_testimonial-horizontal.svg"
                  alt="shape_testimonial-horizontal"
                />
                <p class="text-gray-600 text-mont text-sm h-32">
                  Suspendisse quis nulla cursus, elementum eros quis, consequat
                  tortor. Nullam sed ex vel mi dignissim molestie id at est.
                  Integer feugiat gravida purus, vel ultrices mauris.
                </p>
                <div class="flex flex-row">
                  <div class="w-11 h-auto flex items-center">
                    <img src="./images/UN0241710.png" alt="kid" />
                  </div>
                  <div class="w-80 h-auto ml-3 flex items-center justify-between">
                    <div>
                      <p class="text-blue text-mont font-bold text-lg">
                        Sumayia
                      </p>
                      <p class="text-xs text-mont text-gray font-medium">
                        8 years old
                      </p>
                    </div>
                    <img
                      class="w-8"
                      src="./Icons/icon_quote-right-filled.svg"
                      alt="icon_quote-right-filled"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-white h-auto rounded-xl p-8 relative">
                <img
                  class="absolute top-0 left-0"
                  src="./Icons/shape_testimonial-horizontal.svg"
                  alt="shape_testimonial-horizontal"
                />
                <p class="text-gray-600 text-mont text-sm h-32">
                  Donec non justo diam. Fusce egestas diam sit amet turpis
                  condimentum, vel imperdiet lectus aliquam. Nunc malesuada enim
                  viverra eros laoreet, eget tincidunt erat aliquet.
                </p>
                <div class="flex flex-row">
                  <div class="w-11 h-auto flex items-center">
                    <img src="./images/childhijab.png" alt="kid" />
                  </div>
                  <div class="w-80 h-auto ml-3 flex items-center justify-between">
                    <div>
                      <p class="text-blue text-mont font-bold text-lg">
                        Zakyia
                      </p>
                      <p class="text-xs text-mont text-gray font-medium">
                        9 years old
                      </p>
                    </div>
                    <img
                      class="w-8"
                      src="./Icons/icon_quote-right-filled.svg"
                      alt="icon_quote-right-filled"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full h-auto my-12">
          <div class="w-full h-auto container mx-auto px-5">
            <div class="w-full h-auto text-center">
              <h1 class="text-3xl text-mont text-black-50 font-bold">
                Upcoming Events
              </h1>
            </div>
            <div class="w-full h-auto mt-10">
              <div class="owl-carousel events-carousel owl-theme space-x-4">
                <div class="item lg:w-full w-2/3 px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white">
                  <div class="w-full h-auto flex items-center justify-between">
                    <div class="w-2/3 h-auto">
                      <p class="text-mont text-nblue text-xs font-semibold">
                        December 2022
                      </p>
                      <h3 class="text-mont text-3xl font-semibold text-blue">
                        16-21
                      </h3>
                    </div>
                    <div class="w-6 h-auto flex items-center">
                      <img
                        src="./Icons/icon_calendar-clock.svg"
                        alt="icon_calendar-clock"
                      />
                    </div>
                  </div>
                  <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                    <h1 class="text-mont text-sm text-black-50 font-bold">
                      The Pakistan Rickshaw Challenge
                    </h1>
                  </div>
                  <div class="w-full h-auto flex items-center mt-4">
                    <span class="text-mont text-xs font-semibold text-green">
                      FR Target:
                    </span>
                    <p class="text-mont text-xl font-semibold text-green ml-2">
                      £1,200
                    </p>
                  </div>
                  <div class="w-full h-auto flex items-center mt-1">
                    <span class="text-mont text-xs font-semibold text-gray">
                      Reg Fee:
                    </span>
                    <p class="text-mont text-xl font-semibold text-gray ml-1">
                      £300
                    </p>
                  </div>
                </div>
                <div class="item lg:w-full w-2/3 px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white">
                  <div class="w-full h-auto flex items-center justify-between">
                    <div class="w-2/3 h-auto">
                      <p class="text-mont text-nblue text-xs font-semibold">
                        January 2023
                      </p>
                      <h3 class="text-mont text-3xl font-semibold text-blue">
                        8
                      </h3>
                    </div>
                    <div class="w-6 h-auto flex items-center">
                      <img
                        src="./Icons/icon_calendar-clock.svg"
                        alt="icon_calendar-clock"
                      />
                    </div>
                  </div>
                  <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                    <h1 class="text-mont text-sm text-black-50 font-bold">
                      Bangladesh Tour
                    </h1>
                  </div>
                  <div class="w-full h-auto flex items-center mt-4">
                    <span class="text-mont text-xs font-semibold text-green">
                      FR Target:
                    </span>
                    <p class="text-mont text-xl font-semibold text-green ml-2">
                      £1,400
                    </p>
                  </div>
                  <div class="w-full h-auto flex items-center mt-1">
                    <span class="text-mont text-xs font-semibold text-gray">
                      Reg Fee:
                    </span>
                    <p class="text-mont text-xl font-semibold text-gray ml-1">
                      £250
                    </p>
                  </div>
                </div>
                <div class="item lg:w-full w-2/3 px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white">
                  <div class="w-full h-auto flex items-center justify-between">
                    <div class="w-2/3 h-auto">
                      <p class="text-mont text-nblue text-xs font-semibold">
                        January 2023
                      </p>
                      <h3 class="text-mont text-3xl font-semibold text-blue">
                        8-14
                      </h3>
                    </div>
                    <div class="w-6 h-auto flex items-center">
                      <img
                        src="./Icons/icon_calendar-clock.svg"
                        alt="icon_calendar-clock"
                      />
                    </div>
                  </div>
                  <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                    <h1 class="text-mont text-sm text-black-50 font-bold">
                      Lebanon “One Ummah” Deployment
                    </h1>
                  </div>
                  <div class="w-full h-auto flex items-center mt-4">
                    <span class="text-mont text-xs font-semibold text-green">
                      FR Target:
                    </span>
                    <p class="text-mont text-xl font-semibold text-green ml-2">
                      £500
                    </p>
                  </div>
                  <div class="w-full h-auto flex items-center mt-1">
                    <span class="text-mont text-xs font-semibold text-gray">
                      Reg Fee:
                    </span>
                    <p class="text-mont text-xl font-semibold text-gray ml-1">
                      £450
                    </p>
                  </div>
                </div>
                <div class="item lg:w-full w-2/3 px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white">
                  <div class="w-full h-auto flex items-center justify-between">
                    <div class="w-2/3 h-auto">
                      <p class="text-mont text-nblue text-xs font-semibold">
                        February 2023
                      </p>
                      <h3 class="text-mont text-3xl font-semibold text-blue">
                        23-25
                      </h3>
                    </div>
                    <div class="w-6 h-auto flex items-center">
                      <img
                        src="./Icons/icon_calendar-clock.svg"
                        alt="icon_calendar-clock"
                      />
                    </div>
                  </div>
                  <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                    <h1 class="text-mont text-sm text-black-50 font-bold">
                      Istanbul Run
                    </h1>
                  </div>
                  <div class="w-full h-auto mt-4 flex justify-center mt-8">
                    <button class="text-sm text-nblue text-mont font-bold px-6 py-2 border-2 border-fyellow rounded-xl">
                      MORE INFO
                    </button>
                  </div>
                </div>
                <div class="item lg:w-full w-2/3 px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white">
                  <div class="w-full h-auto flex items-center justify-between">
                    <div class="w-2/3 h-auto">
                      <p class="text-mont text-nblue text-xs font-semibold">
                        April 2023
                      </p>
                      <h3 class="text-mont text-3xl font-semibold text-blue">
                        3-9
                      </h3>
                    </div>
                    <div class="w-6 h-auto flex items-center">
                      <img
                        src="./Icons/icon_calendar-clock.svg"
                        alt="icon_calendar-clock"
                      />
                    </div>
                  </div>
                  <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                    <h1 class="text-mont text-sm text-black-50 font-bold">
                      London to the Isle of Sheppey Cycling Challenge
                    </h1>
                  </div>
                  <div class="w-full h-auto flex items-center mt-4">
                    <span class="text-mont text-xs font-semibold text-green">
                      FR Target:
                    </span>
                    <p class="text-mont text-xl font-semibold text-green ml-2">
                      £2,000
                    </p>
                  </div>
                  <div class="w-full h-auto flex items-center mt-1">
                    <span class="text-mont text-xs font-semibold text-gray">
                      Reg Fee:
                    </span>
                    <p class="text-mont text-xl font-semibold text-gray ml-1">
                      £500
                    </p>
                  </div>
                </div>
                <div class="item lg:w-full w-2/3 px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white">
                  <div class="w-full h-auto flex items-center justify-between">
                    <div class="w-2/3 h-auto">
                      <p class="text-mont text-nblue text-xs font-semibold">
                        July 2022
                      </p>
                      <h3 class="text-mont text-3xl font-semibold text-blue">
                        28
                      </h3>
                    </div>
                    <div class="w-6 h-auto flex items-center">
                      <img
                        src="./Icons/icon_calendar-clock.svg"
                        alt="icon_calendar-clock"
                      />
                    </div>
                  </div>
                  <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                    <h1 class="text-mont text-sm text-black-50 font-bold">
                      Muslim Charity Run
                    </h1>
                  </div>
                  <div class="w-full h-auto flex items-center mt-4">
                    <span class="text-mont text-xs font-semibold text-green">
                      FR Target:
                    </span>
                    <p class="text-mont text-xl font-semibold text-green ml-2">
                      £800
                    </p>
                  </div>
                  <div class="w-full h-auto flex items-center mt-1">
                    <span class="text-mont text-xs font-semibold text-gray">
                      Reg Fee:
                    </span>
                    <p class="text-mont text-xl font-semibold text-gray ml-1">
                      £200
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-end justify-center container mx-auto lg:-mt-10 mt-4">
              <a
                href="/appeal_page"
                class="text-center text-nblue text-mont font-medium text-sm border-2 border-lgray rounded-lg px-4 py-2 z-50"
              >
                View All
              </a>
            </div>
          </div>
        </section>
        <section class="w-full h-auto mt-12 bg-owhite">
          <div class="w-full h-auto px-5 py-16 container mx-auto">
            <div class="w-full h-auto">
              <h1 class="text-mont text-black-50 text-3xl font-bold text-center lg:text-left">
                Latest News
              </h1>
            </div>
            <div class="w-full h-auto mt-8 flex lg:flex-row flex-col">
              <div class="lg:w-1/2 w-full h-auto px-6 pb-4 pt-40 bg-unicef">
                {/* <img class="absolute top-0 left-0" src="./images/©-UNICEF_UNI235471_Willocq-1@2x.png" alt="©-UNICEF" /> */}
                <div class="w-20 h-auto text-center">
                  <p class="text-base text-mont text-white font-bold px-4 py-2 bg-red">
                    NEW
                  </p>
                </div>
                <div class="w-full h-auto mt-4">
                  <h1 class="text-white text-mont text-4xl font-bold">
                    Donec turpis eros, euismod nec justo sit amet
                  </h1>
                </div>
                <div class="w-full h-auto mt-2">
                  <p class="text-mont text-l2gray text-base">
                    Pellentesque consequat dui turpis, nec porta nisi varius
                    quis. Ut mattis velit quis mi consectetur, non rhoncus metus
                    dapibus.
                  </p>
                </div>
                <div class="w-full h-auto flex items-center mt-2">
                  <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                  <p class="text-mont text-gray text-xs ml-2">July 3, 2022</p>
                  <p class="text-mont text-gray text-xs ml-2">.</p>
                  <p class="text-mont text-gray text-xs ml-2">
                    5 minutes to read
                  </p>
                </div>
              </div>
              <div class="lg:w-1/2 w-full h-auto flex lg:flex-row flex-col justify-around mt-8 lg:mt-0">
                <div class="lg:w-80 w-full h-auto">
                  <img
                    className="rounded-xl w-full"
                    src="./images/niger.png"
                    alt="niger"
                  />
                  <div class="lg:px-8 px-0">
                    <h2 class="mt-4 text-black-50 text-mont text-lg font-bold">
                      Mauris vel ornare massa, at ullamcorper ligula
                    </h2>
                    <p class="text-base tet-mont text-dgray mt-2">
                      Cras ullamcorper dolor ac viverra finibus. Fusce iaculis
                      accumsan ex, in placerat arcu luctus vitae. Fusce velit
                      lacus, hendrerit scelerisque efficitur eget, placerat eu
                      lectus.
                    </p>
                    <div class="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p class="text-mont text-gray text-xs ml-2">
                        April 20, 2022
                      </p>
                      <p class="text-mont text-gray text-xs ml-2">.</p>
                      <p class="text-mont text-gray text-xs ml-2">
                        3 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-80 w-full h-auto">
                  <img
                    className="rounded-xl w-full"
                    src="./images/UN0691098 (1)_0.png"
                    alt="UN0691098 (1)_0"
                  />
                  <div class="lg:px-8 px-0">
                    <h2 class="mt-4 text-black-50 text-mont text-lg font-bold">
                      Aenean ac iaculis urna, quis condimentum elit
                    </h2>
                    <p class="text-base tet-mont text-dgray mt-2">
                      Nullam eleifend faucibus mi, ac dapibus lectus interdum
                      eu. Suspendisse sed semper augue, nec pulvinar orci.
                      Praesent tincidunt purus condimentum efficitur fermentum.
                    </p>
                    <div class="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p class="text-mont text-gray text-xs ml-2">
                        March 7, 2022
                      </p>
                      <p class="text-mont text-gray text-xs ml-1">.</p>
                      <p class="text-mont text-gray text-xs ml-1">
                        4 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full h-auto mt-8 flex justify-center">
              <button class="text-center text-nblue text-mont font-medium text-sm border-2 border-lgray rounded-lg lg:px-48 px-8 py-2">
                View All
              </button>
            </div>
          </div>
        </section>
        <section class="w-full h-auto mt-12 container mx-auto">
          <div class="w-full h-auto lg:py-8 py-2 px-5 flex lg:flex-row flex-col lg:gap-16 gap-8">
            <div class="lg:w-1/2 w-full h-auto p-2">
              <h1 class="text-mont text-black-50 text-3xl font-bold">
                Ways to give
              </h1>
              <p class="text-mont text-gray-600 text-xl mt-2">
                Crowd funding lets people play a more important role in their
                charity. Start building your network of giving today.
              </p>
              <div
                class="w-full h-auto border-2 rounded-xl text-gray-300 flex gap-4 lg:items-centerimport AppealSlider from '../components/AppealSlider';
 items-start lg:mt-20 mt-10 p-6"
              >
                <div className="w-1/3 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                  <p class="text-mont text-nblue text-4xl font-medium">01.</p>
                  <img
                    src="./Icons/illustration_quick-donation.svg"
                    alt="illustration_quick-donation"
                  />
                </div>
                <div class="w-2/3 flex flex-col justify-between">
                  <h3 class="text-lg text-mont text-black-50 font-bold">
                    You could make a quick one off donation
                  </h3>
                  <p class="text-gray text-mont text-base ">
                    For those last minute donors or when your unsure of how much
                    to give
                  </p>
                </div>
              </div>
              <div class="w-full h-auto border-2 rounded-xl text-gray-300 flex gap-4 lg:items-center items-start lg:mt-2 mt-8 p-6">
                <div className="w-1/3 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                  <p class="text-mont text-nblue text-4xl font-medium">02.</p>
                  <img
                    src="./Icons/illustration_subscription-donation.svg"
                    alt="illustration_subscription-donation"
                  />
                </div>
                <div class="w-2/3 flex flex-col justify-between">
                  <h3 class="text-lg text-mont text-black-50 font-bold">
                    Subscription donation
                  </h3>
                  <p class="text-gray text-mont text-base ">
                    Making a donation on every Friday or come Ramadan for that
                    continuous support
                  </p>
                </div>
              </div>
              <div class="w-full h-auto border-2 rounded-xl text-gray-300 flex gap-4 lg:items-center items-start lg:mt-2 mt-8 p-6">
                <div className="w-1/3 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                  <p class="text-mont text-nblue text-4xl font-medium">03.</p>
                  <img
                    src="./Icons/illustration_project-backed-donation.svg"
                    alt="illustration_project-backed-donation"
                  />
                </div>
                <div class="w-2/3 flex flex-col justify-between">
                  <h3 class="text-lg text-mont text-black-50 font-bold">
                    Project Backed donation
                  </h3>
                  <p class="text-gray text-mont text-base ">
                    This is great when you back a project that’s close to your
                    heart and receive updates
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 w-full h-auto lg:pl-4  p-2 lg:p-0">
              <img
                className="lg:rounded-l-xl rounded-xl"
                src="./images/Group 15617.png"
                alt="Group 15617"
              />
              <h1 class="lg:text-4xl text-3xl text-blue text-mont font-bold mt-8 lg:w-4/5 w-full">
                Don’t wait for the world to improve.
              </h1>
              <p class="text-gray-600 text-xl text-mont mt-4">
                Drive meaningful change.
              </p>
              <button class="lg:w-auto w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-5 py-3 mt-4">
                REGISTER NOW
              </button>
            </div>
          </div>
        </section>
        <section class="w-full h-auto mt-16 relative bg-l2gray">
          <div className="container mx-auto">
            <img
              class="absolute top-1/2 left-4 w-20 hidden lg:block"
              src="./Icons/Ellipse 1804.svg"
              alt="Ellipse 1804"
            />
            <img
              class="absolute bottom-56 right-56 hidden lg:block"
              src="./Icons/Ellipse 1802.svg"
              alt="Ellipse 1802"
            />
            <img
              class="absolute -top-40  right-20 lg:w-64 w-32 hidden lg:block"
              src="./Icons/Ellipse 1793.svg"
              alt="Ellipse 1793"
            />
            <div class="lg:w-3/5 w-11/12 mx-auto h-auto py-16">
              <div class="w-full h-auto flex lg:flex-row flex-col justify-between items-center">
                <h1 class="text-mont text-black-50 font-bold text-3xl">FAQ</h1>
                <p class="text-gray-600 text-mont text-xl text-center lg:text-left">
                  Do you have more questions? Check out our full{' '}
                  <span class="text-dblue text-mont font-semibold">FAQ</span>
                </p>
              </div>
              <div class="w-full h-auto mt-6 p-6 border-2 rounded-xl border-lgray flex justify-between items-start">
                <div>
                  <h3 class="text-lg text-mont font-bold text-black-50">
                    Does all my donation go to the appeal?
                  </h3>
                  {!showFaq1 ? (
                    <p class="text-base text-mont text-gray mt-2">
                      You can caccel your donation at any time. However if your
                      last paymentt of the month is still yet to come this will
                      still be deducted. Until the next month.
                    </p>
                  ) : null}
                </div>
                {showFaq1 ? (
                  <img
                    className="cursor-pointer"
                    onClick={() => setshowFaq1(false)}
                    src="./Icons/icon_plus.svg"
                    alt="icon_plus"
                  />
                ) : (
                  <img
                    className="cursor-pointer"
                    onClick={() => setshowFaq1(true)}
                    src="./Icons/icon_minus.svg"
                    alt="icon_minus"
                  />
                )}
              </div>
              <div class="w-full h-auto mt-6 p-6 border-2 rounded-xl border-lgray flex justify-between items-start">
                <div>
                  <h3 class="text-lg text-mont font-bold text-black-50">
                    Can I cancel my subscription?
                  </h3>
                  {!showFaq2 ? (
                    <p class="text-base text-mont text-gray mt-2">
                      You can caccel your donation at any time. However if your
                      last paymentt of the month is still yet to come this will
                      still be deducted. Until the next month.
                    </p>
                  ) : null}
                </div>
                {showFaq2 ? (
                  <img
                    className="cursor-pointer"
                    onClick={() => setshowFaq2(false)}
                    src="./Icons/icon_plus.svg"
                    alt="icon_plus"
                  />
                ) : (
                  <img
                    className="cursor-pointer"
                    onClick={() => setshowFaq2(true)}
                    src="./Icons/icon_minus.svg"
                    alt="icon_minus"
                  />
                )}
              </div>
              <div class="w-full h-auto mt-6 p-6 border-2 rounded-xl border-lgray flex justify-between items-start">
                <div>
                  <h3 class="text-lg text-mont font-bold text-black-50">
                    Can I start my own appeal?
                  </h3>
                  {!showFaq3 ? (
                    <p class="text-base text-mont text-gray mt-2">
                      You can caccel your donation at any time. However if your
                      last paymentt of the month is still yet to come this will
                      still be deducted. Until the next month.
                    </p>
                  ) : null}
                </div>
                {showFaq3 ? (
                  <img
                    className="cursor-pointer"
                    onClick={() => setshowFaq3(false)}
                    src="./Icons/icon_plus.svg"
                    alt="icon_plus"
                  />
                ) : (
                  <img
                    className="cursor-pointer"
                    onClick={() => setshowFaq3(true)}
                    src="./Icons/icon_minus.svg"
                    alt="icon_minus"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        <section class="w-full h-auto bg-yellow">
          <div className="container mx-auto">
            <div class="lg:w-3/5 w-11/12 mx-auto h-auto py-16">
              <div class="w-full h-auto">
                <h1 class="text-3xl text-mont text-black-50 font-bold text-center lg:text-left">
                  Contact Us
                </h1>
              </div>
              <div class="w-full h-auto mt-8 flex lg:flex-row flex-col">
                <div class="lg:w-1/3 w-full h-auto">
                  <div
                    className={
                      !register
                        ? 'w-full h-auto border-4 rounded-xl border-l2black p-4'
                        : 'w-full h-auto border-4 rounded-xl bg-white border-lblack p-4'
                    }
                  >
                    <div class="w-full h-auto flex justify-between items-center">
                      <h3
                        class="text-lg text-black-50 text-mont font-bold flex items-center
                                    "
                      >
                        <input
                          className="mr-2"
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                          checked={register}
                          onClick={() => setregister(true)}
                        />{' '}
                        Register
                      </h3>
                      <img src="./Icons/user plus.svg" alt="user_plus" />
                    </div>
                    <p class="text-gray-600 text-mont text-mont text-base mt-4">
                      I want to help Aid Humanity and receive future appeals
                    </p>
                  </div>
                  <div
                    className={
                      register
                        ? 'w-full h-auto border-4 rounded-xl border-l2black mt-4 p-4'
                        : 'w-full h-auto border-4 rounded-xl bg-white border-lblack p-4 mt-4'
                    }
                  >
                    <div class="w-full h-auto flex justify-between items-center">
                      <h3
                        class="text-lg text-black-50 text-mont flex items-center font-bold flex items-center
                                    "
                      >
                        <input
                          className="mr-2"
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                          checked={!register}
                          onClick={() => setregister(false)}
                        />{' '}
                        Fundraiser
                      </h3>
                      <img src="./Icons/Group 15461.svg" alt="Group 15461" />
                    </div>
                    <p class="text-gray-600 text-mont text-mont text-base mt-4">
                      Become a fundraiser and kick start your own Charity appeal
                    </p>
                  </div>
                </div>
                <div class="lg:w-2/3 w-full h-auto lg:px-4 mt-6 lg:mt-0">
                  <form action="">
                    <input
                      class="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border-2 border-lblack rounded-lg p-2"
                      type="text"
                      name=""
                      id=""
                      value="Name & Surname *"
                    />
                    <input
                      class="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border-2 border-lblack rounded-lg p-2 mt-4"
                      type="text"
                      name=""
                      id=""
                      value="Email *"
                    />
                    <textarea
                      class="w-full h-auto text-black-50 text-xs text-mont font-medium bg-yellow border-2 border-lblack rounded-lg p-2 mt-4"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    >
                      Please provide as much detailed information as possible.
                      Thank you *
                    </textarea>
                    <button class="lg:w-auto w-full text-xs text-mont text-black-50 font-bold rounded-lg bg-green text-center px-12 py-4 mt-4">
                      SUBMIT MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;

{
  /* <div class="w-popup h-auto hidden absolute z-10 rounded-2xl bg-white">
            <div class="w-full h-auto border-b-2 border-l2black p-6 flex justify-between">
                <h1 class="text-lg text-mont text-black-50 font-bold">Donate Now</h1>
                <button class="text-lg text-gray"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
            <div class="w-full h-auto px-6 pt-10 flex justify-between items-end">
                <img src="./images/vertical Pakistan Floods 2022.png" alt="Pakistan Floods 2022" />
                <img src="./images/vertical maxresdefault.png" alt="maxresdefault" />
                <img src="./images/vertical 36404f884e19.png" alt="36404f884e19" />
                <img src="./images/vertical rf1110721-somali-refugee-family-in-yemen-1200x800-images.png" alt="somali-refugee-family-in-yemen" />
            </div>
            <div class="w-full h-auto bg-l2gray px-6">
                <div class="w-full h-auto flex justify-between items-start">
                    <div class="relative w-32 h-auto flex flex-col bg-white px-2 py-4 rounded-b-2xl text-start items-center">
                        <img class="absolute left-1/3 -top-3" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                        <h3 class="text-xs text-mont text-black-50 font-bold">Pakistan Floods</h3>
                        <button class="text-blue mx-auto mt-12 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                    </div>
                    <div class="relative w-32 h-auto flex flex-col bg-white px-2 py-4 rounded-b-2xl text-start items-center">
                        <img class="absolute left-1/3 -top-3" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />
                        <h3 class="text-xs text-mont text-black-50 font-bold">Support an Orphaned Child</h3>
                        <button class="text-blue mx-auto mt-8 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                    </div>
                    <div class="relative w-32 h-auto flex flex-col bg-white px-2 py-4 rounded-b-2xl text-start items-center">
                        <img class="absolute left-1/3 -top-3" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                        <h3 class="text-xs text-mont text-black-50 font-bold">Water Hands Pumps</h3>
                        <button class="text-blue mx-auto mt-8 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                    </div>
                    <div class="relative w-32 h-auto flex flex-col bg-white px-2 py-4 rounded-b-2xl text-start items-center">
                        <img class="absolute left-1/3 -top-3" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />
                        <h3 class="text-xs text-mont text-black-50 font-bold">Yemen Emergency</h3>
                        <button class="text-blue mx-auto mt-12 text-sm font-bold text-mont p-2 rounded-lg border-2 border-lgray">DONATE</button>
                    </div>
                </div>
                <div class="w-full h-auto mt-8">
                    <hr class="solid" />
                </div>
                <div class="w-full h-auto p-4 mt-8 text-center">
                    <h1 class="text-mont text-base text-gray-600">Donate to <span class="font-bold">Support an Orphaned Child</span></h1>
                    <p class="mt-2 text-gray-600 text-mont text-xs">fundraised by <span class="text-nblue font-semibold"><i class="fa-regular fa-circle-user"></i> Ron Hill</span></p>
                </div>
            </div>
            <div class="w-full h-auto p-6">
                <h1 class="text-black-50 text-4xl text-mont font-bold text-center">Donation amount</h1>
                <div class="w-full h-auto mt-4 flex rounded-lg border-2 border-lgray">
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£10</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£20</p>
                    </div>
                    <div class="w-1/5 h-auto bg-sblue px-6 py-4">
                        <p class="text-white text-mont text-center text-xs font-medium">£30</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£50</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£100</p>
                    </div>
                </div>
                <div class="w-full h-auto mt-4 flex justify-between rounded-lg border-2 border-lgray">
                    <div class="w-1/5 h-auto p-4 flex justify-around items-center">
                        <p class="text-xl text-mont font-medium text-dgray">£</p>
                        <h1 class="text-blue text-mont text-5xl font-bold">30</h1>
                    </div>
                    <button class="w-1/5 h-auto p-4 flex justify-around items-center">
                        <p class="text-xl text-mont font-medium text-dgray">GBP</p>
                        <img class="ml-2" src="./Icons/angle-down.svg" alt="angle-down" />
                    </button>
                </div>
                <button class="w-full h-auto bg-green mt-4 px-32 py-4 rounded-lg text-center">
                    <p class="text-xs text-mont text-black-50 font-bold">CONTINUE</p>
                </button>
            </div>
        </div>
        <div class="w-popup h-auto hidden absolute z-10 rounded-2xl bg-white">
            <div class="w-full h-auto border-b-2 border-l2black p-6 flex justify-between">
                <h1 class="text-lg text-mont text-black-50 font-bold">Quick Donate</h1>
                <button class="text-lg text-gray"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
            <div class="w-full h-auto bg-l2gray px-6 py-10 flex justify-between">
                <button class="w-1/3 h-auto text-black-50 text-mont text-sm font-medium flex justify-around px-6 py-4 items-center"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" /><img src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />Sadhakah</button>
                <button class="w-1/3 h-auto text-black-50 text-mont text-sm font-medium flex justify-around px-6 py-4 items-center"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" /><img class="mx-4" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />Sadhakah Jaraiya</button>
                <button class="w-1/3 h-auto text-black-50 text-mont text-sm font-medium flex justify-around px-8 py-4 items-center"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" /><img src="./Icons/badge_zakat.svg" alt="badge_zakar" />Zakat</button>
            </div>
            <div class="w-full h-auto p-6">
                <h1 class="text-black-50 text-4xl text-mont font-bold text-center">Donation amount</h1>
                <div class="w-full h-auto mt-4 flex rounded-lg border-2 border-lgray">
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£10</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£20</p>
                    </div>
                    <div class="w-1/5 h-auto bg-sblue px-6 py-4">
                        <p class="text-white text-mont text-center text-xs font-medium">£30</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4 border-r-2 border-lgray">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£50</p>
                    </div>
                    <div class="w-1/5 h-auto px-6 py-4">
                        <p class="text-black-50 text-mont text-center text-xs font-medium">£100</p>
                    </div>
                </div>
                <div class="w-full h-auto mt-4 flex justify-between rounded-lg border-2 border-lgray">
                    <div class="w-1/5 h-auto p-4 flex justify-around items-center">
                        <p class="text-xl text-mont font-medium text-dgray">£</p>
                        <h1 class="text-blue text-mont text-5xl font-bold">30</h1>
                    </div>
                    <button class="w-1/5 h-auto p-4 flex justify-around items-center">
                        <p class="text-xl text-mont font-medium text-dgray">GBP</p>
                        <img class="ml-2" src="./Icons/angle-down.svg" alt="angle-down" />
                    </button>
                </div>
                <button class="w-full h-auto bg-green mt-4 px-32 py-4 rounded-lg text-center">
                    <p class="text-xs text-mont text-black-50 font-bold">CONTINUE</p>
                </button>
            </div>
        </div> */
}
