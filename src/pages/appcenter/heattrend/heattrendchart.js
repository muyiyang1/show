import $ from "jquery";
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,

} from "bizcharts";
import DataSet from "@antv/data-set";
import Slider from "bizcharts-plugin-slider";

let data;
$.ajax({
  url: "https://alifd.alibabausercontent.com/materials/@bizcharts/g2-area-large/0.3.0/build/mock.json",
  async : false,
  success: (iData) => { data = iData }
});

function getComponent(data) {
  const ds = new DataSet({
    state: {
      start: new Date("2009/9/20").getTime(),
      end: new Date("2009/9/23").getTime()
    }
  });
  const dv = ds.createView("origin").source(data);
  dv.transform({
    type: "filter",
    callback(obj) {
      const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
      return time >= ds.state.start && time <= ds.state.end;
    }
  });
  const scale = {
    time: {
      type: "time",
      tickCount: 8,
      mask: "M/DD"
    },
    flow: {
      alias: "热度"
    },

  };
  let chart;

  class SliderChart extends React.Component {
    onChange(obj) {
      const { startValue, endValue } = obj;
      ds.setState("start", startValue);
      ds.setState("end", endValue);
    }

    render() {
      return (
        <div>
          <Chart
            height={400}
            data={dv}
            padding={[40, 80, 40, 80]}
            scale={scale}
            onGetG2Instance={g2Chart => {
              g2Chart.animate(false);
              chart = g2Chart;
            }}
            forceFit
          >
            <Axis name="rain" grid={null} />
            <Tooltip />

            <Geom
              type="area"
              position="time*flow"
              color="l(100) 0:#096dd9 1:#f5f5f5"
              opacity={0.85}
            />

          </Chart>
          <div>
            <Slider
              width="auto"
              padding={[0, 20, 0, 0]}
              height={26}
              start={ds.state.start}
              end={ds.state.end}
              xAxis="time"
              yAxis="flow"
              scales={{
                time: {
                  type: "time",
                  tickCount: 10,
                  mask: "M/DD"
                }
              }}
              data={dv}
              backgroundChart={{
                type: "line"
              }}
              onChange={this.onChange.bind(this)}
            />
          </div>
        </div>
      );
    }
  }
  return SliderChart;
}

class Arealarge extends React.Component {
  render() {
    const SliderChart = getComponent(data);
    return (
      <div>
        <SliderChart />
      </div>
    );
  }
}

export default Arealarge;
