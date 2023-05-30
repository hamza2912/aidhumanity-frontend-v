import React from 'react';
import { useSelector } from 'react-redux';
import { SERVER_URL } from '../../services/config';
import { useNavigate } from 'react-router-dom';

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
    <header class="w-full h-auto top-0 left-0 container mx-auto lg:px-20 px-4 py-3 relative">
      <nav class="w-full h-auto px-4">
        <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
          <div class="text-lg text-mont text-black-50 font-medium w-auto h-auto flex lg:flex-row flex-row-reverse gap-6 items-center">
            <a href="">
              <img
                className="w-36"
                src="images/logo/logo_aid-humanity.svg"
                alt=""
              />
            </a>
            <img
              className="w-4 cursor-pointer"
              src="images/icons/dashboard/icon_bars.svg"
              alt=""
            />
            {/* <button className="py-2 px-3 bg-blue-dark text-white font-semibold text-sm rounded-lg hidden lg:block">
              + NEW APPEAL
            </button> */}
          </div>
          <div class="w-auto gap-4 flex justify-between items-center pl-16">
            <button class="text-sm text-mont text-gray font-semibold hidden lg:block">
              En <i class="fa-solid fa-angle-down"></i>
            </button>
            <p class="text-sm text-mont text-gray font-semibold hidden lg:block">
              |
            </p>
            <a
              className="text-sm text-mont text-black font-semibold flex items-center gap-2 cursor-pointer"
              onClick={handleClick}
            >
              <img
                src={
                  user?.avatar_link
                    ? `${SERVER_URL + user.avatar_link}`
                    : '/Icons/user-circle-white.svg'
                }
                alt="thumbnail"
                className="w-6 h-full rounded-full"
              />
              <span>{user ? 'Dashboard' : 'My Account'} </span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
