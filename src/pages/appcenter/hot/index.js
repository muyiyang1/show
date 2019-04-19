import React from 'react';
import { connect } from 'dva';
import { Row,Col,Table,Icon,Breadcrumb,Tooltip } from "antd";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts"
import styles from './index.less';

const bread={
  height:'40px',
  lineHeight:'40px',
  fontSize:'16px',
  marginBottom:'12px'
}
 const data = [
   {
        day: "9-12",
        value: 82
      },
      {
        day: "9-13",
        value: 86
      },
      {
        day: "9-14",
        value: 88
      },
      {
        day: "9-15",
        value: 87
      },
      {
        year: "9-16",
        value: 88
      },
      {
        day: "9-17",
        value: 90
      },
      {
        day: "9-18",
        value: 91
      },
      {
        day: "9-19",
        value: 90
      },
      {
        day: "9-20",
        value: 90
      },
      {
        day: "9-21",
        value: 91
      },
      {
        day: "9-22",
        value: 92
      },
      {
        day: "9-23",
        value: 93
      },
      {
        day: "9-24",
        value: 93
      },
      {
        year: "9-25",
        value: 95
      },
      {
        day: "9-26",
        value: 96
      },
      {
        day: "9-27",
        value: 96
      },
      {
        day: "9-28",
        value: 98
      },
      {
        day: "9-29",
        value: 100
      }
    ];
const cols = {
  value: {
    max: 100
  },

};
@connect()
class AppCenter extends React.Component {
  chart=()=>{
    return(
      <div style={{width:200,height:100}}>
        <Chart height={100} width={200} data={data} scale={cols} forceFit padding={[0]}>
          <Tooltip
            crosshairs={{
              type: "line"
            }}
          />
          <Geom type="area" position="day*value" />
          <Geom type="line" position="day*value" size={2}/>
        </Chart>
      </div>
      )
  }
  render() {
    const hotlistcolumns = [{
      title: '个股',
      dataIndex: 'stocksName',
      render:(text)=>(
        <a href='javascript:;'> <Tooltip placement="right" title={this.chart}>{text}</Tooltip></a>
      )
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
