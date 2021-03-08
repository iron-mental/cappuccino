import Link from 'next/link';
import { Col } from 'antd';
import { GithubOutlined, MailOutlined } from '@ant-design/icons';

const InfoLayout = ({ url, size, image }) => {
  return (
    <Col xs={24} sm={24} md={size.in.center.md} style={{ align: 'center', marginTop: '20px', paddingLeft: '10px' }}>
      <Link href={url.main}>
        <a>
          <img src={image.logo_info} width="65px" height="48px" />
        </a>
      </Link>
      <br />

      <Link href={url.github}>
        <a style={{ color: 'black', paddingLeft: '10px' }}>
          <GithubOutlined style={{ fontSize: '20px', marginTop: '13px' }} />
          <font style={{ paddingLeft: '10px', fontFamily: '맑은 고딕' }}>{url.github}</font>
        </a>
      </Link>
      <br />

      <Link href={`mailto:${url.mail}`}>
        <a style={{ color: 'black', paddingLeft: '10px' }}>
          <MailOutlined style={{ fontSize: '20px', marginTop: '15px' }} />
          <font style={{ paddingLeft: '10px', fontFamily: '맑은 고딕' }}>{url.mail}</font>
        </a>
      </Link>
      <br />
      <br />

      <font style={{ fontFamly: '맑은 고딕', color: 'gray', paddingLeft: '10px' }}>
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
