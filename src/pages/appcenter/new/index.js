import React from 'react';
import { Row, Col, Breadcrumb, } from "antd";
import styles from './index.less';

const bread = {
  height: '40px',
  lineHeight: '40px',
  fontSize: '16px',
  marginBottom: '12px'
}

class AppCenter extends React.Component {
  render() {
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item href="/appcenter">场景中心</Breadcrumb.Item>
          <Breadcrumb.Item>新兴概念</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={24}>
          <Col span={6}>
            ee
          </Col>
          <Col span={6}>
            ee
          </Col>
          <Col span={6}>
            ee
          </Col>
          <Col span={6}>
            ee
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppCenter;
