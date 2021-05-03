import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import MenuLayout from './MenuLayout';
import InfoLayout from './InfoLayout';
import CustomCol from './CustomCol';

const url = {
  main: 'https://www.terminal-study.site/main',
  appStore: 'https://apps.apple.com/app/id1557178596',
  playStore: 'https://play.google.com/store/apps/details?id=com.iron.espresso',
  github: 'https://github.com/iron-mental',
  mail: 'team.ironmental@gmail.com',
  terms: 'https://www.terminal-study.site/terms',
  privacy: 'https://www.terminal-study.site/privacy',
};

const image = {
  logo: '/web/logo.png',
  logo_info: '/web/logo_info.png',
};

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

const AppLayout = ({ children }) => {
  return (
    <div>
      <Row>
        <CustomCol size={size} style={{}}>
          <MenuLayout url={url} size={size} image={image} />
        </CustomCol>
        {children}
        <CustomCol size={size} style={{ background: '#F4F4F4', height: '250px' }}>
          <InfoLayout url={url} size={size} image={image} />
        </CustomCol>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
