import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/dashboard_footer';
import History_row from '../../components/history_row';
import {isMobile} from 'react-device-detect';
import {CChart} from '@coreui/react-chartjs';

function Dashboard() {

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const options2 = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        position: 'bottom',
      },
    },
    elements: {
      customCutout: true
    },
    cutoutPercentage: 92,
  };
  

  return (
      
    <div className='flex w-full h-full'>
      <Sidebar active="dashboard" />
      <section className='flex w-full relative pt-20 lg:pt-0'>
        <div className='w-dashboard bg-gray pb-20'>
          <div className='flex items-center py-5 lg:px-12 px-4 lg:border-b-2 h-20'>
            <h1 className='text-xl font-bold'>Dashboard</h1>
          </div>
          <div className='lg:my-8 lg:px-12 px-4'>
            <div className='bg-white rounded-xl w-full'>
              <div className='lg:p-6 p-4 flex justify-between items-center border-b-2'>
                <div className='flex lg:gap-4 gap-2'>
                  <h2 className='text-lg text-black-50 font-bold'>Statistics</h2>
                  <div className='flex gap-1 items-center'>
                    <div className='w-2 h-2 bg-blue rounded-full'></div>
                    <p className='text-blue lg:text-sm text-xs'>Raised</p>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div className='w-2 h-2 bg-green rounded-full'></div>
                    <p className='text-green lg:text-sm text-xs'>Given</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 w-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.115" viewBox="0 0 17 15.115">
                  <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                    <g id="Group_2511" data-name="Group 2511">
                      <g id="Group_15380" data-name="Group 15380">
                        <line id="Line_297" data-name="Line 297" y2="2.441" transform="translate(3.494)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <line id="Line_298" data-name="Line 298" y2="2.441" transform="translate(9.541)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <line id="Line_299" data-name="Line 299" x2="12.688" transform="translate(0 4.882)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      </g>
                    </g>
                    <rect id="Rectangle_3594" data-name="Rectangle 3594" width="1.835" height="1.835" transform="translate(2.172 6.932)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <rect id="Rectangle_3595" data-name="Rectangle 3595" width="1.835" height="1.835" transform="translate(5.676 6.932)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <g id="Group_2513" data-name="Group 2513" transform="translate(0 1.33)">
                      <g id="Group_2527" data-name="Group 2527">
                        <path id="Path_7197" data-name="Path 7197" d="M10.069,12.506A3.466,3.466,0,0,1,13.534,9.04a3.53,3.53,0,0,1,.45.032V4.864a1.677,1.677,0,0,0-1.677-1.677H2.677A1.677,1.677,0,0,0,1,4.864v8.3a1.676,1.676,0,0,0,1.677,1.677h8.3A3.449,3.449,0,0,1,10.069,12.506Z" transform="translate(-1 -3.187)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <path id="Path_7199" data-name="Path 7199" d="M19.374,12.809a3.466,3.466,0,1,1-3.466,3.466A3.465,3.465,0,0,1,19.374,12.809Z" transform="translate(-6.839 -6.956)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                        <path id="Path_7200" data-name="Path 7200" d="M22.7,18.156H21.052V16.272" transform="translate(-8.854 -8.312)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                      </g>
                    </g>
                  </g>
                  </svg>
                  <p className='lg:text-sm text-xs text-gray-light font-meidum lg:block hidden'>Last 7 Days</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8.121" height="4.744" viewBox="0 0 8.121 4.744">
                    <g id="angle-down" transform="translate(1.061 1.061)">
                      <path id="Path_38235" data-name="Path 38235" d="M680.353,385.538l2.977,2.933,3.023-2.933" transform="translate(-680.354 -385.538)" fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className='px-6 py-6'>
                <CChart 
                  options={options}
                  type="line" 
                  data={{
                    labels: ["2 apr", "3 apr", "4 apr", "5 apr", "6 apr", "7 apr", "8 apr"],
                    datasets: [
                      {
                        label: "My First dataset",
                        backgroundColor: "rgba(220, 220, 220, 0.2)",
                        borderColor: "#00ADE9",
                        pointBackgroundColor: "rgba(220, 220, 220, 1)",
                        pointBorderColor: "#fff",
                        data: [40, 20, 12, 39, 10, 40, 39]
                      },
                      {
                        label: "My Second dataset",
                        backgroundColor: "rgba(151, 187, 205, 0.2)",
                        borderColor: "#00c98b",
                        pointBackgroundColor: "rgba(151, 187, 205, 1)",
                        pointBorderColor: "#fff",
                        data: [50, 12, 28, 29, 7, 25, 12],
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className='flex lg:flex-row flex-col gap-5 mt-5'>
              <div className='bg-white rounded-xl lg:w-2/3 w-full'>
                <div className='lg:p-6 p-4 flex justify-between items-center border-b-2'>
                  <h2 className='text-lg font-bold text-black-50'>Fundraising</h2>
                  <a className='text-xs text-blue-dark font-semibold'>View All</a>
                </div>
                <div className='w-full flex flex-col lg:px-6 px-4 py-8'>
                  <div className='flex gap-4 '>
                    <img className='w-1/4' src="images/icons/dashboard/funds.png" alt="" />
                    <div className='w-full flex flex-col justify-center'>
                      <div className='flex justify-between items-center'>
                        <h2 className='lg:text-base text-sm font-bold text-black-50'>Pakistan Floods</h2>
                        <img className='w-6 h-6' src="images/icons/dashboard/badge_zakat.svg" alt="" />
                      </div>
                      <p className='text-vs text-gray-300 font-medium mt-2'>Disaster & Emergency Appeals</p>
                      <div className='w-full h-2 mt-2 bg-gray rounded-2xl'>
                        <div className='w-1/2 bg-blue h-full rounded-2xl'></div>
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
                        <p className='text-green text-sm font-semibold'>80%</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex mt-4 gap-4 '>
                    <img className='w-1/4' src="images/icons/dashboard/funds.png" alt="" />
                    <div className='w-full flex flex-col justify-center'>
                      <div className='flex justify-between items-center'>
                        <h2 className='lg:text-base text-sm font-bold text-black-50'>Pakistan Floods</h2>
                        <img className='w-6 h-6' src="images/icons/dashboard/badge_zakat.svg" alt="" />
                      </div>
                      <p className='text-vs text-gray-300 font-medium mt-2'>Disaster & Emergency Appeals</p>
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
                </div>
              </div>
              <div className='bg-white rounded-xl  lg:w-1/3 w-full'>
                <div className='lg:p-6 p-4 flex justify-between items-center border-b-2'>
                  <h2 className='text-lg font-bold text-black-50'>Appeal Type</h2>
                </div>
                <div className='lg:p-6 p-4'>
                  {/* <img className='w-full' src="images/icons/dashboard/pie.png" alt="" /> */}
                  <CChart
                    options={options2}
                    type="doughnut"
                    data={{
                      labels: ['Disaster Emergency', 'Water for All', 'Hunger Appeal'],
                      datasets: [
                        {
                          backgroundColor: [ '#00c98b', '#ffc100', '#00ADE9'],
                          data: [12, 18, 57],
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='bg-white rounded-xl w-full mt-5'>
              <div className='lg:p-6 p-4 flex justify-between items-center border-b-2'>
                <h2 className='text-lg font-bold text-black-50'>Donation History</h2>
                <a className='text-xs text-blue-dark font-semibold'>View All</a>
              </div>
              <div className='lg:p-6 p-4'>
              <table class="w-full ui single line table table-fix">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <History_row name="Ron Hill" date="Tue 12 Dec, 08:15" country="USA" amount="£450.90" />
                  <History_row name="Ron Hill" date="Tue 12 Dec, 08:15" country="USA" amount="£450.90" />
                  <History_row name="Ron Hill" date="Tue 12 Dec, 08:15" country="USA" amount="£450.90" />
                  <History_row name="Ron Hill" date="Tue 12 Dec, 08:15" country="USA" amount="£450.90" />
                </tbody>
              </table>

              </div>
            </div>
          </div>
          <Dashboard_footer />
        </div>
        {}
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>

  );

}
  
export default Dashboard;
