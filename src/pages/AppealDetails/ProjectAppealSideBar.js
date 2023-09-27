import React, { useState } from 'react';
import WithTransition from '../../components/hoc/withTransition';
import { textTruncate } from '../../constants';
import { currencyFormatter } from '../../utils';
import CartService from '../../services/cart';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/auth/userSlice';
import {
  setCheckoutSidebar,
  setProjectSidebar,
  setSummarySidebar,
} from '../../redux/common/CommonSlice';
import ButtonLoader from '../../components/common/ButtonLoader';

const PLAQUE_LIMIT = 27;

const ProjectAppealSideBar = ({ appeal, campaignId }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.session);

  const [donationPackages, setDonationPackages] = useState([{}]);
  const [selectedPacakges, setSelectedPackages] = useState([
    {
      package: appeal.appeal_packages?.[0] || {},
      plaque: '',
    },
  ]);

  const addNewPackage = () => {
    setDonationPackages([...donationPackages, {}]);
    setSelectedPackages([
      ...selectedPacakges,
      {
        package: appeal.appeal_packages[0] ?? {},
        plaque: '',
      },
    ]);
  };

  const handlePlaqueChange = (event, index) => {
    const updatedPlaque = event.target.value;

    setSelectedPackages(prevPackages => {
      return prevPackages.map((pkg, idx) => {
        if (idx === index) {
          return { ...pkg, plaque: updatedPlaque };
        } else {
          return pkg;
        }
      });
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    const requests = donationPackages.map((_pkg, index) => {
      const selectedPackage = selectedPacakges[index];
      const amount = selectedPackage.package.amount;
      let note = `Package: ${
        selectedPackage.package.title
      }, Amount: ${amount}, ${
        appeal.plaque ? `Plaque Name: ${selectedPackage.plaque}` : ''
      }`;

      const payload = {
        cart: {
          donations_attributes: {
            id: null,
            appeal_id: appeal.id,
            campaign_id: campaignId,
            amount_cents: amount * 100,
            note: note,
          },
        },
      };

      return CartService.updateCart(payload, !!user); // Return promise
    });
    try {
      const responses = await Promise.all(requests);
      if (responses) {
        dispatch(setCart(responses[responses.length - 1]));
        dispatch(setSummarySidebar(true));
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-80 w-11/12 h-full bg-sblue fade-in transition ease-in-out">
      <div className="w-full h-auto flex justify-between p-4 border-b-2 border-l2black">
        <h2 className="text-mont text-nblue text-lg font-bold">
          Add your donation
        </h2>
        <button
          className="text-nblue text-lg"
          onClick={() => {
            dispatch(setProjectSidebar(false));
            dispatch(setSummarySidebar(false));
            dispatch(setCheckoutSidebar(false));
          }}
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
          {donationPackages.map((_pkg, index) => (
            <div key={`appeal-packages-list-${index}`}>
              <div className="w-full h-auto p-2 flex mt-4 justify-between items-center border-2 border-owhite rounded-lg">
                <select
                  className="h-auto flex justify-around items-center text-base text-mont font-semibold text-black-50 focus:outline-none w-inherit"
                  onChange={event => {
                    const selectedPkgId = event.target.value;
                    const selectedPkg = appeal.appeal_packages.find(
                      pkg => parseInt(pkg.id) === parseInt(selectedPkgId)
                    );
                    if (selectedPacakges.length === 1) {
                      setSelectedPackages([
                        {
                          package: selectedPkg,
                          plaque: selectedPacakges[0].plaque,
                        },
                      ]);
                    } else {
                      setSelectedPackages([
                        ...selectedPacakges,
                        { package: selectedPkg },
                      ]);
                    }
                  }}
                >
                  <i className="fa-solid fa-angle-down"></i>
                  {appeal.appeal_packages.map((pkg, _i) => (
                    <option key={pkg.id} value={pkg.id}>{`${
                      pkg.title
                    } in ${currencyFormatter(pkg.amount)}`}</option>
                  ))}
                </select>
              </div>
              {appeal.plaque && (
                <div>
                  <h3 className="text-mont text-sm font-bold text-lblack mt-4">
                    Name on Plaque
                  </h3>
                  <p className="text-mont text-xs text-l2black mt-2">
                    Please provide the name(s) exactly as you’d like it to
                    appear on the plaque.
                  </p>
                  <input
                    className="w-full h-auto p-2 flex mt-4 justify-between border border-owhite rounded-lg text-mont text-dgray text-xs font-medium"
                    type="text"
                    placeholder="Name on Plaque"
                    value={selectedPacakges[index]?.plaque || ''}
                    onChange={e =>
                      selectedPacakges[index]?.plaque.length <= PLAQUE_LIMIT &&
                      e.target.value.length <= PLAQUE_LIMIT
                        ? handlePlaqueChange(e, index)
                        : null
                    }
                  />
                  {selectedPacakges[index]?.plaque.length ||
                  0 < PLAQUE_LIMIT ? (
                    <p className="text-mont text-xs text-gray mt-2">
                      {PLAQUE_LIMIT - selectedPacakges[index]?.plaque.length ||
                        0}{' '}
                      characters left
                    </p>
                  ) : (
                    <p className="text-mont text-xs text-red mt-2">
                      <span>
                        <b>Must be 0 - 24 alphabats</b>
                      </span>
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
          <button
            className="w-full h-auto flex p-4 border-2 border-nblue rounded-lg mt-4 text-mont text-xs text-nblue font-bold hover:bg-sblue hover:text-white hover:border-sblue"
            onClick={addNewPackage}
          >
            + ADD {appeal.title.toUpperCase()}
          </button>
          <ButtonLoader
            className="w-full h-auto text-center p-4 rounded-lg bg-green text-mont text-lblack text-xs font-bold mt-4"
            onClick={handleSubmit}
            loading={loading}
          >
            ADD DONATION
          </ButtonLoader>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/vectors/logo_aid-humanity-icon.svg"
          alt="logo_aid-humanity-icon"
        />
      </div>
    </div>
  );
};

export default WithTransition(ProjectAppealSideBar);
