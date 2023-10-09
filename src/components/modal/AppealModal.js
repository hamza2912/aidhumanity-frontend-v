import React, { useState } from 'react';
import { SERVER_URL } from '../../services/config';
import { Link, useNavigate } from 'react-router-dom';
import DonateModal from './DonateModal';
import { useSelector } from 'react-redux';
import { getDonationTag } from '../../constants';
import { currencyFormatter } from '../../utils';
import { CategoryList } from './CategoryList';

function AppealModal({ setshowModal, active }) {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);
  const { categories: mainCategories } = useSelector(state => state.main);
  const { popularDonations } = useSelector(state => state.appeal);
  const navigate = useNavigate();

  const [asset, setAsset] = useState(0);
  const [debt, setDebt] = useState(0);

  return (
    <div className="w-full left-0 top-full h-auto z-50 lg:absolute fixed lg:shadow-xl">
      <p
        className="text-sm font-semibold pl-6 py-6 flex items-center gap-2 lg:hidden bg-white"
        onClick={() => {
          setshowModal(false);
        }}
      >
        <img
          className="w-3 h-3"
          src="images/icons/dashboard/angle-left.svg"
          alt=""
        />{' '}
        {active === 'appeal'
          ? 'APPEAL'
          : active === 'zakat'
          ? 'ZAKAT'
          : 'EMERGENCY'}
      </p>
      <div className="w-full lg:h-auto h-full relative">
        <div className="w-full lg:h-auto h-full rounded-t-2xl">
          {active === 'zakat' && (
            <div className="w-full h-auto lg:px-20 lg:py-5 p-5 relative lg:rounded-t-2xl bg-bwhite flex lg:flex-row flex-col justify-between items-center">
              <img
                className="absolute top-0 left-0 hidden lg:block"
                src="/Icons/shape_mega-menu-horizontal-large.svg"
                alt="shape_mega-menu-horizontal-large"
              />
              <h1 className="text-black text-mont text-base font-bold">
                Quick Zakat Calculator
              </h1>
              <div className="lg:w-2/3 w-full mt-4 lg:mt-0 h-auto flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between items-center">
                <div className="lg:w-1/3 w-full border-2 border-l2black rounded-2xl p-4 h-[4.75rem]">
                  <p className="text-black text-mont text-xs font-semibold">
                    Total Savings inc. Gold
                  </p>
                  <input
                    className="text-black text-mont text-xs font-semibold bg-transparent focus:outline-none"
                    value={asset}
                    placeholder="£ 980"
                    onChange={({ target }) => setAsset(target.value)}
                  />
                </div>
                <div className=" lg:ml-4 lg:w-1/3 w-full border-2 border-l2black rounded-2xl p-4 h-[4.75rem]">
                  <p className="text-black text-mont text-xs font-semibold">
                    Total Debt
                  </p>
                  <input
                    className="text-black text-mont text-xs font-semibold bg-transparent focus:outline-none"
                    value={debt}
                    placeholder="£ 200"
                    onChange={({ target }) => setDebt(target.value)}
                  />
                </div>
                <img
                  className="mx-4"
                  src="/Icons/icon_equal.svg"
                  alt="icon_equal"
                />

                <div className="lg:w-1/3 w-full border-2 border-l2black rounded-2xl p-4 h-[4.75rem]">
                  <p className="text-black text-mont text-xs font-semibold">
                    Zakat amount to pay
                  </p>
                  <p className="text-black text-mont text-xs font-semibold mt-1">
                    {currencyFormatter(
                      ((parseFloat(asset) - parseFloat(debt)) * 2.5) / 100
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div
            className={
              active !== 'zakat'
                ? 'w-full lg:h-auto h-screen lg:rounded-t-2xl px-20 py-12 relative bg-rwhite flex lg:flex-row flex-col gap-4 lg:justify-between overflow-hidden'
                : 'w-full lg:h-auto h-96 px-20 py-10 relative bg-rwhite flex lg:flex-row flex-col gap-4 lg:justify-between overflow-x-hidden lg:overflow-y-hidden overflow-y-auto'
            }
          >
            {active !== 'zakat' && (
              <img
                className="absolute top-0 left-0 hidden lg:block"
                src="/Icons/shape_mega-menu-horizontal-large.svg"
                alt="shape_mega-menu-horizontal-large"
              />
            )}
            <div className="w-full">
              {['appeals', 'zakat', 'emergency'].includes(active) && (
                <CategoryList categories={mainCategories} active={active} />
              )}
            </div>
            <img
              className="lg:w-1/3 w-full absolute lg:-right-32 -right-1/2 z-50 lg:-bottom-1/2 bottom-1/4"
              src="images/vectors/logo_aid-humanity-icon.svg"
              alt="Aid-humanity background logo"
            />
          </div>
          <div className="w-full h-auto rounded-b-2xl px-8 xl:px-20 py-12 bg-gray lg:flex justify-between hidden">
            <div className="w-1/4 h-auto">
              <h1 className="text-black text-mont text-3xl font-bold">
                Popular <br /> Donations
              </h1>
            </div>
            <div className="w-3/4 flex gap-8">
              {popularDonations.slice(0, 3).map((appeal, index) => (
                <div
                  className="w-1/3 h-40 flex justify-center shadow-lg rounded-2xl cursor-pointer"
                  key={index}
                  onClick={() => navigate(`/appeal/${appeal.id}`)}
                >
                  <div className="w-1/2 h-auto relative">
                    <img
                      className="w-full h-full rounded-l-2xl object-cover	"
                      src={SERVER_URL + appeal.cover_image}
                      alt={appeal.title}
                    />
                    <button
                      id="cursor-pointer"
                      className="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-[10px] font-semibold text-white text-mont bg-sblue rounded-lg p-3"
                      onClick={() => {
                        setSelectedAppealId(appeal.id);
                        setshowDonateModal(true);
                        console.log('showDonateModal:', showDonateModal);
                      }}
                    >
                      DONATE NOW
                    </button>
                  </div>
                  <div className="w-1/2 h-auto bg-white flex flex-col justify-between relative p-8 rounded-r-2xl">
                    <Link to={`/appeal/${appeal.id}`}>
                      <h2 className="text-xs text-mont font-bold text-black">
                        {appeal.title}
                      </h2>
                    </Link>
                    <Link
                      className="text-sblue text-lg absolute bottom-7 left-8"
                      to={`/appeal/${appeal.id}`}
                    >
                      <img src="/Icons/icon_arrow_right_sblue.svg"></img>
                    </Link>
                    <div className="absolute -left-3 top-[45%] bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs">
                      <span className="cursor-default">
                        {getDonationTag(appeal.appeal_tag)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className={
              active === 'appeal'
                ? 'absolute -top-2 lg:left-[33%] 2xl:left-[34%] ml-4 hidden lg:block'
                : active === 'zakat'
                ? 'absolute -top-2 lg:left-[59%] xl:left-[54%] 2xl:left-[55%] -ml-10  hidden lg:block'
                : 'absolute -top-2 lg:left-[42%] xl:left-[40%] 2xl:left-[41%] ml-10  hidden lg:block'
            }
            src="/Icons/triangle-up.svg"
            alt="triangle-up"
          />
        </div>
      </div>
      {showDonateModal && (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
          appealId={selectedAppealId}
        />
      )}
    </div>
  );
}

export default AppealModal;
