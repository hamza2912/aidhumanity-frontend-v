// useCloseSidebars.js
import { useDispatch } from 'react-redux';
import {
  setSummarySidebar,
  setCheckoutSidebar,
  setProjectSidebar,
  setRegularSidebar,
  setSubscriptionSidebar,
} from '../redux/common/CommonSlice';

const useCloseSidebars = () => {
  const dispatch = useDispatch();

  const closeSidebars = () => {
    dispatch(setSummarySidebar(false));
    dispatch(setCheckoutSidebar(false));
    dispatch(setProjectSidebar(false));
    dispatch(setRegularSidebar(false));
    dispatch(setSubscriptionSidebar(false));
  };

  return closeSidebars;
};

export default useCloseSidebars;
