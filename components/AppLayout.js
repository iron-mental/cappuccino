import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Row, Col } from 'antd';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal" style={{ marginTop: '5px', marginBottom: '10px' }}>
        <Menu.Item key="home" style={{ float: 'centerVertical' }}>
          <Link href="/">
            <a>
              <img
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
                width="120px"
                height="60px"
              />
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="android" style={{ float: 'right' }}>
          <Link href="https://play.google.com/store/apps/details?id=com.towneers.www">
            <a>
              <AndroidFilled style={{ fontSize: '30px', marginTop: '15px' }} />
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="apple" style={{ float: 'right' }}>
          <Link href="https://apps.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1">
            <a>
              <AppleFilled style={{ fontSize: '30px', marginTop: '15px' }} />
            </a>
          </Link>
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          여긴 왼쪽이여
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          여긴 오른쪽이여
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
