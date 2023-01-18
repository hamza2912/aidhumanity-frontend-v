import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Switch from '../../components/switch/switch';

function Contact() {

  return (
      
    <>
    <Header />

    <main>
            <div class="w-full h-auto py-8 bg-bwhite">
                <h1 class="text-3xl text-mont text-black-50 font-bold flex items-center justify-center">Contact</h1>
            </div>
            <section class="w-full h-auto mt-12">
                <div class="w-full h-auto lg:px-20 px-4 container mx-auto lg:flex hidden gap-2">
                    <a class="text-base text-mont text-gray" href="">Home</a>
                    <p class="text-base text-mont text-gray">/</p>
                    <a class="text-base text-mont text-gray" href="">Contact</a>
                </div>
                <div class="w-full h-auto p-5 container mx-auto lg:p-0 flex lg:flex-row flex-col items-center lg:items-start lg:justify-between justify-center lg:py-16 py-0 mt-2">
                    <div class="w-full lg:w-1/2 h-auto lg:pl-20 pl-0 relative">
                        <h1 class="text-black-50 lg:text-start lg:text-4xl text-3xl text-mont font-bold">Contact</h1>
                        <h3 class="text-2xl text-mont text-black-50 font-bold mt-8">Got a question?</h3>
                        <p class="text-xl text-mont text-gray-600 mt-8">Aid Humanity is a thoughtful, caring community of like-minded individuals ready to give back and make a difference. If you’d like to know more about what we do, or have a question about how you can help, all you have to do is ask.</p>
                        <div class="w-full h-auto flex lg:flex-row flex-col lg:justify-between border-t border-b border-gray-200  py-12 mt-16">
                            <div class="w-1/2 h-auto flex flex-col">
                                <div class="w-full h-auto">
                                    <p class="text-dgray text-mont text-xs font-semibold"><i class="fa-solid fa-phone-volume"></i> PHONE</p>
                                </div>
                                <div class="w-full h-auto pl-4">
                                    <h1 class="text-black-50 text-mont text-2xl font-bold">03300579957</h1>
                                </div>
                            </div>
                            <div class="w-1/2 h-auto flex flex-col mt-4 lg:mt-0">
                                <div class="w-full h-auto">
                                    <p class="text-dgray text-mont text-xs font-semibold"><i class="fa-regular fa-envelope-open"></i> EMAIL</p>
                                </div>
                                <div class="w-full h-auto pl-4">
                                    <h1 class="text-black-50 text-mont text-2xl font-bold">info@aidhumanity.co.uk</h1>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl text-mont text-black-50 font-bold mt-8">Company Details</h3>
                        <p class="text-xl text-mont text-gray-600 mt-8">Aid Humanity, Unit 9, Twelve o’clock Court, Sheffield, S4 7WW</p>
                        <img class="absolute lg:flex hidden top-0 bottom-0 my-auto -left-10" src="./Icons/Ellipse 1804.svg" alt="Ellipse 1804" />
                        <img class="absolute lg:flex hidden -bottom-24 left-16" src="./Icons/Ellipse 1802.svg" alt="Ellipse 1802" />
                    </div>
                    <div class="w-full lg:w-1/2 lg:p-8 p-2 h-auto flex justify-center relative my-10 lg:my-0">
                        <img class="absolute right-0 top-8" src="./Icons/Ellipse 1793.svg" alt="Ellipse 1793" />
                        <div class="lg:w-4/5 w-full h-auto z-10 lg:px-10 px-4 py-8 bg-white rounded-2xl shadow-lg relative">
                            <img className='absolute top-0 left-0 px-1' src="./Icons/shape_mega-menu-horizontal-medium.svg" alt="shape_mega-menu-horizontal" />
                            <h1 class="text-black-50 text-mont text-3xl font-bold">Contact Form</h1>
                            <form class="w-full h-auto mt-6" action="">
                                <div class="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4" action="">
                                    <label class="text-mont text-dgray text-xs font-semibold" for="First Name">Full Name</label>
                                    <input class="text-mont text-sm text-black-50 font-semibold focus:outline-none" type="text" value="James" />
                                </div>
                                <div class="w-full h-auto border border-lgray rounded-lg flex flex-col p-2 mt-4" action="">
                                    <label class="text-mont text-dgray text-xs font-semibold" for="First Name">Email</label>
                                    <input class="text-mont text-sm text-black-50 font-semibold focus:outline-none" type="text" value="James" />
                                </div>
                                <input class="w-full h-auto focus:outline-none border rounded-lg border-lgray p-2 mt-4" type="text" placeholder="Phone *" />
                                <input class="w-full h-auto focus:outline-none border rounded-lg border-lgray p-2 mt-4" type="text" placeholder="Subject *" />
                                <textarea class="w-full h-auto focus:outline-none border rounded-lg border-lgray p-2 mt-4" name="" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </form>
                            <p class="flex justify-end mt-2 text-black-50 text-sm font-medium text-mont">0/999</p>
                            <div className='flex items-center gap-2'>
                                <Switch type='dashboard' />
                                <p class="text-black-50 text-mont lg:text-xs text-vs font-medium flex">I agree to <a class="font-semibold text-blue mx-1" href="">Terms & Conditions</a> and <a class="font-semibold text-blue mx-1" href="">Privacy Policy</a></p>
                            </div>
                            <button class="w-full h-auto bg-sblue rounded-lg text-white text-xs text-mont font-bold py-4 mt-4">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    <Footer />

    </>

  );

}
  
export default Contact;
