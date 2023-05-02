import React from 'react';
import Dashboard_header from '../Dashboard/DashboardHeader';
import Dashboard_footer2 from '../../components/DashboardFooter2';

const PageMedia = () => {
  return (
    <div>
      <Dashboard_header />
      <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8">
        <div className="lg:w-3/5 w-full page-section mx-auto">
          <h1 className="text-blue font-bold text-2xl lg:my-6 my-4 pl-6">
            Media
          </h1>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl">
            <h2 className="text-lg text-black-50 font-bold">Page Cover</h2>
          </div>
          <div className="bg-white py-8 border-b-2 rounded-b-xl">
            <p className="text-gray-600 mb-4 lg:px-6 px-4">
              Upload a photo, select a photo from your gallery, or add a live
              stream video.
            </p>
            <div className="w-full bg-gray-dark lg:h-96 h-56 flex justify-center items-center relative">
              <img
                className="w-6"
                src="images/icons/dashboard/icon_image.svg"
                alt=""
              />
              <button className="py-4 lg:w-1/4 w-1/2 bg-green text-black font-bold text-sm rounded-lg uppercase absolute bottom-8 right-8">
                Change Cover
              </button>
            </div>
          </div>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl mt-6">
            <h2 className="text-lg text-black-50 font-bold">Gallery</h2>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <div className="w-full h-36 rounded-xl border border-dashed border-gray-400 bg-gray flex flex-col items-center py-10 mt-6">
                <div className="flex gap-2">
                  <img
                    className="w-full z-20"
                    src="images/icons/dashboard/icon_cloud-upload.svg"
                    alt=""
                  />
                  <p className="text-sm text-blue font-bold">BROWSE</p>
                </div>
                <p className="text-sm font-bold">Drag & Drop files here</p>
                <p className="text-xs text-gray-400 w-1/2 text-center">
                  * Supported image formats: jpg, jpeg, png, max. filesize 2 MB
                </p>
              </div>
              <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
                <div className="w-full bg-gray-dark h-64 shadow-lg flex justify-center items-center relative rounded-2xl">
                  <img
                    className="w-6"
                    src="images/icons/dashboard/icon_image.svg"
                    alt=""
                  />
                </div>
                <div className="w-full bg-gray-dark h-64 shadow-lg flex justify-center items-center relative rounded-2xl">
                  <img
                    className="w-6"
                    src="images/icons/dashboard/icon_image.svg"
                    alt=""
                  />
                  <button className="w-1/2 bg-green text-black font-bold text-sm rounded-lg uppercase absolute top-0 bottom-0 my-auto h-12">
                    Set as Cover
                  </button>
                </div>
                <div className="w-full bg-gray-dark h-64 shadow-lg flex justify-center items-center relative rounded-2xl">
                  <img
                    className="w-6"
                    src="images/icons/dashboard/icon_image.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dashboard_footer2 active="media" />
    </div>
  );
};

export default PageMedia;
