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
        </a>
      </Link>
      <font style={{ paddingLeft: '10px' }}>{url.github}</font>

      <br />
      <Link href={url.mail}>
        <a style={{ color: 'black' }}>
          <MailOutlined style={{ fontSize: '20px', marginTop: '15px' }} />
        </a>
      </Link>
      <font style={{ paddingLeft: '10px' }}>{url.mail}</font>
    </Col>
  );
};

export default InfoLayout;
