import React, { useState } from 'react';
import DonateModal from '../../components/modal/donate_modal';
import "../../App.css";

function FixedNavigator({ appealRefs }) {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [activeLink, setActiveLink] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between fixed z-50 w-full bottom-0 right-0 sm:px-32 bg-white">
      <ul className="flex px-8 space-x-8 w-full bg-f9 sm:bg-white text-[1.2rem] font-medium sm:font-semibold tracking-[-0.18px] text-black">
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

      <div className="px-8 flex justify-between items-center">
        <img src="./Icons/cross.svg" className="sm:hidden w-4"></img>
        <div className="flex space-x-8 items-center">
          <p className="text-[2rem] font-bold tracking-[-0.5px] text-black whitespace-nowrap">£4.342</p>
          <button onClick={() => setshowDonateModal(true)} className="whitespace-nowrap px-8 py-3 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
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
  );
}

export default FixedNavigator;
