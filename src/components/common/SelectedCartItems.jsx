import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFormatter } from '../../utils';
import ButtonLoader from './ButtonLoader';
import CartService from '../../services/cart';
import { toast } from 'react-toastify';
import { setCart } from '../../redux/auth/userSlice';
import { subsDuration } from '../../constants';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import useCloseSidebars from '../../hooks/useCloseSidebar';

const SelectedCartItems = () => {
  const { cart, user } = useSelector(state => state.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeSidebars = useCloseSidebars();

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
      if (response.donations.length === 0) {
        navigate('/');
        closeSidebars();
        toast.warn('Please add Appeals to checkout');
      } else {
        toast.success(
          'Removed from cart. 🥺 Many Appeals need your help. 🙏. Please donate ... 🎁'
        );
      }
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
            <p className="text-mont text-xs text-gray mt-1">MOST NEEDED</p>
            <p className="text-mont text-xs text-gray mt-1">
              {donation.cause_title}
            </p>
          </div>
          <div className="w-1/3 h-auto flex flex-col justify-between items-end">
            <p className="text-mont text-xs text-l3black font-bold">
              {currencyFormatter(donation.amount)}
            </p>
            <div
              className="tooltip hover:tooltip-open tooltip-error"
              data-tip={
                cart?.donations.length === 1
                  ? 'This is the only Donation you are donating now. Are you sure you want to Cancel it?'
                  : ''
              }
            >
              <button onClick={_ => handleDeleteClick(donation)}>
                <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center cursor-pointer hover:shadow-inner hover:bg-gray-50">
                  <img
                    className="hover:shadow-2xl"
                    src="/Icons/icon_times.svg"
                    alt="icon_times"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="py-2 px-5 rounded-lg bg-green absolute -top-4 causes">
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
