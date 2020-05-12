import React from 'react';

import Logo from './logo.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Acme Inc" className="header-logo" />
    </header>
  );
};

export default Header;
