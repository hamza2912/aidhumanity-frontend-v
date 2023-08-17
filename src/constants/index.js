import dayjs from 'dayjs';

const MaximumTextLength = 100;

export const textTruncate = (text = '', length = MaximumTextLength) => {
  if (text?.length > length) return text.substring(0, length).concat(' . . . ');
  return text;
};

export const displayNumberOfDonors = 4;
export const displayNumberOfFundraisers = 4;

export const AppealTags = {
  SADHAKA: 'sadhaka',
  ZAKATH: 'zakath',
  SADHAKA_JARIYA: 'sadhaka_jariya',
};

export const convertToTitleCase = function (str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getDonationTag = appealTag => {
  switch (appealTag) {
    case AppealTags.SADHAKA:
      return 'S';
    case AppealTags.ZAKATH:
      return 'Z';
    case AppealTags.SADHAKA_JARIYA:
      return 'SJ';
    default:
      return 'SJ';
  }
};

export const chunkArray = (arr, chunkSize = 2) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export const getUrl = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    return 'http://localhost';
  } else if (env === 'production') {
    return 'https://aidhumanity.org.uk';
  }
};

export const formatDateRange = (startAt, endAt) => {
  const startDate = dayjs(startAt);
  const endDate = dayjs(endAt);

  if (endAt) {
    return `${startDate.format('D')} - ${endDate.format('D')}`;
  } else {
    return startDate.format('D');
  }
};

export const fullName = user => user.first_name + ' ' + user.last_name;

export const subsDuration = {
  week: 'Weekly',
  month: 'Monthly',
  day: 'Daily',
  'single payment': 'Single',
};

export const GOOGLE_MAPS_STYLES = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec',
      },
      {
        visibility: 'on',
      },
    ],
  },
];
