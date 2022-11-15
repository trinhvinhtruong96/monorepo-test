import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App1 from 'app1/src/components/App1'
import Header from './components/header/Header.js';
require('dotenv').config()

function App2() {
  const getFaviconEl = () => {
    return document.querySelector("link[rel~='icon']");;
  }
  const [cssConfig, setCssConfig] = useState(undefined);
  const [logo, setLogo] = useState('');
  const [headerColor, setHeaderColor] = useState('');

  useEffect(() => {
    fetch(process.env.REACT_APP_CONFIG_API)
      .then(res => {
        return res.json();
      })
      .then((data) => {
        console.log("🚀 ~ file: App2.js ~ line 22 ~ .then ~ data", data)
        setCssConfig(JSON.parse(JSON.stringify(data?.theme?.css ?? '')));
        setLogo(data?.theme?.logo ?? '')
        setHeaderColor(data?.theme?.headerColor ?? '')
        const favicon = getFaviconEl();
        data?.theme?.favicon && (favicon.href = data.theme.favicon);
        setApiConfigRes(data)
      });
  }, [])
  return (
    <>
    <Header logo={logo} headerColor={headerColor}/>
    <div>
      <App1 />
    </div>
      <style global>
        {cssConfig}
        {`
          body {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}

export default App2;
