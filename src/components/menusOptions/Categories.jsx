import { ContainerSelect, Label, Select } from "./styles";

/* eslint-disable react/prop-types */
export default function Categories({
  data,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <ContainerSelect>
      <Label htmlFor="category">Categories:</Label>
      <Select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        {data.category.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </Select>
    </ContainerSelect>
  );
}