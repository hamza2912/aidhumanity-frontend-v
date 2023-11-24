import React from 'react';
import LinearProgressBar from './LinearProgressBar';
import { AppealTagBadge } from './AppealTagBadge';
import Image from '../../components/common/Image';

export const Fundraisers = ({ campaigns }) => {
  return (
    <div className="w-full flex flex-col lg:px-6 px-4 py-8">
      {campaigns.map((campaign, index) => (
        <div className="flex gap-4 mt-2" key={index}>
          <Image
            url={campaign.cover_image}
            classNames="rounded-xl h-full"
            containerClass={'w-24 rounded-xl h-full'}
            logoClass="w-50 h-50"
          />
          <div className="w-full flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <h2 className="lg:text-base text-sm font-bold text-black-50">
                {campaign.title}
              </h2>
              <AppealTagBadge appealTags={campaign.appeal_tags} />
            </div>
            <p className="text-vs text-gray-300 font-medium mt-2">
              {campaign.category.name}
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
                    £{campaign.raised_amount / 100 || 0}
                  </span>
                  /{campaign.targeted_amount / 100 || 0}
                </p>
                <div className="h-3 w-1 border-l-2 border-dgray"></div>
                <img src="/Icons/icon_user_circle_gray.svg" alt="icon-user" />
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
