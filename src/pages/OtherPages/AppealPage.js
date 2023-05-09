import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/header';
import appealService from '../../services/appeals';
import { currencyFormatter } from '../../utils';
import CircularProgressBar from '../AppealDetails/CircularProgressBar';
import { textTruncate } from '../../constants';
import { SERVER_URL } from '../../services/config';
import Loader from '../../components/common/Loader';
import DonateModal from '../../components/modal/DonateModal';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { convertToTitleCase } from '../../constants/index';
import AppealFilter from './AppealFilter';
import { getDonationTag } from '../../constants';
import { AppealMobileFilter } from './AppealFilter/AppealMobileFilter';

const AppealPage = () => {
  const [showFilters, setshowFilters] = React.useState(false);
  const [appeals, setAppeals] = useState([]);
  const [appealsData, setAppealsData] = React.useState({});
  const [loading, setLoading] = useState(false);
  const currentpage = appealsData.pagy?.current_page ?? null;
  const totalpages = appealsData.pagy?.total_pages ?? null;
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);

  const [showBadgeArr, setShowBadgeArr] = useState(
    new Array(appeals.length).fill([])
  );

  const options = [
    'All',
    'Zakat',
    'Sadhaka',
    'Sadhaka Jaraiyah',
    'Our fundraiser',
  ];

  const categories = [
    'All',
    'Build a Mosque',
    'Disaster & Emergency Appeals',
    'Water for All',
    'Sponsor an Orphan',
    'Hunger Appeal',
  ];

  const [filterState, setFilterState] = React.useState({
    selectedOption: options[0],
    selectedCategory: categories[0],
  });

  useEffect(() => {
    fetchAppeals(1);
  }, [filterState.selectedCategory, filterState.selectedOption]);

  const handleFilterChange = (name, option) => {
    if (name === 'category_name') {
      setFilterState({ ...filterState, selectedCategory: option });
    } else if (name === 'appeal_tag') {
      setFilterState({ ...filterState, selectedOption: option });
    }
  };

  const { selectedCategory, selectedOption } = filterState;

  const fetchAppeals = async page => {
    setLoading(true);

    let filters = {};
    if (selectedOption !== options[0]) {
      filters['filters[appeal_tag]'] = selectedOption.toLowerCase();
    } else {
      delete filters.appeal_tag;
    }
    if (selectedCategory !== categories[0]) {
      filters['filters[category_name]'] = selectedCategory;
    } else {
      delete filters.category_name;
    }
    const data = await appealService.getAppeals(page, filters);
    setLoading(false);
    if (page !== 1) {
      setAppeals([...appeals, ...data.appeals]);
    } else {
      setAppeals(data.appeals);
    }
    setAppealsData(data);
    setshowFilters(false);
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

  console.log('Appeals', appeals, 'appeal length', appeals.length);

  return (
    <>
      <Header showDonateButton={true} />
      <main>
        <AppealFilter
          options={options}
          categories={categories}
          selectedCategory={selectedCategory}
          selectedOption={selectedOption}
          handleFilterChange={handleFilterChange}
        />
        <section className="w-full h-auto z-10">
          <div className="w-full h-auto container mx-auto px-5 py-28">
            <div className="w-full h-auto lg:mt-4">
              <div className="w-full h-auto gap-8 grid lg:grid-cols-3 grid-cols-1 items-center justify-around bg-transparent z-10">
                {appeals.map((appeal, index) => (
                  <div
                    className="h-auto rounded-b-2xl py-2 shadow-lg"
                    key={index}
                  >
                    <div className="relative">
                      <Link to={`/appeal/${appeal.id}`}>
                        <img
                          className="w-full rounded-t-xl appeal-card"
                          src={SERVER_URL + appeal.cover_image}
                          alt="carousel_image_1"
                        />
                        <div className="w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60">
                          <p className="text-gray-400 font-medium">
                            {appeal.category.name}{' '}
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="pl-10 pr-6 pt-8 pb-6">
                      <div className="lg:h-36 h-auto">
                        <h2 className="text-xl font-bold text-mont text-black-50">
                          {appeal.title}
                        </h2>
                        <p className="text-base text-mont text-gray-600 mt-2">
                          {textTruncate(appeal.description)}
                        </p>
                      </div>
                      {appeal.donations_count > 0 ? (
                        <div className="flex flex-row items-center mt-4 h-12">
                          <div className="w-1/5 mr-4">
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
                            <div className="flex flex-col">
                              <span className="text-sm text-mont text-blue font-bold">
                                Raised:{' '}
                                {currencyFormatter(appeal.raised_amount)}
                              </span>
                              <span className="text-xs text-mont text-gray-600 font-bold">
                                by <i className="fa-regular fa-circle-user"></i>{' '}
                                {appeal.donations_count} supporters
                              </span>
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                              <span className="text-xs text-mont text-green font-semibold">
                                Goal:{' '}
                                {currencyFormatter(appeal.targeted_amount)}
                              </span>
                              <div className="w-5">
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
                      <div className="flex justify-between items-center mt-10 pt-4 border-t-2 border-gray-200">
                        <Link
                          className="text-mont text-nblue font-bold text-xs"
                          to={`/appeal/${appeal.id}`}
                        >
                          Read More
                        </Link>
                        <button
                          className="text-xs font-bold text-white bg-blue hover:bg-nblue rounded-lg px-4 py-3"
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
            <div className="w-full h-auto flex justify-center px-20 py-8 lg:mb-6">
              <button
                className="text-xs text-nblue text-mont font-medium border-2 border-lgray rounded-lg px-4 py-2"
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
              <AppealMobileFilter
                setFilterState={setFilterState}
                selectedCategory={selectedCategory}
                selectedOption={selectedOption}
                options={options}
                categories={categories}
              />
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
