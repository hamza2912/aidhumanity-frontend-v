import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Marketing() {
  return (
    <>
      <Header />

      <main>
        <div className="w-full h-auto py-8 lg:py-16 bg-bwhite mt-16 lg:mt-32">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Marketing
          </h1>
        </div>
        <section className="w-full h-auto container mx-auto px-5 mt-12">
          <div className="w-full h-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Marketing
            </Link>
          </div>
          <div className="w-full h-auto flex lg:flex-row flex-col justify-between lg:py-16 pt-4 pb-16">
            <div className="lg:w-2/3 w-full h-auto">
              <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
                Marketing
              </h1>
              <h3 className="text-2xl text-mont text-black-50 font-bold mt-8">
                Marketing <br />your Campaign
              </h3>
              <p className="lg:text-xl text-lg text-mont text-gray-600 mt-6">
                We want your campaign to be a sucess from the moment you launch
                it, which is why we’ve created a simple, straightforward process
                that covers everything. All you have to do is follow it step by
                step and watch as the world helps you change things for the
                better:
              </p>
              <div className="w-full h-auto mt-8 pl-4">
                <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center items-start mt-16">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      1.
                    </p>
                    <img
                      src="./Icons/illustration_choose-appeal.svg"
                      alt="illustration_choose-appeal.svg"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full h-auto flex items-center ml-4 lg:py-8 py-2 px-2">
                    <p className="text-base text-mont text-gray">
                      Choose an appeal based on a cause that means something to
                      you (If you’d like Aid Humanity to back a cause you have
                      an interest in please message us).
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center items-start mt-16">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      2.
                    </p>
                    <img
                      src="./Icons/illustration_refine-message.svg"
                      alt="illustration_refine-message"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full h-auto flex items-center ml-4 lg:py-8 py-2 px-2">
                    <p className="text-base text-mont text-gray">
                      Refine your message so everyone will instantly connect
                      with it.
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center items-start mt-16">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      3.
                    </p>
                    <img
                      src="./Icons/illustration_rise-world.svg"
                      alt="illustration_rise-world"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full h-auto flex items-center ml-4 lg:py-8 py-2 px-2">
                    <p className="text-base text-mont text-gray">
                      Choose the amount you want to raise and share it with the
                      world.
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center items-start mt-16">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      4.
                    </p>
                    <img
                      src="./Icons/illustration_share-link.svg"
                      alt="illustration_share-link"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full h-auto flex items-center ml-4 lg:py-8 py-2 px-2">
                    <p className="text-base text-mont text-gray">
                      Text the link to all your friends and family and ask them
                      to share.
                    </p>
                  </div>
                </div>
                <div className="w-full h-auto flex lg:flex-row flex-col lg:items-center items-start mt-16">
                  <div className="w-40 h-auto flex items-center justify-start relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      5.
                    </p>
                    <img
                      src="./Icons/illustration_take-link.svg"
                      alt="illustration_take-link"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full h-auto flex items-center ml-4 lg:py-8 py-2 px-2">
                    <p className="text-base text-mont text-gray">
                      Take your link live on social media and build unstoppable
                      momentum.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="mt-8"
                src="./Icons/Group 15509.svg"
                alt="Group 15509"
              />
              <p className="lg:text-xl text-lg text-mont text-gray-600 mt-8">
                These quick steps will get your campaign up and running before
                you know it. From there, it’s over to you to innovate and create
                so that your ideas never run out of steam. We know you can do
                this, and the more passion you have, the more you’ll raise.
              </p>
              <div className="w-full h-auto text-center flex flex-col justify-center items-center mt-6">
                <button className="lg:w-1/3 w-4/5 text-white text-mont text-xs font-bold rounded-lg text-center px-4 py-4 bg-sblue">
                  START FUNDRAISING NOW
                </button>
                <p className="text-black-50 text-mont text-lg font-bold mt-2">
                  Why wait a moment longer?
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
                className="text-blue text-mont text-lg font-semibold mt-4"
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
                className="text-black-50 text-mont text-lg font-medium mt-4"
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
}

export default Marketing;
