import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheckoutSidebar } from '../../redux/common/CommonSlice';
import HelpFurther from '../../components/common/HelpFurther';

const CheckoutSidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="lg:w-80 w-11/12 h-auto bg-nblue">
      <div className="w-full h-auto flex justify-between py-5 px-6 border-b-2 border-l2black">
        <div className="flex items-center">
          <img
            className="mr-2"
            src="/Icons/icon_cash-register.svg"
            alt="icon_cash-register"
          />
          <h2 className="text-mont text-white text-lg font-bold flex">
            Checkout
          </h2>
        </div>
        <button
          className="text-white text-lg"
          onClick={() => {
            dispatch(setCheckoutSidebar(false));
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <HelpFurther />
    </div>
  );
};

export default CheckoutSidebar;
