import React from 'react';
import { Audio } from 'react-loader-spinner';

function Appeal_card() {
  return (
    <div class="h-auto rounded-b-2xl py-2 shadow-lg">
      <div className="relative">
        <img
          className="w-full rounded-t-xl appeal-card"
          src={SERVER_URL + appeal.cover_image}
          alt="carousel_image_1"
        />
        <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
          <p className="text-gray-400 font-medium">
            {appeal.category.name}{' '}
          </p>
        </div>
      </div>
      <div class="px-10 pt-8 pb-6">
        <div class="lg:h-36 h-auto">
          <h2 class="text-xl font-bold text-mont text-black-50">
            {appeal.title}
          </h2>
          <p class="text-base text-mont text-gray-600 mt-2">
            {textTruncate(appeal.description)}
          </p>
        </div>
        {appeal.donations_count > 0 ? (
          <div class="flex flex-row items-center mt-4 h-12">
            <div class="w-1/5 mr-4">
              <CircularProgressBar
                percentage={Math.round(
                  (appeal.raised_amount /
                    appeal.targeted_amount) *
                    100
                )}
                style={{
                  width: '4rem',
                  height: '4rem',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div class="w-2/3 flex flex-col">
              <span class="text-sm text-mont text-blue font-bold">
                Raised: {currencyFormatter(appeal.raised_amount)}
              </span>
              <span class="text-xs text-mont text-gray-600 font-bold mt-1">
                by <i class="fa-regular fa-circle-user"></i>{' '}
                {appeal.donations_count} supporters
              </span>
            </div>
            <div class="w-1/3 flex flex-col items-end">
              <span class="text-xs text-mont text-green font-semibold">
                Goal: {currencyFormatter(appeal.targeted_amount)}
              </span>
              <div class="w-5 mt-1">
                {/* <img
                  src={getDonationSrc(appeal.appeal_tag)}
                  alt="badge_zakat"
                /> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-xs text-white p-4 bg-gray-mate rounded-2xl  mt-4 h-12">
            <p>No donation yet, be the first!</p>
          </div>
        )}
        <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
          <a
            class="text-mont text-nblue font-bold text-xs"
            href=""
            onClick={() => handleReadMore(appeal.id)}
          >
            Read More
          </a>
          <button
            class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3"
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
}

export default Appeal_card;
