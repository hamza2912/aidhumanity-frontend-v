const MaximumTextLength = 120;
export const textTruncate = text =>
  text.substring(0, MaximumTextLength).concat(' . . . ');
