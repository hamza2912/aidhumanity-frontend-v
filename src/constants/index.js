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
