import React, { useCallback, useEffect } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardFooter2 from '../../components/DashboardFooter2';
import ShareModal from '../../components/modal/ShareModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CampaignService from '../../services/campaign';
import { useParams } from 'react-router-dom';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import { useNavigate } from 'react-router-dom';
import { AppealTagBadge } from '../Dashboard/AppealTagBadge';
import { currencyFormatter } from '../../utils';
import CircularProgressBar from '../AppealDetails/CircularProgressBar';
import Header from '../../components/Header';
import dayjs from 'dayjs';
import { SERVER_URL } from '../../services/config';

const PageView = () => {
  const [showShareModal, setshowShareModal] = React.useState(false);
  const { campaign } = useSelector(state => state.appeal);
  const { campaignId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(state => state.session);

  const fetchCampaign = useCallback(async () => {
    const campaign = await CampaignService.getCampaign(campaignId);
    dispatch(updateCampaign(campaign));
  }, [dispatch, campaignId]);

  useEffect(() => {
    if (!campaign) {
      fetchCampaign();
    }
  }, [fetchCampaign, campaign]);

  if (campaign?.cancelled_at) {
    return navigate('/appeals');
  }

  return (
    <div>
      {/* <DashboardHeader /> */}
      <Header activePage="page_view" />
      <div className="w-full bg-bwhite flex lg:flex-row flex-col justify-center py-8 lg:px-20 container mx-auto px-4 mt-16">
        <div className="flex justify-between items-center lg:w-2/3 w-full">
          <div className="flex items-center gap-4">
            <div className="lg:w-24 w-20 lg:h-24 bg-blue-dark rounded-full">
              <img
                className="w-20 -mt-1 mx-auto"
                src="/images/icons/dashboard/illustration_rocket.svg"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black-50 font-bold text-lg">
                Ready for take-off?
              </h1>
              <p className="text-gray">
                Share your page to get your first supporters.
              </p>
            </div>
          </div>
        </div>
        {!user && (
          <div className="flex lg:flex-col flex-row gap-3 lg:w-40 justify-center mt-6 lg:mt-0">
            <button
              className="w-full text-dblue text-center font-semibold text-sm border-sblue border-2 hover:bg-sblue hover:text-white rounded-lg px-5 py-3"
              onClick={() => navigate('/appeals')}
            >
              PERSONALIZE
            </button>
            <button
              className="w-full py-3 text-xs text-white bg-blue hover:bg-dblue rounded-md font-medium z-10"
              onClick={() => navigate('/appeals')}
            >
              LOG IN
            </button>
          </div>
        )}
      </div>
      <div className="bg-white py-3 flex justify-center">
        <button
          className="lg:w-auto w-4/5 border-2 border-gray-200 text-gray-400 hover:bg-dgray hover:text-white hover:border-dgray py-2 px-3 font-semibold text-sm rounded-lg mt-2 z-10"
          onClick={() => navigate(`/campaign/${campaignId}/edit`)}
        >
          EDIT YOUR PAGE
        </button>
      </div>
      <div className="bg-gray lg:px-20 container mx-auto px-4 pt-8 lg:pb-20 pb-8 flex lg:flex-row flex-col gap-4">
        <div className="lg:w-2/3 w-full page-section">
          <div className="bg-white rounded-t-xl w-full">
            <div className="lg:px-6 px-4 py-8 flex justify-between">
              <div className="flex flex-col">
                <p className="text-gray-600 mt-4 text-sm">
                  {campaign?.category?.name}
                </p>
                <h2 className="text-3xl text-black-50 font-bold">
                  {campaign?.title}
                </h2>
                <p className="mt-2 text-gray-600 text-mont text-xs">
                  fundraised by{' '}
                  <span className="text-blue font-semibold">
                    <i className="fa-regular fa-circle-user"></i>{' '}
                    {campaign?.user?.first_name +
                      ' ' +
                      campaign?.user?.last_name}
                  </span>
                </p>
              </div>
              <AppealTagBadge appealTags={campaign?.appeal_tags} />
            </div>
            <div className="w-full bg-gray-dark lg:h-96 h-56 flex justify-center items-center relative">
              <img
                className={
                  campaign?.cover_image ? 'w-full h-full opacity-80' : 'w-6'
                }
                src={
                  campaign?.cover_image
                    ? `${SERVER_URL + campaign.cover_image}`
                    : 'images/icons/dashboard/icon_image.svg'
                }
                alt=""
              />
            </div>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">Story</h2>
              <p className="text-gray-600 mt-4">{campaign?.story}</p>
            </div>
          </div>
          <div className="bg-white w-full rounded-b-xl">
            <div className="lg:px-6 px-4 py-8">
              <h2 className="text-lg text-black-50 font-bold">About</h2>
              <p className="text-gray-600 mt-4">{campaign?.description}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <div className="rounded-xl bg-white">
            <div className="w-full h-auto p-6">
              <div className="w-full flex justify-between items-start">
                <div className="flex flex-col">
                  <h1 className="text-black-50 text-3xl text-mont font-bold">
                    {currencyFormatter(campaign?.raised_amount)}
                  </h1>
                  <p className="text-gray-600 lg:text-base text-xs">
                    raised of{' '}
                    <span className="text-blue font-semibold">
                      {' '}
                      {currencyFormatter(campaign?.targeted_amount)}
                    </span>{' '}
                    target
                  </p>
                </div>
                <CircularProgressBar
                  percentage={Math.round(
                    (campaign?.raised_amount / campaign?.targeted_amount || 0) *
                      100
                  )}
                  style={{
                    width: '4rem',
                    height: '4rem',
                    fontSize: '0.9rem',
                  }}
                />
              </div>
              <div className="mt-6 w-full flex justify-between items-center">
                <p className="mt-2 text-gray-600 text-mont text-xs">
                  fundraised by{' '}
                  <span className="text-nblue font-semibold">
                    <i className="fa-regular fa-circle-user"></i>{' '}
                    {campaign?.user?.first_name +
                      ' ' +
                      campaign?.user?.last_name}
                  </span>
                </p>
                {campaign?.end_at && (
                  <p className="text-mont text-xs text-red-400 font-semibold flex items-center gap-2">
                    <svg
                      className="w-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.547"
                      height="21.222"
                      viewBox="0 0 18.547 21.222"
                    >
                      <g id="icon_stopwatch" transform="translate(0.75 0.75)">
                        <g
                          id="Group_4211"
                          data-name="Group 4211"
                          transform="translate(-0.637 -0.637)"
                        >
                          <circle
                            id="Ellipse_1778"
                            data-name="Ellipse 1778"
                            cx="8.49"
                            cy="8.49"
                            r="8.49"
                            transform="translate(0.637 3.38)"
                            fill="none"
                            stroke="#fd4949"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1320"
                            data-name="Line 1320"
                            x2="6.313"
                            transform="translate(5.97 0.637)"
                            fill="none"
                            stroke="#fd4949"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1321"
                            data-name="Line 1321"
                            y1="1.264"
                            x2="1.44"
                            transform="translate(15.936 5.47)"
                            fill="none"
                            stroke="#fd4949"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1322"
                            data-name="Line 1322"
                            y2="2.382"
                            transform="translate(9.126 0.637)"
                            fill="none"
                            stroke="#fd4949"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1323"
                            data-name="Line 1323"
                            y2="5.044"
                            transform="translate(9.126 8.203)"
                            fill="none"
                            stroke="#fd4949"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                          />
                        </g>
                      </g>
                    </svg>
                    Ends in{' '}
                    {Math.abs(dayjs(campaign.end_at).diff(dayjs(), 'day'))} days
                  </p>
                )}
              </div>
              <button className="w-full h-auto bg-green hover:bg-mgreen mt-4 py-4 rounded-lg text-center">
                <p className="text-sm text-mont text-black-50 font-bold">
                  DONATE
                </p>
              </button>
              <button
                onClick={() => setshowShareModal(true)}
                className="w-full border-2 border-lgray text-gray-400 hover:bg-lgray hover:text-white py-4 px-3 font-semibold text-sm rounded-lg mt-2 z-10"
              >
                <i className="mr-1 fa-sharp fa-solid fa-share-nodes text-sm"></i>{' '}
                SHARE
              </button>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter2 active="view" title={campaign?.title} />
      {showShareModal ? (
        <ShareModal
          showModal={showShareModal}
          setshowModal={setshowShareModal}
        />
      ) : null}
    </div>
  );
};

export default PageView;
