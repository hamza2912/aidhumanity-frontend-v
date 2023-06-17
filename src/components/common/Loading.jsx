import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="h-100vh w-100  relative">
      <img
        src="/images/bg-blue-circle.svg"
        alt="bg-blue"
        data-aos="zoom-in"
        className="absolute -top-20 -left-10"
      />
      <img
        data-aos="zoom-in"
        src="/images/bg-yellow-particle.svg"
        alt="bg-yellow"
        className="absolute right-40 top-10"
      />
      <div className="absolute top-40 left-40" data-aos="fade-up">
        <img src="/images/bg-yellow-dot.svg" alt="bg-yellow" className="" />
      </div>
      <div className="absolute bottom-40 right-20" data-aos="zoom-out">
        <img src="/images/bg-blue-dot.svg" alt="bg-yellow" className="" />
      </div>
      <div className="flex justify-center items-center h-full flex-col">
        <div data-aos="fade-right">
          <img
            src="/logo/logo_aid-humanity-horizontal-icon-middle.svg"
            alt="logo"
            style={{ height: '200px' }}
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="mt-5"
        >
          <p className="text-lg text-nblue font-semibold">
            We <strong className="text-sblue">Serve</strong> the{' '}
            <strong className="text-yellow">Humanity</strong>
          </p>
          <div className="flex justify-center">
            <ThreeDots
              height="40"
              width="40"
              radius="10"
              color="#00ade9"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
