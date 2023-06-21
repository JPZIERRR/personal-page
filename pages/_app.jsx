import { useEffect, useState } from 'react';
import { GlobalStyles } from '../src/styles/global-styles.js';
import { theme } from '../src/styles/theme.js';
import { ThemeProvider } from 'styled-components';
import { Loading } from '../src/components/Loading/index.jsx';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Component {...pageProps} />
          <GlobalStyles />
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
