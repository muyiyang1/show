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
  wordcloud=()=>{
     router.push('appcenter/wordcloud')
  }
  new=()=>{
     router.push('appcenter/new')
  }
  render() {
    return (
      <div className='normal'>
        <Button onClick={this.hot}>热门个股</Button>
        <Button onClick={this.negative}>负面舆情</Button>
         <Button onClick={this.wordcloud}>综合词云</Button>
         <Button onClick={this.new}>新兴概念</Button>
      </div>
    );
  }
}

export default AppCenter;
