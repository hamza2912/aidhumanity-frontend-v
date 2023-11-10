import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CartService from "../../services/cart";
import { currencyFormatter } from "../../utils";

const Thankyou = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await CartService.getLastOrder();
        setOrders(orderData);
      } catch (error) {
        console.error("Failed to fetch the order:", error);
      }
    };
    if (!localStorage.getItem("cart")) {
      fetchOrder();
    } else {
      setOrders(JSON.parse(localStorage.getItem("cart")));
    }
    return () => {
      // localStorage.removeItem('cart');
      // localStorage.removeItem('admin_cost');
      // localStorage.removeItem('gift_aid');
    };
  }, []);

  const totalDonated =
    orders?.donations?.reduce((acc, donation) => acc + donation.amount, 0) || 0;

  // Calculate 25% of the total donated amount
  const giftAddedAmount = totalDonated * 0.25;

  const giftAid =
    orders?.gift_aid || JSON.parse(localStorage.getItem("gift_aid"));
  return (
    <>
      <Header />
      <main>
        <div className="w-full h-auto py-8 lg:py-12 bg-bwhite lg:mt-32 mt-16">
          <h1 className="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">
            Congratulations!
          </h1>
        </div>
        <section className="w-full h-auto bg-owhite px-5 pt-3 lg:pt-6 pb-12">
          <div className="w-full h-auto flex justify-center container mx-auto">
            <div className="w-full lg:w-7/12 h-auto z-10 bg-white rounded-2xl px-4 pt-8 pb-6 mt-5 lg:mb-20">
              <div className="w-full h-auto flex justify-center items-center relative">
                <img
                  className="w-60 h-60 object-cover rounded-full blur"
                  src="./images/Group 17405-square.png"
                  alt="Group 17405"
                />
                <img
                  className="absolute flex items-center left-0 right-0 mx-auto lg:w-20 w-24"
                  src="./logo/logo_aid-humanity-icon.svg"
                  alt="logo_aid-humanity-icon"
                />
              </div>
              <div className="w-full h-auto text-center lg:px-20 px-4 mt-6 lg:mt-8">
                <p className="text-mont text-lg text-blue font-semibold">
                  You’ve madde a significant difference to people in need and
                  played a major part in making the world a better place.
                </p>
                <p className="text-mont text-lg text-black-50 mt-4">
                  Please continue to spread the word about this appeal, and take
                  a moment to check your summary below.
                </p>
              </div>
              <div className="w-full h-auto px-4 py-6 bg-owhite border border-lgray rounded-lg mt-4">
                {orders?.donations?.map((donation, index) => (
                  <div className="w-full h-auto flex justify-between items-center border-b pb-2 border-dashed">
                    <p className="text-mont text-sm text-black-50 font-medium">
                      {donation.cause_title}
                    </p>
                    <p className="text-mont text-sm text-black-50 font-bold">
                      {currencyFormatter(donation.amount)}
                    </p>
                  </div>
                ))}
                {giftAid && (
                  <div className="w-full h-auto flex justify-between items-center mt-4 border-b-2 pb-6">
                    <div className="flex gap-4 items-center">
                      <img
                        src="./Icons/illustration_gift.svg"
                        alt="illustration_gift"
                      />
                      <p className="text-mont text-sm text-black-50 font-bold">
                        Gift Aid
                      </p>
                    </div>
                    <p className="text-mont text-sm text-black-50 font-bold">
                      {currencyFormatter(giftAddedAmount)}
                    </p>
                  </div>
                )}
                <div className="w-full h-auto flex justify-between items-center mt-4">
                  <p className="text-mont text-sm text-black-50 font-medium">
                    TOTAL Donated
                  </p>
                  <p className="text-mont text-sm text-black-50 font-bold">
                    {currencyFormatter(
                      giftAid ? totalDonated + giftAddedAmount : totalDonated
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Thankyou;
