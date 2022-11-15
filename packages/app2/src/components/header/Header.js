import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Header(props) {
  const { logo, headerColor } = props;
  return (
    <div className={'top-bar'} style={{ backgroundColor: headerColor }}>
      <div>
        <img src={logo} height={30} />
      </div>
    </div>
  );
}

export default Header;
