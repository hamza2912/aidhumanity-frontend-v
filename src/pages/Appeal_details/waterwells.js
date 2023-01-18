import React from "react";


function Waterwells() {


  return (

    <div class="lg:w-1/5 w-11/12 h-auto bg-sblue">
        <div class="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
            <h2 class="text-mont text-nblue text-lg font-bold">Add your donation</h2>
            <button class="text-nblue text-lg"><i class="fa-regular fa-circle-xmark"></i></button>
        </div>
        <div class="w-full h-auto p-4">
            <h2 class="text-mont text-xl text-white font-bold">Water Wells</h2>
            <p class="text-mont text-sm text-white mt-4">Everyone deserves access to clean water, but in areas of drought or rocky terrain a water well digging deep into the earth is the only solution</p>
            <div class="w-full h-auto p-4 bg-white rounded-2xl mt-6">
                <button class="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">Single <br /> Payment</button>
                <div class="w-full h-auto p-2 flex mt-4 justify-between items-center border-2 border-owhite rounded-lg">
                    <p class="text-mont text-dgray text-xs font-medium">Uganda</p>
                    <select class="h-auto flex justify-around items-center text-base text-mont font-semibold text-black-50 focus:outline-none"><i class="fa-solid fa-angle-down"></i>
                        <option value="">£250.00</option>
                    </select>
                </div>
                <h3 class="text-mont text-sm font-bold text-lblack mt-4">Name on Plaque</h3>
                <p class="text-mont text-xs text-l2black mt-2">Please provide the name(s) exactly as you’d like it to appear on the plaque.</p>
                <input class="w-full h-auto p-2 flex mt-4 justify-between border border-owhite rounded-lg text-mont text-dgray text-xs font-medium" type="text" placeholder="Name on Plaque" />
                <p class="text-mont text-xs text-gray mt-2">27 characters left</p>
                <button class="w-full h-auto flex p-4 border-2 border-nblue rounded-lg mt-4 text-mont text-xs text-nblue font-bold">+ ADD WATER WELL</button>
                <button class="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4">ADD DONATION</button>
            </div>
        </div>
        <img src="./images/logo_aid-humanity-icon.png" alt="logo_aid-humanity-icon" />
    </div>
         

  );
}

export default Waterwells;