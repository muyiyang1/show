import React from 'react';
import { Row, Col, Breadcrumb, Card, Statistic, Icon, Input } from "antd";
import Link from "umi/link";
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
import styles from './index.less';

const bread = {
  height: '40px',
  lineHeight: '40px',
  fontSize: '16px',
  marginBottom: '12px'
}
const Search = Input.Search;
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

class AppCenter extends React.Component {
  chart=()=>{
    return(
      <div style={{width:200,height:100,}}>
        <Chart height={100} width={200} data={data} scale={cols} forceFit padding={[0]}>
          <Tooltip
            crosshairs={{
              type: "line"
            }}
          />
          <Geom
            type="area"
            position="day*value"
            shape="smooth"
            style={{
              fillOpacity: 1,
            }}
          />
        </Chart>
      </div>
      )
  }
  render() {
    return (
      <div className='normal'>
      <div className={styles.headerTitle}>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item ><Link to='/appcenter'>场景中心</Link></Breadcrumb.Item>
          <Breadcrumb.Item>新兴概念</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Search
            placeholder="请输入关键词"
            enterButton="搜索"
            style={{width: 280}}
          />
        </div>
      </div>
        <Row gutter={24} className={styles.newStatistic}>
          <Col span={6}>
            <Card
              title={
              <div className={styles.cardTitleWrap}>
                <div className={styles.cardTitle}>
                  <span>5G</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent2}>
                  <div className={styles.cardContentNum}>
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
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周热度"
                value={12}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日热度"
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
                  <span>粤港澳大湾区</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent2}>
                  <div className={styles.cardContentNum}>
                    <span className={styles.span1}>资讯量</span>
                    <span className={styles.span2}>4321</span>
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
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周热度"
                value={12}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日热度"
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
                  <span>石墨烯</span>
                  <Icon type="info-circle" />
                </div>
                <div className={styles.cardContent2}>
                  <div className={styles.cardContentNum}>
                    <span className={styles.span1}>资讯量</span>
                    <span className={styles.span2}>4321</span>
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
                <div className={styles.cardContent2}>
                  <div className={styles.cardContentNum}>
                    <span className={styles.span1}>资讯量</span>
                    <span className={styles.span2}>3520</span>
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
              </div>
              }
            >
              <Statistic
                className={styles.cardContentStatistic}
                title="周热度"
                value={12}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: 14 }}
                prefix={<Icon type="caret-up" />}
                suffix="%"
              />
              <Statistic
                className={`${styles.cardContentStatistic}`}
                title="日热度"
                value={11}
                precision={0}
                valueStyle={{ color: '#cf1322', fontSize: 14 }}
                prefix={<Icon type="caret-down" />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppCenter;
