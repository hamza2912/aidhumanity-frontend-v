import React, { useState, useEffect, useCallback } from 'react';
import { currencyFormatter } from '../utils';
import { useNavigate } from 'react-router-dom';

const ZakatCalculator = () => {
  const initialState = {
    goldSilverValue: 0,
    cashValue: 0,
    otherSavings: 0,
    investmentValue: 0,
    moneyOwedToYou: 0,
    stockValue: 0,
    moneyYouOwe: 0,
    otherOutgoings: 0,
    netAssets: 0,
  };
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);
  const [zakatPayable, setZakatPayable] = useState(0);

  const calculateZakat = useCallback(() => {
    const totalAssets = Object.keys(formState).reduce((acc, key) => {
      if (key !== 'moneyYouOwe' && key !== 'otherOutgoings') {
        return acc + parseFloat(formState[key]);
      }
      return acc;
    }, 0);

    const totalLiabilities =
      parseFloat(formState.moneyYouOwe) + parseFloat(formState.otherOutgoings);

    const zakat = ((totalAssets - totalLiabilities) * 0.025).toFixed(2);
    setZakatPayable(zakat);
  }, [formState]);

  useEffect(() => {
    calculateZakat();
  }, [formState, calculateZakat]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    const formattedValue = value.startsWith('0') ? value.slice(1) : value;
    setFormState(prevState => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleDonate = () => {
    navigate('/appeals', { state: { queryFilter: 'Zakat' } });
  };
  return (
    <>
      <div className="w-full lg:w-1/2 lg:py-8 py-2 lg:pl-8 pl-2 mt-4 lg:mt-0 h-auto flex justify-end relative lg:mb-0 mb-20">
        <img
          className="absolute -right-12 top-8"
          src="/Icons/Ellipse 1793.svg"
          alt="Ellipse 1793"
        />
        <div className="lg:w-10/12 w-full h-auto z-0 bg-white rounded-2xl shadow-md relative">
          <img
            className="absolute top-0 left-0 px-1"
            src="./Icons/shape_mega-menu-horizontal-medium.svg"
            alt="shape_mega-menu-horizontal"
          />
          <form className="w-full h-auto" action="">
            <div className="w-full h-auto border-b border-lgray px-8 pb-4 pt-10">
              <h1 className="text-black-50 text-mont text-3xl font-bold">
                Our Zakat Calculator
              </h1>
              <h3 className="text-mont text-xl text-black-50 font-bold mt-7">
                Gold and Silver
              </h3>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4 mb-5">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Value of Gold & Silver"
                >
                  Value of Gold & Silver you possess
                </label>
                <input
                  value={formState.goldSilverValue}
                  name="goldSilverValue"
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-lgray px-8 py-4">
              <h3 className="text-mont text-xl text-black-50 font-bold mt-2">
                Money
              </h3>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Cash at Home & Bank Accounts"
                >
                  Cash at Home & Bank Accounts
                </label>
                <input
                  name="cashValue"
                  value={formState.cashValue}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Other Savings"
                >
                  Other Savings
                </label>
                <input
                  name="otherSavings"
                  value={formState.otherSavings}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Investment & Share Values"
                >
                  Investment & Share Values
                </label>
                <input
                  name="investmentValue"
                  value={formState.investmentValue}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Money owed to you"
                >
                  Money owed to you
                </label>
                <input
                  name="moneyOwedToYou"
                  value={formState.moneyOwedToYou}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="w-full h-auto border-b border-lgray px-8 py-4">
              <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
                Business Assets
              </h3>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Stock Value"
                >
                  Stock Value
                </label>
                <input
                  name="stockValue"
                  value={formState.stockValue}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="w-full h-auto border-b border-lgray px-8 py-4">
              <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
                Short Term Liabilities
              </h3>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Money You Owe"
                >
                  Money You Owe
                </label>
                <input
                  name="moneyYouOwe"
                  value={formState.moneyYouOwe}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4">
                <label
                  className="text-mont text-dgray text-xs font-semibold"
                  for="Other Outgoings Due"
                >
                  Other Outgoings Due
                </label>
                <input
                  name="otherOutgoings"
                  value={formState.otherOutgoings}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="£ 0.00"
                  maxLength={6}
                />
              </div>
            </div>
            <div className="w-full h-auto px-8 py-4">
              <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
                Net Assets
              </h3>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col px-2 py-3 mt-4">
                <input
                  name="netAssets"
                  value={formState.netAssets}
                  onChange={handleInputChange}
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                  type="number"
                  placeholder="0.00"
                  maxLength={6}
                />
              </div>
              <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
                Nisab Threshold:
              </h3>
              <div className="w-full h-auto border border-lgray rounded-lg flex flex-col px-2 py-3 mt-4 bg-gray">
                <input
                  className="text-mont text-sm text-black-50 font-semibold focus:outline-none bg-gray"
                  type="text"
                  placeholder="87.48 grams (18th of Aug 2023)"
                  disabled
                />
              </div>
            </div>
            <div className="w-full h-auto px-8 pb-10">
              <div className="w-full h-auto px-4 py-6 flex justify-between bg-sblue rounded-lg mt-2">
                <p className="text-mont text-sm text-white font-semibold">
                  TOTAL ZAKAT PAYABLE =
                </p>
                <p className="text-mont text-base text-white font-bold">
                  {currencyFormatter(zakatPayable)}
                </p>
              </div>
              <button
                className="w-full h-auto rounded-lg bg-green text-center p-4 text-mont text-xs text-black-50 font-bold mt-4"
                onClick={handleDonate}
              >
                DONATE NOW
              </button>
            </div>
          </form>
        </div>
        <img
          className="absolute lg:flex hidden lg:-bottom-32 right-0"
          src="/Icons/circle_blue.svg"
          alt="circle_blue"
        />
        <img
          className="absolute lg:hidden flex bottom-1/4 -left-12"
          src="/Icons/circle_blue.svg"
          alt="circle_blue"
        />
        <img
          className="absolute lg:hidden flex -bottom-12 right-1/4 z-minus"
          src="/Icons/yellow_ring_small.svg"
          alt="yellow_ring_small"
        />
      </div>
    </>
  );
};

export default ZakatCalculator;
