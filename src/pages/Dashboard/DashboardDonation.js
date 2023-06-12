import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppealTagBadge } from './AppealTagBadge';
import LinearProgressBar from './LinearProgressBar';
import dayjs from 'dayjs';

const DashboardDonation = ({ setshowRowDetails, donation }) => {
  const [showModal, setShowModal] = useState(true);
  const {
    amount,
    raised_amount,
    supporters_count,
    targeted_amount,
    cause_title,
    category,
    created_at,
    appeal_tag,
  } = donation;
  const { user } = useSelector(state => state.session);
  let badge = donation.user.badge;
  let badgeImg = `/Icons/badge_${badge?.charAt(0).toUpperCase()}${badge?.slice(1)}.svg`

  return (
    <div
      className={`lg:w-80 w-full rounded-xl lg:absolute fixed right-0 lg:-right-32 lg:-top-48 top-0 shadow-xl z-50 ${
        !showModal && 'hidden'
      }`}
    >
      <div className="bg-white py-4 lg:hidden">
        <p
          onClick={() => setshowRowDetails(false)}
          className="text-[1.13rem] font-bold pl-4 flex items-center gap-2"
        >
          <img
            className="w-3 h-3"
            src="images/icons/dashboard/angle-left.svg"
            alt=""
          />{' '}
          Donation
        </p>
      </div>
      <div className="lg:rounded-t-xl w-full p-4 bg-gray-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-black-50">
            {donation.user.first_name + ' ' + donation.user.last_name}
          </h2>
          <div className="hidden sm:flex justify-center items-center w-5 h-5 rounded-full border-2 border-gray-300">
            <i
              onClick={() => setShowModal(false)}
              className="fas fa-close text-xs text-gray-300 cursor-pointer"
            ></i>
          </div>
        </div>
        <p className="text-sm text-black-50">Britain</p>
      </div>
      <div className="rounded-b-xl bg-rwhite lg:h-auto h-screen px-4 py-8 relative">
        <div className="absolute -top-8 right-4 w-16 flex flex-col items-center">
          <img class="w-full" src={badgeImg} alt="badge_in" />
          <p className="text-xs font-semibold text-black-50">
            {badge.toUpperCase()}
          </p>
        </div>

        <p className="text-vs text-gray-300 font-medium">AMOUNT</p>
        <p className="text-lg text-blue font-semibold">£{amount}</p>
        <p className="text-vs text-gray-300 font-medium mt-1">FOR APPEAL</p>
        <div className="flex gap-4">
          <div className="w-full flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <h2 className="lg:text-base text-sm font-bold text-black-50">
                {cause_title}
              </h2>
              <AppealTagBadge appealTag={appeal_tag} />
            </div>
            <p className="text-vs text-gray-300 font-medium mb-2">{category}</p>
            <LinearProgressBar
              progress={((raised_amount * 100) / targeted_amount).toFixed()}
              textPosition="right"
            />
          </div>
        </div>
        <p className="text-[11px] text-black-50 font-medium flex items-center gap-1 mt-4">
          <img src="/Icons/icon_calendar_clock.svg" className="w-5"></img>
          {dayjs(donation.created_at).format('ddd DD MMM, HH:MM')}
        </p>
      </div>
    </div>
  );
};

export default DashboardDonation;
