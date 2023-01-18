
import React from 'react';

function Appeal_slider() {
    const [showbadge, setshowbadge] = React.useState(false);

  return (

    <div class="owl-carousel owl-carousel-1 owl-theme w-full h-auto flex items-center justify-around bg-transparent z-10">
    <div class="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
        <div className='relative'>
            <img className='rounded-t-xl' src="./images/36404f884e19.png" alt="carousel_image_1" />
            <div className='w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60'>
                <p className='text-gray-400 font-medium'>Water for All </p>
            </div>
        </div>
        <div class="px-10 pt-8 pb-6">
            <div class="lg:h-36 h-auto">
                <h2 class="text-xl font-bold text-mont text-black-50">Water Hands Pumps</h2>
                <p class="lg:text-base text-sm text-mont text-gray-600 mt-2">Every single day, women around the world have to walk miles to collect water for their household. Installing a hand pump brings this basic human right closer to home.</p>
            </div>
            <div class="flex flex-row items-center mt-4 h-12">
                <div class="w-1/5 mr-4">
                    <img src="./Icons/loader-medium.svg" alt="loader-medium" />
                </div>
                <div class="w-2/3 flex flex-col">
                    <span class="text-sm text-mont text-blue font-bold">Raised: £243</span>
                    <span class="text-xs text-mont text-gray-600 font-bold mt-1">by <i class="fa-regular fa-circle-user"></i> 12 supporters</span>
                </div>
                <div class="w-1/3 flex flex-col items-end">
                    <span class="text-xs text-mont text-green font-semibold">Goal: £870</span>
                    <div class="w-5 mt-1">
                        <img src="./Icons/badge_zakat.svg" alt="badge_zakat" />
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
                <a class="text-mont text-nblue font-bold text-xs" href="">Read More</a>
                <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">DONATE NOW</button>
            </div>
        </div>
    </div>
    <div class="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
        <div className='relative'>
            <img className='rounded-t-xl' src="./images/rf1110721-somali-refugee-family-in-yemen-1200x800-images.png" alt="carousel_image_2" />
            <div className='w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60'>
                <p className='text-gray-400 font-medium'>Water for All </p>
            </div>
        </div>
        <div class="px-10 pt-8 pb-6">
            <div class="lg:h-36 h-auto">
                <h2 class="text-xl font-bold text-mont text-black-50">Yemen Emergency</h2>
                <p class="lg:text-base text-sm text-mont text-gray-600 mt-2">More than 1,500 people killed and 2 million homes partially or completely destroyed following the Yemen Floods of 2022.</p>
            </div>
            <div class="flex flex-row items-center mt-4 h-12 relative">
                <div class="w-1/5 mr-4">
                    <img src="./Icons/loader-large.svg" alt="loader-large" />
                </div>
                <div class="w-2/3 flex flex-col">
                    <span class="text-sm text-mont text-blue font-bold">Raised: £934</span>
                    <span class="text-xs text-mont text-gray-600 font-bold mt-1">by <i class="fa-regular fa-circle-user"></i> 34 supporters</span>
                </div>
                <div class="w-1/3 flex flex-col items-end">
                    <span class="text-xs text-mont text-green font-semibold">Goal: £984</span>
                    <div class="w-5 mt-1" onMouseEnter={()=>{setshowbadge(true)}} onMouseLeave={()=>{setshowbadge(false)}}>
                        <img src="./Icons/badge_sadhaka-jaraiyah.svg" alt="badge_sadhaka-jaraiyah" />
                    </div>
                </div>
                {showbadge ? <div className='w-3/5 bg-white rounded-xl pl-8 pr-5 py-4 shadow-lg absolute -top-20 -right-16'>
                    <p className='text-sm text-gray-600'>This appeal is Sadaka Jaraiya applicable.</p>
                </div>:null}
            </div>
            <div class="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
                <a class="text-mont text-nblue font-bold text-xs" href="">Read More</a>
                <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">DONATE NOW</button>
            </div>
        </div>
    </div>
    <div class="item h-auto rounded-b-2xl rounded-t-xl py-2 shadow-lg">
        <div className='relative'>
            <img className='rounded-t-xl' src="./images/Untitled-design-44.png" alt="carousel_image_3" />
            <div className='w-auto bg-black absolute right-5 top-5 px-4 py-2 rounded-xl bg-opacity-60'>
                <p className='text-gray-400 font-medium'>Hunger Appeal</p>
            </div>
        </div>
        <div class="px-10 pt-8 pb-6">
            <div class="lg:h-36 h-auto">
                <h2 class="text-xl font-bold text-mont text-black-50">Feed a Child</h2>
                <p class="lg:text-base text-sm text-mont text-gray-600 mt-2">Feed a Child campaign provides hot, nutritious meals in schools. We ensure that children are nourished, helping boost attention and energy, and tackling hunger</p>
            </div>
            <div class="text-center text-xs text-white p-4 bg-gray-mate rounded-lg mt-4 h-12">
                <p>No donation yet, bet the first!</p>
            </div>
            <div class="flex justify-between items-center mt-10 pt-4 border-t border-gray-200">
                <a class="text-mont text-nblue font-bold text-xs" href="">Read More</a>
                <button class="text-xs font-bold text-white bg-blue rounded-lg px-4 py-3">DONATE NOW</button>
            </div>
        </div>
    </div>
    </div>      

    );
  }

export default Appeal_slider;