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

function AppealAbout() {
  const [showShare, setshowShare] = React.useState(false);
  const [appealData, setAppealData] = React.useState({});
  const [donationData, setDonationData] = React.useState([]);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMore, setshowMore] = React.useState(false);
  const [recentAppeals, setRecentAppeals] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const msgStatus = searchParams.get('status');
  const { appealId } = useParams();

  const fetchAppeal = async () => {
    const data = await appealService.getAppeal(appealId || 1);
    setAppealData(data);
    setRecentAppeals([data, data, data]);
    const donations = await donationService.getDonations(appealId || 1);
    setDonationData(donations);
    return data;
  };

  useEffect(() => {
    fetchAppeal();

    if (msgStatus === 'success') {
      toast.success('Thankyou! You have successfully donated.', {
        autoClose: 10000,
      });
      navigate(`/appeal/${appealId}`, { replace: true });
    } else if (msgStatus === 'error') {
      toast.error('Unable to Donate at the moment. Contact admin please', {
        autoClose: 10000,
      });
      navigate(`/appeal/${appealId}`, { replace: true });
    }
  }, [msgStatus]);

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

  function handleClick() {
    navigate('/appeal_about#target');
  }
  return (
    <>
      <HeaderAppeal
        appealId={appealId}
        category={category?.name}
        title={title}
      />
      {/* <Header /> */}
      <main>
        <section class="w-full h-auto pb-16 px-5 bg-owhite relative">
          <FixedNavigator
            appealRefs={appealRefs}
            handleClick={handleClick}
            appealId={appealId}
            raisedAmount={raised_amount}
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
                    {/* <img
                      class=""
                      src="./Icons/loader-large.svg"
                      alt="loader-large"
                    /> */}
                  </div>
                </div>
                <div class="w-full h-auto flex justify-between mt-8">
                  <p class="text-mont text-[10px] text-l2black font-medium flex items-center gap-1">
                    by <img src="/Icons/icon_user_circle_gray.svg" className='w-4'></img>{' '}
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
                  onClick={() => setshowDonateModal(true)}
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
              <div class="w-full h-auto px-6 py-4 mt-2" ref={appealRefs[0]}>
                <h2 class="text-mont text-lg text-lblack font-bold">Story</h2>
                <p class="text-mont text-xs text-l2black mt-4">{story}</p>
                {/* <button class="text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2 mt-4">
                  START FUNDRAISING
                </button> */}
              </div>
              <div class="w-full h-1 bg-owhite my-2"></div>
              <div class="w-full h-auto px-6 py-4 mt-2" ref={appealRefs[1]}>
                <h2 class="text-mont text-lg text-lblack font-bold">About</h2>
                <p class="text-mont text-xs text-l2black mt-4">{description}</p>
              </div>
              <div class="w-full h-1 bg-owhite my-2"></div>
              <div class="w-full h-auto px-6 py-4 mt-2" ref={appealRefs[2]}>
                <h2 class="text-mont text-lg text-lblack font-bold">Summary</h2>
                <div class="w-full h-auto p-6 border border-lgray rounded-lg mt-4">
                  <div class="w-full h-auto flex lg:flex-row gap-4 flex-col justify-between">
                    <div class="lg:w-1/2 w-full h-auto">
                      <span class="text-mont text-sm text-lblack">
                        Total raised
                      </span>
                      <h3 class="text-mont text-xl text-lblack font-semibold">
                        {currencyFormatter(raised_amount)}{' '}
                        {/* <span class="text-base">+ £523 Gift Ad</span> */}
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
                  <button class="lg:w-1/3 w-full h-auto px-8 py-4 rounded-md bg-sblue hover:bg-nblue text-mont text-white text-xs font-bold">
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
                    by <img src="/Icons/icon_user_circle_gray.svg" className='w-4'></img>{' '}
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
                  class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green hover:bg-dgreen hover:text-white rounded-md mt-2"
                  onClick={() => setshowDonateModal(true)}
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
              <div class="w-full h-auto px-6 py-4 bg-white rounded-2xl mt-6">
                <div class="w-full h-auto py-4 flex justify-between border-b-2 border-[#e6e6e6]">
                  <h3 class="text-mont text-lblack text-base font-bold">
                    Recent donors
                  </h3>
                  <p class="text-mont text-lblack text-base font-medium">
                    {donationData.length}
                  </p>
                </div>
                {donationData.slice(0, !showMore ? 3 : donationData.length).map((donation, index) => (
                  <div class="w-full h-auto py-4">
                    <div class={`w-full h-auto flex items-center gap-2 ${(showMore && index == donationData.length - 1) || (!showMore && index == 2) && 'opacity-70'}`}>
                      <img src="/Icons/icon_user_circle_blue.svg"></img>
                      <div class="w-full h-auto flex justify-between">
                        <p class="text-mont text-nblue text-sm font-semibold">
                          {donation.user.first_name +
                            ' ' +
                            donation.user.last_name}
                        </p>
                        <p class="text-mont text-lgray text-xs font-medium">
                          <i class="mr-1 fa-regular fa-clock"></i>
                          {Math.abs(
                            dayjs(donation.created_at).diff(dayjs(), 'day')
                          )}{' '}
                          days
                        </p>
                      </div>
                    </div>
                    
                      <div class="w-full h-auto ml-6 mt-2">
                        <p class="text-mont text-dgray text-xs">{''}</p>
                        <p class={`text-mont text-sm text-blue font-semibold ${(showMore && index == donationData.length - 1) || (!showMore && index == 2) && 'opacity-30'}`}>
                          £{donation.amount}{' '}
                          <span class="text-mont text-xs text-blue font-medium">
                            {/* + £0 Gift Aid */}
                          </span>
                        </p>
                      </div>
                  </div>
                ))}

                
                  <button
                    class="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6 cursor-pointer"
                    onClick={() => setshowMore(current => !current)}
                  >
                    {showMore ? 'Show less' : 'Show more'}
                  </button>
                
              </div>
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
            <AppealSlider appeals={recentAppeals} />
          </div>
        </section>
      </main>

      <div className="invisible">
        <AppealFooter active="about" />
      </div>
      {showDonateModal ? (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          appealId={appealId}
          quick={false}
        />
      ) : null}
      <Footer />
      {showShare ? (
        <AppealShare showModal={showShare} setshowModal={setshowShare} />
      ) : null}
    </>
  );
}

export default AppealAbout;
