import React, { Component } from 'react';
import G6 from '@antv/g6';
import { forceSimulation, forceManyBody, forceLink, forceCenter } from 'd3';
import $ from 'jquery';
import data from '@/assets/xiaomi.json';
import Link from "umi/link";
// import './index.css';

// console.log(data);

class Network extends Component {
  componentDidMount() {
    var graph = new G6.Graph({
      container: 'netWorkMountNode',
      width: 800,
      height: 600,
      autoPaint: false,
      modes: {
        default: ['drag-canvas', {
          type: 'tooltip',
          formatText: function formatText(model) {
            return model.name;
          }
      }, {
          type: 'edge-tooltip',
          formatText: function formatText(model, e) {
            var edge = e.item;
            return '来源：' + edge.getSource().getModel().name + '<br/>去向：' + edge.getTarget().getModel().name;
          }
      }]
      },
      defaultNode: {
        size: [10, 10],
        color: 'steelblue'
      },
      defaultEdge: {
        size: 1
      },
      nodeStyle: {
        default: {
          lineWidth: 2,
          fill: 'steelblue'
        },
        highlight: {
          opacity: 1
        },
        dark: {
          opacity: 0.2
        }
      },
      edgeStyle: {
        default: {
          stroke: '#e2e2e2',
          lineAppendWidth: 2
        },
        highlight: {
          stroke: '#999'
        }
      }
    });

    function clearAllStats() {
      graph.setAutoPaint(false);
      graph.getNodes().forEach(function(node) {
        graph.clearItemStates(node);
      });
      graph.getEdges().forEach(function(edge) {
        graph.clearItemStates(edge);
      });
      graph.paint();
      graph.setAutoPaint(true);
    }
    graph.on('node:mouseenter', function(e) {
      var item = e.item;
      graph.setAutoPaint(false);
      graph.getNodes().forEach(function(node) {
        graph.clearItemStates(node);
        graph.setItemState(node, 'dark', true);
      });
      graph.setItemState(item, 'dark', false);
      graph.setItemState(item, 'highlight', true);
      graph.getEdges().forEach(function(edge) {
        if (edge.getSource() === item) {
          graph.setItemState(edge.getTarget(), 'dark', false);
          graph.setItemState(edge.getTarget(), 'highlight', true);
          graph.setItemState(edge, 'highlight', true);
          edge.toFront();
        } else if (edge.getTarget() === item) {
          graph.setItemState(edge.getSource(), 'dark', false);
          graph.setItemState(edge.getSource(), 'highlight', true);
          graph.setItemState(edge, 'highlight', true);
          edge.toFront();
        } else {
          graph.setItemState(edge, 'highlight', false);
        }
      });
      graph.paint();
      graph.setAutoPaint(true);
    });
    graph.on('node:mouseleave', clearAllStats);
    graph.on('canvas:click', clearAllStats);
    // $.getJSON('' + data, function(data) {
      graph.data({
        nodes: data.nodes,
        edges: data.edges.map(function(edge, i) {
          edge.id = 'edge' + i;
          return Object.assign({}, edge);
        })
      });
      var simulation = forceSimulation().force("link", forceLink().id(function(d) {
        return d.id;
      }).strength(0.5)).force("charge", forceManyBody()).force("center", forceCenter(800 / 2, 600 / 2));
      simulation.nodes(data.nodes).on("tick", ticked);
      simulation.force("link").links(data.edges);

      graph.render();

      function ticked() {
        graph.refreshPositions();
        graph.paint();
      }
    // });
  }

  render() {
    return (
      <div id="netWorkMountNode"></div>
    );
  }
}

export default Network;
