/* eslint-disable react/prop-types */
import data from "../../utils/data.json";
import GraphicCharts from "./GraphicCharts";
import { Text } from "./styles";

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