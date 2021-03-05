import Link from 'next/link';
import { Col } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

const InfoLayout = ({ url, size, image }) => {
  return (
    <Col xs={24} sm={24} md={size.in.center.md} style={{ align: 'center', marginTop: '20px', paddingLeft: '20px' }}>
      <Link href={url.main}>
        <a>
          <img src={image.logo} width="100px" height="60px" />
        </a>
      </Link>
      <br />

      <Link href={url.github}>
        <a style={{ color: 'black' }}>
          <GithubOutlined style={{ fontSize: '20px', marginTop: '13px' }} />
          <font style={{ paddingLeft: '10px', fontFamily: '맑은 고딕' }}>{url.github}</font>
        </a>
      </Link>
      <br />

      <Link href={`mailto:${url.mail}`}>
        <a style={{ color: 'black' }}>
          <MailOutlined style={{ fontSize: '20px', marginTop: '15px' }} />
          <font style={{ paddingLeft: '10px', fontFamily: '맑은 고딕' }}>{url.mail}</font>
        </a>
      </Link>
      <br />
      <br />

      <font style={{ fontFamly: '맑은 고딕', color: 'gray' }}>
        <Link href={url.terms}>
          <a style={{ color: 'gray' }}>이용약관</a>
        </Link>
        {' | '}
        <Link href={url.privacy}>
          <a style={{ color: 'gray' }}>개인정보 처리방침</a>
        </Link>
      </font>
    </Col>
  );
};

export default InfoLayout;
