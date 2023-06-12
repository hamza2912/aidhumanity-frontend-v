import dayjs from 'dayjs';

const MaximumTextLength = 100;

export const textTruncate = (text = '', length = MaximumTextLength) => {
  if (text?.length > length) return text.substring(0, length).concat(' . . . ');
  return text;
};

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
