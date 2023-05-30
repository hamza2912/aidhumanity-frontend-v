import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppealService from '../services/appeals';

export const useCampaignData = () => {
  const [appealData, setAppealData] = useState(null);
  const { fundraisedAppeal } = useSelector(state => state.appeal);
  const { appealId } = useParams();

  const [campaignData, setCampaignData] = useState({
    pageTitle: '',
    category: '',
    fundraisingTarget: '',
    story: '',
    categoryId: '',
    appealId: '',
    cover: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      let appeal;

      if (fundraisedAppeal) {
        appeal = fundraisedAppeal;
      } else if (localStorage.getItem('fundraised_appeal_id')) {
        const fundraisedAppealId = localStorage.getItem('fundraised_appeal_id');
        appeal = await fetchAppeal(fundraisedAppealId);
      } else {
        appeal = await fetchAppeal(appealId);
      }

      if (appeal) {
        const {
          title,
          category: { name, id },
          targeted_amount,
          story,
        } = appeal;

        setCampaignData({
          ...campaignData,
          pageTitle: title,
          category: name,
          fundraisingTarget: targeted_amount,
          story: story,
          categoryId: id,
          appealId: appeal.id,
        });
      }
    };

    fetchData();
  }, [fundraisedAppeal, appealId]);

  const fetchAppeal = async appealId => {
    const data = await AppealService.getAppeal(appealId);
    setAppealData(data);
    return data;
  };

  return { campaignData, appealData };
};
