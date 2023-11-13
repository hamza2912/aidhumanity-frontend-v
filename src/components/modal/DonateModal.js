import './modal.css';
import React from 'react';
import donationService from '../../services/donations';
import { WEB_URL } from '../../services/config';
import { useEffect, useState } from 'react';
import { getDonationTag, subsDuration } from '../../constants';
import AppealService from '../../services/appeals';
import { setCart, setUpsellAppeals } from '../../redux/auth/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../common/Image';
import ButtonLoader from '../common/ButtonLoader';
import { setSummarySidebar } from '../../redux/common/CommonSlice';
import CartService from '../../services/cart';

const DonateModal = ({
  setshowModal,
  appealId,
  campaignId,
  subscriptionInterval,
  quick = true,
}) => {
  const [amount, setamount] = React.useState('30');
  const [loading, setLoading] = React.useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [active, setactive] = useState('1');
  const {
    upSellAppeals = [],
    quickDonateAppeal,
    user,
  } = useSelector(state => state.session);

  const dispatch = useDispatch();

  const fetchUpSellAppeals = async () => {
    try {
      const { appeals } = await AppealService.getUpsellAppeals();
      dispatch(setUpsellAppeals(appeals));
    } catch (err) {}
  };

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 640;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  // const handleSubmit = async () => {
  //   try {
  //     setLoading(true);
  //     let checkoutUrl;
  //     if (campaignId) {
  //       const { checkout_url } = await donationService.payAmount(
  //         amount * 100,
  //         `${WEB_URL}/campaign/${campaignId}?status=success`,
  //         `${WEB_URL}/campaign/${campaignId}?status=error`,
  //         appealId,
  //         campaignId
  //       );
  //       checkoutUrl = checkout_url;
  //     } else {
  //       const { checkout_url } = await donationService.payAmount(
  //         amount * 100,
  //         `${WEB_URL}/appeal/${appealId}?status=success`,
  //         `${WEB_URL}/appeal/${appealId}?status=error`,
  //         appealId
  //       );
  //       checkoutUrl = checkout_url;
  //     }
  //     setshowModal(false);
  //     window.location.replace(checkoutUrl);
  //   } catch (e) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleUpsellDonateClick = async () => {
    try {
      setLoading(true);

      const payload = {
        cart: {
          donations_attributes: {
            id: null,
            appeal_id: quickDonateAppeal.id,
            campaign_id: null,
            amount_cents: Number(amount) * 100,
          },
        },
      };
      const response = await CartService.updateCart(payload, !!user);
      dispatch(setCart(response));
      dispatch(setSummarySidebar(true));
      setshowModal(false);
    } catch (error) {
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    fetchUpSellAppeals();
  }, []);

  return (
    <>
      <div className="dimmer"></div>
      <div className="messageBox bg-f9 lg:bg-white lg:top-24 top-0 lg:h-auto h-screen lg:w-2/5 w-full sm:rounded-xl">
        <p
          className="text-sm font-semibold pl-6 py-6 flex items-center gap-2 lg bg-white rounded-2xl	"
          onClick={() => {
            setshowModal(false);
          }}
        >
          <img className="w-3 h-3" src="/Icons/angle-left.svg" alt="" />
          DONATE
        </p>
        <div className="w-full h-auto border-b-2 border-gray-200 p-6 lg:flex justify-between">
          <h1 className="text-lg text-mont text-black-50 font-bold">
            Donate Now
          </h1>
          <button
            onClick={() => setshowModal(false)}
            className="text-lg text-gray cursor-pointer"
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        {!quick ? (
          <div className="w-full h-auto bg-l2gray px-6 pt-6">
            <div className="w-full h-auto grid lg:grid-cols-4 grid-cols-2 gap-2">
              {upSellAppeals?.map(appeal => (
                <div
                  onClick={() => {
                    setactive(appeal.id);
                  }}
                  className={
                    active === appeal.id
                      ? 'rounded-2xl cursor-pointer border-2 border-blue'
                      : 'rounded-2xl cursor-pointer'
                  }
                  key={`quick-donation-${appeal.id}`}
                >
                  <div className="w-full rounded-t-xl relative">
                    <Image
                      classNames="w-full rounded-t-xl object-cover h-80px"
                      url={appeal.cover_image}
                      alt={appeal.title}
                      type="appeals"
                      logoClass="w-20px h-20px"
                    />
                    <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs absolute left-0 right-0 mx-auto -bottom-2">
                      <span className="cursor-pointer font-bold ">
                        {getDonationTag(appeal.appeal_tag)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white px-2 pt-4 pb-1 text-start items-center rounded-b-2xl">
                    <h3 className="text-xs text-mont text-black-50 font-bold h-10 border-b-2 border-gray-200">
                      {appeal.title}
                    </h3>
                    <ButtonLoader className="text-blue mx-auto  text-xs font-bold text-mont p-2 rounded-lg">
                      DONATE
                    </ButtonLoader>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-auto mt-4">
              <hr className="solid" />
            </div>
            <div className="w-full h-auto p-4 text-center">
              <h1 className="text-mont text-base text-gray-600">
                Donate to{' '}
                <span className="font-bold">Support an Orphaned Child</span>
              </h1>
              <p className="mt-2 text-gray-600 text-mont text-xs">
                fundraised by{' '}
                <span className="text-nblue font-semibold">
                  <i className="fa-regular fa-circle-user"></i> Ron Hill
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full h-auto bg-l2gray px-2 py-6 flex justify-between">
            <button className="w-1/3 h-auto text-black-50 text-mont text-xs font-medium flex lg:flex-row flex-col gap-2 justify-around px-6 py-4 items-center">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="w-5 h-5"
              />
              <img
                src="./Icons/badge_sadhaka-jaraiyah.svg"
                alt="badge_sadhaka-jaraiyah"
              />
              Sadhakah
            </button>
            <button className="w-1/3 h-auto text-black-50 text-mont text-xs font-medium flex lg:flex-row flex-col gap-2 justify-around px-3 py-4 items-center">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="w-5 h-5"
              />
              <img
                src="./Icons/badge_sadhaka-jaraiyah.svg"
                alt="badge_sadhaka-jaraiyah"
              />
              Sadhakah Jaraiya
            </button>
            <button className="w-1/3 h-auto text-black-50 text-mont text-xs font-medium flex lg:flex-row flex-col gap-2 justify-around px-8 py-4 items-center">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="w-5 h-5"
              />
              <img src="./Icons/badge_zakat.svg" alt="badge_zakar" />
              Zakat
            </button>
          </div>
        )}
        <div className="w-full h-auto px-6 py-3">
          <h1 className="text-black-50 text-3xl text-mont font-bold text-center">
            Donation amount
          </h1>
          <div className="w-full h-auto mt-4 flex rounded-lg border border-lgray bg-white">
            <div
              onClick={() => {
                setamount('10');
              }}
              className={
                amount === '10'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£10</p>
            </div>
            <div
              onClick={() => {
                setamount('20');
              }}
              className={
                amount === '20'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£20</p>
            </div>
            <div
              onClick={() => {
                setamount('30');
              }}
              className={
                amount === '30'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£30</p>
            </div>
            <div
              onClick={() => {
                setamount('50');
              }}
              className={
                amount === '50'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£50</p>
            </div>
            <div
              onClick={() => {
                setamount('100');
              }}
              className={
                amount === '100'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£100</p>
            </div>
          </div>
          {subscriptionInterval && !campaignId && (
            <button className="w-full mt-4 px-8 h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">
              {subsDuration[subscriptionInterval]} <br /> Payment
            </button>
          )}

          <div className="w-full h-auto mt-4 flex justify-between px-2 rounded-lg border border-lgray bg-white">
            <div className="w-3/4 h-auto p-3 flex gap-4 items-center">
              <p className="text-xl text-mont font-medium text-dgray">£</p>
              {/* <h1 className="text-blue text-mont lg:text-5xl text-3xl font-bold"> */}
              <input
                name="amount"
                value={amount}
                type="number"
                className="text-blue text-mont lg:text-5xl text-3xl font-bold w-full focus:outline-none"
                onChange={e => setamount(e.target.value)}
              />
              {/* </h1> */}
            </div>
            <div className="relative flex">
              <div className="absolute -left-4 top-1/4 bg-lgray h-8 w-px"></div>
              <select className="w-24 h-auto p-3 flex justify-around items-center text-xl text-mont font-medium text-dgray focus:outline-none">
                <i className="fa-solid fa-angle-down"></i>
                <option value="">GBP</option>
              </select>
            </div>
          </div>
          <ButtonLoader
            className="text-xs text-mont text-black-50 hover:text-white font-bold w-full h-auto bg-green hover:bg-dgreen mt-4 px-32 py-4 rounded-lg text-center"
            onClick={handleUpsellDonateClick}
            loading={loading}
          >
            <p>{loading ? 'SUBMITTING...' : 'CONTINUE'}</p>
          </ButtonLoader>
        </div>
      </div>
    </>
  );
};

export default DonateModal;
