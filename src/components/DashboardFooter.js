import { isMobile } from 'react-device-detect';

const DashboardFooter = () => {
  if (!isMobile) {
    return (
      <div className="flex gap-4 mx-auto absolute bottom-5 left-12">
        <a className="text-gray-400 text-xs ">Terms & Conditions</a>
        <div className="h-3 border-l-2"></div>
        <a className="text-gray-400 text-xs ">Privacy Policy</a>
        <div className="h-3 border-l-2"></div>
        <a className="text-gray-400 text-xs ">Donation Policy</a>
        <div className="h-3 border-l-2"></div>
        <a className="text-gray-400 text-xs ">Refund Policy</a>
      </div>
    );
  } else {
    return (
      <div className="flex gap-4 mx-auto absolute bottom-5 left-4">
        <p className="text-gray-400 text-xs ">
          © 2022 Aid Humanity. All rights reserved.
        </p>
      </div>
    );
  }
};

export default DashboardFooter;
