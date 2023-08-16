import React, { useState, useEffect, useCallback } from 'react';
import { SERVER_URL } from '../../services/config';
import AppealService from '../../services/appeals';
import { Link } from 'react-router-dom';
import DonateModal from './DonateModal';
import DonationService from '../../services/donations';
import CategoryService from '../../services/categories';

function AppealModal({ setshowModal, active }) {
  const [categories, setCategories] = useState([]);
  const [appeals, setAppeals] = useState([]);
  const [, setAppealsData] = React.useState({});
  const [, setLoading] = useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);

  const fetchCategories = async () => {
    setLoading(true);
    const data = await CategoryService.getCategories();
    setLoading(false);
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchAppeals = useCallback(
    async page => {
      setLoading(true);
      const data = await AppealService.getAppeals(page);
      setLoading(false);
      setAppeals([...appeals, ...data.appeals]);
      setAppealsData(data);
    },
    [appeals]
  );

  useEffect(() => {
    fetchAppeals(1);
  }, [fetchAppeals]);

  let totalLength = 0;
  let difference = 0;
  let numIterations = 0;
  const columnLimit = 5;

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
              <h1 className="text-black-50 text-mont text-base font-bold">
                Quick Zakat Calculator
              </h1>
              <div className="lg:w-2/3 w-full mt-4 lg:mt-0 h-auto flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between items-center">
                <div className="lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                  <p className="text-black-50 text-mont text-xs font-semibold">
                    Total Savings inc. Gold
                  </p>
                  <p className="text-black-50 text-mont text-xs font-semibold">
                    £ 980
                  </p>
                </div>
                <div className=" lg:ml-4 lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                  <p className="text-black-50 text-mont text-xs font-semibold">
                    Total Debt
                  </p>
                  <p className="text-black-50 text-mont text-xs font-semibold">
                    £ 200
                  </p>
                </div>
                <img
                  className="mx-4"
                  src="/Icons/icon_equal.svg"
                  alt="icon_equal"
                />
                <div className="lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                  <p className="text-black-50 text-mont text-xs font-semibold">
                    Zakat amount to pay
                  </p>
                  <p className="text-black-50 text-mont text-xs font-semibold">
                    £ 32
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
            {(active === 'appeal' || active === 'zakat' || active === 'emergency') && (
              <div className="lg:w-1/3 w-full h-auto flex justify-between">
                <div className="flex flex-col gap-6">
                  {categories?.length > 0 &&
                    (() => {
                      const result = [];
                      for (let i = numIterations; i < categories.length; i++) {
                        const category = categories[i];
                        const length = category.appeals?.length + 1;
                        totalLength += length;
                        difference = columnLimit - totalLength;

                        if (difference < 0) {
                          break;
                        }
                        numIterations++;

                        result.push(
                          <div
                            key={i}
                            className="w-full h-auto flex justify-between"
                          >
                            <div className="h-auto">
                              <img
                                className="flex"
                                src={category.icon}
                                alt="icon_mosque"
                              />
                            </div>
                            <div className="w-full h-auto ml-4 flex flex-col">
                              <Link
                                className="text-nblue text-mont text-lg font-bold mb-2"
                                to=""
                              >
                                {category.name}
                              </Link>
                              {category?.appeals?.map(appeal => (
                                <Link
                                  to={`/appeal/${appeal.id}`}
                                  key={appeal.id}
                                >
                                  <Link
                                    className="text-base text-dgray tet-mont font-medium mt-2 hover:underline"
                                    to={`/appeal/${appeal.id}`}
                                  >
                                    {appeal.title}
                                  </Link>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return result;
                    })()}
                </div>
                <div className="w-1 h-full border-r-2 border-gray-300 mr-8 lg:flex hidden"></div>
              </div>
            )}

            {(active === 'appeal' || active === 'zakat') && (
              <div className="lg:w-1/3 w-full h-auto flex">
                <div className="flex flex-col gap-6">
                  {categories?.length > 0 &&
                    (() => {
                      const result = [];
                      let totalLength = 0;
                      for (let i = numIterations; i < categories.length; i++) {
                        const category = categories[i];
                        const length = category.appeals?.length + 1;
                        totalLength += length;
                        difference = columnLimit - totalLength;
                        if (difference < 0) {
                          break;
                        }
                        numIterations++;

                        result.push(
                          <div
                            key={i}
                            className="w-full h-auto flex justify-between"
                          >
                            <div className="h-auto">
                              <img
                                className="flex"
                                src={category.icon}
                                alt="icon_mosque"
                              />
                            </div>
                            <div className="w-full h-auto ml-4 flex flex-col">
                              <Link
                                className="text-nblue text-mont text-lg font-bold mb-2"
                                to=""
                              >
                                {category.name}
                              </Link>
                              {category.appeals.map(appeal => (
                                <Link
                                  to={`/appeal/${appeal.id}`}
                                  key={appeal.id}
                                >
                                  <Link
                                    className="text-base text-dgray tet-mont font-medium mt-2 hover:underline"
                                    to={`/appeal/${appeal.id}`}
                                  >
                                    {appeal.title}
                                  </Link>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return result;
                    })()}
                </div>
              </div>
            )}

            {(active === 'appeal' || active === 'zakat') && (
              <div className="lg:w-1/3 w-full h-auto flex">
                <div className="w-1 h-full border-l-2 border-gray-300 mr-8 lg:flex hidden"></div>
                <div className="flex flex-col gap-6">
                  {categories?.length > 0 &&
                    (() => {
                      const result = [];
                      let totalLength = 0;
                      for (let i = numIterations; i < categories.length; i++) {
                        const category = categories[i];
                        const length = category.appeals?.length + 1;
                        totalLength += length;
                        difference = columnLimit - totalLength;
                        if (difference < 0) {
                          break;
                        }
                        numIterations++;
                        
                        result.push(
                          <div
                            key={i}
                            className="w-full h-auto flex justify-between"
                          >
                            <div className="h-auto">
                              <img
                                className="flex"
                                src={category.icon}
                                alt="icon_mosque"
                              />
                            </div>
                            <div className="w-full h-auto ml-4 flex flex-col">
                              <Link
                                className="text-nblue text-mont text-lg font-bold mb-2"
                                to=""
                              >
                                {category.name}
                              </Link>
                              {category.appeals.map(appeal => (
                                <Link
                                  to={`/appeal/${appeal.id}`}
                                  key={appeal.id}
                                >
                                  <Link
                                    className="text-base text-dgray tet-mont font-medium mt-2 hover:underline"
                                    to={`/appeal/${appeal.id}`}
                                  >
                                    {appeal.title}
                                  </Link>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return result;
                    })()}
                </div>
              </div>
            )}
            <img
              className="lg:w-1/3 w-full absolute lg:-right-32 -right-1/2 z-50 lg:-bottom-1/2 bottom-1/4"
              src="images/vectors/logo_aid-humanity-icon.svg"
              alt="Aid-humanity background logo"
            />
          </div>
          <div className="w-full h-auto rounded-b-2xl px-20 py-12 bg-gray lg:flex justify-between hidden">
            <div className="w-1/4 h-auto">
              <h1 className="text-black-50 text-mont text-3xl font-bold">
                Popular <br /> Donations
              </h1>
            </div>
            {appeals.slice(0, 3).map((appeal, index) => (
              <div className="w-1/4 h-auto px-4 flex justify-center">
                <div className="w-1/2 h-auto relative">
                  <img
                    className="w-full h-full"
                    src={SERVER_URL + appeal.cover_image}
                    alt="Pakistan Floods 2022"
                  />
                  <button
                    id="cursor-pointer"
                    className="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2"
                    onClick={() => {
                      setSelectedAppealId(appeal.id);
                      setshowDonateModal(true);
                    }}
                  >
                    DONATE NOW <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                  <Link to={`/appeal/${appeal.id}`}>
                    <h2 className="text-xs text-mont font-bold text-black-50">
                      {appeal.title}
                    </h2>
                    <Link className="text-sblue text-lg" to="">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </Link>
                  <div className="absolute -left-4 top-1/3 bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs">
                    <span className="cursor-default">
                      {DonationService.getDonationTag(appeal.appeal_tag)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
