import React, { useState, useMemo } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from '@react-google-maps/api';
import { GOOGLE_MAPS_STYLES, getDonationTag } from '../../constants';
import { SERVER_URL } from '../../services/config';
import LinearProgressBar from '../../pages/Dashboard/LinearProgressBar';
import { currencyFormatter } from '../../utils';
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const containerStyle = {
  width: '100%',
  height: '80vh',
};

const containerStyleMobile = {
  width: '100%',
  height: '100vh',
};

const markerIcon = '/Icons/icon_current-location.svg'; // replace with your logo URL
const aidHumanityLogo = '/logo/logo_aid-humanity-icon.svg';

const isValidCoordinate = (lat, lng) => {
  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
};

const HomeMap = ({ appeals = [] }) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const navigate = useNavigate();
  const center = useMemo(
    () => ({ lat: 42.276065877022994, lng: -104.41539073362406 }),
    []
  );

  const [selectedAppeal, setSelectedAppeal] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC73xHHxrMBcia1YDog0PbhlpOtLDeb97M',
  });

  const validAppeals = appeals.filter(({ latitude, longitude }) =>
    isValidCoordinate(latitude, longitude)
  );

  const onMapLoad = map => {
    if (validAppeals.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      validAppeals.forEach(({ latitude, longitude }) =>
        bounds.extend({ lat: latitude, lng: longitude })
      );
      map.fitBounds(bounds);

      setTimeout(() => {
        setMapLoaded(true);
      }, 2000);
    }
  };

  return (
    <div>
      {!isLoaded || validAppeals.length === 0 ? (
        <h2>Loading ...</h2>
      ) : (
        <GoogleMap
          mapContainerStyle={isMobile ? containerStyleMobile : containerStyle}
          center={center}
          zoom={isMobile ? 3 : 7}
          defaultOptions={{ styles: GOOGLE_MAPS_STYLES }}
          options={{
            zoomControl: true,
            minZoom: 3,

            zoomControlOptions: {
              position: window.google.maps.ControlPosition.TOP_RIGHT, // Change placement to top-right
            },
            streetViewControl: false,
            fullscreenControl: true,
            fullscreenControlOptions: {
              position: window.google.maps.ControlPosition.BOTTOM_RIGHT,
            },
            mapTypeControl: false,
            styles: GOOGLE_MAPS_STYLES,
          }}
          onLoad={onMapLoad}
        >
          {mapLoaded &&
            validAppeals.map((appeal, key) => (
              <Marker
                key={`markers-${appeal.id}`}
                position={{
                  lat: appeal.latitude,
                  lng: appeal.longitude,
                }}
                icon={markerIcon}
                onClick={() => setSelectedAppeal(appeal)}
                animation={window.google.maps.Animation.DROP}
              />
            ))}
          {selectedAppeal && (
            <InfoWindow
              position={{
                lat: selectedAppeal.latitude,
                lng: selectedAppeal.longitude,
              }}
              onCloseClick={() => setSelectedAppeal(null)}
            >
              <div className="map-div">
                <div className="w-full flex gap-4">
                  <div className="w-1/2 relative">
                    {selectedAppeal.cover_image ? (
                      <img
                        className="w-full h-full object-cover rounded"
                        src={SERVER_URL + selectedAppeal.cover_image}
                        alt=""
                      />
                    ) : (
                      <div className="w-full h-full rounded bg-palepink flex justify-center items-center label-image">
                        <img
                          className="w-full h-full object-contain rounded-md marker-image h-100%"
                          src={aidHumanityLogo}
                          alt=""
                        />
                      </div>
                    )}
                    <div className="absolute  flex flex-col space-x-[-1rem] rtl:space-x-reverse absolute top-0 justify-center bottom-0 my-auto -right-4">
                      {selectedAppeal.appeal_tags?.map((tag, index) => (
                        <div
                          key={index}
                          className="relative cursor-pointer transition-transform transform-gpu group-hover:z-10"
                          style={{
                            zIndex: index,
                            marginTop: index !== 0 ? '-0.6rem' : '0',
                          }}
                        >
                          <div
                            className="bg-yellow rounded-full h-6 w-6 font-semibold text-xs transition-transform transform-gpu group-hover:scale-110"
                            style={{
                              border: '1px solid #00ade9', // Blue border color
                              borderRadius: '50%',
                              overflow: 'hidden', // Ensure the circle shape
                            }}
                          >
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              {getDonationTag(tag)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs absolute top-0 bottom-0 my-auto -right-4">
                      <span className="cursor-default">
                        {getDonationTag(selectedAppeal.appeal_tag)}
                      </span>
                    </div> */}
                  </div>

                  <div className="w-1/2 flex flex-col p-4">
                    <h2 className="text-sm font-bold text-black-50 h-8">
                      {selectedAppeal.title}
                    </h2>
                    <p className="text-vs text-gray-300 font-medium mt-2">
                      {selectedAppeal.category?.name}
                    </p>
                    <div className="mt-2">
                      <LinearProgressBar
                        progress={(
                          (selectedAppeal.raised_amount * 100) /
                          selectedAppeal.targeted_amount
                        ).toFixed()}
                        textPosition="bottom"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex gap-2 items-center w-auto">
                        <p className="text-xs lg:text-sm font-semibold text-gray-300">
                          <span className="text-blue">
                            {currencyFormatter(
                              selectedAppeal.raised_amount / 100 || 0
                            )}
                          </span>
                          {' / '}
                          {currencyFormatter(
                            selectedAppeal.targeted_amount / 100 || 0
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="text-base text-black-50 font-bold text-mont bg-white rounded-b-2xl cursor-pointer">
                      <div
                        className="flex flex-row justify-between mt-4 text-sm"
                        onClick={() => navigate(`/appeal/${selectedAppeal.id}`)}
                      >
                        View More
                        <Link to={`/appeal/${selectedAppeal.id}`}>
                          <i className="fa-solid fa-arrow-right text-blue" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* <div
                      className="flex justify-center shadow-lg rounded-2xl cursor-pointer"
                    >
                      <div className="w-1/2 h-auto relative">
                        <img
                          className="w-full h-full rounded-l-2xl object-cover	"
                          src={SERVER_URL + appeal.cover_image}
                          alt={appeal.title}
                        />
                        <button
                          id="cursor-pointer"
                          className="absolute left-0 right-0 w-4/5 mx-auto bottom-4 text-[10px] font-semibold text-white text-mont bg-sblue rounded-lg p-3"
                          onClick={() => {
                            setSelectedAppealId(appeal.id);
                            setshowDonateModal(true);
                            console.log('showDonateModal:', showDonateModal);
                          }}
                        >
                          DONATE NOW
                        </button>
                      </div>
                      <div className="w-1/2 h-auto bg-white flex flex-col justify-between relative p-8 rounded-r-2xl">
                        <Link to={`/appeal/${appeal.id}`}>
                          <h2 className="text-xs text-mont font-bold text-black">
                            {appeal.title}
                          </h2>
                        </Link>
                        <Link
                          className="text-sblue text-lg absolute bottom-7 left-8"
                          to={`/appeal/${appeal.id}`}
                        >
                          <img src="/Icons/icon_arrow_right_sblue.svg"></img>
                        </Link>
                        <div className="absolute -left-3 top-[45%] bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs">
                          <span className="cursor-default">
                            {getDonationTag(appeal.appeal_tag)}
                          </span>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
};

export default HomeMap;
