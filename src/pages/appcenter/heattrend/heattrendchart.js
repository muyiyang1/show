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


function getComponent() {
  const ds = new DataSet({
    state: {
      start: new Date("9-12").getTime(),
      end: new Date("9-30").getTime()
    }
  });
  const data = [
   {
        time: "9-12",
        value: 82
      },
      {
        time: "9-13",
        value: 86
      },
      {
        time: "9-14",
        value: 88
      },
      {
        time: "9-15",
        value: 87
      },
      {
        year: "9-16",
        value: 88
      },
      {
        time: "9-17",
        value: 90
      },
      {
        time: "9-18",
        value: 91
      },
      {
        time: "9-19",
        value: 90
      },
      {
        time: "9-20",
        value: 90
      },
      {
        time: "9-21",
        value: 91
      },
      {
        time: "9-22",
        value: 92
      },
      {
        time: "9-23",
        value: 93
      },
      {
        time: "9-24",
        value: 93
      },
      {
        year: "9-25",
        value: 95
      },
      {
        time: "9-26",
        value: 96
      },
      {
        time: "9-27",
        value: 96
      },
      {
        time: "9-28",
        value: 98
      },
      {
        time: "9-29",
        value: 100
      }
    ];
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
            <Axis name="time" grid={null} />
            <Tooltip />

            <Geom
              type="area"
              position="time*value"
              color="l(100) 0:#096dd9 1:#f5f5f5"
              opacity={0.85}
               tooltip={['value', (value)=>{
                return {
                  name:'热度',
                  value
                }
              }]}
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
              yAxis="value"
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
