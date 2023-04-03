import React from 'react';
import { Audio } from 'react-loader-spinner';

function Loader() {
  return (
    <Audio
      height="20"
      width="20"
      radius="1"
      color="#102558"
      ariaLabel="tail-spin-loading"
      wrapperStyle
      wrapperClass
      visible={true}
    />
  );
}

export default Loader;
