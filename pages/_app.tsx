// pages/_app.tsx

import React, { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/styles.scss';
import Head from 'next/head';
import Navbar from '../features/layout/Navbar';
import Container from '../components/Container';
import Footer from '../features/layout/Footer';
import { motion } from 'framer-motion';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  return (
    <>
      <Head>
        <title>Home | ecotowari</title>
      </Head>
      <Navbar />
      <main>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </main>
      <Container wrapperClass="bg-dark text-white pt-3 pb-0">
        <Footer />
      </Container>
    </>
  );
}
