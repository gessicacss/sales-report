/* eslint-disable react/prop-types */
import styled from "styled-components";
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

export default function GraphicCharts({sales}) {
  return (
    <ChartsContainer>
      <ResponsiveContainer width="100%" height={300}>
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
            domain={[0, 300]}
          />
          <Tooltip />
          <Legend iconType="circle" />
          <Bar dataKey="Sales" fill="#84b2d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </ChartsContainer>
  );
}


const ChartsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding:50px;
`;