import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeService from '../services/home';
import HomeSlider from '../components/home/HomeSlider';
import HomeAppealSection from '../components/home/HomeAppealSection';
import HomeAchievement from '../components/home/HomeAcheivement';
import HomeUpcomingEvent from '../components/home/HomeUpcomingEvent';
import HomeContact from '../components/home/HomeContact';
import Faq from './Faq';
import Loading from '../components/common/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../redux/auth/userSlice';
import HomeCommunityFeedback from '../components/home/HomeCommunityFeedback';
import {
  setBodyOverflowHidden,
  setShowLogin,
} from '../redux/common/CommonSlice';
import HomeMap from '../components/home/HomeMap';
import DonateModal from '../components/modal/DonateModal';
import { setHomeData } from '../redux/home/HomeSlice';
import SidebarWrapper from '../components/common/SidebarWrapper';

const Home = () => {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);
  const [divStyle, setdivStyle] = React.useState({});

  const [showFaq1, setshowFaq1] = useState(false);
  const [showFaq2, setshowFaq2] = useState(true);
  const [showFaq3, setshowFaq3] = useState(true);

  const { homeData } = useSelector(state => state.main);
  const { loading } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const fetchHomeData = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const data = await HomeService.getHomeData();
      if (data) {
        dispatch(setHomeData(data));
      }
    } catch (e) {
    } finally {
      setTimeout(() => dispatch(setLoading(false)), 500);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!homeData) {
      fetchHomeData();
    }
  }, [homeData, fetchHomeData]);

  const overflowHidden = () => {
    dispatch(setBodyOverflowHidden(true));
  };

  const overflowVisible = () => {
    dispatch(setBodyOverflowHidden(false));
  };

  const navigate = useNavigate();

  const handleRegistration = event => {
    event.stopPropagation();

    dispatch(setShowLogin(true));
  };

  const { appeals, achievements, upcoming_events } = homeData || [];
  const homeSliderAppeals = appeals || [];

  if (loading) {
    return <Loading />;
  } else {
    return (
      <SidebarWrapper setdivStyle={setdivStyle}>
        <div style={divStyle}>
          <Header
            showDonateButton
            overflowHidden={overflowHidden}
            overflowVisible={overflowVisible}
          />
          <main
            className="w-full h-auto top-0 left-0 relative"
            onClick={() => {
              dispatch(setShowLogin(false));
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
              <div className="container mx-auto flex lg:flex-row flex-col items-center gap-6 lg:gap-2 py-12 px-5">
                <div className="lg:w-[30%] w-full h-auto">
                  <h2 className="text-[26px] text-mont font-semibold text-nblue text-center lg:text-left">
                    What if one action could change the world?
                  </h2>
                </div>
                <div className="lg:w-[25%] w-4/5 h-auto flex items-center justify-start gap-3">
                  {/* <img
                    className="lg:w-12 w-20"
                    src="/Icons/icon_current-location.svg"
                    alt="icon_current-location"
                  /> */}
                  <div className="bg-nblue rounded-full px-4 py-3">
                    <img
                      className="w-10"
                      src="/images/logo/logo_aid-humanity-icon.png"
                      alt="logo_aid-humanity"
                    />
                  </div>
                  <p className="text-base text-mont font-medium text-gray-600">
                    Aid Humanity helps you make it happen…
                  </p>
                </div>
                <div className="w-4/5 lg:w-2/5 h-auto lg:pl-10">
                  <p className="text-2xl text-mont font-semibold text-nblue text-center lg:text-left">
                    Give Back - Deliver Better - Drive Change
                  </p>
                </div>
              </div>
            </section>
            <section className="w-full h-auto bg-owhite">
              <div className="w-full h-auto container mx-auto flex lg:flex-row flex-col gap-8 lg:gap-20 px-5 py-10 lg:py-16">
                <div className="lg:w-1/4 w-full h-auto">
                  <h1 className="text-black-50 text-[26px] lg:text-3xl text-mont font-bold text-center lg:text-left">
                    Who have <br /> we helped?
                  </h1>
                  <p className="text-[18px] lg:text-[22px] text-mont font-normal text-lblack mt-2 lg:mt-4 text-center lg:text-left">
                    We take pride in providing help to people around the world
                  </p>
                </div>
                <div className="lg:w-2/3 w-full h-auto">
                  <div
                    className="flex items-center gap-x-6 gap-y-3 lg:gap-3 flex-wrap"
                    data-aos="zoom-out-left"
                    data-aos-duration="1000"
                  >
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="mr-3 w-6"
                        src="/Icons/icon_water_for_all.svg"
                        alt="icon_water"
                      />{' '}
                      Water Well
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="mr-3 w-8"
                        src="/Icons/icon_kids-color.svg"
                        alt="icon_kids-color"
                      />{' '}
                      Helping Children
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="mr-3 w-7"
                        src="/Icons/icon_eid-color.svg"
                        alt="icon_eid-color"
                      />{' '}
                      Eid
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="mr-3 w-8 lg:w-7"
                        src="/Icons/icon_ramadan-color.svg"
                        alt="icon_ramadan-color"
                      />{' '}
                      Ramadan
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="w-6 lg:w-6 mr-3"
                        src="/Icons/icon_sponsor_an_orphan.svg"
                        alt="icon_orphan-color.svg"
                      />{' '}
                      Orphans
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="w-7 mr-3"
                        src="/Icons/icon_disaster_&_emergency_appeals.svg"
                        alt="icon_emergency-color"
                      />{' '}
                      Emergencies
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="w-8 mr-3"
                        src="/Icons/icon_uk-projects-color.svg"
                        alt="icon_uk-projects-color"
                      />{' '}
                      UK Projects
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="w-7 mr-3"
                        src="/Icons/icon_build_a_mosque.svg"
                        alt="icon_mosque"
                      />{' '}
                      Mosque Builds
                    </button>
                    <button className="text-nblue lg:bg-white lg:border lg:border-owhite lg:text-lg text-[16px] lg:text-[20px] font-semibold lg:px-5 lg:py-3 flex items-center lg:rounded-xl text-mont lg:h-16 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl">
                      <img
                        className="w-8 mr-3"
                        src="/Icons/icon_homeless-color.svg"
                        alt="icon_homeless-color"
                      />{' '}
                      Homeless
                    </button>
                    <Link
                      className="lg:ml-4 text-base text-mont text-nblue font-medium transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
                      to="/appeals"
                    >
                      and much more…
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full h-auto container mx-auto">
              <div className="w-full h-auto flex lg:flex-row flex-col px-5 lg:py-16 pt-12 pb-6">
                <div className="lg:w-1/3 w-full h-auto">
                  <h1 className="text-black-50 text-3xl text-mont font-bold text-center lg:text-left">
                    Passionate <br /> about progress
                  </h1>
                </div>
                <div
                  className="lg:w-3/4 w-full flex lg:gap-12 h-auto"
                  data-aos="flip-up"
                  data-aos-duration="500"
                >
                  <div className="h-24 bg-gray w-2"></div>
                  <p className="text-xl text-mont text-lblack text-center lg:text-left mt-5 lg:mt-0">
                    We’ve always believed that charitable donations should find
                    their way to the people who need them most, and always
                    without delay. It’s why we’ve created a simple{' '}
                    <span className="font-bold">100% donation policy</span> that
                    makes sure every donation can.
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex lg:flex-row flex-col px-5 pt-2 lg:pb-16 pb-0">
                <div className="lg:w-3/5 w-full h-auto relative">
                  <img
                    className="w-full rounded-lg"
                    src="./images/Food-Scarcity-Myth-1920X1080.png"
                    alt="Food-Scarcity"
                  />
                  <div
                    className="flex flex-row justify-between absolute lg:-bottom-10 -bottom-6 left-0 right-0 mx-auto w-fit"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <p className="lg:text-2xl text-xs text-white text-mont font-semibold">
                      we transfer
                    </p>
                    <img
                      className="lg:w-56 w-36 lg:mx-2 mx-1"
                      src="./Icons/logo_100percent.svg"
                      alt="logo_100percent"
                      data-aos="zoom-in"
                    />
                    <p className="lg:text-lg text-xs text-white text-mont font-semibold">
                      of your donation
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/5 w-full h-auto flex flex-col gap-8 justify-center bg-union lg:items-end items-center relative mt-20 lg:mt-0 z-0">
                  <div
                    className="lg:absolute lg:mt-0 relative lg:top-1/3 lg:-left-44 xl:-left:40 2xl:-left-32 z-10"
                    data-aos="flip-left"
                    data-aos-duration="1500"
                  >
                    <div className="lg:w-80 w-full mb-4 border-2 border-fyellow bg-white rounded-xl text-center pt-6 px-12 h-44 flex items-center relative transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:cursor-pointer">
                      <img
                        className="mx-auto absolute top-0 absolute-center"
                        src="./Icons/icon_distribution-color.svg"
                        alt="icon_distribution-color"
                      />
                      <p className="text-lg text-mont text-black-50">
                        <span className="text-mont font-bold text-lg text-nblue">
                          Get Distributed Fairly
                        </span>
                        <br />
                        because never take a penny towards our running costs
                      </p>
                    </div>
                  </div>
                  <div
                    className="lg:w-80 w-full mb-4 border-2 border-sblue rounded-xl bg-white text-center py-8 px-12 h-44 flex items-center relative z-10 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:cursor-pointer"
                    data-aos="flip-left"
                    data-aos-duration="1500"
                  >
                    <img
                      className="mx-auto absolute top-0 absolute-center"
                      src="./Icons/icon_difference-color.svg"
                      alt="icon_difference-color"
                    />
                    <p className="text-lg text-mont text-black-50">
                      <span className="text-mont font-bold text-lg text-nblue">
                        Make A Difference
                      </span>{' '}
                      to the people in the world who need you
                    </p>
                  </div>
                  <div
                    className="lg:w-80 w-full mt-1 border-2 border-nblue rounded-xl bg-white text-center py-8 px-12 h-44 flex items-center relative z-10 transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:cursor-pointer"
                    data-aos="flip-left"
                    data-aos-duration="1500"
                  >
                    <img
                      className="mx-auto absolute top-0 absolute-center"
                      src="./Icons/icon_wisely-color.svg"
                      alt="icon_wisely-color"
                    />
                    <p className="text-lg text-mont text-black-50">
                      <span className="text-mont font-bold text-lg text-nblue mr-1">
                        Be Spent Wisely
                      </span>
                      on projects that change lives and build communities
                    </p>
                  </div>
                  <img
                    className="absolute lg:w-4/5 w-full lg:left-20 left-0 lg:top-0 -top-8 z-0"
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
              <div className="w-full h-auto px-5 py-12 flex lg:flex-row flex-col container mx-auto gap-10">
                <div className="lg:w-2/3 w-full h-auto">
                  <p className="text-white text-mont text-lg font-semibold">
                    Faithful believers are to each other as the bricks of a
                    wall, supporting and reinforcing each other. So saying, the
                    Prophet Muhammad (saw) clasped his hands by interlocking his
                    fingers.
                  </p>
                </div>
                <div className="lg:w-1/3 w-full h-auto flex items-end justify-end">
                  <p
                    className="text-base text-mont text-white"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    Prophet Muhammed (Al-Bukhari)
                  </p>
                  <img
                    className="w-16 ml-6"
                    src="./Icons/icon_quote-right-filled.svg"
                    alt="icon_quote-right-filled"
                  />
                </div>
              </div>
            </section>
            <section
              className="w-full h-auto lg:mt-12"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="w-full h-auto px-5 lg:py-8 pt-12 container mx-auto">
                <div className="lg:w-2/3 w-full h-auto">
                  <h1 className="text-mont text-black-50 font-bold text-3xl text-left">
                    We can’t do this alone
                  </h1>
                  <p className="mt-4 text-mont text-gray-600 text-xl text-left">
                    Making a difference means coming together to do something
                    bigger and bolder than anyone thought possible. To make it
                    happen, we need you to join us and make a commitment to
                    changing the world.
                  </p>
                </div>
                <div className="w-full h-auto mt-6">
                  <p className="text-xl text-mont text-black-50 text-left">
                    Here’s <span className="font-semibold">3 quick ways</span>{' '}
                    you can do it:
                  </p>
                </div>
                <div className="w-full h-auto flex lg:flex-row flex-col gap-10 lg:gap-12 justify-between mt-8 py-6 lg:py-0 lg:mt-0 lg:px-0">
                  <div className="w-full lg:w-1/3">
                    <div className="border-b border-owhite lg:border-none pl-4 lg:pl-0 pb-6 lg:pb-0">
                      <div
                        className="h-auto flex lg:mt-12"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
                        <div className="flex items-start justify-start">
                          <div className="lg:w-32 lg:h-32 w-36 h-36 relative">
                            <p className="text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4 -top-2 bottom-0 my-auto w-9 h-9 flex justify-center items-center">
                              <span>1.</span>
                            </p>
                            <img
                              src="./images/illustration_donate-color.png"
                              alt="illustration_donate-color"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:pb-14 pl-4 pt-1">
                          <div className="lg:border-b-2 lg:border-platinum py-12 lg:pt-2 lg:pb-4">
                            <h2 className="lg:text-lg text-base text-mont text-black-50 font-bold lg:mb-0">
                              Donate
                            </h2>
                          </div>
                          <div>
                            <p className="text-base text-mont text-gray-400 mt-6 hidden lg:flex">
                              your hard-earned money to a campaign that connects
                              with your goals
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-mont text-gray-400 mt-6 lg:hidden">
                      your hard-earned money to a campaign that connects with
                      your goals
                    </p>
                  </div>
                  <div className="w-full lg:w-1/3">
                    <div className="border-b border-owhite lg:border-none pl-4 lg:pl-0 pb-6 lg:pb-0">
                      <div
                        className="h-auto flex lg:mt-12"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="300"
                      >
                        <div className="flex items-start justify-start">
                          <div className="lg:w-32 lg:h-32 w-36 h-36 relative">
                            <p className="text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4 -top-2 bottom-0 my-auto w-9 h-9 flex justify-center items-center">
                              <span>2.</span>
                            </p>
                            <img
                              src="./images/illustration_campaign-color.png"
                              alt="illustration_campaign-color"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:pb-14 pl-4 pt-1">
                          <div className="lg:border-b-2 lg:border-platinum py-12 lg:pt-2 lg:pb-4">
                            <h2 className="lg:text-lg text-base text-mont text-black-50 font-bold lg:mb-0">
                              Campaign
                            </h2>
                          </div>
                          <div>
                            <p className="text-base text-mont text-gray-400 mt-6 hidden lg:flex">
                              and devote yourself to a cause that will make the
                              world a better place
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-mont text-gray-400 mt-6 lg:hidden">
                      and devote yourself to a cause that will make the world a
                      better place
                    </p>
                  </div>
                  <div className="w-full lg:w-1/3">
                    <div className="border-b border-owhite lg:border-none pl-4 lg:pl-0 pb-6 lg:pb-0">
                      <div
                        className="h-auto flex lg:mt-12"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                      >
                        <div className="flex items-start justify-start">
                          <div className="lg:w-32 lg:h-32 w-36 h-36 relative">
                            <p className="text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4 -top-2 bottom-0 my-auto w-9 h-9 flex justify-center items-center">
                              <span>3.</span>
                            </p>
                            <img
                              src="./images/illustration_administrate-color.png"
                              alt="illustration_administrate-color"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:pb-14 pl-4 pt-1">
                          <div className="lg:border-b-2 lg:border-platinum py-12 lg:pt-2 lg:pb-4">
                            <h2 className="lg:text-lg text-base text-mont text-black-50 font-bold lg:mb-0">
                              Administrate
                            </h2>
                          </div>
                          <div>
                            <p className="text-base text-mont text-gray-400 mt-6 hidden lg:flex">
                              to ensure everything runs smoothly from beginning
                              to end
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-mont text-gray-400 mt-6 lg:hidden">
                      to ensure everything runs smoothly from beginning to end
                    </p>
                  </div>
                </div>
                {!user && (
                  <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center mt-5 lg:mt-0">
                    <p className="text-xl text-mont font-semibold text-blue">
                      When you’re ready, everything starts with a click…
                    </p>
                    <button
                      onClick={handleRegistration}
                      className="w-fit text-dblue text-center font-semibold text-sm border-sblue border-2 hover:bg-sblue hover:text-white rounded-lg px-8 py-3 lg:ml-6 mt-6 lg:mt-0"
                    >
                      REGISTER NOW
                    </button>
                  </div>
                )}
              </div>
            </section>
            <HomeCommunityFeedback />
            {upcoming_events?.length > 0 && (
              <HomeUpcomingEvent
                upcomingEvents={
                  upcoming_events.length > 5
                    ? upcoming_events.slice(0, 5)
                    : upcoming_events
                }
              />
            )}
            {/* <section className="w-full h-auto bg-owhite">
              <div className="w-full h-auto px-5 py-12 lg:pt-12 lg:pb-20 container mx-auto">
                <div className="w-full h-auto">
                  <h1 className="text-mont text-black-50 text-3xl font-bold text-center lg:text-left lg:mt-3">
                    Latest News
                  </h1>
                </div>
                <div className="w-full h-auto lg:mt-16 mt-10 flex lg:flex-row flex-col">
                  <div className="lg:w-1/2 w-full h-auto lg:min-h-[28rem] px-6 pb-6 pt-40 bg-unicef relative">
                    <div className="lg:absolute bottom-10 left-10 right-10">
                      <div className="w-20 h-auto text-center">
                        <p className="text-base text-mont text-white font-bold px-4 py-2 bg-red">
                          NEW
                        </p>
                      </div>
                      <div className="w-full h-auto mt-4">
                        <h1 className="text-white text-mont text-4xl font-bold">
                          Donec turpis eros, euismod nec justo sit amet
                        </h1>
                      </div>
                      <div className="w-full h-auto mt-2 lg:mt-4">
                        <p className="text-mont text-f5 text-base">
                          Pellentesque consequat dui turpis, nec porta nisi
                          varius quis. Ut mattis velit quis mi consectetur, non
                          rhoncus metus dapibus.
                        </p>
                      </div>
                      <div className="w-full h-auto flex items-center mt-4 lg:mt-6">
                        <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                        <p className="text-mont text-gray text-xs ml-2">
                          July 3, 2022
                        </p>
                        <p className="text-mont text-gray text-xs ml-2">.</p>
                        <p className="text-mont text-gray text-xs ml-2">
                          5 minutes to read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:w-1/2 w-full h-auto flex lg:flex-row flex-col gap-4 lg:gap-8 justify-around 
                    mt-4 lg:mt-0 lg:ml-6"
                  >
                    <div className="lg:w-1/2 w-full h-auto">
                      <img
                        className="rounded-xl w-full h-52"
                        src="./images/niger.png"
                        alt="niger"
                      />
                      <div>
                        <h2 className="mt-4 text-black-50 text-mont text-lg font-bold">
                          Mauris vel ornare massa, at ullamcorper ligula
                        </h2>
                        <p
                          className="text-base tet-mont text-dgray mt-2 
                          lg:h-40 xl:h-[9.5rem] 2xl:h-32"
                        >
                          Cras ullamcorper dolor ac viverra finibus. Fusce
                          iaculis accumsan ex, in placerat arcu luctus vitae.
                          Fusce velit lacus, hendrerit scelerisque efficitur
                          eget, placerat eu lectus.
                        </p>
                        <div className="w-full h-auto flex items-center mt-4 lg:mt-2">
                          <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                          <p className="text-mont text-gray text-xs ml-2">
                            April 20, 2022
                          </p>
                          <p className="text-mont text-gray text-xs ml-2">.</p>
                          <p className="text-mont text-gray text-xs ml-2">
                            3 minutes to read
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 w-full h-auto">
                      <img
                        className="rounded-xl w-full h-52"
                        src="./images/UN0691098 (1)_0.png"
                        alt="UN0691098 (1)_0"
                      />
                      <div>
                        <h2 className="mt-4 text-black-50 text-mont text-lg font-bold">
                          Aenean ac iaculis urna, quis condimentum elit
                        </h2>
                        <p
                          className="text-base tet-mont text-dgray mt-2 
                          lg:h-40 xl:h-[9.5rem] 2xl:h-32"
                        >
                          Nullam eleifend faucibus mi, ac dapibus lectus
                          interdum eu. Suspendisse sed semper augue, nec
                          pulvinar orci. Praesent tincidunt purus condimentum
                          efficitur fermentum.
                        </p>
                        <div className="w-full h-auto flex items-center mt-4 lg:mt-2">
                          <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                          <p className="text-mont text-gray text-xs ml-2">
                            March 7, 2022
                          </p>
                          <p className="text-mont text-gray text-xs ml-1">.</p>
                          <p className="text-mont text-gray text-xs ml-1">
                            4 minutes to read
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto mt-6 lg:mt-12 flex justify-center">
                  <Link
                    to="/blogs"
                    className="w-full lg:w-fit text-center text-nblue text-mont font-medium text-sm border border-lgray rounded-lg lg:px-48 px-8 py-2 hover:border-dgray hover:bg-dgray hover:text-white"
                  >
                    View All
                  </Link>
                </div>
              </div>
            </section> */}
            <HomeMap {...{ appeals }} />
            <section className="w-full h-auto lg:mt-16 mt-10 container mx-auto">
              <div className="w-full h-auto lg:pt-4 lg:pb-20 py-2 px-5 flex lg:flex-row flex-col lg:gap-12 gap-6">
                <div className="lg:w-[55%] w-full h-auto">
                  <h1 className="text-mont text-black-50 text-3xl font-bold">
                    Ways to give
                  </h1>
                  <p className="text-mont text-gray-600 text-xl lg:mt-2 mt-4 lg:w-3/4">
                    Crowd funding lets people play a more important role in
                    their charity. Start building your network of giving today.
                  </p>
                  <div
                    className="flex gap-10 items-center w-full h-auto border rounded-xl text-gray-300 lg:items-center lg:mt-12 mt-8 px-6 lg:py-10 py-6"
                    data-aos="fade-right"
                    data-duration="2000"
                  >
                    <div className="w-1/4 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                      <p className="text-mont text-nblue text-4xl font-medium">
                        01.
                      </p>
                      <img
                        src="./Icons/illustration_quick-donation.svg"
                        alt="illustration_quick-donation"
                      />
                    </div>
                    <div className="w-3/4 flex flex-col justify-between">
                      <h3 className="text-lg text-mont text-black-50 font-bold mb-2 lg:mb-4">
                        You could make a quick one off donation
                      </h3>
                      <p className="text-gray text-mont text-base ">
                        For those last minute donors or when your unsure of how
                        much to give
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-10 items-center w-full h-auto border rounded-xl text-gray-300 lg:items-center mt-4 px-6 lg:py-10 py-6"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="300"
                  >
                    <div className="w-1/4 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                      <p className="text-mont text-nblue text-4xl font-medium">
                        02.
                      </p>
                      <img
                        src="./Icons/illustration_subscription-donation.svg"
                        alt="illustration_subscription-donation"
                      />
                    </div>
                    <div className="w-3/4 flex flex-col justify-between">
                      <h3 className="text-lg text-mont text-black-50 font-bold mb-2 lg:mb-4">
                        Subscription donation
                      </h3>
                      <p className="text-gray text-mont text-base ">
                        Making a donation on every Friday or come Ramadan for
                        that continuous support
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-10 items-center w-full h-auto border rounded-xl text-gray-300 lg:items-center mt-4 px-6 lg:py-10 py-6"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-delay="500"
                  >
                    <div className="w-1/4 h-auto flex lg:flex-row flex-col gap-6 lg:justify-start justify-between items-center">
                      <p className="text-mont text-nblue text-4xl font-medium">
                        03.
                      </p>
                      <img
                        src="./Icons/illustration_project-backed-donation.svg"
                        alt="illustration_project-backed-donation"
                      />
                    </div>
                    <div className="w-3/4 flex flex-col justify-between">
                      <h3 className="text-lg text-mont text-black-50 font-bold mb-2 lg:mb-4">
                        Project Backed donation
                      </h3>
                      <p className="text-gray text-mont text-base ">
                        This is great when you back a project that’s close to
                        your heart and receive updates
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[45%] w-full h-auto lg:pl-6 p-0">
                  <img
                    className="w-ways lg:rounded-l-xl rounded-xl"
                    src="./images/Group 15617.png"
                    alt="Group 15617"
                  />
                  <h1 className="lg:text-4xl text-3xl text-blue text-mont font-bold mt-8 w-full">
                    Don’t wait for the world to improve.
                  </h1>
                  <p className="text-gray-600 text-xl text-mont mt-4">
                    Drive meaningful change.
                  </p>
                  {!user && (
                    <button
                      onClick={handleRegistration}
                      className="lg:w-auto w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 hover:bg-sblue hover:text-white rounded-lg px-8 py-3 mt-6 mb-6 lg:mb-0"
                    >
                      REGISTER NOW
                    </button>
                  )}
                </div>
              </div>
            </section>
            <section className="w-full h-auto relative bg-l2gray">
              <div className="container mx-auto">
                <img
                  className="absolute top-1/2 left-4 w-20 hidden lg:block"
                  src="./Icons/yellow_ring_small.svg"
                  alt="yellow_ring_small"
                />
                <img
                  className="absolute bottom-56 right-56 hidden lg:block"
                  src="./Icons/circle_blue.svg"
                  alt="circle_blue"
                />
                <img
                  className="absolute -top-32 right-20 lg:w-64 w-32 hidden lg:block"
                  src="./Icons/Ellipse 1793.svg"
                  alt="Ellipse 1793"
                />
                <div className="lg:w-3/5 w-11/12 mx-auto h-auto lg:py-20 pt-12 pb-12">
                  <div className="w-full h-auto flex justify-between items-center">
                    <h1 className="text-mont text-black-50 font-bold text-3xl">
                      FAQ
                    </h1>
                    <p className="hidden lg:flex text-gray-600 text-mont text-xl text-center">
                      Do you have more questions? Check out our full{' '}
                      <span className="ml-1 text-dblue font-semibold">FAQ</span>{' '}
                      {/* <span className="text-dblue text-mont font-semibold">
                        FAQ
                      </span> */}
                    </p>
                  </div>
                  <div
                    className="w-full h-auto mt-6 p-6 border-2 rounded-2xl border-lgray flex flex-col items-start"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="flex justify-between w-full">
                      <h3 className="text-lg text-mont font-bold text-black-50">
                        Do all donations go to the appeal, directly helping
                        those in need?
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
                      <p className="text-base text-mont text-gray mt-2">
                        Yes, every donation received is dedicated entirely to
                        the appeal, ensuring it directly assists those in need.
                        Your support makes a meaningful impact.
                      </p>
                    )}
                  </div>
                  <div
                    className="w-full h-auto lg:mt-6 mt-4 p-6 border-2 rounded-2xl border-lgray flex flex-col items-start"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-duration-delay="300"
                  >
                    <div className="flex justify-between w-full">
                      <h3 className="text-lg text-mont font-bold text-black-50">
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
                      <p className="text-base text-mont text-gray mt-2">
                        Yes you can, you can either contact your bank to cease
                        direct debit or email us on info@aidhumanity.co.uk and
                        we’ll stop it for you.
                      </p>
                    )}
                  </div>
                  <div
                    className="w-full h-auto lg:mt-6 mt-4 p-6 border-2 rounded-2xl border-lgray flex flex-col items-start"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-duration-delay="500"
                  >
                    <div className="flex justify-between w-full">
                      <h3 className="text-lg text-mont font-bold text-black-50">
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
                      <p className="text-base text-mont text-gray mt-2">
                        You can start your own crowd funding page from supported
                        projects on our appeal page.
                      </p>
                    )}
                  </div>
                  <p className="lg:hidden text-gray-600 text-mont text-xl mt-4">
                    Do you have more questions? Check out our full{' '}
                    <span className="ml-1 text-dblue font-semibold">FAQ</span>{' '}
                  </p>
                </div>
              </div>
            </section>
          </main>
          <HomeContact />
          <Footer />
        </div>
      </SidebarWrapper>
    );
  }
};

export default Home;
