import React from 'react';

const ZakatCalculator = () => {
  return (
    <>
      <div className="w-full lg:w-1/2 lg:p-8 p-2 mt-4 lg:mt-0 h-auto flex justify-center relative">
        <img
          className="absolute right-0 top-8"
          src="./Icons/Ellipse 1793.svg"
          alt="Ellipse 1793"
        />
        <div className="lg:w-4/5 w-full h-auto z-0 bg-white rounded-2xl shadow-lg relative">
          <img
            className="absolute top-0 left-0 px-1"
            src="./Icons/shape_mega-menu-horizontal-medium.svg"
            alt="shape_mega-menu-horizontal"
          />
          <div className="w-full h-auto border-b border-lgray px-8 pb-4 pt-10">
            <h1 className="text-black-50 text-mont text-3xl font-bold">
              Our Zakat Calculator
            </h1>
            <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
              Gold and Silver
            </h3>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Value of Gold & Silver"
              >
                Value of Gold & Silver you possess
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
          </div>
          <div className="w-full h-auto border-b border-lgray px-8 py-4">
            <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
              Money
            </h3>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Cash at Home & Bank Accounts"
              >
                Cash at Home & Bank Accounts
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Other Savings"
              >
                Other Savings
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Investment & Share Values"
              >
                Investment & Share Values
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Money owed to you"
              >
                Money owed to you
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
          </div>
          <div className="w-full h-auto border-b border-lgray px-8 py-4">
            <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
              Business Assets
            </h3>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Stock Value"
              >
                Stock Value
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
          </div>
          <div className="w-full h-auto border-b border-lgray px-8 py-4">
            <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
              Short Term Liabilities
            </h3>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Money You Owe"
              >
                Money You Owe
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
              action=""
            >
              <label
                className="text-mont text-dgray text-xs font-semibold"
                for="Other Outgoings Due"
              >
                Other Outgoings Due
              </label>
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="£ 0.00"
              />
            </form>
          </div>
          <div className="w-full h-auto px-8 py-4">
            <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
              Net Assets
            </h3>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col px-2 py-3 mt-4"
              action=""
            >
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                type="text"
                placeholder="0.00"
              />
            </form>
            <h3 className="text-mont text-xl text-black-50 font-bold mt-4">
              Nisab Threshold:
            </h3>
            <form
              className="w-full h-auto border border-lgray rounded-lg flex flex-col px-2 py-3 mt-4 bg-gray"
              action=""
            >
              <input
                className="text-mont text-sm text-black-50 font-semibold focus:outline-none bg-gray"
                type="text"
                placeholder="366.80"
              />
            </form>
          </div>
          <div className="w-full h-auto px-8 pb-10">
            <div className="w-full h-auto px-4 py-6 flex justify-between bg-sblue rounded-lg mt-2">
              <p className="text-mont text-sm text-white font-semibold">
                TOTAL ZAKAT PAYABLE =
              </p>
              <p className="text-mont text-base text-white font-bold">
                £124.00
              </p>
            </div>
            <button className="w-full h-auto rounded-lg bg-green text-center p-4 text-mont text-xs text-black-50 font-bold mt-4">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZakatCalculator;
