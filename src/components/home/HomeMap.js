import React, { useState, useMemo } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  useLoadScript,
} from '@react-google-maps/api';
import { GOOGLE_MAPS_STYLES, getDonationTag } from '../../constants';
import { SERVER_URL } from '../../services/config';
import LinearProgressBar from '../../pages/Dashboard/LinearProgressBar';
import { currencyFormatter } from '../../utils';
import { Link } from 'react-router-dom';

const containerStyle = {
  width: '100vw',
  height: '60vh',
};
const markerIcon = '/Icons/icon_current-location.svg'; // replace with your logo URL

const HomeMap = ({ appeals = [] }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const center = useMemo(
    () => ({ lat: 42.276065877022994, lng: -104.41539073362406 }),
    []
  );

  const [selectedAppeal, setSelectedAppeal] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC73xHHxrMBcia1YDog0PbhlpOtLDeb97M',
  });

  const onMapLoad = map => {
    if (appeals.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      appeals.forEach(({ latitude, longitude }) =>
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
      {!isLoaded || appeals.length === 0 ? (
        <h2>Loading ...</h2>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          defaultOptions={{ styles: GOOGLE_MAPS_STYLES }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: GOOGLE_MAPS_STYLES,
          }}
          onLoad={onMapLoad}
        >
          {mapLoaded &&
            appeals.map((appeal, key) => (
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
                <div className="flex lg:flex-row flex-col justify-between">
                  <div className="w-full flex gap-4 relative">
                    <div className="map-img">
                      {selectedAppeal.cover_image ? (
                        <img
                          className="w-full h-auto object-cover rounded label-image"
                          src={SERVER_URL + selectedAppeal.cover_image}
                          alt=""
                        />
                      ) : (
                        <div className="w-full h-auto rounded bg-lgray flex justify-center items-center label-image opacity-30">
                          <img
                            className="w-full h-auto object-contain rounded-md marker-image h-100%"
                            src="/images/blue-marker.png"
                            alt=""
                          />
                        </div>
                      )}
                      <div className="bg-yellow flex justify-center items-center rounded-full h-6 w-6 font-semibold text-xs absolute top-0 bottom-0 my-auto left-1/3 ml-3">
                        <span className="cursor-default">
                          {getDonationTag(selectedAppeal.appeal_tag)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col p-4 sm:w-100">
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
                        <div className="flex flex-row justify-between mt-4">
                          View More
                          <Link to={`/appeals/${selectedAppeal.id}`}>
                            <i className="fa-solid fa-arrow-right text-blue" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
