import React from 'react';
import DashboardDonation from './DashboardDonation';
import HistoryRow from '../../components/HistoryRow';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const DonationHistoryTable = ({ donations }) => {
  const [showRowDetails, setshowRowDetails] = React.useState(false);
  const { user } = useSelector(state => state.session);
  const [selectedDontaion, setSelectedDonation] = React.useState({});

  return (
    <>
      <div className="bg-white rounded-xl w-full mt-5">
        <div className="lg:p-6 p-4 flex justify-between items-center border-b border-dgray">
          <h2 className="text-lg font-bold text-black-50">Donation History</h2>
          <a className="text-xs text-blue-dark font-semibold">View All</a>
        </div>
        <div className="lg:p-6 p-4 relative hidden sm:flex">
          <table class="w-full ui single line table table-fix donation-history-table">
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
                  date={dayjs(user.created_at).format('ddd DD MMM, HH:MM')}
                  country="USA"
                  amount={'£' + donation.amount}
                  key={donation.id}
                  setSelectedDonation={setSelectedDonation}
                  donation={donation}
                  setshowRowDetails={setshowRowDetails}
                  showRowDetails={showRowDetails}
                  view="desktop"
                />
              ))}
            </tbody>
          </table>
          {showRowDetails && (
            <DashboardDonation
              showRowDetails={showRowDetails}
              setshowRowDetails={setshowRowDetails}
              donation={selectedDontaion}
            />
          )}
        </div>

        <div className="sm:hidden">
          {donations.map((donation, index) => (
            <HistoryRow
              name={user.first_name + ' ' + user.last_name}
              date={dayjs(user.created_at).format('ddd DD MMM, HH:MM')}
              country="USA"
              amount={'£' + donation.amount}
              key={donation.id}
              setSelectedDonation={setSelectedDonation}
              donation={donation}
              setshowRowDetails={setshowRowDetails}
              showRowDetails={showRowDetails}
              view="mobile"
              border={
                index === donations.length - 1 ? 'border-none' : 'border-b'
              }
            />
          ))}
          {showRowDetails && (
            <DashboardDonation
              showRowDetails={showRowDetails}
              setshowRowDetails={setshowRowDetails}
              donation={selectedDontaion}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DonationHistoryTable;
