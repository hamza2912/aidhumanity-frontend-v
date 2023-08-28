import React from 'react';

import { useSelector } from 'react-redux';
import SummarySidebar from '../../pages/AppealDetails/SummarySidebar';
import CheckoutSidebar from '../../pages/AppealDetails/CheckoutSidebar';
import ProjectAppealSideBar from '../../pages/AppealDetails/ProjectAppealSideBar';
import SubscriptionSidebar from '../../pages/AppealDetails/SubscriptionSidebar';
import GeneralSidebar from '../../pages/AppealDetails/GeneralSidebar';
import ScrollToTop from '../../ScrollToTop';

const SidebarWrapper = ({ appealData, campaignId, children, setdivStyle }) => {
  const ref = React.useRef(null);

  const {
    projectSidebar,
    summarySidebar,
    checkoutSidebar,
    regularSidebar,
    subscriptionSidebar,
  } = useSelector(state => state.common);

  // React.useEffect(() => {
  //   if (
  //     projectSidebar ||
  //     checkoutSidebar ||
  //     subscriptionSidebar ||
  //     regularSidebar ||
  //     summarySidebar
  //   ) {
  //     setdivStyle({
  //       height: ref.current?.clientHeight + 'px',
  //       position: 'fixed',
  //     });
  //   } else {
  //     setdivStyle({
  //       position: 'inherit',
  //     });
  //   }
  // }, [
  //   projectSidebar,
  //   setdivStyle,
  //   checkoutSidebar,
  //   subscriptionSidebar,
  //   regularSidebar,
  //   summarySidebar,
  // ]);

  return (
    <>
      {(projectSidebar ||
        checkoutSidebar ||
        subscriptionSidebar ||
        regularSidebar ||
        summarySidebar) && (
        <>
          <div className="dimmer"></div>
          <ScrollToTop />
          <div
            ref={ref}
            className="w-full h-auto  flex lg:flex-row flex-col justify-end z-40 absolute"
          >
            {projectSidebar && (
              <ProjectAppealSideBar
                show={projectSidebar}
                appeal={appealData}
                campaignId={campaignId}
              />
            )}
            {regularSidebar && (
              <GeneralSidebar appeal={appealData} campaignId={campaignId} />
            )}
            {subscriptionSidebar && (
              <SubscriptionSidebar
                appeal={appealData}
                campaignId={campaignId}
              />
            )}
            {summarySidebar && <SummarySidebar />}
            {checkoutSidebar && <CheckoutSidebar />}
          </div>
        </>
      )}
      {children}
    </>
  );
};

export default SidebarWrapper;
