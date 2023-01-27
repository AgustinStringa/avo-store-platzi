import data from 'database/data'
import React from 'react'

const ProductCard = ({ productData }) => {
    console.log(productData)
    return (
        <div className='product-card '>
            <style jsx>{`
            .product-card {
                border: 1px solid #c1c1c1;
                border-radius: 1rem;
                padding: 1rem;
                text-align: left;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }
            .product-card:hover {
                transform: translate(-4px, -4px);
                box-shadow: 0px 5px 4px rgb(0 0 0 / 5%);
            }
            .product-card img{
                margin: 0 auto;
            }
            .product-name {
                font-size: 1.5rem;
                font-weight: bold;
            }
            .product-price {
                color: grey;
                font-size: .875rem;
            }
        `}</style>
            <img src={productData.image} alt="" />
            <p className='product-name'>{productData.name}</p>
            <p className='product-price'>{productData.price}</p>
        </div>

    )
}

export default ProductCard