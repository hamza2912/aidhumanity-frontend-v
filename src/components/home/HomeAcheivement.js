import React from 'react';
import { currencyFormatter } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { textTruncate } from '../../constants';

const HomeAchievement = ({ achievements }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    window.$('.achievements-carousel').owlCarousel({
      loop: false,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          stagePadding: 10,
        },
        600: {
          items: 3,
          nav: false,
          stagePadding: 10,
        },
        1000: {
          items: 4,
          nav: true,
          loop: false,
          margin: 30,
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
      <div className="w-full h-auto px-5 py-14 container mx-auto">
        <div className="w-full h-auto text-center">
          <h2 className="text-mont text-black-50 text-[26px] lg:text-3xl font-medium">
            <span className="font-bold">Our Achievements</span> with your help
            and more …
          </h2>
        </div>
        <div
          className="owl-carousel owl-theme achievements-carousel mt-10 lg:mt-16 grid justify-between"
          data-aos="fade-right"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="item lg:w-full px-6 h-36 flex flex-col justify-center mb-4 rounded-xl bg-white shadow-md"
            >
              <h3 className="text-[16px] text-mont text-black-50 font-bold flex">
                <div className="flex">
                  <img
                    src="/Icons/icon_check-circle.svg"
                    alt="icon_check-circle"
                    className="w-20px mr-4"
                  />
                </div>
                <span title={achievement.title}>
                  {textTruncate(achievement.title, 18)}
                </span>
              </h3>
              <p className="text-[11px] text-mont text-sblue font-semibold mt-2">
                Raised:{' '}
                <span className="text-2xl text-mont text-sblue font-semibold">
                  {currencyFormatter(achievement.raised_amount)}
                </span>
              </p>
              <div className="text-[10px] text-mont text-gray-600 font-medium flex items-center gap-1">
                <span className="whitespace-nowrap">
                  launched{' '}
                  {new Date(achievement.start_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <span> by </span>
                <div className="flex">
                  <img
                    src="/Icons/user-circle-black.svg"
                    className="w-4 h-4"
                    alt="user icon"
                  ></img>
                </div>{' '}
                <span
                  className="font-bold hover:text-primary cursor-pointer"
                  onClick={() => navigate(`/appeal/${achievement.id}`)}
                >
                  {achievement.supporters_count} supporters
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAchievement;
