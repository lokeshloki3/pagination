import React from 'react'
import Card from './Card'

const Pagination = ({ products, PAGE_SIZE, START }) => {
  return (
    <div className='page'>
      {products.slice(START, START + PAGE_SIZE).map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  )
}

export default Pagination