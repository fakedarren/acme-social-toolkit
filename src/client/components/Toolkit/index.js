import React from 'react';

import Actions from './Actions';
import Choice from './Choice';
import Shares from './Shares';
import Swatches from './Swatches';

const Toolkit = () => {
  return (
    <>
      <div className="tool-component-wrapper">
        <Shares />
        <Swatches />
      </div>
      <div className="tool-component-wrapper">
        <Choice />
        <Actions />
      </div>
    </>
  );
};

export default Toolkit;
