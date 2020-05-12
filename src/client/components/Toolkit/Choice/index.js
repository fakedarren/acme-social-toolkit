import React from 'react';

import { useStore } from '../../../store';

import './Choice.scss';

const Choice = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="tool-component tool-choice">
      <div className="tool-choice-wrapper">
        <img
          src={`../../assets/shares/${state.share}/${state.color}.png`}
          className="tool-choice-image"
        />
      </div>
    </div>
  );
};

export default Choice;
