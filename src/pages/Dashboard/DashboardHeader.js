import React from 'react';
import { useSelector } from 'react-redux';
import { SERVER_URL } from '../../services/config';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as User } from '../../images/user-circle-black.svg';

const DashboardHeader = () => {
  const { user } = useSelector(state => state.session);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="w-full h-auto top-0 left-0 container mx-auto lg:px-20 px-4 py-3 relative">
      <nav className="w-full h-auto px-4">
        <div className="w-full h-auto py-4 flex flex-row justify-between items-center">
          <div className="text-lg text-mont text-black-50 font-medium w-auto h-auto flex lg:flex-row flex-row-reverse gap-6 items-center">
            <Link to="">
              <img
                className="w-36"
                src="images/logo/logo_aid-humanity.svg"
                alt=""
              />
            </Link>
            <img
              className="w-4 cursor-pointer"
              src="images/icons/dashboard/icon_bars.svg"
              alt=""
            />
            {/* <button className="py-2 px-3 bg-blue-dark text-white font-semibold text-sm rounded-lg hidden lg:block">
              + NEW APPEAL
            </button> */}
          </div>
          <div className="w-auto gap-4 flex justify-between items-center pl-16">
            <button className="text-sm text-mont text-gray hover:text-dgray font-semibold hidden lg:block">
              En <i className="fa-solid fa-angle-down"></i>
            </button>
            <p className="text-sm text-mont text-gray font-semibold hidden lg:block">
              |
            </p>
            <Link
              className="hover-button text-sm text-mont text-black font-semibold flex items-center gap-2 cursor-pointer"
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
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
