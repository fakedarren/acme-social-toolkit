import React from 'react';

import shares from '../../../../../data/shares.json';
import { useStore } from '../../../store';

import { SET_COLOR } from '../../../utils/constants';

import './Swatches.scss';

const Swatches = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="tool-component tool-swatches">
      <ul className="tool-swatch-list">
        {shares[state.share - 1].variations.map((variation, index) => (
          <li className="tool-swatch">
            <button
              className={`
                tool-swatch-button
                tool-swatch-${variation.swatch.join('-')}
                ${
                  index + 1 == state.color ? 'tool-swatch-button--selected' : ''
                }
              `}
              // className={`tool-swatch-button}`}
              onClick={() => dispatch({ type: SET_COLOR, color: index + 1 })}
              type="button"
            >
              <span className="tool-swatch-label">
                {variation.swatch.join('-')}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Swatches;
