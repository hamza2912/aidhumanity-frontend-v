import React, { useState } from 'react';
import WithTransition from '../../components/hoc/withTransition';
import { textTruncate } from '../../constants';
import { currencyFormatter } from '../../utils';
import donationService from '../../services/donations';
import { WEB_URL } from '../../services/config';

const PLAQUE_LIMIT = 27;

const ProjectAppealSideBar = ({ setShowProjectCart, appeal, campaignId }) => {
  const [plaque, setPlaque] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    appeal.appeal_packages ? appeal.appeal_packages[0] : {}
  );
  const appealId = appeal.id;

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let checkoutUrl;
      const amount = selectedPackage.amount;
      let note = `Package: ${selectedPackage.title}, Amount: ${amount}`;
      if (campaignId) {
        const { checkout_url } = await donationService.payAmount(
          amount * 100,
          `${WEB_URL}/campaign/${campaignId}?status=success`,
          `${WEB_URL}/campaign/${campaignId}?status=error`,
          appealId,
          note,
          campaignId
        );
        checkoutUrl = checkout_url;
      } else {
        const { checkout_url } = await donationService.payAmount(
          amount * 100,
          `${WEB_URL}/appeal/${appealId}?status=success`,
          `${WEB_URL}/appeal/${appealId}?status=error`,
          appealId,
          note
        );
        checkoutUrl = checkout_url;
      }
      window.location.replace(checkoutUrl);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-1/5 w-11/12 h-100vh bg-sblue">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <h2 className="text-mont text-nblue text-lg font-bold">
          Add your donation
        </h2>
        <button
          className="text-nblue text-lg"
          onClick={() => setShowProjectCart(false)}
        >
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
      <div className="w-full h-auto p-4">
        <h2 className="text-mont text-xl text-white font-bold">
          {appeal.title}
        </h2>
        <p className="text-mont text-sm text-white mt-4">
          {textTruncate(appeal.description, 200)}
        </p>
        <div className="w-full h-auto p-4 bg-white rounded-2xl mt-6">
          <button className="w-full h-auto text-center p-2 rounded-lg bg-green text-mont text-white text-xs font-bold">
            Single <br /> Payment
          </button>
          <div className="w-full h-auto p-2 flex mt-4 justify-between items-center border-2 border-owhite rounded-lg">
            <select
              className="h-auto flex justify-around items-center text-base text-mont font-semibold text-black-50 focus:outline-none w-inherit"
              onChange={event => {
                const selectedPkgId = event.target.value;
                const selectedPkg = appeal.appeal_packages.find(
                  pkg => parseInt(pkg.id) === parseInt(selectedPkgId)
                );
                setSelectedPackage(selectedPkg);
              }}
            >
              <i className="fa-solid fa-angle-down"></i>
              {appeal.appeal_packages.map((pkg, i) => (
                <option key={pkg.id} value={pkg.id}>{`${
                  pkg.title
                } in ${currencyFormatter(pkg.amount)}`}</option>
              ))}
            </select>
          </div>
          <h3 className="text-mont text-sm font-bold text-lblack mt-4">
            Name on Plaque
          </h3>
          <p className="text-mont text-xs text-l2black mt-2">
            Please provide the name(s) exactly as you’d like it to appear on the
            plaque.
          </p>
          <input
            className="w-full h-auto p-2 flex mt-4 justify-between border border-owhite rounded-lg text-mont text-dgray text-xs font-medium"
            type="text"
            placeholder="Name on Plaque"
            value={plaque}
            onChange={e =>
              plaque.length <= PLAQUE_LIMIT &&
              e.target.value.length <= PLAQUE_LIMIT
                ? setPlaque(e.target.value)
                : null
            }
          />
          {plaque.length < PLAQUE_LIMIT ? (
            <p className="text-mont text-xs text-gray mt-2">
              {PLAQUE_LIMIT - plaque.length} characters left
            </p>
          ) : (
            <p className="text-mont text-xs text-red mt-2">
              <span>
                <b>Must be 0 - 24 alphabats</b>
              </span>
            </p>
          )}
          {/* <button className="w-full h-auto flex p-4 border-2 border-nblue rounded-lg mt-4 text-mont text-xs text-nblue font-bold">
            + ADD WATER WELL
          </button> */}
          <button
            className="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4"
            onClick={handleSubmit}
          >
            {loading ? 'Donating ...' : 'ADD DONATION'}
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/logo/logo_aid-humanity-icon.svg"
          alt="logo_aid-humanity-icon"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default WithTransition(ProjectAppealSideBar);
