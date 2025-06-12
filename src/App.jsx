import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

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

  return (
    <div className="h-screen p-4">
      <Pagination products={products} />
    </div>
  )
}

export default App
