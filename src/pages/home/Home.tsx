import "./home.scss";
import "../../components/topBox/TopBox";
import TopBox from "../../components/topBox/TopBox";
import Charts from "../../components/charts/Charts";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarchartBox from "../../components/barChartBox/BarchartBox";
import PieChartbox from "../../components/pieChartbox/PieChartbox";
import BigChartBox from "../../components/bigChartbox/BigChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <Charts {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Charts {...chartBoxProduct} />
      </div>
      <div className="box box4"><PieChartbox/></div>
      <div className="box box5">
        <Charts {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <Charts {...chartBoxConversion} />
      </div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarchartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarchartBox {...barChartBoxRevenue}/></div>
    </div>
  );
};
export default Home;
