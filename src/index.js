import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components/macro';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import client from './apolloClient';
import reportWebVitals from './reportWebVitals';
import { colors } from './shared';

const GlobalStyles = createGlobalStyle`
	[data-reactroot] 
		{height: 100% !important; }

	html, body, #app, #app>div {
		height: 100%
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Avenir Next', sans-serif !important;
		font-size: 16px;
		letter-spacing: 0.05em;
  	background-color: ${colors.black};
  	color: ${colors.white};
	}
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
        <GlobalStyles />
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </>
    </Router>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
