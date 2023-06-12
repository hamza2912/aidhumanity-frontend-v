import React from 'react';
import AppealSlider from '../AppealSlider';

const HomeAppealSection = ({ appeals }) => {
  return (
    <section class="w-full h-auto pt-20 pb-12 z-10 relative">
      <div class="w-full h-auto px-5 container mx-auto">
        <div class="w-full h-auto flex flex-row">
          <h1 class="text-3xl text-mont font-bold mr-3 text-center lg:text-left">
            Appeals{' '}
            <span class="text-3xl font-normal text-mont text-black-50">
              that need your backing
            </span>
          </h1>
        </div>
        <div class="w-full h-auto mt-16 mb-2">
          <AppealSlider {...{ appeals }} />

          {/* <div className='w-full h-64 bg-gray absolute bottom-0 left-0 z-0'></div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeAppealSection;
