import React from 'react';
import HistoryRow from '../../components/HistoryRow';
import { fullName } from '../../constants';
import { currencyFormatter } from '../../utils';
import dayjs from 'dayjs';

const DonationTable = ({ donations }) => {
  return (
    <tbody>
      {donations.map(donation => {
        return (
          <HistoryRow
            name={fullName(donation.user)}
            date={dayjs(donation.created_at).format('ddd DD MMM, HH:MM')}
            country="USA"
            amount={currencyFormatter(donation.amount)}
          />
        );
      })}
    </tbody>
  );
};

export default DonationTable;
