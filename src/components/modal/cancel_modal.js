import React from 'react';


function Cancel_modal({showModal, setshowModal}) {

  

  return (
      
    <>
      <div className='dimmer'></div>
      <div className='messageBox lg:w-1/3 w-11/12 bg-white rounded-2xl shadow-2xl relative overflow-hidden'>
          <div className='w-full lg:py-6 py-4 lg:px-10 px-6 flex justify-between items-center border-b-2 border-gray-400'>
            <h1 className='font-bold lg:text-2xl text-xl text-black-50'>Cancel page</h1>
            <button onClick={()=>setshowModal(false)} className='z-10'><img src="images/icons/icon_times-circle.svg" alt="Close Icon" /></button>
          </div>
          <div className='lg:px-6 px-4 lg:py-8 py-6'>
            <p className='text-gray-400'>Your are about to cancel the page “Water Hands Pumps”</p>
            <div className='w-full flex lg:flex-row flex-col gap-4 mt-8'>
              <button className="w-full border-2 border-gray-200 text-gray-400 py-4 px-3 font-semibold text-sm rounded-lg z-10">NO, KEEP MY PAGE</button>
              <button class="w-full h-auto bg-green py-4 rounded-lg text-center">
                <p class="text-sm text-mont text-lblack font-bold">YES, CANCEL MY PAGE</p>
              </button>
            </div>
          </div>
      </div>
    </>

  );

}
  
export default Cancel_modal;
