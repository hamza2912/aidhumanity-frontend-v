import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import AppealFooter from '../../components/AppealFooter';
import AppealShare from '../../components/modal/AppealShare';
import AppealSlider from '../../components/AppealSlider';
import HeaderAppeal from '../../components/HeaderAppeal';
// import Header from '../../components/Header';
import appealService from '../../services/appeals';
import dayjs from 'dayjs';
import donationService from '../../services/donations';
import CircularProgressBar from './CircularProgressBar';
import DonateModal from '../../components/modal/DonateModal';
import { SERVER_URL } from '../../services/config';
import { useLocation, useNavigate } from 'react-router-dom';
// import Thankyou from '../OtherPages/thankyou';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { currencyFormatter } from '../../utils';
import FixedNavigator from './FixedNavigator';
import '../../App.css';
import { AppealTags } from '../../constants';
import { updateFundraisedAppeal } from '../../redux/appeal/appealSlice';
import { useDispatch } from 'react-redux';
import CampaignService from '../../services/campaign';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import RecentAppealSlider from '../../components/RecentAppealSlider';
import { setBodyOverflowHidden } from '../../redux/common/CommonSlice';
import Waterwells from './waterwells';
import LinearProgressBar from '../Dashboard/LinearProgressBar';

const AppealAbout = () => {
  const [showShare, setshowShare] = React.useState(false);
  const [appealData, setAppealData] = React.useState({});
  const [donationData, setDonationData] = React.useState([]);
  const [showProjectCard, setShowProjectCart] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMore, setshowMore] = React.useState(false);
  const [showMoreDonors, setshowMoreDonors] = React.useState(false);
  const [showMoreFundraisers, setshowMoreFundraisers] = React.useState(false);
  const [recentAppeals, setRecentAppeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const msgStatus = searchParams.get('status');
  const [isCampaignPage, setIsCampaignPage] = useState(
    location.pathname.includes('campaign')
  );

  const { appealId, campaignId } = useParams();
  const dispatch = useDispatch();

  const fetchAppeal = async () => {
    const data = await appealService.getAppeal(appealId || 1);
    setAppealData(data);
    setRecentAppeals([data, data, data]);
    const donations = await donationService.getDonations(appealId || 1);
    setDonationData(donations);
    return data;
  };

  const fetchCampaign = async () => {
    const data = await appealService.getCampagin(campaignId);
    setAppealData(data);
    setRecentAppeals([data, data, data]);
    const donations = await donationService.getCampaignDonations(campaignId);
    setDonationData(donations);
    return data;
  };

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
  }, [msgStatus]);

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
    appeal_tag,
    cover_image,
    appeal_type,
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
  }, [fetchAppeal]);

  function handleClick() {
    navigate('/appeal_about#target');
  }

  let displayNumberOfDonors = 4;
  let displayNumberOfFundraisers = 4;

  const overflowHidden = () => {
    dispatch(setBodyOverflowHidden(true));
  };

  const overflowVisible = () => {
    dispatch(setBodyOverflowHidden(false));
  };

  const ref = React.useRef(null);
  const [divStyle, setdivStyle] = React.useState({});

  React.useEffect(() => {
    if (showProjectCard) {
      setdivStyle({
        height: ref.current?.clientHeight + 'px',
        position: 'fixed',
      });
    } else {
      setdivStyle({
        position: 'inherit',
      });
    }
  }, [showProjectCard]);

  return (
    <>
      {showProjectCard && (
        <>
          <div className="dimmer"></div>
          <div
            ref={ref}
            class="w-full h-auto flex lg:flex-row flex-col justify-end gap-4 z-40 absolute"
          >
            <Waterwells
              setShowProjectCart={setShowProjectCart}
              show={showProjectCard}
              appeal={appealData}
              campaignId={campaignId}
            />
          </div>
        </>
      )}
      <div style={divStyle}>
        <HeaderAppeal
          appealId={appealId}
          category={category?.name}
          title={title}
          subscriptionInterval={appealData?.subscription_interval}
          overflowHidden={overflowHidden}
          overflowVisible={overflowVisible}
          setShowProjectCart={setShowProjectCart}
        />
        {/* <Header /> */}
        <main>
          <section class="w-full h-auto pb-16 px-5 bg-owhite relative">
            <FixedNavigator
              appealRefs={appealRefs}
              handleClick={handleClick}
              appealId={appealId}
              raisedAmount={raised_amount}
              setShowProjectCart={setShowProjectCart}
            />
            <div class="w-full h-auto container mx-auto flex lg:flex-row flex-col gap-8">
              <div class="lg:w-2/3 w-full h-auto bg-white rounded-2xl -mt-24">
                <div class="w-full h-auto lg:hidden px-2 py-4 bg-white rounded-2xl">
                  <div class="w-full h-auto flex justify-between">
                    <div class="w-1/2 h-auto">
                      <h2 class="text-mont lg:text-3xl text-2xl text-lblack font-bold">
                        {currencyFormatter(raised_amount)}
                      </h2>
                      <p class="text-mont text-xs font-medium text-gray">
                        raised of{' '}
                        <span class="text-blue font-semibold">
                          {currencyFormatter(targeted_amount)}
                        </span>{' '}
                        target
                      </p>
                    </div>
                    <div class="w-1/2 h-auto flex justify-end">
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
                  <div class="w-full h-auto flex justify-between mt-8">
                    <p class="text-mont text-[10px] text-l2black font-medium flex items-center gap-1">
                      by{' '}
                      <img
                        src="/Icons/icon_user_circle_gray.svg"
                        className="w-4"
                      ></img>{' '}
                      {donationData.length} supporters
                    </p>
                    {end_at && (
                      <p class="text-mont text-xs text-orange font-semibold">
                        <i class="mr-1 fa-regular fa-clock"></i> Ends in{' '}
                        {dayjs(end_at).diff(dayjs(), 'day')} days
                      </p>
                    )}
                  </div>
                  <button
                    class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2"
                    onClick={() => {
                      appeal_type === 'project'
                        ? setShowProjectCart(true)
                        : setshowDonateModal(true);
                    }}
                  >
                    DONATE
                  </button>
                  <button
                    onClick={() => setshowShare(true)}
                    class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray hover:bg-lgray hover:text-white rounded-md mt-2"
                  >
                    <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                  </button>
                </div>
                <div class="w-full h-auto flex justify-between lg:px-6 px-2 py-4">
                  <div class="w-full">
                    <span class="text-mont text-xs text-lgray font-medium">
                      {category?.name}
                    </span>
                    <div className="flex justify-between items-center">
                      <h1 class="text-mont lg:text-4xl text-3xl text-lblack font-bold mt-2">
                        {title}
                      </h1>
                      <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs">
                        <span className="cursor-default">
                          {getDonationTag(appeal_tag)}
                        </span>
                      </div>
                    </div>
                    {/* <p class="text-mont text-l2black text-xs mt-2">
                    fundraised by{' '}
                    <span class="ml-2 text-nblue font-semibold">
                      <i class="fa-regular fa-circle-user text-sm"></i> Ron Hill
                    </span>
                  </p> */}
                  </div>
                </div>
                <img
                  class="w-full h-auto"
                  src={SERVER_URL + cover_image}
                  alt="Hand-pump"
                />
                {!isCampaignPage && (
                  <div class="w-full h-auto px-6 py-4 mt-2" ref={appealRefs[0]}>
                    <h2 class="text-mont text-lg text-lblack font-bold">
                      Story
                    </h2>
                    <p class="text-mont text-xs text-l2black mt-4">{story}</p>
                    <button
                      class="text-dblue text-center font-semibold text-sm border-sblue border-2 hover:text-white hover:bg-sblue rounded-lg px-4 py-2 mt-4"
                      onClick={handleStartFundraising}
                      disabled={loading}
                    >
                      {loading ? 'Creating Fundraising' : 'START FUNDRAISING'}
                    </button>
                  </div>
                )}
                <div class="w-full h-1 bg-owhite my-2"></div>
                <div class="w-full h-auto px-6 py-4 mt-2" ref={appealRefs[1]}>
                  <h2 class="text-mont text-lg text-lblack font-bold">About</h2>
                  <p class="text-mont text-xs text-l2black mt-4">
                    {description}
                  </p>
                </div>
                <div class="w-full h-1 bg-owhite my-2"></div>
                <div class="w-full h-auto px-6 py-4 mt-2" ref={appealRefs[2]}>
                  <h2 class="text-mont text-lg text-lblack font-bold">
                    Summary
                  </h2>
                  <div class="w-full h-auto p-6 border border-lgray rounded-lg mt-4">
                    <div class="w-full h-auto flex lg:flex-row gap-4 flex-col justify-between">
                      <div class="lg:w-1/2 w-full h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Total raised
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          {currencyFormatter(raised_amount)}{' '}
                          {/* <span class="text-base">+ £523 Gift Ad</span> */}
<<<<<<< HEAD
                        </h3>
                      </div>
                      {/* <div class="lg:w-1/4 w-full h-auto">
                      <span class="text-mont text-sm text-lblack">
                        Direct donations
                      </span>
                      <h3 class="text-mont text-xl text-lblack font-semibold">
                        £1.034
                      </h3>
                    </div> */}
                      {/* <div class="lg:w-1/4 w-full h-auto">
                      <span class="text-mont text-sm text-lblack">
                        Donations via Fundraisers
                      </span>
                      <h3 class="text-mont text-xl text-lblack font-semibold">
                        £378
                      </h3>
                    </div> */}
                      <div class="lg:w-1/2 w-full h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Offline donations
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          {currencyFormatter(offline_donations)}
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
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-dblue hover:bg-nblue text-mont text-white text-xs font-bold">
                      <i class="fa-brands fa-facebook-f mr-2"></i> Share on
                      Facebook
                    </button>
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-sblue hover:bg-dblue text-mont text-white text-xs font-bold">
                      <i class="fa-brands fa-twitter mr-2"></i> Twitter
                    </button>
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 border-2 border-lgray rounded-md bg-white text-mont text-dgray text-xs font-bold hover:bg-lgray hover:text-white">
                      <i class="fa-regular fa-envelope-open mr-2"></i> Email
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 w-full h-auto lg:-mt-24 z-9">
                <div class="w-full h-auto hidden lg:flex flex-col px-6 py-4 bg-white rounded-2xl">
                  <div class="w-full h-auto flex gap-8">
                    <div class="h-auto">
                      <h2 class="text-mont text-3xl text-lblack font-bold">
                        {currencyFormatter(raised_amount)}
                      </h2>
                      <p class="text-mont text-xs font-medium text-gray">
                        raised of{' '}
                        <span class="text-blue font-semibold">
                          {currencyFormatter(targeted_amount)}
                        </span>{' '}
                        target
                      </p>
                    </div>

                    <div class="mt-4 h-auto">
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

                  <div class="w-full h-auto flex justify-between mt-4">
                    <p class="text-mont text-[10px] text-l2black font-medium flex items-center gap-1">
                      by{' '}
                      <img
                        src="/Icons/icon_user_circle_gray.svg"
                        className="w-4"
                      ></img>{' '}
                      {donationData.length} supporters
                    </p>
                    {end_at && (
                      <p class="text-mont text-xs text-orange font-semibold">
                        <i class="mr-1 fa-regular fa-clock"></i> Ends in{' '}
                        {dayjs(end_at).diff(dayjs(), 'day')} days
                      </p>
                    )}
                  </div>
                  <button
                    class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green hover:bg-mgreen rounded-md mt-2"
                    onClick={() => {
                      appeal_type === 'project'
                        ? setShowProjectCart(true)
                        : setshowDonateModal(true);
                    }}
                  >
                    DONATE
                  </button>
                  <button
                    onClick={() => setshowShare(true)}
                    class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border border-lgray hover:bg-lgray hover:text-white rounded-md mt-2"
                  >
                    <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                  </button>
                </div>
                {!isCampaignPage &&
                  appealData &&
                  appealData?.allow_campaigns && (
                    <>
                      <div className="w-full h-auto px-6 py-4 mt-6 bg-bwhite border-2 border-sblue rounded-2xl">
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
                      
                      {appealData?.campaigns?.length > 0 &&
                        <div className="w-full h-auto py-4 bg-white rounded-2xl mt-6">
                          <div className="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-platinum">
                            <h3 className="text-mont text-lblack text-base font-bold">
                              Fundraisers
                            </h3>
                            <p className="text-mont text-lblack text-base font-medium">
                              {appealData?.campaigns?.length || 0}
                            </p>
                          </div>
                          <div className={`primary-scroll pt-2 h-[16rem] ${showMoreFundraisers && "overflow-y-scroll"}`}>
                            {(appealData?.campaigns?.slice(
                              0,
                              showMoreFundraisers ? appealData?.campaigns?.length : displayNumberOfFundraisers
                            ).map(campaign => (
                              <div className='px-6 py-2'>
                                <div className='flex justify-between'>
                                  <div className='flex gap-2 items-center'>
                                    <img src="/Icons/icon_user_circle_blue.svg"></img>
                                    <p className="text-mont text-nblue text-sm font-semibold">
                                      {campaign.user?.first_name + ' ' + campaign.user?.last_name}
                                    </p>
                                  </div>
                                  <div className='w-1/3 lg:hidden'>< LinearProgressBar textPosition="right" progress="50" /></div>
                                </div>
                                <div className='flex gap-4 items-center justify-between ml-7'>
                                  <div className="flex gap-4 text-mont text-lg font-semibold">
                                    <span className='text-sblue'>{currencyFormatter(campaign.raised_amount)}{' '}</span>
                                    <span className="flex gap-2 items-center text-mont text-xs text-l2black font-medium">
                                      raised by{' '}
                                      <img src="/Icons/user-circle-black.svg" className='w-4'></img>{' '}
                                      {campaign.supporters_count} supporters
                                    </span>
                                  </div>

                                  <div className='w-1/3 hidden lg:block'>< LinearProgressBar textPosition="right" progress="50" /></div>
                                </div>
                              </div>
                              // <div className="w-full h-auto flex justify-between px-6 py-4">
                              // <div className="w-2/3 h-auto flex">
                              //   <i className="mr-1 fa-regular fa-circle-user text-lg" />
                              //     <div className="w-full h-auto">
                              //       <p className="text-mont text-nblue text-sm font-semibold">
                              //         {campaign.user?.first_name +
                              //           ' ' +
                              //           campaign.user?.last_name}
                              //       </p>
                                    // <p className="text-mont text-lg text-blue font-semibold">
                                    //   {currencyFormatter(campaign.raised_amount)}{' '}
                                    //   <span className="text-mont text-xs text-l2black font-medium">
                                    //     raised by{' '}
                                    //     <i className="mx-1 fa-regular fa-circle-user text-sm" />{' '}
                                    //     {campaign.supporters_count} supporters
                                    //   </span>
                                    // </p>
                              //     </div>
                              //   </div>
                                // <div className="w-1/4 h-auto flex items-center justify-between gap-6">
                                //   <div className="w-8 h-2 bg-sblue rounded-2xl" />
                                //   <p className="text-mont text-green text-sm font-bold">
                                //     {Math.round(
                                //       (campaign.raised_amount /
                                //         campaign.targeted_amount) *
                                //         100
                                //     )}
                                //     %
                                //   </p>
                                // </div>
                              // </div>
                            )))}
                          </div>
                          {appealData?.campaigns?.length > displayNumberOfFundraisers && (
                            <button
                              class="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6 cursor-pointer"
                              onClick={() => setshowMoreFundraisers(!showMoreFundraisers)}
                            >
                              {/* {`${showMore} ? "Show more" : "Show less"`} */}
                              {showMoreFundraisers ? "Show less" : "Show more"}
                            </button>
                          )}
                        </div>
                      }


                    </>
                  )}

                
                {donationData.length > 0 && (
                  <div class="w-full h-auto py-4 bg-white rounded-2xl mt-6" ref={donorsRef}>
                    <div class="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-platinum">
                      <h3 class="text-mont text-lblack text-base font-bold">
                        Recent donors
                      </h3>
                      <p class="text-mont text-lblack text-base font-medium">
                        {donationData.length}
                      </p>
                    </div>
                    <div className={`primary-scroll pt-2 h-[16rem] ${showMoreDonors && "overflow-y-scroll"}`}>
                      {donationData
                        .slice(
                          0,
                          showMoreDonors ? donationData.length : displayNumberOfDonors
                        )
                        .map(donation => (
                          <div class="w-full h-auto px-6 py-2">
                            <div class="w-full h-auto flex gap-2 items-center">
                              <img src="/Icons/icon_user_circle_blue.svg"></img>
                              <div class="w-full h-auto flex justify-between">
                                <p class="text-mont text-nblue text-sm font-semibold">
                                  {donation.user.first_name +
                                    ' ' +
                                    donation.user.last_name}
                                </p>
                                <p class="text-mont text-lgray text-xs font-medium flex gap-2">
                                  <img src="/Icons/icon_clock.svg"></img>
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
                            <div class="w-full h-auto ml-6 mt-2">
                              <p class="text-mont text-dgray text-xs">{''}</p>
                              <p class="text-mont text-sm text-blue font-semibold">
                                £{donation.amount}{' '}
                                <span class="text-mont text-xs text-blue font-medium">
                                  {/* + £0 Gift Aid */}
                                </span>
                              </p>
                            </div>
                          </div>
                      ))}
                    </div>

                  {appealData?.campaigns?.length > 0 &&
                    <div className="w-full h-auto py-4 bg-white rounded-2xl mt-6">
                      <div className="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-platinum">
                        <h3 className="text-mont text-lblack text-base font-bold">
                          Fundraisers
=======
>>>>>>> 70c182c (added AppealAbout from main)
                        </h3>
                      </div>
                      {/* <div class="lg:w-1/4 w-full h-auto">
                      <span class="text-mont text-sm text-lblack">
                        Direct donations
                      </span>
                      <h3 class="text-mont text-xl text-lblack font-semibold">
                        £1.034
                      </h3>
                    </div> */}
                      {/* <div class="lg:w-1/4 w-full h-auto">
                      <span class="text-mont text-sm text-lblack">
                        Donations via Fundraisers
                      </span>
                      <h3 class="text-mont text-xl text-lblack font-semibold">
                        £378
                      </h3>
                    </div> */}
                      <div class="lg:w-1/2 w-full h-auto">
                        <span class="text-mont text-sm text-lblack">
                          Offline donations
                        </span>
                        <h3 class="text-mont text-xl text-lblack font-semibold">
                          {currencyFormatter(offline_donations)}
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
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-dblue hover:bg-nblue text-mont text-white text-xs font-bold">
                      <i class="fa-brands fa-facebook-f mr-2"></i> Share on
                      Facebook
                    </button>
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-sblue hover:bg-dblue text-mont text-white text-xs font-bold">
                      <i class="fa-brands fa-twitter mr-2"></i> Twitter
                    </button>
                    <button class="lg:w-1/3 w-full h-auto px-8 py-4 border-2 border-lgray rounded-md bg-white text-mont text-dgray text-xs font-bold hover:bg-lgray hover:text-white">
                      <i class="fa-regular fa-envelope-open mr-2"></i> Email
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 w-full h-auto lg:-mt-24 z-9">
                <div class="w-full h-auto hidden lg:flex flex-col px-6 py-4 bg-white rounded-2xl">
                  <div class="w-full h-auto flex gap-8">
                    <div class="h-auto">
                      <h2 class="text-mont text-3xl text-lblack font-bold">
                        {currencyFormatter(raised_amount)}
                      </h2>
                      <p class="text-mont text-xs font-medium text-gray">
                        raised of{' '}
                        <span class="text-blue font-semibold">
                          {currencyFormatter(targeted_amount)}
                        </span>{' '}
                        target
                      </p>
                    </div>

                    <div class="mt-4 h-auto">
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
<<<<<<< HEAD
                  }
                </>
              )}

                    {donationData.length > displayNumberOfDonors && (
                      <button
                        class="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6 cursor-pointer"
                        onClick={() => setshowMore(!showMore)}
                      >
                        Show more
                      </button>
                    )}
              {donationData.length > 0 && (
                <div class="w-full h-auto py-4 bg-white rounded-2xl mt-6" ref={donorsRef}>
                  <div class="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-platinum">
                    <h3 class="text-mont text-lblack text-base font-bold">
                      Recent donors
                    </h3>
                    <p class="text-mont text-lblack text-base font-medium">
                      {donationData.length}
                    </p>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
                )}
              </div>
            </div>
            <img
              className="absolute w-96 right-0 lg:top-1/4 top-10 z-0 hidden lg:block"
              src="/images/vectors/logo_aid-humanity-icon.svg"
              alt="Aid-humanity background logo"
            />
          </section>
          <section class="w-full h-auto bg-owhite z-10">
            <div class="w-full h-auto container mx-auto py-12">
              <div class="w-full h-auto text-center mb-12">
                <h1 class="text-3xl text-mont font-bold">Recent Appeals</h1>
              </div>
              {recentAppeals.length > 0 && (
                <RecentAppealSlider appeals={recentAppeals} />
                  <div className={`primary-scroll h-[14rem] ${showMoreDonors && "overflow-y-scroll"}`}>
                  <div className={`primary-scroll pt-2 h-[14rem] ${showMoreDonors && "overflow-y-scroll"}`}>
                  <div className={`primary-scroll pt-2 h-[16rem] ${showMoreDonors && "overflow-y-scroll"}`}>
=======
                  </div>

                  <div class="w-full h-auto flex justify-between mt-4">
                    <p class="text-mont text-[10px] text-l2black font-medium flex items-center gap-1">
                      by{' '}
                      <img
                        src="/Icons/icon_user_circle_gray.svg"
                        className="w-4"
                      ></img>{' '}
                      {donationData.length} supporters
                    </p>
                    {end_at && (
                      <p class="text-mont text-xs text-orange font-semibold">
                        <i class="mr-1 fa-regular fa-clock"></i> Ends in{' '}
                        {dayjs(end_at).diff(dayjs(), 'day')} days
                      </p>
                    )}
                  </div>
                  <button
                    class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green hover:bg-mgreen rounded-md mt-2"
                    onClick={() => {
                      appeal_type === 'project'
                        ? setShowProjectCart(true)
                        : setshowDonateModal(true);
                    }}
                  >
                    DONATE
                  </button>
                  <button
                    onClick={() => setshowShare(true)}
                    class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border border-lgray hover:bg-lgray hover:text-white rounded-md mt-2"
                  >
                    <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                  </button>
                </div>
                {!isCampaignPage &&
                  appealData &&
                  appealData?.allow_campaigns && (
                    <>
                      <div className="w-full h-auto px-6 py-4 mt-6 bg-bwhite border-2 border-sblue rounded-2xl">
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
                      <div className="w-full h-auto px-6 py-4 bg-white rounded-2xl mt-6">
                        <div className="w-full h-auto py-4 flex justify-between border-b-2 border-lgray">
                          <h3 className="text-mont text-lblack text-base font-bold">
                            Fundraisers
                          </h3>
                          <p className="text-mont text-lblack text-base font-medium">
                            {appealData?.campaigns?.length || 0}
                          </p>
                        </div>
                        {appealData?.campaigns?.map(campaign => (
                          <div className="w-full h-auto flex justify-between py-4">
                            <div className="w-2/3 h-auto flex">
                              <i className="mr-1 fa-regular fa-circle-user text-lg" />
                              <div className="w-full h-auto">
                                <p className="text-mont text-nblue text-sm font-semibold">
                                  {campaign.user?.first_name +
                                    ' ' +
                                    campaign.user?.last_name}
                                </p>
                                <p className="text-mont text-lg text-blue font-semibold">
                                  {currencyFormatter(campaign.raised_amount)}{' '}
                                  <span className="text-mont text-xs text-l2black font-medium">
                                    raised by{' '}
                                    <i className="mx-1 fa-regular fa-circle-user text-sm" />{' '}
                                    {campaign.supporters_count} supporters
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="w-1/4 h-auto flex items-center justify-between gap-6">
                              <div className="w-8 h-2 bg-sblue rounded-2xl" />
                              <p className="text-mont text-green text-sm font-bold">
                                {Math.round(
                                  (campaign.raised_amount /
                                    campaign.targeted_amount) *
                                    100
                                )}
                                %
                              </p>
                            </div>
                          </div>
                        ))}
                        <button className="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6 hover:text-sblue">
                          Show more
                        </button>
                      </div>
                    </>
                  )}

                {donationData.length > 0 && (
                  <div
                    class="w-full h-auto py-4 bg-white rounded-2xl mt-6"
                    ref={donorsRef}
                  >
                    <div class="w-full h-auto px-6 py-4 flex justify-between border-b-2 border-[#e6e6e6]">
                      <h3 class="text-mont text-lblack text-base font-bold">
                        Recent donors
                      </h3>
                      <p class="text-mont text-lblack text-base font-medium">
                        {donationData.length}
                      </p>
                    </div>
>>>>>>> 70c182c (added AppealAbout from main)
                    {donationData
                      .slice(
                        0,
                        showMore ? donationData.length : displayNumberOfDonors
                      )
                      .map(donation => (
                        <div class="w-full h-auto px-6 py-4">
                          <div class="w-full h-auto flex gap-2 items-center">
                            <img src="/Icons/icon_user_circle_blue.svg"></img>
                            <div class="w-full h-auto flex justify-between">
                              <p class="text-mont text-nblue text-sm font-semibold">
                                {donation.user.first_name +
                                  ' ' +
                                  donation.user.last_name}
                              </p>
                              <p class="text-mont text-lgray text-xs font-medium flex gap-2">
                                <img src="/Icons/icon_clock.svg"></img>
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
                          <div class="w-full h-auto ml-6 mt-2">
                            <p class="text-mont text-dgray text-xs">{''}</p>
                            <p class="text-mont text-sm text-blue font-semibold">
                              £{donation.amount}{' '}
                              <span class="text-mont text-xs text-blue font-medium">
                                {/* + £0 Gift Aid */}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}

                    {donationData.length > displayNumberOfDonors && (
                      <button
                        class="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6 cursor-pointer"
                        onClick={() => setshowMoreDonors(!showMoreDonors)}
                      >
                        {/* {`${showMore} ? "Show more" : "Show less"`} */}
                        {showMoreDonors ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>
                )}

              </div>
            </div>
            <img
              className="absolute w-96 right-0 lg:top-1/4 top-10 z-0 hidden lg:block"
              src="/images/vectors/logo_aid-humanity-icon.svg"
              alt="Aid-humanity background logo"
            />
          </section>
          <section class="w-full h-auto bg-owhite z-10">
            <div class="w-full h-auto container mx-auto py-12">
              <div class="w-full h-auto text-center mb-12">
                <h1 class="text-3xl text-mont font-bold">Recent Appeals</h1>
              </div>
              {recentAppeals.length > 0 && (
                <RecentAppealSlider appeals={recentAppeals} />
              )}
            </div>
          </section>
        </main>

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
        <div className="mb-16">
          <Footer />
        </div>
        {showShare && (
          <AppealShare showModal={showShare} setshowModal={setshowShare} />
        )}
      </div>
    </>
  );
};

export default AppealAbout;