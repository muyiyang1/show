import $ from "jquery";
import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import _ from 'lodash';
import dataurl from '../../../assets/agu.csv';


let data1;
$.ajax({
  url: '' + dataurl,
  async : false,
  success: (iData) => { data1 = iData }
});

class Wordcloud extends React.PureComponent {
  render() {
    const {height=380}=this.props;
    function getTextAttrs(cfg) {
      return _.assign(
        {},
        cfg.style,
        {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: "center",
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: "Alphabetic"
        }
      );
    } // 给point注册一个词云的shape

    Shape.registerShape("point", "cloud", {
      drawShape(cfg, container) {
        const attrs = getTextAttrs(cfg);
        return container.addShape("text", {
          attrs: _.assign(attrs, {
            x: cfg.x,
            y: cfg.y
          })
        });
      }
    });
    const dv = new DataSet.View().source(data1, {
      type: 'csv'
    });
    const range = dv.range("value");
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: "tag-cloud",
      fields: ["x", "value"],
      size: [window.innerWidth, height],
      font: "Verdana",
      padding: 0,
      timeInterval: 5000,

      // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;

        if (random == 2) {
          random = 0;
        }

        return random * 90; // 0, 90, 270
      },

      fontSize(d) {
        if (d.value) {
          // console.log(max, min, d.value)
          const divisor = (max - min) !== 0 ? (max - min) : 1;
          let result = ((d.value - min) / divisor) * (80 - 24) /2 ;
          if (result<20) return 20;
          // console.log(result);
          // if (result > 1) return result / 2;
          if(result > 80) return 80;
          return result;
        }

        return 0;
      }
    });
    const scale = {
      x: {
        nice: false
      },
      y: {
        nice: false
      }
    };

    return (
      // <div>
        <Chart
          height={height}
          data={dv}
          scale={scale}
          padding={0}
          forceFit
          auto

        >
          <Tooltip showTitle={false} />
          <Coord reflect="y" />
          <Geom
            type="point"
            position="x*y"
            color="x"
            shape="cloud"
            tooltip="value*x"
          />
        </Chart>
      // </div>
    );
  }
}

export default Wordcloud;
