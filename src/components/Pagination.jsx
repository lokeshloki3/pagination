import React from 'react'
import Card from './Card'

const Pagination = ({ products, PAGE_SIZE }) => {
  return (
    <div className='page'>
      {products.slice(0, PAGE_SIZE).map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  )
}

export default Pagination