
import React from 'react';
import Dashboard_header from "../Dashboard/dashboard_header";
import Dashboard_footer2 from "../../components/dashboard_footer2";
import Cancel_modal from '../../components/modal/cancel_modal';

function Page_settings() {

  const [showShareModal, setshowShareModal] = React.useState(false);


    return (

      <div>
        <Dashboard_header />
        <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8">
          <div className='lg:w-3/5 w-full page-section mx-auto'>
            <h1 className='text-blue font-bold text-2xl lg:my-6 my-4 pl-6'>Settings</h1>
            <div className='bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl'>
                <h2 className='text-lg text-black-50 font-bold'>Extend your page</h2>
            </div>
              <div className='bg-white lg:px-6 px-4 py-8 border-b-2'>
                <p className='text-gray-600 mt-4'>Your page will stop taking donations on <span className='font-semibold'>08 March 2023</span></p>
                <div className='relative mt-8'>
                  <input name="" id="" className='w-full py-3 pl-12 pr-4 rounded-md text-gray-400 font-medium border border-gray-400 focus:outline-none z-10' placeholder='04/08/2023' type='date' />
                  <img className='w-7 absolute left-3 top-3' src="images/icons/dashboard/icon_calendar-clock.svg" alt="" />
                </div>
            </div>
            <div className='bg-white w-full border-b-2'>
              <div className='lg:px-6 px-4 py-8'>
                <h2 className='text-lg text-black-50 font-bold'>Thank you message</h2>
                <p className='text-gray-600 mt-4'>Its really good idea to personalize the thank you message, which is sent automatically to anyone who makes a donation through your Aid Humanity page.</p>
                <img className='w-32 mx-auto mt-8' src="images/icons/dashboard/QR.png" alt="" />
              </div>
            </div>
            <div className='bg-white w-full border-b-2'>
              <div className='lg:px-6 px-4 py-8'>
                <h2 className='text-lg text-black-50 font-bold'>Send a QR code</h2>
                <p className='text-gray-600 mt-4'>Here’s your very own QR code to help your supporters find your page more easily. Just open up the camera on your smart phone and point it at this screen and it’ll take you directly to the page. You can either save, screenshot, print posters, and send your QR code with family and friends on WhatsApp, text or email. It couldn’t be easier.</p>
                <textarea name="" id="" cols="30" rows="10" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-4'></textarea>
              </div>
            </div>
            <div className='bg-white w-full rounded-b-xl'>
              <div className='lg:px-6 px-4 py-8'>
                <h2 className='text-lg text-black-50 font-bold'>Cancel page</h2>
                <p className='text-gray-600 mt-4'>Canceling your page is inreveraible and means:</p>
                <ul className='text-gray-600 mt-4 list-disc pl-4'>
                  <li>You won’t be able to collect any more online donations through this page</li>
                  <li>You won’t be able to see this page</li>
                </ul>
                <p className='text-gray-600 mt-4'>Any donations already received on the fundraising page will be automatically paid to the charity you have selected. You do not need to do anything else.</p>
                <button  onClick={()=>setshowShareModal(true)} className="lg:relative fixed left-0 bottom-12 lg:bottom-0 w-full lg:w-auto py-4 px-12 bg-red-500 text-white font-semibold text-sm lg:rounded-lg uppercase mt-8">Cancel my humantiy page</button>         
              </div>
            </div>
          </div>
        </div>
        <Dashboard_footer2 active="settings" />
        { showShareModal ? <Cancel_modal showModal={showShareModal} setshowModal={setshowShareModal} /> : null }
      </div>      

    );
}

export default Page_settings;