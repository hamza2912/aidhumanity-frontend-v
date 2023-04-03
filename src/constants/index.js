const MaximumTextLength = 100;
export const textTruncate = text => {
  if (text.length > MaximumTextLength)
    return text.substring(0, MaximumTextLength).concat(' . . . ');
  return text;
};
