import React from 'react';
import { connect } from 'dva';
import { Row,Col,Breadcrumb } from "antd";
import WordcloudChart from "../../wordcloud";
import styles from './index.less';

const bread={
  height:'40px',
  lineHeight:'40px',
  fontSize:'16px',
  marginBottom:'12px'
}

@connect()
class AppCenter extends React.Component {
  render() {

    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item href="/appcenter">场景中心</Breadcrumb.Item>
          <Breadcrumb.Item>综合词云</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={24}>
          <Col span={24}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>个股词云</span>
                <span className={styles.titletime}>更新时间：2019-04-21 21:00:09</span>
              </div>
              <div className={styles.contenttable}>
                <WordcloudChart/>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>行业词云</span>
                <span className={styles.titletime}>更新时间：2019-04-21 21:00:09</span>
              </div>
              <div className={styles.contenttable}>
                <WordcloudChart/>
              </div>
            </div>
          </Col>
           <Col span={24}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>概念词云</span>
                <span className={styles.titletime}>更新时间：2019-04-21 21:00:09</span>
              </div>
              <div className={styles.contenttable}>
                <WordcloudChart/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppCenter;
