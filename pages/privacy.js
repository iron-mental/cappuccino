import React from 'react';
import Head from 'next/head';
import CustomCol from '../components/CustomCol';
import PrivacyText from '../components/terms/Privacy';

import { Col } from 'antd';

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

const Terms = () => {
  return (
    <div>
      <Head>
        <title>개인정보 처리방침</title>
      </Head>

      <CustomCol size={size} style={{ background: '#FBF7F2', height: 'auto' }}>
        <Col xs={size.in.center.mx} sm={size.in.center.sm} md={size.in.center.md} align="left">
          <PrivacyText />
        </Col>
        <Col xs={24} sm={24} md={0} align="left">
          <PrivacyText />
        </Col>
      </CustomCol>
    </div>
  );
};

export default Terms;
