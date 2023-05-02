import React from 'react';
import Upload_image from './modal/UploadImage';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SERVER_URL } from '../services/config';
import dayjs from 'dayjs';
import authService from '../services/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/auth/userSlice';

function Appeal() {
  const [showModal, setshowModal] = React.useState(false);
  const navigate = useNavigate();
  const { user, dashboardInfo } = useSelector(state => state.session);

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      dispatch(addUser(null));
      navigate('/');
    } catch (e) {}
  };

  return (
    <>
      <div className="w-appeal h-fit bg-white shadow-lg border-l-2 relative overflow-x-hidden">
        <div className="flex items-center justify-between py-5 border-b-2 px-6 h-20">
          <button className="py-2 px-3 bg-blue-dark text-white font-semibold text-sm rounded-lg hidden lg:block">
            + NEW APPEAL
          </button>
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
            <p className="flex gap-1">
              En{' '}
              <img
                className="w-2"
                src="images/icons/dashboard/angle-down.svg"
                alt=""
              />
            </p>
            <div className="h-6 border-l-2"></div>
            <button
              className="text-sm font-medium flex"
              onClick={handleSignOut}
            >
              <img
                className="mr-1 w-4"
                src="images/icons/dashboard/icon_logout.svg"
                alt=""
              />
              Log Out
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center px-6">
          <div className="w-28 h-28 rounded-full bg-gray-500 flex justify-center items-center relative">
            <img
              src={
                user?.avatar_link
                  ? `${SERVER_URL + user.avatar_link}`
                  : 'images/icons/dashboard/icon_user-circle.svg'
              }
              className={
                user?.avatar_link
                  ? 'w-fit rounded-full border-2 border-sblue'
                  : 'w-12'
              }
              alt=""
            />
            <div className="w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute bottom-0 right-0">
              <img
                className="cursor-pointer z-10"
                onClick={() => setshowModal(true)}
                src="images/icons/dashboard/icon_edit.svg"
                alt=""
              />
            </div>
          </div>
          <h2 className="font-bold text-lg mt-2">
            {user?.first_name + ' ' + user?.last_name}
          </h2>
          <div className="flex gap-1">
            <img
              className="w-4"
              src="images/icons/dashboard/icon_calendar-clock.svg"
              alt=""
            />
            <p className="text-vs">
              Joined {dayjs(user?.created_at).format('DD [of] MMM, YYYY')}
            </p>
          </div>
          <Link
            className="border-2 border-blue py-2 px-6 font-semibold text-sm rounded-lg mt-3 z-10"
            to="/profile"
          >
            VIEW PROFILE
          </Link>
          <Link
            className="border-2 border-gray-200 text-gray-400 py-2 px-3 font-semibold text-sm rounded-lg mt-2 z-10"
            to="/profile"
          >
            EDIT PROFILE
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 px-6 mt-8">
          <div className="bg-blue rounded-xl p-6 z-10">
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
              £{dashboardInfo.total_raised}
            </h2>
            <div className="flex flex-col text-white mt-5">
              <p className="text-xs flex gap-1">
                <img src="images/icons/dashboard/arrow-top.svg" alt="" />
                3.21%
              </p>
              <p className="text-vs">Than last month</p>
            </div>
          </div>
          <div className="bg-green rounded-xl p-6 z-10">
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
              £{dashboardInfo.total_given}
            </h2>
            <div className="flex flex-col text-white mt-5">
              <p className="text-xs flex gap-1">
                <img src="images/icons/dashboard/arrow-bottom.svg" alt="" />
                3.21%
              </p>
              <p className="text-vs">Than last month</p>
            </div>
          </div>
          <div className="bg-orange2 col-span-2 rounded-xl p-6 z-10">
            <div className="w-full flex justify-between">
              <h1 className="text-3xl font-bold">Zakat</h1>
              <div className="h-10 border-l-2 border-black"></div>
              <img
                className="w-4"
                src="images/icons/dashboard/icon_stopwatch.svg"
                alt=""
              />
              <div className="flex gap-1">
                <div className="flex flex-col items-center font-semibold">
                  <p className="text-xl">234</p>
                  <p className="text-vs">days</p>
                </div>
                <p>:</p>
                <div className="flex flex-col items-center font-semibold">
                  <p className="text-xl">234</p>
                  <p className="text-vs">days</p>
                </div>
                <p>:</p>
                <div className="flex flex-col items-center font-semibold">
                  <p className="text-xl">234</p>
                  <p className="text-vs">days</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between mt-4">
              <h1 className="text-2xl font-semibold">£240</h1>
              <button className="py-2 px-5 bg-black text-white font-semibold text-sm rounded-lg">
                Reset
              </button>
            </div>
          </div>
        </div>
        <img
          className="absolute w-11/12 -right-1/3 lg:top-1/4 top-10 z-0"
          src="images/vectors/logo_aid-humanity-icon.svg"
          alt="Aid-humanity background logo"
        />
      </div>
      {showModal ? (
        <Upload_image showModal={showModal} setshowModal={setshowModal} />
      ) : null}
    </>
  );
}

export default Appeal;
