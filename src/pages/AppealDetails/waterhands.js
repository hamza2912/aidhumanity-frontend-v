import React from "react";


function Waterhands() {


  return (

    <div class="lg:w-1/5 w-11/12 h-auto bg-sblue">
        <div class="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
            <h2 class="text-mont text-nblue text-lg font-bold">Add your donation</h2>
            <button class="text-nblue text-lg"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
        <div class="w-full h-auto p-4">
            <h2 class="text-mont text-xl text-white font-bold">Water Hands Pumps</h2>
            <p class="text-mont text-sm text-white mt-4">Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.</p>
            <div class="w-full h-auto p-4 bg-white rounded-2xl mt-6">
                <div class="w-full h-auto flex justify-between gap-4">
                    <div class="w-1/2 h-auto">
                        <button class="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">Recurring <br /> Payment</button>
                        <button class="p-2">
                            <div class="w-full h-auto flex gap-2 justify-center items-center">
                                <img src="./Icons/icon_check-circle.svg" alt="icon_check-circle" />
                                <h2 class="text-mont text-lg text-l3black font-semibold">£15</h2>
                            </div>
                            <p class="text-mont text-xs text-gray mt-1">Water Solutions (Sadaqah Jariyah)</p>
                        </button>
                    </div>
                    <div class="w-1/2 h-auto">
                        <button class="w-full h-auto text-center p-2 rounded-lg border-2 border-lgray text-mont text-gray text-xs">Regular <br /> Payment</button>
                    </div>
                </div>
                <input class="w-full h-auto p-2 flex mt-4 justify-between border border-owhite rounded-lg text-sm text-mont text-lblack font-medium focus:outline-none" placeholder="£ 360" type="text" />
                <select class="w-full h-auto py-3 px-2 flex mt-4 text-sm justify-between border border-owhite font-medium text-black-50 rounded-lg focus:outline-none" name="" id="">
                        <option value="">Donation</option>
                </select>
                <select class="w-full h-auto py-3 px-2 flex mt-4 text-sm justify-between border border-owhite font-medium text-black-50 rounded-lg focus:outline-none" name="" id="">
                        <option value="">Where Most Needed</option>
                </select>
                <button class="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4">ADD DONATION</button>
            </div>
        </div>
        <img src="./Images/logo_aid-humanity-icon.png" alt="logo_aid-humanity-icon" />
    </div>
         

  );
}

export default Waterhands;

