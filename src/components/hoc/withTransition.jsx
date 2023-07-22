import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Transition.css'; // import your CSS file

const WithTransition = Component => {
  return ({ show, ...props }) => (
    <CSSTransition in={show} timeout={200} classNames="slide" unmountOnExit>
      <Component {...props} />
    </CSSTransition>
  );
};

export default WithTransition;
