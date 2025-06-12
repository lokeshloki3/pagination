import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

const PAGE_SIZE = 6;

function App() {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();

    // console.log(response);
    setProducts(response.products);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const TOTAL_PRODUCTS = products.length;
  const TOTAL_NO_PAGES = Math.ceil(TOTAL_PRODUCTS / PAGE_SIZE);

  return (
    <div className="h-screen p-4">
      {
        !products.length
          ? <h1>No product found</h1>
          : <Pagination products={products} PAGE_SIZE={PAGE_SIZE} />
      }
      <div>{[...Array(TOTAL_NO_PAGES).keys()].map(n => <span key={n}>{n + 1}</span>)}</div>
    </div>
  )
}

export default App
