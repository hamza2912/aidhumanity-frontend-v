import React, { useEffect } from 'react';
import { currencyFormatter } from '../../utils';
import dayjs from 'dayjs';
import { formatDateRange } from '../../constants';
import { useNavigate } from 'react-router-dom';

const HomeUpcomingEvent = ({ upcomingEvents }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.$('.events-carousel').owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: true,
          stagePadding: 50,
        },
        600: {
          items: 2,
          nav: false,
          stagePadding: 50,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
          margin: 0,
        },
        1200: {
          items: 5,
          nav: true,
          loop: false,
          margin: 0,
        },
        1450: {
          items: 6,
          nav: true,
          loop: false,
          margin: 0,
        },
      },
    });
  }, []);
  return (
    <section className="w-full h-auto my-12">
      <div className="w-full h-auto container mx-auto px-5">
        <div className="w-full h-auto text-center lg:pt-6">
          <h1 className="text-3xl text-mont text-black-50 font-bold">
            Upcoming Events
          </h1>
        </div>
        <div className="w-full h-auto lg:mt-10 mt-2">
          <div className="owl-carousel events-carousel owl-theme pt-4">
            {upcomingEvents.map((upcomingEvent, index) => (
              <div
                className="item lg:w-56 w-60 px-4 py-5 events-item border rounded-2xl text-gray-300 bg-white transition-transform lg:shadow-none shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                key={index}
              >
                <div className="w-full h-auto flex items-center justify-between">
                  <div className="w-2/3 h-auto">
                    <p className="text-mont text-nblue text-xs font-semibold">
                      {dayjs(upcomingEvent.start_at).format('MMMM YYYY')}
                    </p>
                    <h3 className="text-mont text-3xl font-semibold text-blue">
                      {formatDateRange(
                        upcomingEvent.start_at,
                        upcomingEvent.end_at
                      )}
                    </h3>
                  </div>
                  <div className="w-6 h-auto flex items-center">
                    <img
                      src="/Icons/icon_calendar-clock.svg"
                      alt="icon_calendar-clock"
                    />
                  </div>
                </div>
                <div className="w-full h-20 border-b-2 border-gray-200 mt-2">
                  <h1 className="text-mont text-base text-black-50 font-bold">
                    {upcomingEvent.title}
                  </h1>
                </div>
                <div className="w-full h-auto flex items-center mt-2">
                  <span className="text-mont text-xs font-semibold text-green">
                    FR Target:
                  </span>
                  <p className="text-mont text-xl font-semibold text-green ml-2">
                    {currencyFormatter(upcomingEvent.targerted_amount)}
                  </p>
                </div>
                <div className="w-full h-auto flex items-center mt-1">
                  <span className="text-mont text-xs font-semibold text-gray">
                    Reg Fee:
                  </span>
                  <p className="text-mont text-xl font-semibold text-gray ml-1">
                    £300
                  </p>
                </div>
                <div className="w-full h-auto mt-4 flex justify-center mt-2">
                  <button
                    className="text-sm text-nblue text-mont font-bold px-6 py-2 border-2 border-fyellow rounded-xl hover:bg-yellow hover:text-black"
                    onClick={() => navigate(`/appeal/${upcomingEvent.id}`)}
                  >
                    MORE INFO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex lg:justify-end justify-center container mx-auto lg:-mt-8 mt-5 lg:pb-2">
          <a
            href="/appeals"
            className="text-center text-nblue text-mont font-medium text-sm border border-lgray rounded-lg px-4 py-2 hover:border-dgray hover:bg-dgray hover:text-white z-10"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeUpcomingEvent;
