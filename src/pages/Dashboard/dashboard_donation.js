import React from "react";
import {isMobile} from 'react-device-detect';


function Dashboard_donation({showRowDetails,setshowRowDetails}) {

    return(
      <div className='lg:w-80 w-full rounded-xl lg:absolute fixed right-0 lg:-right-32 lg:-top-48 top-0 shadow-xl z-50'>
          <div className='bg-white py-4 lg:hidden'>
              <p onClick={()=>setshowRowDetails(false)} className="text-sm font-semibold pl-4 flex items-center gap-2"><img  className="w-3 h-3" src="images/icons/dashboard/angle-left.svg" alt="" /> Donation</p>
          </div>
          <div className='lg:rounded-t-xl w-full p-4 bg-gray-10'>
            <h2 className='text-lg font-bold text-black-50'>Ron Hill</h2>
            <p className="text-sm text-black-50">Britain</p>
          </div>
          <div className='rounded-b-xl bg-rwhite lg:h-auto h-screen px-4 py-8 relative'>
            <div className='absolute -top-8 right-4 w-16 flex flex-col items-center'>
              <img class="w-full" src="./Icons/badge_bronze.svg" alt="badge_in" />
              <p className="text-xs  font-semibold text-black-50">Britain</p>
            </div>
            
            <p className='text-vs text-gray-300 font-medium'>AMOUNT</p>
            <p className='text-lg text-blue font-semibold'>£231.50</p>
            <div className='flex mt-4 gap-4 '>
                <div className='w-full flex flex-col justify-center'>
                  <div className='flex justify-between items-center'>
                    <h2 className='lg:text-base text-sm font-bold text-black-50'>Pakistan Floods</h2>
                    <img className='w-5 h-5' src="images/icons/dashboard/badge_zakat.svg" alt="" />
                  </div>
                  <p className='text-vs text-gray-300 font-medium'>Disaster & Emergency Appeals</p>
                  <div className='w-full h-2 mt-2 bg-gray rounded-2xl'>
                    <div className='w-1/3 bg-blue h-full rounded-2xl'></div>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <div className='flex gap-2 w-auto'>
                      <p className='text-xs lg:text-sm font-semibold text-gray-300'><span className='text-blue'>£243</span>/870</p>
                      <p className='text-gray-600 lg:text-sm text-xs font-medium flex gap-1 items-center'>
                        <svg className='w-3 h-3' xmlns="http://www.w3.org/2000/svg" width="18.806" height="18.806" viewBox="0 0 18.806 18.806">
                          <g id="icon_user-circle" transform="translate(0.75 0.75)">
                            <g id="Group_2374" data-name="Group 2374">
                              <circle id="Ellipse_122" data-name="Ellipse 122" cx="3.599" cy="3.599" r="3.599" transform="translate(5.053 3.362)" fill="none" stroke="#444445" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                              <path id="Path_5611" data-name="Path 5611" d="M1190.633,69.586a8.033,8.033,0,0,0-11.064,0" transform="translate(-1176.451 -54.376)" fill="none" stroke="#444445" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                              <circle id="Ellipse_123" data-name="Ellipse 123" cx="8.653" cy="8.653" r="8.653" fill="none" stroke="#444445" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            </g>
                          </g>
                        </svg>
                        12 supporters
                      </p>
                    </div>
                    <p className='text-green text-sm font-semibold'>30%</p>
                  </div>
                </div>
            </div>
            <p className="text-sm text-black-50 font-medium flex items-center gap-2 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                  <g id="Group_2511" data-name="Group 2511">
                    <g id="Group_15380" data-name="Group 15380">
                      <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#bdbdbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#bdbdbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#bdbdbd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    </g>
                  </g>
                  <rect id="Rectangle_3594" data-name="Rectangle 3594" width="1.835" height="1.835" transform="translate(2.172 6.932)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_3595" data-name="Rectangle 3595" width="1.835" height="1.835" transform="translate(5.676 6.932)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <g id="Group_2513" data-name="Group 2513" transform="translate(0 1.33)">
                    <g id="Group_2527" data-name="Group 2527">
                      <path id="Path_7197" data-name="Path 7197" d="M10.069,12.506A3.466,3.466,0,0,1,13.534,9.04a3.53,3.53,0,0,1,.45.032V4.864a1.677,1.677,0,0,0-1.677-1.677H2.677A1.677,1.677,0,0,0,1,4.864v8.3a1.676,1.676,0,0,0,1.677,1.677h8.3A3.449,3.449,0,0,1,10.069,12.506Z" transform="translate(-1 -3.187)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      <path id="Path_7199" data-name="Path 7199" d="M19.374,12.809a3.466,3.466,0,1,1-3.466,3.466A3.465,3.465,0,0,1,19.374,12.809Z" transform="translate(-6.839 -6.956)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      <path id="Path_7200" data-name="Path 7200" d="M22.7,18.156H21.052V16.272" transform="translate(-8.854 -8.312)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    </g>
                  </g>
                </g>
              </svg>
              Tue 12 Dec, 08:15</p>
          </div>
      </div>
    )

}

export default Dashboard_donation;
