import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../../services/config';
import { textTruncate } from '../../constants';
import CircularProgressBar from '../../pages/AppealDetails/CircularProgressBar';
import { currencyFormatter } from '../../utils';
import { getDonationTag, convertToTitleCase } from '../../constants';

const AppealCard = ({
  appeal,
  index,
  hoveredAppealId,
  setHoveredAppealId,
  setSelectedAppealId,
  setshowDonateModal,
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="h-auto rounded-b-2xl py-2 shadow-lg" key={index}>
      <div className="relative">
        <Link to={`/appeal/${appeal.id}`}>
          <img
            className="w-full rounded-t-xl appeal-card"
            src={SERVER_URL + appeal.cover_image}
            alt="carousel_image_1"
          />
          <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
            <p className="text-gray-400 hover:text-white font-medium">
              {appeal.category?.name}{' '}
            </p>
          </div>
        </Link>
      </div>
      <div className="pl-10 pr-6 pt-8 pb-6">
        <div className="lg:h-36 h-auto">
          <h2 className="text-xl font-bold text-mont text-black-50">
            {appeal.title}
          </h2>
          <p className="text-base text-mont text-gray-600 mt-2">
            {textTruncate(appeal.description)}
          </p>
        </div>
        {appeal.donations_count > 0 ? (
          <div className="flex flex-row items-center mt-4 h-12">
            <div className="w-1/5 mr-2">
              <CircularProgressBar
                percentage={Math.round(
                  (appeal.raised_amount / appeal.targeted_amount) * 100
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
                  Raised: {currencyFormatter(appeal.raised_amount)}
                </span>
                <span className="text-[11px] text-mont text-lblack font-medium flex gap-1"
                  onClick={() => navigate(`/appeal/${appeal.id}`, { state: { scrollToRecentDonors: true } })}
                >
                  by{' '}
                  <img
                    src="/Icons/icon_user_circle_gray.svg"
                    className="w-4"
                    alt="icon_user_circle_gray"
                  />{' '}
                  <span className="font-semibold">
                    {appeal.donations_count} supporters
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-1 items-end">
                <span className="text-[11px] text-mont text-green font-semibold">
                  Goal: {currencyFormatter(appeal.targeted_amount)}
                </span>
                <div className="w-5">
                  <div
                    className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs"
                    onMouseEnter={() => setHoveredAppealId(appeal.id)}
                    onMouseLeave={() => setHoveredAppealId(null)}
                  >
                    <span className="cursor-default">
                      {getDonationTag(appeal.appeal_tag)}
                    </span>
                  </div>
                  {hoveredAppealId === appeal.id && (
                    <div className="bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg absolute -top-20 -right-16">
                      <p className="text-sm text-gray-600">
                        This appeal is {convertToTitleCase(appeal.appeal_tag)}{' '}
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
        <div className="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
          <Link
            className="text-mont text-nblue hover:text-black font-bold text-xs"
            to={`/appeal/${appeal.id}`}
          >
            Read More
          </Link>
          <button
            className="text-xs font-bold text-white bg-blue hover:bg-dblue rounded-lg px-4 py-3"
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
};

export default AppealCard;
