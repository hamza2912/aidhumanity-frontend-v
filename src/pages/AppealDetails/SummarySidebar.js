import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFormatter } from '../../utils';
import { useNavigate } from 'react-router-dom';
import {
  setCheckoutSidebar,
  setProjectSidebar,
  setSummarySidebar,
} from '../../redux/common/CommonSlice';
import ButtonLoader from '../../components/common/ButtonLoader';
import SelectedCartItems from '../../components/common/SelectedCartItems';
import AppealService from '../../services/appeals';
import { setUpsellAppeals } from '../../redux/auth/userSlice';

const SummarySidebar = () => {
  const { cart } = useSelector(state => state.session);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUpSellAppeals = async () => {
    try {
      const { appeals } = await AppealService.getUpsellAppeals();
      dispatch(setUpsellAppeals(appeals.slice(0, 1)));
    } catch (err) {}
  };

  useEffect(() => {
    fetchUpSellAppeals();
  }, []);

  return (
    <div className="lg:w-80 w-11/12 bg-l2gray min-h-screen fade-in transition ease-in-out lg:relative absolute top-0 right-0 h-full z-1">
      <div className="w-full h-auto flex justify-between p-5 border-b-2 border-l2black">
        <div className="flex items-center">
          <img
            className="mr-2"
            src="/Icons/icon_plus-cirle.svg"
            alt="icon_plus-cirle"
          />
          <h2 className="text-mont text-l2black text-lg font-bold flex">
            Donation Added
          </h2>
        </div>
        <button
          className="text-nblue text-lg"
          onClick={() => {
            dispatch(setSummarySidebar(false));
            dispatch(setCheckoutSidebar(false));
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-full p-6">
        <p className="text-mont text-base text-left text-l2black font-semibold">
          You are donating to{' '}
          <span className="text-orange">{cart?.donations.length} causes</span>
        </p>
        <div className="w-full h-auto">
          <SelectedCartItems />
        </div>
        <div className="w-full h-auto px-4 py-6 border-2 border-sblue bg-white rounded-2xl mt-6">
          <div className="w-full h-auto flex justify-between">
            <p className="text-mont text-[14px] text-l3black font-semibold">
              DONATIONS
            </p>
            <p className="text-mont text-[18px] text-l3black font-bold">
              {currencyFormatter(
                cart?.donations.reduce(
                  (acc, donation) => acc + donation.amount,
                  0
                )
              )}
            </p>
          </div>
          <ButtonLoader
            className="w-full h-auto p-4 bg-green rounded-lg text-center text-mont text-xs text-white font-bold mt-4"
            onClick={() => {
              dispatch(setProjectSidebar(false));
              dispatch(setSummarySidebar(false));
              dispatch(setCheckoutSidebar(false));
              navigate('/appeals');
            }}
          >
            ADD DONATION
          </ButtonLoader>
          <ButtonLoader
            className="w-full h-auto p-4 bg-sblue rounded-lg text-center text-mont text-xs text-white font-bold mt-3"
            onClick={_ => dispatch(setCheckoutSidebar(true))}
          >
            CHECKOUT
          </ButtonLoader>
        </div>
        <div className="w-full h-auto flex justify-center mt-6">
          <img
            className="w-12"
            src="/logo/logo_aid-humanity-icon.svg"
            alt="logo_aid-humanity-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SummarySidebar;
