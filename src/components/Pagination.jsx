import React from 'react'
import Card from './Card'

const Pagination = ({ products }) => {
  return (
    <div className='page'>
      {products.map((product, index) => (
        <Card product={product} key={index}/>
      ))}
    </div>
  )
}

export default Pagination