import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Blogs() {
  return (
    <>
      <Header />

      <main>
        <section className="w-full h-auto container mx-auto px-5 lg:py-16 py-4 ">
          <div className="w-full h-auto lg:flex hidden gap-2">
            <Link className="text-base text-mont text-gray" to="">
              Home
            </Link>
            <p className="text-base text-mont text-gray">/</p>
            <Link className="text-base text-mont text-gray" to="">
              Blog
            </Link>
          </div>
          <div className="w-full h-auto mt-8">
            <h1 className="text-4xl text-mont text-black-50 font-bold">Blog</h1>
          </div>
          <div className="w-full h-auto flex lg:flex-row flex-col gap-6 mt-8">
            <div className="lg:w-2/3 w-full h-auto">
              <div className="w-full h-auto px-6 pb-4 lg:pt-64 pt-40 bg-unicef">
                <div className="w-20 h-auto text-center">
                  <p className="text-base text-mont text-white font-bold px-4 py-2 bg-red">
                    NEW
                  </p>
                </div>
                <div className="lg:w-1/2 w-full h-auto mt-4">
                  <h1 className="text-white text-mont text-4xl font-bold">
                    Donec turpis eros, euismod nec justo sit amet
                  </h1>
                </div>
                <div className="lg:w-1/2 w-full h-auto mt-2">
                  <p className="text-mont text-l2gray text-base">
                    Pellentesque consequat dui turpis, nec porta nisi varius
                    quis. Ut mattis velit quis mi consectetur, non rhoncus metus
                    dapibus.
                  </p>
                </div>
                <div className="lg:w-1/2 w-full h-auto flex items-center mt-2">
                  <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                  <p className="text-mont text-gray text-xs ml-2">
                    July 3, 2022
                  </p>
                  <p className="text-mont text-gray text-xs ml-2">.</p>
                  <p className="text-mont text-gray text-xs ml-2">
                    5 minutes to read
                  </p>
                </div>
              </div>
              <div className="w-full h-auto flex lg:flex-row flex-col gap-6">
                <div className="lg:w-1/3 w-full h-auto mt-8">
                  <img
                    className="rounded-xl w-full"
                    src="./images/niger.png"
                    alt="niger"
                  />
                  <div className="px-0 mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Mauris vel ornare massa, at ullamcorper ligula
                    </h2>
                    <p className="text-base tet-mont text-dgray mt-2">
                      Cras ullamcorper dolor ac viverra finibus. Fusce iaculis
                      accumsan ex, in placerat arcu luctus vitae. Fusce velit
                      lacus, hendrerit scelerisque efficitur eget, placerat eu
                      lectus.
                    </p>
                    <div className="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p className="text-mont text-gray text-xs ml-2">
                        April 20, 2022
                      </p>
                      <p className="text-mont text-gray text-xs ml-2">.</p>
                      <p className="text-mont text-gray text-xs ml-2">
                        3 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto mt-8">
                  <img
                    className="rounded-xl w-full"
                    src="./images/UN0691098 (1)_0.png"
                    alt="UN0691098 (1)_0"
                  />
                  <div className="px-0 mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Aenean ac iaculis urna, quis condimentum elit
                    </h2>
                    <p className="text-base tet-mont text-dgray mt-2">
                      Nullam eleifend faucibus mi, ac dapibus lectus interdum
                      eu. Suspendisse sed semper augue, nec pulvinar orci.
                      Praesent tincidunt purus condimentum efficitur fermentum.
                    </p>
                    <div className="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p className="text-mont text-gray text-xs ml-2">
                        March 7, 2022
                      </p>
                      <p className="text-mont text-gray text-xs ml-1">.</p>
                      <p className="text-mont text-gray text-xs ml-1">
                        4 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto mt-8">
                  <img
                    className="rounded-xl w-full"
                    src="./images/WebImage_Children_Orphans_Charity-Week.png"
                    alt="Children_Orphans_Charity-Week"
                  />
                  <div className="px-0 mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Congue quisque egestas diam in arcu cursus
                    </h2>
                    <p className="text-base tet-mont text-dgray mt-2">
                      Nunc eget lorem dolor sed viverra ipsum nunc. Ac ut
                      consequat semper viverra nam. Urna neque viverra justo nec
                      ultrices. Feugiat scelerisque varius morbi enim nunc
                      faucibus a.
                    </p>
                    <div className="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p className="text-mont text-gray text-xs ml-2">
                        February 2, 2022
                      </p>
                      <p className="text-mont text-gray text-xs ml-1">.</p>
                      <p className="text-mont text-gray text-xs ml-1">
                        3 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto flex lg:flex-row flex-col gap-6">
                <div className="lg:w-1/3 w-full h-auto mt-8">
                  <img
                    className="rounded-xl w-full"
                    src="./images/feature-article-Is-charity-work-right-for-me-838x484_2017-2.png"
                    alt="feature-article"
                  />
                  <div className="px-0 mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Enim diam vulputate ut pharetra sit amet aliquam id
                    </h2>
                    <p className="text-base tet-mont text-dgray mt-2">
                      Fames ac turpis egestas maecenas pharetra convallis
                      posuere morbi leo. Volutpat odio facilisis mauris sit amet
                      massa vitae tortor condimentum.
                    </p>
                    <div className="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p className="text-mont text-gray text-xs ml-2">
                        January 3, 2022
                      </p>
                      <p className="text-mont text-gray text-xs ml-2">.</p>
                      <p className="text-mont text-gray text-xs ml-2">
                        5 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto mt-8">
                  <img
                    className="rounded-xl w-full"
                    src="./images/ZAF-BEC9590.png"
                    alt="ZAF-BEC9590"
                  />
                  <div className="px-0 mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      Nunc id cursus metus aliquam eleifend
                    </h2>
                    <p className="text-base tet-mont text-dgray mt-2">
                      Dui id ornare arcu odio ut sem nulla pharetra diam. Ligula
                      ullamcorper malesuada proin libero nunc. Sagittis aliquam
                      malesuada bibendum arcu vitae elementum.
                    </p>
                    <div className="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p className="text-mont text-gray text-xs ml-2">
                        December 13, 2022
                      </p>
                      <p className="text-mont text-gray text-xs ml-1">.</p>
                      <p className="text-mont text-gray text-xs ml-1">
                        4 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full h-auto mt-8">
                  <img
                    className="rounded-xl w-full"
                    src="./images/give-international-global-impact-charity-1440x900.png"
                    alt="give-international-global-impact-charity"
                  />
                  <div className="px-0 mt-4">
                    <h2 className="text-black-50 text-mont text-lg font-bold">
                      In arcu cursus euismod quis viverra nibh cras pulvinar
                      mattis
                    </h2>
                    <p className="text-base tet-mont text-dgray mt-2">
                      Quis eleifend quam adipiscing vitae. In hac habitasse
                      platea dictumst vestibulum. Duis ut diam quam nulla
                      porttitor massa id. Tincidunt arcu non sodales neque
                      sodales ut etiam.
                    </p>
                    <div className="w-full h-auto flex items-center mt-2">
                      <img src="./Icons/icon_clock.svg" alt="icon_clock" />
                      <p className="text-mont text-gray text-xs ml-2">
                        September 23, 2022
                      </p>
                      <p className="text-mont text-gray text-xs ml-1">.</p>
                      <p className="text-mont text-gray text-xs ml-1">
                        4 minutes to read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full h-auto mt-8 p-4 text-center text-nblue text-mont font-medium text-sm border-2 border-lgray rounded-xl">
                Load More
              </button>
            </div>
            <div className="w-full lg:w-1/3 h-auto">
              <h1 className="text-mont text-2xl text-blue font-bold">
                The most readable
              </h1>
              <div className="lg:w-4/5 w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p className="text-xl text-mont text-l3gray">01</p>
                <div>
                  <h3 className="text-mont text-lg text-black-50 font-bold">
                    Mauris vel ornare massa, at ullamcorper ligula
                  </h3>
                  <p className="text-mont text-xs text-gray mt-3 mb-5">
                    <i className="mr-1 fa-regular fa-clock"></i> April 20, 2022
                    . 3 minutes to read
                  </p>
                </div>
              </div>
              <div className="lg:w-4/5 w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p className="text-xl text-mont text-l3gray">02</p>
                <div>
                  <h3 className="text-mont text-lg text-black-50 font-bold">
                    Duis aute irure dolor in reprehenderit in voluptate
                  </h3>
                  <p className="text-mont text-xs text-gray mt-3 mb-5">
                    <i className="mr-1 fa-regular fa-clock"></i> May 7, 2022 . 4
                    minutes to read
                  </p>
                </div>
              </div>
              <div className="lg:w-4/5 w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p className="text-xl text-mont text-l3gray">03</p>
                <div>
                  <h3 className="text-mont text-lg text-black-50 font-bold">
                    Excepteur sint occaecat cupidatat non proident
                  </h3>
                  <p className="text-mont text-xs text-gray mt-3 mb-5">
                    <i className="mr-1 fa-regular fa-clock"></i> April 2, 2022 .
                    5 minutes to read
                  </p>
                </div>
              </div>
              <div className="lg:w-4/5 w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6 border-b border-lgray">
                <p className="text-xl text-mont text-l3gray">04</p>
                <div>
                  <h3 className="text-mont text-lg text-black-50 font-bold">
                    Ut enim ad minim veniam, quistino
                  </h3>
                  <p className="text-mont text-xs text-gray mt-3 mb-5">
                    <i className="mr-1 fa-regular fa-clock"></i> February 20,
                    2022 . 2 minutes to read
                  </p>
                </div>
              </div>
              <div className="lg:w-4/5 w-full h-auto lg:pr-8 pr-0 flex gap-4 mt-6">
                <p className="text-xl text-mont text-l3gray">05</p>
                <div>
                  <h3 className="text-mont text-lg text-black-50 font-bold">
                    Tristique nulla aliquet enim tortor at
                  </h3>
                  <p className="text-mont text-xs text-gray mt-3 mb-5">
                    <i className="mr-1 fa-regular fa-clock"></i> January 7, 2022
                    . 3 minutes to read
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
}

export default Blogs;
