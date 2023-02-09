import React from "react";
import ProductCard from "@components/ProductCard";
import LoaderPage from "@components/LoaderPage";
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

      {productList.length > 0 ? (
        <div className="product-list">
          {productList.map((el) => (
            <ProductCard key={el.id} productData={el} />
          ))}
        </div>
      ) : (
        <LoaderPage />
      )}
    </>
  );
};

export default ProductList;
