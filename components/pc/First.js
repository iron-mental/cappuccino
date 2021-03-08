import { Col } from 'antd';

const FirstWebView = ({ size }) => {
  return (
    <Col xs={size.in.center.mx} sm={size.in.center.sm} md={size.in.center.md} align="center">
      <img src="/web/pc/first.PNG" style={{ width: size.banner }} />
    </Col>
  );
};

export default FirstWebView;
