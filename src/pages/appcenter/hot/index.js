import React from 'react';
import { connect } from 'dva';
import { Row,Col,Table,Icon } from "antd";
import mockjs from 'mockjs';
import styles from './index.less';

@connect()
class AppCenter extends React.Component {
  render() {
    const hotlistcolumns = [{
      title: '个股',
      dataIndex: 'stocksName',
    }, {
      title: '热度',
      dataIndex: 'heat',
      render:(text,record)=>(
        <span>
        {text}
        {record.heattrend ===0 ? <Icon type="rise" style={{color:'red',float:'right',fontWeight:900}}/>:<Icon type="fall" style={{color:'green',float:'right',fontWeight:900}}/>}
        </span>
      )
    }];
    const hotlistdata = mockjs.mock({
      'rows|10': [
        {
          'id|+1': 1,
          stocksName: '@cword(4)',
          'heat|50-100':70,
          'heattrend|0-1':0,
        },
      ],
    })
     const attentiondata = mockjs.mock({
      'rows|10': [
        {
          'id|+1': 1,
          stocksName: '@cword(4)',
          'heat|50-100':70,
          'heattrend|0-1':0,
        },
      ],
    })
     const discussdata = mockjs.mock({
      'rows|10': [
        {
          'id|+1': 1,
          stocksName: '@cword(4)',
          'heat|50-100':70,
          'heattrend|0-1':0,
        },
      ],
    })
    return (
      <div className='normal'>
        <h2>热门个股</h2>
        <Row gutter={24}>
          <Col span={12}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>舆论热度排行</span>
              </div>
              <div className={styles.contenttable}>
                <Table
                  size='middle'
                  columns={hotlistcolumns}
                  dataSource={hotlistdata.rows}
                  pagination={false}
                />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>讨论热度排行</span>
              </div>
              <div className={styles.contenttable}>
                <Table
                  size='middle'
                  columns={hotlistcolumns}
                  dataSource={discussdata.rows}
                  pagination={false}
                />
              </div>
            </div>
          </Col>
           <Col span={12}>
            <div className={styles.platform}>
              <div className={styles.headerTitle}>
                <span className={styles.title}>关注热度排行</span>
              </div>
              <div className={styles.contenttable}>
                <Table
                  size='middle'
                  columns={hotlistcolumns}
                  dataSource={attentiondata.rows}
                  pagination={false}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppCenter;
