import React, { useState } from 'react';
import DonateModal from '../../components/modal/donate_modal';
import "../../App.css";

function FixedNavigator({ appealRefs }) {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [activeLink, setActiveLink] = useState(false);

  return (
    <div className='fixed z-50 w-full bottom-0 right-0 bg-white'>
      <nav className="flex flex-col sm:flex-row sm:justify-between py-2 bg-white container mx-auto lg:px-16 px-5">
        <ul className="flex space-x-8 w-full bg-f9 sm:bg-white text-0.75 font-medium sm:font-semibold tracking-[-0.18px] text-black">
          <li className={`cursor-pointer py-4 border-b-4 ${activeLink === 0 ? 'border-sblue' : 'border-bottom-white'}`} onClick={() => {
              setActiveLink(0);
              appealRefs[0].current.scrollIntoView({ behavior: 'smooth' });
            }}>Story
          </li>
          <li className={`cursor-pointer py-4 border-b-4 ${activeLink === 1 ? 'border-sblue' : 'border-bottom-white'}`} onClick={() => {
              setActiveLink(1);
            appealRefs[1].current.scrollIntoView({ behavior: 'smooth' });
            }}>About
          </li>
          <li className={`cursor-pointer py-4 border-b-4 ${activeLink === 2 ? 'border-sblue' : 'border-bottom-white'}`} onClick={() => {
              setActiveLink(2);
            appealRefs[2].current.scrollIntoView({ behavior: 'smooth' });
            }}>Summary
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <img src="./Icons/cross.svg" className="sm:hidden w-4"></img>
          <div className="flex space-x-8 items-center">
            <p className="text-1.25 font-bold tracking-[-0.5px] text-black whitespace-nowrap">£4.342</p>
            <button onClick={() => setshowDonateModal(true)} className="whitespace-nowrap p-4 sm:px-6 sm:py-2 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-lg">
              Donate now
            </button>
          </div>
          {showDonateModal ? (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            quick={false}
          />
        ) : null}
        </div>
      </nav>
    </div>
  );
}

export default FixedNavigator;
