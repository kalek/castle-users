import React from 'react';
import logo from 'assets/images/logo.svg';

const Header = () => (
  <header>
    <img className="logo" src={logo} alt="logo" />
  </header>
);

export default React.memo(Header);
