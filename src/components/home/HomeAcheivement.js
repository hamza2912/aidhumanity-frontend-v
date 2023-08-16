import React from 'react';
import { currencyFormatter } from '../../utils';

const HomeAchievement = ({ achievements }) => {
  React.useEffect(() => {
    window.$('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
          margin: 20,
        },
      },
    });
  }, []);

  return (
    <section
      className="w-full h-auto mt-16 bg-gray-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full h-auto px-5 pt-16 pb-10 container mx-auto">
        <div className="w-full h-auto text-center">
          <h2 className="text-mont text-black-50 text-3xl font-medium">
            <span className="text-mont text-black-50 text-3xl font-bold">
              Our Achievements
            </span>{' '}
            with your help and more …
          </h2>
        </div>
        <div
          className="owl-carousel owl-theme achievements-carousel mt-16 grid justify-between"
          data-aos="fade-right"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="item lg:w-full w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white"
            >
              <h3 className="text-sm text-mont text-black-50 font-bold flex">
                <div className="flex">
                  <img
                    src="/Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                    className="w-20px mr-4"
                  />
                </div>
                {achievement.title}
              </h3>
              <p className="text-xs text-mont text-sblue font-semibold mt-2">
                Raised:{' '}
                <span className="text-2xl text-mont text-sblue font-semibold">
                  {currencyFormatter(achievement.raised_amount)}
                </span>
              </p>
              <p className="text-xs text-mont text-gray-600 font-medium flex items-center gap-1">
                <span className="whitespace-nowrap">
                  crowded{' '}
                  {new Date(achievement.start_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span> by </span>
                <div className="flex">
                  <img
                    src="/Icons/user-circle-black.svg"
                    className="w-4 h-4"
                    alt="user-circle"
                  ></img>
                </div>{' '}
                <span className="font-semibold">
                  {achievement.supporters_count}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAchievement;
