import React from 'react';

import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
    
    html, body, #root {
      height: 100vh;
    }
    
    body, input, button, textarea {
      font-family: 'Red Hat Display', sans-serif;
      color: white;
    }
`;

const App: React.FC<AppProps> = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps} />
            <GlobalStyles/>
        </>
    );
};

export default App;