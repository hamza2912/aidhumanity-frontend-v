import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const HowWorks = () => {
  return (
    <>
      <Header />

      <main>
        <div className="w-full h-auto py-8 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            How it works
          </h1>
        </div>
        <section className="w-full h-auto px-5 container mx-auto mt-12">
          <div className="w-full h-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              How it works
            </Link>
          </div>
          <div className="w-full h-auto flex lg:flex-row flex-col justify-between lg:py-16 py-4">
            <div className="lg:w-2/3 w-full h-auto relative">
              <img
                className="lg:hidden flex absolute top-4 -right-44"
                src="./images/logo_aid-humanity-icon.png"
                alt="logo_aid-humanity-icon"
              />
              <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
                How it works
              </h1>
              <p className="text-xl text-mont text-gray-600 mt-8">
                We’ve build Aid Humnity to be as simple and straightforward as
                possible. Here’s the simplest way to make a difference with just
                a few clicks…
              </p>
              <div className="w-full h-auto flex lg:flex-row flex-col justify-between lg:my-20 my-8">
                <div className="lg:w-1/3 w-full h-auto flex flex-col items-center">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      1.
                    </p>
                    <img
                      src="./Icons/illustration_create-account.svg"
                      alt="illustration_create-account"
                    />
                  </div>
                  <div className="w-full h-auto text-center mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Create an account
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto flex flex-col items-center">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      2.
                    </p>
                    <img
                      src="./Icons/illustration_create-appeals.svg"
                      alt="illustration_create-appeals"
                    />
                  </div>
                  <div className="w-full h-auto text-center mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Register to create appeals
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto flex flex-col items-center">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      3.
                    </p>
                    <img
                      src="./Icons/illustration_donate-color.svg"
                      alt="illustration_donate-color"
                    />
                  </div>
                  <div className="w-full h-auto text-center mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Donate to receive rewards
                    </h2>
                  </div>
                </div>
              </div>
              <p className="text-xl text-mont text-gray-600 mt-8">
                It’s the simple, straightforward, and transparent way to bring
                people together to make the world a better place. Just what you
                want to hear when it’s time to devote your time and energy to a
                good cause that really means something to you.
              </p>
              <h3 className="text-2xl text-black-50 font-bold mt-8">
                Want to do even more?
              </h3>
              <p className="text-xl text-mont text-gray-600 mt-8">
                To help incentivise kind-hearted people to do even more, we’ve
                proud to be able to offfer the chance to make referrals and earn
                rewards. It’s our way of making sure every good deed is noticed
                the right way.
              </p>
              <h3 className="text-2xl text-black-50 font-bold mt-8">
                What can you do with us?
              </h3>
              <p className="text-xl text-mont text-gray-600 mt-8">
                With Aid Humanity, you have the choice to help in a variety of
                different ways so that chrity work always fits seamlessly into
                your everyday life:
              </p>
              <div className="w-full h-auto flex lg:flex-row flex-col mt-8 justify-between gap-6">
                <div className="lg:w-1/3 w-full h-auto shadow-md px-5 pt-12 pb-6 border bg-white rounded-2xl">
                  <h1 className="text-gray-600 text-mont text-3xl font-semibold">
                    Donator
                  </h1>
                  <p className="text-gray text-base text-mont mt-4 h-24">
                    You’re the core of what we do, giving funds to help those in
                    need.
                  </p>
                  <div className="w-full h-auto flex justify-end">
                    <h2 className="text-nblue text-mont text-4xl font-medium">
                      01.
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full w-full h-auto shadow-md px-5 pt-12 pb-6 border bg-white rounded-2xl">
                  <h1 className="text-gray-600 text-mont text-3xl font-semibold">
                    Campaigner
                  </h1>
                  <p className="text-gray text-base text-mont mt-4 h-24">
                    You have a vision and you want to see it come to life.
                  </p>
                  <div className="w-full h-auto flex justify-end">
                    <h2 className="text-nblue text-mont text-4xl font-medium">
                      02.
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto shadow-md px-5 pt-12 pb-6 border bg-white rounded-2xl">
                  <h1 className="text-gray-600 text-mont text-3xl font-semibold">
                    Super Admin
                  </h1>
                  <p className="text-gray text-base text-mont mt-4 h-24">
                    You’ll be one of three directors who see regular updates.
                  </p>
                  <div className="w-full h-auto flex justify-end">
                    <h2 className="text-nblue text-mont text-4xl font-medium">
                      03.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto text-center flex flex-col justify-center items-center mt-10">
                <button className="lg:w-1/3 w-4/5 text-white text-mont text-xs font-bold rounded-lg text-center px-4 py-4 bg-sblue">
                  CREATE AN ACCOUNT NOW
                </button>
                <p className="text-black-50 text-mont text-lg font-bold mt-2">
                  Why wait?
                </p>
              </div>
            </div>
            <div className="w-px h-64 lg:flex hidden bg-l2gray mx-8"></div>
            <div className="w-1/3 h-auto hidden lg:flex flex-col">
              <h2 className="text-black-50 text-xl text-mont font-bold">
                Related Articles
              </h2>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/story"
              >
                Our Story
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/marketing"
              >
                Marketing
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/zakat"
              >
                Zakat
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
                to="/donation_policy"
              >
                Donate
              </Link>
              <Link
                className="text-blue text-mont text-lg font-semibold mt-4"
                to="/how_it_works"
              >
                How it works
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
};

export default HowWorks;
