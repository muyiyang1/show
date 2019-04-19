import React, { Component } from 'react';
import echarts from 'echarts';
// import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3';
import $ from 'jquery';
import data from '@/assets/network.json';
import uuid from 'uuid';
// import './index.css';

// console.log(data);

class Network extends Component {
  componentDidMount() {
    const myChart = echarts.init(document.getElementById('netWorkMountNode'));
    myChart.showLoading();
    myChart.hideLoading();

    // var graph = echarts.dataTool.gexf.parse(xml);
    // console.log(graph);
    var categories = [];
    const chartData = {
      nodes: [],
      links: [],
    };
    for(const parentNode of data.nodes) {
      categories.push({
        name: parentNode.name,
      });
      const { children, ...node } = parentNode;
      chartData.nodes.push({
        ...node,
        itemStyle: null,
        symbolSize: 40 * node.score,
        value: 40 * node.score,
        category: node.name,
        // Use random x, y
        x: null,
        y: null,
        draggable: true,
      });
      for (const subNode of children) {
        if (subNode.id === '1' && node.id === '8') {
          chartData.links.push({
            id: uuid.v4(),
            source: '1sub4',
            target: node.id,
          });
        } else {
          chartData.nodes.push({
            ...subNode,
            id: node.id + 'sub' + subNode.id,
            name: subNode.desc,
            itemStyle: null,
            symbolSize: 10,
            value: 10,
            category: node.name,
            // Use random x, y
            x: null,
            y: null,
            draggable: true,
            subNode: true,
          });
          chartData.links.push({
            id: uuid.v4(),
            source: node.id + 'sub' + subNode.id,
            target: node.id,
          });
        }


      }
    }

    console.log(chartData, categories);

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
      legend: [
        {
          // selectedMode: 'single',
          data: categories.map(function(a) {
            return a.name;
          }),
        },
      ],
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
          label: {
            normal: {
              position: 'right',
            },
          },
          force: {
            repulsion: 100,
          },
        },
      ],
    };

    myChart.setOption(option);
  }

  render() {
    return <div id="netWorkMountNode"  style={{ width: 1000, height: 600 }} />;
  }
}

export default Network;