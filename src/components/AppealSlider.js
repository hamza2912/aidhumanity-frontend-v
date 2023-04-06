import React, { useState } from 'react';
import { SERVER_URL } from '../services/config';
import { textTruncate } from '../constants';
import { currencyFormatter } from '../utils';
import { AppealTags } from '../constants';
import { useHistory } from 'react-router-dom';
import DonateModal from './modal/donate_modal';
import CircularProgressBar from '../pages/Appeal_details/circular_progress_bar';
import { convertToTitleCase } from "../constants/index";

function AppealSlider({ appeals = [] }) {
  const [showbadge, setshowbadge] = React.useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);
  const history = useHistory();
  const [showBadgeArr, setShowBadgeArr] = useState(new Array(appeals.length).fill([]));

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

  const getDonationSrc = 
    appealTag => {
      
      switch (appealTag) {
        case AppealTags.SADHAKA:
          return '/Icons/badge_zakat.svg';
        case AppealTags.ZAKATH:
          return '/Icons/badge_zakat.svg';
        case AppealTags.SADHAKA_JARIYA:
          return '/Icons/badge_sadhaka-jaraiyah.svg';
        default:
          return '/Icons/badge_sadhaka-jaraiyah.svg';
      }
    }

  const handleReadMore = appealId => {
    history.push(`/appeal/${appealId}`);
  };

  return (
    <div class="owl-carousel owl-theme achievements-carousel w-full h-auto flex items-center justify-around bg-transparent z-10 gap-4">
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
          <div class="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
            <div className="relative">
              <img
                className="rounded-t-xl"
                src={SERVER_URL + cover_image}
                alt="carousel_image_1"
              />
              <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                <p className="text-gray-400 font-medium"> {category?.name}</p>
              </div>
            </div>
            <div class="px-10 pt-8 pb-6">
              <div class="lg:h-36 h-auto">
                <h2 class="text-xl font-bold text-mont text-black-50">
                  {title}
                </h2>
                <p class="lg:text-base text-sm text-mont text-gray-600 mt-2">
                  {textTruncate(description, 80)}
                </p>
              </div>
              <div class="flex flex-row items-center mt-4 h-12 relative">
                <div class="w-1/5 mr-4">
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
                <div class="w-2/3 flex flex-col">
                  <span class="text-sm text-mont text-blue font-bold">
                    Raised: {currencyFormatter(raised_amount)}
                  </span>
                  <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                    by <i class="fa-regular fa-circle-user"></i>{' '}
                    {donations_count} supporters
                  </span>
                </div>
                <div class="w-1/3 flex flex-col items-end">
                  <span class="text-xs text-mont text-green font-semibold">
                    Goal: {currencyFormatter(targeted_amount)}
                  </span>
                  <div class="w-5 mt-1">
                    <img src={getDonationSrc(appeal_tag)} alt="badge_zakat" onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)} />
                    {showBadgeArr[index] ? (
                      <div className="bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg absolute -top-20 -right-16">
                        <p className="text-sm text-gray-600">
                        This appeal is {convertToTitleCase(appeal_tag)} applicable.
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div class="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
                <a
                  class="text-mont text-nblue font-bold text-xs cursor-pointer"
                  href=""
                  onClick={() => handleReadMore(id)}
                >
                  Read More
                </a>
                <button
                  class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3 cursor-pointer"
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
      {/* <div class="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
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
        <div class="px-10 pt-8 pb-6">
          <div class="lg:h-36 h-auto">
            <h2 class="text-xl font-bold text-mont text-black-50">
              Yemen Emergency
            </h2>
            <p class="lg:text-base text-sm text-mont text-gray-600 mt-2">
              More than 1,500 people killed and 2 million homes partially or
              completely destroyed following the Yemen Floods of 2022.
            </p>
          </div>
          <div class="flex flex-row items-center mt-4 h-12 relative">
            <div class="w-1/5 mr-4">
              <img src="/Icons/loader-large.svg" alt="loader-large" />
            </div>
            <div class="w-2/3 flex flex-col">
              <span class="text-sm text-mont text-blue font-bold">
                Raised: £934
              </span>
              <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                by <i class="fa-regular fa-circle-user"></i> 34 supporters
              </span>
            </div>
            <div class="w-1/3 flex flex-col items-end">
              <span class="text-xs text-mont text-green font-semibold">
                Goal: £984
              </span>
              <div
                class="w-5 mt-1"
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
          <div class="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
            <a class="text-mont text-nblue font-bold text-xs" href="">
              Read More
            </a>
            <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">
              DONATE NOW
            </button>
          </div>
        </div>
      </div> */}
      {showDonateModal ? (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
          appealId={selectedAppealId}
        />
      ) : null}
    </div>
  );
}

export default AppealSlider;
