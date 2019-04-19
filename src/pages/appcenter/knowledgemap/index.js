import React, { Component } from 'react';
import echarts from 'echarts';
// import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3';
import Link from "umi/link";
import $ from 'jquery';
import data from '@/assets/network.json';
import uuid from 'uuid';
import { Breadcrumb, Button, Radio } from "antd";

const bread={
  height:'40px',
  lineHeight:'40px',
  fontSize:'16px',
  marginBottom:'12px'
}
class Network extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'company',
    }
    this.myChart = null;
  }

  componentDidMount() {
    this.myChart = echarts.init(document.getElementById('netWorkMountNode'));
    this.processData();

  }

  change = (e) => {
    this.setState({
      type: e.target.value,
    }, () => {
      this.processData();
    });
  }

  processData = () => {
    const { type } = this.state;
    this.myChart.showLoading();



    // var graph = echarts.dataTool.gexf.parse(xml);
    // console.log(graph);
    var categories = [];
    const chartData = {
      nodes: [],
      links: [],
    };
    const eventList = new Set();
    for(const parentNode of data.nodes) {
      categories.push({
        name: parentNode.name,
      });
      const { children, ...node } = parentNode;
      chartData.nodes.push({
        ...node,
        itemStyle: null,
        symbolSize: type === 'company' ? 40 * node.score : 10,
        value: type === 'company' ? 40 * node.score : 10,
        category: node.name,
        // Use random x, y
        x: null,
        y: null,
        draggable: true,
      });
      for (const subNode of children) {
        // if (subNode.id === '1' && node.id === '8') {
        //   chartData.links.push({
        //     id: uuid.v4(),
        //     source: '1sub4',
        //     target: node.id,
        //   });
        // } else {
        if (!eventList.has(subNode.desc)) {

        // } else {
          chartData.nodes.push({
            ...subNode,
            // id: node.id + 'sub' + subNode.id,
            id: subNode.desc,
            name: subNode.desc,
            itemStyle: null,
            symbolSize: type !== 'company' ? 30 : 10,
            value: type !== 'company' ? 20 : 10,
            category: node.name,
            // Use random x, y
            x: null,
            y: null,
            draggable: true,
            subNode: true,
          });

          eventList.add(subNode.desc);
          // chartData.links.push({
          //   id: uuid.v4(),
          //   source: subNode.desc,
          //   target: node.id,
          // });
        }
        chartData.links.push({
          id: uuid.v4(),
          source: subNode.desc,
          target: node.id,
        });


      }
    }

    // console.log(chartData, categories);

    // graph.nodes.forEach(function(node) {

    // });
    const option = {
      // title: {
      //   text: '知识图谱',
      //   subtext: 'Default layout',
      //   top: 'bottom',
      //   left: 'right',
      // },
      tooltip: {
        formatter: (params) => {
          if (params.data.subNode) {
            return params.data.name;
          } else {
            return `公司名称：${params.data.name}<br />买入概率：${params.data.score}`;
          }

        }
      },
      // legend: [
      //   {
      //     // selectedMode: 'single',
      //     data: categories.map(function(a) {
      //       return a.name;
      //     }),
      //   },
      // ],
      animation: true,
      series: [
        {
          name: '知识图谱',
          type: 'graph',
          layout: 'force',
          data: chartData.nodes,
          links: chartData.links,
          categories: categories,
          roam: true,
          // focusNodeAdjacency: false,
          label: {
            position: 'right',
            show: true,
            formatter: (params) => {
              if (params.data.subNode) {
                return '';
              } else {
                return `公司名称：${params.data.name} 买入概率：${params.data.score}`;
              }

            }
            // normal: {

            // },
          },
          force: {
            repulsion: 100,
          },
        },
      ],
    };

    this.myChart.setOption(option);
    this.myChart.hideLoading();
  }

  render() {
    return(
      <div>
        <Breadcrumb separator=">" style={bread}>
          <Breadcrumb.Item ><Link to='/appcenter'>场景中心</Link></Breadcrumb.Item>
          <Breadcrumb.Item>知识图谱</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Radio.Group defaultValue="company" buttonStyle="solid" onChange={this.change}>
            <Radio.Button value="company">公司</Radio.Button>
            <Radio.Button value="event">事件</Radio.Button>
          </Radio.Group>
        </div>
        <div id="netWorkMountNode"  style={{ width: '100%', height: 600 }} />
      </div>
    )
  }
}

export default Network;
