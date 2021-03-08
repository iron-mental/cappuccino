import { Col } from 'antd';

const ThirdMobileView = () => {
  return (
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
      <img src="/web/mobile/third.PNG" style={{ width: '200px', height: '342px', marginTop: '62px' }} />
    </Col>
  );
};

export default ThirdMobileView;
