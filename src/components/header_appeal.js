import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Appeal_modal from './modal/appeal_modal';
import DonateModal from './modal/donate_modal';
import Login from './modal/login';
import { useHistory } from 'react-router-dom';
import appealService from "../services/appeals"

function Header_appeal({ appealId }) {
  const [showAppealModal, setshowAppealModal] = React.useState(false);
  const [appealData, setAppealData] = React.useState({});
  const [active, setactive] = React.useState('');
  const [quick, setquick] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMenu, setshowMenu] = React.useState(false);
  const [showlogin, setshowlogin] = React.useState(false);
  let history = useHistory();
  
  const fetchAppeal = async () => {
    const data = await appealService.getAppeal(appealId || 1);
    setAppealData(data);
    return data;
  };
  useEffect(() => {
    fetchAppeal();
  }, [appealId])
  const {
    title,
    category
  }=appealData
  
  if (!isMobile) {
    return (
      <header
        class="w-full h-auto lg:flex flex-col hidden bg-nblue top-0 left-0 py-3"
        onMouseLeave={() => {
          setshowAppealModal(false);
        }}
      >
        <div className='border-b border-lgray'>
          <nav class="w-full h-auto px-4 container mx-auto ">
            <div class="w-full h-auto py-6 flex flex-row justify-between items-center">
              <div class="w-1/5 h-auto">
                <a href="/">
                  <img
                    className="w-48 h-auto"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="w-px h-6 bg-lgray mx-8"></div>
              <div class="whitespace-nowrap text-lg text-mont text-white font-medium w-1/2 h-auto flex justify-between items-center ml-2">
                <a onClick={() => history.push('/story')}>Our Story</a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('appeal');
                  }}
                  class="font-bold invisible"
                >
                  Appeals
                </a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('emergency');
                  }}
                  class="font-bold invisible"
                >
                  Emergency
                </a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('zakat');
                  }}
                  class="font-bold invisible"
                >
                  Zakat
                </a>
                <a
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(false);
                  }}
                  class="invisible"
                >
                  Get Involved
                </a>
              </div>
              <div class="w-2/3 h-auto gap-8 flex justify-end items-center">
                <a
                  class="invisible text-sm text-mont text-white font-semibold"
                  onClick={() => setshowlogin(!showlogin)}
                >
                  <i class="fa-regular fa-circle-user text-lg"></i> My Account
                </a>
                <a href="" class="invisible">
                  <img
                    src="/Icons/icon_package- box-white.svg"
                    alt="package-box"
                  />
                </a>
                <button
                  class="text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg px-4 py-2"
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(true);
                  }}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div class="w-full h-auto container mx-auto pt-12 pb-32 flex flex-row justify-between">
          <div class="w-1/2 h-auto lg:flex gap-2">
            <a class="text-xs font-medium text-mont text-bwhite" href="">
              Home
            </a>
            <p class="text-xs font-medium text-mont text-bwhite">
              /
            </p>
            <a
              class="text-xs font-medium text-mont text-bwhite"
              href=""
            >
              Appeals
            </a>
            <p class="text-xs font-medium text-mont text-bwhite">
              /
            </p>
            <a
              class="text-xs font-medium text-mont text-bwhite"
              href=""
            >
              {category?.name}
            </a>
            <p class="text-xs font-medium text-mont text-bwhite">
              /
            </p>
            <a
              class="text-xs font-medium text-mont text-bwhite"
              href=""
            >
              {title}
            </a>
          </div>
          <div class="w-1/2 h-auto lg:flex justify-end">
            <a class="text-base font-medium text-mont text-bwhite flex" href="">
              <img
                class="mr-2"
                src="/Icons/arrow-left-bwhite.svg"
                alt="arrow-left"
              />
              BACK TO ALL
            </a>
          </div>
        </div>
        {showAppealModal ? (
          <Appeal_modal
            showModal={showAppealModal}
            setshowModal={setshowAppealModal}
            active={active}
          />
        ) : null}
        {showDonateModal ? (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            quick={quick}
          />
        ) : null}
        {showlogin ? (
          <Login showModal={showlogin} setshowModal={setshowlogin} />
        ) : null}
      </header>
    );
  } else {
    return (
      <>
        <header class="w-full h-auto lg:hidden flex flex-col">
          <nav class="w-full h-auto bg-nblue border-b-2 border-lgray">
            <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
              <div class="w-3/4 flex flex-row gap-4 items-center px-3">
                <button
                  onClick={() => setshowMenu(true)}
                  class="text-white text-2xl focus:outline-none"
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
                <a href="/">
                  <img
                    className="w-3/4"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="h-auto flex flex-row gap-6 items-center px-5">
                <button class="text-2xl text-mont text-white">
                  <img src="/Icons/user-circle-white.svg"></img>
                </button>
                <button>
                  <img
                    src="/Icons/icon_package- box-white.svg"
                    alt="package-box"
                  />
                </button>
              </div>
            </div>
          </nav>
          <div class="w-full h-auto px-5 bg-nblue">
            <div class="w-full h-auto my-8">
              <a class="text-base text-mont text-bwhite flex" href="">
                <img
                  class="mr-2"
                  src="/Icons/arrow-left-bwhite.svg"
                  alt="arrow-left"
                />
                BACK TO ALL
              </a>
            </div>
            <div class="mt-32"></div>
          </div>
        </header>

        {showMenu ? (
          <div className="w-full bg-white h-full fixed top-0 left-0 pt-6 z-20">
            <p className="text-sm font-semibold pl-6 flex items-center gap-2">
              <img
                onClick={() => {
                  setshowMenu(false);
                }}
                className="w-3 h-3"
                src="images/icons/dashboard/angle-left.svg"
                alt=""
              />{' '}
              MENU
            </p>
            <ul className="flex flex-col mt-4 bg-gray h-full">
              <li
                className={
                  active == 'dashboard'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">Our Story</p>
                </div>
              </li>
              <li
                onClick={() => {
                  setshowAppealModal(true);
                  setactive('appeal');
                }}
                className={
                  active == 'profile'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 flex gap-2 py-5 border-b text-black justify-between">
                  <p className="text-xs font-medium">Appeals</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
              <li
                onClick={() => {
                  setshowAppealModal(!showAppealModal);
                  setactive('emergency');
                }}
                className={
                  active == 'funds'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">Emergency</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
              <li
                onClick={() => {
                  setshowAppealModal(!showAppealModal);
                  setactive('zakat');
                }}
                className={
                  active == 'security'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">Zakat</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
              <a>
                <li
                  className={
                    active == 'donation'
                      ? 'cursor-pointer border-blue'
                      : 'cursor-pointer border-white'
                  }
                >
                  <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                    <p
                      onClick={() => {
                        setshowDonateModal(true);
                        setquick(false);
                      }}
                      className="text-xs font-medium"
                    >
                      Get Involved
                    </p>
                    <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                  </div>
                </li>
              </a>
              <li
                className={
                  active == 'monthly'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">Zakat Calculator</p>
                </div>
              </li>
              <li
                className={
                  active == 'payment'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">Blog</p>
                </div>
              </li>
              <li
                className={
                  active == 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">My Account</p>
                </div>
              </li>
              <li
                className={
                  active == 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 text-black">
                  <p className="text-xs font-medium">Contact Us</p>
                </div>
              </li>
              <div className="px-6 mt-5">
                <button
                  class="w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg p-2 "
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    // setquick(true);
                  }}
                >
                  DONATE NOW
                </button>
              </div>
              <li
                className={
                  active == 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 text-black border-b">
                  <p className="text-xs font-medium">Languages</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
            </ul>
          </div>
        ) : null}

        {showAppealModal ? (
          <Appeal_modal
            showModal={showAppealModal}
            setshowModal={setshowAppealModal}
            active={active}
          />
        ) : null}
        {showDonateModal ? (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            quick={quick}
            appealId={appealId}
          />
        ) : null}
      </>
    );
  }
}

export default Header_appeal;
