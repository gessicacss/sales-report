import { useState } from "react";
import data from "./utils/data.json";
import Header from "./components/Header/Header";
import Charts from "./components/Charts/Charts";
import Menu from "./components/Menu/Menu";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    data.category[0].name
  );
  const [selectedProduct, setSelectedProduct] = useState(
    data.category[0].brand[0].products[0].name
  );
  const [selectedBrand, setSelectedBrand] = useState(
    data.category[0].brand[0].name
  );

  return (
    <>
      <Header />
      <Menu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      <Charts
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
      />
    </>
  );
}

export default App;
