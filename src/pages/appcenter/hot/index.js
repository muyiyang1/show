import React from 'react';
import { connect } from 'dva';
import { Row,Col,Table,Icon,Breadcrumb } from "antd";
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
    const hotlistcolumns = [{
      title: '个股',
      dataIndex: 'stocksName',
    }, {
      title: '热度',
      dataIndex: 'heat',
      render:(text,record)=>(
        <span>
        {text}
        {record.heattrend ===0 ? <Icon type="arrow-up" style={{color:'red',float:'right',fontWeight:900}}/>:<Icon type="arrow-down" style={{color:'green',float:'right',fontWeight:900}}/>}
        </span>
      )
    }];
    const hotlistdata = {
       "rows":[
          {"id":1,"stocksName":"平安银行","heat":100,"heattrend":0},
          {"id":2,"stocksName":"中兴通讯","heat":99,"heattrend":0},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":1},
          {"id":4,"stocksName":"深圳能源","heat":98,"heattrend":1},
          {"id":5,"stocksName":"中集集团","heat":97,"heattrend":0},
          {"id":6,"stocksName":"中国石化","heat":96,"heattrend":0},
          {"id":7,"stocksName":"雷曼股份","heat":95,"heattrend":1},
          {"id":8,"stocksName":"银鸽投资","heat":94,"heattrend":0},
          {"id":9,"stocksName":"银鸽投资","heat":93,"heattrend":1},
          {"id":10,"stocksName":"中金岭南","heat":91,"heattrend":0}
       ]
      }

     const discussdata = {
       "rows":[
          {"id":1,"stocksName":"银鸽投资","heat":100,"heattrend":0},
          {"id":2,"stocksName":"平安银行","heat":99,"heattrend":0},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":1},
          {"id":4,"stocksName":"深圳能源","heat":98,"heattrend":1},
          {"id":5,"stocksName":"中集集团","heat":97,"heattrend":0},
          {"id":6,"stocksName":"泛海控股","heat":96,"heattrend":0},
          {"id":7,"stocksName":"雷曼股份","heat":95,"heattrend":1},
          {"id":8,"stocksName":"中兴通讯","heat":94,"heattrend":0},
          {"id":9,"stocksName":"中国石化","heat":93,"heattrend":1},
          {"id":10,"stocksName":"中金岭南","heat":91,"heattrend":0}
       ]
      }
       const attentiondata = {
       "rows":[
          {"id":1,"stocksName":"银鸽投资","heat":100,"heattrend":0},
          {"id":2,"stocksName":"平安银行","heat":99,"heattrend":0},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":1},
          {"id":4,"stocksName":"深圳能源","heat":98,"heattrend":1},
          {"id":5,"stocksName":"中集集团","heat":97,"heattrend":0},
          {"id":6,"stocksName":"泛海控股","heat":96,"heattrend":0},
          {"id":7,"stocksName":"雷曼股份","heat":95,"heattrend":1},
          {"id":8,"stocksName":"中兴通讯","heat":94,"heattrend":0},
          {"id":9,"stocksName":"中国石化","heat":93,"heattrend":1},
          {"id":10,"stocksName":"中金岭南","heat":91,"heattrend":0}
       ]
      }

    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item href="/appcenter">场景中心</Breadcrumb.Item>
          <Breadcrumb.Item>热门个股</Breadcrumb.Item>
        </Breadcrumb>
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
