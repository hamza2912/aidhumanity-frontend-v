import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer({ notification }) {
  const navigate = useNavigate();

  return (
    <footer class="w-full h-auto bg-nblue relative overflow-hidden">
      <div
        className={
          notification
            ? 'lg:absolute static -top-12 w-full h-auto lg:px-20 px-2 flex lg:flex-row flex-col gap-4'
            : 'lg:absolute static -top-12 w-full h-auto lg:px-20 px-2 flex lg:flex-row flex-col gap-4 hidden'
        }
      >
        <div class="lg:w-1/4 w-full h-auto px-4 py-2 bg-lgreen border-2 shadow-lg border-green rounded-2xl flex gap-2 items-center">
          <img
            src="/Icons/illustration_fundraiser-hand.svg"
            alt="illustration_fundraiser-hand"
          />
          <div class="h-auto flex flex-col justify-between">
            <h3 class="text-mont text-sm text-lblack font-bold">
              We’ve Ready!
            </h3>
            <p class="text-mont text-xs text-l2black">
              Your donation has been added to checkout and is ready the moment
              you are. Thanks so much for joining us in making a difference.
            </p>
          </div>
        </div>
        <div class="lg:w-1/4 w-full h-auto px-4 py-2 bg-orange border-2 shadow-lg border-orange rounded-2xl flex gap-2 items-center">
          <img src="/Icons/illustration_bug.svg" alt="illustration_bug" />
          <div class="h-auto flex flex-col justify-between">
            <h3 class="text-mont text-sm text-lblack font-bold">
              Oh no, there’s Bug!
            </h3>
            <p class="text-mont text-xs text-l2black">
              Please contact us directly so we can put this right without delay.
              We appreciate your patience.
            </p>
          </div>
        </div>
        <div class="lg:w-1/4 w-full h-auto px-4 py-2 bg-orange border-2 shadow-lg border-orange rounded-2xl flex gap-2 items-center">
          <img
            src="/Icons/illustration_no-payment.svg"
            alt="illustration_no-payment"
          />
          <div class="h-auto flex flex-col justify-between">
            <h3 class="text-mont text-sm text-lblack font-bold">
              Oh no, your Payment Failed!
            </h3>
            <p class="text-mont text-xs text-l2black">
              Please contact us directly so we can put this right without delay.
              We appreciate your patience.
            </p>
          </div>
        </div>
        <div class="lg:w-1/4 w-full h-auto px-4 py-2 py-2 bg-white border-2 shadow-lg border-gray-400 rounded-2xl flex gap-2 items-start">
          <img src="/Icons/illustration_cookie.svg" alt="illustration_cookie" />
          <div class="h-auto flex flex-col justify-between">
            <h3 class="text-mont text-sm text-lblack font-bold">
              Can we use Cookies?
            </h3>
            <p class="text-mont text-xs text-l2black w-4/5 my-2">
              They help our site run at 100% efficiency but you can opt out.
            </p>
            <button class="w-3/5 px-4 py-2 bg-sblue rounded-lg text-center text-mont text-sm text-white font-bold">
              CLICK HERE
            </button>
          </div>
        </div>
      </div>
      <div class="w-full h-auto px-5 pt-24 pb-8 container mx-auto relative">
        <div class="w-full h-auto">
          <p class="text-footer text-mont text-xs">
            Aid Humanity is a UK registered charity 1184639.
          </p>
        </div>
        <div class="w-full h-auto mt-4 flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between items-center">
          <div class="lg:w-1/3 w-full h-auto py-4">
            <div class="w-full h-auto flex items-center justify-between">
              <img
                src="/Icons/logo_aid-humanity-vertical-icon-end.svg"
                alt="logo"
              />
              <div class="px-4">
                <button class="flex flex-row items-center text-blue text-mont font-bold text-sm">
                  <img
                    class="mr-2"
                    src="/Icons/icon_phone-volume.svg"
                    alt="Phone"
                  />
                  0330 057 9957
                </button>
                <p class="text-mont text-fyellow lg:text-lg text-xs font-semibold mt-4">
                  info@aidhumanity.co.uk
                </p>
                <div class="lg:w-full w-4/5 h-auto flex justify-between items-center mt-8 ml-4 lg:ml-0">
                  <a href="">
                    <img
                      className="w-3"
                      src="/Icons/logo_facebook.svg"
                      alt="logo_facebook"
                    />
                  </a>
                  <a href="">
                    <img
                      className="w-6"
                      src="/Icons/logo_twitter.svg"
                      alt="logo_twitter"
                    />
                  </a>
                  <a href="">
                    <img
                      className="w-6"
                      src="/Icons/logo_instagram.svg"
                      alt="logo_instagram"
                    />
                  </a>
                  <a href="">
                    <img
                      className="w-6"
                      src="/Icons/logo_linkedin.svg"
                      alt="logo_linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full h-auto mt-8">
              <p class="text-base text-mont text-footer">
                Aid Humanity is proud to be a non-profit organization that
                passes 100% of our donations to charitable -top-1/4 around the
                world.
              </p>
            </div>
            <div class="w-full h-auto flex items-center mt-12">
              <p class="text-white text-mont text-xs">Registered with</p>
              <img
                class="ml-3"
                src="/Icons/logo_fundraising-regulator.svg"
                alt="logo_fundraising-regulator"
              />
            </div>
          </div>
          <div class="lg:w-1/3 w-full h-auto flex justify-between lg:px-4">
            <div class="w-1/2 h-auto">
              <h2 class="text-mont text-white text-sm font-semibold">
                ABOUT US
              </h2>
              <div class="w-full h-auto flex flex-col mt-4">
                <a
                  class="text-footer text-mont text-base font-medium"
                  onClick={() => navigate('/story')}
                >
                  Our Story
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/marketing')}
                >
                  Marketing
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/blogs')}
                >
                  Blog
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/zakat')}
                >
                  Zakat
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href="#"
                >
                  Get Involved
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/contact')}
                >
                  Contact
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href="#"
                >
                  Donate
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/how_it_works')}
                >
                  How it works
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/fundraiser')}
                >
                  Become a Fundraiser
                </a>
              </div>
            </div>
            <div class="w-1/2 h-auto invisible">
              <h2 class="text-mont text-white text-sm font-semibold">
                APPEALS
              </h2>
              <div class="w-full h-auto flex flex-col mt-4">
                <a class="text-footer text-mont text-base font-medium" href="">
                  Build a Mosque
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href=""
                >
                  Disaster & Emergency
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href=""
                >
                  Appeals
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href=""
                >
                  Water for All
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href=""
                >
                  Sponsor an Orphan
                </a>
                <a
                  class="text-footer text-mont text-base font-medium mt-2"
                  href=""
                >
                  Hunger Appeal
                </a>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 w-full h-auto">
            <h2 class="text-white text-sm text-mont font-semibold">
              NEWSLETTER
            </h2>
            <h1 class="text-white text-lg text-mont font-bold mt-4 lg:w-4/5 w-full">
              Subscribe to the free newsletter and stay up to date
            </h1>
            <form class="w-full h-auto flex items-center mt-4 gap-4" action="">
              <input
                class="lg:w-3/5 w-4/5 h-auto bg-white text-gray text-sm text-mont p-3 border-2 rounded-lg z-10 focus:outline-none"
                type="text"
                name=""
                id=""
                placeholder="Your email"
              />
              <button class="bg-sblue rounded-lg py-3 px-5 text-white">
                <i class="fa-solid fa-arrow-right z-10"></i>
              </button>
            </form>
            <div class="flex flex-row justify-between items-center lg:mt-32 mt-12">
              <p class="text-lg text-white text-mont">we transfer</p>
              <img
                class="w-1/3 mx-2"
                src="/Icons/logo_100percent.svg"
                alt="logo_100percent"
              />
              <p class="text-xs text-white text-mont">of your donation</p>
            </div>
          </div>
        </div>
        <div class="w-full h-auto flex items-center justify-center mt-8 py-4 border-b-2 border-lgray">
          <div class="lg:w-1/3 w-full h-auto flex justify-between">
            <a
              class="text-footer text-xs text-mont"
              onClick={() => navigate('/terms')}
            >
              Terms & Conditions
            </a>
            <a
              class="text-footer text-xs text-mont"
              onClick={() => navigate('/privacy')}
            >
              Privacy Policy
            </a>
            <a
              class="text-footer text-xs text-mont"
              onClick={() => navigate('/donation_policy')}
            >
              Donation Policy
            </a>
            <a
              class="text-footer text-xs text-mont"
              onClick={() => navigate('/refund_policy')}
            >
              Refund Policy
            </a>
          </div>
        </div>
        <div class="w-full h-auto mt-4 py-4 flex lg:flex-row flex-col justify-between items-center">
          <div class="lg:w-1/2 w-full h-auto">
            <p class="text-white text-mont text-xs text-center lg:text-left">
              © 2022 <span class="font-semibold">Aid Humanity</span>. All rights
              reserved.
            </p>
          </div>
          <div class="lg:w-1/2 w-full h-auto flex lg:justify-end justify-center mt-5 lg:mt-0">
            <div class="lg:w-1/2 w-4/5 h-auto flex justify-between z-10">
              <img src="/Icons/logo_visa.svg" alt="logo_visa" />
              <img src="/Icons/symbol_maestro.svg" alt="symbol_maestro" />
              <img src="/Icons/logo_paypal.svg" alt="logo_paypal" />
              <img src="/Icons/logo_stripe.svg" alt="logo_stripe" />
            </div>
          </div>
        </div>
        <svg
          className="absolute w-2/5 -right-20 -top-6 z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="565.582"
          height="756.5"
          viewBox="0 0 465.582 606.5"
        >
          <g
            id="logo_aid-humanity-icon"
            transform="translate(0.5)"
            opacity="0.05"
          >
            <path
              id="Path_70532"
              data-name="Path 70532"
              d="M151.182,171.194A85.568,85.568,0,0,1,75.69,45.624a85.562,85.562,0,1,1,151.271,80h0A85.651,85.651,0,0,1,151.182,171.194Zm.2-123.8A38.214,38.214,0,1,0,185.1,103.49h0A38.247,38.247,0,0,0,151.381,47.4Zm54.647,67.161h0Z"
              transform="translate(80.943 0)"
              fill="#FFFFFF"
            />
            <path
              id="Union_1"
              data-name="Union 1"
              d="M215.338,410.359,40.351,235.3a137.947,137.947,0,0,1,0-194.982C93.1-12.443,178.337-13.43,232.288,37.408c53.957-50.838,139.166-49.85,191.905,2.913a137.857,137.857,0,0,1,0,194.982,23.669,23.669,0,1,1-33.465-33.48,90.5,90.5,0,1,0-127.984-128L249.026,87.554l-.031.025-84.637,84.664a23.688,23.688,0,0,1-33.5-33.505l67.787-67.776A90.432,90.432,0,0,0,73.872,201.822L248.821,376.854a23.684,23.684,0,1,1-33.483,33.505Zm61.783-56.27-81.977-82a23.688,23.688,0,1,1,33.5-33.505L310.6,320.609a23.675,23.675,0,1,1-33.483,33.48Zm58.488-61.628-78.857-78.886a23.68,23.68,0,0,1,33.5-33.48l78.838,78.887a23.673,23.673,0,1,1-33.477,33.48Z"
              transform="translate(0 188.703)"
              fill="#FFFFFF"
              stroke="rgba(0,0,0,0)"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
