import React from 'react';
import { isMobile } from 'react-device-detect';
import AppealModal from './modal/AppealModal';
import DonateModal from './modal/DonateModal';
import Login from './modal/Login';
import { useSelector } from 'react-redux';
import { SERVER_URL } from '../services/config';
import { useNavigate } from 'react-router-dom';

function Header({ showDonateButton = false }) {
  const [showAppealModal, setshowAppealModal] = React.useState(false);
  const [active, setactive] = React.useState('');
  const [quick, setquick] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMenu, setshowMenu] = React.useState(false);
  const [showlogin, setshowlogin] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useSelector(state => state.session);

  const handleClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      setshowlogin(true);
    }
  };
  if (!isMobile) {
    return (
      <>
        <header className="w-full h-auto border-b-2 text-gray-300 text-mont font-medium text-sm text-gray">
          <div className="hidden flex-row justify-between container mx-auto px-5 py-2">
            <div>
              <label className="text-sm text-mont text-gray font-semibold focus:outline-none cursor-pointer">
                En
                <select>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                </select>
                <i className="fa-solid fa-angle-down" />
              </label>
            </div>
            <div className="flex flex-row">
              <div className="mr-3">
                <a href="">Latest News</a>
              </div>
              <div>
                <a href="">Zakat Calculator</a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mr-3">
                <button className="flex flex-row items-center text-blue text-sm text-mont font-bold">
                  <img
                    className="mr-2"
                    src="./Icons/icon_phone-volume.svg"
                    alt="Phone"
                  />
                  0330 057 9957
                </button>
              </div>
              <div>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </header>
        <header
          className="w-full h-auto top-0 left-0 px-5 py-1 relative container mx-auto"
          onMouseLeave={() => {
            setshowAppealModal(false);
          }}
        >
          <nav className="w-full h-auto">
            <div className="w-full h-auto py-4 flex justify-between items-center">
              <div className="w-56 h-auto">
                <a href="/">
                  <img
                    className="w-full"
                    src="images/logo/logo_aid-humanity.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="h-6 w-px border-l-2 border-gray-200 mx-8"></div>
              <div className="text-lg text-mont text-black-50 font-medium w-2/3 h-auto flex justify-around items-center">
                <a href="/story">Our Story</a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('appeal');
                  }}
                  className="font-bold"
                >
                  Appeals
                </a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('emergency');
                  }}
                  className="invisible font-bold"
                >
                  Emergency
                </a>
                <a
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('zakat');
                  }}
                  className="invisible font-bold"
                >
                  Zakat
                </a>
                <a
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(false);
                  }}
                  className="invisible "
                >
                  Get Involved
                </a>
              </div>
              <div className="w-2/3 flex justify-between items-center pl-16">
                <a
                  className="invisible text-sm text-mont text-gray font-semibold"
                  href="/zakat"
                >
                  Zakat Calculator
                </a>
                <div className="invisible h-6 w-px border-l-2 border-gray-200 ml-5"></div>

                <label className="invisible text-sm text-mont text-gray font-semibold focus:outline-none cursor-pointer">
                  En
                  <select>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                  </select>
                  <i className="fa-solid fa-angle-down" />
                </label>
                {/* {!user && ( */}
                <a
                  className="text-sm text-mont text-black-50 font-semibold flex justify-center items-center gap-2"
                  onClick={handleClick}
                >
                  <img
                    alt="header-icon"
                    src={
                      user?.avatar_link
                        ? `${SERVER_URL + user.avatar_link}`
                        : '/Icons/user-circle-black.svg'
                    }
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="whitespace-nowrap">
                    {user ? 'Dashboard' : 'Account'}
                  </span>
                </a>
                {/* )} */}
                <a className="invisible relative" href="">
                  <img src="./Icons/icon_package-box.svg" alt="package-box" />
                  <p className="px-1.5 py-px text-vs bg-blue rounded-full absolute bottom-0 -right-1 text-white">
                    1
                  </p>
                </a>
                {showDonateButton && (
                  <button
                    className="text-dblue hover:text-white text-center font-semibold text-sm  border-sblue border-2 hover:bg-sblue rounded-lg px-4 py-2"
                    onClick={() => {
                      setshowDonateModal(!showDonateModal);
                      setquick(true);
                    }}
                  >
                    DONATE NOW
                  </button>
                )}
              </div>
            </div>
          </nav>
          {showAppealModal ? (
            <AppealModal
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
      </>
    );
  } else {
    return (
      <>
        <header className="w-full h-auto flex bg-white fixed z-10">
          <nav className="w-full h-auto">
            <div className="h-auto py-4 flex justify-between items-center px-5">
              <div className="flex gap-4 justify-between items-center">
                <button onClick={() => setshowMenu(true)}>
                  <img src="./Icons/icon_bars.svg" alt="icon_bars" />
                </button>
                <a href="/">
                  <img
                    className="lg:w-full w-4/5"
                    src="./logo/logo_aid-humanity-horizontal-icon-middle.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="h-auto flex gap-4 justify-between items-center">
                <button>
                  <img src="/Icons/user-circle-black.svg"></img>
                </button>
                <a className="relative" href="">
                  <img src="./Icons/icon_package-box.svg" alt="package-box" />
                  <p className="px-1.5 py-px text-vs bg-blue rounded-full absolute bottom-0 -right-1 text-white">
                    1
                  </p>
                </a>
              </div>
            </div>
          </nav>
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
                  className="w-full text-dblue text-center font-semibold text-sm border-sblue border-2 rounded-lg p-2"
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(true);
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
          <AppealModal
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
      </>
    );
  }
}

export default Header;