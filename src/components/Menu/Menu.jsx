/* eslint-disable react/prop-types */
import data from "../../utils/data.json";
import Products from "../menusOptions/Products";
import Categories from "../menusOptions/Categories";
import Brands from "../menusOptions/Brands";
import { MenuContainer } from "./styles";

export default function Menu({
  selectedCategory,
  setSelectedCategory,
  selectedProduct,
  setSelectedProduct,
  selectedBrand,
  setSelectedBrand
}) {

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);

    setSelectedProduct(
      data.category.find((category) => category.name === value)?.brand[0]
        ?.products[0]?.name || ""
    );
    setSelectedBrand(
      data.category.find((category) => category.name === value)?.brand[0]
        ?.name || ""
    );
  };

  const handleProductChange = (event) => {
    const value = event.target.value;
    setSelectedProduct(value);
  };

  const handleBrandChange = (event) => {
    const value = event.target.value;
    setSelectedBrand(value);
  };

  return (
    <MenuContainer>
      <Categories
        data={data}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Products
        data={data}
        selectedProduct={selectedProduct}
        handleProductChange={handleProductChange}
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
      />
      <Brands
        data={data}
        selectedBrand={selectedBrand}
        handleBrandChange={handleBrandChange}
        selectedCategory={selectedCategory}
      />
    </MenuContainer>
  );
}