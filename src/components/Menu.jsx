import styled from "styled-components";
import data from "../utils/data.json";
import { useState } from "react";
import Products from "./menusOptions/Products";
import Categories from "./menusOptions/Categories";
import Brands from "./menusOptions/Brands";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(
    data.category[0].name
  );
  const [selectedProduct, setSelectedProduct] = useState(
    data.category[0].brand[0].products[0].name
  );
  const [selectedBrand, setSelectedBrand] = useState(
    data.category[0].brand[0].name
  );

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

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 350px) {
    flex-direction: column;
    gap: 20px;
  }
`;
