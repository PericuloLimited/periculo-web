import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { Provider } from 'react-redux'
import { useStore } from '../lib/store'
import Footer from '@/components/footer'

import "fontsource-merriweather"
import "fontsource-muli"
import "fontsource-nunito"


export default function MyApp({ Component, pageProps }) {

	const store = useStore(pageProps.initialReduxState)

	//const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Warden</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
		<link rel="shortcut icon" href="/favicon/favicon.ico" />
		<meta name="description" content="Warden - your privacy and security 🔐"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
		<Provider store={store}>
			<Component {...pageProps} />
		<Footer />
		</Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

