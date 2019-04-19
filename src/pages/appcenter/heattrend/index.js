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
  state={
    checked:true,
    checked1:true,
    checked2:true,
    checked3:true,
    checked4:true,
  }
  handleChange=(checked)=>{
    this.setState({
      checked
    })
  }
  handleChange1=(checked)=>{
    this.setState({
      checked1:checked
    })
  }
  handleChange2=(checked)=>{
    this.setState({
      checked2:checked
    })
  }
  handleChange3=(checked)=>{
    this.setState({
      checked3:checked
    })
  }
  handleChange4=(checked)=>{
    this.setState({
      checked4:checked
    })
  }
  render() {
    const {
    checked,
    checked1,
    checked2,
    checked3,
    checked4,
    }=this.state;

    return (
      <div className='normal'>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item ><Link to='/appcenter'>场景中心</Link></Breadcrumb.Item>
          <Breadcrumb.Item>热度趋势</Breadcrumb.Item>
        </Breadcrumb>
        <div className='tablebg'>
          <div style={{marginTop:12,marginBottom:12}}>
            <CheckableTag checked={checked} onChange={this.handleChange}>全部</CheckableTag>
            <CheckableTag checked={checked1} onChange={this.handleChange1}>综合</CheckableTag>
            <CheckableTag checked={checked2} onChange={this.handleChange2}>个股</CheckableTag>
            <CheckableTag checked={checked3} onChange={this.handleChange3}>行业</CheckableTag>
            <CheckableTag checked={checked4} onChange={this.handleChange4}>概念</CheckableTag>
          </div>

          <Row gutter={24}>
           { checked2 ||  checked1 && (
            <Col span={12} style={{marginBottom:24}}>
              <Card title="个股综合热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
           )}
          { checked1 ||  checked3 && (
            <Col span={12} style={{marginBottom:24}}>
              <Card title="行业综合热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
           )}
          { checked1 ||  checked4 && (
            <Col span={12} style={{marginBottom:24}}>
              <Card title="概念综合热度趋势图" bordered={false}><HeatTrendChart/></Card>
            </Col>
          )}
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
