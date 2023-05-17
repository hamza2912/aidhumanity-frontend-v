import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';

const MonthlyDonations = () => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="monthly" />
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Monthly donations</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-t-xl w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2">
                <p className="text-gray-600 mt-4">
                  Manage your recurring donations for the cuses you support.
                </p>
              </div>
            </div>
            <div className="bg-white w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2">
                <h2 className="text-lg text-black-50 font-bold">
                  Direct Debits
                </h2>
                <p className="text-gray-600 mt-4">
                  You don’t have any active direct debits.
                </p>
              </div>
            </div>
            <div className="bg-white w-full rounded-b-xl">
              <div className="lg:px-6 px-4 py-8">
                <h2 className="text-lg text-black-50 font-bold">
                  Recurring card payments
                </h2>
                <p className="text-gray-600 mt-4">
                  You don’t have any active monthly donations.
                </p>
              </div>
            </div>
          </div>
          <div className='hidden sm:flex'>
            <Dashboard_footer />
          </div>
        </div>
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>
  );
};

export default MonthlyDonations;
