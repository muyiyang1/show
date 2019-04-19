import React from 'react';
import { connect } from 'dva';
import { Row,Col,Breadcrumb,Radio} from "antd";
import WordcloudChart from "./children";
import Link from "umi/link";
import styles from './index.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const bread={
  height:'40px',
  lineHeight:'40px',
  fontSize:'16px',
  marginBottom:'12px'
}

@connect()
class AppCenter extends React.Component {
  state={
    type1:'a',
    type2:'b',
    type3:'c'
  }
  onChange=(e)=>{
    this.setState({
      type1: e.target.value
    })
  }
   onChange2=(e)=>{
    this.setState({
      type2: e.target.value
    })
  }
   onChange3=(e)=>{
    this.setState({
      type3: e.target.value
    })
  }
  render() {
    const {type1,type2,type3}=this.state;
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item ><Link to='/appcenter'>场景中心</Link></Breadcrumb.Item>
          <Breadcrumb.Item>综合词云</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={24}>
          <Col span={24}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>个股词云</span>

                <span className={styles.titletime}>
                   <RadioGroup onChange={this.onChange} defaultValue="a" style={{marginRight:12}}>
                  <RadioButton value="a">日</RadioButton>
                  <RadioButton value="b">月</RadioButton>
                  <RadioButton value="c">年</RadioButton>
                </RadioGroup>
                更新时间：2019-04-21 21:00:09</span>
              </div>
              <div className={styles.contenttable}>
                <WordcloudChart type={type1} key='1' />
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>行业词云</span>

                <span className={styles.titletime}>
                 <RadioGroup onChange={this.onChange2} defaultValue="d" style={{marginRight:12}}>
                  <RadioButton value="d">日</RadioButton>
                  <RadioButton value="e">月</RadioButton>
                  <RadioButton value="f">年</RadioButton>
                </RadioGroup>
                更新时间：2019-04-21 21:00:09</span>
              </div>
              <div className={styles.contenttable}>
                <WordcloudChart type={type2} key='2'/>
              </div>
            </div>
          </Col>
           <Col span={24}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>概念词云</span>

                <span className={styles.titletime}>
                <RadioGroup onChange={this.onChange3} defaultValue="a" style={{marginRight:12}}>
                  <RadioButton value="a">日</RadioButton>
                  <RadioButton value="b">月</RadioButton>
                  <RadioButton value="c">年</RadioButton>
                </RadioGroup>
                更新时间：2019-04-21 21:00:09</span>
              </div>
              <div className={styles.contenttable}>
                <WordcloudChart type={type3} key='3'/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppCenter;
