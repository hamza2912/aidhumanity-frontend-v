import React from 'react';
import AppealSlider from '../AppealSlider';

const HomeAppealSection = ({
  appeals,
  setshowDonateModal,
  setSelectedAppealId,
}) => {
  return (
    <section
      className="w-full h-auto pt-20 pb-12 relative"
      data-aos="fade-right"
    >
      <div className="w-full h-auto px-5 container mx-auto">
        <div className="w-full h-auto flex flex-row">
          <h1 className="text-3xl text-mont font-bold mr-3 text-center lg:text-left">
            Appeals{' '}
            <span className="text-3xl font-normal text-mont text-black-50">
              that need your backing
            </span>
          </h1>
        </div>
        <div className="w-full h-auto mt-16 mb-2">
          <AppealSlider
            {...{ appeals, setshowDonateModal, setSelectedAppealId }}
          />

          <div className="w-full h-64 bg-gray absolute -bottom-4 left-0 z-[-10]"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeAppealSection;
