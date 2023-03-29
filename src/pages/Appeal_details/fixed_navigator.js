import React, { useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/footer';
import AppealFooter from '../../components/appeal_footer';
import AppealShare from '../../components/modal/appeal_share';
import Appeal_slider from '../../components/appeal_slider';
import HeaderAppeal from '../../components/header_appeal';
// import Header from '../../components/header';
import appealService from '../../services/appeals';
import dayjs from 'dayjs';
import donationService from '../../services/donations';
import CircularProgressBar from './circular_progress_bar';
import DonateModal from '../../components/modal/donate_modal';
import { APPEAL_ID, SERVER_URL } from '../../services/config';
import { useLocation, useHistory } from 'react-router-dom';
import Thankyou from '../Other_pages/thankyou';
import { toast } from 'react-toastify';
import { currencyFormatter } from '../../utils';
function FixedNavigator() {
  const [showDonateModal, setshowDonateModal] = React.useState(false);
  const history = useHistory();

  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between fixed z-50 w-full bottom-0 right-0 px-8 sm:px-32 bg-white">
      <ul className="flex space-x-12 w-full bg-white text-[1.2rem] font-medium tracking-[-0.18px] text-black">
        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]" onClick={() => history.push('/appeal_about#story')}>Story</li>
        
        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]"><Link to="/appeal_about#story">Story</Link></li>
        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]"><Link to="/appeal_about#about">About</Link></li>
        <li className="py-8 border-y-4 border-white hover:border-b-[#00ADE9]"><Link to="/appeal_about#summary">Summary</Link></li>
        
      </ul>

      <div className="flex justify-between items-center">
        <img src="./Icons/cross.svg" className="sm:hidden w-4"></img>
        <div className="flex space-x-8 items-center">
          <p className="text-[2rem] font-bold tracking-[-0.5px] text-black whitespace-nowrap">£4.342</p>
          <button onClick={() => setshowDonateModal(true)} className="whitespace-nowrap px-8 py-3 uppercase text-[1.4rem] font-semibold text-black bg-green rounded-xl">
            Donate now
          </button>
        </div>
        {showDonateModal ? (
        <DonateModal
          showModal={showDonateModal}
          setshowModal={setshowDonateModal}
          quick={false}
        />
      ) : null}
      </div>
    </nav>
  );
}

export default FixedNavigator;
