import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { subsDuration } from '../../constants';
import { Link } from 'react-router-dom';

const DonationHistoryCarousel = ({ donationsPair, user }) => {
  useEffect(() => {
    window.$('.w-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 1,
          nav: true,
          loop: false,
          margin: 20,
        },
      },
    });
  }, []);

  return (
    <div className="w-carousel owl-carousel owl-theme donation-history mx-auto">
      {donationsPair.map((pair, index) => (
        <div
          className="w-full mt-8 flex flex-col gap-4 item"
          key={`donation-pair${index}`}
        >
          <div className="w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="flex gap-2 items-center text-blue-dark text-base font-semibold">
                <img
                  src="images/icons/dashboard/icon_user-circle.svg"
                  className="w-4"
                  alt=""
                />{' '}
                {user?.first_name + ' ' + user?.last_name}
              </h1>
              <h2 className="text-sm font-bold text-black-50">
                {pair[0].cause_title}
              </h2>
              <p className="text-vs text-gray-300 font-medium">
                {pair[0].category}
              </p>
              <p className="text-lg text-blue font-semibold mt-2">
                £{pair[0].amount}
              </p>
            </div>
            <div className="flex flex-col lg:items-end">
              <div className="flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50">
                <p className="">
                  from <span className="font-semibold">Great Britain</span>
                </p>
                <p className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15.115"
                    viewBox="0 0 17 15.115"
                  >
                    <g id="icon_calendar-clock" transform="translate(0.5 0.5)">
                      <g id="Group_2511" data-name="Group 2511">
                        <g id="Group_15380" data-name="Group 15380">
                          <line
                            id="Line_297"
                            data-name="Line 297"
                            y2="2.441"
                            transform="translate(3.494)"
                            fill="none"
                            stroke="#1D1D1D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <line
                            id="Line_298"
                            data-name="Line 298"
                            y2="2.441"
                            transform="translate(9.541)"
                            fill="none"
                            stroke="#1D1D1D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <line
                            id="Line_299"
                            data-name="Line 299"
                            x2="12.688"
                            transform="translate(0 4.882)"
                            fill="none"
                            stroke="#1D1D1D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                      <rect
                        id="Rectangle_3594"
                        data-name="Rectangle 3594"
                        width="1.835"
                        height="1.835"
                        transform="translate(2.172 6.932)"
                        fill="none"
                        stroke="#1D1D1D"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <rect
                        id="Rectangle_3595"
                        data-name="Rectangle 3595"
                        width="1.835"
                        height="1.835"
                        transform="translate(5.676 6.932)"
                        fill="none"
                        stroke="#1D1D1D"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <g
                        id="Group_2513"
                        data-name="Group 2513"
                        transform="translate(0 1.33)"
                      >
                        <g id="Group_2527" data-name="Group 2527">
                          <path
                            id="Path_7197"
                            data-name="Path 7197"
                            d="M10.069,12.506A3.466,3.466,0,0,1,13.534,9.04a3.53,3.53,0,0,1,.45.032V4.864a1.677,1.677,0,0,0-1.677-1.677H2.677A1.677,1.677,0,0,0,1,4.864v8.3a1.676,1.676,0,0,0,1.677,1.677h8.3A3.449,3.449,0,0,1,10.069,12.506Z"
                            transform="translate(-1 -3.187)"
                            fill="none"
                            stroke="#1D1D1D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <path
                            id="Path_7199"
                            data-name="Path 7199"
                            d="M19.374,12.809a3.466,3.466,0,1,1-3.466,3.466A3.465,3.465,0,0,1,19.374,12.809Z"
                            transform="translate(-6.839 -6.956)"
                            fill="none"
                            stroke="#1D1D1D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                          <path
                            id="Path_7200"
                            data-name="Path 7200"
                            d="M22.7,18.156H21.052V16.272"
                            transform="translate(-8.854 -8.312)"
                            fill="none"
                            stroke="#1D1D1D"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  {dayjs(pair[0].created_at).format('MMM DD, YYYY HH:mm')}
                </p>
              </div>
              <div className="flex">
                {pair[0].subscription && (
                  <span className="text-white border-lblue border-2 m-1.5 rounded-2xl text-0.75 py-0.5 px-1 border-sblue bg-sblue">
                    {subsDuration[pair[0].subscription]}
                  </span>
                )}
                <svg
                  className="w-4 mt-2 hidden lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.017"
                  height="19.85"
                  viewBox="0 0 25.017 19.85"
                >
                  <g id="icon_eye" transform="translate(0.75 0.75)">
                    <ellipse
                      id="Ellipse_293"
                      data-name="Ellipse 293"
                      cx="11.758"
                      cy="9.175"
                      rx="11.758"
                      ry="9.175"
                      fill="none"
                      stroke="#00ADE9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <ellipse
                      id="Ellipse_294"
                      data-name="Ellipse 294"
                      cx="5.643"
                      cy="5.643"
                      rx="5.643"
                      ry="5.643"
                      transform="translate(6.199 3.414)"
                      fill="none"
                      stroke="#00ADE9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_7495"
                      data-name="Path 7495"
                      d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411"
                      transform="translate(-245.475 -248.127)"
                      fill="none"
                      stroke="#00ADE9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex justify-between w-2/5 mt-3">
                <Link className="text-sm font-bold text-gray-500" to="">
                  EDIT
                </Link>
                <div className="h-4 border-l-2"></div>
                <Link className="text-sm font-bold text-gray-500" to="">
                  VIEW
                </Link>
              </div>
            </div>
          </div>
          {pair[1] && (
            <div className="w-full rounded-xl border border-gray-400 p-6 flex lg:flex-row flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="flex gap-2 items-center text-blue-dark text-base font-semibold">
                  <img
                    src="images/icons/dashboard/icon_user-circle.svg"
                    className="w-4"
                    alt=""
                  />{' '}
                  {user.first_name + ' ' + user.last_name}
                </h1>
                <h2 className="text-sm font-bold text-black-50">
                  {pair[1].cause_title}
                </h2>
                <p className="text-vs text-gray-300 font-medium">
                  {pair[1].category}
                </p>
                <p className="text-lg text-blue font-semibold mt-2">
                  £{pair[1].amount}
                </p>
              </div>
              <div className="flex flex-col lg:items-end">
                <div className="flex lg:gap-4 gap-2 items-center lg:text-sm text-xs text-black-50">
                  <p className="">
                    from <span className="font-semibold">Great Britain</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15.115"
                      viewBox="0 0 17 15.115"
                    >
                      <g
                        id="icon_calendar-clock"
                        transform="translate(0.5 0.5)"
                      >
                        <g id="Group_2511" data-name="Group 2511">
                          <g id="Group_15380" data-name="Group 15380">
                            <line
                              id="Line_297"
                              data-name="Line 297"
                              y2="2.441"
                              transform="translate(3.494)"
                              fill="none"
                              stroke="#1D1D1D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_298"
                              data-name="Line 298"
                              y2="2.441"
                              transform="translate(9.541)"
                              fill="none"
                              stroke="#1D1D1D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            />
                            <line
                              id="Line_299"
                              data-name="Line 299"
                              x2="12.688"
                              transform="translate(0 4.882)"
                              fill="none"
                              stroke="#1D1D1D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                        <rect
                          id="Rectangle_3594"
                          data-name="Rectangle 3594"
                          width="1.835"
                          height="1.835"
                          transform="translate(2.172 6.932)"
                          fill="none"
                          stroke="#1D1D1D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                        />
                        <rect
                          id="Rectangle_3595"
                          data-name="Rectangle 3595"
                          width="1.835"
                          height="1.835"
                          transform="translate(5.676 6.932)"
                          fill="none"
                          stroke="#1D1D1D"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                        />
                        <g
                          id="Group_2513"
                          data-name="Group 2513"
                          transform="translate(0 1.33)"
                        >
                          <g id="Group_2527" data-name="Group 2527">
                            <path
                              id="Path_7197"
                              data-name="Path 7197"
                              d="M10.069,12.506A3.466,3.466,0,0,1,13.534,9.04a3.53,3.53,0,0,1,.45.032V4.864a1.677,1.677,0,0,0-1.677-1.677H2.677A1.677,1.677,0,0,0,1,4.864v8.3a1.676,1.676,0,0,0,1.677,1.677h8.3A3.449,3.449,0,0,1,10.069,12.506Z"
                              transform="translate(-1 -3.187)"
                              fill="none"
                              stroke="#1D1D1D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            />
                            <path
                              id="Path_7199"
                              data-name="Path 7199"
                              d="M19.374,12.809a3.466,3.466,0,1,1-3.466,3.466A3.465,3.465,0,0,1,19.374,12.809Z"
                              transform="translate(-6.839 -6.956)"
                              fill="none"
                              stroke="#1D1D1D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            />
                            <path
                              id="Path_7200"
                              data-name="Path 7200"
                              d="M22.7,18.156H21.052V16.272"
                              transform="translate(-8.854 -8.312)"
                              fill="none"
                              stroke="#1D1D1D"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    {dayjs(pair[1].created_at).format('MMM DD YYYY HH:mm')}
                  </p>
                </div>
                {pair[0].subscription && (
                  <div className="flex">
                    <span className="text-white border-lblue border-2 m-1.5 rounded-2xl text-0.75 py-0.5 px-1 border-sblue bg-sblue">
                      {subsDuration[pair[0].subscription]}
                    </span>
                    <svg
                      className="w-4 mt-2 hidden lg:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.017"
                      height="19.85"
                      viewBox="0 0 25.017 19.85"
                    >
                      <g id="icon_eye" transform="translate(0.75 0.75)">
                        <ellipse
                          id="Ellipse_293"
                          data-name="Ellipse 293"
                          cx="11.758"
                          cy="9.175"
                          rx="11.758"
                          ry="9.175"
                          fill="none"
                          stroke="#00ADE9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <ellipse
                          id="Ellipse_294"
                          data-name="Ellipse 294"
                          cx="5.643"
                          cy="5.643"
                          rx="5.643"
                          ry="5.643"
                          transform="translate(6.199 3.414)"
                          fill="none"
                          stroke="#00ADE9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <path
                          id="Path_7495"
                          data-name="Path 7495"
                          d="M257.078,259.6h.238a2.438,2.438,0,1,0-2.438-2.44h0a3.007,3.007,0,0,0,.029.411"
                          transform="translate(-245.475 -248.127)"
                          fill="none"
                          stroke="#00ADE9"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </svg>
                  </div>
                )}
                <div className="flex justify-between w-2/5 mt-3">
                  <Link className="text-sm font-bold text-gray-500" to="">
                    EDIT
                  </Link>
                  <div className="h-4 border-l-2"></div>
                  <Link className="text-sm font-bold text-gray-500" to="">
                    VIEW
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DonationHistoryCarousel;
