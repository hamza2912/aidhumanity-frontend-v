import React from 'react';
import { getDonationTag } from '../../constants';

export const AppealTagBadge = ({ appealTag, appealTags }) => {
  if (appealTags) {
    return (
      <div className=" flex space-x-[-1rem] rtl:space-x-reverse">
        {appealTags?.map((tag, index) => (
          <div
            key={index}
            className="relative cursor-pointer transition-transform transform-gpu group-hover:z-10"
            style={{
              zIndex: index,
              marginLeft: index !== 0 ? '-0.6rem' : '0',
            }}
          >
            <div
              className="bg-yellow rounded-full h-6 w-6 font-semibold text-xs transition-transform transform-gpu group-hover:scale-110"
              style={{
                border: '1px solid #00ade9', // Blue border color
                borderRadius: '50%',
                overflow: 'hidden', // Ensure the circle shape
              }}
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-default">
                {getDonationTag(tag)}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs">
        <span className="cursor-default">{getDonationTag(appealTag)}</span>
      </div>
    );
  }
};
