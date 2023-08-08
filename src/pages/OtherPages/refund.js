import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Refund() {
  return (
    <>
      <Header />
      <main className="mt-16 lg:mt-32">
        <div className="w-full h-auto py-8 lg:py-16 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            <img className="mr-2" src="./Icons/icon_help.svg" alt="icon_help" />
            Help Centre
          </h1>
        </div>
        <section className="w-full h-auto container mx-auto px-5 mt-12">
          <div className="w-full h-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link
              className="text-base text-mont text-gray-600 font-semibold"
              to=""
            >
              Help Centre
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Refund Policy
            </Link>
          </div>
          <div className="w-full h-auto flex lg:flex-row flex-col justify-between lg:py-16 py-4">
            <div className="lg:w-2/3 w-full h-auto">
              <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
                Refund Policy
              </h1>
              <p className="text-lg text-mont text-gray-600 mt-8">
                If you want to cancel your donation before it is used for your
                requested appeal or project, please contact our team by email,
                telephone or post. <br /> Aid Humanity, Unit 9, Twelve o’clock
                Court, Sheffield, S4 7WW. <br /> 03300579957 <br />{' '}
                <Link className="font-semibold text-blue" to="">
                  info@aidhumanity.co.uk
                </Link>{' '}
                <br />
                <br /> If the order has not been made to distribute the aid,
                then we will honour your cancellation and refund your full
                amount. <br />
                <br /> If you have made a donation in error or if you change
                your mind about wishing to donate to Aid humanity we will honour
                your wish and refund your donation, provided that you contact us
                within 14 days of the donation being made. Your refund will be
                credited to the card from which it was taken from. <br />
                <br /> If your donations have been used, or the order for the
                donation to be processed has been given, we offer no refund and
                no cancellation. <br />
                <br /> To request a refund, please call us during working hours
                on 03300579957 or email us at{' '}
                <Link className="font-semibold text-blue" to="">
                  @aidhumanity.co.uk
                </Link>{' '}
                <br />
                <br /> Please include your name, address, contact number and the
                donation amount that you would like refunded. <br />
                <br /> If you become aware that your card has been used
                fraudulently, please contact your card provider.
              </p>

              <div className="w-full h-auto border-2 border-gray-200 rounded-2xl py-6 px-5 flex lg:flex-row flex-col justify-between mt-6">
                <p className="text-black-50 text-mont text-lg font-bold">
                  Need further assistance? We’re here to help
                </p>
                <button className="text-white text-mont text-xs font-semibold rounded-lg text-center px-10 py-3 bg-sblue mt-4 lg:mt-0">
                  CONTACT US
                </button>
              </div>
            </div>
            <div className="w-px h-64 lg:flex hidden bg-lgray mx-8"></div>
            <div className="w-1/3 h-auto hidden lg:flex flex-col">
              <h2 className="text-black-50 text-xl text-mont font-bold">
                Related Articles
              </h2>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/terms"
              >
                Terms & Conditions
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/donation_policy"
              >
                Donation Policy
              </Link>
              <Link
                className="text-blue text-mont text-lg font-semibold mt-4"
                to="/refund"
              >
                Refund Policy
              </Link>
              <img
                className="mt-32"
                src="./images/logo_aid-humanity-icon.png"
                alt="logo_aid-humanity-icon"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Refund;
