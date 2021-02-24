import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Row, Col } from 'antd';
import { AppleFilled, AndroidFilled, GithubOutlined, MailOutlined, LineOutlined } from '@ant-design/icons';

const gridSize = {
  out: {
    mx: 24,
    sm: 24,
    md: 24,
  },
  in: {
    topBottom: {
      mx: 0,
      sm: 0,
      md: 4,
    },
    middle: {
      mx: 0,
      sm: 0,
      md: 16,
    },
  },
};

const bannerSize = '1080px';

const TestLayout = ({ children }) => {
  return (
    <div>
      <Row>
        <Col mx={gridSize.out.mx} sm={gridSize.out.sm} md={gridSize.out.md}>
          <Row>
            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md} style={{ align: 'right' }}></Col>

            <Col xs={24} sm={24} md={gridSize.in.middle.md} style={{ align: 'center' }}>
              <Menu mode="horizontal" style={{ marginTop: '5px', marginBottom: '10px' }}>
                <Menu.Item key="home" style={{ float: 'centerVertical' }}>
                  <Link href="/">
                    <a>
                      <img
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
                        width="100px"
                        height="60px"
                      />
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="android" style={{ float: 'right' }}>
                  <Link href="https://play.google.com/store/apps/details?id=com.towneers.www">
                    <a>
                      <AndroidFilled style={{ fontSize: '30px', marginTop: '13px' }} />
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="apple" style={{ float: 'right' }}>
                  <Link href="https://apps.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1">
                    <a>
                      <AppleFilled style={{ fontSize: '30px', marginTop: '13px' }} />
                    </a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col
              xs={gridSize.in.topBottom.mx}
              sm={gridSize.in.topBottom.sm}
              md={gridSize.in.topBottom.md}
              style={{ align: 'center' }}
            ></Col>
          </Row>
        </Col>

        <Col mx={gridSize.out.mx} sm={gridSize.out.sm} md={gridSize.out.md} style={{ background: '#FBF7F2', height: '600px' }}>
          <Row justify="center" align="left">
            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={gridSize.in.middle.mx} sm={gridSize.in.middle.sm} md={gridSize.in.middle.md} align="center">
              <img src="/web/pc/first_2.JPG" style={{ width: bannerSize }}></img>
            </Col>

            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={24} sm={24} md={0} align="center">
              <b>
                <h2 style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', marginTop: '60px' }}>
                  다양한 분야의
                  <br />
                  카테고리
                  <br />
                </h2>
              </b>
              <font style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', fontSize: '10px' }}>
                {' '}
                <br />
                앱, 인공지능, 블록체인을 비롯한 다양한 분야에서 <br />
                함께 성장하는 스터디를 만들어 보세요.
                <br />
              </font>
              <img src="/web/mobile/category_tmp-2.JPG" style={{ width: '200px', height: '342px', marginTop: '62px' }} />
            </Col>
          </Row>
        </Col>

        <Col mx={gridSize.out.mx} sm={gridSize.out.sm} md={gridSize.out.md} style={{ background: 'white', height: '600px' }}>
          <Row justify="center" align="left">
            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={gridSize.in.middle.mx} sm={gridSize.in.middle.sm} md={gridSize.in.middle.md} align="center">
              <img src="/web/pc/second_2.JPG" style={{ width: bannerSize }}></img>
            </Col>

            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={24} sm={24} md={0} align="center">
              <b>
                <h2 style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', marginTop: '60px' }}>
                  멤버들과
                  <br />
                  소통하는 공간
                  <br />
                </h2>
              </b>
              <img src="/web/mobile/chat_tmp-2.JPG" style={{ width: '250px', height: '375px', marginTop: '20px' }} />
              <font style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', fontSize: '10px' }}>
                {' '}
                <br />
                <br />
                스터디에 가입해 일정을 조율하고 <br />
                함께 성장하는 스터디를 만들어 보세요.
                <br />
              </font>
            </Col>
          </Row>
        </Col>

        <Col mx={gridSize.out.mx} sm={gridSize.out.sm} md={gridSize.out.md} style={{ background: '#F7F8FA', height: '600px' }}>
          <Row justify="center" align="left">
            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={gridSize.in.middle.mx} sm={gridSize.in.middle.sm} md={gridSize.in.middle.md} align="center">
              <img src="/web/pc/third_2.JPG" style={{ width: bannerSize }}></img>
            </Col>

            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={24} sm={24} md={0} align="center">
              <b>
                <h2 style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', marginTop: '60px' }}>
                  내 주변의
                  <br />
                  스터디 검색
                  <br />
                </h2>
              </b>
              <font style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', fontSize: '10px' }}>
                {' '}
                <br />
                프로필에 활동지역을 설정하고
                <br />
                나와 가장 가까운 스터디 모임을 찾아보세요.
                <br />
              </font>
              <img src="/web/mobile/studyList_tmp-2.JPG" style={{ width: '200px', height: '342px', marginTop: '62px' }} />
            </Col>
          </Row>
        </Col>

        <Col mx={gridSize.out.mx} sm={gridSize.out.sm} md={gridSize.out.md} style={{ background: '#F4F4F4', height: '200px' }}>
          <Row>
            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>

            <Col xs={24} sm={24} md={gridSize.in.middle.md} style={{ align: 'center', marginTop: '30px' }}>
              <Menu mode="horizontal" style={{ marginTop: '5px', marginBottom: '10px', background: '#F4F4F4' }}>
                <Menu.Item key="home" style={{ float: 'centerVertical' }}>
                  <Link href="/">
                    <a>
                      <img
                        src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
                        width="100px"
                        height="60px"
                      />
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="none1" style={{ float: 'center', width: '100px', disabled: true }}></Menu.Item>

                <Menu.Item key="Github" style={{ float: 'center' }}>
                  <Link href="https://github.com/iron-mental/">
                    <a>
                      <GithubOutlined style={{ fontSize: '30px', marginTop: '13px' }} />
                    </a>
                  </Link>
                </Menu.Item>

                <Menu.Item key="none2" style={{ float: 'center', width: '50px', disabled: true }}></Menu.Item>

                <Menu.Item key="apple" style={{ float: 'center' }}>
                  <Link href="mailto:rkdcjf0122@naver.com">
                    <a>
                      <MailOutlined style={{ fontSize: '30px', marginTop: '13px' }} />
                    </a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
            <Col xs={gridSize.in.topBottom.mx} sm={gridSize.in.topBottom.sm} md={gridSize.in.topBottom.md}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

TestLayout.propTypes = {
  children: PropTypes.node,
};

export default TestLayout;
