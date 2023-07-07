import React, { useEffect, useState } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardFooter2 from '../../components/DashboardFooter2';
import CancelModal from '../../components/modal/CancelModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CampaignService from '../../services/campaign';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import QRCode from 'react-qr-code';
import { getUrl } from '../../constants';

const PageSettings = () => {
  const [showShareModal, setshowShareModal] = React.useState(false);
  const { campaign } = useSelector(state => state.appeal);
  const [endAt, setEndAt] = useState(new Date());
  const [thankyou, setThankYou] = useState('');

  const { campaignId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchCampaign = async () => {
    const campaign = await CampaignService.getCampaign(campaignId);
    dispatch(updateCampaign(campaign));
  };
  useEffect(() => {
    if (!campaign) {
      fetchCampaign();
    } else {
      setThankYou(campaign.thank_you_message);
      setEndAt(campaign.end_at);
    }
  }, [campaign]);

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append(`campaign[end_at]`, endAt);
    formData.append(`campaign[thank_you_message]`, thankyou);

    try {
      const data = await CampaignService.updateCampaign(formData, campaignId);
      dispatch(updateCampaign(data));
      setEndAt(new Date());
      toast.success('Page Settings Updated Successfully');
    } catch (e) {}
  };

  const hanldeDelete = async () => {
    try {
      const data = await CampaignService.cancelCampaign(campaignId);
      if (data) {
        navigate('/appeals');
        toast.success('Campaign Cancelled Successfully');
      }
    } catch (e) {}
  };

  if (campaign?.cancelled_at) {
    return navigate('/appeals');
  }
  return (
    <div>
      <DashboardHeader />
      <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8">
        <div className="lg:w-3/5 w-full page-section mx-auto">
          <h1 className="text-blue font-bold text-2xl lg:my-6 my-4 pl-6">
            Settings
          </h1>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl">
            <h2 className="text-lg text-black-50 font-bold">
              Extend your page
            </h2>
          </div>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2">
            <p className="text-gray-600 mt-4">
              {campaign?.end_at && (
                <>
                  <span>Your page will stop taking donations on </span>
                  <span className="font-semibold">
                    {dayjs(campaign?.end_at).format('DD MMMM YYYY')}
                  </span>
                </>
              )}
            </p>
            <div className="relative mt-8">
              <input
                name="endAt"
                id="endAt"
                className="w-full py-3 pl-12 pr-4 rounded-md text-gray-400 font-medium border border-gray-400 focus:outline-none z-10"
                placeholder="04/08/2023"
                type="date"
                value={endAt}
                onChange={e => setEndAt(e.target.value)}
              />
              <img
                className="w-7 absolute left-3 top-3"
                src="/images/icons/dashboard/icon_calendar-clock.svg"
                alt=""
              />
            </div>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">
                Thank you message
              </h2>
              <p className="text-gray-600 mt-4">
                Its really good idea to personalize the thank you message, which
                is sent automatically to anyone who makes a donation through
                your Aid Humanity page.
              </p>
              <textarea
                name="thankyou"
                id="thankyou"
                cols="30"
                rows="10"
                className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-4"
                value={thankyou}
                onChange={e => setThankYou(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="lg:relative fixed left-0 bottom-12 lg:bottom-0 w-full lg:w-auto py-4 px-12 bg-green hover:bg-mgreen text-white font-semibold text-sm lg:rounded-lg uppercase mt-2 mb-8"
              >
                Save Changes
              </button>
            </div>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">
                Send a QR code
              </h2>
              <p className="text-gray-600 mt-4">
                Here’s your very own QR code to help your supporters find your
                page more easily. Just open up the camera on your smart phone
                and point it at this screen and it’ll take you directly to the
                page. You can either save, screenshot, print posters, and send
                your QR code with family and friends on WhatsApp, text or email.
                It couldn’t be easier.
              </p>
              <div className="flex justify-center h-104px mt-4">
                {campaign && (
                  <QRCode
                    size={100}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value={`${getUrl()}/campaign/${campaign?.id}/view`}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-b-xl">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">Cancel page</h2>
              <p className="text-gray-600 mt-4">
                Canceling your page is inreveraible and means:
              </p>
              <ul className="text-gray-600 mt-4 list-disc pl-4">
                <li>
                  You won’t be able to collect any more online donations through
                  this page
                </li>
                <li>You won’t be able to see this page</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Any donations already received on the fundraising page will be
                automatically paid to the charity you have selected. You do not
                need to do anything else.
              </p>
              <button
                onClick={hanldeDelete}
                className="lg:relative fixed left-0 bottom-12 lg:bottom-0 w-full lg:w-auto py-4 px-12 bg-red hover:bg-dred text-white font-semibold text-sm lg:rounded-lg uppercase mt-8"
              >
                Cancel my humantiy page
              </button>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter2 active="settings" title={campaign?.title} />
      {showShareModal ? (
        <CancelModal
          showModal={showShareModal}
          setshowModal={setshowShareModal}
        />
      ) : null}
    </div>
  );
};

export default PageSettings;
