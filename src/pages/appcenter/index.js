import React from 'react';
import { connect } from 'dva';
import { Button } from "antd";
import router from 'umi/router';

@connect()
class AppCenter extends React.Component {
  hot=()=>{
    router.push('appcenter/hot')
  }
  negative=()=>{
     router.push('appcenter/negative')
  }
  render() {
    return (
      <div className='normal'>
        <Button onClick={this.hot}>热门个股</Button>
        <Button onClick={this.negative}>负面舆情</Button>
      </div>
    );
  }
}

export default AppCenter;
