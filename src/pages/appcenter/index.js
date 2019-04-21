import React from 'react';
import { connect } from 'dva';
import { Col,Row,Card,Icon,Statistic} from "antd";
import router from 'umi/router';
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
  Util,
  Tooltip
} from "bizcharts"
import WordcloudChart from "../wordcloud";
import styles from './index.less'

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
  knowledgemap=()=>{
     router.push('appcenter/knowledgemap')
  }
  heattrend=()=>{
     router.push('appcenter/heattrend')
  }
  render() {

    const hotlistdata = {
       "rows":[
          {"id":1,"stocksName":"平安银行","heat":100,"heattrend":0},
          {"id":2,"stocksName":"中兴通讯","heat":99,"heattrend":0},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":1},

       ]
      }

     const discussdata = {
       "rows":[
          {"id":1,"stocksName":"银鸽投资","heat":100,"heattrend":1},
          {"id":2,"stocksName":"平安银行","heat":99,"heattrend":1},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":0},

       ]
      }
 const attentiondata = {
       "rows":[
          {"id":1,"stocksName":"银鸽投资","heat":100,"heattrend":0},
          {"id":2,"stocksName":"平安银行","heat":99,"heattrend":0},
          {"id":3,"stocksName":"中国宝安","heat":98,"heattrend":1},

       ]
      }
    return (
      <div className='normal'>
        <div style={{height:40,lineHeight:'40px'}}>
          <Icon type="setting" style={{lineHeight:'40px',float:'right'}}/>
        </div>
        <Card
          title={<span>热门个股<span onClick={this.hot} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>详细内容</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
          <Row gutter={48}>
            <Col span={6}>
                <div className={styles.card}>
                  <span>个股舆论热度排行</span>
                  {hotlistdata.rows.map(item=>{
                    return (
                      <div className={styles.list}>
                        {item.stocksName}
                         {item.heattrend ===0 ?
                         <Icon type="arrow-up" style={{color:'red',lineHeight:'40px',float:'right'}}/>:
                         <Icon type="arrow-down" style={{color:'green',lineHeight:'40px',float:'right'}}/>}
                      </div>
                    )
                  })}
                </div>
            </Col>
             <Col span={6}>
                <div className={styles.card}>
                  <span>个股讨论热度排行</span>
                  {discussdata.rows.map(item=>{
                    return (
                      <div className={styles.list}>
                        {item.stocksName}
                         {item.heattrend ===0 ?
                         <Icon type="arrow-up" style={{color:'red',lineHeight:'40px',float:'right'}}/>:
                         <Icon type="arrow-down" style={{color:'green',lineHeight:'40px',float:'right'}}/>}
                      </div>
                    )
                  })}
                </div>
            </Col>
             <Col span={6}>
                <div className={styles.card}>
                  <span>个股关注热度排行</span>
                  {attentiondata.rows.map(item=>{
                    return (
                      <div className={styles.list}>
                        {item.stocksName}
                         {item.heattrend ===0 ?
                         <Icon type="arrow-up" style={{color:'red',lineHeight:'40px',float:'right'}}/>:
                         <Icon type="arrow-down" style={{color:'green',lineHeight:'40px',float:'right'}}/>}
                      </div>
                    )
                  })}
                </div>
            </Col>
          </Row>
        </Card>
        <Card
         title={<span>综合词云<span onClick={this.wordcloud} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>详细内容</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        <Row gutter={48}>
          <Col span={6}>
            <WordcloudChart height={240}/>
          </Col>
          <Col span={6}>
            <WordcloudChart height={240}/>
          </Col>
          <Col span={6}>
            <WordcloudChart height={240}/>
          </Col>
          <Col span={6}>
            <WordcloudChart height={240}/>
          </Col>
        </Row>

        </Card>
         <Card
         title={<span>负面舆情<span onClick={this.negative} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>详细内容</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
        <Row gutter={48}>
            <Col span={6}>
                <div className={styles.card}>
                  <span>负面舆情<Icon type="info-circle"  style={{float:'right',lineHeight:'40px'}}/></span>
                  <div className={styles.list}>
                      <span style={{fontWeight:100}}>更新咨询条数</span>
                      <span style={{fontWeight:800,fontSize:'28px',float:'right'}}>78</span>
                  </div>
                   <div className={styles.list}>
                      <span style={{fontWeight:100}}>波及股票</span>
                      <span style={{fontWeight:800,fontSize:'28px',float:'right'}}>258</span>
                  </div>
                </div>
            </Col>

          </Row>
        </Card>
         <Card
         title={<span>新兴概念<span onClick={this.new} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>详细内容</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
          <Row gutter={48} className={styles.newStatistic}>
            <Col span={6}>
            <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>5G</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.span1}>资讯量</span>
                  <span className={styles.span2}>1234</span>
                  <span className={styles.span3}>aaaa</span>
                </div>
                <div className={styles.cardContentCharts}>
                    <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                      <Tooltip
                        crosshairs={{
                          type: "line"
                        }}
                      />
                      <Geom
                        type="area"
                        position="day*value"
                        color="#8f66dd"
                        tooltip={['value', (value)=>{
                          return {
                            name:'热度',
                            value
                          }
                        }]}
                      />
                    </Chart>
                  </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={12}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={11}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            <Col span={6}>
            <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>国产航母</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.span1}>资讯量</span>
                  <span className={styles.span2}>8678</span>
                  <span className={styles.span3}>aaaa</span>
                </div>
                <div className={styles.cardContentCharts}>
                    <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                      <Tooltip
                        crosshairs={{
                          type: "line"
                        }}
                      />
                      <Geom
                        type="area"
                        position="day*value"
                        color="#8f66dd"
                        tooltip={['value', (value)=>{
                          return {
                            name:'热度',
                            value
                          }
                        }]}
                      />
                    </Chart>
                  </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={19}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={31}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            <Col span={6}>
            <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>粤港澳大湾区</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.span1}>资讯量</span>
                  <span className={styles.span2}>238</span>
                  <span className={styles.span3}>aaaa</span>
                </div>
                <div className={styles.cardContentCharts}>
                    <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                      <Tooltip
                        crosshairs={{
                          type: "line"
                        }}
                      />
                      <Geom
                        type="area"
                        position="day*value"
                        color="#8f66dd"
                        tooltip={['value', (value)=>{
                          return {
                            name:'热度',
                            value
                          }
                        }]}
                      />
                    </Chart>
                  </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={45}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={18}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            <Col span={6}>
            <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>石墨烯</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.span1}>资讯量</span>
                  <span className={styles.span2}>23434</span>
                  <span className={styles.span3}>aaaa</span>
                </div>
                <div className={styles.cardContentCharts}>
                    <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                      <Tooltip
                        crosshairs={{
                          type: "line"
                        }}
                      />
                      <Geom
                        type="area"
                        position="day*value"
                        color="#8f66dd"
                        tooltip={['value', (value)=>{
                          return {
                            name:'热度',
                            value
                          }
                        }]}
                      />
                    </Chart>
                  </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={34}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={21}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            </Row>
        </Card>
         <Card
         title={<span>热度趋势<span onClick={this.heattrend} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>详细内容</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
         <Row gutter={48} className={styles.newStatistic}>
            <Col span={6}>
          <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>石墨烯</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardContentCharts}>
                  <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                    <Tooltip
                      crosshairs={{
                        type: "line"
                      }}
                    />
                    <Geom
                      type="area"
                      position="day*value"
                      color="#8f66dd"
                       tooltip={['value', (value)=>{
                        return {
                          name:'热度',
                          value
                        }
                      }]}
                    />
                  </Chart>
                  </div>
                </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={70}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={13}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            <Col span={6}>
          <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>工业大麻</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardContentCharts}>
                  <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                    <Tooltip
                      crosshairs={{
                        type: "line"
                      }}
                    />
                    <Geom
                      type="area"
                      position="day*value"
                      color="#8f66dd"
                      tooltip={['value', (value)=>{
                        return {
                          name:'热度',
                          value
                        }
                      }]}
                    />
                  </Chart>
                  </div>
                </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={12}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={11}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            <Col span={6}>
          <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>5G</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardContentCharts}>
                  <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                    <Tooltip
                      crosshairs={{
                        type: "line"
                      }}
                    />
                    <Geom
                      type="area"
                      position="day*value"
                      color="#8f66dd"
                       tooltip={['value', (value)=>{
                        return {
                          name:'热度',
                          value
                        }
                      }]}
                    />
                  </Chart>
                  </div>
                </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={15}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={11}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            <Col span={6}>
          <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>区块链</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardContentCharts}>
                  <Chart height={60} data={data} scale={cols} forceFit padding={[0]}>
                    <Tooltip
                      crosshairs={{
                        type: "line"
                      }}
                    />
                    <Geom
                      type="area"
                      position="day*value"
                      color="#8f66dd"
                       tooltip={['value', (value)=>{
                        return {
                          name:'热度',
                          value
                        }
                      }]}
                    />
                  </Chart>
                  </div>
                </div>
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周关注度"
                value={22}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日关注度"
                value={10}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
            </Col>
            </Row>
        </Card>
         <Card
         title={<span>知识图谱<span onClick={this.knowledgemap} style={{float:'right',fontWeight:100,cursor:'pointer',fontSize:14}}>详细内容</span></span>}
          bordered={false}
          style={{marginBottom:24}}
        >
          <Row gutter={48}>
            <Col span={6}>
                <div className={styles.card}>
                  <span>知识图谱<Icon type="info-circle"  style={{float:'right',lineHeight:'40px'}}/></span>
                  <div className={styles.list}>
                      <span style={{fontWeight:100}}>公司</span>
                      <span style={{fontWeight:800,fontSize:'28px',float:'right'}}>18</span>
                  </div>
                   <div className={styles.list}>
                      <span style={{fontWeight:100}}>事件</span>
                      <span style={{fontWeight:800,fontSize:'28px',float:'right'}}>25</span>
                  </div>
                </div>
            </Col>

          </Row>
        </Card>

      </div>
    );
  }
}

export default AppCenter;
