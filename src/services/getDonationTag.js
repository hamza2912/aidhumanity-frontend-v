import { AppealTags } from '../constants';

const getDonationTag = appealTag => {
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

export default getDonationTag;