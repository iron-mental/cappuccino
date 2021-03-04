import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import MenuLayout from './MenuLayout';
import InfoLayout from './InfoLayout';
import CustomCol from './CustomCol';

const url = {
  main: 'https://www.terminal-study.tk/main',
  appStore: 'https://apps.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1',
  playStore: 'https://play.google.com/store/apps/details?id=com.towneers.www',
  github: 'https://github.com/iron-mental',
  mail: 'team.ironmental@gmail.com',
  terms: 'https://www.terminal-study.tk/terms',
  privacy: 'https://www.terminal-study.tk/privacy',
};

const image = {
  logo:
    'https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg',
  favicon: '',
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
