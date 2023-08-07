import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { setBodyOverflowHidden } from '../../redux/common/CommonSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Rewards() {
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = React.useState(false);

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
      <main className="mt-16 lg:mt-0">
        <div className="w-full h-auto py-8 lg:py-16 bg-bwhite">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Our Rewards
          </h1>
        </div>
        <section className="w-full h-auto mt-12">
          <div className="w-full h-auto px-5 container mx-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="/">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Our Rewards
            </Link>
          </div>
          <div className="w-full h-auto container mx-auto lg:pl-5 p-5 lg:p-0 flex lg:flex-row flex-col items-center lg:items-start lg:justify-between justify-center lg:py-16 py-0 mt-2">
            <div className="w-full lg:w-1/2 h-auto relative">
              <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
                Our Rewards
              </h1>
              <p className="text-xl text-mont text-gray-600 mt-8">
                We’ve always believed that raising money for charity is reward
                in itself, but we also recognise the need to incentivise
                everyone to help spread the word.
              </p>
              <p className="text-xl text-mont text-gray-600 mt-8">
                Here’s how you can get an additional{' '}
                <span className="text-gray-600 font-semibold">
                  morale boost
                </span>{' '}
                and{' '}
                <span className="text-gray-600 font-semibold">
                  take pride in the work
                </span>{' '}
                you’ve done:
              </p>
              <ul className="pl-6 mt-8 terms">
                <li className="text-xl text-mont text-gray-600 mt-4">
                  Get rewards based on how many appeals you’ve created and the
                  money raised
                </li>
                <li className="text-xl text-mont text-gray-600 mt-4">
                  Earn recognition based on the number of people who donate to
                  your appeal
                </li>
                <li className="text-xl text-mont text-gray-600 mt-4">
                  Earn recognition based on the number of people who donate to
                  your appeal
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/3 h-auto lg:pl-32 pl-0 p-2 lg:p-0 flex flex-col justify-end relative">
              <img
                className="rounded-l-3xl"
                src="./images/Depositphotos_77502476_XL.png"
                alt="Depositphotos_77502476_XL"
              />
            </div>
          </div>
          <div className="w-full h-auto mt-4 p-6 container mx-auto flex flex-col items-center relative">
            <div className="w-full lg:w-1/2 h-auto flex flex-col items-center">
              <div className="w-full h-auto flex justify-between items-end">
                <h1 className="text-blue text-mont lg:text-2xl text-xl font-bold">
                  By putting all of these together, we hope to empower you to
                  achieve more than anyone else thought possible. With you by
                  your side, we know anything is possible.
                </h1>
                <img
                  src="./Icons/icon_quote-right-filled.svg"
                  alt="icon_quote-right-filled"
                />
              </div>
              <button className="text-white text-mont text-xs font-bold rounded-lg text-center px-8 py-4 mt-4 bg-sblue">
                START FUNDRAISING NOW
              </button>
            </div>
          </div>
        </section>
        <section className="w-full h-auto container mx-auto px-5 lg:py-8 py-2 mt-4">
          <div className="w-full h-auto text-center py-6">
            <h1 className="text-mont text-3xl text-black-50 font-bold">
              Why wait to give back to those in need?
            </h1>
          </div>
          <div className="w-full h-auto py-8 flex lg:flex-row flex-col justify-between gap-8">
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg relative">
              <span className="text-mont text-base text-black-50 font-bold">
                I’m in
              </span>
              <h1 className="text-mont text-blue font-semibold text-2xl mt-2 h-20">
                First step <br /> in giving
              </h1>
              <p className="text-mont text-gray text-base mt-5">
                (when user makes their first donation)
              </p>
              <div className="w-full h-auto flex justify-end -mt-2">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  01.
                </h3>
              </div>
              <img
                className="absolute -bottom-14 left-0 right-0 mx-auto"
                src="./Icons/badge_star.svg"
                alt="badge_star"
              />
            </div>
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg relative">
              <span className="text-mont text-base text-black-50 font-bold">
                Bronze
              </span>
              <h1 className="text-mont text-blue font-semibold text-2xl mt-2 h-20">
                Your making <br /> a crowd, keep <br /> going!
              </h1>
              <p className="text-mont text-gray text-base mt-5">
                (when user makes total donation of £100)
              </p>
              <div className="w-full h-auto flex justify-end -mt-2">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  02.
                </h3>
              </div>
              <img
                className="absolute -bottom-14 left-0 right-0 mx-auto"
                src="./Icons/badge_bronze.svg"
                alt="badge_in"
              />
            </div>
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg relative">
              <span className="text-mont text-base text-black-50 font-bold">
                Silver
              </span>
              <h1 className="text-mont text-blue font-semibold text-2xl mt-2 h-20">
                Your making <br /> a difference
              </h1>
              <p className="text-mont text-gray text-base mt-5">
                (when user makes total donation of £1000)
              </p>
              <div className="w-full h-auto flex justify-end -mt-2">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  03.
                </h3>
              </div>
              <img
                className="absolute -bottom-14 left-0 right-0 mx-auto"
                src="./Icons/badge_silver.svg"
                alt="badge_in"
              />
            </div>
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg relative">
              <span className="text-mont text-base text-black-50 font-bold">
                Gold
              </span>
              <h1 className="text-mont text-blue font-semibold text-2xl mt-2 h-20">
                Your part of <br /> the Aid Humanity <br /> team
              </h1>
              <p className="text-mont text-gray text-base mt-5">
                (when user makes total donation of £5000 or more)
              </p>
              <div className="w-full h-auto flex justify-end -mt-2">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  04.
                </h3>
              </div>
              <img
                className="absolute -bottom-14 left-0 right-0 mx-auto"
                src="./Icons/badge_gold.svg"
                alt="badge_in"
              />
            </div>
          </div>
        </section>
        <section className="w-full h-auto container mx-auto px-5 lg:py-8 py-2 mt-4 lg:mb-10">
          <div className="w-full h-auto text-center py-6">
            <h1 className="text-mont text-3xl text-black-50 font-bold">
              When users who also create fundraisers
            </h1>
          </div>
          <div className="w-full h-auto py-8 flex lg:flex-row flex-col justify-between gap-8">
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h1 className="text-mont text-gray-600 font-semibold text-3xl mt-5">
                Your first project
              </h1>
              <p className="text-mont text-gray text-base mt-8 h-24">
                (users create their first fundraising page)
              </p>
              <div className="w-full h-auto flex justify-end mt-4">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  01.
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h1 className="text-mont text-green font-semibold text-3xl mt-5">
                Green
              </h1>
              <p className="text-mont text-gray text-base mt-8 h-24">
                (user completes their first <br /> fundraiser and reaches their
                goal)
              </p>
              <div className="w-full h-auto flex justify-end mt-4">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  02.
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h1 className="text-mont text-purple font-semibold text-3xl mt-5">
                Purple
              </h1>
              <p className="text-mont text-gray text-base mt-8 h-24">
                (user reaches a total of £5000 from the total of all their
                fundraising campaign, eg if they have 2/3 their fundraising or
                even one)
              </p>
              <div className="w-full h-auto flex justify-end mt-4">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  03.
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-1/4 h-auto p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h1 className="text-mont text-blue font-semibold text-3xl mt-5">
                Blue
              </h1>
              <p className="text-mont text-gray text-base mt-8 h-24">
                (when user makes total donation of £5000 or more)
              </p>
              <div className="w-full h-auto flex justify-end mt-4">
                <h3 className="text-mont text-nblue text-4xl font-medium">
                  04.
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Rewards;
