import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeService from '../services/home';
import HomeSlider from '../components/home/HomeSlider';
import HomeAppealSection from '../components/home/HomeAppealSection';
import HomeAchievement from '../components/home/HomeAcheivement';
import HomeUpcomingEvent from '../components/home/HomeUpcomingEvent';
import HomeContact from '../components/home/HomeContact';
import Loading from '../components/common/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/auth/userSlice';
import HomeCommunityFeedback from '../components/home/HomeCommunityFeedback';
import { setBodyOverflowHidden } from '../redux/common/CommonSlice';
import HomeMap from '../components/home/HomeMap';
import DonateModal from '../components/modal/DonateModal';

const Home = () => {
  const [showFaq1, setshowFaq1] = React.useState(false);
  const [showFaq2, setshowFaq2] = React.useState(true);
  const [showFaq3, setshowFaq3] = React.useState(true);
  const [homeData, setHomeData] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);

  const { loading } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);


  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const fetchHomeData = async () => {
    dispatch(setLoading(true));
    try {
      const data = await HomeService.getHomeData();
      if (data) {
        setHomeData(data);
      }
    } catch (e) {
    } finally {
      setTimeout(() => dispatch(setLoading(false)), 2500);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const overflowHidden = () => {
    dispatch(setBodyOverflowHidden(true));
  };

  const overflowVisible = () => {
    dispatch(setBodyOverflowHidden(false));
  };

  const navigate = useNavigate();

  const handleRegistration = (event) => {
    event.stopPropagation();
    if (user) {
      navigate("/appeals");

    }
    else {
      setShowLogin(true);
    }
  }

  const { appeals, achievements, upcoming_events } = homeData || [];
  const homeSliderAppeals = appeals
    ? appeals.length >= 3
      ? appeals.slice(0, 3)
      : appeals
    : [];
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Header
          showDonateButton
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          overflowHidden={overflowHidden}
          overflowVisible={overflowVisible}
        />
        <main
          class="w-full h-auto top-0 left-0 relative"
          onClick={() => {
            setShowLogin(false);
          }}
        >
          {homeSliderAppeals?.length > 0 && (
            <HomeSlider appeals={homeSliderAppeals} />
          )}
          {appeals?.length > 0 && (
            <HomeAppealSection
              {...{ appeals, setshowDonateModal, setSelectedAppealId }}
            />
          )}
          {showDonateModal && (
            <DonateModal
              showModal={showDonateModal}
              setshowModal={setshowDonateModal}
              quick={false}
              appealId={selectedAppealId}
            />
          )}
          <section
            className="w-full h-auto bg-yellow"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="container mx-auto flex lg:flex-row flex-col items-center gap-10 py-10 px-5">
              <div class="lg:w-1/3 w-full h-auto">
                <h2 class="text-2xl text-mont font-semibold text-nblue text-center lg:text-left">
                  What if one action could change the world?
                </h2>
              </div>
              <div class="lg:w-1/3 w-4/5 h-auto flex items-center justify-center gap-2">
                <img
                  class="w-12"
                  src="/Icons/icon_current-location.svg"
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
                <div
                  class="flex flex-row gap-2 lg:gap-2 flex-wrap"
                  data-aos="zoom-out-left"
                  data-aos-duration="1000"
                >
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="mr-3 w-5 lg:w-7"
                      src="/Icons/icon_water_for_all.svg"
                      alt="icon_water"
                    />{' '}
                    Water Well
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="mr-3 w-5 lg:w-8"
                      src="/Icons/icon_kids-color.svg"
                      alt="icon_kids-color"
                    />{' '}
                    Helping Children
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="mr-3 w-5 lg:w-7"
                      src="/Icons/icon_eid-color.svg"
                      alt="icon_eid-color"
                    />{' '}
                    Eid
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite lg:text-lg text-sm font-semibold lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="mr-3 w-5 lg:w-7"
                      src="/Icons/icon_ramadan-color.svg"
                      alt="icon_ramadan-color"
                    />{' '}
                    Ramadan
                  </button>
                </div>
                <div
                  class="flex flex-row gap-2 lg:gap-4 flex-wrap mt-4"
                  data-aos="zoom-out-left"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="w-5 lg:w-6 mr-3"
                      src="/Icons/icon_sponsor_an_orphan.svg"
                      alt="icon_orphan-color.svg"
                    />{' '}
                    Orphans
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="w-5 lg:w-7 mr-3"
                      src="/Icons/icon_disaster_&_emergency_appeals.svg"
                      alt="icon_emergency-color"
                    />{' '}
                    Emergencies
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="w-5 lg:w-7 mr-3"
                      src="/Icons/icon_uk-projects-color.svg"
                      alt="icon_uk-projects-color"
                    />{' '}
                    UK Projects
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="w-5 lg:w-6 mr-3"
                      src="/Icons/icon_build_a_mosque.svg"
                      alt="icon_mosque"
                    />{' '}
                    Mosque Builds
                  </button>
                  <button class="text-nblue bg-white shadow-lg border-2 border-owhite text-sm font-semibold lg:text-lg lg:px-4 px-3 h-12 flex items-center rounded-md text-mont transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                    <img
                      class="w-5 lg:w-7 mr-3"
                      src="/Icons/icon_homeless-color.svg"
                      alt="icon_homeless-color"
                    />{' '}
                    Homeless
                  </button>
                  <a
                    class="text-base text-mont text-nblue mt-4 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
                    href=""
                  >
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
              <div
                class="lg:w-3/4 w-full flex lg:gap-12 h-auto"
                data-aos="flip-up"
                data-aos-duration="500"
              >
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
                <div
                  class="flex flex-row justify-between absolute lg:-bottom-10 -bottom-6 lg:left-1/4 left-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p class="lg:text-2xl text-xs text-white text-mont font-semibold">
                    we transfer
                  </p>
                  <img
                    class="lg:w-56 w-36 lg:mx-2 mx-1"
                    src="./Icons/logo_100percent.svg"
                    alt="logo_100percent"
                    data-aos="zoom-in"
                  />
                  <p class="lg:text-lg text-xs text-white text-mont font-semibold">
                    of your donation
                  </p>
                </div>
              </div>
              <div class="lg:w-2/5 w-full h-auto flex flex-col gap-8 justify-center bg-union lg:items-end items-center lg:relative mt-8 lg:mt-0 z-0">
                <div
                  class="lg:absolute mt-16 lg:mt-0 relative lg:top-1/3 lg:-left-44 z-10"
                  data-aos="flip-left"
                  data-aos-duration="1500"
                >
                  <div class="lg:w-72 w-full mb-4 lg:h-auto border-2 border-fyellow bg-white rounded-xl text-center py-8 px-12 h-36 flex items-center relative transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:cursor-pointer">
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
                <div
                  class="lg:w-72 w-full mb-4 lg:h-auto border-2 border-sblue rounded-xl bg-white text-center py-8 px-12 h-36 flex items-center relative z-10 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:cursor-pointer"
                  data-aos="flip-left"
                  data-aos-duration="1500"
                >
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
                <div
                  class="lg:w-72 w-full mt-4 lg:h-auto border-2 border-nblue rounded-xl bg-white text-center py-8 px-12 h-36 flex items-center relative z-10 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:cursor-pointer"
                  data-aos="flip-left"
                  data-aos-duration="1500"
                >
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
          {achievements?.length > 0 && (
            <HomeAchievement achievements={achievements} />
          )}
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
                <p
                  class="text-base text-mont text-white"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
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
          {upcoming_events?.length > 0 && (
            <HomeUpcomingEvent upcomingEvents={upcoming_events} />
          )}
          <section
            class="w-full h-auto lg:mt-12"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div class="w-full h-auto px-5 py-8 container mx-auto">
              <div class="lg:w-2/3 w-full h-auto">
                <h1 class="text-mont text-black-50 font-bold text-3xl text-left">
                  We can’t do this alone
                </h1>
                <p class="mt-4 text-mont text-gray-600 text-xl text-left">
                  Making a difference means coming together to do something
                  bigger and bolder than anyone thought possible. To make it
                  happen, we need you to join us and make a commitment to
                  changing the world.
                </p>
              </div>
              <div class="w-full h-auto mt-6">
                <p class="text-xl text-mont text-black-50 text-left">
                  Here’s <span class="font-semibold">3 quick ways</span> you can
                  do it:
                </p>
              </div>
              <div class="w-full h-auto flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between mt-8 py-6 lg:py-0 lg:mt-0 lg:px-0">
                <div>
                  <div className='border-b-2 border-owhite lg:border-none pl-4 lg:pl-0 pb-6 lg:pb-0'>
                    <div
                      class="h-auto flex"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      <div class="w-40 h-auto flex items-center justify-start relative">
                        <p class="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                          1.
                        </p>
                        <img
                          src="./images/illustration_donate-color.png"
                          alt="illustration_donate-color"
                        />
                      </div>
                      <div class="w-64 py-0 lg:pt-16 lg:pb-8 px-2">
                        <div class="lg:border-b-2 lg:border-platinum py-12 lg:pt-7 lg:pb-6">
                          <h2 class="text-lg text-mont text-black-50 font-bold lg:mb-0">
                            Donate
                          </h2>
                        </div>
                        <div>
                          <p class="text-base text-mont text-gray mt-6 hidden lg:flex">
                            your hard-earned money to a campaign that connects with
                            your goals
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-base text-mont text-gray mt-6 lg:hidden">
                    your hard-earned money to a campaign that connects with
                    your goals
                  </p>
                </div>
                <div>
                  <div className='border-b-2 border-owhite lg:border-none pl-4 lg:pl-0 pb-6 lg:pb-0'>
                    <div
                      class="h-auto flex"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="300"
                    >
                      <div class="w-40 h-auto flex items-center justify-start relative">
                        <p class="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                          2.
                        </p>
                        <img
                          src="./images/illustration_campaign-color.png"
                          alt="illustration_campaign-color"
                        />
                      </div>
                      <div class="w-64 py-0 lg:pt-16 lg:pb-8 px-2">
                        <div class="lg:border-b-2 lg:border-platinum py-12 lg:pt-7 lg:pb-6">
                          <h2 class="text-lg text-mont text-black-50 font-bold lg:mb-0">
                            Campaign
                          </h2>
                        </div>
                        <div>
                          <p class="text-base text-mont text-gray mt-6 hidden lg:flex">
                            and devote yourself to a cause that will make the world
                            a better place
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-base text-mont text-gray mt-6 lg:hidden">
                    and devote yourself to a cause that will make the world
                    a better place
                  </p>
                </div>
                <div>
                  <div className='border-b-2 border-owhite lg:border-none pl-4 lg:pl-0 pb-6 lg:pb-0'>
                    <div
                      class="h-auto flex"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-delay="500"
                    >
                      <div class="w-40 h-auto flex items-center justify-start relative">
                        <p class="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                          3.
                        </p>
                        <img
                          src="./images/illustration_administrate-color.png"
                          alt="illustration_administrate-color"
                        />
                      </div>
                      <div class="w-64 py-0 lg:pt-16 lg:pb-8 px-2">
                        <div class="lg:border-b-2 lg:border-platinum py-12 lg:pt-7 lg:pb-6">
                          <h2 class="text-lg text-mont text-black-50 font-bold lg:mb-0">
                            Administrate
                          </h2>
                        </div>
                        <div>
                          <p class="text-base text-mont text-gray mt-6 hidden lg:flex">
                            to ensure everything runs smoothly from beginning to end
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="text-base text-mont text-gray mt-6 lg:hidden">
                    to ensure everything runs smoothly from beginning to end
                  </p>
                </div>
              </div>
              <div class="w-full h-auto flex lg:flex-row flex-col lg:items-center">
                <p class="text-xl text-mont font-semibold text-blue">
                  When you’re ready, everything starts with a click…
                </p>
                <button onClick={handleRegistration} class="w-1/2 lg:w-auto text-dblue text-center font-semibold text-sm border-sblue border-2 hover:bg-sblue hover:text-white rounded-lg px-4 py-2 lg:ml-6 mt-4 lg:mt-0">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </section>
          <HomeCommunityFeedback />
          <section class="w-full h-auto bg-owhite">
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
                      quis. Ut mattis velit quis mi consectetur, non rhoncus
                      metus dapibus.
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
                <div class="lg:w-1/2 w-full h-auto flex lg:flex-row flex-col gap-4 lg:gap-0 justify-around mt-4 lg:mt-0">
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
                        Praesent tincidunt purus condimentum efficitur
                        fermentum.
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
                <button class="w-full lg:w-fit text-center text-nblue text-mont font-medium text-sm border-2 border-lgray rounded-lg lg:px-48 px-8 py-2 hover:border-dgray hover:bg-dgray hover:text-white">
                  View All
                </button>
              </div>
            </div>
          </section>
          <HomeMap {...{ appeals }} />
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
                  class="flex gap-4 items-center w-full h-auto border-2 rounded-xl text-gray-300 lg:items-center mt-4 p-6"
                  data-aos="fade-right"
                  data-duration="2000"
                >
                  <div className="w-1/3 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                    <p class="text-mont text-nblue text-4xl font-medium">01.</p>
                    <img
                      src="./Icons/illustration_quick-donation.svg"
                      alt="illustration_quick-donation"
                    />
                  </div>
                  <div class="w-2/3 flex flex-col justify-between">
                    <h3 class="text-lg text-mont text-black-50 font-bold mb-2 lg:mb-4">
                      You could make a quick one off donation
                    </h3>
                    <p class="text-gray text-mont text-base ">
                      For those last minute donors or when your unsure of how
                      much to give
                    </p>
                  </div>
                </div>
                <div
                  class="flex gap-4 items-center w-full h-auto border-2 rounded-xl text-gray-300 lg:items-center mt-4 p-6"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <div className="w-1/3 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                    <p class="text-mont text-nblue text-4xl font-medium">02.</p>
                    <img
                      src="./Icons/illustration_subscription-donation.svg"
                      alt="illustration_subscription-donation"
                    />
                  </div>
                  <div class="w-2/3 flex flex-col justify-between">
                    <h3 class="text-lg text-mont text-black-50 font-bold mb-2 lg:mb-4">
                      Subscription donation
                    </h3>
                    <p class="text-gray text-mont text-base ">
                      Making a donation on every Friday or come Ramadan for that
                      continuous support
                    </p>
                  </div>
                </div>
                <div
                  class="flex gap-4 items-center w-full h-auto border-2 rounded-xl text-gray-300 lg:items-center mt-4 p-6"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="500"
                >
                  <div className="w-1/3 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                    <p class="text-mont text-nblue text-4xl font-medium">03.</p>
                    <img
                      src="./Icons/illustration_project-backed-donation.svg"
                      alt="illustration_project-backed-donation"
                    />
                  </div>
                  <div class="w-2/3 flex flex-col justify-between">
                    <h3 class="text-lg text-mont text-black-50 font-bold mb-2 lg:mb-4">
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
                <button onClick={handleRegistration} class="lg:w-auto w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 hover:bg-sblue hover:text-white rounded-lg px-5 py-3 mt-4">
                  REGISTER NOW
                </button>
              </div>
            </div>
          </section>
          <section class="w-full h-auto mt-16 relative bg-l2gray">
            <div className="container mx-auto">
              <img
                class="absolute top-1/2 left-4 w-20 hidden lg:block"
                src="./Icons/yellow_ring_small.svg"
                alt="yellow_ring_small"
              />
              <img
                class="absolute bottom-56 right-56 hidden lg:block"
                src="./Icons/circle_blue.svg"
                alt="circle_blue"
              />
              <img
                class="absolute -top-40  right-20 lg:w-64 w-32 hidden lg:block"
                src="./Icons/Ellipse 1793.svg"
                alt="Ellipse 1793"
              />
              <div class="lg:w-3/5 w-11/12 mx-auto h-auto py-16">
                <div class="w-full h-auto flex justify-between items-center">
                  <h1 class="text-mont text-black-50 font-bold text-3xl">
                    FAQ
                  </h1>
                  <p class="hidden lg:flex text-gray-600 text-mont text-xl text-center">
                    Do you have more questions? Check out our full{' '}
                    <span class="text-dblue text-mont font-semibold">FAQ</span>
                  </p>
                </div>
                <div
                  class="w-full h-auto mt-6 p-6 border-2 rounded-xl border-lgray flex flex-col items-start"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className='flex justify-between w-full'>
                    <h3 class="text-lg text-mont font-bold text-black-50">
                      Does all my donation go to the appeal?
                    </h3>
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
                  {!showFaq1 && (
                    <p class="text-base text-mont text-gray mt-2">
                      You can caccel your donation at any time. However if
                      your last paymentt of the month is still yet to come
                      this will still be deducted. Until the next month.
                    </p>
                  )}
                </div>
                <div
                  class="w-full h-auto mt-6 p-6 border-2 rounded-xl border-lgray flex flex-col items-start"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-duration-delay="300"
                >
                  <div className='flex justify-between w-full'>
                    <h3 class="text-lg text-mont font-bold text-black-50">
                      Can I cancel my subscription?
                    </h3>
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
                  {!showFaq2 && (
                    <p class="text-base text-mont text-gray mt-2">
                      You can caccel your donation at any time. However if
                      your last paymentt of the month is still yet to come
                      this will still be deducted. Until the next month.
                    </p>
                  )}
                </div>
                <div
                  class="w-full h-auto mt-6 p-6 border-2 rounded-xl border-lgray flex flex-col items-start"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-duration-delay="500"
                >
                  <div className='flex justify-between w-full'>
                    <h3 class="text-lg text-mont font-bold text-black-50">
                      Can I start my own appeal?
                    </h3>
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
                  {!showFaq3 && (
                    <p class="text-base text-mont text-gray mt-2">
                      You can caccel your donation at any time. However if
                      your last paymentt of the month is still yet to come
                      this will still be deducted. Until the next month.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
        <HomeContact />
        <Footer />
      </>
    );
  }
};

export default Home;
