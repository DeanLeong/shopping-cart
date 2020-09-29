import React, { useState } from "react";
import Kashiff from "./Kashiff";
import productsData from "./data";
import { banana } from "./silly";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsData);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const kyle = 1000;

  const newProduct = {
    name: "rope",
    description: "10 whole feet. wow.",
    price: "priceless",
  };

  const handleSubmit = (event) => {
    // page doesn't reload
    event.preventDefault();
    // i have to gather the product's information into an object
    // property shorthand (i.e. name: name vs. JUST name)
    const submittedProduct = {
      name: name, // this can also be done with just name,
      price: price,
      description: description,
      kyle,
    };
    // i want to put this new product into the products state
    setProducts([...products, submittedProduct]);
    // clear out the form
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="App">
      <h1>The Bizarre Bazaar</h1>
      <div>
        <h2>Preview our new item!</h2>
        <h3>Name: {name}</h3>
        <h4>Price: {price}</h4>
        <h5>Description: {description}</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">*BURP*</button>
      </form>

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
