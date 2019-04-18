import React from 'react';
import { Row, Col, Breadcrumb, } from "antd";

const bread = {
  height: '40px',
  lineHeight: '40px',
  fontSize: '16px',
  marginBottom: '12px'
}

class HeatTrend extends React.Component {
  render() {
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item href="/appcenter">场景中心</Breadcrumb.Item>
          <Breadcrumb.Item>热度趋势</Breadcrumb.Item>
        </Breadcrumb>
        <div className='tablebg'>

        </div>
      </div>
    );
  }
}

export default HeatTrend;
