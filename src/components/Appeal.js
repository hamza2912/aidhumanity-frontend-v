import React, { useState } from 'react';
import UploadImage from './modal/UploadImage';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SERVER_URL } from '../services/config';
import dayjs from 'dayjs';
import authService from '../services/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/auth/userSlice';
import { ZakatCountDown } from './ZakatCountDown';

function Appeal() {
  const [showModal, setshowModal] = React.useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const { user, dashboardInfo } = useSelector(state => state.session);

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      navigate('/');
      dispatch(addUser(null));
    } catch (e) {}
  };

  return (
    <>
      <div className="w-appeal pb-56 h-fit bg-white shadow-lg border-l-2 relative overflow-x-hidden">
        <div className="flex items-center justify-end py-5 border-b-2 px-6 h-20">
          {/* <button className="py-2 px-3 bg-blue-dark hover:bg-black text-white font-semibold text-xs rounded-lg hidden lg:block">
            + NEW APPEAL
          </button> */}
          <p className="text-sm font-semibold  flex items-center gap-2 lg:hidden">
            <img
              onClick={() => navigate('/')}
              className="w-3 h-3"
              src="images/icons/dashboard/angle-left.svg"
              alt=""
            />{' '}
            MENU
          </p>
          <div className="flex items-center gap-3">
            {/* <p className="hidden sm:flex gap-1 text-lgray">
              En{' '}
              <img
                className="w-2"
                src="images/icons/dashboard/angle-down.svg"
                alt=""
              />
            </p>
            <div className="hidden sm:flex h-6 border-l-2"></div> */}
            <button
              className="text-sm font-medium flex hover:text-sblue"
              onClick={handleSignOut}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="mr-2 w-4"
                src={
                  !isHovering
                    ? '/Icons/icon_logout.svg'
                    : '/Icons/icon_logout_sblue.svg'
                }
                alt=""
              />
              Log Out
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center px-6">
          <div className="w-28 h-28 rounded-full bg-gray-500 flex justify-center items-center relative">
            <img
              src={
                user?.avatar_link
                  ? `${SERVER_URL + user.avatar_link}`
                  : 'images/icons/dashboard/icon_user-circle.svg'
              }
              className={
                user?.avatar_link
                  ? 'w-full h-full rounded-full border-2 border-sblue object-cover'
                  : 'w-12 h-12'
              }
              alt=""
            />
            <div className="w-9 h-9 rounded-full bg-gray hover:bg-lgray flex justify-center items-center absolute bottom-0 right-0 shadow-md">
              <img
                className="cursor-pointer z-10"
                onClick={() => setshowModal(true)}
                src="images/icons/dashboard/icon_edit.svg"
                alt="edit-icon"
              />
            </div>
          </div>
          <h2 className="font-bold text-lg mt-2">
            {user ? user.first_name + ' ' + user.last_name : ''}
          </h2>
          <div className="flex gap-1">
            <img
              className="w-4"
              src="images/icons/dashboard/icon_calendar-clock.svg"
              alt=""
            />
            <p className="text-[10px] font-medium text-lgray">
              Joined {dayjs(user?.created_at).format('DD [of] MMM, YYYY')}
            </p>
          </div>
          <Link
            className="border-2 border-blue hover:bg-sblue hover:text-white py-2 px-6 font-semibold text-sm rounded-lg mt-4 z-10 text-dblue"
            to="/profile"
          >
            VIEW PROFILE
          </Link>
          <Link
            className="border-2 border-gray-300 hover:border-dgray hover:bg-dgray hover:text-white text-gray-300 py-2 px-3 font-semibold text-sm rounded-lg mt-3 z-10"
            to="/profile"
          >
            EDIT PROFILE
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 px-6 lg:mt-8 mt-12">
          <div className="bg-blue rounded-xl px-6 pt-6 pb-8 z-10">
            <div className="w-full flex gap-2 items-start">
              <h1 className="text-3xl font-bold">
                Total <br /> raised
              </h1>
              <img
                className="w-5 mt-1"
                src="images/icons/dashboard/icon_plus-cirle.svg"
                alt=""
              />
            </div>
            <h2 className="text-2xl font-semibold">
              £{dashboardInfo?.total_raised}
            </h2>
            <div className="flex flex-col text-white mt-5">
              <p className="text-xs flex gap-1">
                <img src="images/icons/dashboard/arrow-top.svg" alt="" />
                3.21%
              </p>
              <p className="text-vs">Than last month</p>
            </div>
          </div>
          <div className="bg-green rounded-xl px-6 pt-6 pb-8 z-10">
            <div className="w-full flex gap-2 items-start">
              <h1 className="text-3xl font-bold">
                Total <br /> given
              </h1>
              <img
                className="w-5 mt-1"
                src="images/icons/dashboard/icon_minus-circle.svg"
                alt=""
              />
            </div>
            <h2 className="text-2xl font-semibold">
              £{dashboardInfo?.total_given}
            </h2>
            <div className="flex flex-col text-white mt-5">
              <p className="text-xs flex gap-1">
                <img src="images/icons/dashboard/arrow-bottom.svg" alt="" />
                3.21%
              </p>
              <p className="text-vs">Than last month</p>
            </div>
          </div>
          <ZakatCountDown />
        </div>
        <img
          className="absolute w-11/12 -right-1/3 lg:top-1/4 top-80 z-0"
          src="images/vectors/logo_aid-humanity-icon.svg"
          alt="Aid-humanity background logo"
        />
      </div>
      {showModal ? (
        <UploadImage showModal={showModal} setshowModal={setshowModal} />
      ) : null}
    </>
  );
}

export default Appeal;
