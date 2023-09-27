import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSubscriptionSidebar,
  setSummarySidebar,
  setCheckoutSidebar,
} from '../../redux/common/CommonSlice';
import { subsDuration, textTruncate } from '../../constants';
import CartService from '../../services/cart';
import { setCart } from '../../redux/auth/userSlice';
import ButtonLoader from '../../components/common/ButtonLoader';

const SubscriptionSidebar = ({ appeal, campaignId }) => {
  const [amount, setamount] = React.useState('10');
  const [loading, setLoading] = React.useState(false);
  const { user } = useSelector(state => state.session);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      setLoading(true);

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
    <div className="lg:w-80 w-11/12 h-auto bg-sblue fade-in transition ease-in-out">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <h2 className="text-mont text-nblue text-lg font-bold">
          Add your donation
        </h2>
        <button
          className="text-nblue text-lg"
          onClick={() => {
            dispatch(setSubscriptionSidebar(false));
            dispatch(setSummarySidebar(false));
            dispatch(setCheckoutSidebar(false));
          }}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-4">
        <h2 className="text-mont text-xl text-white font-bold">
          {appeal.title}
        </h2>
        <p className="text-mont text-sm text-white mt-4">
          {textTruncate(appeal.description, 300)}
        </p>
        <div className="w-full h-auto p-4 bg-white rounded-2xl mt-6">
          <button className="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">
            {subsDuration[appeal.subscription_interval]} Recurring <br />{' '}
            Payment
          </button>
          {/* <div>
            <h3 className="text-mont text-sm text-lblack font-bold mt-4">
              Choose your Cause
            </h3>
            <p className="text-mont text-xs text-l2black mt-2">
              Aid humanity supports hundreds of projects around the world and
              your donation on this month will be needed in those most neediest
              of places
            </p>
            <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <img src="/Icons/icon_needy.svg" alt="icon_needy" />
              Most Needy
            </button>
            <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <img src="/Icons/icon_zacat.svg" alt="icon_zacat" />
              Zakat
            </button>
            <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
              <img src="/Icons/icon_dot-circle (1).svg" alt="icon_dot-circle" />
              <img src="/Icons/icon_hungry.svg" alt="icon_hungry" />
              Food
            </button>
            <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <img src="/Icons/icon_water.svg" alt="icon_water" />
              Water Well
            </button>
            <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <img src="/Icons/icon_sadaqah.svg" alt="icon_sadaqah" />
              Sadaqah
            </button>
            <button className="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <img src="/Icons/icon_mosque.svg" alt="icon_mosque" />
              Masjid builds
            </button>
            <h3 className="text-mont text-sm text-lblack font-bold mt-4">
              Choose how you want to give
            </h3>
            <button className="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              Daily 30 nights
            </button>
            <button className="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              Last 10 days
            </button>
            <button className="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              Blessed odd days
            </button>
            <p className="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              One Payment on the 27th Night
            </p>
          </div> */}
          <h3 className="text-mont text-sm text-lblack font-bold mt-4">
            Amount
          </h3>
          <div className="w-full h-auto mt-4 flex rounded-lg border border-lgray bg-white">
            <div
              onClick={() => {
                setamount('10');
              }}
              className={
                amount === '10'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue rounded-l-lg text-white border-r border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£10</p>
            </div>
            <div
              onClick={() => {
                setamount('20');
              }}
              className={
                amount === '20'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£20</p>
            </div>
            <div
              onClick={() => {
                setamount('30');
              }}
              className={
                amount === '30'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£30</p>
            </div>
            <div
              onClick={() => {
                setamount('50');
              }}
              className={
                amount === '50'
                  ? 'w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue rounded-r-lg text-white border-lgray'
                  : 'w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-lgray'
              }
            >
              <p className="text-mont text-center text-xs font-medium">£50</p>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue text-mont">
              £
            </span>
            <input
              className="w-full h-auto p-2 pl-6 flex mt-4 justify-between border border-owhite rounded-lg text-sm text-mont text-lblack font-medium focus:outline-none"
              value={amount}
              type="number"
              onChange={e => setamount(e.target.value)}
            />
          </div>
          <ButtonLoader
            className="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4"
            onClick={handleSubmit}
            loading={loading}
          >
            ADD DONATION
          </ButtonLoader>
        </div>
      </div>
      <img
        src="/images/logo_aid-humanity-icon.png"
        alt="logo_aid-humanity-icon"
      />
    </div>
  );
};

export default SubscriptionSidebar;
