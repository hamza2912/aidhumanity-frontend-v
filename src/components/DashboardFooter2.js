import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const DashboardFooter2 = ({ active, title }) => {
  const { campaignId } = useParams();

  let navigate = useNavigate();

  return (
    <div className="bg-white fixed bottom-0 left-0 w-full lg:px-20 px-4 flex justify-between">
      <ul className="flex items-center gap-6 text-sm font-medium text-black-50 pt-4 list-none">
        <li
          onClick={() => navigate(`/campaign/${campaignId}/view`)}
          className={
            `${active === 'view'
              ? 'pb-2 border-blue border-b-4 text-blue-dark'
              : 'pb-2 border-white border-b-4'} hover:text-sblue`
          }
        >
          <Link>View</Link>
        </li>
        <li
          onClick={() => navigate(`/campaign/${campaignId}/edit`)}
          className={
            `${active === 'view'
              ? 'pb-2 border-blue border-b-4 text-blue-dark'
              : 'pb-2 border-white border-b-4'} hover:text-sblue`
          }
        >
          <Link>Edit</Link>
        </li>
        <li
          onClick={() => navigate(`/campaign/${campaignId}/media`)}
          className={
            `${active === 'view'
              ? 'pb-2 border-blue border-b-4 text-blue-dark'
              : 'pb-2 border-white border-b-4'} hover:text-sblue`
          }
        >
          <Link>Media</Link>
        </li>
        <li
          onClick={() => navigate(`/campaign/${campaignId}/donations`)}
          className={
            `${active === 'view'
              ? 'pb-2 border-blue border-b-4 text-blue-dark'
              : 'pb-2 border-white border-b-4'} hover:text-sblue`
          }
        >
          <Link>Donations</Link>
        </li>
        <li
          onClick={() => navigate(`/campaign/${campaignId}/settings`)}
          className={
            `${active === 'view'
              ? 'pb-2 border-blue border-b-4 text-blue-dark'
              : 'pb-2 border-white border-b-4'} hover:text-sblue`
          }
        >
          <Link>Settings</Link>
        </li>
      </ul>
      <Link
        className="lg:flex items-center gap-3 hidden"
        to={`/campaign/${campaignId}/view`}
      >
        <p className="text-sm text-black-50 font-bold">{title}</p>
        <img
          className="w-4"
          src="/images/icons/dashboard/arrow-left.svg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default DashboardFooter2;
