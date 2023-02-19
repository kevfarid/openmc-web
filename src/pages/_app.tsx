import LangProvider from '@/provider/LangProvider';
import '@/styles/globals.css';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LangProvider>
      <Head>
        <title>OpenMC</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </LangProvider>
  );
}
