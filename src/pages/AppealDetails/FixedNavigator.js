import React, { useState } from 'react';
import DonateModal from '../../components/modal/DonateModal';
import '../../App.css';
import { currencyFormatter } from '../../utils';

function FixedNavigator({ appealRefs, appealId, raisedAmount }) {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="fixed z-20 w-full bottom-0 right-0 bg-white">
      <nav className="flex flex-col sm:flex-row sm:justify-between py-1 bg-white container mx-auto">
        {showLinks && (
          <ul className="flex space-x-8 w-full px-5 bg-f9 sm:bg-white text-0.75 font-medium sm:font-semibold tracking-[-0.18px] text-black">
            <li
              className={`cursor-pointer py-4 border-b-4 ${
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
              className={`cursor-pointer py-4 border-b-4 ${
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
              className={`cursor-pointer py-4 border-b-4 ${
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
        <div className="flex justify-between items-center px-5 py-3">
          <img src={`/Icons/${showLinks ? "cross" : "icon_bars"}.svg`} 
          className="sm:hidden w-4"
          onClick={()=>{setShowLinks(current=>!current)}}
          ></img>
          <div className="flex space-x-8 items-center">
            <p className="text-1.25 font-bold tracking-[-0.5px] text-black whitespace-nowrap">
              {currencyFormatter(raisedAmount)}
            </p>
            <button
              onClick={() => setshowDonateModal(true)}
              className="whitespace-nowrap p-4 sm:px-6 sm:py-2 uppercase text-[1.4rem] font-semibold text-black bg-green hover:bg-dgreen hover:text-white rounded-lg"
            >
              Donate now
            </button>
          </div>
          {showDonateModal && (
            <DonateModal
              showModal={showDonateModal}
              setshowModal={setshowDonateModal}
              appealId={appealId}
              quick={false}
            />
          )}
        </div>
      </nav>
    </div>
  );
}

export default FixedNavigator;
