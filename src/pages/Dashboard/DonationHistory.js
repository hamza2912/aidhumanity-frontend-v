import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import DashboardFooter from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';
import withAuth from '../../AuthRoute';
import dashboardService from '../../services/dashboard';
import { chunkArray } from '../../constants';
import { useSelector } from 'react-redux';
import DonationHistoryCarousel from './DonationHistoryCarousel';

const DonationHistory = () => {
  const [doationHistoryData, setDonationHistoryData] = React.useState({});
  const [donationsPair, setDonationPair] = useState([]);
  const { user } = useSelector(state => state.session);

  useEffect(() => {
    fetchDonationHistoryData();
  }, []);

  const fetchDonationHistoryData = async (page = 1) => {
    const data = await dashboardService.getDonationHistoryData(page);
    if (data.donations) {
      setDonationPair(chunkArray(data.donations));
    }
    setDonationHistoryData(data);
  };

  const { pagy, donations, donation_stats } = doationHistoryData;

  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="donation" />
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Donation history</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-xl w-full lg:px-6 px-4 py-8 ">
              <div className="flex lg:flex-row flex-col lg:gap-32 gap-4">
                <div className="flex flex-col">
                  <p className="text-gray-600">Total donations</p>
                  <h2 className="text-lg text-black-50 font-bold">
                    £{donation_stats?.total || 0}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-600">Gift Aid reclaimed</p>
                  <h2 className="text-lg text-black-50 font-bold">
                    £{donation_stats?.gift_aid || 0}
                  </h2>
                </div>
              </div>
              <DonationHistoryCarousel {...{ donationsPair, user }} />
              <div className="flex justify-between mt-6 items-center">
                <p className="text-black-50 text-sm hidden lg:block">
                  {donations?.length * pagy?.total_pages || 0} results
                </p>
                <div className="flex gap-2 w-auto">
                  <button
                    className={`border-2 border-gray-200 bg-gray text-gray-400 py-2 px-4 font-semibold text-sm rounded-lg z-10 prev ${
                      pagy?.current_page === 1 ? 'invisible' : ''
                    }`}
                    onClick={() =>
                      fetchDonationHistoryData(pagy?.current_page - 1)
                    }
                    disabled={pagy?.current_page === 1}
                  >
                    PREVIOUS
                  </button>
                  <button
                    className={`border-2 border-gray-200 text-gray-400 py-2 px-4 font-semibold text-sm rounded-lg z-10 next ${
                      pagy?.current_page === pagy?.total_pages
                        ? 'invisible'
                        : ''
                    }`}
                    onClick={() =>
                      fetchDonationHistoryData(pagy?.current_page + 1)
                    }
                    disabled={pagy?.current_page === pagy?.total_pages}
                  >
                    NEXT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex">
            <DashboardFooter />
          </div>
        </div>
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>
  );
};

export default withAuth(DonationHistory);
