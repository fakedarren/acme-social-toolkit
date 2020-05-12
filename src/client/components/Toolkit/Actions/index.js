import React from 'react';

import actions from '../../../../../data/actions.json';
import { useStore } from '../../../store';

import { SET_ACTION, SHARING_START } from '../../../utils/constants';

import './Actions.scss';

const Actions = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="tool-component tool-actions">
      <div className="tool-action-options">
        <ul className="tool-action-list">
          {actions.map((action, index) => (
            <li className="tool-action">
              <button
                className={`
                  tool-action-button
                  ${
                    index + 1 == state.action
                      ? 'tool-action-button--selected'
                      : ''
                  }
                `}
                onClick={() =>
                  dispatch({ type: SET_ACTION, action: index + 1 })
                }
              >
                {action.cta}
              </button>
            </li>
          ))}
        </ul>
        <p className="tool-action-description">
          {actions[state.action - 1].description}
        </p>
      </div>
      <button
        className="tool-action-choose"
        onClick={() => dispatch({ type: SHARING_START })}
      >
        Share this!
      </button>
    </div>
  );
};

export default Actions;
