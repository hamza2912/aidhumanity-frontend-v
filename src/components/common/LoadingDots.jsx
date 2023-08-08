import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Header from '../Header';
import Footer from '../Footer';
import HeaderAppeal from './../HeaderAppeal';

const LoadingDots = ( {showHeaderAppeal} ) => {
  console.log("showHeaderAppeal:", showHeaderAppeal)
  return (
    <div className="flex flex-col relative">
      { !showHeaderAppeal ? <Header /> : <HeaderAppeal hideNavigator /> }
      <div className='h-screen flex justify-center items-center'>
        <ThreeDots
          height="80"
          width="80"
          radius="10"
          color="#00ade9"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default LoadingDots;