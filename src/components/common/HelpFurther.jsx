import React from 'react';
import { currencyFormatter } from '../../utils';
import ButtonLoader from '../../components/common/ButtonLoader';
import { setAdminCost, setCart } from '../../redux/auth/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CartService from '../../services/cart';

const HelpFurther = ({ page }) => {
  const navigate = useNavigate();
  const { cart, upSellAppeals, isAdminCost, user } = useSelector(
    state => state.session
  );

  const handleClick = () => {
    navigate('/checkout');
  };

  const dispatch = useDispatch();

  const handleUpsellToCart = async appeal => {
    try {
      const amount = 20;
      const payload = {
        cart: {
          donations_attributes: {
            id: null,
            appeal_id: appeal.id,
            amount_cents: amount * 100,
          },
        },
      };
      const response = await CartService.updateCart(payload, !!user);
      toast.success('Cart updated successfully');
      dispatch(setCart(response));
    } catch (error) {}
  };

  const handleDeleteClick = async id => {
    const donation = cart.donations.find(d => d.appeal_id === id);
    try {
      const response = await CartService.updateCart({
        cart: {
          donations_attributes: {
            id: donation.id,
            _destroy: true,
          },
        },
      });
      dispatch(setCart(response));
      toast.error('Removed from cart');
    } catch (err) {
      toast.error('Unable to Delete');
    }
  };

  const isSelectedUpSell = id => {
    return cart.donations.some(d => d.appeal_id === id);
  };

  const includeAdminCost = price => (isAdminCost ? price + 1 : price);

  return (
    <div className={`w-full h-auto ${page === 'checkout' ? '' : 'p-6'}`}>
      <h1
        className={`text-mont ${
          page === 'checkout' ? 'font-bold mt-6' : 'font-semibold text-white'
        } text-lg`}
      >
        Help us further
      </h1>
      <div
        className={`w-full h-auto flex justify-between ${
          page === 'checkout' ? 'px-4 mt-4' : 'px-2 mt-8'
        } py-3 rounded-2xl bg-pink cursor-pointer`}
      >
        <div className="w-full h-auto flex gap-2 items-center">
          <img
            src={`/Icons/icon_check-circle${
              isAdminCost ? '-black' : '-unchecked-black'
            }.svg`}
            alt="icon_check-circle"
            
            // className={isAdminCost ? 'check-circle' : ''}
            onClick={() => dispatch(setAdminCost(!isAdminCost))}
          />
          <img
            src="/Icons/illustration_admin-love.svg"
            alt="illustration_admin-love"
          />
          <h3 className="text-xs text-mont text-black-50 font-semibold">
            Donate to Admin cost £1
          </h3>
        </div>
        <div className="w-1/3 h-auto flex items-center justify-end">
          <p className="text-mont text-xs text-black-50 font-bold">£1</p>
        </div>
      </div>
      {upSellAppeals?.map((upSellAppeal, index) => (
        <div
          className={`w-full h-auto flex justify-between ${
            page === 'checkout' ? 'px-4' : 'px-2'
          } py-4 mt-4 rounded-2xl bg-green cursor-pointer`}
          key={`upsell-item-${index}`}
        >
          <div className="w-full h-auto flex gap-2">
            <img
              src={`/Icons/icon_check-circle${
                isSelectedUpSell(upSellAppeal.id) ? '-unchecked-black' : '-white'
              }.svg`}
              alt="icon_check-circle"
              onClick={() =>
                isSelectedUpSell(upSellAppeal.id)
                  ? handleDeleteClick(upSellAppeal.id)
                  : handleUpsellToCart(upSellAppeal)
              }
            />
            <h3 className="text-sm text-mont text-white font-semibold">
              {upSellAppeal.title}
            </h3>
          </div>
          <div className="w-1/3 h-auto flex items-center justify-end">
            <p className="text-mont text-xs text-white font-bold">
              {currencyFormatter(20)}
            </p>
          </div>
        </div>
      ))}
      <div className="w-full h-auto px-5 py-6 lg:rounded-2xl rounded-2xl bg-sblue mt-5">
        <div className="w-full h-auto flex justify-between">
          <p className="text-mont text-sm text-white font-semibold">TOTAL</p>
          <p className="text-mont text-base text-white font-bold">
            {' '}
            {currencyFormatter(
              includeAdminCost(
                cart?.donations.reduce(
                  (acc, donation) => acc + donation.amount,
                  0
                )
              )
            )}
          </p>
        </div>
        <ButtonLoader
          className="p-4 w-full h-auto text-center rounded-lg bg-white text-mont text-green text-xs font-bold mt-6"
          onClick={handleClick}
        >
          COMPLETE DONATION<i className="fa-solid fa-arrow-right ml-2"></i>
        </ButtonLoader>
      </div>
    </div>
  );
};

export default HelpFurther;
