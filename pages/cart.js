import React, { useContext } from 'react'
import { AvoContext } from './context/AvoContext'
const cart = () => {
    const { cart, setCart } = useContext(AvoContext);
    return (
        <>
            <div>cart</div>
            {cart.map((el) => <p>elemento del carro</p>)}
        </>
    )
}

export default cart