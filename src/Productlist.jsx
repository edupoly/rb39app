
import React, { useState, memo } from "react";
import ReactDOM from "react-dom";


// Memoized ProductList Component
const ProductList = memo(({ products }) => {
  console.log("ProductList re-rendered");
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
});

// Non-Memoized Header Component
const Header = () => {
  console.log("Header re-rendered");
  return <h1>Product Catalog</h1>;
};

// Parent Component
const ProductApp = () => {
  const [products, setProducts] = useState([
    { name: "Laptop", price: 999 },
    { name: "Phone", price: 599 },
  ]);
  const [input, setInput] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (input.trim() && price.trim()) {
      setProducts([...products, { name: input, price: Number(price) }]);
      setInput("");
      setPrice("");
    }
  };

  console.log("ProductApp rendered");

  return (
    <div className="app">
      <Header />
      <ProductList products={products} />
      <div className="form">
        <input
          type="text"
          placeholder="Product Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default ProductApp;