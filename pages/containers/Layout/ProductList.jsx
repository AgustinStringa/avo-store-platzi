import React from 'react'
import ProductCard from '@components/ProductCard'
const ProductList = ({ productList }) => {
    return (
        <>
            <style jsx>{`
                .product-list {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    margin: 2.5rem 0;
                }
                @media (min-width: 768px) {
                    .product-list {
                        display: grid;
                        grid-template-columns: 50% 50%;
                        
                    }
                }
            `}</style>
            <div className='product-list'>
                {productList && productList.map((el) => <ProductCard key={el.id} productData={el} />)}
            </div>
        </>
    )
}

export default ProductList