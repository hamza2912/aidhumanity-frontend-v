import React from 'react';
import { Audio, ThreeDots } from 'react-loader-spinner';

function Loader({
  type = 'audio',
  visible = true,
  width = '40',
  height = '40',
}) {
  return (
    <div className="flex justify-center item-center h-100vh">
      {type === 'threeDots' ? (
        <ThreeDots
          height={height}
          width={width}
          radius="10"
          color="#00ade9"
          ariaLabel="three-dots-loading"
          visible={visible}
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
        />
      )}
    </div>
  );
}

export default Loader;
