import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { currencyFormatter } from '../../utils';
import DonateModal from '../modal/DonateModal';
import { Link, useNavigate } from 'react-router-dom';
import { textTruncate } from '../../constants';
import Image from '../common/Image';
import { SERVER_URL } from '../../services/config';

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
    <section className="w-full mt-16 lg:mt-32 h-auto landing-page relative">
      <Carousel
        renderArrowPrev={myArrowPrev}
        renderArrowNext={myArrowNext}
        showThumbs={false}
        showIndicators={true}
        emulateTouch={true}
        preventMovementUntilSwipeScrollTolerance={true}
        infiniteLoop
        autoPlay
        showStatus={false}
      >
        {appeals.map(appeal => (
          <div
            className="w-full h-500px flex lg:flex-row flex-col py-8  container mx-auto 
              lg:px-16 px-5 relative lg:my-16 overflow-hidden lg:overflow-visible"
            key={('home-slider-item-', appeal.id)}
            style={{ backgroundImage: SERVER_URL + appeal.cover_image }}
          >
            

            <div
              className="w-full h-auto mt-36 lg:mt-3 absolute bottom-28 lg:static"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              {appeal.category && (
                <div className="flex">
                  <button
                    className="text-center text-sm text-mont font-medium text-white border-2 
                    border-white hover:border-sblue hover:text-dblue rounded-lg px-4 py-1 opacity-70"
                  >
                    {appeal.category.name}
                  </button>
                </div>
              )}
              <h1
                className="mt-2 lg:mt-4 text-left lg:text-[60px] leading-[3rem]
                lg:leading-[4.5rem] text-[40px] text-mont font-bold text-white shadow-2 lg:min-h-36"
              >
                {appeal.title.split(' ')[0]} <br />{' '}
                {appeal.title.split(' ').slice(1).join(' ')}
              </h1>
              <p
                className="mt-4 hidden lg:flex lg:w-1/2 2xl:w-1/2 text-white text-lg text-mont 
                text-left opacity-80 min-h-[5.5rem]"
              >
                {textTruncate(appeal.story, 180)}
              </p>
              <div className="mt-6 lg:mt-16 flex gap-8">
                <div className="flex">
                  <Link
                    to={`/appeal/${appeal.id}`}
                    id="cursor-pointer"
                    className="lg:text-sm text-xs font-bold text-white text-mont bg-sblue 
                      hover:bg-dblue rounded-lg pl-6 pr-4 py-4 whitespace-nowrap"
                  >
                    DONATE NOW <i className="fa-solid fa-arrow-right ml-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-1/6 h-auto hidden lg:flex items-center justify-center text-mont">
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
      <div className="container mx-auto relative">
        <div
          className="h-auto hidden lg:flex flex-row justify-between absolute -bottom-[4.5rem] w-auto gap-10 right-5"
          // data-aos="fade-left"
        >
          {cardAppeals.map(appeal => (
            <div
              className="w-80 h-auto rounded-b-2xl shadow-md cursor-pointer transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl z-10"
              onClick={() => handleNavigation(appeal)}
              key={('card-slider-item-', appeal.id)}
            >
              <Image
                classNames="h-32 rounded-t-2xl w-full object-cover"
                url={appeal.cover_image}
              />
              <div className="p-6 text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl cursor-pointer">
                <div className="flex flex-row justify-between">
                  {appeal.title}
                  <img
                    src="/Icons/icon_arrow_right_sblue.svg"
                    alt="arrow right"
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDonateModal && (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
          appealId={selectedAppealId}
        />
      )}
      <img
        src="/Icons/blue_ring.svg"
        className="absolute lg:right-12 -right-16 top-32 lg:top-16 blue-ring"
        alt="blue-ring"
      ></img>
      <img
        src="/Icons/yellow_ring_small.svg"
        alt="yellow-ring"
        className="absolute lg:block lg:bottom-32 bottom-3/4 left-1/2 lg:left-1/3 yellow-ring hidden"
      ></img>
      <div className='w-20 h-20 absolute lg:hidden bottom-3/4 left-1/2 yellow-ring-new rounded-full'></div>
      <img
        src="/Icons/circle_blue.svg"
        alt="blue-circle"
        className="absolute top-20 left-1/3 blue-circle lg:block hidden"
      ></img>
      <img
        src="/Icons/circle_blue.svg"
        alt="blue-circle"
        className="w-8 h-8 absolute lg:left-1/2 left-0 lg:-ml-32 -ml-4 lg:bottom-10 -bottom-4 blue-circle"
      ></img>
    </section>
  );
};

export default HomeSlider;
