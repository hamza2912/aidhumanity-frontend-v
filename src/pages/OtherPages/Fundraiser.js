import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Fundraiser() {
  return (
    <>
      <Header />

      <main>
        <div className="w-full h-auto py-8 bg-bwhite">
          <h1 className="lg:text-3xl text-2xl text-mont text-black-50 font-bold flex items-center justify-center">
            Become a Fundraiser
          </h1>
        </div>
        <section className="w-full h-auto mt-12">
          <div className="w-full h-auto px-5 container mx-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Become a Fundraiser
            </Link>
          </div>
          <div className="w-full h-auto lg:pl-5 container mx-auto p-4 lg:p-0 flex lg:flex-row flex-col items-center lg:items-start lg:justify-between justify-center lg:py-16 py-0  mt-2 relative">
            <div className="w-full lg:w-1/2 h-auto lg:pr-4 pr-0">
              <h1 className="text-black-50 lg:text-start text-4xl text-mont font-bold">
                Become a Fundraiser
              </h1>
              <p className="text-xl text-mont text-gray-600 mt-8">
                There’s nothing better in life than deciding you’re going to
                engage in an activity that makes life better for someone else.
                That’s why we want to make becoming a fundraiser as quick and
                easy as it should be:
              </p>
              <div className="lg:w-2/3 w-full h-auto flex lg:flex-row flex-col justify-between gap-6 lg:mt-24 mt-4 lg:absolute relative lg:top-36 lg:pr-4 pr-0">
                <div className="lg:w-1/3 w-full h-auto flex flex-col items-center p-4">
                  <div className="lg:w-full w-content h-auto flex items-center lg:justify-start justify-center relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      1.
                    </p>
                    <img
                      src="./Icons/illustration_create-account.svg"
                      alt="illustration_create-account"
                    />
                  </div>
                  <div className="w-full h-auto text-center lg:text-left mt-4">
                    <p className="text-black-50 text-mont text-lg font-bold">
                      Join us by creating an account with the click of a button
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto flex flex-col items-center p-4">
                  <div className="lg:w-full w-content h-auto flex items-center lg:justify-start justify-center relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      2.
                    </p>
                    <img
                      src="./Icons/illustration_create-appeals.svg"
                      alt="illustration_create-appeals"
                    />
                  </div>
                  <div className="w-full h-auto text-center lg:text-left mt-4">
                    <p className="text-black-50 text-mont text-lg font-bold">
                      Find a cause that means something to you right now
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto flex flex-col items-center p-4">
                  <div className="lg:w-full w-content h-auto flex items-center lg:justify-start justify-center relative">
                    <p className="w-8 text-center text-mont text-black-50 font-semibold text-lg bg-o2white rounded-full z-10 absolute -left-4">
                      3.
                    </p>
                    <img
                      src="./Icons/illustration_donate-color.svg"
                      alt="illustration_donate-color"
                    />
                  </div>
                  <div className="w-full h-auto text-center lg:text-left mt-4">
                    <p className="text-black-50 text-mont text-lg font-bold">
                      Raise funds and source donations to make the world a
                      better place
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-auto flex flex-col lg:justify-end items-end">
              <img
                className="rounded-l-xl"
                src="./images/Group 17405.png"
                alt="Group 17405"
              />
              <div className="w-full h-auto mt-8 flex justify-center">
                <button className="w-full lg:w-auto text-white text-mont text-xs font-semibold rounded-lg text-center px-10 py-3 bg-sblue">
                  CREATE AN ACCOUNT
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-auto lg:pr-20 pr-0 container mx-auto flex lg:flex-row flex-col-reverse justify-between lg:py-8 py-4 mt-4">
            <div className="lg:w-1/2 w-full h-auto relative mt-8">
              <img
                className="lg:rounded-r-2xl w-full h-full"
                src="./images/Depositphotos_77502476_XL.png"
                alt="Depositphotos_77502476_XL"
              />
              <img
                className="absolute ellipse"
                src="./Icons/Ellipse 2492.svg"
                alt="Ellipse 2492"
              />
            </div>
            <div className="lg:w-1/2 w-full h-auto lg:pl-24 px-4 lg:pr-0 py-6">
              <h1 className="text-mont text-black-50 lg:text-3xl text-2xl font-bold mt-8 lg:mt-0">
                Searching for inspiration?
              </h1>
              <p className="text-gray-600 text-mont text-xl mt-4">
                Explore our projects page for ideas on how you can help, or
                consider a few of the following if you want to look for a good
                cause you feel a closer personal connection to.
              </p>
              <p className="text-black-50 text-mont text-sm p-4 rounded-xl border border-lgray mt-4">
                The unrest in Yemen is displacing millions and causing
                widespread famine
              </p>
              <p className="text-black-50 text-mont text-sm p-4 rounded-xl border border-lgray mt-4">
                Authoritarian rule in Afghanistan continues to limit education
                and healthcare
              </p>
              <p className="text-black-50 text-mont text-sm p-4 rounded-xl border border-lgray mt-4">
                Civil unrest in Sri Lanka is causing widespread hardship and
                unemployment
              </p>
              <p className="text-black-50 text-mont text-sm p-4 rounded-xl border border-lgray mt-4">
                Seasonal devastation continues to kill millions every year in
                Bangladesh
              </p>
              <p className="text-gray-600 text-mont text-xl mt-4">
                The key thing that each and every one of these issues has in
                common is that they can be solved when we all come together.
                Give it some thought and then join us in making a real
                difference.
              </p>
            </div>
          </div>
          <div className="w-full h-auto mt-4 mb-8 p-6 container mx-auto flex flex-col items-center">
            <h2 className="text-blue text-mont lg:text-2xl text-xl font-bold flex items-center">
              We can’t do this without you…{' '}
              <img
                className="ml-2"
                src="./Icons/icon_quote-right-filled.svg"
                alt="icon_quote-right-filled"
              />
            </h2>
            <button className="lg:w-1/6 w-full text-white text-mont text-xs font-bold rounded-lg text-center px-8 py-4 mt-4 bg-sblue">
              DONATE NOW
            </button>
            <h3 className="text-lg text-mont text-black-50 font-bold mt-4">
              Still waiting…?
            </h3>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Fundraiser;
