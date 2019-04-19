import React from 'react';
import { Tag, Breadcrumb, Col,Row,Card} from "antd";
import Link from "umi/link";
import HeatTrendChart from './heattrendchart';

const bread = {
  height: '40px',
  lineHeight: '40px',
  fontSize: '16px',
  marginBottom: '12px'
}
const { CheckableTag } = Tag;
class HeatTrend extends React.Component {
  render() {
    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item ><Link to='/appcenter'>场景中心</Link></Breadcrumb.Item>
          <Breadcrumb.Item>热度趋势</Breadcrumb.Item>
        </Breadcrumb>
        <div className='tablebg'>
          <div style={{marginTop:12,marginBottom:12}}>
            <CheckableTag checked>全部</CheckableTag>
            <CheckableTag checked>综合</CheckableTag>
            <CheckableTag checked>个股</CheckableTag>
            <CheckableTag checked>行业</CheckableTag>
            <CheckableTag checked>概念</CheckableTag>
          </div>

          <Row gutter={24}>
            <Col span={12} style={{marginBottom:24}}>
              <Card title="个股综合热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
            <Col span={12} style={{marginBottom:24}}>
              <Card title="行业综合热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
            <Col span={12} style={{marginBottom:24}}>
              <Card title="概念综合热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
             <Col span={12} style={{marginBottom:24}}>
              <Card title="个股舆论热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
             <Col span={12} style={{marginBottom:24}}>
              <Card title="行业舆论热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
             <Col span={12} style={{marginBottom:24}}>
              <Card title="概念舆论热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HeatTrend;
