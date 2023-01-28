import React, { useContext } from 'react'
import { AvoContext } from './context/AvoContext'
import CartList from '@containers/Layout/CartList';
import CartItem from '@components/CartItem';
import EmptyCart from '@components/EmptyCart';
const cart = () => {
    const { cart, setCart } = useContext(AvoContext);
    return (
        <>
            <style jsx>{`
            .subtotal {
                padding: 1rem;
                border-radius: .5rem;
                box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
                border: 1px solid rgba(34,36,38,.15);
                display: flex;
                justify-content: space-between;
                margin: 2rem 0;
            }           
            .subtotal p span {
                font-weight: bold;
            }
            .subtotal button {
                background-color: #1b1c1d;
                color: #fff;
                font-weight: bold;
                padding: .5rem 1rem;
                border-radius: .5rem;
                transition: all .2s ease-in-out;
                cursor: pointer;
                box-shadow: inset 0 0 0 0 rgb(34 36 38 / 15%);
                border:none;
            }
            .subtotal button:hover {
                background-color: #27292a;
                text-shadow: none;
            }
            
            `}</style>
            {cart.length > 0 ?
                cart.map((el) => <CartItem />)
                :
                <EmptyCart />}
            <hr />
            <div className='subtotal'>
                <p><span>Sub total:</span> {"cantidad"}</p>
                <button>checkout</button>
            </div>
        </>
    )
}

export default cart