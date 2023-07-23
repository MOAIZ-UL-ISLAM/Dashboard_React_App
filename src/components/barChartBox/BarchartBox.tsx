import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./BarchartBox.scss";

type Props={
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];

}


const BarchartBox = (props : Props) => {
  return <div className="barchartbox">
    <h2>{props.title}</h2>
    <div className="chart">
    <ResponsiveContainer width="99%" height={150}>
        <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
            contentStyle={{backgroundColor:'#2a3447', borderBlock:'5px'}}
            labelStyle={{display:'none'}}
            cursor={{fill: 'none'}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>;
};

export default BarchartBox;
