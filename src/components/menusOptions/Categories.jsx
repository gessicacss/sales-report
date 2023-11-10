/* eslint-disable react/prop-types */
export default function Categories({
  data,
  selectedCategory,
  handleCategoryChange,
}) {
  return (
    <label>
      Categories:
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {data.category.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </label>
  );
}
