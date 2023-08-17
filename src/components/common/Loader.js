import React from 'react';
import { Audio, ThreeDots } from 'react-loader-spinner';

function Loader({
  type = 'audio',
  visible = true,
  width = '40',
  height = '40',
  color = '#00ade9',
  classNames = '',
  buttonloader = false,
}) {
  return (
    <div
      className={`flex justify-center items-center ${
        !buttonloader ? (type === 'threeDots' ? 'h-[50vh]' : 'h-screen') : ''
      }`}
    >
      {type === 'threeDots' ? (
        <ThreeDots
          height={height}
          width={width}
          radius="10"
          color={color}
          ariaLabel="three-dots-loading"
          visible={visible}
          className={classNames}
        />
      ) : (
        <Audio
          height="20"
          width="20"
          radius="1"
          color="#102558"
          ariaLabel="tail-spin-loading"
          wrapperStyle
          wrapperClass
          visible={visible}
          className={classNames}
        />
      )}
    </div>
  );
}

export default Loader;
