import React from 'react';
import { SERVER_URL } from '../../services/config';
import LinearProgressBar from './LinearProgressBar';
import { AppealTagBadge } from './AppealTagBadge';

export const Fundraisers = ({ campaigns }) => {
  return (
    <div className="w-full flex flex-col lg:px-6 px-4 py-8">
      {campaigns.map((campaign, index) => (
        <div className="flex gap-4 mt-2" key={index}>
          <img
            className="w-1/4 rounded-xl"
            src={SERVER_URL + campaign.cover_image}
            alt="campaignimage"
          />
          <div className="w-full flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <h2 className="lg:text-base text-sm font-bold text-black-50">
                {campaign.title}
              </h2>
              <AppealTagBadge appealTag={campaign.appeal_tag} />
            </div>
            <p className="text-vs text-gray-300 font-medium mt-2">
              {campaign.category}
            </p>
            <div className="mt-2">
              <LinearProgressBar
                progress={(
                  (campaign.raised_amount * 100) /
                  campaign.targeted_amount
                ).toFixed()}
                textPosition="bottom"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2 items-center w-auto">
                <p className="text-xs lg:text-sm font-semibold text-gray-300">
                  <span className="text-blue">
                    £{campaign.raised_amount / 100 || 0} /{' '}
                  </span>
                  {campaign.targeted_amount / 100 || 0}
                </p>
                <div class="h-3 w-1 border-l-2 border-dgray"></div>
                <img src="/Icons/icon_user_circle.svg"></img>
                <p className="text-gray-600 lg:text-sm text-xs font-medium flex gap-1 items-center">
                  {campaign.supporters_count || 0} supporters
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
