import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const AppealFooter = ({ active }) => {
  const [showMenu, setshowMenu] = React.useState(false);

  const navigate = useNavigate();

  return (
    <div className="bg-white fixed bottom-0 left-0 w-full lg:px-20 px-4 flex lg:flex-row justify-between items-center z-50">
      {isMobile ? (
        !showMenu ? (
          <button onClick={() => setshowMenu(true)}>
            <img src="./Icons/icon_bars.svg" alt="icon_bars" />
          </button>
        ) : (
          <i
            onClick={() => setshowMenu(false)}
            className="fa-solid fa-times text-black-50"
          ></i>
        )
      ) : null}
      {isMobile && showMenu ? (
        <ul className="lg:relative absolute bottom-12 bg-rwhite left-0 w-full flex items-center  gap-6 text-sm font-medium text-black-50 pt-4 pl-4 list-none">
          <li
            onClick={() => navigate('/appeal_story')}
            className={
              active === 'story'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link to="/">Story</Link>
          </li>
          <li
            onClick={() => navigate('/appeal_about')}
            className={
              active === 'about'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link className="" to="/">
              About
            </Link>
          </li>
          <li
            onClick={() => navigate('/appeal_summary')}
            className={
              active === 'summary'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link className="" to="/">
              Summary
            </Link>
          </li>
          <li
            onClick={() => navigate('/appeal_summary2')}
            className={
              active === 'summary2'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link className="" to="/">
              Summary 2
            </Link>
          </li>
        </ul>
      ) : !isMobile ? (
        <ul className="flex gap-6 text-sm font-medium text-black-50 pt-4 list-none">
          <li
            onClick={() => navigate('/appeal_story')}
            className={
              active === 'story'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link to="/">Story</Link>
          </li>
          <li
            onClick={() => navigate('/appeal_about')}
            className={
              active === 'about'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link to="/" className="">
              About
            </Link>
          </li>
          <li
            onClick={() => navigate('/appeal_summary')}
            className={
              active === 'summary'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link to="/" className="">
              Summary
            </Link>
          </li>
          <li
            onClick={() => navigate('/appeal_summary2')}
            className={
              active === 'summary2'
                ? 'pb-2 border-blue border-b-4 text-blue-dark'
                : 'pb-2 lg:border-white lg:border-b-4'
            }
          >
            <Link to="/" className="">
              Summary 2
            </Link>
          </li>
        </ul>
      ) : null}
      <Link className="flex items-center gap-3 pb-2" to="/">
        <p className="text-sm text-black-50 font-bold">£4.342</p>
        <button className="w-32 h-auto px-4 py-3 text-center text-mont text-xs text-lblack font-bold bg-green rounded-md mt-2">
          DONATE NOW
        </button>
      </Link>
    </div>
  );
};

export default AppealFooter;
