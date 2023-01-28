import React, { useContext } from 'react'
import { AvoContext } from './context/AvoContext'
import CartList from '@containers/Layout/CartList';
import CartItem from '@components/CartItem';
const cart = () => {
    const { cart, setCart } = useContext(AvoContext);
    return (
        <>
            <div>cart</div>
            {cart.map((el) => <CartItem />)}
            <hr />
            <div>
                <p>sub total: {"cantidad"}</p>
                <button>checkout</button>
            </div>
        </>
    )
}

export default cart