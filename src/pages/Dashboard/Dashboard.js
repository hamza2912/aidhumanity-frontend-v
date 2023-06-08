import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import DashboardFooter from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';
import { CChart } from '@coreui/react-chartjs';
import withAuth from '../../AuthRoute';
import dashboardService from '../../services/dashboard';
import StatsChart from './StatsChart';
import { Fundraisers } from './Fundraisers';
import DonationHistoryTable from './DonationHistoryTable';
import { useDispatch } from 'react-redux';
import { setDashboardInfo } from '../../redux/auth/userSlice';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = React.useState({});
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDaashboardData();
  }, []);

  const fetchDaashboardData = async () => {
    const data = await dashboardService.getDashboardData();
    setDashboardData(data);
    dispatch(setDashboardInfo(data));
  };
  
  let totalGiven = dashboardData?.total_given
  let donations = dashboardData?.donations;
  let badge = dashboardData && dashboardData.donations && dashboardData.donations[0]?.user.badge
  let badgeImg = `/Icons/badge_${badge?.charAt(0).toUpperCase()}${badge?.slice(1)}.svg`
  
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
      customCutout: true,
    },
    cutout: 40,
    spacing: -10,
    borderWidth: 0,
  };

  return (
    <div className="flex w-full h-full">
      <Sidebar active="dashboard" {...{ totalGiven, badge, badgeImg}} />
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-xl w-full">
              <div className="lg:p-6 p-4 flex justify-between items-center border-b-2">
                <div className="flex lg:gap-4 gap-2">
                  <h2 className="text-lg text-black-50 font-bold">
                    Statistics
                  </h2>
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 bg-blue rounded-full"></div>
                    <p className="text-blue lg:text-sm text-xs">Raised</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 bg-green rounded-full"></div>
                    <p className="text-green lg:text-sm text-xs">Given</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15.115"
                    viewBox="0 0 17 15.115"
                  >
                    <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                      <g id="Group_2511" data-name="Group 2511">
                        <g id="Group_15380" data-name="Group 15380">
                          <line
                            id="Line_297"
                            data-name="Line 297"
                            y2="2.441"
                            transform="translate(3.494)"
                            fill="none"
                            stroke="#7c7c7c"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <line
                            id="Line_298"
                            data-name="Line 298"
                            y2="2.441"
                            transform="translate(9.541)"
                            fill="none"
                            stroke="#7c7c7c"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <line
                            id="Line_299"
                            data-name="Line 299"
                            x2="12.688"
                            transform="translate(0 4.882)"
                            fill="none"
                            stroke="#7c7c7c"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                      <rect
                        id="Rectangle_3594"
                        data-name="Rectangle 3594"
                        width="1.835"
                        height="1.835"
                        transform="translate(2.172 6.932)"
                        fill="none"
                        stroke="#7c7c7c"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <rect
                        id="Rectangle_3595"
                        data-name="Rectangle 3595"
                        width="1.835"
                        height="1.835"
                        transform="translate(5.676 6.932)"
                        fill="none"
                        stroke="#7c7c7c"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <g
                        id="Group_2513"
                        data-name="Group 2513"
                        transform="translate(0 1.33)"
                      >
                        <g id="Group_2527" data-name="Group 2527">
                          <path
                            id="Path_7197"
                            data-name="Path 7197"
                            d="M10.069,12.506A3.466,3.466,0,0,1,13.534,9.04a3.53,3.53,0,0,1,.45.032V4.864a1.677,1.677,0,0,0-1.677-1.677H2.677A1.677,1.677,0,0,0,1,4.864v8.3a1.676,1.676,0,0,0,1.677,1.677h8.3A3.449,3.449,0,0,1,10.069,12.506Z"
                            transform="translate(-1 -3.187)"
                            fill="none"
                            stroke="#7c7c7c"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <path
                            id="Path_7199"
                            data-name="Path 7199"
                            d="M19.374,12.809a3.466,3.466,0,1,1-3.466,3.466A3.465,3.465,0,0,1,19.374,12.809Z"
                            transform="translate(-6.839 -6.956)"
                            fill="none"
                            stroke="#7c7c7c"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <path
                            id="Path_7200"
                            data-name="Path 7200"
                            d="M22.7,18.156H21.052V16.272"
                            transform="translate(-8.854 -8.312)"
                            fill="none"
                            stroke="#7c7c7c"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p className="lg:text-sm text-xs text-gray-light font-meidum lg:block hidden">
                    Last 7 Days
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8.121"
                    height="4.744"
                    viewBox="0 0 8.121 4.744"
                  >
                    <g id="angle-down" transform="translate(1.061 1.061)">
                      <path
                        id="Path_38235"
                        data-name="Path 38235"
                        d="M680.353,385.538l2.977,2.933,3.023-2.933"
                        transform="translate(-680.354 -385.538)"
                        fill="none"
                        stroke="#7c7c7c"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {dashboardData?.graph_data && (
                <StatsChart data={dashboardData.graph_data} />
              )}
            </div>
            <div className="flex lg:flex-row flex-col gap-5 mt-5">
              <div className="bg-white rounded-xl lg:w-2/3 w-full">
                <div className="lg:p-6 p-4 flex justify-between items-center border-b-2">
                  <h2 className="text-lg font-bold text-black-50">
                    Fundraising
                  </h2>
                  <a className="text-xs text-blue-dark font-semibold">
                    View All
                  </a>
                </div>
                {dashboardData?.campaigns && (
                  <Fundraisers campaigns={dashboardData.campaigns} />
                )}
              </div>
              <div className="bg-white rounded-xl  lg:w-1/3 w-full">
                <div className="lg:p-6 p-4 flex justify-between items-center border-b-2">
                  <h2 className="text-lg font-bold text-black-50">
                    Appeal Type
                  </h2>
                </div>
                {dashboardData?.appeals_count_by_category && (
                  <div className="lg:p-2 p-4">
                    {/* <img className='w-full' src="images/icons/dashboard/pie.png" alt="" /> */}
                    <CChart
                      options={options2}
                      type="doughnut"
                      data={{
                        labels: Object.keys(
                          dashboardData.appeals_count_by_category
                        ),
                        datasets: [
                          {
                            backgroundColor: ['#00c98b', '#ffc100', '#00ADE9'],
                            data: Object.values(
                              dashboardData.appeals_count_by_category
                            ),
                            borderRadius: 10
                          },
                        ],
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            {dashboardData?.donations && (
              <DonationHistoryTable {...{donations, badge, badgeImg}} />
            )}
          </div>
          <DashboardFooter />
        </div>
        {}
        {!isMobile && <Appeal />}
      </section>
    </div>
  );
};

export default withAuth(Dashboard);
