import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Faq = ({hide}) => {
  const [showFaq1, setShowFaq1] = useState(false);
  const [showFaq2, setShowFaq2] = useState(true);
  const [showFaq3, setShowFaq3] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div className="lg:w-3/5 w-11/12 mx-auto h-auto py-16 mt-8 lg:mt-32">
        <div className="w-full h-auto flex justify-between items-center">
          <h1 className="text-mont text-black font-bold text-[26px] lg:text-3xl">
            FAQ
          </h1>
          {!hide &&
            <p className="hidden lg:flex gap-1 text-lblack text-mont text-[22px] font-normal text-center">
              Do you have more questions? Check out our full
              <Link to="/faq">
                <span className="text-dblue font-semibold">FAQ</span>
              </Link>
            </p>
          }
        </div>
        <div
          className="w-full h-auto mt-6 p-4 lg:p-6 border-2 rounded-xl border-lgray flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex justify-between w-full">
            <h3 className="text-[16px] lg:text-[18px] text-mont font-bold text-black-50">
              Does all my donation go to the appeal?
            </h3>
            {showFaq1 ? (
              <img
                className="cursor-pointer"
                onClick={() => setShowFaq1(false)}
                src="./Icons/icon_plus.svg"
                alt="icon_plus"
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={() => setShowFaq1(true)}
                src="./Icons/icon_minus.svg"
                alt="icon_minus"
              />
            )}
          </div>
          {!showFaq1 && (
            <p className="text-[14px] lg:text-[16px] text-mont text-gray mt-2">
              You can cancel your donation at any time. However if
              your last paymentt of the month is still yet to come
              this will still be deducted. Until the next month.
            </p>
          )}
        </div>
        <div
          className="w-full h-auto mt-6 p-4 lg:p-6 border-2 rounded-xl border-lgray flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-duration-delay="300"
        >
          <div className="flex justify-between w-full">
            <h3 className="text-[16px] lg:text-[18px] text-mont font-bold text-black-50">
              Can I cancel my subscription?
            </h3>
            {showFaq2 ? (
              <img
                className="cursor-pointer"
                onClick={() => setShowFaq2(false)}
                src="./Icons/icon_plus.svg"
                alt="icon_plus"
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={() => setShowFaq2(true)}
                src="./Icons/icon_minus.svg"
                alt="icon_minus"
              />
            )}
          </div>
          {!showFaq2 && (
            <p className="text-[14px] lg:text-[16px] text-mont text-gray mt-2">
              You can caccel your donation at any time. However if
              your last paymentt of the month is still yet to come
              this will still be deducted. Until the next month.
            </p>
          )}
        </div>
        <div
          className="w-full h-auto mt-6 p-4 lg:p-6 border-2 rounded-xl border-lgray flex flex-col items-start"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-duration-delay="500"
        >
          <div className="flex justify-between w-full">
            <h3 className="text-[16px] lg:text-[18px] text-mont font-bold text-black-50">
              Can I start my own appeal?
            </h3>
            {showFaq3 ? (
              <img
                className="cursor-pointer"
                onClick={() => setShowFaq3(false)}
                src="./Icons/icon_plus.svg"
                alt="icon_plus"
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={() => setShowFaq3(true)}
                src="./Icons/icon_minus.svg"
                alt="icon_minus"
              />
            )}
          </div>
          {!showFaq3 && (
            <p className="text-[14px] lg:text-[16px] text-mont text-gray mt-2">
              You can caccel your donation at any time. However if
              your last paymentt of the month is still yet to come
              this will still be deducted. Until the next month.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
