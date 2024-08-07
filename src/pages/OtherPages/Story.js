import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import AppealSlider from '../../components/AppealSlider';
import { setBodyOverflowHidden } from '../../redux/common/CommonSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Story() {
  const [showLogin, setShowLogin] = React.useState(false);
  const dispatch = useDispatch();
  const overflowHidden = () => {
    dispatch(setBodyOverflowHidden(true));
  };

  const overflowVisible = () => {
    dispatch(setBodyOverflowHidden(false));
  };

  return (
    <>
      <Header
        showDonateButton
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        overflowHidden={overflowHidden}
        overflowVisible={overflowVisible}
      />
      <main
        className="mt-16 lg:mt-32"
        onClick={() => {
          setShowLogin(false);
        }}
      >
        <div className="w-full h-auto py-8 lg:py-16 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Our Story
          </h1>
        </div>
        <section className="w-full h-auto mt-12">
          <div className="w-full h-auto px-5 container mx-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Our Story
            </Link>
          </div>
          <div className="w-full h-auto p-5 lg:p-0 container mx-auto flex lg:flex-row flex-col items-center lg:items-start lg:justify-between justify-center lg:py-16 py-0 mt-2">
            <div className="w-full lg:w-1/3 h-auto lg:px-5 px-0 p-4 lg:p-0 relative">
              <img
                className="hidden lg:block w-1/2 absolute top-0 bottom-0 my-auto -right-40 z-10"
                src="./logo/logo_aid-humanity-icon.svg"
                alt="logo_aid-humanity-icon"
              />
              <img
                className="hidden lg:block absolute bottom-20 -left-24"
                src="./Icons/Ellipse 2492.svg"
                alt="Ellipse 2492"
              />
              <img
                className="hidden lg:block absolute left-1/4 -bottom-1/4"
                src="./Icons/circle_blue.svg"
                alt="circle_blue"
              />
              <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
                Our Story
              </h1>
              <h3 className="text-2xl text-mont text-black-50 font-bold mt-8">
                About Us
              </h3>
              <p className="lg:text-2xl text-lg text-mont text-gray-600 mt-8">
                Aid Humanity is proud to be a non-profit organisation that
                passes{' '}
                <span className="text-gray-600 font-semibold">
                  100% of our donations
                </span>{' '}
                to charitable -top-1/4 around the world.
              </p>
              <img
                className="mt-16 lg:block hidden"
                src="./images/Depositphotos_100771360_XL.png"
                alt="Depositphotos_100771360_XL"
              />
            </div>
            <div className="w-full lg:w-2/3 h-auto lg:pl-32 pl-0 p-2 lg:p-0 flex flex-col justify-end relative">
              <img
                className="rounded-l-3xl"
                src="./images/Group 15618.png"
                alt="Group 15618"
              />
              <div className="w-40 absolute top-4 left-1/4">
                <div>
                  <p className="text-2xl text-white">we transfer</p>
                </div>
                <div>
                  <img src="./Icons/logo_100percent.svg" alt="100%" />
                </div>
                <div>
                  <p className="text-base text-white">of your donation</p>
                </div>
              </div>
              <div className="w-full h-auto mt-12 lg:pr-32 pr-0 relative">
                <h3 className="text-3xl text-mont text-black-50 font-bold">
                  A Pillar to consider
                </h3>
                <p className="lg:text-2xl text-lg text-mont text-gray-600 mt-4">
                  One of the 5 pillars of Islam is Charity (zakah), and our goal
                  is to help muslims look for resources to help those in need.
                  We believe that charity works best when the complexity and
                  friction is removed, so we’ve created a simple platform that
                  allows you to connect with, launch, and promote good -top-1/4
                  to people all over the world. <br /> Exactly what you want to
                  hear when it’s time to make a difference by bringing the
                  charitable tenants of Islam together to solve global issues.
                </p>
                <img
                className="mt-16 lg:hidden"
                src="./images/Depositphotos_100771360_XL.png"
                alt="Depositphotos_100771360_XL"
                />
                <img
                className="lg:hidden w-1/2 absolute bottom-1/4 my-auto right-2 z-10"
                src="./logo/logo_aid-humanity-icon.svg"
                alt="logo_aid-humanity-icon"
              />
              </div>
            </div>
          </div>
          <div className="w-full h-auto mt-4 p-6 container mx-auto flex flex-col items-center relative">
            <div className="w-full lg:w-1/2 h-auto">
              <h3 className="text-3xl text-mont text-black-50 font-bold">
                Our Promise
              </h3>
              <p className="lg:text-2xl text-lg text-mont text-gray-600 mt-4">
                We take pride in our non-profit philosophy and promise to never
                take a penny of donations towards our running costs. We started
                to make a difference, we’re committed to making a difference,
                and with you by our side, we know we can seriously make a
                difference in communities all over the world. This is our
                promise to you, and we will always keep it. <br />
                <br /> When it’s time to change the world one little action at a
                time, nothing less will do.
              </p>
            </div>
            <img
              className="absolute -bottom-1/3 right-0 hidden lg:block"
              src="./Icons/Ellipse 1793.svg"
              alt="Ellipse 1793"
            />
          </div>
        </section>
        <section className="w-full h-auto mt-20 bg-owhite z-10">
          <div className="w-full h-auto container mx-auto px-5 py-10">
            <div className="w-full h-auto text-center">
              <h1 className="text-3xl text-mont font-bold">Recent Appeals</h1>
            </div>
            <div className="w-full h-auto mt-16">
              <AppealSlider />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Story;
