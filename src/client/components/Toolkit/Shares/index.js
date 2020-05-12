import React from 'react';

import shares from '../../../../../data/shares.json';
import { useStore } from '../../../store';

import { SET_SHARE } from '../../../utils/constants';

import './Shares.scss';

const Shares = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="tool-component tool-shares">
      <ul className="tool-shares-list">
        {shares.map((share, index) => (
          <li className="tool-share">
            <button
              className={`
                tool-share-button
                ${index + 1 == state.share ? 'tool-share-button--selected' : ''}
              `}
              onClick={() => dispatch({ type: SET_SHARE, index: index + 1 })}
              type="button"
            >
              <img
                alt={share.name}
                className="tool-share-image"
                src={`../../assets/shares/${share.name}/1.png`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shares;
