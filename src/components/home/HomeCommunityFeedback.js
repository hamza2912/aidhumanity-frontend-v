import React from 'react';

const HomeCommunityFeedback = () => {
  return (
    <section className="w-full h-auto mt-12 bg-o2white" data-aos="fade-right">
      <div className="w-full h-auto px-5 pt-16 pb-16 container mx-auto">
        <div
          className="w-full h-auto text-center"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl text-mont text-black-50 font-bold">
            Here’s what our community has to say
          </h1>
        </div>

        <div className="w-full h-auto grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-7 justify-between lg:mt-16 mt-10">
          <div className="bg-white h-auto rounded-xl p-8 relative shadow-md">
            <img
              className="absolute top-0 left-0"
              src="/Icons/shape_testimonial-horizontal.svg"
              alt="shape_testimonial-horizontal"
            />
            <p className="text-gray-600 text-mont text-sm h-30 lg:mb-0 mb-1">
              I always donate to aid humanity and i been doing that for many
              years the best charity i came across, they do some amazing charity
              work around the world and I am proud of them
            </p>
            <div className="flex flex-row w-full justify-between">
              <div className="h-auto flex items-center">
                <img src="/images/kid.png" alt="kid" />
                <div className="ml-3">
                  <p className="text-blue text-mont font-bold text-lg">
                    Andrew
                  </p>
                  <p className="text-xs text-mont text-gray font-medium">
                    1 Month old
                  </p>
                </div>
              </div>
              <img
                className="w-8"
                src="/Icons/icon_quote-right-filled.svg"
                alt="icon_quote-right-filled"
              />
            </div>
          </div>
          <div className="bg-white h-auto rounded-xl p-8 relative shadow-md">
            <img
              className="absolute top-0 left-0"
              src="/Icons/shape_testimonial-horizontal.svg"
              alt="shape_testimonial-horizontal"
            />
            <p className="text-gray-600 text-mont text-sm h-30 lg:mb-0 mb-1">
              Keep up the tremendous work and relentless effort to relieve
              people of the hunger, pain, and overall hardship they continuously
              endure. You guys are awesome! We see first hand where our
              donations go. You have my support!.
            </p>
            <div className="flex flex-row w-full justify-between">
              <div className="h-auto flex items-center">
                <img src="/images/UN0241710.png" alt="kid" />
                <div className="ml-3">
                  <p className="text-blue text-mont font-bold text-lg">
                    Sumayia
                  </p>
                  <p className="text-xs text-mont text-gray font-medium">
                    2 Months old
                  </p>
                </div>
              </div>
              <img
                className="w-8"
                src="/Icons/icon_quote-right-filled.svg"
                alt="icon_quote-right-filled"
              />
            </div>
          </div>
          <div className="bg-white h-auto rounded-xl p-8 relative shadow-md">
            <img
              className="absolute top-0 left-0"
              src="/Icons/shape_testimonial-horizontal.svg"
              alt="shape_testimonial-horizontal"
            />
            <p className="text-gray-600 text-mont text-sm h-30 lg:mb-0 mb-1">
              I'm inspired by the work you do and your passion for making Huge
              difference in peoples life’s acroSS the world.
            </p>
            <div className="flex flex-row w-full justify-between">
              <div className="h-auto flex items-center">
                <img src="/images/childhijab.png" alt="kid" />
                <div className="ml-3">
                  <p className="text-blue text-mont font-bold text-lg">
                    Zakyia
                  </p>
                  <p className="text-xs text-mont text-gray font-medium">
                    1 year old
                  </p>
                </div>
              </div>
              <img
                className="w-8"
                src="/Icons/icon_quote-right-filled.svg"
                alt="icon_quote-right-filled"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCommunityFeedback;
