import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../services/config';
import { textTruncate } from '../constants';
import { currencyFormatter } from '../utils';
import { AppealTags } from '../constants';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgressBar from '../pages/AppealDetails/CircularProgressBar';
import { convertToTitleCase } from '../constants/index';
import { getDonationTag } from '../constants';
import { ReactComponent as User } from "../images/icon_user_circle.svg";

function AppealSlider({ appeals = [], setshowDonateModal, setSelectedAppealId }) {
  const [showbadge, setshowbadge] = React.useState(false);
  const navigate = useNavigate();
  const [showBadgeArr, setShowBadgeArr] = useState(
    new Array(appeals.length).fill([])
  );
  
  function handleMouseEnter(index) {
    // Toggle the showBadgeArr value for the clicked element
    setShowBadgeArr(showBadgeArr => {
      const updatedArr = [...showBadgeArr];
      updatedArr[index] = !updatedArr[index];
      return updatedArr;
    });
  }

  function handleMouseLeave(index) {
    setShowBadgeArr(showBadgeArr => {
      const updatedArr = [...showBadgeArr];
      updatedArr[index] = !updatedArr[index];
      return updatedArr;
    });
  }

  useEffect(() => {
    window.$('.appeal-section-carousel').owlCarousel({
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
    <>
      <div className="owl-carousel owl-theme appeal-section-carousel w-full h-auto flex items-center 
        justify-around bg-transparent z-10 gap-4">
        {appeals.map((appeal, index) => {
          const {
            targeted_amount,
            raised_amount,
            category,
            title,
            description,
            story,
            offline_donations,
            end_at,
            appeal_tag,
            cover_image,
            donations_count,
            id,
          } = appeal;

          return (
            <div className="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
              <div className="relative">
                <Link to={`/appeal/${appeal.id}`}>
                <img
                  className="rounded-t-xl max-h-230 w-100 appeal-card"
                  src={SERVER_URL + cover_image}
                  alt="carousel_image_1"
                />
                <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                  <p className="text-gray-400 font-medium"> {category?.name}</p>
                </div>
                </Link>
              </div>
              <div className="pl-10 pr-6 pt-8 pb-6">
                <div className="lg:h-36 h-auto">
                  <h2 className="text-xl font-bold text-mont text-black-50">
                    {title}
                  </h2>
                  <p className="lg:text-base text-sm text-mont text-gray-600 mt-2">
                    {textTruncate(description, 80)}
                  </p>
                </div>
                {donations_count > 0 ? (
                  <div className="flex flex-row items-center mt-4 h-12">
                    <div className="w-1/5 mr-4 sm:mr-2">
                      <CircularProgressBar
                        percentage={Math.round(
                          (raised_amount / targeted_amount) * 100
                        )}
                        style={{
                          width: '4rem',
                          height: '4rem',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                    <div className="w-full flex justify-between mt-2">
                      <div className="flex flex-col">
                        <span className="text-[11px] text-mont text-blue font-bold">
                          Raised: {currencyFormatter(raised_amount)}
                        </span>
                        <div className='flex items-center gap-1 text-[11px] text-mont text-lblack'>
                          <span className='font-medium'>by{' '}</span>
                          <div className="hover-button font-semibold hover:text-sblue cursor-pointer flex 
                            items-center gap-1"
                            onClick={() => navigate(`/appeal/${id}`, { state: { scrollToRecentDonors: true } })}
                          >
                            < User className='icon w-4 rounded-full' />{' '}
                            <span>
                              {donations_count}
                            </span>
                            <span>
                              supporters
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        <span className="text-[11px] text-mont text-green font-semibold">
                          Goal: {currencyFormatter(targeted_amount)}
                        </span>
                        <div className="w-5">
                          <div
                            className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                          >
                            <span className="cursor-default">
                              {getDonationTag(appeal_tag)}
                            </span>
                          </div>
                          {showBadgeArr[index] && (
                            <div className="bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg absolute -top-20 -right-16">
                              <p className="text-sm text-gray-600">
                                This appeal is {convertToTitleCase(appeal_tag)}{' '}
                                applicable.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button className="text-center text-xs text-white hover:bg-dgray p-4 bg-gray-mate rounded-lg mt-4 h-12 w-full"
                    onClick={() => {
                      setSelectedAppealId(appeal.id);
                      setshowDonateModal(true);
                    }}
                  >
                    No donation yet, be the first!  
                  </button>
                )}
                <div className="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
                <Link
                  className="text-mont text-nblue hover:text-black font-bold text-xs"
                  to={`/appeal/${appeal.id}`}
                >
                  Read More
                </Link>
                  <button
                    className="text-xs font-bold text-white bg-blue hover:bg-dblue rounded-lg px-4 py-3 cursor-pointer"
                    onClick={() => {
                      setSelectedAppealId(appeal.id);
                      setshowDonateModal(true);
                    }}
                  >
                    DONATE NOW
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
        <div className="relative">
          <img
            className="rounded-t-xl"
            src="/images/rf1110721-somali-refugee-family-in-yemen-1200x800-images.png"
            alt="carousel_image_2"
          />
          <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
            <p className="text-gray-400 font-medium">Water for All </p>
          </div>
        </div>
        <div className="px-10 pt-8 pb-6">
          <div className="lg:h-36 h-auto">
            <h2 className="text-xl font-bold text-mont text-black-50">
              Yemen Emergency
            </h2>
            <p className="lg:text-base text-sm text-mont text-gray-600 mt-2">
              More than 1,500 people killed and 2 million homes partially or
              completely destroyed following the Yemen Floods of 2022.
            </p>
          </div>
          <div className="flex flex-row items-center mt-4 h-12 relative">
            <div className="w-1/5 mr-4">
              <img src="/Icons/loader-large.svg" alt="loader-large" />
            </div>
            <div className="w-2/3 flex flex-col">
              <span className="text-sm text-mont text-blue font-bold">
                Raised: £934
              </span>
              <span className="text-xs text-mont text-gray-600 font-bold mt-1">
                by <i className="fa-regular fa-circle-user"></i> 34 supporters
              </span>
            </div>
            <div className="w-1/3 flex flex-col items-end">
              <span className="text-xs text-mont text-green font-semibold">
                Goal: £984
              </span>
              <div
                className="w-5 mt-1"
                onMouseEnter={() => {
                  setshowbadge(true);
                }}
                onMouseLeave={() => {
                  setshowbadge(false);
                }}
              >
                <img
                  src="/Icons/badge_sadhaka-jaraiyah.svg"
                  alt="badge_sadhaka-jaraiyah"
                />
              </div>
            </div>
            {showbadge ? (
              <div className="w-3/5 bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg absolute -top-20 -right-16">
                <p className="text-sm text-gray-600">
                  This appeal is Sadaka Jaraiya applicable.
                </p>
              </div>
            ) : null}
          </div>
          <div className="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
            <a className="text-mont text-nblue font-bold text-xs" href="">
              Read More
            </a>
            <button className="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
              DONATE NOW
            </button>
          </div>
        </div>
      </div> */}
        
      </div>
      <div className="flex lg:justify-end justify-center container mx-auto mt-6 lg:-mt-9">
        <Link
          to="/appeals"
          className="transition-colors duration-300 ease-in-out text-center text-nblue text-mont font-medium 
            text-sm border-2 border-lgray rounded-lg px-4 py-2 hover:border-dgray hover:bg-dgray 
            hover:text-white"
        >
          View All
        </Link>
      </div>
    </>
  );
}

export default AppealSlider;