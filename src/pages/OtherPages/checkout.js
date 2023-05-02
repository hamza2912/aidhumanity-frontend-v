import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/header';
import Switch from '../../components/switch/switch';

function Checkout() {
  return (
    <>
      <Header />

      <main>
        <div class="w-full h-auto py-8 bg-bwhite">
          <h1 class="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Checkout
          </h1>
        </div>
        <section class="w-full h-auto bg-owhite container mx-auto px-5 pt-10 lg:pb-32 pb-10">
          <div class="w-full h-auto flex lg:flex-row flex-col gap-4 items-center lg:items-start lg:justify-between justify-center">
            <div class="lg:w-1/3 w-full h-auto bg-white border-2 border-sblue rounded-2xl p-6">
              <h1 class="text-mont text-lg text-black-50 font-bold">
                Donation Summary
              </h1>
              <p class="text-mont text-base text-gray-600 font-semibold mt-4">
                You are donating to <span class="text-orange">3 -top-1/4</span>
              </p>
              <div class="w-full h-auto mt-10">
                <div class="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-xl mt-6 relative">
                  <div class="w-2/3 h-auto">
                    <h3 class="text-mont text-xs text-l3black font-semibold">
                      Sponsor a child for one year
                    </h3>
                    <p class="text-mont text-xs text-gray">
                      MOST NEEDED, DONATION
                    </p>
                  </div>
                  <div class="w-1/3 h-auto flex flex-col justify-between items-end">
                    <p class="text-mont text-xs text-l3black font-bold">
                      £360.00
                    </p>
                    <button>
                      <img src="./Icons/icon_times.svg" alt="icon_times" />
                    </button>
                  </div>
                  <div class="px-3 py-2 rounded-lg bg-green absolute -top-4 -top-1/4">
                    <p class="text-mont text-xs text-white font-bold">Single</p>
                  </div>
                </div>
                <div class="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-xl mt-8 relative">
                  <div class="w-2/3 h-auto">
                    <h3 class="text-mont text-xs text-l3black font-semibold">
                      Water Solutions <br /> (Sadaqah Jariyah)
                    </h3>
                    <p class="text-mont text-xs text-gray">
                      MOST NEEDED, DONATION
                    </p>
                  </div>
                  <div class="w-1/3 h-auto flex flex-col justify-between items-end">
                    <p class="text-mont text-xs text-l3black font-bold">
                      £15.00
                    </p>
                    <button>
                      <img src="./Icons/icon_times.svg" alt="icon_times" />
                    </button>
                  </div>
                  <div class="px-3 py-2 rounded-lg bg-green absolute -top-4 -top-1/4">
                    <p class="text-mont text-xs text-white font-bold">
                      Monthly
                    </p>
                  </div>
                </div>
                <div class="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-xl mt-8 relative">
                  <div class="w-2/3 h-auto">
                    <h3 class="text-mont text-xs text-l3black font-semibold">
                      Water Tankers
                    </h3>
                    <p class="text-mont text-xs text-gray">
                      MOST NEEDED, DONATION
                    </p>
                  </div>
                  <div class="w-1/3 h-auto flex flex-col justify-between items-end">
                    <p class="text-mont text-xs text-l3black font-bold">
                      £5.00
                    </p>
                    <button>
                      <img src="./Icons/icon_times.svg" alt="icon_times" />
                    </button>
                  </div>
                  <div class="px-3 py-2 rounded-lg bg-green absolute -top-4 -top-1/4">
                    <p class="text-mont text-xs text-white font-bold">Single</p>
                  </div>
                </div>
              </div>
              <button class="w-full h-auto p-4 bg-green rounded-lg text-center text-mont text-xs text-white font-bold mt-4">
                ADD DONATION
              </button>
              <h1 class="text-mont text-lg text-black-50 font-bold mt-4">
                Help us further
              </h1>
              <div class="w-full h-auto flex justify-between p-2 mt-4 rounded-xl bg-pink cursor-pointer">
                <div class="w-full h-auto flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g id="icon_check-circle" transform="translate(0.75 0.75)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="none"
                        stroke="#1D1D1D"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                      <g
                        id="icon-check"
                        transform="translate(6 7.417)"
                        opacity="0.253"
                      >
                        <path
                          id="Path_263"
                          data-name="Path 263"
                          d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                          transform="translate(-291.914 -551.523)"
                          fill="none"
                          stroke="#1D1D1D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <img
                    src="./Icons/illustration_admin-love.svg"
                    alt="illustration_admin-love"
                  />
                  <h3 class="text-sm text-mont text-black-50 font-semibold">
                    Donate to Admin <br /> cost 1.5%
                  </h3>
                </div>
                <div class="w-1/3 h-auto flex items-center justify-end">
                  <p class="text-mont text-xs text-black-50 font-bold">£10</p>
                </div>
              </div>
              <div class="w-full h-auto flex justify-between px-2 py-4 mt-4 rounded-xl bg-green cursor-pointer">
                <div class="w-full h-auto flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g id="icon_check-circle" transform="translate(0.75 0.75)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                      <g
                        id="icon-check"
                        transform="translate(6 7.417)"
                        opacity="0.253"
                      >
                        <path
                          id="Path_263"
                          data-name="Path 263"
                          d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                          transform="translate(-291.914 -551.523)"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <h3 class="text-sm text-mont text-white font-semibold">
                    Rescue a street child
                  </h3>
                </div>
                <div class="w-1/3 h-auto flex items-center justify-end">
                  <p class="text-mont text-xs text-white font-bold">£360.00</p>
                </div>
              </div>
              <div class="w-full h-auto flex justify-between px-2 py-4 mt-4 rounded-xl bg-green cursor-pointer">
                <div class="w-full h-auto flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.5"
                    height="19.5"
                    viewBox="0 0 19.5 19.5"
                  >
                    <g id="icon_check-circle" transform="translate(0.75 0.75)">
                      <circle
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        cx="9"
                        cy="9"
                        r="9"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-linecap="round"
                        stroke-width="1.5"
                      />
                      <g
                        id="icon-check"
                        transform="translate(6 7.417)"
                        opacity="0.253"
                      >
                        <path
                          id="Path_263"
                          data-name="Path 263"
                          d="M297.914,551.523l-3.714,4.3-2.286-1.844"
                          transform="translate(-291.914 -551.523)"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </g>
                  </svg>
                  <h3 class="text-sm text-mont text-white font-semibold">
                    Food pack for a family
                  </h3>
                </div>
                <div class="w-1/3 h-auto flex items-center justify-end">
                  <p class="text-mont text-xs text-white font-bold">£50.00</p>
                </div>
              </div>
              <div class="w-full h-auto p-4 rounded-xl bg-sblue mt-4 cursor-pointer">
                <div class="w-full h-auto flex justify-between">
                  <p class="text-mont text-sm text-white font-semibold">
                    TOTAL
                  </p>
                  <p class="text-mont text-base text-white font-bold">
                    £380.00
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-2/3 h-auto">
              <div class="w-full h-auto z-10 bg-white rounded-2xl">
                <div class="w-full h-auto border-b border-lgray px-6 py-4">
                  <h1 class="text-black-50 text-mont text-lg font-bold">
                    Info
                  </h1>
                  <div className="flex lg:flex-row flex-col lg:gap-6 gap-4 mt-5">
                    <div className="flex">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                       {' '}
                      <label className="font-medium" for="html">
                        Mr
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                       {' '}
                      <label className="font-medium" for="html">
                        Mrs
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                       {' '}
                      <label className="font-medium" for="html">
                        Miss
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                       {' '}
                      <label className="font-medium" for="html">
                        Ms
                      </label>
                    </div>
                    <div className="flex">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                       {' '}
                      <label className="font-medium" for="html">
                        Other
                      </label>
                    </div>
                  </div>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <form
                      class="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="First Name"
                      >
                        First Name
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        value="James"
                      />
                    </form>
                    <form
                      class="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="Last Name"
                      >
                        Last Name
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        value="Matthews"
                      />
                    </form>
                  </div>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <form
                      class="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="Email"
                      >
                        Email
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        value="james.matthews@gmail.com"
                      />
                    </form>
                    <form
                      class="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="Phone"
                      >
                        Phone
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                      />
                    </form>
                  </div>
                </div>
                <div class="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 class="text-mont text-lg text-black-50 font-bold mt-4">
                    Billing Address
                  </h3>
                  <select
                    class="w-full h-auto border border-lgray rounded-lg flex justify-between px-2 py-4 focus:outline-none mt-4 text-mont text-dgray text-xs font-semibold"
                    name=""
                    id=""
                  >
                    <option value="">United Kingdom</option>
                  </select>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <form
                      class="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="Address Line 1"
                      >
                        Address Line 1
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        value="Fairgate House"
                      />
                    </form>
                    <form
                      class="w-1/2 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="Address Line 2"
                      >
                        Address Line 2
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                      />
                    </form>
                  </div>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <form
                      class="w-2/3 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="Town"
                      >
                        Town
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        value="Birmingham"
                      />
                    </form>
                    <form
                      class="w-1/3 h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4"
                      action=""
                    >
                      <label
                        class="text-mont text-dgray text-xs font-semibold"
                        for="ZIP/Postal"
                      >
                        ZIP/Postal
                      </label>
                      <input
                        class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                        type="text"
                        value="B112AA"
                      />
                    </form>
                  </div>
                </div>
                <div class="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 class="text-mont text-lg text-black-50 font-bold mt-4">
                    Tell us about your Donation
                  </h3>
                  <select
                    class="w-full h-auto border border-lgray rounded-lg flex justify-between px-2 py-4 focus:outline-none mt-4 text-mont text-dgray text-xs font-semibold"
                    name=""
                    id=""
                  >
                    <option value="">Where did you hear about us?</option>
                  </select>
                  <textarea
                    class="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4 text-mont text-dgray text-xs font-semibold"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Add any comments about your donation (Optional)"
                  ></textarea>
                  <p class="text-mont text-xs text-gray">
                    Max. characters: 200
                  </p>
                </div>
                <div class="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 class="text-mont text-lg text-black-50 font-bold mt-4">
                    Additional Information
                  </h3>
                  <p class="text-mont text-xs text-gray-600 mt-4">
                    We’d like to keep you updated about our projects and
                    fundraising activities. Please advise whether you are happy
                    to be contacted by email, phone or SMS:
                  </p>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <button>
                      <Switch type="dashboard" />
                    </button>
                    <p class="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by Email
                    </p>
                  </div>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <button>
                      <Switch type="dashboard" />
                    </button>
                    <p class="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by SMS
                    </p>
                  </div>
                  <div class="w-full h-auto flex gap-4 mt-4">
                    <button>
                      <Switch type="dashboard" />
                    </button>
                    <p class="text-mont text-sm text-black-50 font-medium">
                      Yes, I’m happy to be contacted by Phone
                    </p>
                  </div>
                  <div class="w-full h-auto bg-bwhite mt-4 p-4 rounded-lg flex gap-4 items-center">
                    <img
                      src="./Icons/illustration_gift.svg"
                      alt="illustration_gift"
                    />
                    <p class="text-mont text-lg text-black-50 font-bold">
                      Gift Aid
                    </p>
                  </div>
                  <p class="text-mont text-sm text-gray-600 font-semibold mt-4">
                    If you are a UK taxpayer we can increase your donation by
                    25%, this will add £16.25 to your donation without you
                    paying a further penny!
                  </p>
                  <div class="w-full h-auto flex gap-2 mt-4">
                    <button class="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      Yes
                    </button>
                    <button class="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      No
                    </button>
                  </div>
                  <p class="text-mont text-xs text-gray-600 mt-4">
                    I would like Muslim Charity to treat all donations I have
                    made in the past, this donation and all my future donations
                    until I notify otherwise as Gift Aid donations. I am a UK
                    taxpayer and understand that if I pay less Income Tax and/or
                    Capital Gains Tax than the amount of Gift Aid claimed on all
                    my donations in that tax year it is my responsibility to pay
                    any difference. Please inform Muslim Charity if you want to
                    cancel the declaration, change your name or address or no
                    longer pay sufficient tax. The Gift Aid amount claimed will
                    be used towards fundraising/administrative costs as well as
                    our Where Most Needed fund to save and transform more lives.
                  </p>
                </div>
                <div class="w-full h-auto border-b border-lgray px-6 py-4">
                  <h3 class="text-mont text-lg text-black-50 font-bold mt-4">
                    Payment Methods
                  </h3>
                  <div class="w-full h-auto border border-lgray rounded-lg flex flex-col lg:flex-row justify-between items-center p-2 mt-4">
                    <button class="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      Pay with Card
                    </button>
                    <div class="flex items-center gap-4">
                      <img src="./Icons/logo_visa.svg" alt="logo_visa" />
                      <img
                        src="./Icons/symbol_maestro.svg"
                        alt="symbol_maestro"
                      />
                    </div>
                  </div>
                  <div class="w-full h-auto border border-lgray rounded-lg flex flex-col lg:flex-row justify-between items-center p-2 mt-4">
                    <button class="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      Pay with PayPal
                    </button>
                    <img src="./Icons/logo_paypal.svg" alt="logo_paypal" />
                  </div>
                  <div class="w-full h-auto border border-lgray rounded-lg flex flex-col lg:flex-row justify-between items-center p-2 mt-4">
                    <button class="flex gap-2 text-mont text-sm text-l3black font-medium">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                        className="w-5 h-5"
                      />{' '}
                      Pay with Stripe
                    </button>
                    <img src="./Icons/logo_stripe.svg" alt="logo_stripe" />
                  </div>
                  <div class="w-full h-auto bg-owhite p-4 mt-4">
                    <h3 class="text-mont text-sm text-black-50 font-bold">
                      Enter your card details
                    </h3>
                    <div class="w-full h-auto grid lg:grid-cols-4 grid-cols-1 gap-6 mt-4">
                      <form
                        class="h-auto bg-white rounded-lg flex flex-col p-2"
                        action=""
                      >
                        <label
                          class="text-mont text-dgray text-xs font-semibold"
                          for="Card Number"
                        >
                          Card Number
                        </label>
                        <input
                          class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                          type="text"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </form>
                      <form
                        class="h-auto bg-white rounded-lg flex flex-col p-2"
                        action=""
                      >
                        <label
                          class="text-mont text-dgray text-xs font-semibold"
                          for="Car Holder Name"
                        >
                          Car Holder Name
                        </label>
                        <input
                          class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                          type="text"
                          placeholder="Ex. John White"
                        />
                      </form>
                      <form
                        class="h-auto bg-white rounded-lg flex flex-col p-2"
                        action=""
                      >
                        <label
                          class="text-mont text-dgray text-xs font-semibold"
                          for="Expiry Date"
                        >
                          Expiry Date
                        </label>
                        <input
                          class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                          type="text"
                          placeholder="MM/YY"
                        />
                      </form>
                      <div class="h-auto bg-white rounded-lg flex p-2 flex items-center justify-between">
                        <form class="flex flex-col" action="">
                          <label
                            class="text-mont text-dgray text-xs font-semibold"
                            for="Security Code"
                          >
                            Security Code
                          </label>
                          <input
                            class="text-mont text-sm text-black-50 font-semibold focus:outline-none"
                            type="text"
                            placeholder="****"
                          />
                        </form>
                        <button>
                          <img
                            src="./Icons/icon_info-circle.svg"
                            alt="icon_info-circle"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full h-auto px-6 py-4">
                  <button class="lg:relative fixed bottom-0 left-0 w-full h-auto lg:rounded-lg bg-green text-center p-4 text-mont text-xs text-black-50 font-bold mt-4">
                    PROCEED TO PAYMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Checkout;
