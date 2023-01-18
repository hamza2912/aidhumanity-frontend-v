
import React from "react";


function Donat() {


  return (

    <div class="lg:w-1/5 w-11/12 h-auto bg-l2gray">
                <div class="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
                    <div class="flex items-center">
                        <img class="mr-2" src="./Icons/icon_plus-cirle.svg" alt="icon_plus-cirle" />
                        <h2 class="text-mont text-l2black text-lg font-bold flex">Donation Added</h2>
                    </div>
                    <button class="text-nblue text-lg"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
                <div class="w-full h-auto p-4">
                     <p class="text-mont text-base text-l2black font-semibold mt-4">You are donating to <span class="text-orange">3 causes</span></p>
                     <div class="w-full h-auto">
                        <div class="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-lg mt-6 relative">
                            <div class="w-2/3 h-auto">
                                <h3 class="text-mont text-xs text-l3black font-semibold">Sponsor a child for one year</h3>
                                <p class="text-mont text-xs text-gray">MOST NEEDED, DONATION</p>
                            </div>
                            <div class="w-1/3 h-auto flex flex-col justify-between items-end">
                                <p class="text-mont text-xs text-l3black font-bold">£360.00</p>
                                <button><img src="./Icons/icon_times.svg" alt="icon_times" /></button>
                            </div>
                            <div class="p-2 rounded-lg bg-green absolute -top-4 causes">
                                <p class="text-mont text-xs text-white font-bold">Single</p>
                            </div>
                        </div>
                        <div class="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-lg mt-8 relative">
                            <div class="w-2/3 h-auto">
                                <h3 class="text-mont text-xs text-l3black font-semibold">Water Solutions <br /> (Sadaqah Jariyah)</h3>
                                <p class="text-mont text-xs text-gray">MOST NEEDED, DONATION</p>
                            </div>
                            <div class="w-1/3 h-auto flex flex-col justify-between items-end">
                                <p class="text-mont text-xs text-l3black font-bold">£15.00</p>
                                <button><img src="./Icons/icon_times.svg" alt="icon_times" /></button>
                            </div>
                            <div class="p-2 rounded-lg bg-green absolute -top-4 causes">
                                <p class="text-mont text-xs text-white font-bold">Monthly</p>
                            </div>
                        </div>
                        <div class="w-full h-auto px-4 py-6 flex justify-between bg-white border-2 border-green rounded-lg mt-8 relative">
                            <div class="w-2/3 h-auto">
                                <h3 class="text-mont text-xs text-l3black font-semibold">Water Tankers</h3>
                                <p class="text-mont text-xs text-gray">MOST NEEDED, DONATION</p>
                            </div>
                            <div class="w-1/3 h-auto flex flex-col justify-between items-end">
                                <p class="text-mont text-xs text-l3black font-bold">£5.00</p>
                                <button><img src="./Icons/icon_times.svg" alt="icon_times" /></button>
                            </div>
                            <div class="p-2 rounded-lg bg-green absolute -top-4 causes">
                                <p class="text-mont text-xs text-white font-bold">Single</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-auto p-4 border-2 border-sblue rounded-lg mt-6">
                        <div class="w-full h-auto flex justify-between">
                            <p class="text-mont text-sm text-l3black font-semibold">DONATIONS</p>
                            <p class="text-mont text-base text-l3black font-bold">£380.00</p>
                        </div>
                        <button class="w-full h-auto p-4 bg-green rounded-lg text-center text-mont text-xs text-white font-bold mt-4">ADD DONATION</button>
                        <button class="w-full h-auto p-4 bg-sblue rounded-lg text-center text-mont text-xs text-white font-bold mt-4">CHECKOUT</button>
                    </div>
                    <div class="w-full h-auto flex justify-center mt-4">
                        <img class="w-1/5" src="./logo/logo_aid-humanity-icon.svg" alt="logo_aid-humanity-icon" />
                    </div>
                </div>
            </div>
         

  );
}

export default Donat;