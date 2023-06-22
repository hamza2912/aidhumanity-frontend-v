import React, { useEffect } from 'react';
import { currencyFormatter } from '../../utils';
import dayjs from 'dayjs';
import { formatDateRange } from '../../constants';

const HomeUpcomingEvent = ({ upcomingEvents }) => {
  useEffect(() => {
    window.$('.events-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
          margin: 20,
        },
      },
    });
  }, []);
  return (
    <section class="w-full h-auto my-12">
      <div class="w-full h-auto container mx-auto px-5">
        <div class="w-full h-auto text-center">
          <h1 class="text-3xl text-mont text-black-50 font-bold">
            Upcoming Events
          </h1>
        </div>
        <div class="w-full h-auto mt-10">
          <div class="owl-carousel events-carousel owl-theme space-x-4">
            {upcomingEvents.map((upcomingEvent, index) => (
              <div
                class="item lg:w-full  px-4 py-5  border-2 rounded-2xl text-gray-300 bg-white"
                key={index}
              >
                <div class="w-full h-auto flex items-center justify-between">
                  <div class="w-2/3 h-auto">
                    <p class="text-mont text-nblue text-xs font-semibold">
                      {dayjs(upcomingEvent.start_at).format('MMMM YYYY')}
                    </p>
                    <h3 class="text-mont text-3xl font-semibold text-blue">
                      {formatDateRange(
                        upcomingEvent.start_at,
                        upcomingEvent.end_at
                      )}
                    </h3>
                  </div>
                  <div class="w-6 h-auto flex items-center">
                    <img
                      src="/Icons/icon_calendar-clock.svg"
                      alt="icon_calendar-clock"
                    />
                  </div>
                </div>
                <div class="w-full h-20 border-b-2 border-gray-200 mt-2">
                  <h1 class="text-mont text-sm text-black-50 font-bold">
                    {upcomingEvent.title}
                  </h1>
                </div>
                <div class="w-full h-auto flex items-center mt-4">
                  <span class="text-mont text-xs font-semibold text-green">
                    FR Target:
                  </span>
                  <p class="text-mont text-xl font-semibold text-green ml-2">
                    {currencyFormatter(upcomingEvent.targerted_amount)}
                  </p>
                </div>
                <div class="w-full h-auto flex items-center mt-1">
                  <span class="text-mont text-xs font-semibold text-gray">
                    Reg Fee:
                  </span>
                  <p class="text-mont text-xl font-semibold text-gray ml-1">
                    £300
                  </p>
                </div>
                <div className="w-full h-auto mt-4 flex justify-center mt-8">
                  <button className="text-sm text-nblue text-mont font-bold px-6 py-2 border-2 border-fyellow rounded-xl">
                    MORE INFO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex lg:justify-end justify-center container mx-auto lg:-mt-10 mt-4">
          <a
            href="/appeals"
            className="text-center text-nblue text-mont font-medium text-sm border-2 border-lgray rounded-lg px-4 py-2 hover:border-dgray hover:bg-dgray hover:text-white z-10"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeUpcomingEvent;
