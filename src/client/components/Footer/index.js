import React from 'react';

import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <p>
          &copy; {year} SITE_NAME. See our{' '}
          <a href="PRIVACY_POLICY_URL">privacy policy.</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
