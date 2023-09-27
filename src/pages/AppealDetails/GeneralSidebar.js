import React, { useState } from 'react';
import { textTruncate } from '../../constants';
import CartService from '../../services/cart';
import { setCart } from '../../redux/auth/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCheckoutSidebar,
  setRegularSidebar,
  setSummarySidebar,
} from '../../redux/common/CommonSlice';
import ButtonLoader from '../../components/common/ButtonLoader';

const GeneralSidebar = ({ appeal, campaignId }) => {
  const [donationAmount, setDonationAmount] = useState('50');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const amount = donationAmount;

      const payload = {
        cart: {
          donations_attributes: {
            id: null,
            appeal_id: appeal.id,
            campaign_id: campaignId,
            amount_cents: amount * 100,
          },
        },
      };
      const response = await CartService.updateCart(payload, !!user);
      dispatch(setCart(response));
      dispatch(setSummarySidebar(true));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="lg:w-80 w-11/12 h-full bg-sblue fade-in transition ease-in-out">
      <div className="w-full h-auto flex justify-between p-5 border-b-2 border-l2black">
        <h2 className="text-mont text-nblue text-lg font-bold">
          Add your donation
        </h2>
        <button
          className="text-nblue text-lg"
          onClick={() => {
            dispatch(setRegularSidebar(false));
            dispatch(setSummarySidebar(false));
            dispatch(setCheckoutSidebar(false));
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-5 z-1 relative">
        <h2 className="text-mont text-xl text-white font-bold">
          {appeal.title}
        </h2>
        <p className="text-mont text-sm text-white mt-4">
          {textTruncate(appeal.description, 300)}
        </p>
        <div className="w-full h-auto px-5 py-6 bg-white rounded-2xl mt-6 relative">
          <div className="w-full h-auto flex justify-between gap-4">
            <div className=" h-auto">
              <button className="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">
                Recurring <br /> Payment
              </button>
              <div className="flex mt-3">
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setDonationAmount('25')}
                >
                  <div className="w-full h-auto flex gap-2">
                    <img
                      src={`/Icons/icon_check-circle${
                        donationAmount === '25' ? '' : '-black'
                      }.svg`}
                      alt="icon_check-circle"
                    />
                    <h2
                      className={`text-mont text-lg ${
                        donationAmount === '25' ? 'text-green' : 'text-13black'
                      } font-semibold`}
                    >
                      £25
                    </h2>
                  </div>
                  <p className="text-mont text-xs text-gray mt-1 text-left">
                    Help for one {appeal.title}
                  </p>
                </button>
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setDonationAmount('50')}
                >
                  <div className="w-full h-auto flex gap-2">
                    <img
                      src={`/Icons/icon_check-circle${
                        donationAmount === '50' ? '' : '-black'
                      }.svg`}
                      alt="icon_check-circle"
                    />
                    <h2
                      className={`text-mont text-lg ${
                        donationAmount === '50' ? 'text-green' : 'text-13black'
                      } font-semibold`}
                    >
                      £50
                    </h2>
                  </div>
                  <p className="text-mont text-xs text-gray mt-1 text-left">
                    Help for 2 {appeal.title}
                  </p>
                </button>
              </div>
              <div className="flex">
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setDonationAmount('100')}
                >
                  <div className="w-full h-auto flex gap-2">
                    <img
                      src={`/Icons/icon_check-circle${
                        donationAmount === '100' ? '' : '-black'
                      }.svg`}
                      alt="icon_check-circle"
                    />
                    <h2
                      className={`text-mont text-lg ${
                        donationAmount === '100' ? 'text-green' : 'text-13black'
                      } font-semibold`}
                    >
                      £100
                    </h2>
                  </div>
                  <p className="text-mont text-xs text-gray mt-1 text-left">
                    Help for 4 {appeal.title}
                  </p>
                </button>
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setDonationAmount('300')}
                >
                  <div className="w-full h-auto flex gap-2">
                    <img
                      src={`/Icons/icon_check-circle${
                        donationAmount === '300' ? '' : '-black'
                      }.svg`}
                      alt="icon_check-circle"
                    />
                    <h2
                      className={`text-mont text-lg ${
                        donationAmount === '300' ? 'text-green' : 'text-13black'
                      } font-semibold`}
                    >
                      £300
                    </h2>
                  </div>
                  <p className="text-mont text-xs text-gray mt-1 text-left">
                    Help for 6 {appeal.title}
                  </p>
                </button>
              </div>
              <div className="flex">
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setDonationAmount('360')}
                >
                  <div className="w-full h-auto flex gap-2">
                    <img
                      src={`/Icons/icon_check-circle${
                        donationAmount === '360' ? '' : '-black'
                      }.svg`}
                      alt="icon_check-circle"
                    />
                    <h2
                      className={`text-mont text-lg ${
                        donationAmount === '360' ? 'text-green' : 'text-13black'
                      } font-semibold`}
                    >
                      £360
                    </h2>
                  </div>
                  <p className="text-mont text-xs text-gray mt-1 text-left">
                    Help for 10 {appeal.title}
                  </p>
                </button>
                <button
                  className="p-2 cursor-pointer"
                  onClick={() => setDonationAmount('1000')}
                >
                  <div className="w-full h-auto flex gap-2">
                    <img
                      src={`/Icons/icon_check-circle${
                        donationAmount === '1000' ? '' : '-black'
                      }.svg`}
                      alt="icon_check-circle"
                    />
                    <h2
                      className={`text-mont text-lg ${
                        donationAmount === '1000'
                          ? 'text-green'
                          : 'text-13black'
                      } font-semibold`}
                    >
                      £1,000
                    </h2>
                  </div>
                  <p className="text-mont text-xs text-gray mt-1 text-left">
                    Help for 12 {appeal.title}
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue text-mont">
              £
            </span>
            <input
              className="w-full h-auto p-2 pl-6 flex mt-4 justify-between border border-owhite rounded-lg text-sm text-mont text-lblack font-medium focus:outline-none"
              value={donationAmount}
              type="number"
              onChange={e => setDonationAmount(e.target.value)}
            />
          </div>
          <ButtonLoader
            className="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4"
            loading={loading}
            onClick={handleSubmit}
          >
            ADD DONATION
          </ButtonLoader>
        </div>
      </div>
      <img className='-mt-16 z-0 relative'
        src="/images/logo_aid-humanity-icon.png"
        alt="logo_aid-humanity-icon"
      />
    </div>
  );
};

export default GeneralSidebar;
