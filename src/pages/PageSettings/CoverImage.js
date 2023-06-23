import React, { useRef } from 'react';
import { SERVER_URL } from '../../services/config';

const CoverImage = ({ campaign, handleCoverImageChange }) => {
  const fileInputRef = useRef();

  const handleClick = e => {
    // Prevents the default behavior of the button (form submission, for example)
    e.preventDefault();

    // If the ref is defined, clicks the input
    fileInputRef.current.click();
  };

  return (
    <div className="bg-white py-8 border-b-2 rounded-b-xl">
      <p className="text-gray-600 mb-4 lg:px-6 px-4 mb-4">
        Upload a photo, select a photo from your gallery, or add a live stream
        video.
      </p>
      <div className="w-full bg-gray-dark lg:h-96 h-56 flex justify-center items-center flex-col relative">
        <img
          className={
            campaign?.cover_image
              ? 'w-full h-full opacity-80 hover:opacity-60 transition ease-in-out duration-200'
              : 'w-6 h-6'
          }
          src={
            campaign?.cover_image
              ? `${SERVER_URL + campaign.cover_image}`
              : '/images/icons/dashboard/icon_image.svg'
          }
          alt=""
        />
        {!campaign?.cover_image && (
          <p className="text-white text-center cursor-pointer mt-3">
            Click to Upload
          </p>
        )}
        <input
          type="file"
          ref={fileInputRef}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          onChange={handleCoverImageChange}
        />
        <button
          className="py-4 lg:w-1/4 w-1/2 bg-green hover:bg-mgreen text-black font-bold text-sm rounded-lg uppercase absolute bottom-8 right-8 cursor-pointer drop-shadow-md"
          onClick={handleClick}
        >
          Change Cover
        </button>
      </div>
    </div>
  );
};

export default CoverImage;
