import React from 'react';
import Loader from './Loader';

const ButtonLoader = ({
  onClick,
  text,
  children,
  loading,
  className = 'py-3',
  loaderColor = '#ffffff', // Default loader color (white)
  loaderClass = 'scale-100', // Default loader scale
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl ${className}`}
      disabled={disabled}
    >
      {loading ? (
        <Loader
          type="threeDots"
          height="auto"
          width="30"
          color={` ${loaderColor} ${className}`}
          classNames={loaderClass}
          buttonloader
        />
      ) : (
        <>
          <span className="transition-transform transform hover:scale-0.2">
            {text || children}
          </span>
        </>
      )}
    </button>
  );
};

export default ButtonLoader;
