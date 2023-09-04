import React from 'react';
import { SERVER_URL } from '../../services/config';

const Image = ({
  classNames,
  url,
  alt,
  logoClass = 'w-70px h-70px',
  containerClass = 'w-full',
}) => {
  return (
    <div>
      {url ? (
        <div className={`${containerClass}`}>
          <img className={`${classNames}`} alt={alt} src={SERVER_URL + url} />
        </div>
      ) : (
        <div
          className={`${containerClass} ${classNames} bg-palepink flex justify-center items-center`}
        >
          <img
            src="/logo/logo_aid-humanity-icon.svg"
            alt="aid-humanity-logo"
            className={logoClass}
          />
        </div>
      )}
    </div>
  );
};

export default Image;
