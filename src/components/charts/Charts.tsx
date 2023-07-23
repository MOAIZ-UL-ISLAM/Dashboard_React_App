// import { props } from "recharts/types/container/Surface";
import "./charts.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type props = {
  color: string;
  icon: string;
  number: string | number;
  title: string;
  dataKey: string;
  percentage: number;
  chartData: object[];
};

const Charts = (props : props) => {
  return (
    <div className="chartbox">
      <div className="boxinfo">
        <div className="title">
          <img src={props.icon} alt="#" />
          <span>{props.title}</span>
        </div>
        <h3>{props.number}</h3>
        <a href="http://recharts.org" style={{color:props.color}}>View all</a>
      </div>
      <div className="chartinfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />

              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <span className=" percentage" style={{color: props.percentage<0 ? "tomato" : 'limegreen'}}>{props.percentage}%</span>
          <span className=" duration">this week</span>
        </div>
      </div>
    </div>
  );
};

export default Charts;
