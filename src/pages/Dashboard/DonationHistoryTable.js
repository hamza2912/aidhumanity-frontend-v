import React from 'react';
import DashboardDonation from './DashboardDonation';
import HistoryRow from '../../components/HistoryRow';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const DonationHistoryTable = ({ donations }) => {
  const [showRowDetails, setshowRowDetails] = React.useState(false);
  const { user } = useSelector(state => state.session);
  const [selectedDontaion, setSelectedDonation] = React.useState({});

  return (
    <>
      <button
        classname="mt-2 lg:hidden"
        onClick={() => setshowRowDetails(!showRowDetails)}
      >
        Show Donation
      </button>
      <div className="bg-white rounded-xl w-full mt-5">
        <div className="lg:p-6 p-4 flex justify-between items-center border-b-2">
          <h2 className="text-lg font-bold text-black-50">Donation History</h2>
          <a className="text-xs text-blue-dark font-semibold">View All</a>
        </div>
        <div className="lg:p-6 p-4 relative">
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
              {donations.map(donation => (
                <HistoryRow
                  name={user.first_name + ' ' + user.last_name}
                  date={dayjs(user.created_at).format('DD MMM, YYYY')}
                  country="USA"
                  amount={'£' + donation.amount}
                  key={donation.id}
                  setSelectedDonation={setSelectedDonation}
                  donation={donation}
                  setshowRowDetails={setshowRowDetails}
                  showRowDetails={showRowDetails}
                />
              ))}
            </tbody>
          </table>
          {isMobile && showRowDetails ? (
            <DashboardDonation
              showRowDetails={showRowDetails}
              setshowRowDetails={setshowRowDetails}
              donation={selectedDontaion}
            />
          ) : isMobile && !showRowDetails ? null : (
            showRowDetails && (
              <DashboardDonation
                showRowDetails={showRowDetails}
                setshowRowDetails={setshowRowDetails}
                donation={selectedDontaion}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default DonationHistoryTable;
