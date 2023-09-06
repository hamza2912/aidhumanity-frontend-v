import React, { useEffect, useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import AppealModal from './modal/AppealModal';
import DonateModal from './modal/DonateModal';
import Login from './modal/Login';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../services/auth';
import { addUser } from '../redux/auth/userSlice';
import { SERVER_URL } from '../services/config';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as User } from '../images/icon_user_circle.svg';
import { ReactComponent as LogOut } from '../images/icon_logout.svg';
import CartNotification from './common/CartNotification';
import { ReactComponent as Dashboard } from '../images/icon_dashboard.svg';
import CategoryService from '../services/categories';
import AppealService from '../services/appeals';
import { setCategories } from '../redux/home/HomeSlice';
import { setPopularDonations } from '../redux/appeal/appealSlice';
import ButtonLoader from './common/ButtonLoader';
import { setShowLogin } from '../redux/common/CommonSlice';

const Header = ({
  showDonateButton = true,
  overflowHidden,
  overflowVisible,
}) => {
  const [showAppealModal, setshowAppealModal] = React.useState(false);
  const [active, setactive] = React.useState('');
  const [quick] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMenu, setshowMenu] = React.useState(false);

  const { showLogin } = useSelector(state => state.common);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.session);

  const fetchCategories = useCallback(async () => {
    const { categories } = await CategoryService.getCategories();
    dispatch(setCategories(categories));
  }, [dispatch]);

  const fetchPopularDonations = useCallback(async () => {
    const { appeals } = await AppealService.getPopularDonations();
    dispatch(setPopularDonations(appeals));
  }, [dispatch]);

  useEffect(() => {
    fetchCategories();
    fetchPopularDonations();
  }, [fetchCategories, fetchPopularDonations]);

  const handleLogOut = async () => {
    try {
      await authService.signOut();
      navigate('/');
      dispatch(addUser(null));
    } catch (e) {}
  };

  const handleAccountClick = event => {
    event.stopPropagation();
    if (!user) {
      dispatch(setShowLogin(true));
    } else {
      if (window.innerWidth <= 768) {
        navigate('/dashboard');
      }
    }
    if (!user && window.innerWidth <= 768) {
      overflowHidden();
    }
  };

  const displayMenu = () => {
    setshowMenu(true);
    overflowHidden();
  };

  const hideMenu = () => {
    setshowMenu(false);
    overflowVisible();
  };

  const isDesktop = !isMobile;
  if (isDesktop) {
    return (
      <div
        className="fixed w-full bg-white top-0 z-20"
        onClick={() => {
          dispatch(setShowLogin(false));
        }}
      >
        <header className="w-full h-auto border-b-2 text-gray-300 text-mont font-medium text-sm text-gray">
          <div className="flex justify-between container mx-auto py-2">
            <div>
              <label className="text-sm text-mont text-gray hover:text-dgray font-semibold focus:outline-none cursor-pointer">
                <select className="w-11">
                  <option value="en">En</option>
                  <option value="es">Spanish</option>
                </select>
              </label>
            </div>
            <div className="flex flex-row">
              <div className="mr-3">
                <Link to="" className="hover:text-dgray">
                  Latest News
                </Link>
              </div>
              <div>
                <Link to="/zakat" className="hover:text-dgray">
                  Zakat Calculator
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <button className="flex gap-3 items-center text-blue text-sm text-mont font-bold">
                <img
                  className=""
                  src="/Icons/icon_phone-volume.svg"
                  alt="Phone"
                />
                0330 057 9957
              </button>
              <div className="h-4 w-px border-l border-gray-300 mx-4"></div>
              <div>
                <a href="/contact" className="hover:text-dgray">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </header>
        <div>
          <header
            className="w-full h-auto top-0 left-0 md:px-0 px-5 py-1 relative container mx-auto"
            onMouseLeave={() => {
              setshowAppealModal(false);
            }}
          >
            <nav className="w-full h-auto">
              <div className="w-full h-auto py-4 flex justify-between items-center">
                <div className="flex items-center md:gap-4 xl:gap-8 w-2/3">
                  <div className="w-1/3 h-auto">
                    <Link to="/">
                      <img
                        className="w-full"
                        src="images/logo/logo_aid-humanity.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="h-6 w-px border-l-2 border-gray-200"></div>
                  <div
                    className="w-2/3 text-lg text-mont text-black-50 font-semibold pr-8 h-auto flex 
                    justify-between md:gap-2 lg:gap-4 items-center"
                  >
                    <Link to="/story" className="whitespace-nowrap font-bold">
                      Our Story
                    </Link>
                    <Link
                      to="/appeals"
                      className="font-bold"
                      onMouseEnter={() => {
                        setshowAppealModal(true);
                        setactive('appeal');
                      }}
                    >
                      Appeals
                    </Link>
                    <Link
                      className="font-bold"
                      onMouseEnter={() => {
                        setshowAppealModal(true);
                        setactive('emergency');
                      }}
                    >
                      Emergency
                    </Link>
                    <Link
                      to="/zakat"
                      className="font-bold"
                      onMouseEnter={() => {
                        setshowAppealModal(true);
                        setactive('zakat');
                      }}
                    >
                      Zakat
                    </Link>
                    <Link to="/contact" className="font-bold whitespace-nowrap">
                      Get Involved
                    </Link>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-end w-auto">
                  <div className="dropdown dropdown-hover">
                    <div
                      className="hover-button text-sm text-mont text-black-50 hover:text-sblue font-semibold
                      flex justify-center items-center gap-2 cursor-pointer"
                      onClick={handleAccountClick}
                    >
                      {user?.avatar_link ? (
                        <img
                          className="w-6 h-6 rounded-full"
                          alt="header-icon"
                          src={`${SERVER_URL + user.avatar_link}`}
                        />
                      ) : (
                        <User className="icon w-6 h-6 rounded-full" />
                      )}
                      <span tabIndex={0}>My Account</span>
                    </div>
                    {user && (
                      <div
                        tabIndex={0}
                        className="dropdown-content bg-white flex flex-col py-4 rounded-xl
                        shadow-2xl border border-platinum"
                      >
                        <Link
                          to="/dashboard"
                          className="hover:bg-platinum px-4 py-2 cursor-pointer text-sm font-medium flex items-center
                            whitespace-nowrap"
                        >
                          <Dashboard className="mr-1 w-4 icon" />
                          Dashboard
                        </Link>
                        <button
                          className="hover:bg-platinum px-4 py-2 cursor-pointer text-sm font-medium flex items-center
                            whitespace-nowrap"
                          onClick={handleLogOut}
                        >
                          <LogOut className="mr-1 w-4 icon" />
                          Log Out
                        </button>
                      </div>
                    )}
                  </div>
                  {user && <CartNotification color="blue" />}

                  {showDonateButton && (
                    <ButtonLoader
                      className="text-dblue hover:text-white text-center font-semibold text-sm border-sblue border-2 hover:bg-sblue rounded-lg px-4 py-2 whitespace-nowrap cursor-pointer"
                      data-aos="zoom-in"
                      onClick={() => setshowDonateModal(true)}
                    >
                      DONATE NOW
                    </ButtonLoader>
                  )}
                </div>
              </div>
            </nav>
            {showAppealModal && (
              <AppealModal
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
              />
            )}
            {showLogin && (
              <Login showModal={showLogin} setshowModal={setShowLogin} />
            )}
          </header>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <header className="w-full h-auto flex bg-white fixed z-10 top-0 shadow-md lg:shadow-none">
          <nav className="w-full h-auto">
            <div className="h-auto py-2 flex justify-between items-center px-5">
              <div className="flex gap-4 items-center">
                <button onClick={displayMenu}>
                  <img src="/Icons/icon_bars.svg" alt="icon_bars" />
                </button>
                <Link to="/">
                  <img
                    className="lg:w-full w-4/5"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle.svg"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex gap-4">
                <div
                  className="hover-button text-sm text-mont text-black-50 hover:text-sblue font-semibold
                  flex justify-center items-center gap-2 cursor-pointer"
                  onClick={handleAccountClick}
                >
                  {user?.avatar_link ? (
                    <img
                      className="w-6 h-6 rounded-full"
                      alt="header-icon"
                      src={`${SERVER_URL + user.avatar_link}`}
                    />
                  ) : (
                    <User className="icon w-6 h-6 rounded-full" />
                  )}
                </div>
                {user && <CartNotification color="blue" />}
              </div>
            </div>
          </nav>
        </header>

        {showMenu && (
          <div className="w-full bg-white h-full fixed top-0 left-0 pt-6 z-20">
            <p className="text-sm font-semibold pl-6 flex items-center gap-2">
              <img
                onClick={hideMenu}
                className="w-3 h-3"
                src="images/icons/dashboard/angle-left.svg"
                alt=""
              />{' '}
              MENU
            </p>
            <ul className="flex flex-col mt-4 bg-gray h-full">
              <li
                className={
                  active === 'dashboard'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <Link to="/story" className="text-xs font-medium">
                    Our Story
                  </Link>
                </div>
              </li>
              <li
                onClick={() => {
                  setshowAppealModal(true);
                  setactive('appeal');
                }}
                className={
                  active === 'profile'
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
                  active === 'funds'
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
                  active === 'security'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                  <p className="text-xs font-medium">Zakat</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
              <Link>
                <li
                  className={
                    active === 'donation'
                      ? 'cursor-pointer border-blue'
                      : 'cursor-pointer border-white'
                  }
                >
                  <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                    <Link to="/contact" className="text-xs font-medium">
                      Get Involved
                    </Link>
                    <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                  </div>
                </li>
              </Link>
              <li
                className={
                  active === 'monthly'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <Link to="/zakat" className="text-xs font-medium">
                    Zakat Calculator
                  </Link>
                </div>
              </li>
              <li
                className={
                  active === 'payment'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 border-b text-black">
                  <Link to="/blogs" className="text-xs font-medium">
                    Blog
                  </Link>
                </div>
              </li>
              {user && (
                <>
                  <li
                    className={
                      active === 'prefer'
                        ? 'cursor-pointer border-blue'
                        : 'cursor-pointer border-white'
                    }
                  >
                    <div className="pl-6 flex gap-2 items-center py-5 text-black">
                      {user?.avatar_link ? (
                        <img
                          className="w-4 h-4 rounded-full"
                          alt="header-icon"
                          src={`${SERVER_URL + user.avatar_link}`}
                        />
                      ) : (
                        <User className="icon w-4 h-4 rounded-full" />
                      )}
                      <Link
                        onClick={handleAccountClick}
                        className="text-xs font-medium"
                      >
                        My Account
                      </Link>
                    </div>
                  </li>
                  <li
                    className={
                      active === 'prefer'
                        ? 'cursor-pointer border-blue'
                        : 'cursor-pointer border-white'
                    }
                  >
                    <div className="px-6 justify-between flex gap-2 py-5 text-black border-b">
                      <div
                        onClick={() => {
                          handleLogOut();
                          setshowMenu(false);
                        }}
                        className="text-xs  text-red font-medium"
                      >
                        Logout
                      </div>
                      {/* <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i> */}
                    </div>
                  </li>
                </>
              )}
              <li
                className={
                  active === 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="pl-6 flex gap-2 py-5 text-black">
                  <Link to="/contact" className="text-xs font-medium">
                    Contact Us
                  </Link>
                </div>
              </li>
              <div className="px-6 mt-5">
                <ButtonLoader
                  className="w-full flex justify-center text-dblue text-center font-semibold text-sm border-sblue border-2 rounded-lg p-2 cursor-pointer"
                  onClick={() => setshowDonateModal(true)}
                >
                  DONATE NOW
                </ButtonLoader>
              </div>
              <li
                className={
                  active === 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 text-black border-b">
                  <Link to="/" className="text-xs font-medium">
                    Languages
                  </Link>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
            </ul>
          </div>
        )}

        {showAppealModal && (
          <AppealModal
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
          />
        )}
        {showLogin && (
          <Login
            showModal={showLogin}
            setshowModal={setShowLogin}
            overflowVisible={overflowVisible}
          />
        )}
      </>
    );
  }
};

export default Header;
