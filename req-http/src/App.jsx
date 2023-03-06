import { useEffect, useState } from 'react';

import './App.css'

const urlBase = "http://localhost:3333/products";

export default function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData () {
      const res = await fetch(urlBase);
      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    const res = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h2>Product's List</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:&nbsp;
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Price:&nbsp;
            <input 
              type="number" 
              name="price" 
              id="price" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  )
}
