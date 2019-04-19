import React from 'react';
import { Row, Col, Breadcrumb, Card, Statistic, Icon } from "antd";

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
            <Card
              title="5G"
            >
              周关注度
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </Card>
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
