/* eslint-disable react/prop-types */
export default function Brands({
  data,
  selectedBrand,
  handleBrandChange,
  selectedCategory,
}) {
  return (
    <label>
      Marca:
      <select value={selectedBrand} onChange={handleBrandChange}>
        {data.category
          .find((category) => category.name === selectedCategory)
          ?.brand.map((brand) => (
            <option key={brand.name} value={brand.name}>
              {brand.name}
            </option>
          ))}
      </select>
    </label>
  );
}
