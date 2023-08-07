import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

const DashboardFooter = () => {
  if (!isMobile) {
    return (
      <div className="flex gap-4 mx-auto absolute bottom-5 left-12">
        <Link className="text-gray-400 hover:text-dgray text-xs">
          Terms & Conditions
        </Link>
        <div className="h-3 border-l-2"></div>
        <Link className="text-gray-400 hover:text-dgray text-xs">
          Privacy Policy
        </Link>
        <div className="h-3 border-l-2"></div>
        <Link className="text-gray-400 hover:text-dgray text-xs">
          Donation Policy
        </Link>
        <div className="h-3 border-l-2"></div>
        <Link className="text-gray-400 hover:text-dgray text-xs">
          Refund Policy
        </Link>
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
