import React from 'react';
import Dashboard_header from '../Dashboard/DashboardHeader';
import Dashboard_footer2 from '../../components/DashboardFooter2';
import History_row from '../../components/HistoryRow';

const PageDonations = () => {
  return (
    <div>
      <Dashboard_header />
      <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8">
        <div className="lg:w-3/5 w-full page-section mx-auto">
          <h1 className="text-blue font-bold text-2xl lg:my-6 my-4 pl-6">
            Donations
          </h1>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl">
            <h2 className="text-lg text-black-50 font-bold">Donations Total</h2>
          </div>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2">
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed">
              <p>Number of donations:</p>
              <p>2</p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed mt-3">
              <p>Total raised:</p>
              <p>£365.00</p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed mt-3">
              <p>Total raised online:</p>
              <p>£305.00</p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed mt-3">
              <p>Total offline donations:</p>
              <p>£365.00</p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 mt-3">
              <p>Gift Aid plus supplement:</p>
              <p>£0.00</p>
            </div>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">
                Offile Donations
              </h2>
              <p className="text-gray-600 mt-4">
                Have you received any offline donations? Add the total amount
                here.
              </p>
              <div className="flex lg:flex-row flex-col gap-4 items-center mt-6">
                <div className="relative lg:w-2/3 w-full">
                  <input
                    id="title"
                    className="w-full py-3 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10"
                    type="text"
                    placeholder="$ 0.00"
                  />
                </div>
                <button className="py-4 lg:w-1/3 w-full lg:relative fixed lg:bottom-0 bottom-12 left-0 bg-green text-black font-bold text-sm lg:rounded-lg uppercase">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white w-full border-b-2 rounded-b-xl">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">
                Donations made to your page
              </h2>
              <p className="text-gray-600 mt-4">You have 0 donations.</p>
              <p className="text-blue text-sm font-semibold mt-3">
                See what happens to your donations
              </p>
              <table class="w-full ui single line table table-fix">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <History_row
                    name="Ron Hill"
                    date="Tue 12 Dec, 08:15"
                    country="USA"
                    amount="£450.90"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Dashboard_footer2 active="donations" />
    </div>
  );
};

export default PageDonations;
