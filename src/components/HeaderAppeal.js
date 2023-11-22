import React, { useEffect, useCallback } from 'react';
import { isMobile } from 'react-device-detect';
import AppealModal from './modal/AppealModal';
import DonateModal from './modal/DonateModal';
import Header from './Header';
import Login from './modal/Login';
import { Link, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../services/config';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../services/auth';
import { addUser } from '../redux/auth/userSlice';
import { ReactComponent as BackIcon } from '../images/arrow-left-bwhite.svg';
import { ReactComponent as LogOutIcon } from '../images/icon_logout_white.svg';
import { ReactComponent as User } from '../images/user-circle-white.svg';
import {
  setRegularSidebar,
  setSubscriptionSidebar,
  setProjectSidebar,
  setShowLogin,
} from '../redux/common/CommonSlice';
import CartNotification from './common/CartNotification';
import CategoryService from '../services/categories';
import AppealService from '../services/appeals';
import { setCategories } from '../redux/home/HomeSlice';
import { setPopularDonations } from '../redux/appeal/appealSlice';
import ForgetPasswordEmail from './modal/ForgetEmail';
import ResetPassword from './modal/ForgetPassword';

const HeaderAppeal = ({
  appeal,
  category,
  title,
  subscriptionInterval = null,
  overflowHidden,
  overflowVisible,
}) => {
  const [showAppealModal, setshowAppealModal] = React.useState(false);
  const [active, setactive] = React.useState('');
  const [quick, setquick] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [showMenu, setshowMenu] = React.useState(false);
  const { user } = useSelector(state => state.session);

  const { showLogin, showForgetEmail, showForgetPassword } = useSelector(
    state => state.common
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchCategories = useCallback(async () => {
    const categories = await CategoryService.getCategories();
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

  const handleDonateClick = () => {
    // if (!user) {
    //   dispatch(setShowLogin(true));
    //   return;
    // }
    switch (appeal?.appeal_type) {
      case 'general':
        dispatch(setRegularSidebar(true));
        break;
      case 'subscription':
        dispatch(setSubscriptionSidebar(true));
        break;
      case 'project':
        dispatch(setProjectSidebar(true));
        break;
      default:
        setshowDonateModal(true);
        setquick(true);
    }
  };

  const handleClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      dispatch(setShowLogin(true));
    }
    if (!user && window.innerWidth <= 768) {
      overflowHidden && overflowHidden();
    }
  };

  const handleLogOut = async () => {
    try {
      await authService.signOut();
      dispatch(addUser(null));
    } catch (e) {}
  };

  const displayMenu = () => {
    setshowMenu(true);
    overflowHidden && overflowHidden();
  };

  const hideMenu = () => {
    setshowMenu(false);
    overflowVisible();
  };

  // if (!isMobile) {
    return (
      <header
        className="w-full h-auto lg:flex flex-col bg-nblue top-0 left-0 py-3"
        onMouseLeave={() => {
          setshowAppealModal(false);
        }}
      >
        <div className="border-b border-opacity-25 fixed top-0 left-0 right-0 z-20 bg-nblue">
          {/* <nav className="w-full h-auto container mx-auto">
            <div className="w-full h-auto py-4 flex flex-row justify-between items-center">
              <div className="w-1/5 h-auto">
                <Link to="/" replace>
                  <img
                    className="w-48 h-auto"
                    src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="w-px h-8 bg-platinum bg-opacity-50 mx-8"></div>
              <div className="whitespace-nowrap text-lg text-mont text-white font-semibold w-1/2 h-auto flex gap-8 justify-between items-center ml-2">
                <Link to="/story">Our Story</Link>
                <Link
                  to="/appeals"
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('appeals');
                  }}
                  className="font-semibold"
                >
                  Appeals
                </Link>
                <Link
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('emergency');
                  }}
                  className="font-semibold"
                >
                  Emergency
                </Link>
                <Link
                  to="/zakat"
                  onMouseEnter={() => {
                    setshowAppealModal(true);
                    setactive('zakat');
                  }}
                  className="font-semibold"
                >
                  Zakat
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    setshowDonateModal(!showDonateModal);
                    setquick(false);
                  }}
                  className="font-semibold"
                >
                  Get Involved
                </Link>
              </div>
              <div className="w-2/3 h-auto gap-8 flex justify-end items-center">
                <div
                  className="hover-button text-sm text-mont text-white font-semibold flex items-center gap-2
                    cursor-pointer"
                  onClick={handleClick}
                >
                  {user?.avatar_link ? (
                    <img
                      src={SERVER_URL + user.avatar_link}
                      alt="thumbnail"
                      className="w-6 h-full rounded-full"
                    />
                  ) : (
                    <User className="icon w-5" />
                  )}
                  <span className="hover:text-sblue">My Account</span>
                </div>
                <CartNotification />
                <button
                  className="text-dblue text-center font-semibold text-sm border-sblue hover:bg-sblue hover:text-white border-2 rounded-lg px-4 py-2"
                  onClick={handleDonateClick}
                >
                  DONATE NOW
                </button>
                {user && (
                  <button
                    className="hover-button text-sm text-mont text-white hover:text-sblue font-semibold flex items-center gap-2 whitespace-nowrap"
                    onClick={handleLogOut}
                  >
                    <LogOutIcon className="icon mr-1 w-4" />
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </nav> */}
          <Header activePage='appeal_page' />
          {showAppealModal && (
            <AppealModal
              showModal={showAppealModal}
              setshowModal={setshowAppealModal}
              active="appeals"
            />
          )}
        </div>
        <div className="w-full h-auto px-5 bg-nblue mt-16 lg:hidden">
             <div className="w-full h-auto my-6">
              <Link
                className="lg:text-base text-sm font-medium py-1 text-mont text-bwhite flex"
                to="/appeals"
              >
                <img
                  className="mr-2"
                  src="/Icons/arrow-left-bwhite.svg"
                  alt="arrow-left"
                />
                BACK TO ALL
              </Link>
            </div>
            <div className="mt-48"></div>
        </div>
        <div className="w-full h-auto container mx-auto pt-8 lg:pt-4 pb-32 lg:pb-40 lg:flex hidden justify-between items-center mt-20">
          <div className="w-1/2 h-auto lg:flex hidden gap-2">
            <Link
              className="text-xs font-medium text-mont text-bwhite hover:text-sblue"
              to="/"
            >
              Home
            </Link>
            <p className="text-xs font-medium text-mont text-bwhite">/</p>
            <Link
              className="text-xs font-medium text-mont text-bwhite hover:text-sblue"
              to="/appeals"
            >
              Appeals
            </Link>
            <p className="text-xs font-medium text-mont text-bwhite">/</p>
            <Link
              className="text-xs font-medium text-mont text-bwhite hover:text-sblue"
              to=""
            >
              {category}
            </Link>
            <p className="text-xs font-medium text-mont text-bwhite">/</p>
            <Link
              className="text-xs font-medium text-mont text-bwhite hover:text-sblue"
              to=""
            >
              {title}
            </Link>
          </div>
          <div className="w-1/2 h-auto lg:flex justify-end">
            <Link
              className="hover-button text-base font-medium text-mont text-bwhite hover:text-sblue flex items-center"
              to="/appeals"
            >
              <BackIcon className="icon w-4 h-4 mr-2" />
              <span className="text-sm">BACK TO ALL</span>
            </Link>
          </div>
        </div>
        {showDonateModal && (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            quick={quick}
            subscriptionInterval={subscriptionInterval}
            appealId={appeal.id}
          />
        )}
        {/* {showLogin && (
          <Login showModal={showLogin} setshowModal={setShowLogin} />
        )} */}
        {showForgetEmail && <ForgetPasswordEmail />}
        {showForgetPassword && <ResetPassword />}
      </header>
    );
  // } 
  // else {
  //   return (
  //     <>
  //       <header className="w-full h-auto lg:hidden flex flex-col">
  //         <nav className="w-full h-auto bg-nblue border-b border-lgray fixed z-20">
  //           <div className="w-full h-auto px-5 py-2 flex flex-row justify-between items-center">
  //             <div className="flex flex-row gap-4 items-center">
  //               <button
  //                 onClick={() => setshowMenu(true)}
  //                 className="text-white text-2xl focus:outline-none"
  //               >
  //                 <img
  //                   src="/Icons/icon_bars-white.svg"
  //                   onClick={displayMenu}
  //                   alt="icon-bars"
  //                 />
  //               </button>
  //               <Link to="/" replace>
  //                 <img
  //                   className="w-3/4"
  //                   src="/logo/logo_aid-humanity-horizontal-icon-middle-white.svg"
  //                   alt="logo"
  //                 />
  //               </Link>
  //             </div>
  //             <div className="h-auto flex flex-row gap-4 items-center">
  //               <button className="text-2xl text-mont text-white">
  //                 <img
  //                   src="/Icons/user-circle-white.svg"
  //                   onClick={handleClick}
  //                   alt="user-circle"
  //                 />
  //               </button>
  //               <CartNotification />
  //             </div>
  //           </div>
  //         </nav>
  //         <div className="w-full h-auto px-5 bg-nblue mt-[3.6rem]">
  //           <div className="w-full h-auto my-6">
  //             <Link
  //               className="lg:text-base text-sm font-medium py-1 text-mont text-bwhite flex"
  //               to="/appeals"
  //             >
  //               <img
  //                 className="mr-2"
  //                 src="/Icons/arrow-left-bwhite.svg"
  //                 alt="arrow-left"
  //               />
  //               BACK TO ALL
  //             </Link>
  //           </div>
  //           <div className="mt-48"></div>
  //         </div>
  //       </header>

  //       {showMenu && (
  //         <div className="w-full bg-white h-full fixed top-0 left-0 pt-6 z-20">
  //           <p className="text-sm font-semibold pl-6 flex items-center gap-2">
  //             <img
  //               onClick={hideMenu}
  //               className="w-3 h-3"
  //               src="/images/icons/dashboard/angle-left.svg"
  //               alt="angle-left"
  //             />{' '}
  //             MENU
  //           </p>
  //           <ul className="flex flex-col mt-4 bg-gray h-full">
  //             <li
  //               className={
  //                 active === 'dashboard'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="pl-6 flex gap-2 py-5 border-b text-black">
  //                 <p className="text-xs font-medium">Our Story</p>
  //               </div>
  //             </li>
  //             <li
  //               onClick={() => {
  //                 setshowAppealModal(true);
  //                 setactive('appeals');
  //               }}
  //               className={
  //                 active === 'profile'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="px-6 flex gap-2 py-5 border-b text-black justify-between">
  //                 <p className="text-xs font-medium">Appeals</p>
  //                 <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
  //               </div>
  //             </li>
  //             <li
  //               onClick={() => {
  //                 setshowAppealModal(!showAppealModal);
  //                 setactive('emergency');
  //               }}
  //               className={
  //                 active === 'funds'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
  //                 <p className="text-xs font-medium">Emergency</p>
  //                 <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
  //               </div>
  //             </li>
  //             <li
  //               onClick={() => {
  //                 setshowAppealModal(!showAppealModal);
  //                 setactive('zakat');
  //               }}
  //               className={
  //                 active === 'security'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
  //                 <p className="text-xs font-medium">Zakat</p>
  //                 <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
  //               </div>
  //             </li>
  //             <Link>
  //               <li
  //                 className={
  //                   active === 'donation'
  //                     ? 'cursor-pointer border-blue'
  //                     : 'cursor-pointer border-white'
  //                 }
  //               >
  //                 <div className="px-6 justify-between flex gap-2 py-5 border-b text-black">
  //                   <p
  //                     onClick={() => {
  //                       setshowDonateModal(true);
  //                       setquick(false);
  //                     }}
  //                     className="text-xs font-medium"
  //                   >
  //                     Get Involved
  //                   </p>
  //                   <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
  //                 </div>
  //               </li>
  //             </Link>
  //             <li
  //               className={
  //                 active === 'monthly'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="pl-6 flex gap-2 py-5 border-b text-black">
  //                 <p className="text-xs font-medium">Zakat Calculator</p>
  //               </div>
  //             </li>
  //             <li
  //               className={
  //                 active === 'payment'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="pl-6 flex gap-2 py-5 border-b text-black">
  //                 <p className="text-xs font-medium">Blog</p>
  //               </div>
  //             </li>
  //             <li
  //               className={
  //                 active === 'prefer'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="pl-6 flex gap-2 py-5 text-black">
  //                 <p className="text-xs font-medium">Contact Us</p>
  //               </div>
  //             </li>
  //             <div className="px-6 mt-5">
  //               <button
  //                 className="w-full text-dblue text-center font-semibold text-sm  border-sblue border-2 rounded-lg p-2"
  //                 onClick={() => {
  //                   setshowDonateModal(!showDonateModal);
  //                   // setquick(true);
  //                 }}
  //               >
  //                 DONATE NOW
  //               </button>
  //             </div>
  //             <li
  //               className={
  //                 active === 'prefer'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="px-6 justify-between flex gap-2 py-5 text-black border-b">
  //                 <p className="text-xs font-medium">Languages</p>
  //                 <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
  //               </div>
  //             </li>
  //             <li
  //               className={
  //                 active === 'prefer'
  //                   ? 'cursor-pointer border-blue'
  //                   : 'cursor-pointer border-white'
  //               }
  //             >
  //               <div className="pl-6 flex gap-2 items-center py-5 text-black">
  //                 <img
  //                   alt="header-icon"
  //                   src={
  //                     user?.avatar_link
  //                       ? `${SERVER_URL + user.avatar_link}`
  //                       : '/Icons/user-circle-black.svg'
  //                   }
  //                   className="w-4 h-4 rounded-full"
  //                 />
  //                 <p className="text-xs font-medium">My Account</p>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //       )}

  //       {showAppealModal && (
  //         <AppealModal
  //           showModal={showAppealModal}
  //           setshowModal={setshowAppealModal}
  //           active={active}
  //         />
  //       )}
  //       {showDonateModal && (
  //         <DonateModal
  //           setshowModal={setshowDonateModal}
  //           appealId={appeal.id}
  //           subscriptionInterval={subscriptionInterval}
  //         />
  //       )}
  //       {showLogin && (
  //         <Login
  //           showModal={showLogin}
  //           setshowModal={setShowLogin}
  //           overflowVisible={overflowVisible}
  //         />
  //       )}
  //       {showForgetEmail && <ForgetPasswordEmail />}
  //       {showForgetPassword && <ResetPassword />}
  //     </>
  //   );
  // }
};

export default HeaderAppeal;
