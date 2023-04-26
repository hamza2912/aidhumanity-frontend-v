import './modal.css';
import React from 'react';
import donationService from '../../services/donations';
import { WEB_URL } from '../../services/config';
import { useEffect, useState } from 'react';

function DonateModal({ showModal, setshowModal, quick, appealId }) {
  const [active, setactive] = React.useState('1');
  const [amount, setamount] = React.useState('30');
  const [loading, setLoading] = React.useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  {
    /* Performs similarly to componentDidMount in classes */
  }
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { checkout_url } = await donationService.payAmount(
        amount * 100,
        `${WEB_URL}/appeal/${appealId}?status=success`,
        `${WEB_URL}/appeal/${appealId}?status=error`,
        appealId
      );
      setshowModal(false);
      window.location.replace(checkout_url);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="modal">
      <div className="dimmer"></div>
      <div class="messageBox lg:top-24 top-0 lg:h-auto h-screen lg:w-2/5 w-full sm:rounded-xl bg-white">
        <p
          className="text-sm font-semibold pl-6 py-6 flex items-center gap-2 lg:hidden bg-white"
          onClick={() => {
            setshowModal(false);
          }}
        >
          <img className="w-3 h-3" src="/Icons/angle-left.svg" alt="" />
          DONATE
        </p>
        <div class="w-full h-auto border-b-2 border-gray-200 p-6 lg:flex justify-between hidden">
          <h1 class="text-lg text-mont text-black-50 font-bold">Donate Now</h1>
          <button
            onClick={() => setshowModal(false)}
            class="text-lg text-gray cursor-pointer"
          >
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        {/* {!quick ? (
          <div class="w-full h-auto bg-l2gray px-6 pt-6">
            <div class="w-full h-auto grid lg:grid-cols-4 grid-cols-2 gap-2">
              <div
                onClick={() => {
                  setactive('1');
                }}
                className={
                  active == '1'
                    ? 'rounded-2xl cursor-pointer border-2 border-blue'
                    : 'rounded-2xl cursor-pointer'
                }
              >
                <div className="w-full rounded-t-xl relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="./images/vertical Pakistan Floods 2022.png"
                    alt="Pakistan Floods 2022"
                  />
                  <img
                    class="absolute left-0 right-0 mx-auto -bottom-2"
                    src="./Icons/badge_zakat.svg"
                    alt="badge_zakat"
                  />
                </div>
                <div class="flex flex-col bg-white px-2 pt-4 pb-1 text-start items-center rounded-b-2xl">
                  <h3 class="text-xs text-mont text-black-50 font-bold h-10 border-b-2 border-gray-200">
                    Pakistan Floods
                  </h3>
                  <button class="text-blue mx-auto  text-xs font-bold text-mont p-2 rounded-lg">
                    DONATE
                  </button>
                </div>
              </div>
              <div
                onClick={() => {
                  setactive('2');
                }}
                className={
                  active == '2'
                    ? 'rounded-2xl cursor-pointer border-2 border-blue'
                    : 'rounded-2xl cursor-pointer'
                }
              >
                <div className="w-full rounded-t-xl relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="./images/vertical maxresdefault.png"
                    alt="maxresdefault"
                  />
                  <img
                    class="absolute left-0 right-0 mx-auto -bottom-2"
                    src="./Icons/badge_zakat.svg"
                    alt="badge_zakat"
                  />
                </div>
                <div class="flex flex-col bg-white px-2 pt-4 pb-1 text-start items-center rounded-b-2xl">
                  <h3 class="text-xs text-mont text-black-50 font-bold h-10 border-b-2 border-gray-200">
                    Support an Orphaned Child
                  </h3>
                  <button class="text-blue mx-auto  text-xs font-bold text-mont p-2 rounded-lg">
                    DONATE
                  </button>
                </div>
              </div>
              <div
                onClick={() => {
                  setactive('3');
                }}
                className={
                  active == '3'
                    ? 'rounded-2xl cursor-pointer hidden lg:block border-2 border-blue'
                    : 'rounded-2xl cursor-pointer hidden lg:block'
                }
              >
                <div className="w-full rounded-t-xl relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="./images/vertical 36404f884e19.png"
                    alt="36404f884e19"
                  />
                  <img
                    class="absolute left-0 right-0 mx-auto -bottom-2"
                    src="./Icons/badge_zakat.svg"
                    alt="badge_zakat"
                  />
                </div>
                <div class="flex flex-col bg-white px-2 pt-4 pb-1 text-start items-center rounded-b-2xl">
                  <h3 class="text-xs text-mont text-black-50 font-bold h-10 border-b-2 border-gray-200">
                    Water Hands Pumps
                  </h3>
                  <button class="text-blue mx-auto  text-xs font-bold text-mont p-2 rounded-lg">
                    DONATE
                  </button>
                </div>
              </div>
              <div
                onClick={() => {
                  setactive('4');
                }}
                className={
                  active == '4'
                    ? 'rounded-2xl cursor-pointer hidden lg:block border-2 border-blue'
                    : 'rounded-2xl cursor-pointer hidden lg:block'
                }
              >
                <div className="w-full rounded-t-xl relative">
                  <img
                    className="w-full rounded-t-xl"
                    src="./images/vertical rf1110721-somali-refugee-family-in-yemen-1200x800-images.png"
                    alt="somali-refugee-family-in-yemen"
                  />
                  <img
                    class="absolute left-0 right-0 mx-auto -bottom-2"
                    src="./Icons/badge_zakat.svg"
                    alt="badge_zakat"
                  />
                </div>
                <div class="flex flex-col bg-white px-2 pt-4 pb-1 text-start items-center rounded-b-2xl">
                  <h3 class="text-xs text-mont text-black-50 font-bold h-10 border-b-2 border-gray-200">
                    Yemen Emergency
                  </h3>
                  <button class="text-blue mx-auto  text-xs font-bold text-mont p-2 rounded-lg">
                    DONATE
                  </button>
                </div>
              </div>
            </div>
            <div class="w-full h-auto mt-4">
              <hr class="solid" />
            </div>
            <div class="w-full h-auto p-4 text-center">
              <h1 class="text-mont text-base text-gray-600">
                Donate to{' '}
                <span class="font-bold">Support an Orphaned Child</span>
              </h1>
              <p class="mt-2 text-gray-600 text-mont text-xs">
                fundraised by{' '}
                <span class="text-nblue font-semibold">
                  <i class="fa-regular fa-circle-user"></i> Ron Hill
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div class="w-full h-auto bg-l2gray px-2 py-6 flex justify-between">
            <button class="w-1/3 h-auto text-black-50 text-mont text-xs font-medium flex lg:flex-row flex-col gap-2 justify-around px-6 py-4 items-center">
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
            <button class="w-1/3 h-auto text-black-50 text-mont text-xs font-medium flex lg:flex-row flex-col gap-2 justify-around px-3 py-4 items-center">
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
            <button class="w-1/3 h-auto text-black-50 text-mont text-xs font-medium flex lg:flex-row flex-col gap-2 justify-around px-8 py-4 items-center">
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
        )} */}
        <div class="w-full h-auto px-6 py-3">
          <h1 class="text-black-50 text-3xl text-mont font-bold text-center">
            Donation amount
          </h1>
          <div class="w-full h-auto mt-4 flex rounded-lg border border-lgray bg-white">
            <div
              onClick={() => {
                setamount('10');
              }}
              className={
                amount == '10'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p class="text-mont text-center text-xs font-medium">£10</p>
            </div>
            <div
              onClick={() => {
                setamount('20');
              }}
              className={
                amount == '20'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p class="text-mont text-center text-xs font-medium">£20</p>
            </div>
            <div
              onClick={() => {
                setamount('30');
              }}
              className={
                amount == '30'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p class="text-mont text-center text-xs font-medium">£30</p>
            </div>
            <div
              onClick={() => {
                setamount('50');
              }}
              className={
                amount == '50'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p class="text-mont text-center text-xs font-medium">£50</p>
            </div>
            <div
              onClick={() => {
                setamount('100');
              }}
              className={
                amount == '100'
                  ? 'w-1/5 cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-lgray'
                  : 'w-1/5 text-black-50 cursor-pointer h-auto px-6 py-4 border-lgray'
              }
            >
              <p class="text-mont text-center text-xs font-medium">£100</p>
            </div>
          </div>
          <div class="w-full h-auto mt-4 flex justify-between px-2 rounded-lg border border-lgray bg-white">
            <div class="w-3/4 h-auto p-3 flex gap-4 items-center">
              <p class="text-xl text-mont font-medium text-dgray">£</p>
              {/* <h1 class="text-blue text-mont lg:text-5xl text-3xl font-bold"> */}
              <input
                name="amount"
                value={amount}
                type="number"
                className="text-blue text-mont lg:text-5xl text-3xl font-bold w-full focus:outline-none"
                onChange={e => setamount(e.target.value)}
              />
              {/* </h1> */}
            </div>
            <select class="w-24 h-auto p-3 flex justify-around items-center text-xl text-mont font-medium text-dgray focus:outline-none">
              <i class="fa-solid fa-angle-down"></i>
              <option value="">GBP</option>
            </select>
          </div>
          <button class="text-xs text-mont text-black-50 hover:text-white font-bold w-full h-auto bg-green hover:bg-dgreen mt-4 px-32 py-4 rounded-lg text-center" onClick={handleSubmit}>
            <p>
              {loading ? 'SUBMITTING...' : 'CONTINUE'}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonateModal;
