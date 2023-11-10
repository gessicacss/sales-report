import { ContainerSelect, Label, Select } from "./styles";

/* eslint-disable react/prop-types */
export default function Products({
  data,
  selectedProduct,
  handleProductChange,
  selectedCategory,
  selectedBrand,
}) {
  return (
    <ContainerSelect>
      <Label htmlFor="products">Products:</Label>
      <Select
        id="products"
        value={selectedProduct}
        onChange={handleProductChange}
      >
        {data.category
          .find((category) => category.name === selectedCategory)
          ?.brand.find((brand) => brand.name === selectedBrand)
          ?.products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name}
            </option>
          ))}
      </Select>
    </ContainerSelect>
  );
}
