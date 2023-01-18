import React from "react";
import {isMobile} from 'react-device-detect';
// import { useHistory } from 'react-router-dom';


function Dashboard_header() {

    return(
        <header class="w-full h-auto top-0 left-0 container mx-auto lg:px-20 px-4 py-3 relative">
            <nav class="w-full h-auto px-4">
                <div class="w-full h-auto py-4 flex flex-row justify-between items-center">
                    <div class="text-lg text-mont text-black-50 font-medium w-auto h-auto flex lg:flex-row flex-row-reverse gap-6 items-center">
                        <a href=""><img className="w-36" src="images/logo/logo_aid-humanity.svg" alt="" /></a>
                        <img className="w-4 cursor-pointer" src="images/icons/dashboard/icon_bars.svg" alt="" />
                        <button className="py-2 px-3 bg-blue-dark text-white font-semibold text-sm rounded-lg hidden lg:block">+ NEW APPEAL</button>
                    </div>
                    <div class="w-auto gap-4 flex justify-between items-center pl-16">
                        <button class="text-sm text-mont text-gray font-semibold hidden lg:block">En <i class="fa-solid fa-angle-down"></i></button>
                        <p class="text-sm text-mont text-gray font-semibold hidden lg:block">|</p>
                        <img className="w-5" src="images/icons/dashboard/icon_plus-cirle.svg" alt="" />
                        <a class="text-mont text-black-50 font-semibold" href=""><i class="fa-regular fa-circle-user text-xl"></i></a>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Dashboard_header;
