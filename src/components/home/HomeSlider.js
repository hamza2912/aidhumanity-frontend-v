import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { currencyFormatter } from '../../utils';
import DonateModal from '../modal/DonateModal';
import { Link, useNavigate } from 'react-router-dom';
import { textTruncate } from '../../constants';

const HomeSlider = ({ appeals }) => {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId] = React.useState(null);
  const cardAppeals = appeals.length > 2 ? appeals.slice(0, 2) : appeals;

  const navigate = useNavigate();

  const handleNavigation = appeal => {
    navigate(`appeal/${appeal.id}`, { replace: true });
  };

  const myArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <Link
        onClick={onClickHandler}
        className="bg-white py-2 lg:pr-4 pr-2 lg:pl-2 h-10 z-10 rounded-r-full absolute top-0 my-auto left-0 bottom-0 hidden lg:block"
      >
        <i className="fa-solid fa-arrow-left lg:text-base text-xs" />
      </Link>
    );

  const myArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <Link
        onClick={onClickHandler}
        className="bg-white py-2 lg:pl-4 pl-2 lg:pr-2 h-10 rounded-l-full absolute top-0 bottom-0 my-auto right-0 hidden lg:block"
      >
        <i className="fa-solid fa-arrow-right lg:text-base text-xs" />
      </Link>
    );

  return (
    <section className="w-full mt-16 lg:mt-32 2xl:mt-40 h-auto landing-page relative">
      <Carousel
        renderArrowPrev={myArrowPrev}
        renderArrowNext={myArrowNext}
        showThumbs={false}
        showIndicators={true}
        emulateTouch={true}
        preventMovementUntilSwipeScrollTolerance={true}
        infiniteLoop
        autoPlay
      >
        {appeals.map(appeal => (
          <div
            className="w-full h-500px flex lg:flex-row flex-col py-20 group15343 container mx-auto lg:px-16 px-6 relative mt-20"
            key={('home-slider-item-', appeal.id)}
          >
            <div
              className="lg:w-1/2 w-full h-auto mt-24 lg:mt-0"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {appeal.category && (
                <div className="flex">
                  <button className="text-center text-sm text-mont font-medium text-white border-2 border-white hover:border-sblue hover:text-dblue rounded-lg px-2 py-1">
                    {appeal.category.name}
                  </button>
                </div>
              )}
              <div className="mt-2 text-left">
                <h1 className="lg:text-4xl text-4xl text-mont font-bold text-white shadow-2">
                  {appeal.title}
                </h1>
                {/* <h1 className="lg:text-6xl text-4xl text-mont font-bold text-white shadow-2">
                  a water well
                </h1> */}
              </div>
              <div className="mt-4 pr-2 hidden lg:flex h-28">
                <p className="text-white text-lg text-mont text-left">
                  {textTruncate(appeal.story, 180)}
                </p>
              </div>
              <div className="mt-10 flex flex-row">
                <div className="lg:w-1/3 w-1/2 h-auto flex">
                  <Link
                    href="/appeals"
                    id="cursor-pointer"
                    className="lg:text-sm text-xs font-bold text-white text-mont bg-sblue hover:bg-dblue rounded-lg p-4"
                  >
                    DONATE NOW <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
                <div
                  className="w-1/2 h-auto flex items-center"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  <h3 className="text-lg text-mont text-fyellow shadow-2">
                    from
                  </h3>
                  <h2 className="ml-2 text-lg text-mont text-fyellow font-bold shadow-2">
                    {currencyFormatter(appeal.targeted_amount)}
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-auto hidden lg:flex items-center justify-center text-mont">
              <div
                className="w-40"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div>
                  <p className="text-2xl text-white">we transfer</p>
                </div>
                <div>
                  <img src="./Icons/logo_100percent.svg" alt="100%" />
                </div>
                <div>
                  <p className="text-base text-white">of your donation</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div
        className="h-auto hidden lg:flex flex-row justify-between absolute -bottom-12 w-auto gap-10 right-20"
        // data-aos="fade-left"
      >
        {cardAppeals.map(appeal => (
          <div
            className="w-80 h-auto rounded-b-2xl shadow-2xl cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
            onClick={() => handleNavigation(appeal)}
            key={('card-slider-item-', appeal.id)}
          >
            <div>
              <img src="/images/Pakistan Floods 2022.png" alt="flood" />
            </div>
            <div className="p-4 text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl cursor-pointer">
              <div className="flex flex-row justify-between">
                {appeal.title}
                <i className="fa-solid fa-arrow-right text-blue" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {showDonateModal && (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
          appealId={selectedAppealId}
        />
      )}
    </section>
  );
};

export default HomeSlider;
