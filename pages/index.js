import React from 'react';

import Head from 'next/head';
import CustomCol from '../components/CustomCol';

import FirstWebView from '../components/pc/First';
import SecondWebView from '../components/pc/Second';
import ThirdWebView from '../components/pc/Third';

import FirstMobileView from '../components/mobile/First';
import SecondMobileView from '../components/mobile/Second';
import ThirdMobileView from '../components/mobile/Third';

const size = {
  out: {
    mx: 24,
    sm: 24,
    md: 24,
  },
  in: {
    side: {
      mx: 0,
      sm: 0,
      md: 4,
    },
    center: {
      mx: 0,
      sm: 0,
      md: 16,
    },
  },
  banner: '1080px',
};

const Home = () => {
  return (
    <div>
      <Head>
        <title>Terminal</title>
      </Head>

      <CustomCol size={size} style={{ background: '#F2F3FA', height: '600px' }}>
        <FirstWebView size={size} />
        <FirstMobileView />
      </CustomCol>

      <CustomCol size={size} style={{ background: 'white', height: '600px' }}>
        <SecondWebView size={size} />
        <SecondMobileView />
      </CustomCol>

      <CustomCol size={size} style={{ background: '#F7F8FA', height: '600px' }}>
        <ThirdWebView size={size} />
        <ThirdMobileView />
      </CustomCol>
    </div>
  );
};

export default Home;
