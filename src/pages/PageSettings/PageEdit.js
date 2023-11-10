import React, { useState, useEffect, useCallback } from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardFooter2 from '../../components/DashboardFooter2';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import CampaignService from '../../services/campaign';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateCampaign } from '../../redux/appeal/appealSlice';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header";
import { useParams } from 'react-router-dom';

const CreateCampaign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { campaignId } = useParams();
  const { campaign } = useSelector(state => state.appeal);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    targeted_amount: '',
    description: '',
    story: '',
    category: '',
  });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchCampaign = useCallback(async () => {
    const campaign = await CampaignService.getCampaign(campaignId);
    dispatch(updateCampaign(campaign));
  }, [dispatch, campaignId]);

  const fetchCategories = async () => {
    const data = await CampaignService.getCategories();
    setCategories(data);
  };

  useEffect(() => {
    if (!campaign) {
      fetchCampaign();
    }
    fetchCategories();
  }, [campaign, fetchCampaign]);

  useEffect(() => {
    if (campaign) {
      const { title, category, targeted_amount, story, description } = campaign;
      setFormData({
        title: title,
        category: category.name,
        targeted_amount: targeted_amount,
        story: story,
        description: description,
      });
      const contentState = ContentState.createFromText(story);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [campaign]);

  const handleEditorStateChange = state => {
    setEditorState(state);
    setFormData(prevData => ({
      ...prevData,
      story: state.getCurrentContent().getPlainText(),
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const campaign = { campaign: formData };
    try {
      const data = await CampaignService.updateCampaign(campaign, campaignId);
      if (data) {
        dispatch(updateCampaign(data));
        navigate(`/campaign/${data.id}/media`);
        toast.success('Campaign Successfully Updated');
      }
    } catch (err) {}
  };

  if (campaign?.cancelled_at) {
    return navigate('/appeals');
  }

  return (
    <div>
      {/* <DashboardHeader /> */}
      <Header activePage = 'page_view' />
      <div className="bg-gray lg:px-20 px-4 pt-8 lg:pb-20 pb-8 mt-16">
        <div className="lg:w-3/5 w-full page-section mx-auto">
          <h1 className="text-blue font-bold text-2xl lg:my-6 my-4 pl-6">
            Edit Page
          </h1>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2 rounded-t-xl">
            <h2 className="text-lg text-black-50 font-bold">Info</h2>
          </div>
          <div className="bg-white lg:px-6 px-4 py-8 border-b-2">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  id="title"
                  className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <label
                  className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                  htmlFor="title"
                >
                  Page title
                </label>
              </div>
              <div className="relative mt-6">
                <select
                  id="category"
                  className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Choose a category"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <label
                  className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                  htmlFor="category"
                >
                  Category
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  id="fund"
                  className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10"
                  type="number"
                  name="targeted_amount"
                  value={formData.targeted_amount}
                  onChange={handleChange}
                />
                <label
                  className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                  htmlFor="fund"
                >
                  Fundraising target
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  id="summary"
                  type="text"
                  className="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label
                  className="font-semibold text-gray-400 absolute top-2 left-3 text-xs"
                  htmlFor="summary"
                >
                  Page Summary
                </label>
              </div>
              <div className="bg-white w-full border-b-2">
                <div className=" lg:pr-4 py-8">
                  <h2 className="text-lg text-black-50 font-bold">Story</h2>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorStateChange}
                    wrapperClassName="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-4"
                    editorClassName="w-full pt-5 pb-1 px-3 rounded-md text-black-50 font-medium border border-gray-400 focus:outline-none z-10 mt-4"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="lg:relative fixed left-0 lg:bottom-0 bottom-12 py-4 lg:w-1/4 w-full bg-green hover:bg-mgreen text-black font-bold text-sm lg:rounded-lg uppercase mt-8"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <DashboardFooter2 active="edit" title={campaign?.title} />
    </div>
  );
};

export default CreateCampaign;
