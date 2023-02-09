import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const ProductCard = ({ productData }) => {
    return (
        <Link href={`product/${productData.id}`} legacyBehavior>
            <a className='product-card'>
                <style jsx>{`
            .product-card {
                border: 1px solid #c1c1c1;
                border-radius: 1rem;
                padding: 1rem;
                text-align: left;
                cursor: pointer;
                transition: all .2s ease-in-out;
                display: block;
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
                <img alt="" />
                <Image src={productData.image} width={333} height={333} />
                <p className='product-name'>{productData.name}</p>
                <p className='product-price'>{productData.price}</p>
            </a>
        </Link>
    )
}

export default ProductCard