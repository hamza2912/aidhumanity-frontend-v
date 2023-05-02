import React from 'react';
import { getDonationTag } from '../../constants';

export const AppealTagBadge = ({ appealTag }) => {
  return (
    <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs">
      <span className="cursor-default">{getDonationTag(appealTag)}</span>
    </div>
  );
};
