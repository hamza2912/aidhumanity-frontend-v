import React from "react";

function Ramadan() {

    const [active, setactive] = React.useState('1');
    const [amount, setamount] = React.useState('30');


  return (

    <div class="lg:w-1/5 w-11/12 h-auto bg-sblue">
                <div class="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
                    <h2 class="text-mont text-nblue text-lg font-bold">Add your donation</h2>
                    <button class="text-nblue text-lg"><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
                <div class="w-full h-auto p-4">
                    <h2 class="text-mont text-xl text-white font-bold">Ramadan</h2>
                    <p class="text-mont text-sm text-white mt-4">Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting (sawm), prayer, reflection and community.</p>
                    <div class="w-full h-auto p-4 bg-white rounded-2xl mt-6">
                        <button class="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">Recurring <br /> Payment</button>
                        <h3 class="text-mont text-sm text-lblack font-bold mt-4">Choose your Cause</h3>
                        <p class="text-mont text-xs text-l2black mt-2">Aid humanity supports hundreds of projects around the world and your donation on this month will be needed in those most neediest of places</p>
                        <button class="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" /><img src="./Icons/icon_needy.svg" alt="icon_needy" />Most Needy</button>
                        <button class="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" /><img src="./Icons/icon_zacat.svg" alt="icon_zacat" />Zakat</button>
                        <button class="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium"><img src="./Icons/icon_dot-circle (1).svg" alt="icon_dot-circle"/><img src="./Icons/icon_hungry.svg" alt="icon_hungry" />Food</button>
                        <button class="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" /><img src="./Icons/icon_water.svg" alt="icon_water" />Water Well</button>
                        <button class="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" /><img src="./Icons/icon_sadaqah.svg" alt="icon_sadaqah" />Sadaqah</button>
                        <button class="mt-2 w-full h-auto flex items-center gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" /><img src="./Icons/icon_mosque.svg" alt="icon_mosque" />Masjid builds</button>
                        <h3 class="text-mont text-sm text-lblack font-bold mt-4">Choose how you want to give</h3>
                        <button class="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" />Daily 30 nights</button>
                        <button class="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" />Last 10 days</button>
                        <button class="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" />Blessed odd days</button>
                        <p class="mt-2 w-full h-auto flex gap-4 text-mont text-sm text-l3black font-medium"><input type="radio" id="html" name="fav_language" value="HTML" />One Payment on the 27th Night</p>
                        <h3 class="text-mont text-sm text-lblack font-bold mt-4">Amount</h3>
                        <div class="w-full h-auto mt-4 flex rounded-lg border border-lgray bg-white">
                            <div onClick={()=>{setamount('10')}} className={amount == '10' ? "w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue rounded-l-lg text-white border-r border-lgray":"w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray"}>
                                <p class="text-mont text-center text-xs font-medium">£10</p>
                            </div>
                            <div onClick={()=>{setamount('20')}} className={amount == '20' ? "w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray":"w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray"}>
                                <p class="text-mont text-center text-xs font-medium">£20</p>
                            </div>
                            <div onClick={()=>{setamount('30')}} className={amount == '30' ? "w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue text-white border-r border-lgray":"w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-r border-lgray"}>
                                <p class="text-mont text-center text-xs font-medium">£30</p>
                            </div>
                            <div onClick={()=>{setamount('50')}} className={amount == '50' ? "w-1/4 flex justify-center items-center cursor-pointer h-auto px-6 py-4 bg-sblue rounded-r-lg text-white border-lgray":"w-1/4 flex justify-center items-center text-black-50 cursor-pointer h-auto px-6 py-4 border-lgray"}>
                                <p class="text-mont text-center text-xs font-medium">£50</p>
                            </div>
                        </div>
                        <input class="w-full h-auto p-2 flex mt-4 justify-between border border-owhite rounded-lg text-sm text-mont text-lblack font-medium focus:outline-none" value="£ 15" type="text" />
                        <button class="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4">ADD DONATION</button>
                    </div>
                </div>
                <img src="./images/logo_aid-humanity-icon.png" alt="logo_aid-humanity-icon" />
    </div>
         

  );
}

export default Ramadan;