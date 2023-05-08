import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

function Sidebar({ active }) {
  let navigate = useNavigate();
  const [showMenu, setshowMenu] = React.useState(false);

  if (!isMobile) {
    return (
      <div className="w-sidebar h-fit bg-white shadow-lg border-l-2 relative z-10">
        <div className="flex items-center justify-between py-5 border-b-2 px-6 h-20">
          <div className="flex items-center gap-2 w-auto">
            <img
              className="w-36"
              src="images/logo/logo_aid-humanity.svg"
              alt=""
            />
          </div>
          <div className="flex items-center gap-2 w-auto">
            <img
              className="w-4 cursor-pointer"
              src="images/icons/dashboard/icon_bars.svg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xs pl-6">MENU</p>
          <ul className="flex flex-col">
            <li
              onClick={() => navigate('/dashboard')}
              className={
                active == 'dashboard'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_dashboard.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Dashboard</p>
              </div>
            </li>
            <li
              onClick={() => navigate('/profile')}
              className={
                active == 'profile'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_user-circle.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Profile</p>
              </div>
            </li>
            {/* <li
              onClick={() => navigate('/fundraising')}
              className={
                active == 'funds'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_fundraising.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Fundraising</p>
              </div>
            </li> */}
            <li
              onClick={() => navigate('/security')}
              className={
                active == 'security'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_user-circle.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Security</p>
              </div>
            </li>
            <a href="/donation_history">
              <li
                // onClick={() => navigate('/donation_history')}
                className={
                  active == 'donation'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-white'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_history.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Donation History</p>
                </div>
              </li>
            </a>
            {/* <li
              onClick={() => navigate('/monthly_donations')}
              className={
                active == 'monthly'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_monthly-donations.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Monthly donations</p>
              </div>
            </li> */}
            <li
              onClick={() => navigate('/payment_methods')}
              className={
                active == 'payment'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_cash-wallet.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Payment methods</p>
              </div>
            </li>
            <li
              onClick={() => navigate('/preferences')}
              className={
                active == 'prefer'
                  ? 'px-6 cursor-pointer border-l-4 border-blue'
                  : 'px-6 cursor-pointer border-l-4 border-white'
              }
            >
              <div className="flex gap-2 py-3 border-b text-black">
                <img
                  src="images/icons/dashboard/icon_sliders-h-circle.svg"
                  className="w-4"
                  alt=""
                />
                <p className="text-xs font-medium">Preferences</p>
              </div>
            </li>
          </ul>
          <div className="px-6">
            <div className="bg-blue rounded-xl px-2 py-4 mt-14 relative">
              <img src="/Icons/yellow_star_large.svg" className='absolute right-[10%] bottom-[10%]'></img>
              <img src="/Icons/yellow_star_small.svg" className='absolute left-[55%] top-[5%]'></img>
              <img src="/Icons/red_bar.svg" className='absolute left-[20%] top-[15%]'></img>
              <img src="/Icons/pink_bar.svg" className='absolute right-[10%]'></img>

              <div className="flex gap-1">
                <div className="w-10 h-10 rounded-full border-2 border-white">
                  <img src="images/icons/dashboard/badge_silver.svg" alt="" />
                </div>
                <div className="flex flex-col text-white">
                  <p className="text-xs">Level Silver</p>
                  <p className="text-vs">
                    total donation: <span className="font-medium">£834.00</span>
                  </p>
                  <p className="text-vs">
                    until level gold still remains: £176.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-xs mx-auto absolute bottom-5 left-6">
            © 2022 Aid Humanity. All rights reserved.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-sidebar h-fit bg-white shadow-lg border-l-2 relative z-10">
        <div className="flex items-center justify-between py-5 border-b-2 px-6 h-20">
          <div className="flex items-center gap-2 w-auto">
            <img
              className="w-36"
              src="images/logo/logo_aid-humanity.svg"
              alt=""
            />
          </div>
          <div className="flex items-center gap-2 w-auto">
            <img
              onClick={() => navigate('/appeal')}
              className="w-5"
              src="images/icons/dashboard/icon_plus-cirle.svg"
              alt=""
            />
            <img
              onClick={() => navigate('/appeal')}
              className="w-5"
              src="images/icons/dashboard/icon_user-circle.svg"
              alt=""
            />
            <img
              onClick={() => setshowMenu(true)}
              className="w-4 cursor-pointer"
              src="images/icons/dashboard/icon_bars.svg"
              alt=""
            />
          </div>
        </div>
        {showMenu ? (
          <div className="w-full bg-gray h-screen fixed top-0 left-0">
            <p className="text-sm font-semibold pl-6 flex items-center gap-2 bg-white py-6">
              <img
                onClick={() => setshowMenu(false)}
                className="w-3 h-3"
                src="images/icons/dashboard/angle-left.svg"
                alt=""
              />{' '}
              MENU
            </p>
            <ul className="flex flex-col gap-4 mt-4 bg-gray">
              <li
                onClick={() => navigate('/dashboard')}
                className={
                  active == 'dashboard'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_dashboard.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Dashboard</p>
                </div>
              </li>
              <li
                onClick={() => navigate('/profile')}
                className={
                  active == 'profile'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_user-circle.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Profile</p>
                </div>
              </li>
              <li
                onClick={() => navigate('/fundraising')}
                className={
                  active == 'funds'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_fundraising.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Fundraising</p>
                </div>
              </li>
              <li
                onClick={() => navigate('/security')}
                className={
                  active == 'security'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_user-circle.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Security</p>
                </div>
              </li>
              <li
                className={
                  active === 'donation'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
                onClick={() => navigate('/donation_history')}
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_history.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Donation History</p>
                </div>
              </li>
              <li
                onClick={() => navigate('/monthly_donations')}
                className={
                  active == 'monthly'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_monthly-donations.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Monthly donations</p>
                </div>
              </li>
              <li
                onClick={() => navigate('/payment_methods')}
                className={
                  active == 'payment'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_cash-wallet.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Payment methods</p>
                </div>
              </li>
              <li
                onClick={() => navigate('/preferences')}
                className={
                  active == 'prefer'
                    ? 'px-6 cursor-pointer border-l-4 border-blue'
                    : 'px-6 cursor-pointer border-l-4 border-grey'
                }
              >
                <div className="flex gap-2 py-3 border-b text-black">
                  <img
                    src="images/icons/dashboard/icon_sliders-h-circle.svg"
                    className="w-4"
                    alt=""
                  />
                  <p className="text-xs font-medium">Preferences</p>
                </div>
              </li>
            </ul>
            <div className="px-6 border-gray">
              <div className="bg-blue rounded-xl px-3 py-4 mt-14">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full border-2 border-white">
                    <img src="images/icons/dashboard/badge_silver.svg" alt="" />
                  </div>
                  <div className="flex flex-col text-white">
                    <p className="text-sm">Level Silver</p>
                    <p className="text-xs">total donation: £834.00</p>
                    <p className="text-vs">
                      until level gold still remains: £176.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 justify-between flex gap-2 py-5 text-black border-b">
              <p className="text-xs font-medium">Languages</p>
              <i className="fa-solid fa-arrow-right text-blue text-sm lg:hidden"></i>
            </div>
            <p className="text-gray-400 text-xs mx-auto absolute bottom-5 left-6">
              © 2022 Aid Humanity. All rights reserved.
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Sidebar;
