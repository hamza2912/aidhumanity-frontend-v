import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFormatter } from '../../utils';
import ButtonLoader from './ButtonLoader';
import CartService from '../../services/cart';
import { toast } from 'react-toastify';
import { setCart } from '../../redux/auth/userSlice';
import { subsDuration } from '../../constants';
import _ from 'lodash';

const SelectedCartItems = () => {
  const { cart, user } = useSelector(state => state.session);
  const dispatch = useDispatch();

  const handleDeleteClick = async donation => {
    try {
      const response = await CartService.updateCart(
        {
          cart: {
            donations_attributes: {
              id: donation.id,
              _destroy: true,
            },
          },
        },
        !!user
      );
      dispatch(setCart(response));
      toast.error('Removed from cart');
    } catch (err) {
      toast.error('Unable to Delete');
    }
  };

  return (
    <div>
      {cart?.donations.map((donation, index) => (
        <div
          className="w-full h-auto px-5 pt-6 pb-2 flex justify-between bg-white border border-green rounded-2xl mt-8 relative"
          key={`selected-donations-${index}`}
        >
          <div className="w-2/3 h-auto">
            <h3 className="text-mont text-xs text-l3black font-semibold">
              {donation.category} ({_.startCase(donation.appeal_tag)})
            </h3>
            <p className="text-mont text-xs text-gray">MOST NEEDED, DONATION</p>
          </div>
          <div className="w-1/3 h-auto flex flex-col justify-between items-end">
            <p className="text-mont text-xs text-l3black font-bold">
              {currencyFormatter(donation.amount)}
            </p>
            <ButtonLoader onClick={_ => handleDeleteClick(donation)}>
              <img className='hover:shadow-xl' src="/Icons/icon_times.svg" alt="icon_times" />
            </ButtonLoader>
          </div>
          <div className="py-2 px-3 rounded-2xl bg-green absolute -top-4 causes">
            <p className="text-mont text-xs text-white font-semibold">
              {subsDuration[donation.payment_interval.toLowerCase()] +
                ' Payment'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedCartItems;
