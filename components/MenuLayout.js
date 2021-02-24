import Link from 'next/link';
import { Menu, Col } from 'antd';
import { AppleFilled, AndroidFilled } from '@ant-design/icons';

const MenuLayout = ({ url, size, image }) => {
  return (
    <Col xs={24} sm={24} md={size.in.center.md} style={{ align: 'center' }}>
      <Menu mode="horizontal" style={{ marginTop: '5px', marginBottom: '10px' }}>
        <Menu.Item key="home" style={{ float: 'centerVertical' }}>
          <Link href={url.main}>
            <a>
              <img src={image.logo} width="100px" height="60px" />
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="android" style={{ float: 'right' }}>
          <Link href={url.playStore}>
            <a>
              <AndroidFilled style={{ fontSize: '30px', marginTop: '13px' }} />
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="apple" style={{ float: 'right' }}>
          <Link href={url.appStore}>
            <a>
              <AppleFilled style={{ fontSize: '30px', marginTop: '13px' }} />
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    </Col>
  );
};

export default MenuLayout;
