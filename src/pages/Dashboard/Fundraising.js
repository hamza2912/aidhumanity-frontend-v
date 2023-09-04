import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Appeal from '../../components/Appeal';
import DashboardFooter from '../../components/DashboardFooter';
import { isMobile } from 'react-device-detect';
import dashboardService from '../../services/dashboard';
import { getDonationTag } from '../../constants';
import { currencyFormatter } from '../../utils';
import { Link } from 'react-router-dom';
import CircularProgressBar from '../AppealDetails/CircularProgressBar';
import Image from '../../components/common/Image';

const Fundraising = () => {
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    const data = await dashboardService.getCampaigns();
    console.log('campaigns', data);
    setCampaigns(data);
  };
  useEffect(() => {
    fetchCampaigns();
  }, []);
  
  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="funds" />
      <section className="flex w-full relative pt-16 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Fundraising</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-xl w-full">
              <div className="lg:px-6 px-4 py-8">
                <h2 className="text-lg text-black-50 font-bold">
                  Active Pages
                </h2>
                <div className="bg-bwhite rounded-xl py-6 flex justify-center mt-8">
                  <div className="flex gap-2 w-auto px-4">
                    <img
                      src="images/icons/dashboard/icon_info-circle.svg"
                      alt=""
                    />
                    <p className="text-blue lg:text-sm text-xs font-bold">
                      Raising money for a charity? Your donations are being sent
                      to them automatically.
                    </p>
                  </div>
                </div>
                {campaigns.map(campaign => (
                  <div
                    className="flex lg:flex-row flex-col justify-between mt-6"
                    key={`campaign-${campaign.id}`}
                  >
                    <div className="lg:w-1/2 h-[5.6rem] w-full flex gap-4 relative">
                      <div className='relative'>
                        <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs absolute top-[40%] -right-2">
                          <span className="cursor-default">
                            {getDonationTag(campaign.appeal_tag)}
                          </span>
                        </div>
                        <Image
                          url={campaign.cover_image}
                          classNames="rounded-xl h-full"
                          containerClass={'w-24 rounded-xl h-full'}
                          logoClass="w-50 h-50"
                        />
                      </div>
                      <div className="w-1/2 flex flex-col justify-center">
                        <h2 className="text-sm font-bold text-black-50">
                          {campaign.title}
                        </h2>
                        <p className="text-vs text-gray-300 font-medium mt-2">
                          {campaign.category?.name}
                        </p>
                        <div className="flex justify-between lg:w-1/2 w-2/3 mt-3">
                          <Link
                            className="text-sm font-bold text-gray-500 hover:text-sblue"
                            to={`/campaign/${campaign.id}/edit`}
                          >
                            EDIT
                          </Link>
                          <div className="h-4 border-l-2 ml-2 mr-2"></div>
                          <Link
                            className="text-sm font-bold text-gray-500 hover:text-sblue"
                            to={`/campaign/${campaign.id}/view`}
                          >
                            VIEW
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-end items-center gap-4">
                      <div className="flex flex-col justify-center">
                        <p className="text-blue text-sm font-bold">
                          Raised: {currencyFormatter(campaign.raised_amount)} /{' '}
                          {currencyFormatter(campaign.targeted_amount)}.
                        </p>
                        <p className="text-sm text-gray-400 flex items-center">
                          by{' '}
                          <span className="mx-2">
                            <img
                              src="images/icons/dashboard/icon_user-circle.svg"
                              className="w-4"
                              alt=""
                            />
                          </span>{' '}
                          {campaign.supporters_count || 0} supporters
                        </p>
                      </div>
                      <CircularProgressBar
                        percentage={(campaign.targeted_amount === 0 || !campaign.targeted_amount
                          || campaign.raised_amount  > campaign.targeted_amount) ? "100"
                        : Math.round(
                          (campaign.raised_amount / campaign.targeted_amount) * 100
                        )}
                        style={{
                          width: '4rem',
                          height: '4rem',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex">
            <DashboardFooter />
          </div>
        </div>
        {!isMobile && <Appeal />}
      </section>
    </div>
  );
};

export default Fundraising;
