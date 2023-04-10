import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/Dashboard/dashboard';
import Profile from './pages/Dashboard/profile';
import Change_password from './pages/Dashboard/change_password';
import Fundraising from './pages/Dashboard/fundraising';
import Monthly_donation from './pages/Dashboard/monthly_donations';
import Payment_methods from './pages/Dashboard/payment_methods';
import Preferences from './pages/Dashboard/preferences';
import Donation_history from './pages/Dashboard/donation_history';
import Appeal from './components/appeal';
import Page_view from './pages/Page_Settings/page_view';
import Page_edit from './pages/Page_Settings/page_edit';
import Page_media from './pages/Page_Settings/page_media';
import Page_donations from './pages/Page_Settings/page_donations';
import Page_settings from './pages/Page_Settings/page_settings';
import Appeal_page from './pages/Other_pages/appeal_page';
import Fundraiser from './pages/Other_pages/fundraiser';
import Blog_article from './pages/Other_pages/blog_article';
import Blogs from './pages/Other_pages/blogs';
import Checkout from './pages/Other_pages/checkout';
import Contact from './pages/Other_pages/contact';
import How_works from './pages/Other_pages/how_works';
import Marketing from './pages/Other_pages/marketing';
import Rewards from './pages/Other_pages/rewards';
import Story from './pages/Other_pages/story';
import Privacy from './pages/Other_pages/privacy';
import Refund from './pages/Other_pages/refund';
import Donation_policy from './pages/Other_pages/donation_policy';
import Terms from './pages/Other_pages/terms';
import Zakat from './pages/Other_pages/zakat';
import Thankyou from './pages/Other_pages/thankyou';
import Appeal_story from './pages/Appeal_details/appeal_story';
import Appeal_about from './pages/Appeal_details/appeal_about';
import Appeal_summary from './pages/Appeal_details/appeal_summary';
import Appeal_summary2 from './pages/Appeal_details/appeal_summary2';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />>} /> */}
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Appeal_page />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/security" element={<Change_password />} />
      <Route exact path="/fundraising" element={<Fundraising />} />
      <Route exact path="/monthly_donations" element={<Monthly_donation />} />
      <Route exact path="/payment_methods" element={<Payment_methods />} />
      <Route exact path="/preferences" element={<Preferences />} />
      <Route exact path="/donation_history" element={<Donation_history />} />
      <Route exact path="/appeal" element={<Appeal />} />
      <Route exact path="/page_view" element={<Page_view />} />
      <Route exact path="/page_edit" element={<Page_edit />} />
      <Route exact path="/page_media" element={<Page_media />} />
      <Route exact path="/page_donations" element={<Page_donations />} />
      <Route exact path="/page_settings" element={<Page_settings />} />
      <Route exact path="/appeal_page" element={<Appeal_page />} />
      <Route exact path="/fundraiser" element={<Fundraiser />} />
      <Route exact path="/blog_article" element={<Blog_article />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/how_it_works" element={<How_works />} />
      <Route exact path="/marketing" element={<Marketing />} />
      <Route exact path="/rewards" element={<Rewards />} />
      <Route exact path="/story" element={<Story />} />
      <Route exact path="/terms" element={<Terms />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/donation_policy" element={<Donation_policy />} />
      <Route exact path="/refund" element={<Refund />} />
      <Route exact path="/zakat" element={<Zakat />} />
      <Route exact path="/thankyou" element={<Thankyou />} />
      <Route exact path="/appeal_story" element={<Appeal_story />} />
      <Route exact path="/appeal/:appealId" element={<Appeal_about />} />
      <Route exact path="/appeal_summary" element={<Appeal_summary />} />

      {/* <Route exact path="/appeal_about" element={<Appeal_about />} /> */}
      <Route exact path="/appeal_summary2" element={<Appeal_summary2 />} />
    </Routes>
  );
};
