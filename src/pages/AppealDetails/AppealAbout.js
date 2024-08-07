import React, { useCallback, useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import AppealFooter from '../../components/AppealFooter';
import AppealShare from '../../components/modal/AppealShare';
import HeaderAppeal from '../../components/HeaderAppeal';
import appealService from '../../services/appeals';
import dayjs from 'dayjs';
import donationService from '../../services/donations';
import CircularProgressBar from './CircularProgressBar';
import DonateModal from '../../components/modal/DonateModal';
import { useLocation, useNavigate } from 'react-router-dom';
// import Thankyou from '../OtherPages/thankyou';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { currencyFormatter } from '../../utils';
import FixedNavigator from './FixedNavigator';
import '../../App.css';
import { AppealTags } from '../../constants';
import { updateFundraisedAppeal } from '../../redux/appeal/appealSlice';
import { useDispatch, useSelector } from 'react-redux';
import CampaignService from '../../services/campaign';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import { textTruncate } from '../../constants';
import RecentAppealSlider from '../../components/RecentAppealSlider';
import {
  setBodyOverflowHidden,
  setRegularSidebar,
  setProjectSidebar,
  setSubscriptionSidebar,
  setShowLogin,
} from '../../redux/common/CommonSlice';
import LinearProgressBar from '../Dashboard/LinearProgressBar';
import { setLoading } from '../../redux/auth/userSlice';
import Loader from '../../components/common/Loader';
import {
  displayNumberOfDonors,
  displayNumberOfFundraisers,
} from '../../constants/index';
import Image from '../../components/common/Image';
import SidebarWrapper from '../../components/common/SidebarWrapper';
import { Helmet } from 'react-helmet';

const AppealAbout = () => {
  const [showShare, setshowShare] = React.useState(false);
  const [appealData, setAppealData] = React.useState({});
  const [donationData, setDonationData] = React.useState([]);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMoreDonors, setshowMoreDonors] = React.useState(false);
  const [showMoreFundraisers, setshowMoreFundraisers] = React.useState(false);
  const [recentAppeals, setRecentAppeals] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const msgStatus = searchParams.get('status');
  const [isCampaignPage] = useState(location.pathname.includes('campaign'));
  const [divStyle, setdivStyle] = React.useState({});
  const [readMore, setreadMore] = React.useState(true);
  const [readMore2, setreadMore2] = React.useState(true);

  const { loading, user } = useSelector(state => state.session);

  const { appealId, campaignId } = useParams();
  const dispatch = useDispatch();

  const handleDonateClick = () => {
    // if (!user) {
    //   dispatch(setShowLogin(true));
    //   return;
    // }
    switch (appealData.appeal_type) {
      case 'general':
        dispatch(setRegularSidebar(true));
        break;
      case 'subscription':
        dispatch(setSubscriptionSidebar(true));
        break;
      case 'project':
        dispatch(setProjectSidebar(true));
        break;
      default:
        setshowDonateModal(true);
    }
  };

  const fetchAppeal = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const data = await appealService.getAppeal(appealId || 1);
      if (data) {
        setAppealData(data);
      }
      const donations = await donationService.getDonations(appealId || 1);
      if (donations) {
        setDonationData(donations);
      }
      const { appeals: recentAppeals } = await appealService.getRecentAppeals();
      if (recentAppeals) {
        setRecentAppeals(recentAppeals);
      }
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  }, [appealId, dispatch]);

  const fetchCampaign = useCallback(async () => {
    dispatch(setLoading(true));
    try {
      const data = await appealService.getCampagin(campaignId);
      setAppealData(data);
      const { campaigns: recentCampaigns } =
        await appealService.getRecentCampagins();
      setRecentAppeals(recentCampaigns);
      const donations = await donationService.getCampaignDonations(campaignId);
      setDonationData(donations);
      return data;
    } catch (e) {
    } finally {
      dispatch(setLoading(false));
    }
  }, [campaignId, dispatch]);

  useEffect(() => {
    if (isCampaignPage) {
      fetchCampaign();
    } else {
      fetchAppeal();
    }

    if (msgStatus === 'success') {
      if (isCampaignPage) {
        toast.success(
          'Thankyou! You have successfully donated to this Campaign',
          {
            autoClose: 10000,
          }
        );
        navigate(`/campaign/${campaignId}`, { replace: true });
      } else {
        toast.success(
          'Thankyou! You have successfully donated to this Appeal',
          {
            autoClose: 10000,
          }
        );
        navigate(`/appeal/${appealId}`, { replace: true });
      }
    } else if (msgStatus === 'error') {
      if (isCampaignPage) {
        toast.error('Unable to Donate at the moment. Contact admin please', {
          autoClose: 10000,
        });
        navigate(`/campaign/${campaignId}`, { replace: true });
      } else {
        toast.error('Unable to Donate at the moment. Contact admin please', {
          autoClose: 10000,
        });
        navigate(`/appeal/${appealId}`, { replace: true });
      }
    }
  }, [
    msgStatus,
    appealId,
    campaignId,
    isCampaignPage,
    fetchAppeal,
    fetchCampaign,
    navigate,
  ]);

  const handleStartFundraising = async () => {
    const campaign = {
      appeal_id: appealData.id,
    };

    try {
      const data = await CampaignService.createCampaign({ campaign });
      dispatch(updateCampaign(data));
      navigate(`/campaign/${data.id}/view`);
      toast.success('Campaign Successfully Created');
    } catch (err) {}
    localStorage.setItem('fundraised_appeal_id', appealId);
    dispatch(updateFundraisedAppeal(appealData));
  };

  const {
    targeted_amount,
    raised_amount,
    category,
    title,
    description,
    story,
    offline_donations,
    end_at,
    appeal_tags,
    cover_image,
  } = appealData;

  const getDonationTag = appealTag => {
    switch (appealTag) {
      case AppealTags.SADHAKA:
        return 'S';
      case AppealTags.ZAKATH:
        return 'Z';
      case AppealTags.SADHAKA_JARIYA:
        return 'SJ';
      default:
        return 'SJ';
    }
  };
  const appealRefs = [useRef(null), useRef(null), useRef(null)];
  const donorsRef = useRef(null);
  const { scrollToRecentDonors } = location.state || {};

  useEffect(() => {
    if (scrollToRecentDonors) {
      donorsRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [fetchAppeal, scrollToRecentDonors]);

  function handleClick() {
    navigate('/appeal_about#target');
  }

  const overflowHidden = () => {
    dispatch(setBodyOverflowHidden(true));
  };

  const overflowVisible = () => {
    dispatch(setBodyOverflowHidden(false));
  };

  return (
    <SidebarWrapper {...{ appealData, campaignId, setdivStyle }}>
      <div style={divStyle}>
        <HeaderAppeal
          appeal={appealData}
          category={category?.name}
          title={title}
          subscriptionInterval={appealData.subscription_interval}
          overflowHidden={overflowHidden}
          overflowVisible={overflowVisible}
        />
        {loading ? (
          <Loader type="threeDots" height="80" width="80" />
        ) : (
          <main>
            {/* <Helmet>
              <title>Appeals that looks for your Donation </title>
              <meta
                name="description"
                content={`Donate in different types of Appeals - `}
              />
              <>
                <meta
                  property="og:title"
                  content="Appeals that looks for your Donation"
                />
                <meta
                  property="og:description"
                  content={`Donate in different types of Appeals -`}
                />
                <meta
                  property="og:image"
                  content="%PUBLIC_URL%/logo/social_media.png"
                />
              </>
            </Helmet> */}
            <section className="w-full h-auto pb-16 px-5 bg-owhite relative">
              <FixedNavigator
                appealRefs={appealRefs}
                handleClick={handleClick}
                appeal={appealData}
                raisedAmount={raised_amount}
              />
              <div className="w-full h-auto container mx-auto flex lg:flex-row flex-col gap-8">
                <div className="lg:w-2/3 w-full h-auto rounded-2xl -mt-44 lg:-mt-32">
                  <div className="w-full h-auto lg:hidden px-4 pt-8 pb-6 bg-white rounded-2xl">
                    <div className="w-full h-auto flex justify-between">
                      <div className="w-1/2 h-auto">
                        <h2 className="text-mont lg:text-3xl text-2xl text-lblack font-bold">
                          {currencyFormatter(raised_amount)}
                        </h2>
                        <p className="text-mont text-xs font-medium text-gray">
                          raised of{' '}
                          <span className="text-blue font-bold">
                            {currencyFormatter(targeted_amount)}
                          </span>{' '}
                          target
                        </p>
                      </div>
                      <div className="w-1/2 h-auto flex justify-end">
                        <CircularProgressBar
                          percentage={Math.round(
                            (raised_amount / targeted_amount) * 100
                          )}
                          style={{
                            width: '4rem',
                            height: '4rem',
                            fontSize: '0.9rem',
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full h-auto flex justify-between mt-8">
                      <p className="text-mont text-[10px] text-l2black font-medium flex items-center gap-1">
                        by{' '}
                        <img
                          src="/Icons/icon_user_circle_gray.svg"
                          className="w-4"
                          alt="icon-user"
                        ></img>{' '}
                        {donationData.length} supporters
                      </p>
                      {end_at && (
                        <p className="text-mont text-xs text-orange font-semibold">
                          <i className="mr-1 fa-regular fa-clock"></i> Ends in{' '}
                          {dayjs(end_at).diff(dayjs(), 'day')} days
                        </p>
                      )}
                    </div>
                    <button
                      className="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2"
                      onClick={handleDonateClick}
                    >
                      DONATE
                    </button>
                    <button
                      onClick={() => setshowShare(true)}
                      className="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray hover:bg-lgray hover:text-white rounded-md mt-2"
                    >
                      <i className="mr-1 fa-sharp fa-solid fa-share-nodes text-sm"></i>{' '}
                      SHARE
                    </button>
                  </div>
                  <div className="w-full h-auto bg-white mt-5 lg:mt-0 rounded-t-2xl flex justify-between lg:px-6 px-4 pt-4 pb-1">
                    <div className="w-full">
                      <span className="text-mont text-xs text-lgray font-medium">
                        {category?.name}
                      </span>
                      <div className="flex justify-between items-center">
                        <h1 className="text-mont lg:text-4xl text-3xl text-lblack font-bold">
                          {title}
                        </h1>
                      </div>
                      <div className="flex justify-between items-center my-2">
                        <div className="text-mont text-l2black text-fund mt-2 flex items-center">
                          <span className="text-gray-500 font-semibold">
                            fundraised by{' '}
                          </span>
                          <div className="ml-2 text-nblue font-semibold flex items-center lg:gap-2 gap-1">
                            <img
                              src="/Icons/icon_user_circle_blue.svg"
                              alt="user-circle"
                            ></img>
                            <span>{appealData.admin_user?.email}</span>
                          </div>
                        </div>
                        <div className="avatar-group flex space-x-[-1rem] rtl:space-x-reverse">
                          {appeal_tags?.map((tag, index) => (
                            <div
                              key={index}
                              className="relative cursor-pointer transition-transform transform-gpu group-hover:z-10"
                              style={{
                                zIndex: index,
                                marginLeft: index !== 0 ? '-0.6rem' : '0',
                              }}
                            >
                              <div
                                className="bg-yellow rounded-full h-6 w-6 font-semibold text-xs transition-transform transform-gpu group-hover:scale-110"
                                style={{
                                  border: '1px solid #00ade9', // Blue border color
                                  borderRadius: '50%',
                                  overflow: 'hidden', // Ensure the circle shape
                                }}
                              >
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  {getDonationTag(tag)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-appeal_desc">
                    <Image
                      classNames="w-full h-full object-cover"
                      url={cover_image}
                      alt="Hand-pump"
                      containerClass="w-full h-full"
                      specialClass="h-full"
                    />
                  </div>
                  {!isCampaignPage && (
                    <div
                      className="w-full h-auto lg:px-6 px-4 py-4 bg-white"
                      ref={appealRefs[0]}
                    >
                      <h2 className="text-mont text-lg text-lblack font-bold">
                        Story
                      </h2>
                      {story?.length > 500 ? (
                        readMore ? (
                          <>
                            <p className="text-mont text-xs text-l2black mt-4 h-16 overflow-hidden">
                              {story}
                            </p>
                            <p
                              className="text-center mt-4 font-medium hover:font-bold text-xs cursor-pointer"
                              onClick={() => setreadMore(false)}
                            >
                              Read More
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-mont text-xs text-l2black mt-4">
                              {story}
                            </p>
                            <p
                              className="text-center mt-4 font-medium hover:font-bold text-xs cursor-pointer"
                              onClick={() => setreadMore(true)}
                            >
                              Read Less
                            </p>
                          </>
                        )
                      ) : (
                        <p className="text-mont text-xs text-l2black mt-4">
                          {story}
                        </p>
                      )}
                      <button
                        className="w-full lg:w-fit text-sblue text-center font-bold text-xs border-sblue border hover:text-white hover:bg-sblue rounded-lg px-10 py-3 mt-4"
                        onClick={handleStartFundraising}
                        disabled={loading}
                      >
                        {loading
                          ? 'Creating Fundraising'
                          : 'START FUNDRAISING NOW'}
                      </button>
                    </div>
                  )}
                  <div className="w-full lg:h-1 h-0.5 bg-owhite"></div>
                  <div
                    className="w-full h-auto lg:px-6 px-4 py-4 bg-white"
                    ref={appealRefs[1]}
                  >
                    <h2 className="text-mont text-lg text-lblack font-bold">
                      About
                    </h2>
                    {description?.length > 500 ? (
                      readMore2 ? (
                        <>
                          <p className="text-mont text-xs text-l2black mt-4 h-16 overflow-hidden">
                            {description}
                          </p>
                          <p
                            className="text-center mt-4 font-medium hover:font-bold text-xs cursor-pointer"
                            onClick={() => setreadMore2(false)}
                          >
                            Read More
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-mont text-xs text-l2black mt-4">
                            {description}
                          </p>
                          <p
                            className="text-center mt-4 font-medium hover:font-bold text-xs cursor-pointer"
                            onClick={() => setreadMore2(true)}
                          >
                            Read Less
                          </p>
                        </>
                      )
                    ) : (
                      <p className="text-mont text-xs text-l2black mt-4">
                        {description}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:h-1 h-0.5 bg-owhite"></div>
                  <div
                    className="w-full h-auto lg:px-6 px-4 py-4 bg-white"
                    ref={appealRefs[2]}
                  >
                    <h2 className="text-mont text-lg text-lblack font-bold">
                      Summary
                    </h2>
                    <div className="w-full h-auto py-6 px-3 lg:px-6 border border-lgray rounded-lg mt-4">
                      <div className="w-full h-auto flex lg:flex-row gap-4 flex-col justify-between">
                        <div className="lg:w-1/2 w-full h-auto">
                          <span className="text-mont text-sm text-lblack font-medium">
                            Total raised
                          </span>
                          <h3 className="text-mont lg:text-xl text-2xl text-lblack font-semibold">
                            {currencyFormatter(raised_amount)}{' '}
                            {/* <span className="text-base">+ £523 Gift Ad</span> */}
                          </h3>
                        </div>
                        {/* <div className="lg:w-1/4 w-full h-auto">
                          <span className="text-mont text-sm text-lblack">
                            Direct donations
                          </span>
                          <h3 className="text-mont lg:text-xl text-2xl text-lblack font-semibold">
                            £1.034
                          </h3>
                        </div> */}
                        {/* <div className="lg:w-1/4 w-full h-auto">
                          <span className="text-mont text-sm text-lblack">
                            Donations via Fundraisers
                          </span>
                          <h3 className="text-mont lg:text-xl text-2xl text-lblack font-semibold">
                            £378
                          </h3>
                        </div> */}
                        <div className="lg:w-1/2 w-full h-auto">
                          <span className="text-mont text-sm text-lblack font-medium">
                            Offline donations
                          </span>
                          <h3 className="text-mont lg:text-xl text-2xl text-lblack font-semibold">
                            {currencyFormatter(offline_donations)}
                          </h3>
                        </div>
                      </div>
                      <div className="w-full h-auto mt-2">
                        <p className="text-[10px] text-mont text-lgray font-medium">
                          * Charities pay a small fee for our service.{' '}
                          <span className="text-sblue font-semibold">
                            Find out how much its is and what we do for it.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:h-1 h-0.5 bg-owhite"></div>
                  <div className="w-full h-auto lg:px-6 px-4 py-6 bg-white rounded-b-2xl">
                    <h2 className="text-mont text-lg text-lblack font-bold">
                      Share
                    </h2>
                    <div className="w-full h-auto flex lg:flex-row flex-col gap-4 mt-5">
                      <button className="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-dblue hover:bg-nblue text-mont text-white text-xs font-bold">
                        <i className="fa-brands fa-facebook-f mr-2 text-sm"></i>{' '}
                        Share on Facebook
                      </button>
                      <button className="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-sblue hover:bg-dblue text-mont text-white text-xs font-bold">
                        <i className="fa-brands fa-twitter mr-2 text-sm"></i>{' '}
                        Twitter
                      </button>
                      <button className="lg:w-1/3 w-full h-auto px-8 py-4 border-2 border-lgray rounded-md bg-white text-mont text-dgray text-xs font-bold hover:bg-lgray hover:text-white">
                        <i className="fa-regular fa-envelope-open mr-2 text-sm"></i>{' '}
                        Email
                      </button>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto lg:-mt-32 z-9 -mt-8">
                  <div className="w-full h-auto hidden lg:flex flex-col px-6 pt-8 pb-6 bg-white rounded-2xl">
                    <div className="w-full h-auto flex gap-8">
                      <div className="h-auto">
                        <h2 className="text-mont text-3xl text-lblack font-bold">
                          {currencyFormatter(raised_amount)}
                        </h2>
                        <p className="text-mont text-xs font-medium text-gray">
                          raised of{' '}
                          <span className="text-blue font-semibold">
                            {currencyFormatter(targeted_amount)}
                          </span>{' '}
                          target
                        </p>
                      </div>

                      <div className="mt-4 h-auto">
                        {targeted_amount && (
                          <CircularProgressBar
                            percentage={Math.round(
                              (raised_amount / targeted_amount) * 100
                            )}
                            style={{
                              width: '4rem',
                              height: '4rem',
                              fontSize: '0.9rem',
                            }}
                          />
                        )}
                      </div>
                    </div>

                    <div className="w-full h-auto flex justify-between mt-4">
                      <p className="text-mont text-[10px] text-l2black font-medium flex items-center gap-1">
                        by{' '}
                        <img
                          src="/Icons/icon_user_circle_gray.svg"
                          className="w-4"
                          alt="icon-user-circle-gray"
                        ></img>{' '}
                        {donationData.length} supporters
                      </p>
                      {end_at && (
                        <p className="text-mont text-xs text-orange font-semibold">
                          <i className="mr-1 fa-regular fa-clock"></i> Ends in{' '}
                          {dayjs(end_at).diff(dayjs(), 'day')} days
                        </p>
                      )}
                    </div>
                    <button
                      className="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green hover:bg-mgreen rounded-md mt-2"
                      onClick={handleDonateClick}
                    >
                      DONATE
                    </button>
                    <button
                      onClick={() => setshowShare(true)}
                      className="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border border-lgray hover:bg-lgray hover:text-white rounded-md mt-4"
                    >
                      <i className="mr-1 fa-sharp fa-solid fa-share-nodes text-sm"></i>{' '}
                      SHARE
                    </button>
                  </div>
                  {!isCampaignPage &&
                    appealData &&
                    appealData.allow_campaigns && (
                      <>
                        <div className="w-full h-auto px-6 py-6 mt-6 bg-bwhite border-2 border-sblue rounded-2xl">
                          <div className="w-full h-auto flex gap-2">
                            <img
                              src="/Icons/illustration_fundraiser-hand.svg"
                              alt="illustration_fundraiser-hand"
                            />
                            <div className="w-2/3 h-auto flex flex-col justify-between">
                              <h3 className="text-mont text-base text-lblack font-bold">
                                Be a Fundraiser
                              </h3>
                              <p className="text-mont text-xs text-l2black">
                                Create your own appeal page for “Water for All”
                                and help support this cause.
                              </p>
                            </div>
                          </div>
                          <button
                            className="w-full h-auto p-4 mt-4 rounded-lg text-mont text-xs text-lblack font-bold bg-sblue hover:text-white hover:bg-dblue"
                            onClick={handleStartFundraising}
                          >
                            START FUNDRAISING
                          </button>
                        </div>
                        {appealData.campaigns?.length > 0 && (
                          <div className="w-full h-auto py-4 bg-white rounded-2xl mt-6">
                            <div className="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-platinum">
                              <h3 className="text-mont text-lblack text-base font-bold">
                                Fundraisers
                              </h3>
                              <p className="text-mont text-lblack text-base font-medium">
                                {appealData.campaigns?.length || 0}
                              </p>
                            </div>
                            <div
                              className={`primary-scroll pt-2 ${
                                appealData.campaigns?.length < 4
                                  ? 'h-fit'
                                  : 'h-[16rem]'
                              } ${showMoreFundraisers && 'overflow-y-scroll'}`}
                            >
                              {appealData.campaigns
                                ?.slice(
                                  0,
                                  showMoreFundraisers
                                    ? appealData.campaigns?.length
                                    : displayNumberOfFundraisers
                                )
                                .map((campaign, index) => (
                                  <div
                                    className="px-6 py-2 relative"
                                    key={index}
                                  >
                                    <div
                                      className={`absolute bg-white w-full z-100 top-0 left-0 h-14 opacity-50
                                        ${
                                          ((!showMoreFundraisers &&
                                            index !== 3) ||
                                            (showMoreFundraisers &&
                                              index !==
                                                appealData.campaigns?.length -
                                                  1)) &&
                                          'hidden'
                                        }`}
                                    ></div>
                                    <div className="flex justify-between">
                                      <div className="flex gap-2 items-center">
                                        <img
                                          src="/Icons/icon_user_circle_blue.svg"
                                          alt="icon-user-blue"
                                        ></img>
                                        <p className="text-mont text-nblue text-sm font-semibold">
                                          {campaign.user?.first_name +
                                            ' ' +
                                            campaign.user?.last_name}
                                        </p>
                                      </div>
                                      <div className="w-1/3 lg:hidden">
                                        <LinearProgressBar
                                          textPosition="right"
                                          progress={
                                            campaign.raised_amount /
                                            campaign.targeted_amount
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="flex gap-4 items-center justify-between ml-7">
                                      <div className="flex gap-4 text-mont text-lg font-semibold">
                                        <span className="text-sblue">
                                          {currencyFormatter(
                                            campaign.raised_amount
                                          )}{' '}
                                        </span>
                                        <span className="flex gap-2 items-center text-mont text-xs text-l2black font-medium">
                                          raised by{' '}
                                          <img
                                            src="/Icons/user-circle-black.svg"
                                            className="w-4"
                                            alt="user-circle-black"
                                          ></img>{' '}
                                          {campaign.supporters_count} supporters
                                        </span>
                                      </div>

                                      <div className="w-1/3 hidden lg:block">
                                        <LinearProgressBar
                                          textPosition="right"
                                          progress={
                                            campaign.raised_amount /
                                            campaign.targeted_amount
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                            {appealData.campaigns?.length >
                              displayNumberOfFundraisers && (
                              <button
                                className="w-full h-auto text-center text-mont text-nblue text-xs font-medium hover:font-semibold mt-4 cursor-pointer"
                                onClick={() =>
                                  setshowMoreFundraisers(!showMoreFundraisers)
                                }
                              >
                                {showMoreFundraisers
                                  ? 'Show less'
                                  : 'Show more'}
                              </button>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  {donationData.length > 0 && (
                    <div
                      className="w-full h-auto py-4 bg-white rounded-2xl mt-6"
                      ref={donorsRef}
                    >
                      <div className="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-platinum">
                        <h3 className="text-mont text-lblack text-base font-bold">
                          Recent donors
                        </h3>
                        <p className="text-mont text-lblack text-base font-medium">
                          {donationData.length}
                        </p>
                      </div>
                      <div
                        className={`primary-scroll pt-2 ${
                          donationData.length < 4 ? 'h-fit' : 'h-[16rem]'
                        } ${showMoreDonors && 'overflow-y-scroll'}`}
                      >
                        {donationData
                          .slice(
                            0,
                            showMoreDonors
                              ? donationData.length
                              : displayNumberOfDonors
                          )
                          .map((donation, index) => (
                            <div
                              className="w-full h-auto px-6 py-2 relative"
                              key={index}
                            >
                              <div
                                className={`absolute bg-white w-full z-100 top-0 left-0 h-14 opacity-50
                                  ${
                                    ((!showMoreDonors && index !== 3) ||
                                      (showMoreDonors &&
                                        index !== donationData.length - 1)) &&
                                    'hidden'
                                  }`}
                              ></div>
                              <div className="w-full h-auto flex gap-2 items-center">
                                <img
                                  src="/Icons/icon_user_circle_blue.svg"
                                  alt="icon-user-circle-blue"
                                ></img>
                                <div className="w-full h-auto flex justify-between">
                                  <p className="text-mont text-nblue text-sm font-semibold">
                                    {donation.user.first_name +
                                      ' ' +
                                      donation.user.last_name}
                                  </p>
                                  <p className="text-mont text-lgray text-xs font-medium flex gap-2">
                                    <img
                                      src="/Icons/icon_clock.svg"
                                      alt="icon-clock"
                                    ></img>
                                    <div className="flex items-center gap-1">
                                      <span>
                                        {Math.abs(
                                          dayjs(donation.created_at).diff(
                                            dayjs(),
                                            'day'
                                          )
                                        )}{' '}
                                      </span>
                                      <span className="whitespace-nowrap">
                                        days ago
                                      </span>
                                    </div>
                                  </p>
                                </div>
                              </div>
                              <div className="w-full h-auto ml-6 mt-2">
                                <p className="text-mont text-dgray text-xs">
                                  {''}
                                </p>
                                <p className="text-mont text-sm text-blue font-semibold">
                                  £{donation.amount}{' '}
                                  <span className="text-mont text-xs text-blue font-medium">
                                    {/* + £0 Gift Aid */}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                      {donationData.length > displayNumberOfDonors && (
                        <button
                          className="w-full h-auto text-center text-mont text-nblue text-xs font-medium hover:font-semibold mt-4 cursor-pointer"
                          onClick={() => setshowMoreDonors(!showMoreDonors)}
                        >
                          {showMoreDonors ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <img
                className="absolute w-96 right-0 lg:-right-36 lg:top-1/4 lg:mt-12 top-10 z-0 hidden lg:block"
                src="/images/vectors/logo_aid-humanity-icon.svg"
                alt="Aid-humanity background logo"
              />
            </section>
            {recentAppeals.length > 0 && (
              <section className="w-full h-auto bg-owhite z-10">
                <div className="w-full h-auto container mx-auto py-12">
                  <div className="w-full h-auto text-center mb-12">
                    <h1 className="text-3xl text-mont font-bold">
                      Recent Appeals
                    </h1>
                  </div>
                  <RecentAppealSlider appeals={recentAppeals} />
                </div>
              </section>
            )}
          </main>
        )}
        <div className="invisible">
          <AppealFooter active="about" />
        </div>
        {showDonateModal && (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            appealId={isCampaignPage ? appealData.id : appealId}
            campaignId={isCampaignPage && campaignId}
            subscriptionInterval={appealData.subscription_interval}
            quick={false}
          />
        )}
        <div className={!loading && 'mb-16'}>
          <Footer />
        </div>
        {showShare && (
          <AppealShare showModal={showShare} setshowModal={setshowShare} />
        )}
      </div>
    </SidebarWrapper>
  );
};

export default AppealAbout;
