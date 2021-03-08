import { Col } from 'antd';

const SecondMobileView = () => {
  return (
    <Col xs={24} sm={24} md={0} align="center">
      <b>
        <h2 style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', marginTop: '40px' }}>
          멤버들과
          <br />
          소통하는 공간
          <br />
        </h2>
      </b>
      <img src="/web/mobile/second.PNG" style={{ width: '240px', height: '395px', marginTop: '20px' }} />
      <font style={{ whiteSpace: 'nowrap', fontFamily: '맑은 고딕', fontSize: '10px' }}>
        {' '}
        <br />
        <br />
        스터디에 가입해 일정을 조율하고 <br />
        함께 성장하는 스터디를 만들어 보세요.
        <br />
      </font>
    </Col>
  );
};

export default SecondMobileView;
