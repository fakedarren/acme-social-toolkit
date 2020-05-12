import React from 'react';

import actions from '../../../../data/actions.json';
import {
  SHARING_CANCEL,
  SHARE_DOMAIN,
  SHARE_DOMAIN_PRETTY,
} from '../../utils/constants';
import { useStore } from '../../store';

import './Preview.scss';

/* IMPORTANT
 *
 * To beat AdBlock, you need to:
 *
 * - Use the weird CSS class names
 * - Use buttons and JS to link, instead of using just <a href> links
 */

const redirectTo = (url) => {
  window.location = url;
};

const Preview = () => {
  const { state, dispatch } = useStore();

  const details = actions[state.action - 1];
  const share = details.share;
  const url = `${SHARE_DOMAIN}/${state.share}/${state.color}/${details.type}`;

  const encoded = {
    description: encodeURIComponent(details.description),
    url: encodeURIComponent(url),
  };

  return (
    <div className="preview">
      <div className="container">
        <button
          className="preview-cancel"
          onClick={() => dispatch({ type: SHARING_CANCEL })}
          type="button"
        >
          &lt; Cancel and choose another type of share
        </button>
      </div>
      <div className="container">
        <div className="preview-wrapper">
          <a className="preview-share" href={url} target="_blank">
            <img
              alt="TODO"
              className="preview-share-image"
              src={`/assets/shares/${state.share}/${state.color}.png`}
            />
            <div className="preview-share-text">
              <p className="preview-share-url">{SHARE_DOMAIN_PRETTY}</p>
              <p className="preview-share-headline">{share.headline}</p>
              <p className="preview-share-description">{share.description}</p>
            </div>
          </a>
          <ul className="share-options">
            <li className="share-option">
              <button
                className="share-l_i_n_k share-l_i_n_k--facebook"
                onClick={() =>
                  redirectTo(
                    `https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`
                  )
                }
                type="button"
              >
                Share on Facebook
              </button>
            </li>
            <li className="share-option">
              <button
                className="share-l_i_n_k share-l_i_n_k--twitter"
                onClick={() =>
                  redirectTo(
                    `https://twitter.com/intent/tweet?text=${encoded.description}&amp;url=${encoded.url}`
                  )
                }
                type="button"
              >
                Share on Twitter
              </button>
            </li>
            <li className="share-option">
              <button
                className="share-l_i_n_k share-l_i_n_k--whatsapp"
                onClick={() =>
                  redirectTo(
                    `whatsapp://send?text=${encoded.description} - ${encoded.url}`
                  )
                }
                type="button"
              >
                Share on WhatsApp
              </button>
            </li>
            <li className="share-option">
              <a
                className="share-l_i_n_k share-l_i_n_k--download"
                download="share.png"
                href={`/assets/shares/${state.share}/${state.color}.png`}
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Preview;
