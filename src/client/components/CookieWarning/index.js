import React, { useState } from 'react';

import { useCookies } from 'react-cookie';

const { COOKIE_NAME = 'social-toolkit-cookie-accepted' } = process.env;

import './CookieWarning.scss';

const CookieWarning = () => {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const [visible, setVisible] = useState(cookies[COOKIE_NAME] === undefined);

  const handleForm = (evt) => {
    evt.preventDefault();

    setCookie(COOKIE_NAME, true);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <form className="toolkit-cookie-warning" onSubmit={handleForm}>
      <div className="container">
        <p className="toolkit-cookie-warning-text">
          Privacy &amp; Cookies: This site uses cookies. By continuing to use
          this website, you agree to their use.
          <br />
          To find out more, including how to control cookies, see here:{' '}
          <a href="COOKIE_POLICY_URL">Cookie Policy</a>
        </p>
        <button className="toolkit-cookie-warning-close" type="submit">
          Close and accept
        </button>
      </div>
    </form>
  );
};

export default CookieWarning;
