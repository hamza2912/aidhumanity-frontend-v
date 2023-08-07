import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const DonationPolicy = () => {
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
              Donation Policy
            </Link>
          </div>
          <div className="w-full h-auto flex lg:flex-row flex-col justify-between lg:py-16 py-4">
            <div className="lg:w-2/3 w-full h-auto">
              <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
                Donation Policy
              </h1>
              <p className="text-lg text-mont text-gray-600 mt-4 mt-8">
                Aid Humanity understands the importance of your donation; the
                responsibility and accountability it brings. We pride ourselves
                on being completely transparent and aim to provide you with
                feedback from the moment you donate until we have carried out
                the work you have donated towards. <br />
                <br /> When donating viLink the website or viLink bank transfer,
                please indicate the charitable aim(s) you wish your donation to
                be applied to, we treat these donations as restricted funds. If
                any funds are not referenced, the trustees may use those
                donations for any project at their discretion. If we collect
                insufficient funds to complete the charitable works for which
                you have donated, the trustees will use their discretion to move
                additional funds from general funds to complete the project.{' '}
                <br />
                <br /> If the charitable need for which we have collected for no
                longer exists or has been completed, then the trustees will use
                their discretion to ascertain the intention of the donors and
                any surplus funds would be allocated towards another appropriate
                similar project. <br />
                <br /> We can also collect and correctly apply donations by
                Islamic categories, like Fidya, Kaffarah, Zakat, these are
                restricted by Shariah criteria, in which the trustees will
                select the country based on overall considerations.
              </p>
              <h3 className="text-lg text-mont text-gray-600 font-semibold mt-4">
                100% Donations Policy
              </h3>
              <p className="text-lg text-mont text-gray-600">
                (Excluding Gift Aid and specified donations for administration){' '}
                <br />
                <br /> All the charity’s administrative costs are covered by:
                <br />
                <br /> Donations specified for administration and from recycled
                clothing. The charity has Link separate account for its
                administration fund to ensure the 100% donations policy is
                maintained. Tax reclaimed from your donation (where specified)
                from the UK government’s Gift Aid scheme. This allows taxpayers
                to increase the value of their donation by 25%. This additional
                money is allocated to the charity’s administration fund.
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
                className="text-blue text-mont text-lg font-semibold mt-4"
                to="/donation_policy"
              >
                Donation Policy
              </Link>
              <Link
                className="text-black-50 text-mont text-lg font-medium mt-4"
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
};

export default DonationPolicy;
