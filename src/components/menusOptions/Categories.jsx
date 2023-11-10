import styled from "styled-components";

/* eslint-disable react/prop-types */
export default function Categories({
  data,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <ContainerSelect>
      <Label htmlFor="category">Categories:</Label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        {data.category.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </ContainerSelect>
  );
}

const ContainerSelect = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
`;
