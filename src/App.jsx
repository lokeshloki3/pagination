import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

const PAGE_SIZE = 6;

function App() {

  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const response = await data.json();

      // console.log(response);
      setProducts(response.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handlePageChange = (n) => {
    const startIndex = n * PAGE_SIZE;
    setStart(startIndex);
    setCurrentPage(n + 1);
  }

  const TOTAL_PRODUCTS = products.length;
  const TOTAL_NO_PAGES = Math.ceil(TOTAL_PRODUCTS / PAGE_SIZE);

  const gotoNext = () => {
    if (currentPage < TOTAL_NO_PAGES) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      setStart((nextPage - 1) * PAGE_SIZE);
    }
  }

  const gotoPrevious = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      setStart((prevPage - 1) * PAGE_SIZE);
    }
  }

  return (
    <div className="h-screen p-4">
      {
        !products.length
          ? <h1>No product found</h1>
          : <Pagination products={products} PAGE_SIZE={PAGE_SIZE} START={start} />
      }
      <div className="flex">
        <button disabled={currentPage === 1} onClick={() => gotoPrevious()}>Previous</button>
        <div>{[...Array(TOTAL_NO_PAGES).keys()].map(n => <button key={n} className={`pages ${currentPage === n + 1 ? "bg-amber-300" : ""}`} onClick={() => handlePageChange(n)}>{n + 1}</button>)}</div>
        <button disabled={currentPage === TOTAL_NO_PAGES} onClick={() => gotoNext()}>Next</button>      </div>
    </div>
  )
}

export default App
