import React from "react";
import Image from "next/image";
import Link from "next/link";
const CartItem = ({ itemInfo }) => {
  const data = itemInfo[0];
  const count = itemInfo.length;
  return (
    <div>
      <style jsx>{`
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .item-name {
          color: var(--color-link);
          font-size: 1.3rem;
        }
        .btn-remove-item {
          border: 1px solid #e8e8e8;
          cursor: pointer;
          padding: 1rem;
          background: transparent;
          border-radius: 0.5rem;
          width: 30px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.6);
        }
        .btn-remove-item:hover {
          box-shadow: inset 0 0 0 1px rgb(34 36 38 / 35%),
            inset 0 0 0 0 rgb(34 36 38 / 15%);
        }
      `}</style>

      <div className="cart-item">
        <Image src={data.image} alt={""} width={150} height={150} />
        <div className="cart-item-content">
          <Link href={`/product/${data.id}`} legacyBehavior>
            <a href="" className="item-name">
              {data.name}
            </a>
          </Link>
          <p className="item-count">
            {count} x {data.price}
          </p>
          <p>Some more information goes here....</p>
        </div>
        <button className="btn-remove-item">
          <span>&#x2716;</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
