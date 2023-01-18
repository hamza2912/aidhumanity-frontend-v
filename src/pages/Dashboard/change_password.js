import React from 'react';
import Sidebar from '../../components/sidebar';
import Appeal from '../../components/appeal';
import Dashboard_footer from '../../components/dashboard_footer';
import Switch from '../../components/switch/switch';
import {isMobile} from 'react-device-detect';


function Change_password() {

  const [password_type, setpassword_type] = React.useState("password");

  function handlepassword(){
    if(password_type == 'password'){
      setpassword_type('text')
    } else{
      setpassword_type('password')
    }
  }
  

  return (
      
    <div className='flex w-full h-full min-h-screen'>
      <Sidebar active="security" />
      <section className='flex w-full relative pt-20 lg:pt-0'>
        <div className='w-dashboard bg-gray pb-20'>
          <div className='flex items-center py-5 lg:px-12 px-4 border-b-2 h-20'>
            <h1 className='text-xl font-bold'>Security</h1>
          </div>
          <div className='my-8 lg:px-12 px-4'>
            <div className='bg-white rounded-t-xl w-full'>
              <div className='lg:px-6 px-4 py-8 border-b-2'>
                <h2 className='text-lg text-black-50 font-bold'>Change password</h2>
                  <div className='relative mt-6'>
                    <input id="password" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type="password" />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="password">Current</label>
                  </div>
                  <div className='relative mt-6'>
                    <input id="new_password" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type={password_type} />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="new_password">New</label>
                    <p onClick={handlepassword} className='text-black-50 font-medium text-xs absolute right-3 top-5 cursor-pointer'>show</p>
                  </div>
                  <div className='flex flex-col gap-8 mt-5'>
                    <div className='flex'>
                        <img src="Icons/icon_check-circle.svg" alt="" />
                        <label className='font-medium' for="html">Must be at least 12 characters</label>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-6 h-5 mt-1 rounded-full border-2 border-gray-400'></div>
                        <label className='font-medium' for="html">Must include at least one number, a lower or upper case letter and a special character (#,$,%,&,@etc.)</label>
                    </div>
                    <div className='flex'>
                        <img src="Icons/icon_info-circle.svg" alt="" />
                        <label className='font-medium text-red-500' for="html">Must not be the same as the last 6 used passwords</label>
                    </div>
                    <div className='flex'>
                        <img src="Icons/icon_check-circle.svg" alt="" />
                        <label className='font-medium' for="html">Must not include your email or name</label>
                    </div>
                </div>
                <div className='relative mt-6'>
                    <input id="new_password" className='w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10' type={password_type} />
                    <label className='font-semibold text-gray-400 absolute top-2 left-3 text-xs' for="new_password">Retype New</label>
                    <p onClick={handlepassword} className='text-black-50 font-medium text-xs absolute right-3 top-5 cursor-pointer'>show</p>
                  </div>
              </div>
            </div>
            <div className='bg-white w-full rounded-b-xl'>
              <div className='lg:px-6 px-4 py-8'>
                <h2 className='text-lg text-black-50 font-bold'>Two-factor authentication</h2>
                  <p className='text-gray-600 mt-4'>An additional layer of security, using email address to generate a secret access code</p>
                  <div className='flex items-center gap-2 my-4'>
                    <Switch type="dashboard" />
                    <p className='font-medium'>Enabled</p>
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
  
export default Change_password;
