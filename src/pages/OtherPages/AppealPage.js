import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import appealService from '../../services/appeals';
import Loader from '../../components/common/Loader';
import DonateModal from '../../components/modal/DonateModal';
import AppealFilter from './AppealFilter';
import { AppealMobileFilter } from './AppealFilter/AppealMobileFilter';
import AppealCard from '../../components/appeal/AppealCard';
import { useDispatch } from 'react-redux';
import { setBodyOverflowHidden } from '../../redux/common/CommonSlice';

const AppealPage = () => {
  const dispatch = useDispatch();
  const [showFilters, setshowFilters] = React.useState(false);
  const [appeals, setAppeals] = useState([]);
  const [appealsData, setAppealsData] = React.useState({});
  const [loading, setLoading] = useState(false);
  const currentpage = appealsData.pagy?.current_page ?? null;
  const totalpages = appealsData.pagy?.total_pages ?? null;
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);
  const [hoveredAppealId, setHoveredAppealId] = useState(null);
  const [showLogin, setShowLogin] = React.useState(false);

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

  const overflowHidden = () => {
    dispatch(setBodyOverflowHidden(true));
  } 

  const overflowVisible = () => {
    dispatch(setBodyOverflowHidden(false));
  } 

  return (
    <>
      <Header
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        overflowHidden={overflowHidden}
        overflowVisible={overflowVisible}
      />
      <div
        onClick={() => {
          setShowLogin(false);
        }}
      >
        <main>
          <AppealFilter
            options={options}
            categories={categories}
            selectedCategory={selectedCategory}
            selectedOption={selectedOption}
            handleFilterChange={handleFilterChange}
          />
          <section className="w-full h-auto z-10">
            <div className="w-full h-auto container mx-auto px-4 lg:px-0 py-6 lg:py-12">
              <p className="text-black text-[32px] font-bold mb-6 lg:hidden">
                Appeals
              </p>
              <div className="w-full h-auto">
                <div className="w-full h-auto gap-8 grid lg:grid-cols-3 grid-cols-1 items-center justify-around bg-transparent z-10">
                  {appeals.map((appeal, index) => (
                    <AppealCard
                      {...{
                        appeal,
                        index,
                        setHoveredAppealId,
                        hoveredAppealId,
                        setSelectedAppealId,
                        setshowDonateModal,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {currentpage !== totalpages && (
              <div className="w-full h-auto flex justify-center px-20 mt-4 mb-12 lg:mb-16 lg:mt-0">
                <button
                  className="text-xs text-nblue text-mont font-medium border-2 border-lgray rounded-lg px-4 py-2"
                  onClick={() => fetchAppeals(currentpage + 1)}
                >
                  {loading ? <Loader /> : 'Load More'}
                </button>
              </div>
            )}
            {!showFilters && (
              <button
                onClick={() => {
                  setshowFilters(true);
                  overflowHidden();
                }}
                className="bg-gray-10 fixed w-full left-0 bottom-0 z-[1] h-16 flex lg:hidden items-center justify-center"
              >
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-sliders text-lg"></i>
                  <p className="text-black-50 font-bold uppercase text-sm">
                    Filters
                  </p>
                </div>
              </button>
            )}
            {showFilters && (
              <div className="bg-gray fixed top-0 left-0 h-screen w-full z-10">
                <div className="bg-white py-4">
                  <p className="text-sm font-semibold pl-6 flex items-center gap-2">
                    <img
                      onClick={() => {
                        setshowFilters(false);
                        overflowVisible();
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
            )}
          </section>
        </main>
        {showDonateModal && (
          <DonateModal
            showModal={showDonateModal}
            setshowModal={setshowDonateModal}
            quick={false}
            appealId={selectedAppealId}
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default AppealPage;
