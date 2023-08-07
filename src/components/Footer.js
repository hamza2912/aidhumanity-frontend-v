import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as BackgroundImage } from '../images/footer-bg-image.svg';

function Footer({ notification }) {
  const navigate = useNavigate();

  return (
    <footer className="w-full h-auto bg-nblue relative overflow-hidden">
      <div
        className={
          notification
            ? 'lg:absolute static -top-12 w-full h-auto lg:px-20 px-2 flex lg:flex-row flex-col gap-4'
            : 'lg:absolute static -top-12 w-full h-auto lg:px-20 px-2 flex lg:flex-row flex-col gap-4 hidden'
        }
      >
        <div className="lg:w-1/4 w-full h-auto px-4 py-2 bg-lgreen border-2 shadow-lg border-green rounded-2xl flex gap-2 items-center">
          <img
            src="/Icons/illustration_fundraiser-hand.svg"
            alt="illustration_fundraiser-hand"
          />
          <div className="h-auto flex flex-col justify-between">
            <h3 className="text-mont text-sm text-lblack font-bold">
              We’ve Ready!
            </h3>
            <p className="text-mont text-xs text-l2black">
              Your donation has been added to checkout and is ready the moment
              you are. Thanks so much for joining us in making a difference.
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 w-full h-auto px-4 py-2 bg-orange border-2 shadow-lg border-orange rounded-2xl flex gap-2 items-center">
          <img src="/Icons/illustration_bug.svg" alt="illustration_bug" />
          <div className="h-auto flex flex-col justify-between">
            <h3 className="text-mont text-sm text-lblack font-bold">
              Oh no, there’s Bug!
            </h3>
            <p className="text-mont text-xs text-l2black">
              Please contact us directly so we can put this right without delay.
              We appreciate your patience.
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 w-full h-auto px-4 py-2 bg-orange border-2 shadow-lg border-orange rounded-2xl flex gap-2 items-center">
          <img
            src="/Icons/illustration_no-payment.svg"
            alt="illustration_no-payment"
          />
          <div className="h-auto flex flex-col justify-between">
            <h3 className="text-mont text-sm text-lblack font-bold">
              Oh no, your Payment Failed!
            </h3>
            <p className="text-mont text-xs text-l2black">
              Please contact us directly so we can put this right without delay.
              We appreciate your patience.
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 w-full h-auto px-4 py-2 py-2 bg-white border-2 shadow-lg border-gray-400 rounded-2xl flex gap-2 items-start">
          <img src="/Icons/illustration_cookie.svg" alt="illustration_cookie" />
          <div className="h-auto flex flex-col justify-between">
            <h3 className="text-mont text-sm text-lblack font-bold">
              Can we use Cookies?
            </h3>
            <p className="text-mont text-xs text-l2black w-4/5 my-2">
              They help our site run at 100% efficiency but you can opt out.
            </p>
            <button className="w-3/5 px-4 py-2 bg-sblue rounded-lg text-center text-mont text-sm text-white font-bold">
              CLICK HERE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-5 pt-24 lg:pb-8 container mx-auto relative">
        <div className="w-full h-auto">
          <p className="text-white opacity-50 text-mont text-xs">
            Aid Humanity is a UK registered charity 1184639.
          </p>
        </div>
        <div className="w-full h-auto mt-4 flex lg:flex-row flex-col lg:gap-10 gap-5 justify-between items-center">
          <div className="lg:w-1/3 mt-5 lg:mt-0 w-full h-auto py-4">
            <div className="w-full h-auto flex items-center justify-between">
              <img
                src="/Icons/logo_aid-humanity-vertical-icon-end.svg"
                alt="logo"
              />
              <div className="px-4">
                <button className="flex flex-row items-center text-blue text-mont font-bold text-sm">
                  <img
                    className="mr-2"
                    src="/Icons/icon_phone-volume.svg"
                    alt="Phone"
                  />
                  0330 057 9957
                </button>
                <p className="text-mont text-fyellow lg:text-lg text-xs font-semibold mt-4">
                  info@aidhumanity.co.uk
                </p>
                <div className="lg:w-full w-4/5 h-auto flex justify-between items-center mt-8 ml-4 lg:ml-0">
                  <Link to="">
                    <img
                      className="w-3"
                      src="/Icons/logo_facebook.svg"
                      alt="logo_facebook"
                    />
                  </Link>
                  <Link to="">
                    <img
                      className="w-6"
                      src="/Icons/logo_twitter.svg"
                      alt="logo_twitter"
                    />
                  </Link>
                  <Link to="">
                    <img
                      className="w-6"
                      src="/Icons/logo_instagram.svg"
                      alt="logo_instagram"
                    />
                  </Link>
                  <Link to="">
                    <img
                      className="w-6"
                      src="/Icons/logo_linkedin.svg"
                      alt="logo_linkedin"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-auto mt-8">
              <p className="text-base text-mont text-white opacity-50">
                Aid Humanity is proud to be a non-profit organization that
                passes 100% of our donations to charitable causes around the
                world.
              </p>
            </div>
            <div className="w-full h-auto flex items-center mt-12">
              <p className="text-white text-mont text-xs">Registered with</p>
              <img
                className="ml-3 bluish-icon"
                src="/Icons/logo_fundraising-regulator.svg"
                alt="logo_fundraising-regulator"
              />
            </div>
          </div>
          <div className="lg:w-1/3 w-full h-auto flex justify-between lg:px-4">
            <div className="w-1/2 h-auto">
              <h2 className="text-mont text-white text-sm font-semibold">
                ABOUT US
              </h2>
              <div className="w-full h-auto flex flex-col mt-4">
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium"
                  onClick={() => navigate('/story')}
                >
                  Our Story
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/marketing')}
                >
                  Marketing
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/blogs')}
                >
                  Blog
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/zakat')}
                >
                  Zakat
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to="#"
                >
                  Get Involved
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/contact')}
                >
                  Contact
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to="#"
                >
                  Donate
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/how_it_works')}
                >
                  How it works
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  onClick={() => navigate('/fundraiser')}
                >
                  Become a Fundraiser
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-auto invisible">
              <h2 className="text-mont text-white text-sm font-semibold">
                APPEALS
              </h2>
              <div className="w-full h-auto flex flex-col mt-4">
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium"
                  to=""
                >
                  Build a Mosque
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to=""
                >
                  Disaster & Emergency
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to=""
                >
                  Appeals
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to=""
                >
                  Water for All
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to=""
                >
                  Sponsor an Orphan
                </Link>
                <Link
                  className="text-white opacity-50 text-mont text-base font-medium mt-2"
                  to=""
                >
                  Hunger Appeal
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full h-auto mt-8 lg:mt-0">
            <h2 className="text-white text-sm text-mont font-semibold">
              NEWSLETTER
            </h2>
            <h1 className="text-white text-lg text-mont font-bold mt-4 lg:w-4/5 w-full">
              Subscribe to the free newsletter and stay up to date
            </h1>
            <form
              className="w-full h-auto flex items-center mt-4 gap-4"
              action=""
            >
              <input
                className="lg:w-3/5 w-4/5 h-auto bg-white text-gray text-sm text-mont p-3 border-2 rounded-lg focus:outline-none"
                type="text"
                name=""
                id=""
                placeholder="Your email"
              />
              <button className="bg-sblue rounded-lg py-3 px-5 text-white">
                <i className="fa-solid fa-arrow-right z-10"></i>
              </button>
            </form>
            <div className="flex flex-row justify-between items-center lg:mt-32 mt-12">
              <p className="text-lg text-white text-mont">we transfer</p>
              <img
                className="w-1/3 mx-2"
                src="/Icons/logo_100percent.svg"
                alt="logo_100percent"
              />
              <p className="text-xs text-white text-mont">of your donation</p>
            </div>
            <div className="lg:hidden w-full h-auto flex justify-center mt-10">
              <div className="lg:w-1/2 w-full h-auto flex justify-between">
                <img
                  src="/Icons/logo_visa.svg"
                  className="bluish-icon"
                  alt="logo_visa"
                />
                <img
                  src="/Icons/symbol_maestro.svg"
                  className="bluish-icon"
                  alt="symbol_maestro"
                />
                <img
                  src="/Icons/logo_paypal.svg"
                  className="bluish-icon"
                  alt="logo_paypal"
                />
                <img
                  src="/Icons/logo_stripe.svg"
                  className="bluish-icon"
                  alt="logo_stripe"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center mt-8 py-4 border-b border-platinum opacity-70">
          <div className="lg:w-1/3 w-full h-auto flex justify-between flex-wrap">
            <Link
              className="text-white opacity-50 text-xs text-mont"
              onClick={() => navigate('/terms')}
            >
              Terms & Conditions
            </Link>
            <Link
              className="text-white opacity-50 text-xs text-mont"
              onClick={() => navigate('/privacy')}
            >
              Privacy Policy
            </Link>

            <Link
              className="text-white opacity-50 text-xs text-mont"
              onClick={() => navigate('/refund')}
            >
              Refund Policy
            </Link>
            <Link
              className="text-white opacity-50 text-xs text-mont"
              onClick={() => navigate('/donation_policy')}
            >
              Donation Policy
            </Link>
          </div>
        </div>
        <div className="w-full h-auto lg:mt-4 py-5 flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-1/2 w-full h-auto">
            <p className="text-white opacity-50 text-mont text-xs">
              © 2022 <span className="font-semibold">Aid Humanity</span>. All
              rights reserved.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-auto hidden lg:flex lg:justify-end justify-center mt-5 lg:mt-0">
            <div className="lg:w-1/2 w-4/5 h-auto flex justify-between">
              <img
                src="/Icons/logo_visa.svg"
                className="bluish-icon"
                alt="logo_visa"
              />
              <img
                src="/Icons/symbol_maestro.svg"
                className="bluish-icon"
                alt="symbol_maestro"
              />
              <img
                src="/Icons/logo_paypal.svg"
                className="bluish-icon"
                alt="logo_paypal"
              />
              <img
                src="/Icons/logo_stripe.svg"
                className="bluish-icon"
                alt="logo_stripe"
              />
            </div>
          </div>
        </div>
        <BackgroundImage />
      </div>
    </footer>
  );
}

export default Footer;
