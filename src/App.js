import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Appeal_about} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/security" component={Change_password} />
        <Route exact path="/fundraising" component={Fundraising} />
        <Route exact path="/monthly_donations" component={Monthly_donation} />
        <Route exact path="/payment_methods" component={Payment_methods} />
        <Route exact path="/preferences" component={Preferences} />
        <Route exact path="/donation_history" component={Donation_history} />
        <Route exact path="/appeal" component={Appeal} />
        <Route exact path="/page_view" component={Page_view} />
        <Route exact path="/page_edit" component={Page_edit} />
        <Route exact path="/page_media" component={Page_media} />
        <Route exact path="/page_donations" component={Page_donations} />
        <Route exact path="/page_settings" component={Page_settings} />
        <Route exact path="/appeal_page" component={Appeal_page} />
        <Route exact path="/fundraiser" component={Fundraiser} />
        <Route exact path="/blog_article" component={Blog_article} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/how_it_works" component={How_works} />
        <Route exact path="/marketing" component={Marketing} />
        <Route exact path="/rewards" component={Rewards} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/donation_policy" component={Donation_policy} />
        <Route exact path="/refund" component={Refund} />
        <Route exact path="/zakat" component={Zakat} />
        <Route exact path="/thankyou" component={Thankyou} />
        <Route exact path="/appeal_story" component={Appeal_story} />
        {/* <Route exact path="/appeal_about" component={Appeal_about} /> */}
        <Route exact path="/appeal_summary" component={Appeal_summary} />
        <Route exact path="/appeal_summary2" component={Appeal_summary2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
