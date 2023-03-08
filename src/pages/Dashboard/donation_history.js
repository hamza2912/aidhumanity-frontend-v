import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/dashboard_footer';
import {isMobile} from 'react-device-detect';

function Donation_history() {
  return (

    <div className='flex w-full h-full min-h-screen'>
    <Sidebar active="donation" />
    <section className='flex w-full relative pt-20 lg:pt-0'>
      <div className='w-dashboard bg-gray pb-20'>
        <div className='flex items-center py-5 lg:px-12 px-4 border-b-2 h-20'>
          <h1 className='text-xl font-bold'>Donation history</h1>
        </div>
        <div className='my-8 lg:px-12 px-4'>
          <div className='bg-white rounded-xl w-full lg:px-6 px-4 py-8 '>
            <div className='flex lg:flex-row flex-col lg:gap-32 gap-4'>
              <div className='flex flex-col'>
                <p className='text-gray-600'>Total donations</p>
                <h2 className='text-lg text-black-50 font-bold'>£2.134</h2>
              </div>
              <div className='flex flex-col'>
                <p className='text-gray-600'>Gift Aid reclaimed</p>
                <h2 className='text-lg text-black-50 font-bold'>£0.00</h2>
              </div>
            </div>
            <div className='w-carousel owl-carousel owl-theme donation-history mx-auto'>
                <div className='w-full mt-8 flex flex-col gap-4 item'>
                  <div className='w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between'>
                    <div className='flex flex-col'>
                      <h1 className='flex gap-2 items-center text-blue-dark text-base font-semibold'><img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" /> Ron Hill</h1>
                      <h2 className='text-sm font-bold text-black-50'>Water Hands Pumps Uganda</h2>
                      <p className='text-vs text-gray-300 font-medium'>Water for All</p>
                      <p className='text-lg text-blue font-semibold mt-2'>£231.50</p>
                    </div>
                    <div className='flex flex-col lg:items-end'>
                      <div className='flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50'>
                        <p className=''>from <span className='font-semibold'>Great Britain</span></p>
                        <p className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                            <g id="Group_2511" data-name="Group 2511">
                              <g id="Group_15380" data-name="Group 15380">
                                <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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
                      <svg className='w-4 mt-2 hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="25.017" height="19.85" viewBox="0 0 25.017 19.85">
                        <g id="icon_eye" transform="translate(0.75 0.75)">
                          <ellipse id="Ellipse_293" data-name="Ellipse 293" cx="11.758" cy="9.175" rx="11.758" ry="9.175" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <ellipse id="Ellipse_294" data-name="Ellipse 294" cx="5.643" cy="5.643" rx="5.643" ry="5.643" transform="translate(6.199 3.414)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Path_7495" data-name="Path 7495" d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411" transform="translate(-245.475 -248.127)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                      </svg>
                      <div className='flex justify-between w-2/5 mt-3'>
                        <a className='text-sm font-bold text-gray-500' href="">EDIT</a>
                        <div className='h-4 border-l-2'></div>
                        <a className='text-sm font-bold text-gray-500' href="">VIEW</a>
                      </div>
                    </div>
                  </div>
                  <div className='w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between'>
                    <div className='flex flex-col'>
                      <h1 className='flex gap-2 items-center text-blue-dark text-base font-semibold'><img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" /> Ron Hill</h1>
                      <h2 className='text-sm font-bold text-black-50'>Water Hands Pumps Uganda</h2>
                      <p className='text-vs text-gray-300 font-medium'>Water for All</p>
                      <p className='text-lg text-blue font-semibold mt-2'>£231.50</p>
                    </div>
                    <div className='flex flex-col lg:items-end'>
                      <div className='flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50'>
                        <p className=''>from <span className='font-semibold'>Great Britain</span></p>
                        <p className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                            <g id="Group_2511" data-name="Group 2511">
                              <g id="Group_15380" data-name="Group 15380">
                                <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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
                      <svg className='w-4 mt-2 hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="25.017" height="19.85" viewBox="0 0 25.017 19.85">
                        <g id="icon_eye" transform="translate(0.75 0.75)">
                          <ellipse id="Ellipse_293" data-name="Ellipse 293" cx="11.758" cy="9.175" rx="11.758" ry="9.175" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <ellipse id="Ellipse_294" data-name="Ellipse 294" cx="5.643" cy="5.643" rx="5.643" ry="5.643" transform="translate(6.199 3.414)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Path_7495" data-name="Path 7495" d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411" transform="translate(-245.475 -248.127)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                      </svg>
                      <div className='flex justify-between w-2/5 mt-3'>
                        <a className='text-sm font-bold text-gray-500' href="">EDIT</a>
                        <div className='h-4 border-l-2'></div>
                        <a className='text-sm font-bold text-gray-500' href="">VIEW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full mt-8 flex flex-col gap-4 item'>
                  <div className='w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between'>
                    <div className='flex flex-col'>
                      <h1 className='flex gap-2 items-center text-blue-dark text-base font-semibold'><img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" /> Ron Hill</h1>
                      <h2 className='text-sm font-bold text-black-50'>Water Hands Pumps Uganda</h2>
                      <p className='text-vs text-gray-300 font-medium'>Water for All</p>
                      <p className='text-lg text-blue font-semibold mt-2'>£231.50</p>
                    </div>
                    <div className='flex flex-col lg:items-end'>
                      <div className='flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50'>
                        <p className=''>from <span className='font-semibold'>Great Britain</span></p>
                        <p className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                            <g id="Group_2511" data-name="Group 2511">
                              <g id="Group_15380" data-name="Group 15380">
                                <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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
                      <svg className='w-4 mt-2 hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="25.017" height="19.85" viewBox="0 0 25.017 19.85">
                        <g id="icon_eye" transform="translate(0.75 0.75)">
                          <ellipse id="Ellipse_293" data-name="Ellipse 293" cx="11.758" cy="9.175" rx="11.758" ry="9.175" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <ellipse id="Ellipse_294" data-name="Ellipse 294" cx="5.643" cy="5.643" rx="5.643" ry="5.643" transform="translate(6.199 3.414)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Path_7495" data-name="Path 7495" d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411" transform="translate(-245.475 -248.127)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                      </svg>
                      <div className='flex justify-between w-2/5 mt-3'>
                        <a className='text-sm font-bold text-gray-500' href="">EDIT</a>
                        <div className='h-4 border-l-2'></div>
                        <a className='text-sm font-bold text-gray-500' href="">VIEW</a>
                      </div>
                    </div>
                  </div>
                  <div className='w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between'>
                    <div className='flex flex-col'>
                      <h1 className='flex gap-2 items-center text-blue-dark text-base font-semibold'><img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" /> Ron Hill</h1>
                      <h2 className='text-sm font-bold text-black-50'>Water Hands Pumps Uganda</h2>
                      <p className='text-vs text-gray-300 font-medium'>Water for All</p>
                      <p className='text-lg text-blue font-semibold mt-2'>£231.50</p>
                    </div>
                    <div className='flex flex-col lg:items-end'>
                      <div className='flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50'>
                        <p className=''>from <span className='font-semibold'>Great Britain</span></p>
                        <p className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                            <g id="Group_2511" data-name="Group 2511">
                              <g id="Group_15380" data-name="Group 15380">
                                <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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
                      <svg className='w-4 mt-2 hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="25.017" height="19.85" viewBox="0 0 25.017 19.85">
                        <g id="icon_eye" transform="translate(0.75 0.75)">
                          <ellipse id="Ellipse_293" data-name="Ellipse 293" cx="11.758" cy="9.175" rx="11.758" ry="9.175" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <ellipse id="Ellipse_294" data-name="Ellipse 294" cx="5.643" cy="5.643" rx="5.643" ry="5.643" transform="translate(6.199 3.414)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Path_7495" data-name="Path 7495" d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411" transform="translate(-245.475 -248.127)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                      </svg>
                      <div className='flex justify-between w-2/5 mt-3'>
                        <a className='text-sm font-bold text-gray-500' href="">EDIT</a>
                        <div className='h-4 border-l-2'></div>
                        <a className='text-sm font-bold text-gray-500' href="">VIEW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full mt-8 flex flex-col gap-4 item'>
                  <div className='w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between'>
                    <div className='flex flex-col'>
                      <h1 className='flex gap-2 items-center text-blue-dark text-base font-semibold'><img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" /> Ron Hill</h1>
                      <h2 className='text-sm font-bold text-black-50'>Water Hands Pumps Uganda</h2>
                      <p className='text-vs text-gray-300 font-medium'>Water for All</p>
                      <p className='text-lg text-blue font-semibold mt-2'>£231.50</p>
                    </div>
                    <div className='flex flex-col lg:items-end'>
                      <div className='flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50'>
                        <p className=''>from <span className='font-semibold'>Great Britain</span></p>
                        <p className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                            <g id="Group_2511" data-name="Group 2511">
                              <g id="Group_15380" data-name="Group 15380">
                                <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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
                      <svg className='w-4 mt-2 hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="25.017" height="19.85" viewBox="0 0 25.017 19.85">
                        <g id="icon_eye" transform="translate(0.75 0.75)">
                          <ellipse id="Ellipse_293" data-name="Ellipse 293" cx="11.758" cy="9.175" rx="11.758" ry="9.175" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <ellipse id="Ellipse_294" data-name="Ellipse 294" cx="5.643" cy="5.643" rx="5.643" ry="5.643" transform="translate(6.199 3.414)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Path_7495" data-name="Path 7495" d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411" transform="translate(-245.475 -248.127)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                      </svg>
                      <div className='flex justify-between w-2/5 mt-3'>
                        <a className='text-sm font-bold text-gray-500' href="">EDIT</a>
                        <div className='h-4 border-l-2'></div>
                        <a className='text-sm font-bold text-gray-500' href="">VIEW</a>
                      </div>
                    </div>
                  </div>
                  <div className='w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between'>
                    <div className='flex flex-col'>
                      <h1 className='flex gap-2 items-center text-blue-dark text-base font-semibold'><img src="images/icons/dashboard/icon_user-circle.svg" className="w-4" alt="" /> Ron Hill</h1>
                      <h2 className='text-sm font-bold text-black-50'>Water Hands Pumps Uganda</h2>
                      <p className='text-vs text-gray-300 font-medium'>Water for All</p>
                      <p className='text-lg text-blue font-semibold mt-2'>£231.50</p>
                    </div>
                    <div className='flex flex-col lg:items-end'>
                      <div className='flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50'>
                        <p className=''>from <span className='font-semibold'>Great Britain</span></p>
                        <p className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                          <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                            <g id="Group_2511" data-name="Group 2511">
                              <g id="Group_15380" data-name="Group 15380">
                                <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#1D1D1D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
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
                      <svg className='w-4 mt-2 hidden lg:block' xmlns="http://www.w3.org/2000/svg" width="25.017" height="19.85" viewBox="0 0 25.017 19.85">
                        <g id="icon_eye" transform="translate(0.75 0.75)">
                          <ellipse id="Ellipse_293" data-name="Ellipse 293" cx="11.758" cy="9.175" rx="11.758" ry="9.175" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <ellipse id="Ellipse_294" data-name="Ellipse 294" cx="5.643" cy="5.643" rx="5.643" ry="5.643" transform="translate(6.199 3.414)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Path_7495" data-name="Path 7495" d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411" transform="translate(-245.475 -248.127)" fill="none" stroke="#00ADE9" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                      </svg>
                      <div className='flex justify-between w-2/5 mt-3'>
                        <a className='text-sm font-bold text-gray-500' href="">EDIT</a>
                        <div className='h-4 border-l-2'></div>
                        <a className='text-sm font-bold text-gray-500' href="">VIEW</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex justify-between mt-6 items-center'>
              <p className='text-black-50 text-sm hidden lg:block'>21 results</p>
              <div className='flex gap-2 w-auto text-sm text-black-50 items-center'>
                <p>1</p>
                <p className='px-2 py-1 rounded-full bg-gray'>2</p>
                <p>3</p>
                <p className='flex gap-px'><div className='w-1 h-1 bg-black-50 rounded-full'></div><div className='w-1 h-1 bg-black-50 rounded-full'></div><div className='w-1 h-1 bg-black-50 rounded-full'></div></p>
                <p>14</p>
              </div>
              <div className='flex gap-2 w-auto'>
                <button className="border-2 border-gray-200 bg-gray text-gray-400 py-2 px-4 font-semibold text-sm rounded-lg z-10 prev">PREVIOUS</button>
                <button className="border-2 border-gray-200 text-gray-400 py-2 px-4 font-semibold text-sm rounded-lg z-10 next">NEXT</button>
              </div>


            </div>
          </div>
        </div>
        <Dashboard_footer />
      </div>
      {!isMobile ? <Appeal /> : null}
    </section>
  </div>      

  );
}

export default Donation_history;