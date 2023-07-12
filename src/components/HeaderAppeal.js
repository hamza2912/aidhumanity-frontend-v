import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Appeal_modal from './modal/AppealModal';
import DonateModal from './modal/DonateModal';
import Login from './modal/Login';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../services/config';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../services/auth';
import { addUser } from '../redux/auth/userSlice';
import { ReactComponent as BackIcon } from "../images/arrow-left-bwhite.svg";
import { ReactComponent as LogOutIcon } from "../images/icon_logout_white.svg";
import { ReactComponent as User } from "../images/user-circle-white.svg";

const HeaderAppeal = ({
  appealId,
  category,
  title,
  subscriptionInterval = null,
  overflowHidden,
  overflowVisible
}) => {
  const [showAppealModal, setshowAppealModal] = React.useState(false);
  const [active, setactive] = React.useState('');
  const [quick, setquick] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMenu, setshowMenu] = React.useState(false);
  const [showlogin, setshowlogin] = React.useState(false);
  const { user } = useSelector(state => state.session);
  const [isLogOutHovering, setIsLogOutHovering] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      setshowlogin(true);
    }
    if (!user && window.innerWidth <= 768) {
      overflowHidden();
    }
  };

  const handleLogOutMouseEnter = () => {
    setIsLogOutHovering(true);
  };

  const handleLogOutMouseLeave = () => {
    setIsLogOutHovering(false);
  };

  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await authService.signOut();
      dispatch(addUser(null));
    } catch (e) {}
  };

  const displayMenu = () => {
    setshowMenu(true);
    overflowHidden();
  };

  const hideMenu = () => {
    setshowMenu(false);
    overflowVisible();
  };

  if (!isMobile) {
    return (
      <header
        class="w-full h-auto lg:flex flex-col hidden bg-nblue top-0 left-0 py-3"
        onMouseLeave={() => {
          setshowAppealModal(false);
        }}
      >
        <div className="border-b border-opacity-25 fixed top-0 left-0 right-0 z-20 bg-nblue">
          <nav class="w-full h-auto container mx-auto">
            <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
              <div class="w-1/5 h-auto">
                <a href="/">
                  <img
                    className="w-48 h-auto"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="w-px h-8 bg-platinum bg-opacity-50 mx-8"></div>
              <div class="whitespace-nowrap text-lg text-mont text-white font-semibold w-1/2 h-auto flex gap-8 justify-between items-center ml-2">
                <a onClick={() => navigate('/story')}>Our Story</a>
                <a href="/appeals"
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('appeal');
                  }}
                  class="font-semibold"
                >
                  Appeals
                </a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('emergency');
                  }}
                  class="font-semibold"
                >
                  Emergency
                </a>
                <a href="/zakat"
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('zakat');
                  }}
                  class="font-semibold"
                >
                  Zakat
                </a>
                <a hre="/contact"
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(false);
                  }}
                  class="font-semibold"
                >
                  Get Involved
                </a>
              </div>
              <div class="w-2/3 h-auto gap-8 flex justify-end items-center">
                {/* {!user && ( */}
                <a
                  class="hover-button text-sm text-mont text-white font-semibold flex items-center gap-2"
                  onClick={handleClick}
                >
                  {user?.avatar_link ?
                    <img
                      src={SERVER_URL + user.avatar_link}
                      alt="thumbnail"
                      className="w-6 h-full rounded-full"
                    /> : < User className='icon w-5' />
                  }
                  <span className='hover:text-sblue'>My Account</span>
                </a>
                {/* )} */}
                <a href="" className="hidden notification">
                  <img
                    src="/Icons/icon_package-box-white.svg"
                    alt="package-box"
                  />
                </a>
                <button
                  class="text-dblue text-center font-semibold text-sm border-sblue hover:bg-sblue hover:text-white border-2 rounded-lg px-4 py-2"
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(true);
                  }}
                >
                  DONATE NOW
                </button>
                {user && (
                  <button
                    className="hover-button text-sm text-mont text-white hover:text-sblue font-semibold flex items-center gap-2 whitespace-nowrap"
                    onClick={handleLogOut}
                    onMouseEnter={handleLogOutMouseEnter}
                    onMouseLeave={handleLogOutMouseLeave}
                  >
                    <LogOutIcon className="icon mr-1 w-4" />
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
        <div class="w-full h-auto container mx-auto pt-8 pb-28 flex flex-row justify-between mt-20">
          <div class="w-1/2 h-auto lg:flex gap-2">
            <a
              class="text-xs font-medium text-mont text-bwhite hover:text-sblue"
              href=""
              onClick={() => navigate('/')}
            >
              Home
            </a>
            <p class="text-xs font-medium text-mont text-bwhite">/</p>
            <a
              class="text-xs font-medium text-mont text-bwhite hover:text-sblue"
              href=""
              onClick={() => navigate('/appeals')}
            >
              Appeals
            </a>
            <p class="text-xs font-medium text-mont text-bwhite">/</p>
            <a class="text-xs font-medium text-mont text-bwhite hover:text-sblue" href="">
              {category}
            </a>
            <p class="text-xs font-medium text-mont text-bwhite">/</p>
            <a class="text-xs font-medium text-mont text-bwhite hover:text-sblue" href="">
              {title}
            </a>
          </div>
          <div class="w-1/2 h-auto lg:flex justify-end">
            <a
              class="hover-button text-base font-medium text-mont text-bwhite hover:text-sblue flex items-center"
              href=""
              onClick={() => navigate('/appeals')}
            >
              <BackIcon className="icon w-4 h-4 mr-2" />
              <span>BACK TO ALL</span>
            </a>
          </div>
        </div>
        {showAppealModal && (
          <Appeal_modal
            showModal={showAppealModal}
            setshowModal={setshowAppealModal}
            active={active}
          />
        )}
        {showDonateModal && (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            quick={quick}
            subscriptionInterval={subscriptionInterval}
            appealId={appealId}
          />
        )}
        {showlogin && (
          <Login showModal={showlogin} setshowModal={setshowlogin} />
        )}
      </header>
    );
  } else {
    return (
      <>
        <header class="w-full h-auto lg:hidden flex flex-col">
          <nav class="w-full h-auto bg-nblue border-b border-lgray fixed z-20">
            <div class="w-full h-auto px-5 py-2 flex flex-row justify-between items-center">
              <div class="flex flex-row gap-4 items-center">
                <button
                  onClick={() => setshowMenu(true)}
                  class="text-white text-2xl focus:outline-none"
                >
                  <img src="/Icons/icon_bars-white.svg" onClick={displayMenu}></img>
                </button>
                <a href="/">
                  <img
                    className="w-3/4"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div class="h-auto flex flex-row gap-4 items-center">
                <button class="text-2xl text-mont text-white">
                  <img src="/Icons/user-circle-white.svg" onClick={handleClick}></img>
                </button>
                <button className='hidden notification'>
                  <img
                    src="/Icons/icon_package-box-white.svg"
                    alt="package-box"
                  />
                </button>
              </div>
            </div>
          </nav>
          <div class="w-full h-auto px-5 bg-nblue mt-[3.6rem]">
            <div class="w-full h-auto my-8">
              <a
                class="text-base text-mont text-bwhite flex"
                href=""
                onClick={() => navigate('/appeals')}
              >
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

        {showMenu && (
          <div className="w-full bg-white h-full fixed top-0 left-0 pt-6 z-20">
            <p className="text-sm font-semibold pl-6 flex items-center gap-2">
              <img
                onClick={hideMenu}
                className="w-3 h-3"
                src="/images/icons/dashboard/angle-left.svg"
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
                <div className="pl-6 flex gap-2 py-5 text-black">
                  <p className="text-xs font-medium">Contact Us</p>
                </div>
              </li>
              <div className="px-6 mt-5">
                <button
                  class="w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg p-2"
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
              <li
                className={
                  active == 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 items-center py-5 text-black">
                  <img
                    alt="header-icon"
                    src={
                      user?.avatar_link
                        ? `${SERVER_URL + user.avatar_link}`
                        : '/Icons/user-circle-black.svg'
                    }
                    className="w-4 h-4 rounded-full"
                  />
                  <p className="text-xs font-medium">My Account</p>
                </div>
              </li>
            </ul>
          </div>
        )}

        {showAppealModal && (
          <Appeal_modal
            showModal={showAppealModal}
            setshowModal={setshowAppealModal}
            active={active}
          />
        )}
        {showDonateModal && (
          <DonateModal
            setshowModal={setshowDonateModal}
            appealId={appealId}
            subscriptionInterval={subscriptionInterval}
          />
        )}
        {showlogin && (
          <Login showModal={showlogin} setshowModal={setshowlogin} overflowVisible={overflowVisible} />
        )}
      </>
    );
  }
};

export default HeaderAppeal;
