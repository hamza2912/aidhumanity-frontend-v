import React, { useEffect, useMemo } from 'react';
import DonateModal from '../../components/modal/donate_modal';

function FixedNavigator({ handleClick, storyRef, aboutRef, summaryRef }) {
  const [showDonateModal, setshowDonateModal] = React.useState(false);

  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between fixed z-50 w-full bottom-0 right-0 px-8 sm:px-32 bg-white">
      <ul className="flex space-x-12 w-full bg-white text-[1.2rem] font-medium tracking-[-0.18px] text-black">
        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]" onClick={() => {
            storyRef.current.scrollIntoView({ behavior: 'smooth' });
          }}>Story
        </li>

        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]" onClick={() => {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
          }}>About
        </li>

        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]" onClick={() => {
          summaryRef.current.scrollIntoView({ behavior: 'smooth' });
          }}>Summary
        </li>
      </ul>

      <div className="flex justify-between items-center">
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
