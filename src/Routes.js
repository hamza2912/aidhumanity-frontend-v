import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FaqPage from './pages/FaqPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import ChangePassword from './pages/Dashboard/ChangePassword';
import Fundraising from './pages/Dashboard/Fundraising';
import MonthlyDonations from './pages/Dashboard/MonthlyDonations';
import PaymentMethods from './pages/Dashboard/PaymentMethods';
import Preferences from './pages/Dashboard/Preferences';
import DonationHistory from './pages/Dashboard/DonationHistory';
import Appeal from './components/Appeal';
import PageView from './pages/PageSettings/PageView';
import CreateCampaign from './pages/PageSettings/PageEdit';
import PageMedia from './pages/PageSettings/PageMedia';
import PageDonations from './pages/PageSettings/PageDonations';
import PageSettings from './pages/PageSettings/PageSettings';
import AppealPage from './pages/OtherPages/AppealPage';
import Fundraiser from './pages/OtherPages/Fundraiser';
import BlogArticle from './pages/OtherPages/BlogArticle';
import Blogs from './pages/OtherPages/Blogs';
import Checkout from './pages/OtherPages/Checkout';
import Contact from './pages/OtherPages/Contact';
import HowWorks from './pages/OtherPages/HowWorks';
import Marketing from './pages/OtherPages/Marketing';
import Rewards from './pages/OtherPages/Rewards';
import Story from './pages/OtherPages/Story';
import Privacy from './pages/OtherPages/Privacy';
import Refund from './pages/OtherPages/Refund';
import DonationPolicy from './pages/OtherPages/DonationPolicy';
import Terms from './pages/OtherPages/Terms';
import Zakat from './pages/OtherPages/Zakat';
import Thankyou from './pages/OtherPages/Thankyou';
import AppealStory from './pages/AppealDetails/AppealStory';
import AppealAbout from './pages/AppealDetails/AppealAbout';
import AppealSummary from './pages/AppealDetails/AppealSummary';
import AppealSummary2 from './pages/AppealDetails/AppealSummary2';
import ResetPassword from './components/modal/ForgetPassword';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/faq" element={<FaqPage />} />
      <Route exact path="/appeals" element={<AppealPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/security" element={<ChangePassword />} />
      <Route exact path="/fundraising" element={<Fundraising />} />
      <Route exact path="/monthly_donations" element={<MonthlyDonations />} />
      <Route exact path="/payment_methods" element={<PaymentMethods />} />
      <Route exact path="/preferences" element={<Preferences />} />
      <Route exact path="/donation_history" element={<DonationHistory />} />
      <Route exact path="/appeal" element={<Appeal />} />
      <Route exact path="/campaign/:campaignId/view" element={<PageView />} />
      <Route
        exact
        path="/campaign/:campaignId/edit"
        element={<CreateCampaign />}
      />
      <Route exact path="/campaign/:campaignId/media" element={<PageMedia />} />
      <Route
        exact
        path="/campaign/:campaignId/donations"
        element={<PageDonations />}
      />
      <Route
        exact
        path="/campaign/:campaignId/settings"
        element={<PageSettings />}
      />
      <Route exact path="/fundraiser" element={<Fundraiser />} />
      <Route exact path="/blog_article" element={<BlogArticle />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/how_it_works" element={<HowWorks />} />
      <Route exact path="/marketing" element={<Marketing />} />
      <Route exact path="/rewards" element={<Rewards />} />
      <Route exact path="/story" element={<Story />} />
      <Route exact path="/terms" element={<Terms />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/donation_policy" element={<DonationPolicy />} />
      <Route exact path="/refund" element={<Refund />} />
      <Route exact path="/zakat" element={<Zakat />} />
      <Route exact path="/thankyou" element={<Thankyou />} />
      <Route exact path="/appeal_story" element={<AppealStory />} />
      <Route exact path="/appeal/:appealId" element={<AppealAbout />} />
      <Route exact path="/campaign/:campaignId" element={<AppealAbout />} />
      <Route exact path="/forget-password" element={<Home />} />

      <Route exact path="/appeal_summary" element={<AppealSummary />} />

      {/* <Route exact path="/appeal_about" element={<Appeal_about />} /> */}
      <Route exact path="/appeal_summary2" element={<AppealSummary2 />} />
    </Routes>
  );
};
