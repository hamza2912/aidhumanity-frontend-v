import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_API_URL } from '../../services/config';

function Appeal_modal({showModal, setshowModal, active}) {

  const [categories, setCategories] = useState([]);
//   const category = categories.first;

  useEffect(() => {
    axios.get(`${SERVER_API_URL}/categories.json`)
      .then(response => {
        console.log('API Response:', response);
        setCategories(response.data);
        console.log('Categories:', categories);
        // console.log(categories[0]);
        
        })
        .catch(error => {
            console.error(error);
            console.error('API Error:', error);
        });
    }, []);
        console.log('Categories:', categories);

       
    return (

      <div className="lg:w-4/5 w-full lg:left-12 left-0 lg:top-20 top-0 h-auto z-50 lg:absolute fixed lg:shadow-xl">
        <p className="text-sm font-semibold pl-6 py-6 flex items-center gap-2 lg:hidden bg-white" onClick={()=>{setshowModal(false)}}><img className="w-3 h-3" src="images/icons/dashboard/angle-left.svg" alt="" /> {active == 'appeal' ? "APPEAL" : active == 'zakat' ? "ZAKAT" : "EMERGENCY"}</p>
          <div class="w-full lg:h-auto h-full relative">
              <div class="w-full lg:h-auto h-full rounded-t-2xl">
                  { active == 'zakat' ?
                  <div class="w-full h-auto lg:px-10 lg:py-6 p-5 relative lg:rounded-t-2xl bg-bwhite flex lg:flex-row flex-col justify-between items-center">
                      <img class="absolute top-0 left-0 hidden lg:block" src="./Icons/shape_mega-menu-horizontal-large.svg" alt="shape_mega-menu-horizontal-large" />
                      <h1 class="text-black-50 text-mont text-base font-bold">Quick Zakat Calculator</h1>
                      <div class="lg:w-2/3 w-full mt-4 lg:mt-0 h-auto flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between items-center">
                          <div class="lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                              <p class="text-black-50 text-mont text-xs font-semibold">Total Savings inc. Gold</p>
                              <p class="text-black-50 text-mont text-xs font-semibold">£ 980</p>
                          </div>
                          <div class=" lg:ml-4 lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                              <p class="text-black-50 text-mont text-xs font-semibold">Total Debt</p>
                              <p class="text-black-50 text-mont text-xs font-semibold">£ 200</p>
                          </div>
                          <img class="mx-4" src="./Icons/icon_equal.svg" alt="icon_equal" />
                          <div class="lg:w-1/3 w-full h-auto border-2 border-l2black rounded-2xl p-4">
                              <p class="text-black-50 text-mont text-xs font-semibold">Zakat amount to pay</p>
                              <p class="text-black-50 text-mont text-xs font-semibold">£ 32</p>
                          </div>
                      </div>
                  </div> : null}
                  <div class={active != 'zakat' ? "w-full lg:h-auto h-screen lg:rounded-t-2xl px-10 pb-10 pt-10 relative bg-rwhite flex lg:flex-row flex-col gap-4 lg:justify-between overflow-hidden" : "w-full lg:h-auto h-96 px-10 pb-10 pt-10 relative bg-rwhite flex lg:flex-row flex-col gap-4 lg:justify-between overflow-x-hidden lg:overflow-y-hidden overflow-y-auto" }>
                      { active != 'zakat' ? <img class="absolute top-0 left-0  hidden lg:block" src="./Icons/shape_mega-menu-horizontal-large.svg" alt="shape_mega-menu-horizontal-large" />: null}
                      { active == 'appeal' || active == 'zakat' ?
                      <div class="lg:w-1/3 w-full h-auto flex justify-between">
                          <div class="h-auto">
                              <img class="flex" src="./Icons/icon_mosque.svg" alt="icon_mosque" />
                          </div>
                          <div class="w-full h-auto ml-4 flex flex-col">
                              <a class="text-nblue text-mont text-lg font-bold" href="">{categories.length > 0 && categories[0].name}</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-4" href="">Pay for a Brick</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Books</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Quran Appeal</a>
                          </div>

                          <div className="w-1 h-full border-r-2 border-gray-300 mr-8 hidden lg:block"></div>
                      </div> : null}
                      <div class="lg:w-1/3 w-full h-auto flex justify-between">
                          <div class="h-auto">
                              <img class="flex" src="./Icons/icon_emergency-color.svg" alt="icon_emergency-color" />
                          </div>
                          <div class="w-full h-auto ml-4 flex flex-col">
                              <a class="text-nblue text-mont text-lg font-bold" href="">{categories.length > 0 && categories[1].name}</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-4" href="">Pakistan Floods</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Bangladesh Floods</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Quran Appeal</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Rohingya Appeal</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Palestine Gaza</a>
                              <a class="text-base text-dgray tet-mont font-medium mt-2" href="">Ukraine Emergency Appeal</a>
                          </div>
                      </div>
                      { active == 'appeal' || active == 'zakat' ?  
                      <div class="lg:w-1/3 w-full h-auto flex">
                        <div className="w-1 h-full border-l-2 border-gray-300 mr-8 lg:flex hidden"></div>
                        <div className="">
                            <div class="w-full h-auto flex justify-between">
                                <div class="h-auto">
                                    <img class="flex" src="./Icons/icon_water.svg" alt="icon_water" />
                                </div>
                                <div class="w-full h-auto ml-4 flex flex-col">
                                    <a class="text-nblue text-mont text-lg font-bold" href="">Water for All</a>
                                    <a class="text-base text-dgray tet-mont font-medium mt-4" href="">Water Wells</a>
                                </div>
                            </div>
                            <div class="w-full h-auto flex justify-between mt-6">
                                <div class="h-auto">
                                    <img class="flex" src="./Icons/icon_orphan-color.svg" alt="icon_orphan-color" />
                                </div>
                                <div class="w-full h-auto ml-4 flex flex-col">
                                    <a class="text-nblue text-mont text-lg font-bold" href="">Sponsor an Orphan</a>
                                </div>
                            </div>
                            <div class="w-full h-auto flex justify-between mt-6">
                                <div class="h-auto">
                                    <img class="flex" src="./Icons/icon_hungry.svg" alt="icon_hungry" />
                                </div>
                                <div class="w-full h-auto ml-4 flex flex-col">
                                    <a class="text-nblue text-mont text-lg font-bold" href="">Hunger Appeal</a>
                                </div>
                            </div>
                          </div>
                      </div> : null}
                      <img className='lg:w-1/3 w-full absolute lg:-right-32 -right-1/2 z-50 lg:-bottom-1/2 bottom-1/4' src="images/vectors/logo_aid-humanity-icon.svg" alt="Aid-humanity background logo" />
                  </div>
                  <div class="w-full h-auto rounded-b-2xl p-10 bg-gray lg:flex justify-between hidden">
                      <div class="w-1/4 h-auto">
                          <h1 class="text-black-50 text-mont text-3xl font-bold">Popular <br /> Donations</h1>
                      </div>
                      <div class="w-1/4 h-auto px-4 flex justify-center">
                          <div class="w-1/2 h-auto relative">
                              <img className="w-full h-full" src="./images/Pakistan Floods 2022 horizontal.png" alt="Pakistan Floods 2022" />
                              <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2">DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                          </div>
                          <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                              <h2 class="text-xs text-mont font-bold text-black-50">Pakistan <br /> Floods</h2>
                              <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                              <img class="absolute -left-4 top-1/3" src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                          </div>
                      </div>
                      <div class="w-1/4 h-auto px-4 flex justify-center">
                          <div class="w-1/2 h-auto relative">
                              <img className="w-full h-full" src="./images/maxresdefault horizontal.png" alt="maxresdefault" />
                              <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2">DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                          </div>
                          <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                              <h2 class="text-xs text-mont font-bold text-black-50">Support <br /> an Orphaned <br /> Child</h2>
                              <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                              <img class="absolute -left-4 top-1/3" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />
                          </div>
                      </div>
                      <div class="w-1/4 h-auto px-4 flex justify-center">
                          <div class="w-1/2 h-auto relative">
                              <img className="w-full h-full" src="./images/rf1110721-somali-refugee-family-in-yemen-1200x800-images horizontal.png" alt="somali-refugee-family-in-yemen" />
                              <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2">DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                          </div>
                          <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                              <h2 class="text-xs text-mont font-bold text-black-50">Yemen <br /> Emergency</h2>
                              <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                              <img class="absolute -left-4 top-1/3" src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah"  />
                          </div>
                      </div>
                  </div>
                  <img class={active == 'appeal' ? "absolute -top-2 left-1/4 ml-4 hidden lg:block" : active == 'zakat' ? "absolute -top-2 left-1/2  -ml-10  hidden lg:block" :  "absolute -top-2 left-1/3 ml-10  hidden lg:block"}  src="./Icons/triangle-up.svg" alt="triangle-up" />
              </div>
          </div>
      </div>     

    );
}

export default Appeal_modal;