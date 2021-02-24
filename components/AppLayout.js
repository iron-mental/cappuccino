import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import MenuLayout from './MenuLayout';
import InfoLayout from './InfoLayout';
import CustomCol from './CustomCol';

import FirstWebView from './pc/First';
import SecondWebView from './pc/Second';
import ThirdWebView from './pc/Third';

import FirstMobileView from './mobile/First';
import SecondMobileView from './mobile/Second';
import ThirdMobileView from './mobile/Third';

const url = {
  main: 'https://www.terminal-study.tk/main',
  appStore: 'https://apps.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1',
  playStore: 'https://play.google.com/store/apps/details?id=com.towneers.www',
  github: 'https://github.com/iron-mental',
  mail: 'team.ironmental@gmail.com',
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

        <CustomCol size={size} style={{ background: '#FBF7F2', height: '600px' }}>
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

        <CustomCol size={size} style={{ background: '#F4F4F4', height: '200px' }}>
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
