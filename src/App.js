import React, { useState } from "react";
import Kashiff from "./Kashiff";
import productsData from "./data";
import { banana } from "./silly";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsData);

  console.log(banana);

  const newProduct = {
    name: "rope",
    description: "10 whole feet. wow.",
    price: "priceless",
  };

  return (
    <div className="App">
      <h1>The Bizarre Bazaar</h1>
      <button onClick={() => setProducts([...products, newProduct])}>
        LASSO ME BABY
      </button>
      {products.map((product) => (
        <div>
          <li>
            <strong>{product.name}</strong> | ${product.price}
          </li>
          <p>{product.description}</p>
          <hr></hr>
        </div>
      ))}
      <Kashiff howAreTheyPassed={"Downwards"} />
    </div>
  );
}

export default App;
