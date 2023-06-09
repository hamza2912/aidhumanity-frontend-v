import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import DashboardFooter from '../../components/DashboardFooter';
import Switch from '../../components/switch/switch';
import { isMobile } from 'react-device-detect';
import withAuth from '../../AuthRoute';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../../services/user';
import { addUser } from '../../redux/auth/userSlice';
import { toast } from 'react-toastify';

const Preferences = () => {
  const { user } = useSelector(state => state.session);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    emailMarketing: false,
    emailUpdateForParticipation: false,
    emailUpdateOfCampaign: false,
  });

  useEffect(() => {
    if (user) {
      const {
        email_marketing,
        email_updates_of_participation,
        email_updates_of_campaigns,
      } = user;
      setState({
        ...state,
        emailMarketing: email_marketing,
        emailUpdateForParticipation: email_updates_of_participation,
        emailUpdateOfCampaign: email_updates_of_campaigns,
      });
    }
  }, [user]);

  const onChange = ({ target }) => {
    const { name, checked } = target;
    setState({ ...state, [name]: checked });
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      const { data } = await userService.setUserPreferences({
        user: {
          email_marketing: emailMarketing,
          email_updates_of_campaigns: emailUpdateOfCampaign,
          email_updates_of_participation: emailUpdateForParticipation,
        },
      });
      dispatch(addUser(data));
      toast.success('Preferences updated successfully');
    } catch (er) {
      toast.error('Unable to Save the Changes');
    } finally {
      setLoading(false);
    }
  };

  const { emailMarketing, emailUpdateForParticipation, emailUpdateOfCampaign } =
    state;
    let data = userService.getUser;
    console.log('data in preferences.js:', data)
    userService.getUser()
  .then(data => {
    // Handle the retrieved data
    console.log('Retrieved data:', data.badge);
  })
  .catch(error => {
    // Handle any errors that occurred during the API request
    console.error(error);
  });
  return (
    <div className="flex w-full h-full min-h-screen">
      <Sidebar active="prefer" />
      <section className="flex w-full relative pt-20 lg:pt-0">
        <div className="w-dashboard bg-gray pb-20">
          <div className="flex items-center sm:py-5 pt-7 pb-5 lg:px-12 px-4 sm:border-b-2 h-20">
            <h1 className="text-xl font-bold">Preferences</h1>
          </div>
          <div className="sm:my-8 mb-8 lg:px-12 px-4">
            <div className="bg-white rounded-t-xl w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2">
                <h2 className="text-lg text-black-50 font-bold">
                  Aid Humanity communication
                </h2>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-gray-600 lg:text-base text-sm lg:w-full w-3/5">
                    Email marketing about other ways to give and fundraise
                  </p>
                  <div className="flex items-center gap-2 my-4">
                    <Switch
                      type="dashboard"
                      onChange={onChange}
                      value={emailMarketing}
                      name="emailMarketing"
                    />
                    <p className="font-medium">
                      {emailMarketing ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 lg:text-base text-sm lg:w-full w-3/5">
                    Email updates related to pages you donate to
                  </p>
                  <div className="flex items-center gap-2 my-4">
                    <Switch
                      type="dashboard"
                      onChange={onChange}
                      value={emailUpdateForParticipation}
                      name="emailUpdateForParticipation"
                    />
                    <p className="font-medium">
                      {emailUpdateForParticipation ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 lg:text-base text-sm lg:w-full w-3/5">
                    Email updates realted to pages you create
                  </p>
                  <div className="flex items-center gap-2 my-4">
                    <Switch
                      type="dashboard"
                      onChange={onChange}
                      value={emailUpdateOfCampaign}
                      name="emailUpdateOfCampaign"
                    />
                    <p className="font-medium">
                      {emailUpdateOfCampaign ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2">
                <h2 className="text-lg text-black-50 font-bold">
                  Third-party app and website permissions
                </h2>
                <p className="text-gray-600 mt-4">
                  Please see our{' '}
                  <span className="text-blue font-semibold">permissions</span>{' '}
                  page to update your third-party app and website permissions.
                </p>
              </div>
            </div>
            <div className="bg-white w-full">
              <div className="lg:px-6 px-4 py-8 border-b-2">
                <h2 className="text-lg text-black-50 font-bold">
                  Communication from charities
                </h2>
                <p className="text-gray-600 mt-4">
                  If you opted in to hear from a charity when you donated on
                  JustGiving, you’ll need to get in touch with the charity
                  directly to update your preferences.
                </p>
                <p className="text-gray-600 mt-4">
                  Please see our{' '}
                  <span className="text-blue font-semibold">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="text-blue font-semibold">
                    Privacy policy
                  </span>
                  .
                </p>
                <button
                  className="lg:relative fixed px-16 py-6 lg:w-fit w-full bottom-0 left-0 bg-green hover:bg-dgreen text-black hover:text-white font-bold text-sm lg:rounded-lg uppercase mt-8 z-[9]"
                  onClick={handleClick}
                >
                  {loading ? 'Saving Changes ...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
          <div className='hidden sm:flex'>
            <DashboardFooter />
          </div>
        </div>
        {!isMobile ? <Appeal /> : null}
      </section>
    </div>
  );
};

export default withAuth(Preferences);
