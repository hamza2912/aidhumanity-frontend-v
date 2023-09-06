import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { setBodyOverflowHidden } from '../../redux/common/CommonSlice';
import { Link } from 'react-router-dom';
import ZakatCalculator from '../../components/ZakatCalculator';

function Zakat() {
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
            Zakat Calculator
          </h1>
        </div>
        <section className="w-full h-auto mt-12">
          <div className="w-full h-auto px-5 container mx-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Zakat Calculator
            </Link>
          </div>
          <div className="w-full h-auto px-5 container mx-auto flex lg:flex-row flex-col items-center lg:items-start lg:justify-between justify-center lg:py-16 py-0  mt-2">
            <ZakatDescription />
            <ZakatCalculator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Zakat;

const ZakatDescription = () => {
  return (
    <div className="w-full lg:w-1/2 h-auto lg:pr-4 pr-0 relative">
      <h1 className="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">
        Zakat Calculator
      </h1>
      <h3 className="text-2xl text-mont text-black-50 font-bold mt-8">
        Simplifying your Zakat calculation
      </h3>
      <p className="lg:text-xl text-lg text-mont text-gray-600 mt-8">
        Calculating your Zakat isn’t as difficult as you may think. We find that
        breaking your assets down into different categories makes the Zakat
        calculation process really simple. <br />
        <br /> We have broken down the calculation process into Zakatable assets
        (gold, silver, cash, savings, business assets etc.) and Deductible
        liabilities (money you owe, other outgoings due) so you can calculate
        the Zakat you owe easily. <br />
        <br /> The amount of Zakat you need to pay will be determined once you
        have calculated the value of your net assets. You then need to see
        whether your net assets are equal to, or exceed, the{' '}
        <Link className="text-blue font-semibold" to="">
          Nisab
        </Link>{' '}
        threshold.
      </p>
      <h3 className="text-2xl text-mont text-black-50 font-bold mt-8">
        Using the Zakat calculator
      </h3>
      <p className="lg:text-xl text-lg text-mont text-gray-600 mt-8">
        Enter all assets that have been in your possession over a lunar year
        into the Zakat calculator. This will then give you the total amount of
        Zakat owed.
      </p>
      <h3 className="text-2xl text-mont text-black-50 font-bold mt-8">
        Zakat Scholar: Providing specialist advice
      </h3>
      <p className="lg:text-xl text-lg text-mont text-gray-600 mt-8">
        We understand that calculating your Zakat can be daunting, and even
        confusing. Therefore, we work with a dedicated{' '}
        <Link to="" className="text-blue font-semibold">
          Zakat scholar
        </Link>{' '}
        during Ramadan to provide a specialised advice service. This service
        allows you to speak directly to a learned scholar via email or
        telephone. <br />
        <br /> Please note: the Zakat scholar is only available{' '}
        <span className="text-gray-600 font-semibold">
          during Ramadan from 3 to 8pm (Monday to Friday only)
        </span>
        . The scholar can therefore only call back during these time periods.
      </p>
      <h3 className="text-2xl text-mont text-black-50 font-bold mt-8">
        What is Nisab?
      </h3>
      <p className="lg:text-xl text-lg text-mont text-gray-600 mt-8">
        The{' '}
        <Link to="" className="text-blue font-semibold">
          nisab
        </Link>{' '}
        is the minimum amount of wealth a Muslim must possess before they become
        eligible to pay Zakat. This amount is often referred to as the nisab
        threshold. <br />
        <br />{' '}
        <span className="text-gray-600 font-semibold">Gold and silver</span> are
        the two values used to calculate the nisab threshold. Therefore the
        nisab is the value of 87.48 grams of gold or 612.36 grams of silver.
      </p>
      <h2 className="text-2xl text-mont text-black-50 font-bold mt-8">
        Current Nisab threshold (as of 06/04/2022):
      </h2>
      <ul className="pl-6 mt-2 lg:text-xl text-lg text-mont text-gray-600 list-disc">
        <li>Using value of silver (612.36 grams) – approximately £366.80</li>
        <li>Using value of gold (87.48 grams) – approximately £4,139.55</li>
      </ul>
      <p className="lg:text-xl text-lg text-mont text-gray-600 mt-4">
        Visit our Zakat page for an extensive list of{' '}
        <Link to="" className="text-blue font-semibold">
          Zakat FAQs
        </Link>
        . You can also watch this{' '}
        <Link to="" className="text-blue font-semibold">
          YouTube video series
        </Link>{' '}
        where scholars answer Zakat related questions.
      </p>
      <div className="w-full h-auto border-2 border-sblue rounded-2xl px-6 py-8 bg-bwhite mt-6">
        <div className="w-full h-auto flex items-center gap-4">
          <img src="./Icons/badge_verified.svg" alt="badge_verified" />
          <h1 className="text-mont text-3xl text-blue font-semibold">
            Scholar Verified
          </h1>
        </div>
        <div className="w-full h-auto mt-4">
          <p className="text-mont text-base text-gray-400 mt-4">
            We ensure our content is reviewed and verified by{' '}
            <Link to="" className="text-blue font-semibold">
              qualified scholars
            </Link>{' '}
            to provide you with the most accurate information. This webpage was
            last reviewed by{' '}
            <Link to="" className="text-blue font-semibold">
              Sheikh Saalim Al-Azhari
            </Link>
            . <br />
            <br /> Page last reviewed: 17 January 2022 <br />
            <br /> Next review due: Within 12 months
          </p>
        </div>
      </div>
      <img
        className="absolute lg:flex hidden top-56 -left-32"
        src="./Icons/yellow_ring_small.svg"
        alt="yellow_ring_small"
      />
    </div>
  );
};
