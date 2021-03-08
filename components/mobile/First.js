import { Col } from 'antd';

const FirstMobileView = () => {
  return (
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
      <img src="/web/mobile/first.PNG" style={{ width: '200px', height: '342px', marginTop: '62px' }} />
    </Col>
  );
};

export default FirstMobileView;
