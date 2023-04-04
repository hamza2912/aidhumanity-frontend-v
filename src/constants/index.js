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
