import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/header';
import appealService from '../../services/appeals';
import { currencyFormatter } from '../../utils';
// import AppealFilter from './AppealFilter';
import CircularProgressBar from '../AppealDetails/CircularProgressBar';
import { textTruncate } from '../../constants';
import { SERVER_URL } from '../../services/config';
import Loader from '../../components/common/Loader';
import DonateModal from '../../components/modal/DonateModal';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { convertToTitleCase } from '../../constants/index';

const AppealPage = () => {
  const [showFilters, setshowFilters] = React.useState(false);
  const [appeals, setAppeals] = useState([]);
  const [appealsData, setAppealsData] = React.useState({});
  const [loading, setLoading] = useState(false);
  const currentpage = appealsData.pagy?.current_page ?? null;
  const totalpages = appealsData.pagy?.total_pages ?? null;
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);
  // const navigate = useNavigate();

  const [showBadgeArr, setShowBadgeArr] = useState(
    new Array(appeals.length).fill([])
  );

  useEffect(() => {
    fetchAppeals(1);
  }, []);

  const fetchAppeals = async page => {
    setLoading(true);
    const data = await appealService.getAppeals(page);
    setLoading(false);
    setAppeals([...appeals, ...data.appeals]);
    setAppealsData(data);
  };

  const AppealTags = {
    SADHAKA: 'sadhaka',
    ZAKATH: 'zakath',
    SADHAKA_JARIYA: 'sadhaka_jariya',
  };

  function handleMouseEnter(index) {
    // Toggle the showBadgeArr value for the clicked element
    setShowBadgeArr(showBadgeArr => {
      const updatedArr = [...showBadgeArr];
      updatedArr[index] = !updatedArr[index];
      return updatedArr;
    });
  }

  function handleMouseLeave(index) {
    setShowBadgeArr(showBadgeArr => {
      const updatedArr = [...showBadgeArr];
      updatedArr[index] = !updatedArr[index];
      return updatedArr;
    });
  }

  const getDonationTag = appealTag => {
    switch (appealTag) {
      case AppealTags.SADHAKA:
        return 'S';
      case AppealTags.ZAKATH:
        return 'Z';
      case AppealTags.SADHAKA_JARIYA:
        return 'SJ';
      default:
        return 'SJ';
    }
  };

  return (
    <>
      <Header showDonateButton={true} />
      <main>
        {/* <AppealFilter /> */}
        <section class="w-full h-auto z-10">
          <div class="w-full h-auto container mx-auto px-5 py-28">
            <div class="w-full h-auto lg:mt-4">
              <div class="w-full h-auto gap-8 grid lg:grid-cols-3 grid-cols-1 items-center justify-around bg-transparent z-10">
                {appeals.map((appeal, index) => (
                  <div class="h-auto rounded-b-2xl py-2 shadow-lg">
                    <div className="relative">
                      <Link to={`/appeal/${appeal.id}`}>
                        <img
                          className="w-full rounded-t-xl appeal-card"
                          src={SERVER_URL + appeal.cover_image}
                          alt="carousel_image_1"
                        />
                        <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                          <p className="text-gray-400 font-medium">
                            {appeal.category && appeal.category.name}{' '}
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div class="pl-10 pr-6 pt-8 pb-6">
                      <div class="lg:h-36 h-auto">
                        <h2 class="text-xl font-bold text-mont text-black-50">
                          {appeal.title}
                        </h2>
                        <p class="text-base text-mont text-gray-600 mt-2">
                          {textTruncate(appeal.description)}
                        </p>
                      </div>
                      {appeal.donations_count > 0 ? (
                        <div class="flex flex-row items-center mt-4 h-12">
                          <div class="w-1/5 mr-4">
                            <CircularProgressBar
                              percentage={Math.round(
                                (appeal.raised_amount /
                                  appeal.targeted_amount) *
                                  100
                              )}
                              style={{
                                width: '4rem',
                                height: '4rem',
                                fontSize: '0.9rem',
                              }}
                            />
                          </div>
                          <div className="w-full flex justify-between">
                            <div class="flex flex-col">
                              <span class="text-sm text-mont text-blue font-bold">
                                Raised:{' '}
                                {currencyFormatter(appeal.raised_amount)}
                              </span>
                              <span class="text-xs text-mont text-gray-600 font-bold">
                                by <i class="fa-regular fa-circle-user"></i>{' '}
                                {appeal.donations_count} supporters
                              </span>
                            </div>
                            <div class="flex flex-col gap-1 items-end">
                              <span class="text-xs text-mont text-green font-semibold">
                                Goal:{' '}
                                {currencyFormatter(appeal.targeted_amount)}
                              </span>
                              <div class="w-5">
                                <div
                                  className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs"
                                  onMouseEnter={() => handleMouseEnter(index)}
                                  onMouseLeave={() => handleMouseLeave(index)}
                                >
                                  <span className="cursor-default">
                                    {getDonationTag(appeal.appeal_tag)}
                                  </span>
                                </div>
                                {showBadgeArr[index] ? (
                                  <div className="bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg absolute -top-20 -right-16">
                                    <p className="text-sm text-gray-600">
                                      This appeal is{' '}
                                      {convertToTitleCase(appeal.appeal_tag)}{' '}
                                      applicable.
                                    </p>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-xs text-white hover:bg-dgray p-4 bg-gray-mate rounded-2xl mt-4 h-12">
                          <p className="cursor-default">
                            No donation yet, be the first!
                          </p>
                        </div>
                      )}
                      <div class="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                        <Link
                          class="text-mont text-nblue font-bold text-xs"
                          to={`/appeal/${appeal.id}`}
                        >
                          Read More
                        </Link>
                        <button
                          class="text-xs font-bold text-white bg-blue hover:bg-nblue rounded-lg px-4 py-3"
                          onClick={() => {
                            setSelectedAppealId(appeal.id);
                            setshowDonateModal(true);
                          }}
                        >
                          DONATE NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {currentpage !== totalpages && (
            <div class="w-full h-auto flex justify-center px-20 py-8 lg:mb-6">
              <button
                class="text-xs text-nblue text-mont font-medium border-2 border-lgray rounded-lg px-4 py-2"
                onClick={() => fetchAppeals(currentpage + 1)}
              >
                {loading ? <Loader /> : 'Load More'}
              </button>
            </div>
          )}
          {!showFilters ? (
            <button
              onClick={() => {
                setshowFilters(true);
              }}
              className="bg-gray-10 fixed w-full left-0 bottom-0 z-20 h-16 flex lg:hidden items-center justify-center"
            >
              <div className="flex gap-2 items-center">
                <i className="fa-solid fa-sliders text-lg"></i>
                <p className="text-black-50 font-bold uppercase text-sm">
                  Filters
                </p>
              </div>
            </button>
          ) : null}
          {showFilters ? (
            <div className="bg-gray fixed top-0 left-0 h-screen w-full">
              <div className="bg-white py-4">
                <p className="text-sm font-semibold pl-6 flex items-center gap-2">
                  <img
                    onClick={() => {
                      setshowFilters(false);
                    }}
                    className="w-3 h-3"
                    src="images/icons/dashboard/angle-left.svg"
                    alt=""
                  />{' '}
                  Filters
                </p>
              </div>
              <div class="w-full h-auto flex justify-between lg:py-8 py-2 p-4 lg:p-0 mt-6">
                <div class="w-1/2 h-auto flex flex-col gap-3">
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    All
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Zakat
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Sadhaka
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Sadhaka Jaraiyah
                  </p>
                  <p
                    class="text-sm text-mont text-black-50 font-medium flex items-center"
                    href=""
                  >
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                      className="w-5 h-5 mr-2"
                    />{' '}
                    Our fundraiser
                  </p>
                </div>
              </div>
              <div class="w-full h-auto flex flex-col gap-4 pt-2 lg:pb-12 py-2  p-4 lg:p-0 overflow-y-scroll">
                <button class="text-black-50 shadow-lg bg-white border border-sblue text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  All
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_mosque.svg"
                    alt="icon_mosque"
                  />{' '}
                  Build a Mosque
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_emergency-color.svg"
                    alt="icon_emergency-color"
                  />{' '}
                  Disaster & Emergency Appeals
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_water.svg"
                    alt="icon_water"
                  />{' '}
                  Water for All
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_orphan-color.svg"
                    alt="icon_orphan-color.svg"
                  />{' '}
                  Sponsor an Orphan
                </button>
                <button class="text-black-50 shadow-lg bg-owhite border text-base font-bold px-6 h-16 flex items-center rounded-md text-mont">
                  <img
                    class="mr-3"
                    src="./Icons/icon_hungry.svg"
                    alt="icon_hungry"
                  />{' '}
                  Hunger Appeal
                </button>
                <button class="w-full h-auto py-3 text-center text-mont text-xs text-gray font-bold bg-white border-2 border-lgray rounded-md">
                  {' '}
                  Reset
                </button>
              </div>
              <button className="lg:relative fixed py-4 lg:w-1/4 w-full bottom-0 left-0 bg-green text-black font-bold text-sm lg:rounded-lg uppercase mt-8 z-20">
                Apply Changes
              </button>
            </div>
          ) : null}
        </section>
      </main>
      {showDonateModal ? (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
          appealId={selectedAppealId}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default AppealPage;
