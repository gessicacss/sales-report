/* eslint-disable react/prop-types */
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartsContainer } from "./styles";

export default function GraphicCharts({sales}) {
  const higherSale = Math.max(...sales.map(sale => sale.Sales));
  const topPadding = higherSale * 0.10;
  const maxY = Math.ceil(higherSale + topPadding);

  return (
    <ChartsContainer>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={sales}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" />
          <YAxis
            label={{ value: "Sales", angle: -90, position: "insideLeft" }}
            domain={[0, maxY]}
          />
          <Tooltip />
          <Legend iconType="circle" />
          <Bar dataKey="Sales" fill="#84b2d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </ChartsContainer>
  );
}