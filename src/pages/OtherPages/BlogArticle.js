import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/header';

const BlogArticle = () => {
  return (
    <>
      <Header />

      <main>
        <section class="w-full h-auto container mx-auto px-5 lg:py-16 py-4">
          <div class="w-full flex justify-between items-center">
            <div class="h-auto lg:flex hidden gap-2">
              <a class="text-base text-mont text-gray" href="">
                Home
              </a>
              <p class="text-base text-mont text-gray">/</p>
              <a class="text-base text-mont text-gray" href="">
                Blog
              </a>
              <p class="text-base text-mont text-gray">/</p>
              <a class="text-base text-mont text-gray" href="">
                Donec turpis eros, euismod nec justo sit amet
              </a>
            </div>
            <a class="text-mont text-xs text-gray font-bold flex" href="">
              BACK TO ALL ARTICLES{' '}
              <img
                class="ml-3"
                src="./Icons/arrow-left-blue.svg"
                alt="arrow-left"
              />
            </a>
          </div>
          <div class="w-full h-auto text-center flex flex-col justify-center items-center mt-10">
            <div class="w-full h-auto flex justify-center items-center">
              <img src="./Icons/icon_clock.svg" alt="icon_clock" />
              <p class="text-mont text-gray text-xs ml-2">July 3, 2022</p>
              <p class="text-mont text-gray text-xs ml-2">.</p>
              <p class="text-mont text-gray text-xs ml-2">5 minutes to read</p>
            </div>
            <h1 class="text-4xl text-mont text-black-50 font-bold mt-4">
              Donec turpis eros, euismod nec justo sit amet
            </h1>
            <div class="lg:w-4/5 w-full h-auto flex justify-center items-center relative mt-6">
              <img
                class="rounded-2xl"
                src="./images/©-UNICEF_UNI235471_Willocq-1@2x.png"
                alt="©-UNICEF"
              />
              <div class="w-20 h-auto text-center absolute top-4 lg:left-4 left-0">
                <p class="text-base text-mont text-white font-bold px-4 py-2 bg-red">
                  NEW
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-4/5 w-full mx-auto h-auto flex lg:flex-row flex-col gap-6 mt-10">
            <div class="lg:w-2/3 pl-5 w-full h-auto relative">
              <div class="absolute top-0 -left-16 hidden w-full h-auto lg:flex flex-col gap-4">
                <div class="w-12 h-auto p-2 rounded-full bg-nblue text-center">
                  <a href="" class="text-lg text-white">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div class="w-12 h-auto p-2 rounded-full bg-nblue text-center">
                  <a href="" class="text-lg text-white">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div class="w-12 h-auto p-2 rounded-full bg-nblue text-center">
                  <a href="" class="text-lg text-white">
                    <i class="fa-regular fa-envelope-open"></i>
                  </a>
                </div>
              </div>
              <div class="lg:hidden w-full h-auto flex justify-center mb-6 gap-4">
                <div class="w-12 h-auto p-2 rounded-full bg-nblue text-center">
                  <a href="" class="text-lg text-white">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <div class="w-12 h-auto p-2 rounded-full bg-nblue text-center">
                  <a href="" class="text-lg text-white">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <div class="w-12 h-auto p-2 rounded-full bg-nblue text-center">
                  <a href="" class="text-lg text-white">
                    <i class="fa-regular fa-envelope-open"></i>
                  </a>
                </div>
              </div>
              <p class="text-mont text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Augue ut lectus arcu bibendum at. Non curabitur gravida arcu ac
                tortor dignissim convallis aenean.
              </p>
              <ul class="pl-6 mt-8">
                <li class="text-mont text-lg text-gray-600">
                  Ac turpis egestas integer eget. Sed ullamcorper morbi
                  tincidunt ornare massa eget egestas purus viverra.
                </li>
                <li class="text-mont text-lg text-gray-600">
                  Habitasse platea dictumst vestibulum rhoncus est pellentesque
                  elit ullamcorper dignissim.
                </li>
              </ul>
              <h3 class="text-mont text-lg text-gray-600 font-semibold mt-8">
                Ac turpis egestas integer eget
              </h3>
              <p class="text-mont text-lg text-gray-600">
                Nisi porta lorem mollis aliquam ut porttitor. Eget mi proin sed
                libero enim sed faucibus turpis. Etiam sit amet nisl purus.
                Aliquam ut porttitor leo a diam sollicitudin tempor id.
              </p>
              <p class="text-mont text-lg text-gray-600 mt-6">
                Laoreet id donec ultrices tincidunt arcu. Quis viverra nibh cras
                pulvinar mattis nunc sed blandit libero. Id venenatis a
                condimentum vitae sapien pellentesque. Pulvinar etiam non quam
                lacus suspendisse faucibus interdum. Id ornare arcu odio ut sem
                nulla pharetra diam sit. Leo a diam sollicitudin tempor id eu
                nisl nunc. Curabitur vitae nunc sed velit dignissim sodales ut.
                Facilisi morbi tempus iaculis urna id volutpat lacus. Ut eu sem
                integer vitae justo eget magna fermentum iaculis. Tellus
                elementum sagittis vitae et leo duis. Amet nulla facilisi morbi
                tempus. Consectetur adipiscing elit duis tristique sollicitudin
                nibh.
              </p>
            </div>
            <div class="w-full lg:w-1/3 h-auto">
              <h1 class="text-mont text-2xl text-blue font-bold">
                The most readable
              </h1>
              <div class="w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p class="text-xl text-mont text-l3gray">01</p>
                <div>
                  <h3 class="text-mont text-lg text-black-50 font-bold">
                    Mauris vel ornare massa, at ullamcorper ligula
                  </h3>
                  <p class="text-mont text-xs text-gray mt-3 mb-5">
                    <i class="mr-1 fa-regular fa-clock"></i> April 20, 2022 . 3
                    minutes to read
                  </p>
                </div>
              </div>
              <div class="w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p class="text-xl text-mont text-l3gray">02</p>
                <div>
                  <h3 class="text-mont text-lg text-black-50 font-bold">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </h3>
                  <p class="text-mont text-xs text-gray mt-3 mb-5">
                    <i class="mr-1 fa-regular fa-clock"></i> May 7, 2022 . 4
                    minutes to read
                  </p>
                </div>
              </div>
              <div class="w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p class="text-xl text-mont text-l3gray">03</p>
                <div>
                  <h3 class="text-mont text-lg text-black-50 font-bold">
                    Excepteur sint occaecat cupidatat non proident
                  </h3>
                  <p class="text-mont text-xs text-gray mt-3 mb-5">
                    <i class="mr-1 fa-regular fa-clock"></i> April 2, 2022 . 5
                    minutes to read
                  </p>
                </div>
              </div>
              <div class="w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p class="text-xl text-mont text-l3gray">04</p>
                <div>
                  <h3 class="text-mont text-lg text-black-50 font-bold">
                    Ut enim ad minim veniam, quistino
                  </h3>
                  <p class="text-mont text-xs text-gray mt-3 mb-5">
                    <i class="mr-1 fa-regular fa-clock"></i> February 20, 2022 .
                    2 minutes to read
                  </p>
                </div>
              </div>
              <div class="w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6">
                <p class="text-xl text-mont text-l3gray">05</p>
                <div>
                  <h3 class="text-mont text-lg text-black-50 font-bold">
                    Tristique nulla aliquet enim tortor at
                  </h3>
                  <p class="text-mont text-xs text-gray mt-3 mb-5">
                    <i class="mr-1 fa-regular fa-clock"></i> January 7, 2022 . 3
                    minutes to read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full h-auto px-5 lg:pt-10 lg:pb-16 py-4 container mx-auto">
          <div class="w-full h-auto p-4 text-center">
            <h1 class="text-mont text-3xl text-black-50 font-bold">
              Similar Articles
            </h1>
          </div>
          <div class="lg:w-4/5 w-full mx-auto h-auto mt-6 flex lg:flex-row flex-col gap-4">
            <div class="lg:w-1/4 w-full h-auto">
              <img
                className="rounded-xl w-full"
                src="./images/niger.png"
                alt="niger"
              />
              <div class="">
                <h2 class="mt-4 text-black-50 text-mont text-lg font-bold">
                  Mauris vel ornare massa, at ullamcorper ligula
                </h2>
                <p class="text-base tet-mont text-dgray mt-2 h-32">
                  Cras ullamcorper dolor ac viverra finibus. Fusce iaculis
                  accumsan ex, in placerat arcu luctus vitae. Fusce velit lacus,
                  hendrerit scelerisque efficitur eget, placerat eu lectus.
                </p>
                <div class="w-full h-auto flex items-center mt-2">
                  <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                  <p class="text-mont text-gray text-xs ml-2">April 20, 2022</p>
                  <p class="text-mont text-gray text-xs ml-2">.</p>
                  <p class="text-mont text-gray text-xs ml-2">
                    3 minutes to read
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 w-full h-auto">
              <img
                className="rounded-xl w-full"
                src="./images/UN0691098 (1)_0.png"
                alt="UN0691098 (1)_0"
              />
              <div class="">
                <h2 class="mt-4 text-black-50 text-mont text-lg font-bold">
                  Aenean ac iaculis urna, quis condimentum elit
                </h2>
                <p class="text-base tet-mont text-dgray mt-2 h-32">
                  Nullam eleifend faucibus mi, ac dapibus lectus interdum eu.
                  Suspendisse sed semper augue, nec pulvinar orci. Praesent
                  tincidunt purus condimentum efficitur fermentum.
                </p>
                <div class="w-full h-auto flex items-center mt-2">
                  <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                  <p class="text-mont text-gray text-xs ml-2">March 7, 2022</p>
                  <p class="text-mont text-gray text-xs ml-1">.</p>
                  <p class="text-mont text-gray text-xs ml-1">
                    4 minutes to read
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 w-full h-auto">
              <img
                className="rounded-xl w-full"
                src="./images/feature-article-Is-charity-work-right-for-me-838x484_2017-2.png"
                alt="feature-article"
              />
              <div class="">
                <h2 class="mt-4 text-black-50 text-mont text-lg font-bold">
                  Enim diam vulputate ut pharetra sit amet aliquam id
                </h2>
                <p class="text-base tet-mont text-dgray mt-2 h-32">
                  Fames ac turpis egestas maecenas pharetra convallis posuere
                  morbi leo. Volutpat odio facilisis mauris sit amet massa vitae
                  tortor condimentum.
                </p>
                <div class="w-full h-auto flex items-center mt-2">
                  <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                  <p class="text-mont text-gray text-xs ml-2">
                    January 3, 2022
                  </p>
                  <p class="text-mont text-gray text-xs ml-2">.</p>
                  <p class="text-mont text-gray text-xs ml-2">
                    5 minutes to read
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 w-full h-auto">
              <img
                className="rounded-xl w-full"
                src="./images/ZAF-BEC9590.png"
                alt="ZAF-BEC9590"
              />
              <div class="">
                <h2 class="mt-4 text-black-50 text-mont text-lg font-bold">
                  Nunc id cursus metus aliquam eleifend
                </h2>
                <p class="text-base tet-mont text-dgray mt-2 h-32">
                  Dui id ornare arcu odio ut sem nulla pharetra diam. Ligula
                  ullamcorper malesuada proin libero nunc. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum.
                </p>
                <div class="w-full h-auto flex items-center mt-2">
                  <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                  <p class="text-mont text-gray text-xs ml-2">
                    December 13, 2022
                  </p>
                  <p class="text-mont text-gray text-xs ml-1">.</p>
                  <p class="text-mont text-gray text-xs ml-1">
                    4 minutes to read
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogArticle;
