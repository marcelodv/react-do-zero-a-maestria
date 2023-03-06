import { useEffect, useState } from 'react';
import { useFetch } from "./hooks/useFetch"

import './App.css'

const urlBase = "http://localhost:3333/products";

export default function App() {
  const [products, setProducts] = useState([]);
  
  const { data : items, httpConfig } = useFetch(urlBase);
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    if (product.name !== "" && product.price !== "") {
      httpConfig(product, "POST");
      
      setName("");
      setPrice("");
    } 
  }

  return (
    <div className="App">
      <h2>Product's List</h2>
      <ul>
        {items && items.map((item) => (
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
