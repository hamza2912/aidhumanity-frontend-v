import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { textTruncate } from '../../constants';
import CircularProgressBar from '../../pages/AppealDetails/CircularProgressBar';
import { currencyFormatter } from '../../utils';
import { getDonationTag, convertToTitleCase } from '../../constants';
import { ReactComponent as User } from '../../images/icon_user_circle.svg';
import { isMobile } from 'react-device-detect';
import Image from '../common/Image';

const AppealCard = ({
  appeal,
  index,
  hoveredAppealId,
  setHoveredAppealId,
  setSelectedAppealId,
  setshowDonateModal,
  isCampaign,
}) => {
  const navigate = useNavigate();
  const { type = 'appeal' } = appeal;
  const appealPath = `/${type}/${appeal.id}`;
  return (
    <div
      className="h-auto rounded-b-2xl rounded-t-2xl shadow-md bg-white"
      key={index}
    >
      <div className="relative">
        <Link to={appealPath}>
          <div className="w-full rounded-t-2xl appeal-card overflow-hidden border border-px">
            <Image
              classNames="w-full h-full object-fit rounded-t-xl"
              url={appeal.cover_image}
              alt="carousel_image_1"
              type="appeals"
            />
          </div>
          <div className="w-auto bg-black absolute lg:right-5 lg:top-5 right-3 top-3 px-4 py-2 rounded-xl bg-opacity-60">
            <p className="text-gray-300 hover:text-white font-medium">
              {appeal.category?.name}{' '}
            </p>
          </div>
        </Link>
      </div>
      <div className="px-4 lg:pl-10 lg:pr-6 pt-6 pb-5">
        <div className="h-36">
          <h2 className="lg:text-xl text-2xl font-bold text-mont text-black-50">
            {appeal.title}
          </h2>
          <p className="text-base text-mont text-gray-600 mt-2 h-24 overflow-hidden">
            {textTruncate(appeal.description, 160)}
          </p>
        </div>
        {appeal.donations_count > 0 ? (
          <div className="flex flex-row items-center mt-4 h-12">
            <div className="w-1/5 mr-2">
              <CircularProgressBar
                percentage={
                  appeal.targeted_amount === 0 || !appeal.targeted_amount
                    ? '100'
                    : Math.round(
                        (appeal.raised_amount / appeal.targeted_amount) * 100
                      )
                }
                style={{
                  width: isMobile ? '3.3rem' : '4rem',
                  height: isMobile ? '3.3rem' : '4rem',
                  fontSize: '0.9rem',
                }}
              />
            </div>
            <div className="w-full flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="text-[10px] text-mont text-blue font-bold">
                  Raised: {currencyFormatter(appeal.raised_amount)}
                </span>
                <div className="flex items-center gap-1 text-[10px] text-mont text-lblack">
                  <span className="font-medium">by </span>
                  <div
                    className="hover-button font-semibold hover:text-sblue cursor-pointer flex items-center gap-1"
                    onClick={() =>
                      navigate(`/appeal/${appeal.id}`, {
                        state: { scrollToRecentDonors: true },
                      })
                    }
                  >
                    <User className="icon w-4 rounded-full" />{' '}
                    <span>{appeal.donations_count}</span>
                    <span>supporters</span>
                  </div>
                </div>
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
                    <span className="cursor-pointer font-bold">
                      {getDonationTag(appeal.appeal_tag)}
                    </span>
                  </div>
                  {hoveredAppealId === appeal.id && (
                    <div className="bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg border absolute -top-16 -right-16">
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
          <button
            className="text-center text-xs text-white hover:bg-dgray p-4 bg-gray-mate rounded-lg mt-4 h-12 w-full"
            onClick={() => {
              setSelectedAppealId(appeal.id);
              setshowDonateModal(true);
            }}
          >
            No donation yet, be the first!
          </button>
        )}
        <div className="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-100">
          <Link
            className="text-mont text-nblue hover:text-black font-bold text-sm"
            to={appealPath}
          >
            Read More
          </Link>
          <button
            className="text-xs font-bold text-white bg-blue hover:bg-dblue rounded-lg px-5 py-3"
            onClick={() => navigate(appealPath)}
          >
            DONATE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppealCard;
