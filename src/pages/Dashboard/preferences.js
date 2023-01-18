import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/dashboard_footer';
import Switch from '../../components/switch/switch';
import {isMobile} from 'react-device-detect';


function Preferences() {

  

  return (
      
    <div className='flex w-full h-full min-h-screen'>
      <Sidebar active="prefer" />
      <section className='flex w-full relative pt-20 lg:pt-0'>
        <div className='w-dashboard bg-gray pb-20'>
          <div className='flex items-center py-5 lg:px-12 px-4 border-b-2 h-20'>
            <h1 className='text-xl font-bold'>Preferences</h1>
          </div>
          <div className='my-8 lg:px-12 px-4'>
            <div className='bg-white rounded-t-xl w-full'>
              <div className='lg:px-6 px-4 py-8 border-b-2'>
                <h2 className='text-lg text-black-50 font-bold'>Aid Humanity communication</h2>
                <div className='flex justify-between items-center mt-4'>
                  <p className='text-gray-600 lg:text-base text-sm lg:w-full w-3/5'>Email marketing about other ways to give and fundraise</p>
                  <div className='flex items-center gap-2 my-4'>
                    <Switch type="dashboard" />
                    <p className='font-medium'>Enabled</p>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-600 lg:text-base text-sm lg:w-full w-3/5'>Email updates related to pages you donate to</p>
                  <div className='flex items-center gap-2 my-4'>
                    <Switch type="dashboard" />
                    <p className='font-medium'>Enabled</p>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-600 lg:text-base text-sm lg:w-full w-3/5'>Email updates realted to pages you create</p>
                  <div className='flex items-center gap-2 my-4'>
                    <Switch type="dashboard" />
                    <p className='font-medium'>Enabled</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white w-full'>
              <div className='lg:px-6 px-4 py-8 border-b-2'>
                <h2 className='text-lg text-black-50 font-bold'>Third-party app and website permissions</h2>
                <p className='text-gray-600 mt-4'>Please see our <span className='text-blue font-semibold'>permissions</span> page to update your third-party app and website permissions.</p>
              </div>
            </div>
            <div className='bg-white w-full'>
              <div className='lg:px-6 px-4 py-8 border-b-2'>
                <h2 className='text-lg text-black-50 font-bold'>Communication from charities</h2>
                <p className='text-gray-600 mt-4'>If you opted in to hear from a charity when you donated on JustGiving, you’ll need to get in touch with the charity directly to update your preferences.</p>
                <p className='text-gray-600 mt-4'>Please see our <span className='text-blue font-semibold'>Terms of Service</span> and <span className='text-blue font-semibold'>Privacy policy</span>.</p>
                <button className="lg:relative fixed py-4 lg:w-1/4 w-full bottom-0 left-0 bg-green text-black font-bold text-sm lg:rounded-lg uppercase mt-8 z-10">Save Changes</button>
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
  
export default Preferences;
