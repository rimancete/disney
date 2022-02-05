import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

import { GlobalStyles } from '../styles/global-styles';
import { Head } from 'next/document';
import config from '../config';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';

const BGImage = dynamic(() => import('../components/BGImage'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps}>
        <Head>
          <title>{config.siteName}</title>
          <meta name="theme-color" content={theme.colors.primaryColor} />
          <meta name="description" content={config.description} />
        </Head>
      </Component>
      <Toaster position="top-right" />
      <BGImage />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
