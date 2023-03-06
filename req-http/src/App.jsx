import { useEffect, useState } from 'react';

import './App.css'

const urlBase = "http://localhost:3333/products";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData () {
      const res = await fetch(urlBase);
      let data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Product's List</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  )
}
