
import React from 'react';
import Dashboard_header from "../Dashboard/dashboard_header";
import Dashboard_footer2 from "../../components/dashboard_footer2";

function Page_edit() {

  const [showShareModal, setshowShareModal] = React.useState(false);


    return (

      <div>
        <Dashboard_header />
        <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8">
          <div className='lg:w-3/5 w-full page-section mx-auto'>
            <h1 className='text-blue font-bold text-2xl lg:my-6 my-4 pl-6'>Edit Page</h1>
            <div className='bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl'>
                <h2 className='text-lg text-black-50 font-bold'>Info</h2>
            </div>
              <div className='bg-white lg:px-6 px-4 py-8 border-b-2'>
                  <div className='relative'>
                    <input id="title" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="text" />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="text">Page title</label>
                  </div>
                  <div className='relative mt-6'>
                    <input id="category" type='text' className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="category">Category</label>
                  </div>
                  <div className='relative mt-6'>
                    <input id="fund" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type='number' />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="new_password">Fundraising target</label>
                  </div>
                  <div className='relative mt-6'>
                    <input id="category" type='text' className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="category">Page Summary</label>
                  </div>
            </div>
            <div className='bg-white w-full border-b-2'>
              <div className='lg:px-6 px-4 py-8'>
                <h2 className='text-lg text-black-50 font-bold'>Story</h2>
                <textarea name="" id="" cols="30" rows="10" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-4'></textarea>
                <button className="lg:relative fixed left-0 lg:bottom-0 bottom-12 py-4 lg:w-1/4 w-full bg-green text-black font-bold text-sm lg:rounded-lg uppercase mt-8">Save Changes</button>         
              </div>
            </div>
          </div>
        </div>
        <Dashboard_footer2 active="edit" />
      </div>      

    );
}

export default Page_edit;