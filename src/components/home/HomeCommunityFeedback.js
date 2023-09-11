import React from 'react';

const HomeCommunityFeedback = () => {
  return (
    <section className="w-full h-auto mt-12 bg-o2white" data-aos="fade-right">
      <div className="w-full h-auto px-5 py-16 container mx-auto">
        <div
          className="w-full h-auto text-center"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
        >
          <h1 className="text-3xl text-mont text-black-50 font-bold">
            Here’s what our community has to say
          </h1>
        </div>

        <div className="w-full h-auto grid lg:grid-cols-3 grid-cols-1 gap-4 justify-between lg:mt-16 mt-12">
          <div className="bg-white h-auto rounded-xl p-8 relative">
            <img
              className="absolute top-0 left-0"
              src="./Icons/shape_testimonial-horizontal.svg"
              alt="shape_testimonial-horizontal"
            />
            <p className="text-gray-600 text-mont text-sm h-28">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
            <div className="flex flex-row">
              <div className="w-11 h-auto flex items-center">
                <img src="./images/kid.png" alt="kid" />
              </div>
              <div className="w-80 h-auto ml-3 flex items-center justify-between">
                <div>
                  <p className="text-blue text-mont font-bold text-lg">
                    Andrew
                  </p>
                  <p className="text-xs text-mont text-gray font-medium">
                    6 years old
                  </p>
                </div>
                <img
                  className="w-8"
                  src="./Icons/icon_quote-right-filled.svg"
                  alt="icon_quote-right-filled"
                />
              </div>
            </div>
          </div>
          <div className="bg-white h-auto rounded-xl p-8 relative">
            <img
              className="absolute top-0 left-0"
              src="./Icons/shape_testimonial-horizontal.svg"
              alt="shape_testimonial-horizontal"
            />
            <p className="text-gray-600 text-mont text-sm h-28">
              Suspendisse quis nulla cursus, elementum eros quis, consequat
              tortor. Nullam sed ex vel mi dignissim molestie id at est. Integer
              feugiat gravida purus, vel ultrices mauris.
            </p>
            <div className="flex flex-row">
              <div className="w-11 h-auto flex items-center">
                <img src="./images/UN0241710.png" alt="kid" />
              </div>
              <div className="w-80 h-auto ml-3 flex items-center justify-between">
                <div>
                  <p className="text-blue text-mont font-bold text-lg">
                    Sumayia
                  </p>
                  <p className="text-xs text-mont text-gray font-medium">
                    8 years old
                  </p>
                </div>
                <img
                  className="w-8"
                  src="./Icons/icon_quote-right-filled.svg"
                  alt="icon_quote-right-filled"
                />
              </div>
            </div>
          </div>
          <div className="bg-white h-auto rounded-xl p-8 relative">
            <img
              className="absolute top-0 left-0"
              src="./Icons/shape_testimonial-horizontal.svg"
              alt="shape_testimonial-horizontal"
            />
            <p className="text-gray-600 text-mont text-sm h-28">
              Donec non justo diam. Fusce egestas diam sit amet turpis
              condimentum, vel imperdiet lectus aliquam. Nunc malesuada enim
              viverra eros laoreet, eget tincidunt erat aliquet.
            </p>
            <div className="flex flex-row">
              <div className="w-11 h-auto flex items-center">
                <img src="./images/childhijab.png" alt="kid" />
              </div>
              <div className="w-80 h-auto ml-3 flex items-center justify-between">
                <div>
                  <p className="text-blue text-mont font-bold text-lg">
                    Zakyia
                  </p>
                  <p className="text-xs text-mont text-gray font-medium">
                    9 years old
                  </p>
                </div>
                <img
                  className="w-8"
                  src="./Icons/icon_quote-right-filled.svg"
                  alt="icon_quote-right-filled"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCommunityFeedback;
