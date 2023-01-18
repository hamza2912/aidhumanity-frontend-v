import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/dashboard_footer';
import {isMobile} from 'react-device-detect';


function Profile() {

  

  return (
      
    <div className='flex w-full h-full min-h-screen'>
      <Sidebar active="profile" />
      <section className='flex w-full relative pt-20 lg:pt-0'>
        <div className='w-dashboard bg-gray pb-20'>
          <div className='flex items-center py-5 lg:px-12 px-4 border-b-2 h-20'>
            <h1 className='text-xl font-bold'>Profile</h1>
          </div>
          <div className='my-8 lg:px-12 px-4'>
            <div className='bg-white rounded-t-xl w-full'>
              <div className='lg:px-6 px-4 py-8 border-b-2'>
                <h2 className='text-lg text-black-50 font-bold'>Info</h2>
                <div className='flex lg:flex-row flex-col lg:gap-6 gap-4 mt-5'>
                  <div className='flex'>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                      <label className='font-medium' for="html">Mr</label>
                  </div>
                  <div className='flex'>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                      <label className='font-medium' for="html">Mrs</label>
                  </div>
                  <div className='flex'>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                      <label className='font-medium' for="html">Miss</label>
                  </div>
                  <div className='flex'>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                      <label className='font-medium' for="html">Ms</label>
                  </div>
                  <div className='flex'>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                      <label className='font-medium' for="html">Other</label>
                  </div>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 mt-4'>
                  <div className='relative'>
                    <input id="first_name" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="first_name">First Name</label>
                  </div>
                  <div className='relative'>
                    <input id="first_name" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="first_name">Last Name</label>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white w-full'>
              <div className='lg:px-6 px-4 py-8 border-b-2'>
                <h2 className='text-lg text-black-50 font-bold'>Email</h2>
                    <input id="first_name" className='w-full p-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-6' type="email" placeholder='Email' />
              </div>
            </div>
            <div className='bg-white w-full rounded-b-xl'>
              <div className='lg:px-6 px-4 py-8 '>
                <h2 className='text-lg text-black-50 font-bold'>Address</h2>
                    <select id="first_name" className='w-full p-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-6' type="email" >
                      <option value="">United Kingdom</option>
                    </select>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-4'>
                      <div className='relative'>
                        <input id="first_name" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                        <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="first_name">Address Line 1</label>
                      </div>
                      <div className='relative'>
                        <input id="first_name" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                        <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="first_name">Address Line 2</label>
                      </div>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 mt-4'>
                      <div className='relative lg:col-span-2'>
                        <input id="first_name" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                        <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="first_name">Town</label>
                      </div>
                      <div className='relative'>
                        <input id="first_name" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                        <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="first_name">Zip/Postal</label>
                      </div>
                    </div>
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
  
export default Profile;
