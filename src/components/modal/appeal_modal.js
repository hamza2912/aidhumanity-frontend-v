import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_API_URL, SERVER_URL } from '../../services/config';
import appealService from '../../services/appeals';
import { Link } from 'react-router-dom';
import DonateModal from './donate_modal';
import donationService from '../../services/donations';

function Appeal_modal({showModal, setshowModal, active}) {
  const [categories, setCategories] = useState([]);
  const [appeals, setAppeals] = useState([]);
  const [appealsData, setAppealsData] = React.useState({});
  const [loading, setLoading] = useState(false);
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const [selectedAppealId, setSelectedAppealId] = React.useState(null);

  useEffect(() => {
    fetchAppeals(1);
  }, []);

  const fetchAppeals = async page => {
    setLoading(true);
    const data = await appealService.getAppeals(page);
    setLoading(false);
    setAppeals([...appeals, ...data.appeals]);
    setAppealsData(data);
    console.log('Data:', data)
    console.log('data.appeals:', data.appeals)

    console.log('Appeals:', appeals)
    console.log('Appeals Data:', appealsData)
  };

  useEffect(() => {
    axios.get(`${SERVER_API_URL}/categories.json`)
      .then(response => {
        console.log('API Response:', response.data);
        setCategories(response.data);
        console.log(categories)
        // console.log('first category name:', categories[0].name)

        })
        .catch(error => {
            console.error('API Error:', error);
        });
        console.log('categories:', categories)

    // console.log('Furst Category:', categories[0].name);

  },[]);
  console.log('categories:', categories)
  console.log('first category:', categories[0])
  // console.log('first category name:', categories[0].name)

  // console.log('Furst Category:', categories[0].name);
  const columnLimit = 5;
  let totalLength = 0;
  console.log('total length, first log:',totalLength);

  let difference = 0
  let isBroken = false;
  // const filledLength = category.appeals + 1;
  
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
              {active === 'appeal' || active === 'zakat' ? (
              <div className="lg:w-1/3 w-full h-auto flex flex-col">
                
                {categories.length > 0 &&
                (() => {
                  const result = [];
                  for (let i = 0; i < categories.length; i++) {
                    const category = categories[i];
                    const length = category.appeals.length + 1;
                    const columnLimit = 5;
                    totalLength += length;
                    difference = columnLimit - totalLength;
                    if (difference < (categories.length>0 && categories[i+1].length+1)) {
                      break;
                    }
                    console.log("length:", length);
                    console.log("total length, second log:", totalLength);
                    console.log("difference:", difference);

                    result.push(
                      <div>
                        <div key={i}>
                          <div className="h-auto">
                            <img className="flex" src={category.icon} alt="icon_mosque" />
                          </div>
                          <div className="w-full h-auto ml-4 flex flex-col">
                            <a className="text-nblue text-mont text-lg font-bold mb-2" href="">
                              {category.name}
                            </a>
                            {category.appeals.map((appeal) => (
                              <Link to={`/appeal/${appeal.id}`} key={appeal.id}>
                                <a className="text-base text-dgray tet-mont font-medium mt-2" href="">
                                  {appeal.title}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return result;
                })()}

                <div className="w-1 h-full border-r-2 border-gray-300 mr-8 hidden lg:block"></div>
              </div>
              ) : null}

              <div class="lg:w-1/3 w-full h-auto flex justify-between">
                <div class="h-auto">
                  <img class="flex" src={categories.length > 0 && categories[1].icon ? categories[1].icon : "./Icons/icon_emergency-color.svg"} alt="icon_emergency-color" />
                </div>
                <div class="w-full h-auto ml-4 flex flex-col">
                  <a class="text-nblue text-mont text-lg font-bold mb-2" href="">{categories.length > 0 && categories[1].name}</a>
                  {categories.length > 0 && categories[1].appeals.map(appeal => (
                    <Link to={`/appeal/${appeal.id}`}>
                      <a class="text-base text-dgray tet-mont font-medium mt-2" href="">{appeal.title}</a>
                    </Link>
                  ))}
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
                      <a class="text-nblue text-mont text-lg font-bold mb-2" href="">{categories.length > 0 && categories[2].name}</a>
                      {categories.length > 0 && categories[2].appeals.map(appeal => (
                        <Link to={`/appeal/${appeal.id}`}>
                          <a class="text-base text-dgray tet-mont font-medium mt-2" href="">{appeal.title}</a>
                        </Link>
                      ))}
                    </div>
                  </div>
                    <div class="w-full h-auto flex justify-between mt-6">
                      <div class="h-auto">
                        <img class="flex" src="./Icons/icon_orphan-color.svg" alt="icon_orphan-color" />
                      </div>
                      <div class="w-full h-auto ml-4 flex flex-col">
                        <a class="text-nblue text-mont text-lg font-bold mb-2" href="">{categories.length > 0 && categories[3].name}</a>
                        {categories.length > 0 && categories[3].appeals.map(appeal => (
                          <Link to={`/appeal/${appeal.id}`}>
                            <a class="text-base text-dgray tet-mont font-medium mt-2" href="">{appeal.title}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div class="w-full h-auto flex justify-between mt-6">
                      <div class="h-auto">
                        <img class="flex" src="./Icons/icon_hungry.svg" alt="icon_hungry" />
                      </div>
                      <div class="w-full h-auto ml-4 flex flex-col">
                        <a class="text-nblue text-mont text-lg font-bold mb-2" href="">{categories.length > 0 && categories[4].name}</a>
                        {categories.length > 0 && categories[4].appeals.map(appeal => (
                          <Link to={`/appeal/${appeal.id}`}>
                            <a class="text-base text-dgray tet-mont font-medium mt-2" href="">{appeal.title}</a>
                          </Link>
                        ))}
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
              {appeals.slice(0, 3).map((appeal, index) => (                        
                <div class="w-1/4 h-auto px-4 flex justify-center">                         
                  <div class="w-1/2 h-auto relative">
                    <img className="w-full h-full" src={SERVER_URL + appeal.cover_image} alt="Pakistan Floods 2022" />
                    <button id="cursor-pointer" class="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-vs font-semibold text-white text-mont bg-sblue rounded-lg px-3 py-2"
                    onClick={() => {
                      setSelectedAppealId(appeal.id);
                      setshowDonateModal(true);
                    }}>DONATE NOW <i class="fa-solid fa-arrow-right"></i></button>    
                  </div>
                    <div class="w-1/2 h-auto bg-white rounded-r-xl flex flex-col justify-between relative p-4">
                      <Link to={`/appeal/${appeal.id}`}>                                 
                        <h2 class="text-xs text-mont font-bold text-black-50">{appeal.title}</h2>
                        <a class="text-sblue text-lg" href=""><i class="fa-solid fa-arrow-right"></i></a>
                      </Link>                                
                      <div className='absolute -left-4 top-1/3 bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs'>
                        <span className='cursor-default'>{donationService.getDonationTag(appeal.appeal_tag)}</span>
                      </div>
                    </div>
                </div>
              ))}          
            </div>
              <img class={active == 'appeal' ? "absolute -top-2 left-1/4 ml-4 hidden lg:block" : active == 'zakat' ? "absolute -top-2 left-1/2  -ml-10  hidden lg:block" :  "absolute -top-2 left-1/3 ml-10  hidden lg:block"}  src="./Icons/triangle-up.svg" alt="triangle-up" />
          </div>
        </div>
        {showDonateModal ? (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
          appealId={selectedAppealId}
        />
        ) : null}
    </div>     
  );
}

export default Appeal_modal;