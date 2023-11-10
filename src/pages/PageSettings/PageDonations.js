import React, { useCallback, useEffect, useState } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardFooter2 from '../../components/DashboardFooter2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CampaignService from '../../services/campaign';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import { currencyFormatter } from '../../utils';
import { toast } from 'react-toastify';
import Header from "../../components/Header";
import DonationTable from './DonationTable';

const PageDonations = () => {
  const { campaign } = useSelector(state => state.appeal);
  const [input, setInput] = useState('');
  const { campaignId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);

  const fetchCampaign = useCallback(async () => {
    const campaign = await CampaignService.getCampaign(campaignId);
    const { donations } = await CampaignService.getDonations(campaignId);

    setDonations(donations);
    dispatch(updateCampaign(campaign));
  }, [dispatch, campaignId]);

  useEffect(() => {
    if (!campaign) {
      fetchCampaign();
    }
  }, [fetchCampaign, campaign]);

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append(`campaign[offline_donations]`, input);

    try {
      const data = await CampaignService.updateCampaign(formData, campaignId);
      if (data) {
        dispatch(updateCampaign(data));
        setInput('');
        toast.success('Offline Donations Updated Successfully');
      }
    } catch (e) {}
  };

  if (campaign?.cancelled_at) {
    return navigate('/appeals');
  }

  return (
    <div>
      {/* <DashboardHeader /> */}
      <Header activePage = 'page_view' />
      <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8 mt-16">
        <div className="lg:w-3/5 w-full page-section mx-auto">
          <h1 className="text-blue font-bold text-2xl lg:my-6 my-4 pl-6">
            Donations
          </h1>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl">
            <h2 className="text-lg text-black-50 font-bold">Donations Total</h2>
          </div>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2">
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed">
              <p>Number of donations:</p>
              <p>{campaign?.donations_count}</p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed mt-3">
              <p>Total raised:</p>
              <p>
                {currencyFormatter(
                  campaign?.raised_amount +
                    campaign?.offline_donations_cents / 100
                )}
              </p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed mt-3">
              <p>Total raised online:</p>
              <p>{currencyFormatter(campaign?.raised_amount) || 0}</p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 border-b-2 border-dashed mt-3">
              <p>Total offline donations:</p>
              <p>
                {currencyFormatter(campaign?.offline_donations_cents / 100) ||
                  0}
              </p>
            </div>
            <div className="lg:w-1/3 w-4/5 flex flex-col text-gray-600 font-semibold pb-2 mt-3">
              <p>Gift Aid plus supplement:</p>
              <p>£0.00</p>
            </div>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">
                Offile Donations
              </h2>
              <p className="text-gray-600 mt-4">
                Have you received any offline donations? Add the total amount
                here.
              </p>
              <div className="flex lg:flex-row flex-col gap-4 items-center mt-6">
                <div className="relative lg:w-2/3 w-full">
                  <input
                    id="title"
                    className="w-full py-3 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10"
                    type="text"
                    placeholder="£ 0.00"
                    onChange={e => setInput(e.target.value)}
                  />
                </div>
                <button
                  className="py-4 lg:w-1/3 w-full lg:relative fixed lg:bottom-0 bottom-12 left-0 bg-green hover:bg-mgreen text-black font-bold text-sm lg:rounded-lg uppercase"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white w-full border-b-2 rounded-b-xl">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">
                Donations made to your page
              </h2>
              <p className="text-gray-600 mt-4">
                You have {donations.length} donations.
              </p>
              <p className="text-blue text-sm font-semibold mt-3">
                See what happens to your donations
              </p>
              {donations.length > 0 && (
                <table className="w-full ui single line table table-fix">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <DonationTable donations={donations} />
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter2 active="donations" title={campaign?.title} />
    </div>
  );
};

export default PageDonations;
