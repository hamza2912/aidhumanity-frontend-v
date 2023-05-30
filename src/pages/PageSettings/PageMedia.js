import React, { useEffect, useState } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardFooter2 from '../../components/DashboardFooter2';
import { useDispatch, useSelector } from 'react-redux';
import CampaignService from '../../services/campaign';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import { Image } from './CampaignImage';
import { DragAndDrop } from './DragAndDrop';
import CoverImageComponent from './CoverImage';

const PageMedia = () => {
  const { campaign } = useSelector(state => state.appeal);
  const [coverImage, setCoverImage] = useState(null);
  const [uploadedImages, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const { campaignId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchCampaign = async () => {
    const campaign = await CampaignService.getCampaign(campaignId);
    dispatch(updateCampaign(campaign));
  };
  useEffect(() => {
    if (!campaign) {
      fetchCampaign();
    }
  }, []);

  const handleCoverImageChange = e => {
    setCoverImage(e.target.files[0]);
    handleUpload(true, e.target.files[0]);
  };

  const handleImagesChange = e => {
    setImages(e);
  };

  const handleUpload = async (isCover = true, uploadedImage) => {
    let formData = new FormData();
    if (isCover) {
      formData.append('campaign[cover_image]', uploadedImage);
    }
    const images = [...uploadedImages];
    images.forEach((image, index) => {
      formData.append(`campaign[images_attributes][${index}][file]`, image);
    });
    try {
      const data = await CampaignService.updateCampaign(formData, campaignId);
      if (data) {
        dispatch(updateCampaign(data));
        toast.success('Campaign Image Updated Successfully');
        setImages([]);
        setCoverImage(null);
      }
    } catch (e) {}
  };

  const handleCoverChange = async image => {
    let formData = new FormData();
    formData.append('campaign[cover_image]', image.url);
    try {
      const data = await CampaignService.updateCampaign(formData, campaignId);
      if (data) {
        dispatch(updateCampaign(data));
        toast.success('Campaign Image Updated Successfully');
        setImages([]);
        setFileNames([]);
        setCoverImage(null);
      }
    } catch (e) {}
  };

  const handleDelete = async (index, image) => {
    let formData = new FormData();
    formData.append(`campaign[images_attributes][${index}][id]`, image.id);
    formData.append(`campaign[images_attributes][${index}][_destroy]`, true);

    try {
      const data = await CampaignService.updateCampaign(formData, campaignId);
      dispatch(updateCampaign(data));
      toast.warning('Campaign Image Deleted Successfully');
    } catch (e) {}
  };

  if (campaign?.cancelled_at) {
    return navigate('/');
  }

  return (
    <div>
      <DashboardHeader />
      <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8">
        <div className="lg:w-3/5 w-full page-section mx-auto">
          <h1 className="text-blue font-bold text-2xl lg:my-6 my-4 pl-6">
            Media
          </h1>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl">
            <h2 className="text-lg text-black-50 font-bold">Page Cover</h2>
          </div>
          <CoverImageComponent
            {...{
              handleUpload,
              coverImage,
              campaign,
              handleCoverImageChange,
              setCoverImage,
            }}
          />
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl mt-6">
            <h2 className="text-lg text-black-50 font-bold">Gallery</h2>
          </div>
          <div className="bg-white w-full border-b-2">
            <div className="lg:px-6 px-4 py-8">
              <DragAndDrop
                handleImagesChange={handleImagesChange}
                fileNames={fileNames}
                setFileNames={setFileNames}
              />
              <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5">
                {campaign?.images?.map((image, index) => (
                  <Image
                    index={index}
                    image={image}
                    setCoverImage={handleCoverChange}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>

              <button
                onClick={() => handleUpload(false)}
                className="py-2 px-4 bg-green text-black font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none mt-5"
              >
                Upload Images
              </button>
            </div>
          </div>
        </div>
      </div>
      <DashboardFooter2 active="media" title={campaign?.title} />
    </div>
  );
};

export default PageMedia;
