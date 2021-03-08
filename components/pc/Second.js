import { Col } from 'antd';

const SecondWebView = ({ size }) => {
  return (
    <Col xs={size.in.center.mx} sm={size.in.center.sm} md={size.in.center.md} align="center">
      <img src="/web/pc/second.PNG" style={{ width: size.banner }} />
    </Col>
  );
};

export default SecondWebView;
