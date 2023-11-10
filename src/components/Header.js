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
import ForgetPasswordEmail from './modal/ForgetEmail';
import ResetPassword from './modal/ForgetPassword';

const Header = ({
  showDonateButton = true,
  overflowHidden,
  overflowVisible,
  activePage
}) => {
  const [showAppealModal, setshowAppealModal] = React.useState(false);
  const [active, setactive] = React.useState('');
  const [quick] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMenu, setshowMenu] = React.useState(false);
  const [y, setY] = React.useState(window.scrollY);

  const { showLogin, showForgetEmail, showForgetPassword } = useSelector(
    state => state.common
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, chart } = useSelector(state => state.session);

  const fetchCategories = useCallback(async () => {
    const categories = await CategoryService.getCategories();
    dispatch(setCategories(categories));
  }, [dispatch]);

  const fetchPopularDonations = useCallback(async () => {
    const { appeals } = await AppealService.getPopularDonations();
    dispatch(setPopularDonations(appeals));
  }, [dispatch]);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
      } else if (y < window.scrollY) {
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    // setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);
    return () => {
      // return a cleanup function to unregister our function since it will run multiple times
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if(showMenu){
      document.getElementById("body").classList.add("overflow-y-hidden");
    } else {
      document.getElementById("body").classList.remove("overflow-y-hidden");
    }
  }, [showMenu]);

  

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
      overflowHidden && overflowHidden();
    }
  };

  const displayMenu = () => {
    setshowMenu(true);
    overflowHidden && overflowHidden();
  };

  const hideMenu = () => {
    setshowMenu(false);
    overflowVisible();
  };

  const isDesktop = !isMobile;
  if (isDesktop) {
    return (
      <div
        className={
          'fixed w-full bg-white top-0 z-20 ' + (y > 0 ? 'shadow-xl' : '') + (activePage == 'appeal_page' ? ' bg-nblue border-b border-opacity-25 py-1' : '')
        }
        onClick={() => {
          dispatch(setShowLogin(false));
        }}
      >
        {y <= 0 && activePage != 'appeal_page' && activePage != 'page_view' ? (
          <header className={"w-full h-auto border-b-2 text-gray-300 text-mont font-medium text-sm " + (activePage == 'appeal_page' ? "text-white" : "text-gray")}>
            <div className="flex justify-between items-center container mx-auto py-2">
              {/* <div>
                <label className="text-sm text-mont text-gray hover:text-dgray font-semibold focus:outline-none cursor-pointer">
                  <select className="w-11">
                    <option value="en">En</option>
                    <option value="es">Spanish</option>
                  </select>
                </label>
              </div> */}
              <div className="flex flex-row">
                {/* <div className="mr-3">
                  <Link to="" className="hover:text-dgray">
                    Latest News
                  </Link>
                </div> */}
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
        ) : null}
        <div>
          <header
            className="w-full h-auto top-0 left-0 md:px-0 px-5 py-1 relative container mx-auto"
            onMouseLeave={() => {
              setshowAppealModal(false);
            }}
          >
            <nav className="w-full h-auto">
              <div className="w-full h-auto py-1 flex justify-between items-center">
                <div className="flex items-center md:gap-4 xl:gap-8 w-2/3">
                  <div className="w-1/3 h-auto">
                    <Link to="/">
                      { activePage == 'appeal_page' ? 
                      <img
                      className="w-48 h-auto"
                      src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                      alt="logo"
                      />:
                      <img
                        className="w-11/12"
                        src="/images/logo/logo_aid-humanity.svg"
                        alt="logo"
                      />
                      }
                    </Link>
                  </div>
                  <div className="h-6 w-px border-l-2 border-gray-200"></div>
                  <div
                    className={"w-2/3 text-lg text-mont font-semibold pr-8 h-auto flex justify-between md:gap-2 lg:gap-4 items-center " + (activePage == 'appeal_page' ? "text-white" : "text-black-50")}
                  >
                    <Link to="/story" className="whitespace-nowrap font-bold">
                      Our Story
                    </Link>
                    <Link
                      to="/appeals"
                      className="font-bold"
                      onMouseEnter={() => {
                        setshowAppealModal(true);
                        setactive('appeals');
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
                      className={"hover-button text-sm text-mont hover:text-sblue font-semibold flex justify-center items-center gap-2 cursor-pointer " + (activePage == 'appeal_page' ? "text-white" : "text-black-50")}
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
                  <CartNotification color={activePage=='appeal_page' ? "white":"blue"} />
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
            {showForgetEmail && <ForgetPasswordEmail />}
            {showForgetPassword && <ResetPassword />}
          </header>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <header className="w-full h-auto flex bg-white fixed z-10 top-0">
          <nav className={"w-full h-auto " + (activePage == 'appeal_page' ? 'bg-nblue border-b border-lgray' : '')}>
            <div className="h-auto py-2 flex justify-between items-center px-5">
              <div className="flex gap-4 items-center">
                <button onClick={displayMenu}>
                  <img src={activePage == 'appeal_page' ? "/Icons/icon_bars-white.svg" : "/Icons/icon_bars.svg"} alt="icon_bars" />
                </button>
                <Link to="/">
                  { activePage != 'appeal_page' ?
                  <img
                    className="lg:w-full w-4/5"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle.svg"
                    alt="logo"
                  /> :
                  <img
                    className="w-3/4"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                  }
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
                <CartNotification color={activePage=='appeal_page' ? "white":"blue"} />
              </div>
            </div>
          </nav>
        </header>

        {showMenu && (
          <div className="w-full bg-white h-full fixed top-0 left-0 pt-6 z-20">
            <p
              className="text-sm font-semibold pl-6 flex items-center gap-2"
              onClick={hideMenu}
            >
              <img
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
                  <Link onClick={hideMenu}  to="/story" className="text-xl font-bold">
                    Our Story
                  </Link>
                </div>
              </li>
              <li
                onClick={() => {navigate('/appeals'); hideMenu()}}
                className={
                  active === 'profile'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 flex gap-2 py-5 border-b text-black justify-between">
                  <p className="text-xl font-bold">Appeals</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
              <li
                onClick={() =>{ navigate('/appeals'); hideMenu()}}
                className={
                  active === 'funds'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                  <p className="text-xl font-bold">Emergency</p>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li>
              <li
                onClick={() => {
                  navigate('/appeals', {
                    state: { queryFilter: 'Zakat' },
                  }); hideMenu()}
                }
                className={
                  active === 'security'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
                  <p className="text-xl font-bold">Zakat</p>
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
                    <Link onClick={hideMenu} to="/contact" className="text-xl font-bold">
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
                  <Link onClick={hideMenu} to="/zakat" className="text-xl font-bold">
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
                  <Link onClick={hideMenu} to="/blogs" className="text-xl font-bold">
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
                    onClick={() => {navigate('/dashboard'); hideMenu()}}
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
                      <Link onClick={hideMenu} className="text-xl font-bold" to="/dashboard">
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
                    <div className="px-6 justify-between flex gap-2 pb-5 pt-2 text-black border-b">
                      <div
                        onClick={() => {
                          handleLogOut();
                          hideMenu()
                        }}
                        className="text-lg text-red font-bold"
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
                  <Link to="/contact" className="text-xl font-bold">
                    Contact Us
                  </Link>
                </div>
              </li>
              <div className="px-6 mt-5">
                <ButtonLoader
                  className="w-full flex justify-center text-sblue text-center font-semibold text-sm border-sblue border-2 rounded-lg p-2 cursor-pointer py-4"
                  onClick={() => setshowDonateModal(true)}
                >
                  DONATE NOW
                </ButtonLoader>
              </div>
              {/* <li
                className={
                  active === 'prefer'
                    ? 'cursor-pointer border-blue'
                    : 'cursor-pointer border-white'
                }
              >
                <div className="px-6 justify-between flex gap-2 py-5 text-black border-b">
                  <Link to="/" className="text-xl font-bold">
                    Languages
                  </Link>
                  <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
                </div>
              </li> */}
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
        {showForgetEmail && <ForgetPasswordEmail />}
        {showForgetPassword && <ResetPassword />}
      </>
    );
  }
};

export default Header;
