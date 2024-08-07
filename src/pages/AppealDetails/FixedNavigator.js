import React, { useState } from 'react';
import DonateModal from '../../components/modal/DonateModal';
import '../../App.css';
import { currencyFormatter } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProjectSidebar,
  setRegularSidebar,
  setShowLogin,
  setSubscriptionSidebar,
} from '../../redux/common/CommonSlice';

function FixedNavigator({ appealRefs, appeal, raisedAmount }) {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.session);

  const handleDonateClick = () => {
    // if (!user) {
    //   dispatch(setShowLogin(true));
    //   return;
    // }
    switch (appeal.appeal_type) {
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
    }
  };

  return (
    <div className="fixed z-10 w-full bottom-0 right-0 bg-white">
      <nav className="flex flex-col sm:flex-row sm:justify-between bg-white container mx-auto">
        {showLinks && (
          <ul className="flex space-x-8 w-full px-5 bg-f9 sm:bg-white text-xs font-medium tracking-[-0.18px] text-black">
            <li
              className={`hover:text-sblue cursor-pointer py-4 border-b-4 ${
                activeLink === 0 ? 'border-sblue' : 'border-f9'
              }`}
              onClick={() => {
                setActiveLink(0);
                appealRefs[0].current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Story
            </li>
            <li
              className={`hover:text-sblue cursor-pointer py-4 border-b-4 ${
                activeLink === 1 ? 'border-sblue' : 'border-f9'
              }`}
              onClick={() => {
                setActiveLink(1);
                appealRefs[1].current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </li>
            <li
              className={`hover:text-sblue cursor-pointer py-4 border-b-4 ${
                activeLink === 2 ? 'border-sblue' : 'border-f9'
              }`}
              onClick={() => {
                setActiveLink(2);
                appealRefs[2].current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Summary
            </li>
          </ul>
        )}
        <div className="w-full flex justify-between items-center px-5 lg:py-1 py-4">
          <img
            src={`/Icons/${showLinks ? 'cross' : 'icon_bars'}.svg`}
            className="sm:hidden w-3.5"
            onClick={() => {
              setShowLinks(current => !current);
            }}
            alt="cross"
          ></img>
          <ul className="hidden sm:flex space-x-6 w-full px-5 bg-f9 sm:bg-white text-xs font-medium tracking-[-0.18px] text-black">
            <li
              className={`hover:text-sblue cursor-pointer py-4 border-b-4 ${
                activeLink === 0 ? 'border-sblue' : 'border-f9'
              }`}
              onClick={() => {
                setActiveLink(0);
                appealRefs[0].current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Story
            </li>
            <li
              className={`hover:text-sblue cursor-pointer py-4 border-b-4 ${
                activeLink === 1 ? 'border-sblue' : 'border-f9'
              }`}
              onClick={() => {
                setActiveLink(1);
                appealRefs[1].current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </li>
            <li
              className={`hover:text-sblue cursor-pointer py-4 border-b-4 ${
                activeLink === 2 ? 'border-sblue' : 'border-f9'
              }`}
              onClick={() => {
                setActiveLink(2);
                appealRefs[2].current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Summary
            </li>
          </ul>
          <div className="flex space-x-4 items-center">
            <p className="text-1.25 font-bold tracking-[-0.5px] text-black whitespace-nowrap">
              {currencyFormatter(raisedAmount)}
            </p>
            <button
              onClick={handleDonateClick}
              className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-2 uppercase text-[0.8rem] font-bold text-black bg-green hover:bg-mgreen rounded-lg"
            >
              Donate now
            </button>
          </div>
          {showDonateModal && (
            <DonateModal
              showModal={showDonateModal}
              setshowModal={setshowDonateModal}
              appealId={appeal.id}
              quick={false}
            />
          )}
        </div>
      </nav>
    </div>
  );
}

export default FixedNavigator;
