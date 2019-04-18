import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from "antd";

const bread={
  height:'40px',
  lineHeight:'40px',
  fontSize:'16px',
  marginBottom:'12px'
}

@connect()
class Negative extends React.Component {
  render() {
    return (
      <div className='normal'>
       <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item href="/appcenter">场景中心</Breadcrumb.Item>
          <Breadcrumb.Item>负面舆情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Negative;
