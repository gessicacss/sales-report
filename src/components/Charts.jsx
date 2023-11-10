/* eslint-disable react/prop-types */
import styled from "styled-components";
import data from "../utils/data.json";
import GraphicCharts from "./GraphicCharts";

export default function Charts({ selectedCategory, selectedBrand }) {
  const selectedCategoryObj = data.category.find(
    (cat) => cat.name === selectedCategory
  );
  const selectedBrandObj = selectedCategoryObj.brand.find(
    (brand) => brand.name === selectedBrand
  );
  const sales = selectedBrandObj.Sales;
  return (
    <>
      <Text>Sales by month for {selectedBrand}:</Text>
      <GraphicCharts sales={sales} />
    </>
  );
}

const Text = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  font-size:20px;
  text-align: center;
`