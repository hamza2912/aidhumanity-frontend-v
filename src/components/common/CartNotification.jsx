import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSummarySidebar } from '../../redux/common/CommonSlice';

const CartNotification = ({ color = 'white' }) => {
  const { cart } = useSelector(state => state.session);
  const dispatch = useDispatch();

  return (
    <button
      className="relative notification cursor-pointer"
      onClick={_ => dispatch(setSummarySidebar(true))}
    >
      <img
        src={
          color === 'white'
            ? '/Icons/icon_package-box-white.svg'
            : '/Icons/icon_package-box.svg'
        }
        alt="package-box"
      />
      {cart?.donations.length > 0 && (
        <p className="px-1.5 py-px text-vs bg-blue rounded-full absolute bottom-0 -right-1 text-white">
          {cart?.donations.length || 0}
        </p>
      )}
    </button>
  );
};

export default CartNotification;
