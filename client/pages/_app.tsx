import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { UserContextProvider } from '../libs/context/UserContext';
import GlobalStyle from '../styles';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="행사전표시스템 - v5.0" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <title>행사전표시스템 - v5.1</title>
      </Head>
      <GlobalStyle />
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserContextProvider>
      <ToastContainer draggable={false} position="bottom-center" />
    </>
  );
}

export default MyApp;
