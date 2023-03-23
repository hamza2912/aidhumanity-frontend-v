import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';

function Thankyou() {
  return (
    <>
      <Header />

      <main>
        <div class="w-full h-auto py-8 bg-bwhite">
          <h1 class="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Congratulations!
          </h1>
        </div>
        <section class="w-full h-auto bg-owhite p-5">
          <div class="w-full h-auto flex justify-center container mx-auto">
            <div class="w-full lg:w-3/5 h-auto z-10 bg-white rounded-2xl p-6 mt-5 lg:mb-20">
              <div class="w-full h-auto flex justify-center items-center relative">
                <img
                  class="lg:w-1/5 w-1/4 h-auto rounded-full"
                  src="./images/Group 17405-square.png"
                  alt="Group 17405"
                />
                <img
                  class="absolute flex items-center left-0 right-0 mx-auto lg:w-20 w-12"
                  src="./logo/logo_aid-humanity-icon.svg"
                  alt="logo_aid-humanity-icon"
                />
              </div>
              <div class="w-full h-auto text-center lg:px-20 px-4 mt-6">
                <p class="text-mont text-lg text-blue font-semibold">
                  You’ve madde a significant difference to people in need and
                  played a major part in making the world a better place.
                </p>
                <p class="text-mont text-lg text-black-50 mt-4">
                  Please continue to spread the word about this appeal, and take
                  a moment to check your summary below.
                </p>
              </div>
              <div class="w-full h-auto px-4 py-6 bg-owhite border border-lgray rounded-lg mt-4">
                <div class="w-full h-auto flex justify-between items-center border-b pb-2 border-dashed">
                  <p class="text-mont text-sm text-black-50 font-medium">
                    Rescue a street child
                  </p>
                  <p class="text-mont text-sm text-black-50 font-bold">
                    £360.00
                  </p>
                </div>
                {/* <div class="w-full h-auto flex justify-between items-center mt-4 border-b pb-2 border-dashed">
                                <p class="text-mont text-sm text-black-50 font-medium">Food pack for a family</p>
                                <p class="text-mont text-sm text-black-50 font-bold">£50.00</p>
                            </div>
                            <div class="w-full h-auto flex justify-between items-center mt-4 border-b-2 pb-6">
                                <div class="flex gap-4 items-center">
                                    <img src="./Icons/illustration_gift.svg" alt="illustration_gift" />
                                    <p class="text-mont text-sm text-black-50 font-bold">Gift Aid</p>
                                </div>
                                <p class="text-mont text-sm text-black-50 font-bold">£360.00</p>
                            </div> */}
                <div class="w-full h-auto flex justify-between items-center mt-4">
                  <p class="text-mont text-sm text-black-50 font-medium">
                    TOTAL
                  </p>
                  <p class="text-mont text-sm text-black-50 font-bold">
                    £412.25
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Thankyou;
