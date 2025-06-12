import React from 'react'

const Card = ({ product }) => {
    return (
        <div>
            <img src={product.images[0]} />
            <div>{product.title}</div>
        </div>
    )
}

export default Card