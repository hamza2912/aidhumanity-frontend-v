import React, { useEffect, useMemo } from 'react';
import Footer from '../../components/footer';
import AppealFooter from '../../components/appeal_footer';
import AppealShare from '../../components/modal/appeal_share';
import Appeal_slider from '../../components/appeal_slider';
import HeaderAppeal from '../../components/header_appeal';
// import Header from '../../components/header';
import appealService from '../../services/appeals';
import dayjs from 'dayjs';
import donationService from '../../services/donations';
import CircularProgressBar from './circular_progress_bar';
import DonateModal from '../../components/modal/donate_modal';
import { APPEAL_ID, SERVER_URL } from '../../services/config';
import { useLocation, useHistory } from 'react-router-dom';
import Thankyou from '../Other_pages/thankyou';
import { toast } from 'react-toastify';
import { currencyFormatter } from '../../utils';

function AppealAbout() {
  const [showShare, setshowShare] = React.useState(false);
  const [appealData, setAppealData] = React.useState({});
  const [donationData, setDonationData] = React.useState([]);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMore, setshowMore] = React.useState(false);
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const msgStatus = searchParams.get('status');

  const fetchAppeal = async () => {
    const data = await appealService.getAppeal(APPEAL_ID);
    setAppealData(data);
    const donations = await donationService.getDonations(APPEAL_ID);
    setDonationData(donations);
    return data;
  };

  useEffect(() => {
    const appeal = fetchAppeal();

    if (msgStatus === 'success') {
      toast.success('Thankyou! You have successfully donated.', {
        autoClose: 10000,
      });
      history.replace('/');
    } else if (msgStatus === 'error') {
      toast.error('Unable to Donate at the moment. Contact admin please', {
        autoClose: 10000,
      });
      history.replace('/');
    }
  }, [msgStatus]);

  const AppealTags = {
    SADHAKA: 'sadhaka',
    ZAKATH: 'zakath',
    SADHAKA_JARIYA: 'sadhaka_jariya',
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
  } = appealData;

  const getDonationSrc = useMemo(() => {
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
  }, [appeal_tag, AppealTags]);

  return (
    <>
      <HeaderAppeal />
      {/* <Header /> */}
      <main>
        <section class="w-full h-auto pb-16 bg-owhite relative">
          <div class="w-full h-auto container mx-auto lg:px-16 px-5 flex lg:flex-row flex-col gap-8">
            <div class="lg:w-2/3 w-full h-auto bg-white rounded-2xl -mt-24">
              <div class="w-full h-auto lg:hidden px-2 py-4 bg-white rounded-2xl">
                <div class="w-full h-auto flex justify-between">
                  <div class="w-1/2 h-auto">
                    <h2 class="text-mont lg:text-3xl text-2xl text-lblack font-bold">
                      {currencyFormatter(targeted_amount)}
                    </h2>
                    <p class="text-mont text-xs font-medium text-gray">
                      raised of{' '}
                      <span class="text-blue font-semibold">
                        {currencyFormatter(raised_amount)}
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
                        fontSize: '1rem',
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
                  <p class="text-mont text-xs text-l2black font-medium">
                    by <i class="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
                    {donationData.length} supporters
                  </p>
                  <p class="text-mont text-xs text-orange font-semibold">
                    <i class="mr-1 fa-regular fa-clock"></i> Ends in{' '}
                    {dayjs(end_at).diff(dayjs(), 'day')} days
                  </p>
                </div>
                <button class="w-full h-auto p-4 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2">
                  DONATE
                </button>
                <button
                  onClick={() => setshowShare(true)}
                  class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md mt-2"
                >
                  <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                </button>
              </div>
              <div class="w-full h-auto flex justify-between lg:px-6 px-2 py-4">
                <div class="w-3/4 h-auto">
                  <span class="text-mont text-xs text-lgray font-medium">
                    {category?.name}
                  </span>
                  <h1 class="text-mont lg:text-4xl text-3xl text-lblack font-bold mt-2">
                    {title}
                  </h1>
                  {/* <p class="text-mont text-l2black text-xs mt-2">
                    fundraised by{' '}
                    <span class="ml-2 text-nblue font-semibold">
                      <i class="fa-regular fa-circle-user text-sm"></i> Ron Hill
                    </span>
                  </p> */}
                </div>
                <div class="w-1/4 h-auto flex justify-end lg:items-center items-end">
                  <img src={getDonationSrc} alt="donation_type" />
                </div>
              </div>
              <img
                class="w-full h-auto"
                src={SERVER_URL + cover_image}
                alt="Hand-pump"
              />
              <div class="w-full h-auto px-6 py-4 mt-2">
                <h2 class="text-mont text-lg text-lblack font-bold">Story</h2>
                <p class="text-mont text-xs text-l2black mt-4">{story}</p>
                {/* <button class="text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2 mt-4">
                  START FUNDRAISING
                </button> */}
              </div>
              <div class="w-full h-1 bg-owhite my-2"></div>
              <div class="w-full h-auto px-6 py-4 mt-2">
                <h2 class="text-mont text-lg text-lblack font-bold">About</h2>
                <p class="text-mont text-xs text-l2black mt-4">{description}</p>
              </div>
              <div class="w-full h-1 bg-owhite my-2"></div>
              <div class="w-full h-auto px-6 py-4 mt-2">
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
                {/* <h2 class="text-mont text-lg text-lblack font-bold">Share</h2>
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
                </div> */}
              </div>
            </div>
            <div class="lg:w-1/3 w-full h-auto lg:-mt-24 z-10">
              <div class="w-full h-auto hidden lg:flex flex-col px-6 py-4 bg-white rounded-2xl">
                <div class="w-full h-auto flex">
                  <div class="w-1/3 h-auto">
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
                </div>
                <div class="w-full h-auto -mt-2">
                  <div class="w-1/5 mx-auto">
                    {targeted_amount && (
                      <CircularProgressBar
                        percentage={Math.round(
                          (raised_amount / targeted_amount) * 100
                        )}
                        style={{
                          width: '4rem',
                          height: '4rem',
                          fontSize: '1.15rem',
                        }}
                      />
                    )}
                  </div>
                </div>
                <div class="w-full h-auto flex justify-between">
                  <p class="text-mont text-xs text-l2black font-medium">
                    by <i class="mx-1 fa-regular fa-circle-user text-sm"></i>{' '}
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
                  class="w-full h-auto p-2 text-center text-mont text-xs text-gray font-bold bg-white border border-lgray rounded-md mt-2"
                >
                  <i class="mr-1 fa-sharp fa-solid fa-share-nodes"></i> SHARE
                </button>
              </div>
              <div
                class={`w-full h-auto px-6 py-4 bg-white rounded-2xl mt-6 ${
                  showMore ? 'donar-scroll' : ''
                }`}
              >
                <div class="w-full h-auto py-4 flex justify-between border-b-2 border-lgray">
                  <h3 class="text-mont text-lblack text-base font-bold">
                    Recent donors
                  </h3>
                  <p class="text-mont text-lblack text-base font-medium">
                    {donationData.length}
                  </p>
                </div>
                {donationData.map(donation => (
                  <div class="w-full h-auto py-4">
                    <div class="w-full h-auto flex">
                      <i class="mr-1 fa-regular fa-circle-user text-lg"></i>
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
                      <p class="text-mont text-sm text-blue font-semibold">
                        £{donation.amount}{' '}
                        <span class="text-mont text-xs text-blue font-medium">
                          {/* + £0 Gift Aid */}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}

                {!showMore && (
                  <button
                    class="w-full h-auto text-center text-mont text-nblue text-xs font-medium mt-6 cursor-pointer"
                    onClick={() => setshowMore(!showMore)}
                  >
                    Show more
                  </button>
                )}
              </div>
            </div>
          </div>
          <img
            className="absolute w-96 right-0 lg:top-1/4 top-10 z-0 hidden lg:block"
            src="images/vectors/logo_aid-humanity-icon.svg"
            alt="Aid-humanity background logo"
          />
        </section>
        {/* <section class="w-full h-auto bg-owhite z-10">
          <div class="w-full h-auto container mx-auto lg:px-16 px-4 py-12">
            <div class="w-full h-auto text-center mb-12">
              <h1 class="text-3xl text-mont font-bold">Recent Appeals</h1>
            </div>
            <Appeal_slider />
          </div>
        </section> */}
      </main>

      <div className="invisible">
        <AppealFooter active="about" />
      </div>
      {showDonateModal ? (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
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
