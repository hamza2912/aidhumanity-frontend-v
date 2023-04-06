const MaximumTextLength = 100;
export const textTruncate = (text = '', length = MaximumTextLength) => {
  if (text.length > length) return text.substring(0, length).concat(' . . . ');
  return text;
};

export const AppealTags = {
  SADHAKA: 'sadhaka',
  ZAKATH: 'zakath',
  SADHAKA_JARIYA: 'sadhaka_jariya',
};

export const convertToTitleCase = function(str) { return str.split('-') .map(word => word.charAt(0).toUpperCase() + word.slice(1)) .join(' '); }