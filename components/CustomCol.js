import { Row, Col } from 'antd';

const CustomCol = ({ size, style, children }) => {
  return (
    <Col mx={size.out.mx} sm={size.out.sm} md={size.out.md} style={style}>
      <Row justify="center" align="left">
        <Col xs={size.in.side.mx} sm={size.in.side.sm} md={size.in.side.md} />
        {children instanceof Array ? children[0] : children}
        <Col xs={size.in.side.mx} sm={size.in.side.sm} md={size.in.side.md} />
        {children instanceof Array && children.length > 1 && children[1]}
      </Row>
    </Col>
  );
};

export default CustomCol;
